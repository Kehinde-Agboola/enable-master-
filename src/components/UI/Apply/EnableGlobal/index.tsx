import { EnableGlobalData } from "../../../../constants";
import { FlexComponent } from "../../../atom/flex";

export const EnableGlobal = () => {
  return (
    <div className="my-14 lg:my-20">
      <FlexComponent
        buttonClassName="w-[50%] lg:w-[25%] border-purple text-purple  py-4 xl:py-3  border-[2px] hover:opacity-70 font-medium text-sm"
        data={EnableGlobalData}
        descClassName="lg:text-lg"
      />
    </div>
  );
};
