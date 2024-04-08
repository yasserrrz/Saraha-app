import nodemailer from 'nodemailer'

export const sendEmail = async () => {

    const transporter = nodemailer.createTransport({
         service:"gmail",
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "yasserrmohammed44@gmail.com",
          pass: "kyeovwnxusfwhiye",
        },
      });


      const info = await transporter.sendMail({
        from: '"Frist Send Email From Nodejs" <yasserrmohammed44@gmail.com>', // sender address
        to: "yasserm3bed98@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: emailTemp, // html body
      });
      console.log("Message sent: %s", info.messageId);
}

