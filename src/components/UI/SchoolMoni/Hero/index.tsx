import Moni from "../../../../assets/moni-hero.svg";
import { HeroComponent } from "../../../atom/hero";

export const Hero = () => {
  return (
    <HeroComponent
      text="schoolMoni"
      heading="Invest in your child's education to guarantee a bright future for them."
      descriptions="Lorem ipsum dolor sit amet consectetur. Sed scelerisque commodo
            nisldd amet dolor nulla eu fusce. Ridiculus viverra justo nisl
            vitae. Iaculis blandit urna ut pretium neque morbi sit tortor
            id. Lobortis cras amet lectus nulla dignissim ultricies ipsum
            enim"
      buttonText="Get SchoolMoni"
      buttonText2="Guarantee SchoolMoni"
      buttonClassName="bg-purple text-white md:w-1/2 py-4 xl:py-3 rounded-md hover:opacity-70"
      buttonClassName2="md:w-1/2 border-black  py-4 xl:py-3  border-2 rounded-md hover:opacity-70"
      image={Moni}
    />
  );
};
