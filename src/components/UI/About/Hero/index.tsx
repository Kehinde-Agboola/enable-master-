import { HeroComponent } from "../../../atom/hero";
import { about } from "../../../../constants";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../../shared";
const SuhHeading = styled.h1`
  ${tw`mt-[5rem] mb-[2rem] text-[1.5rem] md:max-w-[80%] mx-auto sm:text-center`}
`;
const SubParagraph = styled.h1`
  ${tw`md:max-w-[90%] mx-auto`}
`;

export const Hero = () => {
  return (
    <div>
      <div>
        <HeroComponent
          about="About us"
          subtext="In our ideal society, everyone has the ability to improve their lives financially."
          buttonText=""
          buttonText2=""
          buttonClassName=""
        />
        <Container>
          {about?.map((el, index) => (
            <div key={index}>
              <SuhHeading>
                <h1>{el.heading}</h1>
              </SuhHeading>
              <SubParagraph>
                <p className="pb-5">{el.text1}</p>
                <p>{el.text2}</p>
              </SubParagraph>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};
