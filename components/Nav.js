import Link from "next/link";
import nav from "../styles/Nav.module.css";
import styles from "../styles/Avatar.module.css";
import Avatar from "./Avatar";

const Nav = () => {
  return (
    <div>
      <Avatar />
      <ul className={nav.nav}>
        <li className={nav.nav}>
          <Link href="/">Home</Link>
        </li>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
        <li className={nav.nav}>
          <Link href="/about">About</Link>
        </li>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
        <li className={nav.nav}>
          <Link href="/repos">Repos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
