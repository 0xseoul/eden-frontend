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
