import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($wallet_address: String!) {
    createUser(wallet_address: $wallet_address) {
      wallet_address
      holding_nfts
      isAdmin
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($wallet_address: String!) {
    loginUser(wallet_address: $wallet_address) {
      wallet_address
      holding_nfts {
        _id
        token_id
        base_image_url
        overlapped_image_url
      }
      isAdmin
    }
  }
`;
// mutation Mutation($wallet_address: String!) {
//   createUser(wallet_address: $walletAddress) {
//     wallet_address
//     _id
//     createdAt
//   }
// }
