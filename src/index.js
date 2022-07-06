const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql')
const myconn = require('express-myconnection')
const mainRouter = require("../src/routes/mainRoutes");



const dbOptions={
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'',
    database:'presupuesto_personal'
}

//middlewares------------------------------------------------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(cors());
app.use(express.json());

//routes------------------------------------------------


app.use("/",mainRouter);

//server runing-----------------------------------------

const port = 3008
app.set('port', process.env.PORT || port);
app.listen(app.get('port'),()=>{
    console.log('Server on port 3008')
})