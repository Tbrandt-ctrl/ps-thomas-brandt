import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <h1 className="display-4 text-uppercase font-weight-bold">
      <Link href="/">
        <a className={styles.logo}>Aubainerie</a>
      </Link>
    </h1>
  );
};

export default Logo;
