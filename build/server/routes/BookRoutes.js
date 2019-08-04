"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BookController = _interopRequireDefault(require("../controllers/BookController"));

var router = (0, _express.Router)();
router.get('/', _BookController["default"].getAllBook);
router.post('/', _BookController["default"].AddBooks);
router.get('/:id', _BookController["default"].findOneBook);
router.put('/:id', _BookController["default"].UpdateBooks);
router["delete"]('/:id', _BookController["default"].deleteOneBook);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=BookRoutes.js.map