import { createModule, gql } from "graphql-modules";
import * as resolvers from "./module-test.mjs";
import { createApplication } from "graphql-modules";
const typeDefs = gql`
  type Mutation {
    sendMessage(message: String!): Message!
  }

  type Message {
    id: ID!
    body: String!
  }
`;
const mod = createModule({
  id: "test-module",
  typeDefs,
  resolvers,
});
const application = createApplication({
  modules: [mod],
});
console.log({ application });
