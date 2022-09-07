import { FC } from "react";
import AutoHeightImage from "../common/AutoHeightImage";

interface Props {
  src: string;
  name: string;
  itemNumber: string;
}

const styles = {
  inventoryCard: `flex-1`,
  imgContainer: `w-full object-contain rounded-[8px] overflow-hidden border-[1px] border-black transition-all duration-150 cursor-pointer active:border-primary  inventory-card-img-container`,
};

const InventoryCard: FC<Props> = ({ src, name, itemNumber }) => {
  return (
    <div className={styles.inventoryCard}>
      <div className="p-2">
        <div className={styles.imgContainer}>
          <AutoHeightImage src={src} />
        </div>
        <div className="py-4">
          <div className="leading-[16px]">{name}</div>
          <span className="text-[12px]">{itemNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
