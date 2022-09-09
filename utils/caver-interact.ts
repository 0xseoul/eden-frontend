// import Caver from "caver-js";
// export const caver = new Caver(window.klaytn);

export const getSigner = async (
  caver: any,
  account: string,
  message: string
) => {
  try {
    // const signedMessage = await caver.klay.sign(message, from)
    const sig = await caver.klay.sign(message, account);
    const v = `0x` + sig.substring(2).substring(128, 130);
    const r = `0x` + sig.substring(2).substring(0, 64);
    const s = `0x` + sig.substring(2).substring(64, 128);
    const signature = [v, r, s];

    return signature;
  } catch (error: any) {
    console.error(error.message);
  }
  // setSignature(_signature);
  // console.log(_signature);
};
