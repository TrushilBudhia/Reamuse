import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE = gql`
  mutation saveGameData($input: GameInformation) {
    saveGameData(input: $GameInformation) {
      token
      user {
        _id
        username
      }
      userAvatar
      gameCount
      savedGamesData {
        _id
        gameId
        score
        highScore
        highScoreDate
        playCount
      }
    }
  }
`;

