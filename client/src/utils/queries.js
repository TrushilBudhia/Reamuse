import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      userAvatar
      gameCount
      savedGamesData {
        gameId
        gameTitle
        score
        highScore
        highScoreDate
        playCount
      }
    }
  }
`;
