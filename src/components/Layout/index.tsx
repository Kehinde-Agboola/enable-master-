import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../Footer";
import { Navigation } from "../Nav";
import { useClickContextProvider } from "../hooks/use-click";
const LayoutContainer = styled.div`
  ${tw``}
`;

const Container = styled.main<{ click?: boolean }>`
  ${tw`font-poppins`};
  ${({ click }) =>
    click
      ? tw`bg-gray-200 transition-all ease-in-out duration-700 blur-[1px] lg:bg-transparent`
      : tw`bg-white`}
`;

const FooterContainer = styled.footer<{ click?: boolean }>`
  ${tw`font-poppins`};
  ${({ click }) =>
    click
      ? tw`bg-gray-200 transition-all ease-in-out duration-700 blur-[1px] lg:bg-transparent`
      : tw`bg-white`}
`;

export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { click, setClick } = useClickContextProvider();

  return (
    <LayoutContainer>
      <Navigation />
      <motion.div className="progress-bar mt-20" style={{ scaleX }} />
      <Container click={click} onClick={() => setClick(false)}>
        <Outlet />
      </Container>

      <FooterContainer click={click} onClick={() => setClick(false)}>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  );
};
