import { Worker } from "bullmq";
const REDIS_HOST = String(process.env.REDIS_HOST);
const REDIS_PORT = Number(process.env.REDIS_PORT);
const REDIS_USERNAME = String(process.env.REDIS_USERNAME);
const REDIS_PASSWORD = String(process.env.REDIS_PASSWORD);

const welcomeMailListWorker = new Worker(
  "welcome-mail-list-queue",
  async (job) => {
    console.log("welcome mail data: ", job);
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
    console.log("emailVerification-mail-list-queue data", job.data);
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
};
