import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}

const styles = {
  section: `w-full min-h-screen flex justify-center items-center flex-col`,
};
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
