"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Util =
/*#__PURE__*/
function () {
  function Util() {
    (0, _classCallCheck2["default"])(this, Util);
    this.statusCode = null;
    this.type = null;
    this.message = null;
    this.data = null;
  }

  (0, _createClass2["default"])(Util, [{
    key: "setSuccess",
    value: function setSuccess(message, statusCode, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';
    }
  }, {
    key: "setError",
    value: function setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = "Error";
    }
  }, {
    key: "send",
    value: function send(res) {
      var result = {
        status: this.type,
        message: this.message,
        data: this.data
      };

      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }

      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message + ' ' + this.statusCode
      });
    }
  }]);
  return Util;
}();

exports["default"] = Util;
//# sourceMappingURL=Util.js.map