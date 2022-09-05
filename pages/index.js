import styles from "../styles/Home.module.css";

export default function Home({ painters, fishText }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is an information site for people who are interested in art
          <br />
        </h1>
      </main>
    </div>
  );
}
