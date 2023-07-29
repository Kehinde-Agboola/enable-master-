import { Blog } from "../components/UI/Home/Blog";
import { Building } from "../components/UI/Home/Building";
import { EmpowerWomen } from "../components/UI/Home/Empower";
import { GridCard } from "../components/UI/Home/GridCard/GridCard";
import { Hero } from "../components/UI/Home/Hero";
import { Partners } from "../components/UI/Home/Partners";
import { SchoolMoni } from "../components/UI/Home/SchoolMoni/SchoolMoni";
export const Home = () => {
  return (
    <>
      <Hero />
      <GridCard />
      <EmpowerWomen />
      <SchoolMoni />
      <Building />
      <Blog />
      <Partners />
    </>
  );
};
