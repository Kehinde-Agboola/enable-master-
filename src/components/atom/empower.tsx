import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { empowerData } from "../../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "twin.macro";
import FlowerImage from "../../assets/flower.svg";
import { Container } from "../shared";
import { Button } from "./button";

interface EProps {
  heading?: string;
  paragraph?: string;
  data?: Array<{
    img: string;
    description: string;
    amount: string;
    guarantee: string;
    progressWidth?: string;
  }>;
}

const EmpowerHeading = styled.h1`
  ${tw`text-3xl  md:text-4xl xl:text-5xl font-bold text-purple lg:text-center`}
`;

const EmpowerPargraph = styled.p`
  ${tw`md:w-[80%] xl:w-[62%] text-body py-5 lg:text-center text-sm md:text-base`}
`;
const EmpowerContainer = styled.section`
  ${tw`bg-empower py-10`}
`;

const EmpowerHeadingContainer = styled.div`
  ${tw`flex flex-col items-center py-10`}
`;

const EmpowerImage = styled.img`
  ${tw`w-full`}
`;
const EmpowerDescription = styled.p``;
const EmpowerAmount = styled.p`
  ${tw`font-medium`}
`;
const EmpowerGuaranteed = styled.p`
  ${tw`text-body`}
`;

export const Empower = ({ heading, paragraph }: EProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <EmpowerContainer>
      <Container>
        <EmpowerHeadingContainer>
          <EmpowerHeading>{heading}</EmpowerHeading>
          <EmpowerPargraph>{paragraph}</EmpowerPargraph>
        </EmpowerHeadingContainer>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            // mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            navigation={{ prevEl, nextEl }}
            breakpoints={{
              0: { slidesPerView: 1 },

              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {empowerData?.map((d, index) => {
              return (
                <SwiperSlide>
                  <div
                    key={index}
                    className="bg-white shadow-xl rounded-sm hover:bg-gray-100 transition-all ease-in-out duration-1000 cursor-pointer"
                  >
                    <EmpowerImage src={d?.img} />
                    <div className="p-4 text-sm">
                      <EmpowerDescription>{d?.description}</EmpowerDescription>
                      <div className="flex items-center gap-2 pt-10">
                        <EmpowerAmount>{d?.amount}</EmpowerAmount>
                        <EmpowerGuaranteed>{d?.guarantee}</EmpowerGuaranteed>
                      </div>

                      {/* progress bar */}
                      <div
                        className={`my-3 w-full h-2 bg-progressBackground rounded-2xl`}
                      >
                        <div
                          className={`bg-progressGreen  h-2 rounded-2xl flex relative`}
                          style={{ width: `${d.progressWidth}` }}
                        >
                          <div className="bg-progressGreen basis-[95%] rounded-full"></div>
                          <span className="h-3 bg-progressGreen block rounded-full w-[12px] absolute right-0 -top-[2px]"></span>
                        </div>
                      </div>
                      {/* progress bar */}
                      <div className="flex justify-end">
                        <img src={FlowerImage} alt="flower" />
                      </div>
                      <Button
                        children="Guarantee A Loan"
                        className="mt-5 bg-purple px-8 hover:opacity-80 py-3 text-white text-sm mb-2"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex items-center justify-around w-full mt-0 mx-auto z-50">
            <div
              ref={(node) => setPrevEl(node)}
              className="bg-purple text-white h-8 w-8 rounded-full lg:flex items-center justify-center cursor-pointer absolute left-0 top-[60%] hidden"
            >
              <MdArrowBack />
            </div>
            <div
              ref={(node) => setNextEl(node)}
              className="h-8 w-8 rounded-full lg:flex items-center justify-center cursor-pointer absolute right-0 top-[60%] bg-purple text-white  hidden"
            >
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </Container>
    </EmpowerContainer>
  );
};
