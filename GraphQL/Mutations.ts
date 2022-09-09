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
  mutation loginUser(
    $wallet_address: String!
    $signature: [String!]
    $signMessage: String!
  ) {
    loginUser(
      wallet_address: $wallet_address
      signature: $signature
      signMessage: $signMessage
    ) {
      wallet_address
      holding_avatars {
        _id
        token_id
        base_image_url
        overlapped_image_url
      }
      holding_clothes {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
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
