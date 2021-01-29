const app = require('express')();
const { ApolloServer } = require('apollo-server-express');

app.get('/', (_, res) => {
    res.send("Hi");
});

const typeDefs = `
    type Query {
        hello: String!
        age: Int!
        book: Book!
        books: [Book!]!
    }

    type Book {
        title: String!
        author: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello World",
        age: () => {
            const curr_age = 13;
            return curr_age + 1;
        },
        book: () => {
            return {
                title: "Hello",
                author: "Om"
            }
        },
        books: () => {
            return [
                {
                    title: "Hello", 
                    author: "Om"
                },
                {
                    title: "Hi",
                    author: "Bob"
                },
                {
                    title: "Greeting",
                    author: "Billy"
                }
            ]
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(4000, () => {
    console.log(`Server started on http://localhost:4000${server.graphqlPath}`)
});