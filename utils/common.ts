export const throttle = (callback: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
};

export const cutWallet = (wallet: string) =>
  `${wallet.slice(0, 5)}...${wallet.slice(-4)}`;

export const saveJson = (value: Object) => JSON.stringify(value);
export const readJson = (value: string) => JSON.parse(value);
