import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { WhatWeDoBannerData } from "../../../../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "twin.macro";
import { Tilt } from "../../../atom/vanilla";
import { Container } from "../../../shared";

const EmpowerContainer = styled.section`
  ${tw`bg-purple mt-20 text-white py-10 xl:py-20`}
`;

const EmpowerImage = styled.img`
  ${tw`w-full lg:w-[400px]`}
`;
const EmpowerDescription = styled.p`
  ${tw`xl:pr-28 text-sm font-extralight lg:text-base leading-6 lg:leading-8`}
`;
const EmpowerAmount = styled.p`
  ${tw`font-medium`}
`;
const EmpowerGuaranteed = styled.p`
  ${tw``}
`;

export const WhatWeDoBanner = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <EmpowerContainer>
      <Container>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            keyboard={true}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl, nextEl }}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },

              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {WhatWeDoBannerData?.map((d, index) => {
              return (
                <SwiperSlide>
                  <div
                    key={index}
                    className="md:flex items-center gap-10 xl:gap-0 "
                  >
                    <div className="w-full lg:basis-[40%]">
                      <Tilt>
                        {" "}
                        <EmpowerImage src={d?.img} />
                      </Tilt>
                    </div>
                    <div className="w-full lg:basis-[50%] xl:basis-[60%] py-10">
                      <EmpowerDescription>{d?.description}</EmpowerDescription>
                      <div className="py-5 text-sm lg:text-base">
                        <EmpowerAmount>{d?.name}</EmpowerAmount>
                        <EmpowerGuaranteed>{d?.occupation}</EmpowerGuaranteed>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex items-center justify-around w-full mt-0 mx-auto z-50">
            <div
              ref={(node) => setPrevEl(node)}
              className="bg-purple text-white h-8 w-8 rounded-full xl:flex items-center justify-center cursor-pointer absolute left-[35%] top-[40%] hidden z-20"
            >
              <MdArrowBack size={15} />
            </div>

            <div
              ref={(node) => setNextEl(node)}
              className="h-8 w-8 rounded-full xl:flex items-center justify-center cursor-pointer absolute right-[5%] top-[40%] bg-purple text-white hidden z-20"
            >
              <AiOutlineArrowRight size={15} />
            </div>
          </div>
        </div>
      </Container>
    </EmpowerContainer>
  );
};
