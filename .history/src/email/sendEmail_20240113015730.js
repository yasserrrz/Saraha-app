import nodemailer from 'nodemailer'

export const sendEmail = async () => {

    const transporter = nodemailer.createTransport({
        host: "gmail",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "yasserrmohammed44@gmail.com",
          pass: "",
        },
      });
}

