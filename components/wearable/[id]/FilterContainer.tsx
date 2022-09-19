import React, { FC } from "react";
import { CuttinEdgeBtn } from "../../common/Buttons";

const styles = {
  filterContainer: `w-[11.25rem] h-full`,
};

interface Props {
  children: React.ReactNode;
}
const FilterContainer: FC<Props> = ({ children }) => {
  return (
    <form className="flex flex-col items-start justify-start h-full">
      <ul className={styles.filterContainer}>{children}</ul>
      <div className="w-full">
        {/* TODO: cuttnig button  */}
        <CuttinEdgeBtn tw="bg-primary text-black">SAVE</CuttinEdgeBtn>
      </div>
    </form>
  );
};

export default FilterContainer;
