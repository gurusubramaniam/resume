import Link from "next/link";
import nav from "../styles/Nav.module.css";
import Avatar from "./Avatar";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className={nav.nav}>
      <Avatar colorMode={colorMode} />
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
      <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </header>
  );
};

export default Nav;
