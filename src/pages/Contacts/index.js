import NavBar from "../../components/NavBar";
import { Container, Form, TitleTop } from "../../../styles/Contacts/styles";

export default function Contacts() {
  return (
    <>
      <NavBar />
      <Container>
        <TitleTop>
          Se você tiver um projeto em mente, preencha e envie o formulário
          abaixo.
        </TitleTop>

        <Form>
            <label>Nome *</label>
            <input type="text"/>
            <br/>
            <label>Sobrenome *</label>
            <input type="text"/>
            <br/>
            <label>Email *</label>
            <input type="text"/>
            <br/>
            <label>Descreva a sua empresa</label>
            <textarea />
        </Form>
      </Container>
    </>
  );
}
