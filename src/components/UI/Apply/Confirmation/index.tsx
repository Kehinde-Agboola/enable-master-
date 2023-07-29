import ReactPlayer from "react-player/youtube";
import styled from "styled-components";
import tw from "twin.macro";

const ConfirmationParagraph = styled.p`
  ${tw`w-full  lg:w-[65%] text-body text-sm md:text-lg py-5 leading-7  md:py-10 text-center`}
`;

const ConfirmationContainer = styled.div`
  ${tw`lg:flex items-center flex-col bg-gray-50 py-5 md:py-10 lg:py-16`}
`;

const ConfirmationVideo = styled.div`
  ${tw`w-1/2`}
`;
export const Confirmation = () => {
  return (
    <ConfirmationContainer>
      <ConfirmationParagraph>
        Enable places a strong emphasis on the qualities of individuals rather
        than solely relying on their credit history. Due to these principles, we
        offer funding opportunities to entrepreneurs in situations where
        traditional lenders may not provide support.
      </ConfirmationParagraph>

      <ConfirmationVideo className="player-wrapper">
        <ReactPlayer
          url="https://youtu.be/OvQCekfyP6c"
          className="react-player"
        />
      </ConfirmationVideo>
    </ConfirmationContainer>
  );
};
