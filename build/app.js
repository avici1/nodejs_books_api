"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _BookRoutes = _interopRequireDefault(require("./server/routes/BookRoutes"));

// import config from 'dotenv';
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/api/books', _BookRoutes["default"]);
var port = process.env.PORT || 8001;
app.get('/home', function (req, res) {
  return res.status(200).send({
    message: "Welcome to the API"
  });
}); // app.get('/all/',)

app.listen(port, function () {
  console.log("We are running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map