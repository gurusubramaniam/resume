import Link from "next/link";
import nav from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <div>
      <ul className={nav.nav}>
        <li className={nav.nav}>
          <Link href="/">Home</Link>
        </li>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
        <li className={nav.nav}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
