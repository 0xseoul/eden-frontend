enum TMP_CLOTHES {
  hat = 1,
  glasses = 2,
  cigarette = 3,
}
const RABBIT_IMAGES = {
  1: [],
  2: [TMP_CLOTHES.cigarette],
  3: [TMP_CLOTHES.glasses],
  4: [TMP_CLOTHES.hat],
  5: [TMP_CLOTHES.glasses, TMP_CLOTHES.cigarette],
  6: [TMP_CLOTHES.hat, TMP_CLOTHES.glasses],
  7: [TMP_CLOTHES.hat, TMP_CLOTHES.cigarette],
  8: [TMP_CLOTHES.hat, TMP_CLOTHES.glasses, TMP_CLOTHES.cigarette],
};

export const TMP_IMAGES = {
  avatars: {
    1: {
      src: "/images/tmp/rabbit/avatars/1.png",
      holding_clothes: RABBIT_IMAGES[1],
    },
    2: {
      src: "/images/tmp/rabbit/avatars/2.png",
      holding_clothes: RABBIT_IMAGES[2],
    },
    3: {
      src: "/images/tmp/rabbit/avatars/3.png",
      holding_clothes: RABBIT_IMAGES[3],
    },
    4: {
      src: "/images/tmp/rabbit/avatars/4.png",
      holding_clothes: RABBIT_IMAGES[4],
    },
    5: {
      src: "/images/tmp/rabbit/avatars/5.png",
      holding_clothes: RABBIT_IMAGES[5],
    },
    6: {
      src: "/images/tmp/rabbit/avatars/6.png",
      holding_clothes: RABBIT_IMAGES[6],
    },
    7: {
      src: "/images/tmp/rabbit/avatars/7.png",
      holding_clothes: RABBIT_IMAGES[7],
    },
    8: {
      src: "/images/tmp/rabbit/avatars/8.png",
      holding_clothes: RABBIT_IMAGES[8],
    },
  },
  clothes: {
    hat: "/images/tmp/rabbit/clothes/hat.png",
    glasses: "/images/tmp/rabbit/clothes/glasses.png",
    mouth: "/images/tmp/rabbit/clothes/cigarette.png",
  },
};

export const TMP_AVATARS_ARR = Object.values(TMP_IMAGES.avatars);

// 1: hat
// 2: glasses
// 3: cigarette
