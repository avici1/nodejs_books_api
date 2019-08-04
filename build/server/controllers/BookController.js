"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _BookService = _interopRequireDefault(require("../services/BookService"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var BookController =
/*#__PURE__*/
function () {
  function BookController() {
    (0, _classCallCheck2["default"])(this, BookController);
  }

  (0, _createClass2["default"])(BookController, null, [{
    key: "getAllBook",
    value: function () {
      var _getAllBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allBooks;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _BookService["default"].getAllBooks();

              case 3:
                allBooks = _context.sent;

                if (allBooks.length > 0) {
                  util.setSuccess("Books found", 200, allBooks);
                } else {
                  util.setSuccess('Books Not Found', 200);
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllBook(_x, _x2) {
        return _getAllBook.apply(this, arguments);
      }

      return getAllBook;
    }()
  }, {
    key: "AddBooks",
    value: function () {
      var _AddBooks = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newBook, addBook;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(!req.body.title || !req.body.price || !req.body.description)) {
                  _context2.next = 6;
                  break;
                }

                util.setError(401, 'Please provide accurate data');
                return _context2.abrupt("return", util.send(res));

              case 6:
                newBook = req.body;
                _context2.next = 9;
                return _BookService["default"].addBook(newBook);

              case 9:
                addBook = _context2.sent;
                util.setSuccess('Book Added', 201, addBook);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function AddBooks(_x3, _x4) {
        return _AddBooks.apply(this, arguments);
      }

      return AddBooks;
    }()
  }, {
    key: "UpdateBooks",
    value: function () {
      var _UpdateBooks = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var alteredBook, id, updateBook;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredBook = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 7;
                  break;
                }

                util.setError(400, 'Please provide a parameter');
                return _context3.abrupt("return", util.send(res));

              case 7:
                _context3.prev = 7;
                _context3.next = 10;
                return _BookService["default"].updateBook(id, alteredBook);

              case 10:
                updateBook = _context3.sent;

                if (updateBook) {
                  _context3.next = 16;
                  break;
                }

                util.setError(404, "cant update book with ".concat(id));
                return _context3.abrupt("return", util.send(res));

              case 16:
                util.setSuccess("updated book with ".concat(id, " to ").concat(alteredBook), 202, updateBook);
                return _context3.abrupt("return", util.send(res));

              case 18:
                _context3.next = 24;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](7);
                util.setError(400, "An error occured ".concat(_context3.t0.message));
                return _context3.abrupt("return", util.send(res));

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 20]]);
      }));

      function UpdateBooks(_x5, _x6) {
        return _UpdateBooks.apply(this, arguments);
      }

      return UpdateBooks;
    }()
  }, {
    key: "findOneBook",
    value: function () {
      var _findOneBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, oneBook;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 6;
                  break;
                }

                util.setError(400, 'please provide a valid parameter');
                return _context4.abrupt("return", util.send(res));

              case 6:
                _context4.prev = 6;
                _context4.next = 9;
                return _BookService["default"].getBook(id);

              case 9:
                oneBook = _context4.sent;

                if (oneBook) {
                  _context4.next = 15;
                  break;
                }

                util.setError(400, "Book with id ".concat(id, " cant be found"));
                return _context4.abrupt("return", util.send(res));

              case 15:
                util.setSuccess("Book with id ".concat(id, " found sucessfully"), 203, oneBook);
                return _context4.abrupt("return", util.send(res));

              case 17:
                _context4.next = 23;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](6);
                util.setError(400, "An occured ".concat(_context4.t0.message));
                return _context4.abrupt("return", util.send(res));

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[6, 19]]);
      }));

      function findOneBook(_x7, _x8) {
        return _findOneBook.apply(this, arguments);
      }

      return findOneBook;
    }()
  }, {
    key: "deleteOneBook",
    value: function () {
      var _deleteOneBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, deletedBook;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (!(Number(id) == null)) {
                  _context5.next = 6;
                  break;
                }

                util.setError(404, 'please provide a valid parameter');
                return _context5.abrupt("return", util.send(res));

              case 6:
                _context5.prev = 6;
                _context5.next = 9;
                return _BookService["default"].deleteBook(id);

              case 9:
                deletedBook = _context5.sent;

                if (deletedBook) {
                  _context5.next = 15;
                  break;
                }

                util.setError(404, "Book with id ".concat(id, " not deleted"));
                return _context5.abrupt("return", util.send(res));

              case 15:
                util.setSuccess("Book with id ".concat(id, " added sucessfully"), 204, deletedBook);
                return _context5.abrupt("return", util.send(res));

              case 17:
                _context5.next = 23;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5["catch"](6);
                util.setError(404, "cant delete book");
                return _context5.abrupt("return", util.send(res));

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[6, 19]]);
      }));

      function deleteOneBook(_x9, _x10) {
        return _deleteOneBook.apply(this, arguments);
      }

      return deleteOneBook;
    }()
  }]);
  return BookController;
}();

var _default = BookController;
exports["default"] = _default;
//# sourceMappingURL=BookController.js.map