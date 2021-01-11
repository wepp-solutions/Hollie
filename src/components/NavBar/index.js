import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Navs,
  Logo,
  Link,
  IconsBox,
  IconDribbble,
  IconInsta,
  IconVimeo,
  MenuIcon,
  ModalContent
} from "./styles";

export default function NavBar() {
  const { pathname } = useRouter()
  const worksPage = pathname === "/" || pathname === "/Works"
  const contactsPage = pathname === "/Contacts"
  
  return (
    <Container>
      <Navs>
        <Logo>Hollie</Logo>
        <Link works={worksPage ? "true" : "false"} href="/Works">Trabalhos</Link>
        <Link about={contactsPage ? "true" : "false"} href="/Contacts">Contatos</Link>
      </Navs>

      <IconsBox>
        <IconDribbble />
        <IconInsta />
        <IconVimeo />
      </IconsBox>
    </Container>
  );
}
