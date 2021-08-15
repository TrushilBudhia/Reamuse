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
  mutation saveGameData($input: GameInformation!) {
    saveGameData(input: $input) {
      _id
      username
      email
      userAvatar
      gameCount
      savedGamesData {
        gameId
        score
        highScore
        highScoreDate
        playCount
      }
    }
  }
`;

