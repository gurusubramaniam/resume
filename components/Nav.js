import Link from "next/link";
import nav from "../styles/Nav.module.css";
import Avatar from "./Avatar";

const Nav = () => {
  return (
    <header className={nav.nav}>
      <Avatar />
      <div className={nav.navcontainer}>
        <ul className={nav.navitems}>
          <li className={nav.navitems}>
            <Link href="/">Home</Link>
          </li>
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
          <li className={nav.navitems}>
            <Link href="/about">About</Link>
          </li>
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
          <li className={nav.navitems}>
            <Link href="/repos">Repos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
