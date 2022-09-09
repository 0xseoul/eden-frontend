import { useMutation } from "@apollo/client";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { LOGIN_USER_MUTATION } from "../../GraphQL/Mutations";
import { useCaver } from "../../hooks/useCaver";
import {
  getIsLoggedIn,
  getSignature,
  getWallet,
  SET_AVATARS,
  SET_LOGGED_IN,
  SET_WALLET,
} from "../../reducers/user";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { getSigner } from "../../utils/caver-interact";
import { saveJson } from "../../utils/common";
import Wallet from "../common/Wallet";
import Tab from "../wearable/Tab";
import Top from "../wearable/Top";

interface LayoutProps {
  children: React.ReactNode;
}

const styles = {
  layout:
    "flex flex-col max-w-wearable-max h-full w-full justify-center items-center flex-1 mb-footer",
  background: `wearable-background fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center `,
  overlay: `flex bg-black/80 w-full h-full fixed top-0 left-0 w-screen h-screen z-10`,
  container: `flex flex-1`,
};

const cssStyles = {
  container: {
    background: "rgba(32, 33, 34, 0.5)",
    backdropFilter: "blur(32px)",
  } as CSSProperties,
};

const WearableLayout: FC<LayoutProps> = ({ children }) => {
  // const [avatars, setAvatars] = useState<any[]>([]);
  const wallet = useTypedSelector(getWallet);
  const signature = useTypedSelector(getSignature);
  const isLoggined = useTypedSelector(getIsLoggedIn);
  const signMessage = `sign to login to eden ${wallet}`;

  const headers = {
    signMessage,
    signature: saveJson(signature),
    wallet_address: wallet,
  };

  const [loginUser, loginErr] = useMutation(LOGIN_USER_MUTATION, {
    context: { headers },
  });
  const isWalletConnected = wallet.length > 5;
  const isSignatureValid = signature.length > 2;

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!isSignatureValid || !isWalletConnected || isLoggined) return;
    const init = async () => {
      try {
        const data = await loginUser({ variables: { wallet_address: wallet } });
        dispatch(SET_AVATARS(data.data.loginUser.holding_nfts));
        dispatch(SET_LOGGED_IN(true));
      } catch (error: any) {
        console.log(error.message);
      }
    };
    init();
  }, [signature, wallet]);

  return (
    <section className={styles.layout}>
      <div className="h-full flex-1 z-30 w-full flex flex-col justify-center">
        {isWalletConnected ? (
          <>
            <Top />
            <div style={cssStyles.container}>
              <Tab />
              <div className={styles.container}>{children}</div>
            </div>
          </>
        ) : (
          <Wallet />
        )}
      </div>
      <div className={styles.background} />
      <div className={styles.overlay} />
    </section>
  );
};

export default WearableLayout;
