import Image from "next/image";
import NavBar from "../../components/NavBar";
import { Container, TextsTop, Title, Desc, ImageBox } from "../../../styles/About/styles";

export default function About() {
  return (
    <>
      <NavBar />
      <Container>
        <TextsTop>
          <Title>
            Hollie é fotógrafa e diretora de arte que mora em Londres.
            Com uma estética sóbria e elegante, ela fotografa uma diversificada
            gama de tópicos para clientes comerciais e editoriais.
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque diam volutpat commodo sed egestas egestas. Diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere.
            Bibendum est ultricies integer quis auctor. Convallis tellus id
            interdum velit laoreet id donec. Vestibulum lectus mauris ultrices
            eros in. Eget nunc scelerisque viverra mauris in aliquam sem
            fringilla ut.
          </Desc>
        </TextsTop>

        <ImageBox>
          <Image
            className="img"
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
          />
        </ImageBox>
      </Container>
    </>
  );
}
