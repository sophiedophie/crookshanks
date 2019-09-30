import { ApolloServer, gql } from 'apollo-server-express';
// import typeDefs from '../../graphql/queries';
import resolvers from '../../graphql/resolvers';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
