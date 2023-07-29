import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import tw from "twin.macro";
import { blogData } from "../../../../constants";
import { Button } from "../../../atom/button";
import { Container } from "../../../shared";

const BlogHeader = styled.h1`
  ${tw`md:py-5 lg:py-10 lg:pb-5 pt-3 md:pt-5 text-2xl md:text-3xl lg:text-4xl font-medium text-purple text-center`}
`;

const BlogCards = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10`}
`;

const BlogCard = styled.div`
  ${tw`py-5 shadow-md  w-full hover:bg-gray-50 transition-all ease-in-out duration-700 cursor-pointer`}
`;

const BlogContentContainer = styled.div`
  ${tw`py-5 pr-14 pl-2`}
`;
const BlogCardTitle = styled.h2`
  ${tw` font-medium `}
`;

const BlogCardParagraph = styled.p`
  ${tw`pt-5 text-body text-sm`}
`;

const BlogImage = styled.img`
  ${tw`w-[100%]`}
`;

const BlogContainer = styled.section`
  ${tw`py-5 pb-20`}
`;

const BlogButton = styled.div`
  ${tw`ml-2`}
`;
export const Blog = () => {
  return (
    <BlogContainer>
      <Container>
        <BlogHeader>From Our Blog</BlogHeader>
        <BlogCards>
          {blogData?.map((blog, index) => {
            return (
              <BlogCard key={index}>
                <BlogImage src={blog?.image} />
                <BlogContentContainer>
                  <BlogCardTitle>{blog?.title}</BlogCardTitle>
                  <BlogCardParagraph>{blog?.paragraph}</BlogCardParagraph>
                </BlogContentContainer>
                <BlogButton>
                  <Button
                    children="Read News"
                    buttonIcon={<IoIosArrowRoundForward size={25} />}
                    className={`${
                      blog?.activeBtn
                        ? "bg-purple text-white text-sm w-[40%] py-2 hover:opacity-70 font-bold"
                        : "text-purple border-[2px] border-purple w-[40%] py-2 hover:opacity-70  font-bold text-sm"
                    }`}
                  />
                </BlogButton>
              </BlogCard>
            );
          })}
        </BlogCards>
        <div className=" my-8 flex items-center justify-center">
          <Button
            children="See All"
            className="bg-purple text-white px-8 py-2 hover:opacity-80"
          />
        </div>
      </Container>
    </BlogContainer>
  );
};
