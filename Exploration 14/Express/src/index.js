const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = [];

app.get('/', (req, res) => {
    res.send('Get All users at /all');
})

app.get('/all', (req, res) => {
    res.json(users);
})

app.post('/create', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    users.push(user);
    res.json(user);
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000/')
})