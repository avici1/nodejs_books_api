import BookService from '../services/BookService';
import Util from '../utils/Util';

const util = new Util();
class BookController {
    static async getAllBook(req, res) {
        try {
            const allBooks = await BookService.getAllBooks();
            if (allBooks.length > 0) {
                util.setSuccess("Books found",200, allBooks);
            } else {
                util.setSuccess('Books Not Found',200);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);

        }
    }
    static async AddBooks(req, res) {
        try {
            if (!req.body.title || !req.body.price || !req.body.description) {
                util.setError(401, 'Please provide accurate data');
                return util.send(res);
            } else {
                const newBook = req.body;
                const addBook = await BookService.addBook(newBook);
                util.setSuccess('Book Added', 201, addBook);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async UpdateBooks(req, res) {
        const alteredBook = req.body;
        const { id } = req.params;
        if (!Number(id)) {
            util.setError(400, 'Please provide a parameter');
            return util.send(res);
        } else {
            try {
                const updateBook = await BookService.updateBook(id, alteredBook);
                if (!updateBook) {
                    util.setError(404, `cant update book with ${id}`);
                    return util.send(res);
                } else {
                    util.setSuccess(`updated book with ${id} to ${alteredBook}`,202 , updateBook);
                    return util.send(res);
                }
            } catch (error) {
                util.setError(400, `An error occured ${error.message}`);
                return util.send(res);
            }
        }
    }

    static async findOneBook(req, res) {
        const { id } = req.params;
        if (!Number(id)) {
            util.setError(400, 'please provide a valid parameter');
            return util.send(res);
        } else {
            try {
                const oneBook = await BookService.getBook(id);
                if (!oneBook) {
                    util.setError(400, `Book with id ${id} cant be found`);
                    return util.send(res);
                } else {
                    util.setSuccess(`Book with id ${id} found sucessfully`,203, oneBook);
                    return util.send(res);
                }
            } catch (error) {
                util.setError(400, `An occured ${error.message}`);
                return util.send(res);
            }
        }
    }
    static async deleteOneBook(req, res) {
       const { id } = req.params;
        if (Number(id) == null) {
            util.setError(404, 'please provide a valid parameter');
            return util.send(res);
        } else {
            try {
                const deletedBook = await BookService.deleteBook(id);
                if (!deletedBook) {
                    util.setError(404, `Book with id ${id} not deleted`);
                    return util.send(res);
                } else {
                    util.setSuccess(`Book with id ${id} added sucessfully`,204,deletedBook);
                    return util.send(res);
                }
            } catch (error) {
                util.setError(404,`cant delete book`);
                return util.send(res);
            }
        }
    }
}

export default BookController;