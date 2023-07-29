import styled from "styled-components";
import tw from "twin.macro";
import { ChildData, SchoolMoniData } from "../../../../constants";
import { FlexComponent } from "../../../atom/flex";
import { Container } from "../../../shared";

const BackgroundStyle = styled.div`
  ${tw`bg-gradient-to-r from-white to-[#FCF5FF]`}
`;
const Background = styled.div`
  ${tw`bg-hero_bg bg-cover`}
`;
const PaddingContainer = styled.div`
  ${tw`py-[5rem]`}
`;
export const Studies = () => {
  return (
    <BackgroundStyle>
      <Background>
        <div>
          <Container>
            <PaddingContainer>
              <div className="pb-10">
                <FlexComponent
                  data={ChildData}
                  buttonClassName=""
                  columnReversed={true}
                  descClassName="text-sm md:text-base"
                />
              </div>
              <div>
                <FlexComponent
                  buttonClassName=" border-purple text-white rounded-md bg-purple px-3 py-4  border-[2px] hover:opacity-70 font-medium text-sm"
                  data={SchoolMoniData}
                  descClassName="text-sm md:text-base"
                />
              </div>
            </PaddingContainer>
          </Container>
        </div>
      </Background>
    </BackgroundStyle>
  );
};
