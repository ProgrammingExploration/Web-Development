import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.send('Hi');
})

app.get('/:id', (req, res) => {
    const id: number = parseInt(req.params.id);
    res.send(`Your id is ${id}`);
})

type Data = {
    name: string;
    age: number;
}

app.post('/', (req, res) => {
    const data: Data = req.body;
    res.send(`Your name is ${data.name} and you are ${data.age} years old`);
});

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000/');
});