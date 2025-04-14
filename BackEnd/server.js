//import data from './src/testData.json' assert { type: 'json' };

const express = require('express');
const app = express();
const PORT = 3000;

const testData = {
    title: "TestBook01",
    price: 10
}

const data = require('./src/testData.json')

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});