const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.send('Hi');
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`${id + 1}`);
})

app.post('/user', (req, res) => {
    console.log(req.body.name);
    res.send("Post Succeeded");
})

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000/');
});