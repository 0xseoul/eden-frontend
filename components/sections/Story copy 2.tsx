import React, { CSSProperties, FC, ReactNode } from "react";
import { MAIN_IMAGES } from "../../constants/image";
import AutoHeightImage from "../common/AutoHeightImage";

const styles = {
  section: `flex px-[2.5rem] w-full scrollable h-screen`,
  container: `flex-1 flex justify-center items-start min-h-screen top-0`,
  content: `max-w-[820px]`,
  img: `w-1/2`,
  title: `text-3xl font-black uppercase sticky top-0 h-screen flex justify-center items-center`,
  // hidden w-1/4 col-start-1 lg:block sticky top-0 h-screen pt-32
};

const cssStyles = {
  title: {
    position: "sticky",
    top: 0,
  } as CSSProperties,
};

interface ItemProps {
  title: string;
  content: ReactNode;
  year: string;
  imgSrc: string;
}

const texts: ItemProps[] = [
  {
    title: "THE ADNET OF THE IDEA OF EDEN : ",
    content: (
      <div>
        2032, Human civilization continues to develop, but crime and vile acts
        increase gradually. <br />
        At this time, the ‘EDEN idea’ emerges that only through human
        mechanization can one be free from ‘human sins’ such as crime and
        morality. Eden is gradually becoming the dominant idea of mankind.
        <br />
      </div>
    ),
    year: "2032",
    imgSrc: MAIN_IMAGES.story[1],
  },
  {
    title: "DEPORTATION FROM EDEN",
    content: (
      <div>
        Eventually, the idea of EDEN grew into the largest religion across the
        globe, and most humans were rapidly mechanized. As mechanization
        progressed, human factors such as emotions gradually disappeared to
        mankind, and the few who did not accept this ‘mechanical evolution’ were
        ostracized. Some who sought to preserve humanity were considered enemies
        of EDEN under the name of ‘ADAM’ and were eventually expelled from most
        of the earth’s land, which was considered EDEN.
        <br />
      </div>
    ),
    year: "2072",
    imgSrc: MAIN_IMAGES.story[2],
  },

  {
    title: "ADAPTATION AND GROWTH IN ASYLUM",
    content: (
      <div>
        The ADAM, driven away from EDEN, eventually heads to the abandoned land
        of the Southern Hemisphere, ‘Asylum’. <br />
        There lived a non-mechanized human being, and ADAM also continued their
        adventure to regain humanity there.
        <br />
      </div>
    ),
    year: "NOW",
    imgSrc: MAIN_IMAGES.story[3],
  },
];

const ItemComponent: FC<ItemProps> = ({ title, content, year, imgSrc }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        <div className="flex flex-1 justify-end">
          <div className="story-line">
            <div className="flex items-center justify-center text-md font-bold  leading-[2.4rem] text-primary">
              {year}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <span className="text-lg font-extrabold flex items-center justify-center">
            {title}
          </span>
          <span className="font-sm font-normal">{content}</span>
        </div>
      </div>

      <div className={styles.img}>
        <AutoHeightImage src={imgSrc} />
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <div className={styles.section}>
      <form className={styles.title}>
        <span>Story</span>
      </form>
      <div className={styles.container}>
        <div className={styles.content}>
          {texts.map((item, index) => (
            <ItemComponent
              key={item.title}
              title={item.title}
              content={item.content}
              year={item.year}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
