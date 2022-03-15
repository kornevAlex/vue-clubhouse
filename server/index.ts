import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { passport } from './core/passport';
import { upload } from "./core/uploader";
import AuthController from "./controllers/AuthController";
import './core/db';

dotenv.config({
    path: './server/.env'
});


const port = 3001;
const app = express();

app.use(cors())
app.use(passport.initialize())

app.post("/upload", upload.single('photo') , AuthController.loadPhoto);

app.get("/auth/vkontakte", passport.authenticate("vkontakte"));

app.get("/auth/me", passport.authenticate("jwt", {session: false}), AuthController.getMe);

app.get("/auth/vkontakte/callback", 
    passport.authenticate("vkontakte", { failureRedirect: "/login" }), 
    AuthController.authCallback
);

app.post('/auth/phone', passport.authenticate('jwt', { session: false }), AuthController.sendSMS)

app.post('/auth/phone/activate', passport.authenticate('jwt', { session: false }), AuthController.activate)

app.listen(port, () => {
    console.log(`Server running in ${port} port`);

})