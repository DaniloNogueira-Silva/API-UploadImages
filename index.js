const express = require('express');
const app = express();

require('dotenv').config();
require('./db');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})