import { Confirmation } from "../components/UI/Apply/Confirmation";
import { EnableGlobal } from "../components/UI/Apply/EnableGlobal/index.tsx";
import { FAQ } from "../components/UI/Apply/FAQ/index.tsx";
import { Partners } from "../components/UI/Home/Partners";
import { WhatWeDoHero } from "../components/UI/Apply/WhatWeDo";
import { WhatWeDoBanner } from "../components/UI/Apply/WhatWeDoBanner.tsx/index.tsx";
import { Container } from "../components/shared";

export const WhatWeDo = () => {
  return (
    <>
      <WhatWeDoHero />
      <Container>
        <EnableGlobal />
      </Container>
      <WhatWeDoBanner />
      <Confirmation />
      <FAQ />
      <Partners />
    </>
  );
};
