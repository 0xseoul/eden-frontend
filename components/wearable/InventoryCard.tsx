import { FC } from "react";
import AutoHeightImage from "../common/AutoHeightImage";

interface Props {
  src: string;
  name: string;
}

const styles = { inventoryCard: `flex-1` };

const InventoryCard: FC<Props> = ({ src, name }) => {
  return (
    <div className={styles.inventoryCard}>
      <div className="p-2">
        <div className="w-full object-contain rounded-[8px] overflow-hidden border-[1px] border-primary">
          <AutoHeightImage src={src} />
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default InventoryCard;
