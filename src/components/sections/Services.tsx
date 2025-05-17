import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import useLangStore from "../../store/LangStore";

export const Services = () => {
  const { lang } = useLangStore();
  return (
    <section id="product">
      {" "}
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {lang === "en" ? (
            <Title> Our Product</Title>
          ) : (
            <Title> 產品介紹</Title>
          )}
          {lang === "en" ? (
            <Paragraph>
            An All-in-One AI-powered Chinese Learning Platform
            </Paragraph>
          ) : (
            <Paragraph>
            一站式人工智能中文學習平台
          </Paragraph>
          )}
          
          <video controls>
            <source src="../../../public/assets/video.mp4"></source>
          </video>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
