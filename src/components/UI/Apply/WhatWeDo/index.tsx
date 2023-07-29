import { HeroComponent } from "../../../atom/hero";

export const WhatWeDoHero = () => {
  return (
    <div>
      <HeroComponent
        heading="Are you seeking financial assistance to initiate or expand your"
        heading2="small business operations?"
        buttonText="Continue Application"
        buttonText2="Get A Loan"
        buttonClassName="
        w-[50%] xl:w-[20%] bg-purple text-white py-4 xl:py-3 hover:opacity-70 text-sm"
        buttonClassName2=" w-[50%] xl:w-[15%] border-purple text-purple py-4 xl:py-3 border-2 hover:opacity-70 text-sm"
      />
    </div>
  );
};
