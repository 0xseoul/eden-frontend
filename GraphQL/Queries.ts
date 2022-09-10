import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      _id
      wallet_address
      createdAt
    }
  }
`;

export const GET_AVATAR = gql`
  query getAvatar($token_id: Int!) {
    getAvatar(token_id: $token_id) {
      _id
      owner
      token_id
      hair {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      clothing {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      eyes {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      mouth {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      off_hand {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      skin {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      background {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      createdAt
      base_image_url
      overlapped_image_url
    }
  }
`;

export const GET_AVAT_AND_INVENTORY = gql`
  query GetAvatar($walletAddress: String!, $tokenId: Int!) {
    getAllClothes(wallet_address: $walletAddress) {
      image_url
      _id
      name
      hash_number
      type
      token_id
    }
    getAvatar(token_id: $tokenId) {
      _id
      owner
      token_id
      hair {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      clothing {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      eyes {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      mouth {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      off_hand {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      skin {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      background {
        _id
        name
        hash_number
        image_url
        type
        token_id
        createdAt
      }
      createdAt
      base_image_url
      overlapped_image_url
    }
  }
`;

export const GET_FILTERD_CLOTHES = gql`
  query FilterClothes($type: String, $walletAddress: String) {
    filterClothes(type: $type, wallet_address: $walletAddress) {
      _id
      name
      hash_number
      image_url
      type
      token_id
      createdAt
    }
  }
`;
