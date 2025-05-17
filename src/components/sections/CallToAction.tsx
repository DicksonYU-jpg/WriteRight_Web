import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import useLangStore from "../../store/LangStore";

export const CTA = () => {
  const { lang } = useLangStore();
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Quick Start your children's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#4591ff]">
                Powerful AI Learning Journey
              </span>{" "}
            </h1>
            <Paragraph className="pt-10">
              Leverage WriteRight to revolutionize your children's
              Chinese learning. Get insights on your children's strengths and weaknesses at your
              fingertips.
            </Paragraph>
            <br></br><br></br>
            {lang === "en" ? (
                <BtnLink text="Contact Us" href="mailto:info@writeright.com" className="" />
              ) : (
                <BtnLink text="聯絡我們" href="mailto:info@writeright.com" className="" />
              )}
          </div>
        </div>
      </Container>
    </section>
  );
};
