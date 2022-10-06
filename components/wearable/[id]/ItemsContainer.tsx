import React, { FC } from "react";
import { ICONS } from "../../../constants";

const styles = {
  inventoryContainer: `flex-1 flex h-full overflow-y-auto wearable-custom-scrollbar- `,
  inventoryWrapper: `flex-1 flex h-full flex-col`,
  grid: `grid grid-cols-3 auto-rows-[270px] w-full`,
  btnText: `uppercase btn-text h-[3rem] flex-1 flex items-center justify-center font-black text-c-gray300`,
  icon: `btn- h-[3rem] w-[3rem] flex items-center justify-center transition-all`,
  btnWrapper: `flex w-[228px] wearable-reset-button overflow-hidden cursor-pointer`,
};

interface Props {
  children: React.ReactNode;
  handleToggleLock: () => void;
  isResetClicked: boolean;
}

const ItemsContainer: FC<Props> = ({
  children,
  handleToggleLock,
  isResetClicked,
}) => {
  return (
    <section className={styles.inventoryWrapper}>
      <form className={styles.inventoryContainer}>
        <div className={styles.grid}>{children}</div>
      </form>
      <div>
        <div className="flex justify-end w-full">
          <div className={styles.btnWrapper}>
            <span
              className={`${styles.icon} ${isResetClicked && "bg-primary"} `}
              onClick={handleToggleLock}
            >
              {isResetClicked ? <ICONS.lockOpen /> : <ICONS.lock />}
            </span>
            <div className={styles.btnText}>
              <span className="translate-y-0.5">RESET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsContainer;
