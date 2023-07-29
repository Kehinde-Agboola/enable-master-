import styled from "styled-components";
import tw from "twin.macro";
import { FlexComponent } from "../../../atom/flex";
import { Touch } from "../../../../constants";
import { Container } from "../../../shared";
import { Join } from "../Join/index";
import { Loan } from "../Loan";
const BackgroundStyle = styled.div`
  ${tw`bg-gradient-to-r from-white to-[#FCF5FF]`}
`;
const Background = styled.div`
  ${tw`bg-hero_bg bg-cover mt-[5rem] pt-[5rem]`}
`;
export const Change = () => {
  return (
    <BackgroundStyle>
      <Background>
        <div>
          <Container>
            <FlexComponent
              data={Touch}
              columnReversed={true}
              buttonClassName=" border-purple text-white rounded-md bg-purple px-3 py-4  border-[2px] hover:opacity-70 font-medium text-sm"
            />
          </Container>
          <Join />
          <Loan />
        </div>
      </Background>
    </BackgroundStyle>
  );
};
