import React, { CSSProperties } from "react";
import { COMMON } from "../../constants";
import {
  getIsClickedGoToMyInventory,
  SET_IS_CLICKED_GO_TO_MY_INVENTORY,
} from "../../reducers/common";
import { getIsLoggedIn, SET_WALLET } from "../../reducers/user";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { CuttinEdgeBtn } from "./Buttons";

const styles = {
  section: `flex flex-col w-full h-full justify-center items-center`,
  title: `font-light text-5xl text-primary mb-8`,
  btnContainer: `flex gap-6 mb-[21px]`,
  subtitle: `text-xs cursor-pointer`,
  btn: `w-[14rem] text-center cursor-pointer transition-all duration-300 ease-in-out`,
};

const cssStyles = {
  downloadBtn: {
    background:
      "linear-gradient(92.73deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.04) 100%)",
    backdropFilter: "blur(32px)",
    padding: "1rem",
    wordBreak: "keep-all",
  } as CSSProperties,
  text: {
    textShadow: "0px 0px 20px rgb(182, 255, 0, 1)",
  } as CSSProperties,
};

const Wallet = () => {
  const onClickUrl = () => window.open(COMMON.kaikasUrl);
  const dispatch = useTypedDispatch();
  const getWallet = async () => await dispatch(SET_WALLET());

  const isClickedGoToMyInventory = useTypedSelector(
    getIsClickedGoToMyInventory
  );
  const isLoggined = useTypedSelector(getIsLoggedIn);

  const handleGoToMyInventory = () => {
    if (!isLoggined) return;
    dispatch(SET_IS_CLICKED_GO_TO_MY_INVENTORY(true));
  };

  return (
    <div className={styles.section}>
      <div className={styles.title} style={cssStyles.text}>
        KLAYTN KAIKAS
      </div>
      <div className={styles.btnContainer}>
        <CuttinEdgeBtn cssStyles={cssStyles.downloadBtn} tw={styles.btn}>
          <div className="w-full h-full" onClick={getWallet}>
            CONNECT MY WALLET
          </div>
        </CuttinEdgeBtn>
        <CuttinEdgeBtn
          cssStyles={cssStyles.downloadBtn}
          tw={`${styles.btn} ${
            isLoggined ? "text-white" : "text-[#72777D] !cursor-default"
          }`}
          onClick={handleGoToMyInventory}
        >
          GO TO MY INVENTORY
        </CuttinEdgeBtn>
      </div>
      <div className={styles.subtitle} onClick={onClickUrl}>
        Create a Klaytn Kaikas
      </div>
    </div>
  );
};

export default Wallet;
