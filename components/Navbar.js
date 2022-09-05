import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ painters }) => {
  const [searchValue, setSearchValue] = useState("");
  const changeInputValue = (e) => {
    setSearchValue(e);
  };
  const clearInput = () => {
    setSearchValue("");
  };
  return (
    <div className={styles.navWrapper}>
      <div className={styles.scrollWrapper}>
        <input
          value={searchValue?.target?.value}
          className={styles.input}
          placeholder="Search painter"
          onChange={changeInputValue}
        />
        {painters?.map((painter) => {
          if (!searchValue) {
            return (
              <button className={styles.painter} key={painter.id}>
                <Link
                  href={`/painters/[name]`}
                  as={`/painters/${painter.name}`}
                >
                  <a>
                    <div>{painter.name}</div>
                  </a>
                </Link>
              </button>
            );
          } else {
            if (
              painter.name
                .toLowerCase()
                .indexOf(searchValue?.target?.value.toLowerCase()) !== -1
            ) {
              return (
                <button
                  className={styles.painter}
                  key={painter.id}
                  onClick={() => {
                    clearInput();
                  }}
                >
                  <Link
                    onChange={() => {
                      clearInput();
                    }}
                    href={`/painters/[name]`}
                    as={`/painters/${painter.name}`}
                  >
                    <a>
                      <div>{painter.name}</div>
                    </a>
                  </Link>
                </button>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
