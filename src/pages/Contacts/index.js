import Image from "next/image";
import {
  Container,
  Header,
  WrapperContact,
  Texts,
} from "../../../styles/Contacts/styles";
import NavBar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";

export default function Contacts() {
  return (
    <Container>
      <NavBar />
      <Header>
        <Image
          src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          priority
        />
      </Header>

      <WrapperContact>
        <Texts one>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            iusto?
          </p>
        </Texts>

        <Texts two>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            alias quibusdam doloribus nulla mollitia ducimus quisquam
            perspiciatis doloremque sapiente iusto.
          </p>

          <button>Ver Mais</button>
        </Texts>
      </WrapperContact>

      <Footer />
    </Container>
  );
}
