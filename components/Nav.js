import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import nav from "../styles/Nav.module.css";
import Avatar from "./Avatar";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon, PhoneIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className={nav.nav}>
      <Avatar colorMode={colorMode} />
      <div className={nav.navcontainer}>
        <ul className={nav.navitems}>
          <li className={nav.navitems}>
            <Link as={NextLink} href="/">
              About
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
          <li className={nav.navitems}>
            <Link href="/repos">Repos</Link>
          </li>
        </ul>
      </div>
      <IconButton mt={4} aria-label="call me" m={1}>
        <Link href="tel:+14088135156">
          <PhoneIcon></PhoneIcon>
        </Link>
      </IconButton>
      <IconButton
        mt={4}
        aria-label="Toggle Mode"
        onClick={toggleColorMode}
        m={1}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </header>
  );
};

export default Nav;
