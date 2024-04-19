import { useContext } from "react";
import DataContext from "../context/DataContext";

export const Hero = () => {
  const { langData, darkMode, toggleDarkMode, language, toggleLanguage } =
    useContext(DataContext);
  const { hero } = langData;

  return (
    <div className="w-screen h-[46rem] bg-[#F4F4F4] dark:bg-[#2A262B] relative">
      <img
        className="absolute top-0 left-[28%]"
        src="./assets/decoration/Ellipse 10.png"
      />
      <img
        className="absolute bottom-[12rem] right-0"
        src="./assets/decoration/Rectangle 18.png"
        alt=""
      />
      <div className="flex gap-2 justify-end items-center font-bold mr-[17rem] pt-[4.2rem] text-[#777777] text-[0.938rem] dark:text-[#D9D9D9]">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller w-[3.438rem] h-[1.813rem] rounded-[6.25rem] border-none bg-[#FFE86E] [--tglbg:#E92577] checked:bg-[#FFE86E] checked:[--tglbg:black] toggle:hover[--tglbg:#E92577] row-start-1 col-start-1 col-span-2"
          checked={darkMode}
          onClick={toggleDarkMode}
        />
        <label>{darkMode ? "DARK MODE" : "LIGHT MODE"}</label>
        <label>|</label>
        <button className="w-[10.5rem]" onClick={toggleLanguage}>
          {language === "en" ? (
            <>
              RETURN TO <span className="text-[#E92577]">TURKISH</span>
            </>
          ) : (
            <>
              <span className="text-[#E92577]">İNGİLİZCE</span> 'YE GEÇ
            </>
          )}
        </button>
      </div>
      <div className="w-[69.188rem] h-[30.813rem] mx-auto my-[3rem]">
        <div className="inline-block w-[65%] h-[100%] dark:text-[#FFFFFF] relative">
          <div className="absolute top-[6.1rem] left-[-0.9rem] z-0">
            <img src="./assets/hero/Rectangle 2.png" />
          </div>
          <div className="w-[42.438rem] h-[19.563rem] relative z-10">
            <p className="leading-[2.269rem] text-[1.875rem]">
              {hero.greeting}
            </p>
            <div className="font-medium leading-[4rem] text-[2.625rem] my-[1.5rem] relative">
              <p className="pr-[2rem]">{hero.text}</p>
            </div>
          </div>
          <div className="w-[40rem] h-[7.661rem] mt-[3rem]">
            <a
              className="inline-block w-[2.125rem] h-[2.259rem] mr-[1rem] dark:bg-[#D9D9D9]"
              href={`${hero.linkedinLink}`}
            >
              <img
                src="./assets/hero/LinkedIn.png"
                alt="Description of the image"
              />
            </a>
            <a
              className="inline-block w-[2.125rem] h-[2.259rem] dark:bg-[#D9D9D9]"
              href={`${hero.githubLink}`}
            >
              <img
                src="./assets/hero/github.png"
                alt="Description of the image"
              />
            </a>
            <div className="w-[100%] h-[4rem] leading-[2rem] mt-[1rem] text-[1.125rem]">
              {language === "en" ? (
                <>
                  <p>
                    Currently{" "}
                    <span className="text-[#AF0C48]">Freelancing</span> for{" "}
                    <span className="text-[#AF0C48]">UX, UI, & Web Design</span>{" "}
                    Project.
                  </p>
                  <p>
                    Invite me to join your team -&gt;{" "}
                    <span className="text-[#AF0C48] underline">
                      {hero.email}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Şu anda{" "}
                    <span className="text-[#AF0C48]">UX, UI ve Web Dizayn</span>{" "}
                    Projesinde <span className="text-[#AF0C48]">Freelance</span>{" "}
                    olarak çalışıyorum.
                  </p>
                  <p>
                    Beni ekibinize katılmaya davet edebilirsiniz -&gt;{" "}
                    <span className="text-[#AF0C48] underline">
                      {hero.email}
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="relative inline-block w-[22.563rem] h-[22.563rem] float-right pt-[2rem]">
          <img className="relative top-0 left-0" src={hero.images.rectangle} />
          <img
            className="absolute top-14 left-5 z-10"
            src={hero.images.photo}
          />
        </div>
      </div>
    </div>
  );
};
