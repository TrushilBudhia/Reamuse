const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    userAvatar: String
    gameCount: Int
    savedGamesData: [Game]
  }

  type Game {
    gameId: String!
    score: Int
    highScore: Int
    highScoreDate: String
    playCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input GameInformation {
    gameId: String!
    score: Int
    highScore: Int
    highScoreDate: String
    playCount: Int
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGameData(input: GameInformation): User
    removeGameData(gameId: String!): User
  }
`;

module.exports = typeDefs;
