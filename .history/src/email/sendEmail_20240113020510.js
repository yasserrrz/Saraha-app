import nodemailer from 'nodemailer'

export const sendEmail = async () => {

    const transporter = nodemailer.createTransport({
        host: "gmail",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "yasserrmohammed44@gmail.com",
          pass: "kyeovwnxusfwhiye",
        },
      });


      const info = await transporter.sendMail({
        from: '"" <yasserrmohammed44@gmail.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);
}

