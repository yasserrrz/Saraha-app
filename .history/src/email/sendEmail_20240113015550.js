import nodemailer from 'nodemailer'

export const sendEmail = async () => {

    const transporter = nodemailer.createTransport({
        host: "g",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
          pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
        },
      });
}

