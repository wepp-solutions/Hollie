import React from "react";
import Image from "next/image";

import {
  Container,
  WrapperCards,
  Card
} from "../../../styles/Works/styles";
import NavBar from "../../components/NavBar/index";
import Footer from "../../components/Footer";

export default function Works() {
  return (
    <Container>
      <NavBar />
      <WrapperCards>
        <Card>
          <Image
            src="https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/5093991/pexels-photo-5093991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/417826/pexels-photo-417826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/5859229/pexels-photo-5859229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>

        <Card>
          <Image
            src="https://images.pexels.com/photos/5019878/pexels-photo-5019878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/4726889/pexels-photo-4726889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/3992716/pexels-photo-3992716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/1100008/pexels-photo-1100008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Card>
      </WrapperCards>

      <Footer />
    </Container>
  );
}
