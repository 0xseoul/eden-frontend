import axios from "axios";
// const url = "http://localhost:4000/graphql";
const url = "https://oseoul-eden.herokuapp.com/graphql";
// https://oseoul-eden.herokuapp.com/

class api {
  private queries = {
    getUser: `
      query GetAllUsers {
        getAllUsers {
          _id
          wallet_address
          createdAt
          isAdmin
        }
      }
    `,
    searchClothes: ` 
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
    `,
    filterClothes: `
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
    `,
  } as const;

  public async getUser() {
    const data = await axios.post(url, { query: this.queries.getUser });
    return data.data.data.getAllUsers;
  }

  public async searchClothes(keyword: string, walletAddress: string) {
    const data = await axios.post(url, {
      query: this.queries.searchClothes,
      variables: { keyword, walletAddress },
    });
    return data.data.data.searchClothes;
  }

  public async filterClothes(type: string, walletAddress: string) {
    const data = await axios.post(url, {
      query: this.queries.filterClothes,
      variables: { type, walletAddress },
    });
    return data.data.data.filterClothes;
  }
}

export default new api();
