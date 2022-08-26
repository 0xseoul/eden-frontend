import React, { FC } from "react";
import AutoHeightImage from "../common/AutoHeightImage";
interface Props {
  src: string;
}

const styles = {
  container: `flex flex-col justify-center items-center w-full`,
};
const Card: FC<Props> = ({ src }) => {
  return (
    <div className={styles.container}>
      {/* 안녕 */}
      <div className="wearable-card-v2 w-[24rem] h-[24rem]">
        <button className="button w-[24rem] h-[24rem]">
          <AutoHeightImage src={src} />
        </button>
      </div>
      {/* <div className="w-full h-[10rem]"></div> */}
    </div>
  );
};

export default Card;
