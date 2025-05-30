

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

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    if (!data.books[id]) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(data.books[id]);
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});