import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import MOtherBacking from "../assets/backing.svg";
import BlogImage from "../assets/blog.svg";
import getloan from "../assets/getloan.svg";
import giveloan from "../assets/giveloan.svg";
import guloan from "../assets/gurantee.svg";
import HamzatImage from "../assets/hamzat.svg";
import Hammage from "../assets/hamzat1.svg";
import Market from "../assets/mark.png";
import SmileImage from "../assets/smile.svg";
import TailorImage from "../assets/tailor.svg";
import Mother from "../assets/motherwithboy.png";
import Boy from "../assets/boy.svg";
import marketwomen from "../assets/marketwomen.svg";
interface NavigationInterface {
  title: string;
  pathname: string;
  scrollOffset?: number;
}

export const navigationLinks: Array<NavigationInterface> = [
  { title: "What we do", pathname: "what-we-do", scrollOffset: -50 },
  { title: "SchoolMoni", pathname: "/schoolmoni", scrollOffset: -70 },
  { title: "About us", pathname: "/aboutUs", scrollOffset: -70 },
  { title: "Our Impact", pathname: "/", scrollOffset: -100 },
  { title: "How it works", pathname: "/", scrollOffset: -40 },
];

interface EmpowerWomen {
  img?: string;
  description?: string;
  amount?: string;
  guarantee?: string;
  progressWidth?: string;
}

export const empowerData: EmpowerWomen[] = [
  {
    img: HamzatImage,
    description:
      "N100,000 helps Hafzat to buy yam flour from the rural markets to resell in Lagos. ",
    amount: "N50,000",
    guarantee: "guaranteed of N100,00 goal",
    progressWidth: "50%",
  },

  {
    img: Hammage,
    description:
      "Victoria needs N150,000 for her child to resume to UI to study Medicine.",
    amount: "N120,000",
    guarantee: "guaranteed of N150,00 goal",
    progressWidth: "70%",
  },

  {
    img: TailorImage,
    description:
      "Helen is a bag maker. She needs N200,000 to buy an industrial machine for her business.",
    amount: "N90,000",
    guarantee: " guaranteed of N200,00 goal",
    progressWidth: "45%",
  },

  {
    img: HamzatImage,
    description:
      "N100,000 helps Hafzat to buy yam flour from the rural markets to resell in Lagos. ",
    amount: "N50,000",
    guarantee: "guaranteed of N100,00 goal",
    progressWidth: "50%",
  },

  {
    img: Hammage,
    description:
      "Victoria needs N150,000 for her child to resume to UI to study Medicine.",
    amount: "N120,000",
    guarantee: "guaranteed of N150,00 goal",
    progressWidth: "70%",
  },

  {
    img: TailorImage,
    description:
      "Helen is a bag maker. She needs N200,000 to buy an industrial machine for her business.",
    amount: "N90,000",
    guarantee: " guaranteed of N200,00 goal",
    progressWidth: "45%",
  },

  {
    img: HamzatImage,
    description:
      "N100,000 helps Hafzat to buy yam flour from the rural markets to resell in Lagos. ",
    amount: "N50,000",
    guarantee: "guaranteed of N100,00 goal",
    progressWidth: "50%",
  },

  {
    img: Hammage,
    description:
      "Victoria needs N150,000 for her child to resume to UI to study Medicine.",
    amount: "N120,000",
    guarantee: "guaranteed of N150,00 goal",
    progressWidth: "70%",
  },

  {
    img: TailorImage,
    description:
      "Helen is a bag maker. She needs N200,000 to buy an industrial machine for her business.",
    amount: "N90,000",
    guarantee: " guaranteed of N200,00 goal",
    progressWidth: "45%",
  },
];

type BuildingType = {
  title?: string;
  paragraph?: string;
  paragraph2?: string;
  buttonText?: string;
  buttonText2?: string;
  subtitle?: string;
  image?: string;
  color?: string;
};

export const building: BuildingType = {
  title: "Empowering Women,",
  subtitle: "Building Stronger Households",
  buttonText: "About Us",
  buttonText2: "Sponsor a woman",
  paragraph:
    "Enable is empowering women for themselves and their children. Our work is built on experience from over a decade of direct intervention by our flagship organization, The Destiny Trust, to rescue children within vulnerable groups. Over 90% of disadvantaged children we work with are under the care of low-income single mothers, widows and displaced women.",
  paragraph2:
    "Women are vital to building stronger households that can support the development of children. For the same reason, they are the pivot for a sustainable education and care plan for children. This is why empowering women for themselves and the support of children is central to our agenda for children and goal of rebuilding stronger households and communities.",
  image: Market,
};

type BlogType = {
  title?: string;
  paragraph?: string;
  image?: string;
  activeBtn?: boolean;
};

export const blogData: BlogType[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat ut leo.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: BlogImage,
    activeBtn: true,
  },

  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat ut leo.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: BlogImage,
    activeBtn: false,
  },

  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat ut leo.",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: BlogImage,
    activeBtn: false,
  },
];

type GridType = {
  img?: string;
  title?: string;
  paragraph?: string;
};

export const gridData: GridType[] = [
  {
    img: getloan,
    title: "Get Loan",
    paragraph:
      "Borrow to start or grow your business.No collateral. No interest if you pay back when due.",
  },
  {
    img: guloan,
    title: "Guarantee a loan",
    paragraph:
      "If you guarantee a woman's loan repayment, you improve their chances of getting access to credit. You can assure repayment of as little as N20,000.",
  },
  {
    img: giveloan,
    title: "Give Loan",
    paragraph:
      "Lend to enterprising low-income women to do business and earn income to support themselves and children.",
  },
];

export const socials = [
  {
    icon: BsFacebook,
    size: 30,
  },
  {
    icon: BsTwitter,
    size: 30,
  },
  {
    icon: BsYoutube,
    size: 30,
  },
  {
    icon: BsInstagram,
    size: 30,
  },
];

export const companyLink = [
  {
    title: "About Us",
    pathname: "/aboutUs",
  },
  {
    title: "Our Impact",
    pathname: "/",
  },
  {
    title: "FAQs",
    pathname: "/",
  },
  {
    title: "Contact & Support",
    pathname: "/",
  },
];
export const servicedLink = [
  {
    title: "Apply for loan",
    pathname: "/",
  },
  {
    title: "Sponsor",
    pathname: "/",
  },
  {
    title: "Projects",
    pathname: "/",
  },
  {
    title: "SchoolMoni",
    pathname: "/schoolmoni",
  },
];

export const partnerLogos = [
  "/src/assets/Ayro.svg",
  "/src/assets/GrayGrids.svg",
  "/src/assets/lineicons.svg",
  "/src/assets/Uideck.svg",
];

interface WhatWeDoBannerData {
  img?: string;
  description?: string;
  name?: string;
  occupation?: string;
}

export const WhatWeDoBannerData: WhatWeDoBannerData[] = [
  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },

  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },

  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },

  {
    img: SmileImage,
    description:
      "“Thanks to Enable's support, I have been able to grow my business steadily and gain a foothold in the market. The loan allowed me to expand my product range and improve my shop's infrastructure. The financial boost has not only increased my revenue but has also instilled confidence in my entrepreneurial abilities.”",
    name: "Hamzat",
    occupation: "Yam Seller",
  },
];

type FrequntlyAskedQuestion = {
  heading: string;
  description: string;
};

export const FAQuestions: FrequntlyAskedQuestion[] = [
  {
    heading: "Do I quality for a Enable loan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam facere quod rerum. Eveniet, minus esse repellendus facere  ducimus animi excepturi odit. Numquam dicta dolores ut eaque doloribus eaeveniet",
  },

  {
    heading: "Do I quality for a Enable loan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam facere quod rerum. Eveniet, minus esse repellendus facere  ducimus animi excepturi odit. Numquam dicta dolores ut eaque doloribus eaeveniet",
  },

  {
    heading: "Do I quality for a Enable loan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam facere quod rerum. Eveniet, minus esse repellendus facere  ducimus animi excepturi odit. Numquam dicta dolores ut eaque doloribus eaeveniet",
  },
];

type EnableGlobaleData = {
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  heading?: string;
  columnReversed?: boolean;
};

export const EnableGlobalData: EnableGlobaleData[] = [
  {
    description:
      "Enable is a global non-profit organization that enhances the availability of funding for entrepreneurs in Nigeria. With over N1 billion raised on the platform, Enable has supported more than 2.5 million individuals. To obtain a loan from Enable, there is no need for a credit score, collateral, or business income. Are you ready to seize the opportunity and be the next success story?",
    imageSrc: MOtherBacking,
    buttonText: "Get A Loan",
    columnReversed: false,
  },
];

type SchoolMoniData = {
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  columnReversed?: boolean;
  heading?: string;
};
export const SchoolMoniData: SchoolMoniData[] = [
  {
    imageSrc: Mother,
    heading: "About SchoolMoni",
    description:
      "Enable assist parents with fluctuating or seasonal incomes in ensuring continuous enrollment of their children throughout the academic year. Often, a shortage of funds at the start of the school term leads to children either not enrolling or being withdrawn from school. School Fee Loans alleviate the burden of upfront educational expenses by spreading out the financial obligations associated with their children's education. These loans play a crucial role in preventing school dropouts or missed classes during periods of financial instability within households, where parents may encounter difficulties in covering school fees, purchasing uniforms, acquiring materials, or arranging transportation.",
    buttonText: "Guarantee SchoolMoni",
    columnReversed: false,
  },
];

type ChildData = {
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  text1?: string;
  text2: string;
  columnReversed?: boolean;
  heading?: string;
};
export const ChildData: ChildData[] = [
  {
    imageSrc: Boy,
    description:
      "Studies indicate that providing children with quality education has a significant impact on poverty reduction, inequality mitigation, enhanced life expectancy, and empowerment of women and girls in decision-making. Nevertheless, a staggering number of 617 million children globally either lack access to education or fail to attain fundamental proficiency levels in essential subjects like reading and mathematics. This lack of proper education among children perpetuates the cycle of poverty and global inequality, persisting across successive generations.",
    buttonText: "",
    columnReversed: true,

    text1:
      "In low-income countries, the primary education completion rate for children is only 33%, indicating that one out of every three children fails to finish their primary schooling.",
    text2:
      "In low-income countries, the literacy rate for girls stands at 28%, meaning that more than a quarter of girls are unable to acquire basic reading and writing skills.",
  },
];

export const malcom = [
  {
    // icon: CgQuote,
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    name: "Malcom X",
  },
];

export const about = [
  {
    heading:
      "Lorem ipsum dolor sit amet consectetur. Tempus magna ultrices aenean non. Mollis morbi enim maecenas ultrices a. Aliquam cras malesuada.",
    text1:
      " Lorem ipsum dolor sit amet consectetur. Est tortor augue nunc turpis lobortis. Ac et eget diam enim elementum nunc fringilla ultrices. Dui imperdiet velit non vitae laoreet. In dolor arcu vestibulum id risus maecenas proin tempor. Magna aliquam aliquam turpis risus amet duis tellus consequat scelerisque. Eget feugiat enim consectetur ac quis sed. Nec neque leo lectus proin scelerisque eu bibendum dui. Nisi a aliquet elit velit tempor tellus cursus. Feugiat egestas ultricies fames ut. Bibendum ultrices adipiscing at in nibh posuere sit eget.",
    text2:
      " At eget quam malesuada scelerisque odio nisi. Ac at tortor nibh at nulla arcu ut amet. Diam praesent tortor eget vulputate ipsum. Semper augue mi quis gravida eget facilisi massa sit. A augue ornare dolor nisl feugiat. Ac porta amet euismod massa blandit. Ultricies amet nullam mattis enim orci viverra",
  },
];

type Touch = {
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  heading?: string;
  columnReversed?: boolean;
};
export const Touch: Touch[] = [
  {
    imageSrc: marketwomen,
    heading: "What we do",
    description:
      "Lorem ipsum dolor sit amet consectetur. Erat a lorem mi egestas diam dui fringilla in mi. Habitasse in ornare venenatis congue ultrices scelerisque in. In amet nascetur ultricies quam in quis. Integer ante enim purus sit egestas. In mattis consectetur volutpat in elementum in fusce cursus sed. Fames vulputate posuere eget enim. Pellentesque interdum vivamus interdum aliquet consectetur egestas quam egestas risus. Tincidunt erat neque nunc pellentesque in at a quis. Vel sit curabitur sed natoque cursus enim iaculis risus. Eleifend nunc mattis varius ultrices praesent orci. Diam mauris egestas in id vitae. Aliquam vulputate eu magna nec amet est arcu.",
    columnReversed: true,
    buttonText: "Get in touch",
  },
];

type Loan = {
  img?: string;
  title?: string;
  paragraph?: string;
};

export const loanData: Loan[] = [
  {
    img: giveloan,
    title: "It's a loan, not a donation",
    paragraph:
      " Enable is not in the business of lending. Enable is a social enterprise that gets women loan ready and facilitates access to credit given by partner digital lenders and financial institutions that care about women and families. ",
  },
  {
    img: giveloan,
    title: "It's a loan, not a donation",
    paragraph:
      " Enable is not in the business of lending. Enable is a social enterprise that gets women loan ready and facilitates access to credit given by partner digital lenders and financial institutions that care about women and families. ",
  },
  {
    img: giveloan,
    title: "It's a loan, not a donation",
    paragraph:
      " Enable is not in the business of lending. Enable is a social enterprise that gets women loan ready and facilitates access to credit given by partner digital lenders and financial institutions that care about women and families. ",
  },
];
