import axios from "axios";
const url = "http://localhost:4000/graphql";

const getUser = async () => {
  const query = `
  query GetAllUsers {
    getAllUsers {
      _id
      wallet_address
      createdAt
      isAdmin
    }
  }
  `;

  const data = await axios.post(url, { query });
  return data.data.data.getAllUsers;
};

const searchClothes = async (keyword: string, walletAddress: string) => {
  const query = `
  query GetAllUsers($keyword: String, $walletAddress: String) {
    searchClothes(keyword: $keyword, wallet_address: $walletAddress) {
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
  const data = await axios.post(url, {
    query,
    variables: { keyword, walletAddress },
  });
  return data.data.data.searchClothes;
};

export const api = {
  searchClothes,
  getUser,
};
