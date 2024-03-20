import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview> Ahoy There!</Preview>
      <Body>
        <Container>
          <Text> Hello {name}</Text>
          <Link href="https://github.com/KeturahDev">Here is my github :3</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
