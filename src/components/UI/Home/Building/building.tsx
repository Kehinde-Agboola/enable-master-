import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../../atom/button";

type FlexPropsType = {
  title?: string;
  paragraph?: string;
  paragraph2?: string;
  buttonText?: string;
  buttonText2?: string;
  subtitle?: string;
  image?: string;
  color?: string;
};

const Title = styled.h1`
  ${tw`text-3xl font-bold`}
`;

const FirstParagraph = styled.p`
  ${tw`py-6 text-sm tracking-wider font-extralight`}
`;

const SecondParagraph = styled.p`
  ${tw`pb-6 text-sm tracking-wider font-extralight`}
`;

const Image = styled.img`
  ${tw`lg:w-[600px] h-[600px]`}
`;
const FlexContainer = styled.div`
  ${tw`flex flex-col lg:flex-row justify-between w-full h-full mb-20`}
  > div:first-child {
    flex-basis: 50%;
  }

  > img:last-child {
    flex-basis: 50%;
  }
`;

const SubTitle = styled.h1`
  ${tw`pt-2 text-3xl font-bold`}
`;

const FlexContent = styled.div<{ color?: string }>`
  ${tw`px-16 py-16`}
  ${({ color }) =>
    color ? tw`bg-purple text-white` : tw`bg-white text-purple`};
`;

const ButtonContainer = styled.div`
  ${tw`pt-3 flex gap-3 w-[65%] text-sm`}
`;

export const Flex = ({
  title,
  paragraph,
  paragraph2,
  buttonText2,
  buttonText,
  subtitle,
  image,
  color,
}: FlexPropsType) => {
  return (
    <FlexContainer>
      <FlexContent color={color}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <div>
          <FirstParagraph>{paragraph}</FirstParagraph>
          <SecondParagraph>{paragraph2}</SecondParagraph>
        </div>
        <ButtonContainer>
          <Button
            children={`${buttonText}`}
            type="button"
            className="bg-white text-purple w-[40%] py-3 hover:opacity-90"
          />
          <Button
            children={`${buttonText2}`}
            type="button"
            className="bg-purple border-[1px] border-white w-1/2 hover:opacity-90"
          />
        </ButtonContainer>
      </FlexContent>
      <>
        <Image src={image} alt={image} />
      </>
    </FlexContainer>
  );
};
