//import data from './src/testData.json' assert { type: 'json' };

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

const testData = {
    title: "TestBook01",
    price: 10
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const data = require('./src/testData.json')

app.get('/data', (req, res) => {
    res.json(data);
});

app.get('/data/1', (req, res) => {
    res.json(data.books[0]);
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});