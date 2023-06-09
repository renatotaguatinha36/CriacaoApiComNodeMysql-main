require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use('/api', routes);

server.listen(3001,()=>{
    console.log(`Servidor rodando em: http://localhost: 3000`);
});

