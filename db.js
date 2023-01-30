const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function connection() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@uploadimage.spebzjt.mongodb.net/?retryWrites=true&w=majority`);

    console.log(`Conectado com sucesso`)
}

connection().catch((err) => console.log(err));

module.exports = connection;