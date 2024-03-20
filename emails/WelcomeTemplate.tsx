import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview> Ahoy There!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className="font-bold text-3xl"> Hello {name}</Text>
            <Link href="https://github.com/KeturahDev">
              Here is my github :3
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#E3FFFE",
};

export default WelcomeTemplate;
