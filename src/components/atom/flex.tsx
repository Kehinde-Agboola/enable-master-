import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "./button";
import { Tilt } from "./vanilla";

type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    description?: string;
    imageSrc?: string;
    text1?: string;
    text2?: string;
    heading?: string;
    buttonText?: string;
  }>;
  descClassName?: string;
};

const FlexContainer = styled.div<{ columnReversed?: boolean }>`
  ${({ columnReversed }) =>
    columnReversed
      ? tw`flex flex-col-reverse justify-center gap-10 lg:gap-10 lg:flex-row-reverse lg:justify-between items-center`
      : tw`flex-col-reverse lg:flex-row flex justify-center gap-10  lg:justify-between items-center`}

  > div:first-child {
    flex-basis: 50%;
  }
  > div:last-child {
    flex-basis: 40%;
    img {
      // width: 600px;
    }
  }
`;

const FlexHeading = styled.div`
  ${tw`text-purple text-[1.5rem] pb-3`}
`;
const FlexText = styled.div`
  ${tw`xl:max-w-[80%]`}
`;

const FlexParagraph = styled.p`
  ${tw`pb-3  font-extralight`}
`;

const FlexImage = styled.img`
  ${tw`w-full`}
`;

const FlexContent = styled.div`
  ${tw`w-full 
  lg:basis-[55%]
   lg:text-left`}
`;
export const FlexComponent = ({
  buttonClassName,
  columnReversed,
  data,
  descClassName,
}: FlexComponentProps) => {
  return (
    <>
      {data?.map((el, index) => {
        return (
          <FlexContainer columnReversed={columnReversed}>
            <FlexContent key={index}>
              <FlexHeading>{el.heading}</FlexHeading>
              <FlexParagraph className={`${descClassName}`}>
                {el?.description}
              </FlexParagraph>
              <FlexText>
                <ul>
                  <li className="pb-4">{el.text1}</li>
                  <li>{el.text2}</li>
                </ul>
              </FlexText>
              <div className="">
                <Button
                  className={buttonClassName}
                  children={`${el?.buttonText}`}
                />
              </div>
            </FlexContent>
            <div className="">
              <Tilt>
                <FlexImage src={`${el?.imageSrc}`} />
              </Tilt>
            </div>
          </FlexContainer>
        );
      })}
    </>
  );
};
