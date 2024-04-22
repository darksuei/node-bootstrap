import { type IncomingMessage } from "http";
import morgan from "morgan";

import logger from "./logger.config";

const morganStream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};

// Define a custom token for Morgan. (to log remote address)
morgan.token("remote-addr", function (req: IncomingMessage): string {
  // incase of reverse proxy or load balancer
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0];
  }
  return req.socket.remoteAddress ?? "";
});

// Define a custom format string for Morgan. (to ignore timestamp... winston already does that)
morgan.format(
  "custom_request_log_format",
  ':method ":url" :status "Referer :referrer" - :response-time ms - (remote :remote-addr)'
);

export default morgan("custom_request_log_format", { stream: morganStream });
