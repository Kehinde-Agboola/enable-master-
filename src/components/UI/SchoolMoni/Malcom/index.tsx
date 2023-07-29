import { malcom } from "../../../../constants";
import tw from "twin.macro";
import styled from "styled-components";
import { CgQuote } from "react-icons/cg";

const Quote = styled.div`
   {
    ${tw`flex`}
  }
`;
const Container = styled.div`
   {
    ${tw` sm:max-w-[70%] md:max-w-[46%] min-h-[50%] m-auto py-10`}
  }
`;
const Text = styled.div`
   {
    ${tw`text-white font-bodins italic leading-9`}
  }
`;
export const Malcom = () => {
  return (
    <div className="bg-purple pb-10">
      <Container>
        {malcom?.map((el, index) => (
          <Text>
            <div key={index}>
              <Quote>
                <span>
                  <CgQuote size="50px" />
                </span>
                <p className="self-end mt-7 px-3 md:px-0">{el.quote}</p>
              </Quote>
              <span className="float-right px-5 md:px-0 underline">
                {el.name}
              </span>
            </div>
          </Text>
        ))}
      </Container>
    </div>
  );
};
