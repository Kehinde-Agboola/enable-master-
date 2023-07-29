import { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../shared";
import { Button } from "./button";

type HeroPropsType = {
  text?: string;
  heading?: string;
  subheading?: string;
  descriptions?: string;
  buttonText?: string;
  buttonText2?: string;
  image?: string;
  buttonClassName?: string;
  buttonClassName2?: string;
  spanText?: string;
  buttonIcon?: ReactElement;
  heading2?: string;
  subtext?: string;
  about?: string;
};
const HeroHeading = styled.h1<{ image?: string }>`
  ${({ image }) =>
    image
      ? tw`font-extrabold text-[30px] md:text-[47px] lg:text-[55px] xl:text-[46px]`
      : tw`text-2xl xl:text-4xl font-medium`};
`;

const HeroHeading2 = styled.h1<{ image?: string }>`
  ${({ image }) => (image ? tw`` : tw`my-4 text-2xl xl:text-4xl font-medium`)};
`;
const HeadingSpan = styled.span`
  ${tw`text-purple`}
`;
const HeroContent = styled.div<{ image?: string }>`
  ${({ image }) => (image ? tw`xl:-mt-32` : tw`-mb-0`)};
`;

const HeroParagraph = styled.p<{ image?: string }>`
  ${({ image }) =>
    image
      ? tw`py-5 lg:py-5 lg:w-[85%] xl:w-[89%] text-sm lg:text-sm text-gray-700 text-left md:text-left`
      : tw`w-full`};
`;

const HeroButtonContainer = styled.div<{ image?: string }>`
  ${({ image }) =>
    image
      ? tw`mt-5 w-full xl:w-[70%] flex md:flex-row md:gap-10 flex-col gap-3`
      : tw`mt-10 flex justify-center gap-5`};
`;
const HeroContainer = styled.section<{ image?: string }>`
  ${({ image }) =>
    image
      ? tw`bg-no-repeat bg-cover w-full bg-hero_bg xl:min-h-[60vh]`
      : tw`min-h-[55vh] flex items-center justify-center text-center bg-empower`};
`;

const HeroImage = styled.img<{ image?: string }>`
  ${({ image }) => (image ? tw`pt-10 md:pt-24 xl:pt-0` : tw``)};
`;
const HeroHero = styled.div<{ image?: string }>`
  ${({ image }) =>
    image
      ? tw`flex items-center md:gap-14 flex-col xl:flex-row xl:justify-between pt-10 xl:pt-24`
      : tw``};

  > div {
    ${({ image }) => (image ? tw`xl:w-[50%] w-full` : tw`w-full`)};
  }
  > img {
    ${tw`md:w-[75%] xl:w-[50%] w-full`}
  }
`;

export const HeroComponent = ({
  heading,
  subheading,
  descriptions,
  buttonClassName,
  buttonClassName2,
  buttonText2,
  buttonText,
  image,
  buttonIcon,
  spanText,
  heading2,
  about,
  subtext,
}: HeroPropsType) => {
  return (
    <HeroContainer image={image}>
      <Container>
        <HeroHero image={image}>
          <div>
            <HeroContent image={image}>
              <HeroHeading image={image}>
                {heading} <HeadingSpan>{spanText}</HeadingSpan> {subheading}
              </HeroHeading>
              <HeroHeading image={image}>
                <HeadingSpan>{about}</HeadingSpan> {subheading}
              </HeroHeading>
              {subtext}
              <HeroHeading2>{heading2}</HeroHeading2>
              <HeroParagraph image={image}>{descriptions}</HeroParagraph>
              <HeroButtonContainer image={image}>
                <Button
                  children={`${buttonText}`}
                  className={buttonClassName}
                />
                <Button
                  className={buttonClassName2}
                  icon={buttonIcon}
                  btnFlex={image ? true : false}
                  children={`${buttonText2}`}
                />
              </HeroButtonContainer>
            </HeroContent>
          </div>
          <>
            <HeroImage src={image} />
          </>
        </HeroHero>
      </Container>
    </HeroContainer>
  );
};
