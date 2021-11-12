import express from "express";
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import sharp from 'sharp';
import fs from 'fs';

dotenv.config({
    path: './server/.env'
});
import './core/db';
import { passport } from './core/passport';

const port = 3001;
const app = express();
const upload = multer({
    storage: multer.diskStorage({
        destination(_, __, cb) {
            cb(null, 'static/avatars');
        },
        filename(_, file, cb) {
            cb(null, file.fieldname + '-' + Math.random().toString(32) + '.' + file.mimetype.split('/').pop());
        }
    })
})

app.use(cors())
app.use(passport.initialize())

app.post("/upload", upload.single('photo') , (req, res) => {
    if(req.file && req.file?.path) {
        const filePath = req.file.path
        sharp(filePath).resize(200, 200).toFormat('jpg').toFile(filePath.replace('png', 'jpg'), (err) => {
            if(err) {
                throw err;
            }
            fs.unlinkSync(filePath);
            res.json({
                url: `./avatars/${req.file?.filename.replace('png', 'jpg')}`,
            });
        });
    }

});

app.get("/auth/vkontakte", passport.authenticate("vkontakte"));
app.get(
    "/auth/vkontakte/callback",
    passport.authenticate("vkontakte", {
        failureRedirect: "/login",
    }), (req, res) => {

        res.send(`
        <script>
        window.opener.postMessage('${JSON.stringify(req.user)}', '*');
        window.close();
        </script>
        `)

    }
);
// app.get('/', (req, res) => {
//     res.send(req.user)
// })




app.listen(port, () => {
    console.log(`Server running in ${port} port`);

})