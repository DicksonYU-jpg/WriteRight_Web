import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import useLangStore from "../../store/LangStore";

const logos = ["hkstp", "cuhkpi", "kteo"];

export const Brands = () => {
  const { lang } = useLangStore();
  return (
    <section>
      {" "}
      <Container className="space-y-10">
      {lang === "en" ? (
        <div className="text-center max-w-3xl mx-auto">
        <Title> Supported by Numerous Organizations </Title>
        </div>    
      ) : (
        <div className="text-center max-w-3xl mx-auto">
        <Title> 已獲多間機構支持 </Title>
      </div>       
      )}
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl  group"
            >
              <img
                src={`/assets/logos/${logo}.png`}
                alt={logo}
                className="h-7 lg:h-20 h-15 w-auto ease-linear duration-300 group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
