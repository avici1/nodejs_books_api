export default class Util {

    constructor() {
        this.statusCode = null;
        this.type = null;
        this.message = null;
        this.data = null;
    }
    setSuccess(message, statusCode, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.type = 'success';
    }

    setError(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
        this.type = "Error";
    }
    send(res) {
        const result = {
            status: this.type,
            message: this.message,
            data: this.data
        };
        if (this.type === 'success') {
            return res.status(this.statusCode).json(result);
        } 
        return res.status(this.statusCode).json({
            status: this.type,
            message: this.message + ' ' + this.statusCode,
        });
    }
}
  
    
