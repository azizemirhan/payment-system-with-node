"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logFile = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// logları oluşturur

const _dirname = new _url.URL('.', import.meta.url).pathname;
const logFile = (filename, data) => {
  const dir = _path.default.join(_dirname, `../logs/${filename}.json`);
  const writeData = JSON.stringify(data, null, 4);
  _fs.default.writeFileSync(dir, writeData);
};
exports.logFile = logFile;
logFile("test", {
  test: 1,
  name: "Can"
});