import bodyParser from "body-parser";
import express from "express";

const app = express();

// Types
type Person = {
    name: string;
    age: number;
}

app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.send('Hi');
});

app.get('/:age', (req, res) => {
    const age = parseInt(req.params.age);
    res.send(`${age + 1}`);
});

app.post('/new', (req, res) => {
    const data: Person = req.body;
    const person: Person = {
        name: data.name,
        age: data.age
    };
    res.json(person);
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000/');
});