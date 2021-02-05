"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const HelloWorldResolver_1 = require("./resolvers/HelloWorldResolver");
const app = express_1.default();
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/', (_, res) => {
        res.send('Go to <a href="/graphql">GraphQL</a>');
    });
    yield typeorm_1.createConnection()
        .then(() => console.log('Connected to Data'))
        .catch(e => console.log(e));
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [
            HelloWorldResolver_1.HelloWorldResolver
        ]
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema
    });
    server.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log('Server started at http://localhost:4000/graphql');
    });
});
start();
//# sourceMappingURL=index.js.map