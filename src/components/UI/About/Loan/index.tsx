import styled from "styled-components";
import tw from "twin.macro";
import { loanData } from "../../../../constants";
import { Container } from "../../../shared";

const GridCards = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 justify-center`}
`;
const GridContentContainer = styled.div`
  ${tw`py-5 lg:pr-14`}
`;
const GridCardTitle = styled.h2`
  ${tw` text-[20px] font-medium`}
`;

const GridCardParagraph = styled.p`
  ${tw`pt-2 text-sm`}
`;

const GridImage = styled.img`
  ${tw`w-[20%] xl:w-[25%]`}
`;

const GridContainer = styled.section`
  ${tw`py-12`}
`;
const Header = styled.h1`
  ${tw`text-[30px] text-center font-bold`}
`;
export const Loan = () => {
  return (
    <GridContainer>
      <Container>
        <Header>
          <h1 className="text-4xl lg:pt-4 pb-7">How it Works</h1>
        </Header>
        <GridCards>
          {loanData?.map((grid, index) => {
            return (
              <div key={index}>
                <GridImage src={grid?.img} />
                <GridContentContainer>
                  <GridCardTitle>{grid?.title}</GridCardTitle>
                  <GridCardParagraph>{grid?.paragraph}</GridCardParagraph>
                </GridContentContainer>
              </div>
            );
          })}
        </GridCards>
      </Container>
    </GridContainer>
  );
};
