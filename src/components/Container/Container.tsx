import { PropsWithChildren } from "react";
import styles from "./Container.module.scss";

type Props = {};

function Container({ children }: PropsWithChildren<Props>) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
