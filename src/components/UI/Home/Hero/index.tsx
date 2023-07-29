import { BsPlayCircleFill } from "react-icons/bs";
import HeroImg from "../../../../assets/hero.svg";
import { HeroComponent } from "../../../atom/hero";

export const Hero = () => {
  return (
    <HeroComponent
      heading="Empower Our"
      subheading="and families to
    prosper"
      spanText="Women"
      descriptions="Lorem ipsum dolor sit amet consectetur. Sed scelerisque commodo
            nisldd amet dolor nulla eu fusce. Ridiculus viverra justo nisl
            vitae. Iaculis blandit urna ut pretium neque morbi sit tortor
            id. Lobortis cras amet lectus nulla dignissim ultricies ipsum
            enim"
      buttonText="Apply now"
      buttonText2="How It Works"
      buttonClassName="bg-purple text-white md:w-1/2 py-4 xl:py-3 hover:opacity-70"
      buttonClassName2="md:w-1/2 border-black  py-4 xl:py-3  border-2 hover:opacity-70"
      image={HeroImg}
      buttonIcon={<BsPlayCircleFill size={50} />}
    />
  );
};
