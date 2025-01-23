import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser' 

dotenv.config()

const port = process.env.PORT;

const app = express();

app.use(express.json());


app.listen(PORT, () => {
  console.log("Began server on port ", PORT);
});