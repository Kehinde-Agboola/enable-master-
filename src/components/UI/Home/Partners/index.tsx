import Marquee from "react-fast-marquee";
import styled from "styled-components";
import tw from "twin.macro";
import { partnerLogos } from "../../../../constants";
import { Container } from "../../../shared";
const Glogos = styled.div`
  ${tw`-mt-5 grid grid-cols-4 place-items-center gap-5 md:gap-10`}
`;
const IMG = styled.img`
   {
    ${tw`w-[100%] h-[100%]`}
  }
`;
export const Partners = () => {
  return (
    <div>
      <Container>
        <Marquee pauseOnHover autoFill>
          <div>
            <Glogos>
              <IMG>
                {partnerLogos?.map((img, index) => {
                  return <img src={`${img}`} alt="partner-logos" key={index} />;
                })}
              </IMG>
            </Glogos>
          </div>
        </Marquee>
      </Container>
    </div>
  );
};
