import { Container, IconDribbble, IconVimeo, IconInsta } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div>
        <IconDribbble />
        <IconInsta />
        <IconVimeo />
      </div>

      <p>
        Feito por <strong>WEPP</strong>
      </p>
    </Container>
  );
}
