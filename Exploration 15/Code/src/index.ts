import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { HelloWorldResolver } from './resolvers/HelloWorldResolver';

const app = express();

// export type Author = {
//     first: string,
//     last: string
// }

// export type Book = {
//     title: string,
//     author: Author
// }

// export const books: Array<Book> = [];

const start = async () => {
    app.get('/', (_, res) => {
        res.send('Go to <a href="/graphql">GraphQL</a>')
    })

    await createConnection()
        .then(() => console.log('Connected to Data'))
        .catch(e => console.log(e))

    const schema = await buildSchema({
        resolvers: [
            HelloWorldResolver
        ]
    });

    const server = new ApolloServer({
        schema
    });

    server.applyMiddleware({ app });


    app.listen(4000, () => {
        console.log('Server started at http://localhost:4000/graphql');
    })
};

start();