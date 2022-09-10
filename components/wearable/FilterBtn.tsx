import { FC } from "react";
import { ICONS } from "../../constants/icons";
interface FilterBtnProps {
  text: string;
  onClick: () => void;
  isClicked: boolean;
}

const styles = {
  container: `flex p-4 items-center justify-start gap-2 filter-icon transition-all cursor-pointer`,
  menuIcon: `lex items-center justify-center`,
  text: `flex items-center justify-center translate-y-0.5`,
};
const FilterBtn: FC<FilterBtnProps> = ({ text, onClick, isClicked }) => {
  return (
    <li
      className={`${styles.container} ${isClicked && "clicked"}`}
      onClick={onClick}
    >
      <span className={styles.menuIcon}>
        <ICONS.menu />
      </span>
      <div className={styles.text}>
        <div>{text}</div>
      </div>
    </li>
  );
};

export default FilterBtn;
