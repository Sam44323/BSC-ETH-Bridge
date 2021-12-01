import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "loggers.log" }),
  ],
  format: winston.format.simple(),
});

export default logger;
