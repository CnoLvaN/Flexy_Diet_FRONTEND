import { PropsWithChildren } from "react";
import styles from "./Footer.module.scss";

type Props = {};

function Footer({}: PropsWithChildren<Props>) {
  return <footer className={styles.footer}></footer>;
}

export default Footer;
