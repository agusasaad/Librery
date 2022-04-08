const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes = require('./rutas.Routes');

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOption = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'',
    database: 'libreria'
}

//middleware
app.use(myconn(mysql, dbOption, 'single'));
app.use(express.json());
app.use(cors());


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my APP')
});

app.use('/libreria', routes);

//server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});