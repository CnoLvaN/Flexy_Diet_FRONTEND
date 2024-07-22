import { PropsWithChildren } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Container from "../Container/Container";

type Props = {};

function Header({}: PropsWithChildren<Props>) {
  const authorised = false;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/Flexy_logo.png" alt="" width={100} height={64} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.headerList}>
          <li className={styles.active}>
            <a href="/" className={styles.menu_btn}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={styles.menu_btn}>
              About
            </a>
          </li>
          <li>
            <a href="/team" className={styles.menu_btn}>
              Team
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.menu_btn}>
              Contact
            </a>
          </li>
          <li>
            <a href="/sign-in" className={styles.menu_btn}>
              Try Out
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.avatar}>
        {authorised ? (
          <Image src="" alt="" width={64} height={64} />
        ) : (
          <a className={styles.signIn}>Sign In</a>
        )}
      </div>
    </header>
  );
}

export default Header;
