// import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
// import { Numbers } from "./Numbers";
import mainDark from "/assets/main_dark.svg";
import mainLight from "/assets/main_light.svg";
import useLangStore from "../../store/LangStore";
import { useThemeStore } from "../../store/ThemeStore";

export const Hero = () => {
  const { lang } = useLangStore();
  const { theme } = useThemeStore();

  return (
    <section className="relative pt-32 lg:pt-36 ">
      {" "}
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        

        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2 lg:left-30"
        >
          
             {lang === "en" ? (
              <div className="w-105 sm:w-150 lg:w-160 xl:w-170">
              <h1 className="text-heading-1 text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold">
                Empower Your Children with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#4591ff] ml-2">
                AI Teacher{" "}
                </span>
              </h1>
              </div>
              
              ) : (
                <div className="lg:w-110">
                  <h1 className="text-heading-1 text-5xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
                讓你的子女與<br></br>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#4591ff] ml-2">
                AI 老師學習{" "}
                </span>
                </h1>
              </div>
                
              )}

            {lang === "en" ? (
              <Paragraph className="mt-15 md:w-110 xl:w-135 xl:mt-15 xl:mb-20 text-justify">
              Our application allows users scanning their work or essays to detect incorrectly written words. 
              We built a personalised database powering daily gamified learning exercises designed to help users recognize, write, and memorise traditional Chinese characters.
              </Paragraph>
              ) : (
                
              <Paragraph className="sm:text-xl mt-15 -mb-10 md:mb-0 max-w-100 sm:mt-20 md:w-110 text-justify">
              我們的應用程序允許用戶掃描他們的工作或論文，以檢測錯誤寫出的單詞。我們建立了一個個性化的數據庫，
              提供每日的遊戲化學習練習，旨在幫助用戶識別、書寫和記憶傳統漢字。
              </Paragraph>
              )}
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-xl">
          {theme === "dark" ? (<img
            src={mainDark}
            alt="Hero image"
            className="ease-linear duration-300 max-h-0 lg:absolute lg:w-full lg:h-full lg:min-h-140 lg:object-contain lg:overflow-visible lg:-mt-15 z-100"
          />) : (
            <img
            src={mainLight}
            alt="Hero image"
            className="ease-linear duration-300 max-h-0 lg:absolute lg:w-full lg:h-full lg:min-h-140 lg:object-contain lg:overflow-visible lg:-mt-15 z-100"/>
          )}
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute md:right-30 lg:right-25 top-24 lg:top-25 w-70 h-70 rotate-90 
                        skew-x-12 rounded-3xl bg-gradient-to-r from-sky-600 to-[#4591ff]
                        blur-3xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span className="absolute right-5 bottom-12 w-60 h-90 rounded-3xl bg-primary blur-2xl opacity-80 z-1"></span>
        </div>
        </div>
      </Container>
      {/*<Numbers />*/}
    </section>
  );
};
