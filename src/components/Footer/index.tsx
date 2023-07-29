import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../assets/Logo.svg";
import { companyLink, servicedLink, socials } from "../../constants";
import { Container } from "../shared";
const Links = styled.ul`
  li {
    list-style: none;
    ${tw`py-[7px]`}
    > a {
      ${tw`py-5`}
    }
  }
`;
const HeadLink = styled.h3`
  ${tw`text-2xl md:pt-14 lg:pt-0 py-3 font-medium`}
`;
const CopyRight = styled.div`
  ${tw`text-sm pt-4 pb-10`}
`;
const HeadSocial = styled.div`
  ${tw`flex items-center justify-start gap-5`}
`;
const ContainerLink = styled.div`
  ${tw`pb-6 md:pb-0`}
`;
const FlexContainer = styled.div`
  ${tw`grid xl:grid-cols-5 md:grid-cols-1 gap-3`}
`;

export const Footer = () => {
  return (
    <div className="bg-purple text-white mt-20 py-20 font-poppins">
      <Container>
        <p className="pb-[5rem]">
          Disclaimer: Enable is not in the business of lending. Enable is a
          social enterprise that gets women loan ready and facilitates access to
          credit given by partner digital lenders and financial institutions
          that care about women and families. We also secure guarantees from
          kind-hearted members of the public to improve lenders' confidence in
          women.
        </p>
        <FlexContainer>
          <div className="font-[400] text-[15px]">
            <img src={logo} />
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, neque.
            </p>
            <p>+234 813 8002 859</p>
          </div>

          <ContainerLink className="pt-8 md:pt-0">
            <HeadLink>Company</HeadLink>
            <div>
              {companyLink?.map((link, index) => {
                return (
                  <Links>
                    <li key={index} className="font-[400] text-[15px]">
                      <Link to={link.pathname}>{link.title}</Link>
                    </li>
                  </Links>
                );
              })}
            </div>
          </ContainerLink>

          <ContainerLink className="pt-8 md:pt-0">
            <HeadLink>Services</HeadLink>
            <div>
              {servicedLink?.map((link, index) => {
                return (
                  <Links>
                    <li key={index} className="font-[400]">
                      <Link to={link.pathname}>{link.title}</Link>
                    </li>
                  </Links>
                );
              })}
            </div>
          </ContainerLink>
          <ContainerLink>
            <HeadLink>Contact</HeadLink>

            <Links className="font-[400] text-[15px]">
              <li>
                <a href="#">info@destinytrust.org</a>
              </li>
              <li>
                <a href="#">enable@empower women</a>
              </li>
              <li>
                TDT Centre, 6, Brilla F.M Road, <br />
                Off Bola Tinubu Road, Bogije <br />
                Town, Ibeju-Lekki, Lagos
              </li>
            </Links>
          </ContainerLink>

          <div>
            <HeadLink>Follow Us On</HeadLink>

            <HeadSocial>
              {socials?.map((social, index) => (
                <a href="#" key={index} className="py-5">
                  <social.icon size={social.size} key={index} />
                </a>
              ))}
            </HeadSocial>
            <CopyRight>
              <h2>&copy; 2023 Enable </h2>
            </CopyRight>
          </div>
        </FlexContainer>
      </Container>
    </div>
  );
};
