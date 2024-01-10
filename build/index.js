"use strict";

require("express-async-errors");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _config = _interopRequireDefault(require("./config.js"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _nodeHttps = _interopRequireDefault(require("node:https"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _helmet = _interopRequireDefault(require("helmet"));
var _cors = _interopRequireDefault(require("cors"));
var _GenericErrorHandler = _interopRequireDefault(require("./middlewares/GenericErrorHandler.js"));
var _ApiError = _interopRequireDefault(require("./error/ApiError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const envPath = _config.default?.production ? "./env/.prod" : "./env/.dev";
_dotenv.default.config({
  path: envPath
});
const app = (0, _express.default)();
app.use((0, _morgan.default)(process.env.LOGGER)); //

app.use((0, _helmet.default)());
app.use((0, _cors.default)({
  origin: "*"
}));
app.use(_express.default.json({
  limit: "1mb"
})); //

app.use(_express.default.urlencoded({
  extended: true
}));
app.use("/", (req, res) => {
  throw new _ApiError.default("Bir Hata oluştu", 404, "Bulunamadı");
});
app.use(_GenericErrorHandler.default);
if (process.env.HTTPS_ENABLED === "true") {
  const key = _nodeFs.default.readFileSync(_nodePath.default.join(__dirname, "./certs/key.pem")).toString();
  const cert = _nodeFs.default.readFileSync(_nodePath.default.join(__dirname, "./certs/cert.pem")).toString();
  const server = _nodeHttps.default.createServer({
    key: key,
    cert: cert
  }, app);
  server.listen(process.env.PORT, () => {
    console.log(`Server listen on ${process.env.PORT} port`);
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log(`Server listen on ${process.env.PORT} port`);
  });
}