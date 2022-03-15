import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import axios from "axios";
import { Code, User } from "../../models";
import generateRandomCode from '../utils/generateRandomCode';

class AuthController {
    getMe(req: express.Request, res: express.Response) {
        res.json({
            result: 'OK',
            status: 200,
            ...req.user
        })
    }

    authCallback(req: express.Request, res: express.Response) {
        res.send(`
        <script>
        window.opener.postMessage('${JSON.stringify(req.user)}', '*');
        window.close();
        </script>
        `)
    }

    async activate(req: express.Request, res: express.Response) {
        const userId = req.user && req.user.id;
        const smsCode = req.query.code;
        const whereQuery = { code: smsCode, user_id: userId }
        
    
        if(!smsCode) return res.status(500).json({
            message: "server can't handle your request",
            status: 500, 
            result: "BAD REQUEST"
        });
        
        try {
            const findUser = await Code.findOne({
                where: whereQuery
            })
            if (findUser) { 
                await Code.destroy({ 
                    where: whereQuery
                }) ;
                await User.update({
                    isActive: 1
                }, {
                    where: {
                        id: userId
                    }
                })
                res.status(201).json({
                    status: 201,
                    isActive: true,
                    result: "OK"
                });
            } else {
                throw new Error('User not found')
            }
            
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                status: 500,
                result: "BAD REQUEST",
                message: "Error at activation account",
                error
            })
        }
    }

    loadPhoto(req: express.Request, res: express.Response){
        if(req.file && req.file?.path) {
            
            const filePath = req.file.path;
            sharp(filePath).resize(200, 200).jpeg({
                quality:80  
            }).toFile(filePath.replace('photo', 'photo-res'), (err) => {
                if(err) {
                    throw err;
                }
                fs.unlinkSync(filePath);
                res.json({
                    status: 200,
                    result: "OK",
                    url: `./avatars/${req.file?.filename.replace('photo', 'photo-res')}`,
                });
            });

        }
    
    }

    async sendSMS(req: express.Request, res: express.Response) {

        const phone = req.query.phone;
        const userId = req.user && req.user.id;
        const smsCode = generateRandomCode();
        
        if(!phone) return res.status(500).json({
            message: "Phone number doesn't received",
            result: "BAD REQUEST",
            status: 500
        });
        
        const findPhoneUser = await User.findOne({
            where: {
                phone
            }
        })

        if(findPhoneUser) return res.status(500).json({
            message: "Phone number already registry",
            result: "BAD REQUEST",
            status: 500
        })

        try {
            const findCode = await Code.findOne({
                where: {
                    user_id: userId
                }
            })

            if (findCode) {
                return res.status(400).json({
                    result: "BAD REQUEST",
                    message: "Code already sent on that number"
                })
            }

            
            console.log(process.env.SMS_API_KEY, phone, smsCode);
            
            const smsRequest = axios.get(`https://sms.ru/sms/send?api_id=${process.env.SMS_API_KEY}&to=${phone}&msg=${smsCode}&json=1`)
            
            await Code.create({
                code: smsCode,
                user_id: userId
            })

            await User.update({
                phone
            }, {
                where: {
                    id: userId
                }
            })

            res.status(201).json({
                result: "OK",
                status: 201,
                ...smsRequest
            })
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                result: 'BAD REQUEST',
                status: 500,
                message: "Error when sending SMS",
                error
            })
        }
    }
}

export default new AuthController();