import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../app';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing endpoints', () => {
    it('should create  a book entry', (done) => {
        const book = {
            title: 'First awesome browser',
            price: "45",
            description: 'A practical guide to shutup'
        };
        chai.request(app)
            .post('/api/books/')
            .set('Accept', 'application/json')
            .send(book)
            .end((err, res) => {
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

    it('should not create a book with incomplete data', (done) => {
        const book = {
            title: 'First awesome browser',
        };
        chai.request(app)
            .post('/api/books/')
            .set('Accept', 'application/json')
            .send(book)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                done();
            });
        
    });

    it('should  get all books', (done) => {
        chai.request(app)
            .get('/api/books/')
            .set('Accept','application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.data[0].should.have.property('id');
                res.body.data[0].should.have.property('title');
                res.body.data[0].should.have.property('description');
                res.body.data[0].should.have.property('price');
                done();
            });
    });

    it('should  get a particular Book', (done) => {
        const bookId = 1;
        chai.request(app)
            .get(`/api/books/${bookId}`)
            .set('Accept','application/json')
            .end((err, res) => {
                expect(res.status).to.equal(203);
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('title');
                res.body.data.should.have.property('description');
                res.body.data.should.have.property('price');
                done();
            });
    });
    it('should not get a particular Book', (done) => {
        const bookId = 34;
        chai.request(app)
            .get(`/api/books/${bookId}`)
            .set('Accept','application/json')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property('message')
                                    .eql(`Book with id ${bookId} cant be found 400`);
                done();
            });
    });
    it('should get a non int Id for update', (done) => {
        const bookId = 'ggg';
        const updateBook = {
            id: 'rer',
            title: 'Updated Awesome book again',
            price: '$11.99',
            description: 'We have updated the price'
        };
        chai.request(app)
            .put(`/api/books/${bookId}`)
            .set('Accept','application/json')
            .end((err, res) => {
            expect(res.status).to.equal(400);
            res.body.should.have.property('message')
                           .eql(`Please provide a parameter 400`);
                done();
            });
    });
    it('should update a book', (done) =>{
        const id =1;
        const updateBook = {

            title: 'Updated Awesome book again',
            price: '$15.99',
            description: 'We have updated the price'
        };
        chai.request(app)
            .put(`/api/books/${id}`)
            .set('Accept','application/json')
            .send(updateBook)
            .end((err,res) =>{
                expect(res.status).to.equal(202);
                expect(res.body.data.title).to.equal(updateBook.title);
                expect(res.body.data.price).to.equal(updateBook.price);
                res.body.should.have.property('message');
                expect(res.body.data.description).to.equal(updateBook.description);
            });
            done();
    })
    it('should delete not book with a wrong id', (done) => {
        const id = 'rroi';
        chai.request(app)
            .delete(`/api/books/${id}`)
            .set('Accept','application/json')
            .end((err, res) => {
            expect(res.status).to.equal(404);
            res.body.should.have.property('message')
                                .eql('cant delete book 404');
                done();
            });
    });
    it('should delete a book successfully',(done) =>{
        const id =  1;
        chai.request(app)
            .delete(`/api/books/${id}`)
            .set('Accept','application/json')
            .end((err,res) =>{
                //res.should.have.property('message');
                expect(res.status).to.equal(204);
                expect(res.body.data).to.include({});
                done();
            });
    });
});