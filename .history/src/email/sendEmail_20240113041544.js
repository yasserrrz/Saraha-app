import nodemailer from 'nodemailer'
import emailTemp from './emailTemp';

export const sendEmail = async (email) => {

    const transporter = nodemailer.createTransport({
         service:"gmail",
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "yasserrmohammed44@gmail.com",
          pass: "kyeovwnxusfwhiye",
        },
      });


      const info = await transporter.sendMail({
        from: '"SendEmail  Nodejs" <yasserrmohammed44@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        html: emailTemp(email), // html body
      });
      console.log("Message sent: %s", info.messageId);
}

