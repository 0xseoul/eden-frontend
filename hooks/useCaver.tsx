import Caver, { Contract } from "caver-js";
import { ReactNode, useEffect, useState } from "react";
import { web3Config } from "../config/web3-config";

export const useCaver = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [nftContract, setNftContract] = useState<Contract | undefined>(
    undefined
  );

  useEffect(() => {
    if (!window.klaytn) return;
    // const caver = new Caver("https://api.baobab.klaytn.net:8651");
    // setCaver(caver);
    setCaver(new Caver(window.klaytn));
    // }
  }, []);

  useEffect(() => {
    if (!caver) return;
    setNftContract(caver.contract.create(web3Config.abi, web3Config.address));
  }, [caver]);

  return { caver, nftContract };
};
