"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _app = _interopRequireDefault(require("../app"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing endpoints', function () {
  it('should create  a book entry', function (done) {
    var book = {
      title: 'First awesome browser',
      price: "45",
      description: 'A practical guide to shutup'
    };

    _chai["default"].request(_app["default"]).post('/api/books/').set('Accept', 'application/json').send(book).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        title: book.title,
        price: book.price,
        description: book.description
      });
      done();
    });
  });
  it('should not create a book with incomplete data', function (done) {
    var book = {
      title: 'First awesome browser'
    };

    _chai["default"].request(_app["default"]).post('/api/books/').set('Accept', 'application/json').send(book).end(function (err, res) {
      expect(res.status).to.equal(401);
      done();
    });
  });
  it('should  get all books', function (done) {
    _chai["default"].request(_app["default"]).get('/api/books/').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('title');
      res.body.data[0].should.have.property('description');
      res.body.data[0].should.have.property('price');
      done();
    });
  });
  it('should  get a particular Book', function (done) {
    var bookId = 1;

    _chai["default"].request(_app["default"]).get("/api/books/".concat(bookId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(203);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('title');
      res.body.data.should.have.property('description');
      res.body.data.should.have.property('price');
      done();
    });
  });
  it('should not get a particular Book', function (done) {
    var bookId = 34;

    _chai["default"].request(_app["default"]).get("/api/books/".concat(bookId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql("Book with id ".concat(bookId, " cant be found 400"));
      done();
    });
  });
  it('should get a non int Id for update', function (done) {
    var bookId = 'ggg';
    var updateBook = {
      id: 'rer',
      title: 'Updated Awesome book again',
      price: '$11.99',
      description: 'We have updated the price'
    };

    _chai["default"].request(_app["default"]).put("/api/books/".concat(bookId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql("Please provide a parameter 400");
      done();
    });
  });
  it('should update a book', function (done) {
    var id = 1;
    var updateBook = {
      title: 'Updated Awesome book again',
      price: '$15.99',
      description: 'We have updated the price'
    };

    _chai["default"].request(_app["default"]).put("/api/books/".concat(id)).set('Accept', 'application/json').send(updateBook).end(function (err, res) {
      expect(res.status).to.equal(202);
      expect(res.body.data.title).to.equal(updateBook.title);
      expect(res.body.data.price).to.equal(updateBook.price);
      res.body.should.have.property('message');
      expect(res.body.data.description).to.equal(updateBook.description);
    });

    done();
  });
  it('should delete not book with a wrong id', function (done) {
    var id = 'rroi';

    _chai["default"].request(_app["default"])["delete"]("/api/books/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql('cant delete book 404');
      done();
    });
  });
  it('should delete a book successfully', function (done) {
    var id = 1;

    _chai["default"].request(_app["default"])["delete"]("/api/books/".concat(id)).set('Accept', 'application/json').end(function (err, res) {
      //res.should.have.property('message');
      expect(res.status).to.equal(204);
      expect(res.body.data).to.include({});
      done();
    });
  });
});
//# sourceMappingURL=test.js.map