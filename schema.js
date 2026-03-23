const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    credits: Int!
  }

  type Query {
    students: [Student!]!
    student(id: ID!): Student
  }

  type Mutation {
    addStudent(name: String!, credits: Int!): Student!
  }
`;

module.exports = typeDefs;
