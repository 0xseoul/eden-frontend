import { IInventory, IUser } from ".";

export interface ILoading {
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface ICommon {
  isClickedGoToMyInventory: boolean;
}

export interface ISelector {
  inventory: {
    entities: IInventory;
    loading: ILoading["loading"];
  };
  common: {
    entities: ICommon;
    loading: ILoading["loading"];
  };
  user: {
    entities: IUser;
    loading: ILoading["loading"];
  };
}

export interface SetWalletProps {
  wallet: string;
  signature: [string];
}
