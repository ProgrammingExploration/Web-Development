"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.get('/', (_, res) => {
    res.send('Hi');
});
app.get('/:age', (req, res) => {
    const age = parseInt(req.params.age);
    res.send(`${age + 1}`);
});
app.post('/new', (req, res) => {
    const data = req.body;
    const person = {
        name: data.name,
        age: data.age
    };
    res.json(person);
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000/');
});
//# sourceMappingURL=index.js.map