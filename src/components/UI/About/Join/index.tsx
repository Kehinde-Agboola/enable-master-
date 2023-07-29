import { Button } from "../../../atom/button";
import { Container } from "../../../shared";
import styled from "styled-components";
import tw from "twin.macro";

const Heading = styled.h1`
  ${tw`font-bold pt-5 md:pt-5 xl:pt-0 text-[20px] md:text-[25px] lg:text-[27px] xl:text-[33px] xl:text-left font-poppins text-white`}
`;
const Background = styled.div`
  ${tw`bg-join py-10 bg-center bg-cover bg-no-repeat mt-[5rem]`}
`;
const Paragraph = styled.p`
  ${tw` py-5 lg:py-5 md:w-[40%]  lg:w-[38%] text-sm lg:text-sm text-white text-left md:text-left`}
`;
Container;
export const Join = () => {
  return (
    <Background>
      <Container>
        <div>
          <Heading>
            <h1>Join us as we change the world.</h1>
          </Heading>
          <Paragraph>
            <p>
              Become a borrower, investor, trustee, employee, volunteer, fellow,
              or guarantor. We are dedicated on creating stronger families that
              can households that can support the development of children.
            </p>
          </Paragraph>
          <Button
            children="Join Us Now"
            className="mt-5 border-purple border-2 bg-white text-purple px-8  hover:opacity-80 py-3 md:font-medium text-sm rounded-md"
          />
        </div>
      </Container>
    </Background>
  );
};
