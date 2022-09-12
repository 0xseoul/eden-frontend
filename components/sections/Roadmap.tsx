import React, { CSSProperties } from "react";
const styles = {
  section: `min-h-screen w-full flex justify-center items-center relative section-4 flex-col`,
  title: `font-black text-xl`,
  cardContainer: `flex gap-6`,
  cardWrapper: `p-8 flex flex-col gap-[1.25rem]`,
  phaseContainer: ``,
  card: `w-[24rem] max-w-[24rem]`,
  phase: ``,
  cardTitle: `font-extrabold text-md`,
  cardContent: `max-w-[24rem]`,
};

const cssStyles = {
  card: {
    background:
      "linear-gradient(142.27deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 78.19%)",
    backdropFilter: "blur(32px)",
  } as CSSProperties,
  box: {
    background: "rgba(255, 255, 255, 0.04)",
  },
};

const contents = {
  phase1: {
    item1: {
      title: "METAVERSE READY",
      content:
        "We’ve huilt a clone.meta vault to give you access to 3D files to use across platforms.",
    },
    item2: {
      title: "METAVERSE READY",
      content:
        "We’ve huilt a clone.meta vault to give you access to 3D files to use across platforms.",
    },
    item3: {
      title: "METAVERSE READY",
      content:
        "We’ve huilt a clone.meta vault to give you access to 3D files to use across platforms.",
    },
  },
};

const phase1 = Object.values(contents.phase1);

const arr = Array.from({ length: 3 }, (v, k) => k);
const Roadmap = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>OUR ROADMAP</div>
      <div className={styles.cardContainer}>
        {phase1.map((value, index) => (
          <div
            className={styles.card}
            style={cssStyles.card}
            key={value.content + index}
          >
            <div className={styles.cardWrapper}>
              <div>
                <div
                  className="w-[3rem] h-[3rem] rounded-lg"
                  style={cssStyles.box}
                />
              </div>
              <div className={styles.cardTitle}>{value.title}</div>
              <div className={styles.cardContent}>{value.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.phaseContainer}></div>
    </div>
  );
};

export default Roadmap;
