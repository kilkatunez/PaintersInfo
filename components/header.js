import styles from "../styles/Header.module.css";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header({ painters }) {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.info}>
        <Link href="/about">
          <a> About us</a>
        </Link>
      </span>
      <span className="logo">
        <Link href="/">
          <a>
            <img className={styles.img} src="logo.jpg" />
          </a>
        </Link>
      </span>
      <span className={styles.login}>
        <Navbar painters={painters} />
      </span>
    </div>
  );
}
