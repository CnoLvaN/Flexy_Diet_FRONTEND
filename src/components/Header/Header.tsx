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
        <a href="/">
          <Image src="/Flexy_logo.png" alt="" width={100} height={64} />
        </a>
      </div>
      <div className={styles.menu}>
        <ul className={styles.headerList}>
          <li className={styles.active}>
            <a href="#home" className={styles.menu_btn}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.menu_btn}>
              About
            </a>
          </li>
          <li>
            <a href="#rates" className={styles.menu_btn}>
              Rates
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.menu_btn}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.avatar}>
        {authorised ? (
          <Image src="" alt="" width={64} height={64} />
        ) : (
          <a href="/sign-in" className={styles.signIn}>
            Sign In
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
