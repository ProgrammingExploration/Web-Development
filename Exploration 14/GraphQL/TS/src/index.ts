import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { HelloResolver } from './resolvers/HelloResolver';

const start = async () => {
    const app = express(); 

    const schema = await buildSchema({
        resolvers: [
            HelloResolver
        ]
    })

    const server = new ApolloServer({
        schema
    });

    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`Server started on http://localhost:4000${server.graphqlPath}`);
    });
}

start();