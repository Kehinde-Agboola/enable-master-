import styled from "styled-components";
import { default as tw } from "twin.macro";
import { building } from "../../../../constants";
import { Button } from "../../../atom/button";
import { Container } from "../../../shared";

const Title = styled.h1`
  ${tw` xl:pt-5 text-3xl lg:text-2xl xl:text-3xl font-medium `}
`;

const SubTitle = styled.h1`
  ${tw`pt-2 xl:pt-4 text-3xl lg:text-2xl xl:text-3xl font-medium`}
`;

const FirstParagraph = styled.p`
  ${tw`py-6  text-sm md:text-sm xl:tracking-wider font-light`}
`;

const SecondParagraph = styled.p`
  ${tw`pb-6 text-sm md:text-sm xl:tracking-wider font-light`}
`;

const Image = styled.img`
  ${tw` h-full w-full md:w-[550px]  xl:w-72 `}
  flex-basis: 45%;
`;

const BuildingContainer = styled.div`
  ${tw`flex flex-col lg:flex-row justify-center items-center lg:justify-between xl:py-10 gap-10 lg:gap-0`}
`;

const BuildingContent = styled.div<{ color?: string }>`
  ${tw`xl:pr-20`}
  flex-basis: 50%;
`;

const ButtonContainer = styled.div`
  ${tw`flex gap-3 xl:w-[65%] text-sm `}
`;

export const Building = () => {
  return (
    <section className="-mt-5  pb-10 lg:pb-0">
      <Container>
        <BuildingContainer>
          <BuildingContent>
            <Title>{building.title}</Title>
            <SubTitle>{building.subtitle}</SubTitle>
            <div>
              <FirstParagraph>{building.paragraph}</FirstParagraph>
              <SecondParagraph>{building.paragraph2}</SecondParagraph>
            </div>
            <ButtonContainer>
              <Button
                children={`${building.buttonText}`}
                type="button"
                className="bg-purple text-white w-full lg:w-[40%] py-3 hover:opacity-90"
              />
              <Button
                children={`${building.buttonText2}`}
                type="button"
                className="bg-purple border-[1px] border-white w-full lg:w-1/2 hover:opacity-90 text-white"
              />
            </ButtonContainer>
          </BuildingContent>
          <Image src={building.image} alt={building.image} />
        </BuildingContainer>
      </Container>
    </section>
  );
};
