import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import styled from "styled-components";
import tw from "twin.macro";
import Enable from "../../assets/Logo.svg";
import { navigationLinks } from "../../constants";
import { Button } from "../atom/button";
import { useClickContextProvider } from "../hooks/use-click";
import { Container } from "../shared";

const Nav = styled.nav`
  ${tw`sticky top-0 z-20`}
`;
const NavHeader = styled.header<{ scrollNavbar?: boolean }>`
  ${tw` bg-purple text-sm  font-poppins transition-all ease-in-out duration-500`}
  ${({ scrollNavbar }) => scrollNavbar && tw`blur-[0px]`}
`;

const NavContent = styled.div`
  ${tw`flex items-center text-white justify-between lg:px-0 py-5`}
`;
const Logo = styled.img`
  ${tw`cursor-pointer`}
  width:120px;
`;
const NavMenu = styled.ul`
  ${tw`list-none gap-10 hidden lg:flex`}
`;
const NavLinks = styled.li``;
const ButtonContainer = styled.div`
  ${tw`hidden lg:flex items-center gap-8`}
`;
const NavContentFirstContainer = styled.div`
  ${tw`flex items-center justify-between gap-14`}
  flex-basis:63%
  
  @media screen and (min-width:768px) {
  }
`;

const MobileMenu = styled.ul`
  ${tw`list-none flex flex-col gap-8 text-lg`}
`;

const MobileMenuItem = styled.li<{ click?: boolean }>`
  opacity: 0;
  &:hover {
    transition: all ease-in-out 700ms;
  }
  animation: ${({ click }) =>
    click === true
      ? "fade 6s normal forwards ease-in-out"
      : "fadeout 6s normal forwards ease-in-out"};

  @keyframes fade {
    0% {
      opacity: 0;
    }

    25% {
      oapcity: 0.3;
    }
    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    100% {
      opacity: 1;
    }

    50% {
      oapcity: 0.5;
    }
    25% {
      opacity: 0.1;
    }

    0% {
      opacity: 10;
    }
  }
`;

export const MobileIcon = styled.div`
  ${tw`lg:hidden cursor-pointer text-2xl`};
`;

export const MobileContainer = styled.div<{
  click?: boolean;
}>`
  ${tw`flex flex-col items-center justify-center gap-8 lg:hidden  w-full md:w-1/2  transition-all ease-in-out duration-500 shadow-2xl text-purple bg-white absolute h-screen overflow-y-hidden`};
  left: ${({ click }) => (click ? "0" : "-100%")};
`;

export const Navigation = () => {
  const { click, handleClick } = useClickContextProvider();
  const [scrollNavbar] = useState(true);
  const toggleHome = (): void => {
    animateScroll.scrollToTop();
  };

  return (
    <Nav>
      <NavHeader scrollNavbar={scrollNavbar}>
        <Container>
          <>
            <NavContent>
              <NavContentFirstContainer>
                <RouterLink to="/">
                  <Logo src={Enable} alt="logo" onClick={toggleHome} />
                </RouterLink>
                <NavMenu>
                  {navigationLinks?.map(
                    ({ pathname, title, scrollOffset }, index) => {
                      return (
                        <NavLinks key={index}>
                          <Link
                            to={title}
                            spy={true}
                            smooth={true}
                            offset={scrollOffset}
                            duration={1500}
                          >
                            <NavLink to={{ pathname }} onClick={toggleHome}>
                              {title}
                            </NavLink>
                          </Link>
                        </NavLinks>
                      );
                    }
                  )}
                </NavMenu>
              </NavContentFirstContainer>

              <ButtonContainer>
                <CiGlobe size={25} />
                <Button
                  children="Get A loan"
                  className="bg-white text-purple text-sm px-6 py-[10px] hover:opacity-80"
                />
              </ButtonContainer>

              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>
            </NavContent>
          </>
        </Container>

        <MobileContainer click={click}>
          <MobileMenu>
            {navigationLinks?.map(
              ({ pathname, title, scrollOffset }, index) => {
                return (
                  <MobileMenuItem key={index} click={click}>
                    <Link
                      to={title}
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                      duration={1500}
                    >
                      <NavLink to={{ pathname }}>{title}</NavLink>
                    </Link>
                  </MobileMenuItem>
                );
              }
            )}
          </MobileMenu>

          <Button
            children="Get A loan"
            className="bg-purple text-white text-sm px-5 py-4 w-[45%] hover:opacity-70"
          />
        </MobileContainer>
      </NavHeader>
    </Nav>
  );
};
