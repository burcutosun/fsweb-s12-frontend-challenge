import { useContext } from "react";
import DataContext from "../context/DataContext";

export const Footer = () => {
  const { langData, language } = useContext(DataContext);
  const { footer } = langData;

  return (
    <div className="w-screen h-[25rem] flex justify-center items-center gap-14 relative dark:bg-[#484148]">
      <img
        className={
          language === "en"
            ? "absolute top-[45%] left-[38%]"
            : "absolute top-[60%] left-[40%]"
        }
        src="./assets/decoration/Rectangle 40.png"
      />
      <div className="w-[33.846rem] h-[7.875rem] font-medium leading-[3.938rem] text-[2.625rem] text-right relative dark:text-white">
        {footer.phrase}
      </div>
      <div className="w-[15rem] h-[8.563rem]">
        <a
          className="block font-medium leading-[2.25rem] text-[1.5rem] text-[#1769FF]"
          href={footer.githubLink}
        >
          {footer.github}
        </a>
        <a
          className="block font-medium leading-[2.25rem] text-[1.5rem] text-[#0A0A14] dark:text-white"
          href={footer.blogLink}
        >
          {footer.blog}
        </a>
        <a
          className="block font-medium leading-[2.25rem] text-[1.5rem] text-[#0077B5]"
          href={footer.linkedinLink}
        >
          {footer.linkedin}
        </a>
        <a
          className="block font-medium leading-[2.25rem] text-[1.5rem] text-[#AF0C48]"
          href={footer.emailLink}
        >
          {footer.email}
        </a>
      </div>
    </div>
  );
};
