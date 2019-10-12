import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    getBooks: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    getBooks: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
