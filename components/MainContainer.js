import Header from "./header";
import Head from "next/head";
import styles from "../styles/MainContainer.module.css";

const MainContainer = ({ children, painters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Painting Life</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.jpg" />
      </Head>
      <Header painters={painters} />
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;
