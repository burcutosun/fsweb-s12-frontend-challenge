import { useContext } from "react";
import DataContext from "../context/DataContext";

export const Profile = () => {
  const { langData } = useContext(DataContext);
  const { about, header, info } = langData.profile;

  return (
    <div className="w-screen h-[34rem] bg-[#F4F4F4] dark:bg-[#2A262B] dark:text-white">
      <div className="font-medium leading-[2.723rem] text-[2.25rem] text-center py-[3rem]">
        {header}
      </div>
      <div className="flex justify-center items-center gap-[4rem]">
        <div className="relative">
          <div className="w-[31.75rem] h-[20.125rem] bg-[#52525280] rounded-[12px] absolute top-2 left-2 dark:bg-[rgba(82, 82, 82, 0.5)]"></div>
          <div className="gap-10 w-[31.75rem] h-[20.125rem] bg-white rounded-[12px] relative z-10  dark:bg-[#525252]">
            <h2 className="inline-block font-['Playfair_Display'] leading-[1.99rem] text-[#EA2678] text-[1.5rem] ml-[2.5rem] my-8">
              {info.header}
            </h2>
            <div className="w-[25rem] mx-[2.5rem]">
              <div className="grid grid-rows-4 grid-flow-col gap-2.5 dark:text-white">
                <div className="font-semibold leading-[1.361rem] text-[1.125rem]">
                  {info.firstLabel}
                </div>
                <div className="font-semibold leading-[1.361rem] text-[1.125rem]">
                  {info.secondLabel}
                </div>
                <div className="font-semibold leading-[1.361rem] text-[1.125rem]">
                  {info.thirdLabel}
                </div>
                <div className="font-semibold leading-[1.361rem] text-[1.125rem]">
                  {info.fourthLabel}
                </div>
                <div className="leading-[1.361rem] text-[1.125rem]">
                  {info.dateOfBirth}
                </div>
                <div className="leading-[1.361rem] text-[1.125rem]">
                  {info.cityOfResidence}
                </div>
                <div className="leading-[1.361rem] text-[1.125rem]">
                  {info.educationalStatus}
                </div>
                <div className="leading-[1.361rem] text-[1.125rem]">
                  {info.preferredPosition}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  w-[31.25rem] h-[19.563rem] p-[1rem] relative">
          <img
            className="absolute top-[3.7rem] left-2"
            src="./assets/profile/Rectangle 39.png"
          />
          <h2 className="font-['Playfair_Display'] leading-[1.99rem] text-[1.5rem] mb-[2rem] relative">
            {about.header}
          </h2>
          <p className="leading-[1.68rem] text-[1.125rem] mb-[2rem]">
            {about.text}
          </p>
        </div>
      </div>
    </div>
  );
};
