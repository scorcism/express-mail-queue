import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

/**
 * Log Levels
 *{
   error: 0,
   warn: 1,
   info: 2,
   http: 3,
   verbose: 4,
   debug: 5,
   silly: 6
}
 *  */

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const winstonTransports = [];

const consoleTransport = new winston.transports.Console({
  stderrLevels: ["error"],
});

winstonTransports.push(consoleTransport);

const winstonFormat = winston.format.combine(
  enumerateErrorFormat(),
  winston.format.splat(),
  winston.format.timestamp({ format: "DD-MMM-YYYY HH:mm:ss" }),
  winston.format.metadata({ fillExcept: ["message", "level", "timestamp"] }),
  winston.format.printf(({ timestamp, level, message, metadata }) => {
    return `${timestamp} ${level}: ${
      typeof message === "string" ? message : JSON.stringify(message)
    } ${Object.keys(metadata).length ? JSON.stringify(metadata) : ""}`;
  }),
);

const fileTransportRotation: DailyRotateFile = new DailyRotateFile({
  filename: "./memories_mail_logs/%DATE%",
  datePattern: "DD-MMM-YYYY",
  zippedArchive: true,
  utc: true,
  extension: ".log",
  maxSize: "10mb",
  maxFiles: "14d",
});

winstonTransports.push(fileTransportRotation);

const logger = winston.createLogger({
  level: String(process.env.LOG_LEVEL) || "error",
  format: winstonFormat,
  transports: winstonTransports,
});

export default logger;
