import { FC } from "react";
import { ICONS } from "../../constants/icons";
interface FilterBtnProps {
  text: string;
}
const FilterBtn: FC<FilterBtnProps> = ({ text }) => {
  return (
    <li className="flex p-4 items-center justify-start gap-2 filter-icon transition-all cursor-pointer ">
      <span className="flex items-center justify-center">
        <ICONS.menu />
      </span>
      <div className="flex items-center justify-center translate-y-0.5">
        <div>{text}</div>
      </div>
    </li>
  );
};

export default FilterBtn;
