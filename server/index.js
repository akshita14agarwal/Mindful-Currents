import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'; //to handle POST API requests
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();
const app = express();

app.use(cors());  //used as fnx
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);




const port = 8000;
app.listen(port, () => console.log(`Server is running successfully on PORT ${port}`));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);