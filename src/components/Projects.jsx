import { useContext } from "react";
import DataContext from "../context/DataContext";

export const Projects = () => {
  const { langData } = useContext(DataContext);
  const { header, projects, appText, githubText } = langData.projects;

  return (
    <div className="flex flex-col items-center w-screen h-[57rem] dark:bg-[#484148] dark:text-white">
      <div className="font-medium text-[2rem] pb-[5rem] pt-[3rem]">
        {header}
      </div>
      <div className="flex gap-[4rem]">
        {projects.map((item, index) => (
          <>
            <div
              key={index}
              className={`w-[31.25rem] h-[41.75rem] ${
                index === 0
                  ? "bg-[#DDEEFE] dark:bg-[#2D3235]"
                  : "bg-[#D9F6F1] dark:bg-[#495351]"
              }  rounded-[0.75rem] p-[3rem] relative`}
            >
              <h3 className="font-['Playfair_Display'] font-bold text-[1.813rem] leading-[2.416rem]">
                {item.header}
              </h3>
              <p className="leading-6 my-[1rem]">{item.content}</p>
              {item.tags.map((tag, index) => (
                <button
                  key={index}
                  className="w-[5.688rem] h-[2rem] bg-white dark:bg-[#525252] rounded-[4.75rem] m-[0.5rem] font-bold font-['Playfair_Display']"
                >
                  {tag}
                </button>
              ))}
              <div
                className={`flex justify-between ${
                  index === 0 ? "mt-[5rem]" : "mt-[2rem]"
                }`}
              >
                <a
                  className="font-semibold leading-[1.875rem] text-[1.25rem]"
                  href={item.githubLink}
                >
                  {githubText}
                </a>
                <a
                  className="font-semibold leading-[1.875rem] text-[1.25rem]"
                  href={item.appLink}
                >
                  {appText}
                </a>
              </div>
              <img
                className="absolute -bottom-11 -left-1"
                src={item.img}
                alt="Description of the image"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
