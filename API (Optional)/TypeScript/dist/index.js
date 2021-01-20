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
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Your id is ${id}`);
});
app.post('/', (req, res) => {
    const data = req.body;
    res.send(`Your name is ${data.name} and you are ${data.age} years old`);
});
app.listen(5000, () => {
    console.log('Server started on http://localhost:5000/');
});
//# sourceMappingURL=index.js.map