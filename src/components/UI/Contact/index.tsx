// import React from "react";
import { Container } from "../../shared";
import tw from "twin.macro";
import styled from "styled-components";
// import { HeroComponent } from "../../atom/hero";
import { Message } from "./Message";
// import Hug from "../../../assets/hug.jpg";

const BackImage = styled.div`
  ${tw`bg-hug  bg-no-repeat bg-center bg-cover`}
`;
export const Contact = () => {
  return (
    <BackImage>
      <div>
        <Container>
          <div>
            <h1>Contact Works</h1>
            <Message
              onSubmit={function (values: {
                name: string;
                email: string;
                message: string;
                phone: string;
              }): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </Container>
      </div>
    </BackImage>
  );
};
