// import { IRestaurantV2 } from "../interfaces";

import { IClothes } from "../interfaces";

// FIXME: 키워드 정규화
export const keywordNormalize = (keyword: string) => {
  const proccecced = keyword?.toLowerCase()?.replace(/(\s*)/g, "") || "";
  return proccecced;
};

// 식당이름
export const filter = (restTitle: string, pKeyword: string) => {
  return keywordNormalize(restTitle).includes(pKeyword);
};

// 전체 필터링
export const searchNotByDBInventory = (pKeyword: string, items: IClothes[]) => {
  const filterd = items.filter((item) => {
    const itemName = keywordNormalize(item.name ?? "");
    const itemhashNumber = item.hash_number.toString();
    const itemYype = keywordNormalize(item.type ?? "");

    return (
      filter(itemName, pKeyword) ||
      filter(itemhashNumber, pKeyword) ||
      filter(itemYype, pKeyword)
    );
  });
  return filterd;
};
