import { Worker } from "bullmq";
const REDIS_HOST = String(process.env.REDIS_HOST);
const REDIS_PORT = Number(process.env.REDIS_PORT);
const REDIS_USERNAME = String(process.env.REDIS_USERNAME);
const REDIS_PASSWORD = String(process.env.REDIS_PASSWORD);
import rootService from "../service/root.service";

const welcomeMailListWorker = new Worker(
  "welcome-mail-list-queue",
  async (job) => {
    const { email } = job.data.data;
    rootService.welcomeMailServer(email, job.id);
  },
  {
    connection: {
      host: REDIS_HOST,
      port: REDIS_PORT,
      username: REDIS_USERNAME,
      password: REDIS_PASSWORD,
    },
  },
);

const emailVerificationMailWorker = new Worker(
  "emailVerification-mail-list-queue",
  async (job) => {
    const { email, link } = job.data.data;
    rootService.emailVerificationService(email, link, job.id);
  },
  {
    connection: {
      host: REDIS_HOST,
      port: REDIS_PORT,
      username: REDIS_USERNAME,
      password: REDIS_PASSWORD,
    },
  },
);

const resetPasswordMailWorker = new Worker(
  "resetPassword-mail-list-queue",
  async (job) => {
    const { email, link } = job.data.data;
    rootService.resetPasswordService(email, link, job.id);
  },
  {
    connection: {
      host: REDIS_HOST,
      port: REDIS_PORT,
      username: REDIS_USERNAME,
      password: REDIS_PASSWORD,
    },
  },
);

export default {
  welcomeMailListWorker,
  emailVerificationMailWorker,
  resetPasswordMailWorker,
};
