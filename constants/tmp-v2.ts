enum TMP_CLOTHES {
  shirt = 1,
}
const EDEN_MAN_IMAGES = {
  1: [],
  2: [TMP_CLOTHES.shirt],
};

export const EDEN_TMP_IMAGES = {
  avatars: {
    1: {
      src: "/images/tmp/eden-test/avatars/1.png",
      holding_clothes: EDEN_MAN_IMAGES[1],
    },
    2: {
      src: "/images/tmp/eden-test/avatars/2.png",
      holding_clothes: EDEN_MAN_IMAGES[2],
    },
  },
  clothes: {
    "T-shirts": "/images/tmp/eden-test/clothes/hat.png",
  },
};

export const EDEN_TMP_AVATARS_ARR = Object.values(EDEN_TMP_IMAGES.avatars);
