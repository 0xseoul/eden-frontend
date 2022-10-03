// import axios from "axios";
import { baseApi } from "..";
import { saveJson } from "../../utils/common";

interface ILoginUser {
  wallet_address: string;
  signature: string[];
  signMessage: string;
}
export const loginUser = async (props: ILoginUser) => {
  return await baseApi.get("/dev/users/login", {
    headers: {
      "Content-Type": "application/json",
      wallet_address: props.wallet_address,
      signature: saveJson(props.signature),
      signMessage: props.signMessage,
    },
  });
};
