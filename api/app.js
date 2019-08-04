// import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import BookRoutes from  './server/routes/BookRoutes';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/books',BookRoutes);
const port = process.env.PORT || 8001;

app.get('/home',(req,res) => res.status(200).send({
    message:"Welcome to the API"
}));    
// app.get('/all/',)
app.listen(port,()=>{
    console.log(`We are running on port ${port}`);
})

export default app;