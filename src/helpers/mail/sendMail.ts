import nodemailer from "nodemailer";
const { SMTP_USER, SMTP_PASSWORD } = process.env;

const sendMail = (userEmail: string, subject: string, content: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true in prod
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOption = {
      from: SMTP_USER,
      to: userEmail,
      subject: subject,
      html: content,
    };

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.error("Mail send eror: ", error);
      } else {
        console.info(`Mail sent to ${userEmail}:${info.response}`);
      }
    });
  } catch (error) {
    console.error("Mail send eror: ", error);
  }
};

module.exports = sendMail;
