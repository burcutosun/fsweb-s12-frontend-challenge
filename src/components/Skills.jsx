import { useContext } from "react";
import DataContext from "../context/DataContext";

export const Skills = () => {
  const { langData } = useContext(DataContext);
  const { header, content } = langData.skills;

  return (
    <div className="w-screen h-[31rem] relative dark:bg-[#484148]">
      <img
        className="absolute bottom-10 left-0"
        src="./assets/decoration/Rectangle 22.png"
        alt=""
      />
      <div className=" font-medium leading-[3.631rem] text-[#0A0A14] dark:text-[#F4F4F4] text-[3rem] text-center py-[3rem]">
        {header}
      </div>
      <div className="flex justify-between gap-5 w-[58.875rem] h-[10.375rem] mx-auto">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt={item.text.toLowerCase()} />
            <label className="font-medium leading-[2.25rem] text-[#777777] dark:text-[#D9D9D9] text-[1.5rem]">
              {item.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
