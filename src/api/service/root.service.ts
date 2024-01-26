import logger from "../../config/logger";
import mails from "../../helpers/mails";

const welcomeMailServer = (email: string, jobId: string) => {
  try {
    logger.info(`Working on ${jobId} Job welcomeMailServer`);
    mails.welcomeMail(email);
  } catch (error) {
    logger.error(`Welcome mail send error:  ${error}`);
  }
};

const emailVerificationService = (
  email: string,
  link: string,
  jobId: string,
) => {
  try {
    logger.info(`Working on ${jobId} Job emailVerificationService`);
    mails.verificationMail(email, link);
  } catch (error) {
    logger.error(`Verification maill send error: ${error}`);
  }
};

const resetPasswordService = (email: string, link: string, jobId: string) => {
  try {
    logger.info(`Working on ${jobId} Job resetPasswordService`);
    mails.resetPasswordMail(email, link);
  } catch (error) {
    logger.error(`Verification maill send error: ${error}`);
  }
};

export default {
  welcomeMailServer,
  emailVerificationService,
  resetPasswordService,
};
