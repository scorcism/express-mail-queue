import nodemailer from "nodemailer";
const { SMTP_USER, SMTP_PASSWORD } = process.env;
import logger from "./logger";

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
        logger.error(
          `Mail send Error to [User: ${userEmail}] [Subject: ${subject}] error: ${error}`,
        );
      } else {
        logger.info(
          `Mail send to [User: ${userEmail}] [Subject: ${subject}] [response info: ${info.response}]`,
        );
      }
    });
  } catch (error) {
    logger.error(`Mail send Error: ${error}`);
  }
};

export default sendMail;
