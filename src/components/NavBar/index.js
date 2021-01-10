import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Navs,
  Logo,
  Link,
  IconsBox,
  InstagramIcon,
  TwitterIcon,
  MenuIcon
} from "./styles";

export default function NavBar() {
  const { pathname } = useRouter()
  const worksPage = pathname === "/" || pathname === "/Works"
  const aboutPage = pathname === "/About"
  const contactsPage = pathname === "/Contacts"
  
  return (
    <Container>
      <Navs>
        <Logo>Hollie</Logo>
        <Link works={worksPage ? "true" : "false"} href="/Works">Trabalhos</Link>
        <Link about={aboutPage ? "true" : "false"} href="/About">Sobre</Link>
        <Link about={contactsPage ? "true" : "false"} href="/Contacts">Contatos</Link>
      </Navs>

      <IconsBox>
        <InstagramIcon />
        <TwitterIcon />
      </IconsBox>
      <MenuIcon />
    </Container>
  );
}
