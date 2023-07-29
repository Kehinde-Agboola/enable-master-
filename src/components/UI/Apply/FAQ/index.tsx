import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import styled from "styled-components";
import tw from "twin.macro";
import { FAQuestions } from "../../../../constants";
import { Container } from "../../../shared";

const FAQHeading = styled.h1`
  ${tw`text-4xl text-center font-medium text-purple py-5`}
`;

const FAQHead = styled.h2`
  ${tw`font-medium text-sm lg:text-base `}
`;
const FAQParagraph = styled.p`
  ${tw`text-body pt-8 transition-all ease-in-out duration-700 text-sm lg:pr-32 lg:leading-7`}
`;

const FAQContainer = styled.div`
  ${tw`pt-14 pb-20 `}
`;

const FAQCards = styled.div`
  ${tw`bg-white max-w-3xl mx-auto my-10 shadow-2xl`}
`;

const FAQCard = styled.div`
  ${tw`py-14 px-10`}
  border-bottom: 2px solid lightgray;
`;
export const FAQ = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <FAQContainer>
      <Container>
        <FAQHeading>Frequently Asked Questions</FAQHeading>
        <FAQCards>
          {FAQuestions?.map((d, i) => {
            return (
              <FAQCard key={i}>
                <div className="flex gap-4 justify-between">
                  <FAQHead
                    className={`${selected == i ? "text-purple" : "text-body"}`}
                  >
                    {d.heading}{" "}
                  </FAQHead>

                  {selected === i ? (
                    <BsArrowDownShort
                      className="text-xl rounded-full text-white bg-purple cursor-pointer"
                      onClick={() => toggle(i)}
                    />
                  ) : (
                    <AiOutlineArrowRight
                      className="cursor-pointer"
                      onClick={() => toggle(i)}
                    />
                  )}
                </div>
                {selected === i && <FAQParagraph>{d.description}</FAQParagraph>}
              </FAQCard>
            );
          })}
        </FAQCards>
      </Container>
    </FAQContainer>
  );
};
