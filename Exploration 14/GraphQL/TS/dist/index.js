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
const HelloResolver_1 = require("./resolvers/HelloResolver");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [
            HelloResolver_1.HelloResolver
        ]
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema
    });
    server.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log(`Server started on http://localhost:4000${server.graphqlPath}`);
    });
});
start();
//# sourceMappingURL=index.js.map