const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/:age', (req, res) => {
    const age = parseInt(req.params.age);
    res.send(`${age + 1}`);
})

app.post('/new', (req, res) => {
    const data = req.body;
    const person = {
        name: data.name,
        age: data.age + 1
    };
    res.json(person);
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/')
});