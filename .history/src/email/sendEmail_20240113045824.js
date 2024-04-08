import nodemailer from 'nodemailer'
import emailTemp from './emailTemp.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve('../')})
export const sendEmail = async (email , name) => {

    const transporter = nodemailer.createTransport({
         service:"gmail",
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "yasserrmohammed44@gmail.com",
          pass: "kyeovwnxusfwhiye",
        },
      });
      const token =  jwt.sign(email ,  process.env.PRIVATE_KEY)

      const info = await transporter.sendMail({
        from: '"SendEmail  Nodejs" <yasserrmohammed44@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        html: emailTemp(email , name), // html body
      });
      console.log("Message sent: %s", info.messageId);
}

