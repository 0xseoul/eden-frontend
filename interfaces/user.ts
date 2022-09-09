export interface IUser {
  wallet: string;
  holding_nfts: IAvatar[];
  isAdmin?: boolean;
  signature: string[];
  isLoggedIn: boolean;
}

export interface IAvatar {
  _id: string;
  token_id?: string;
  overlapped_image_url: string;
}
