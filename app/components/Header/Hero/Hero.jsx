import { Container, FlipCard, Button } from "../../shared";

const Hero = (props) => {
  return (
    <Container>
      <article
        id="home"
        className="m-auto flex w-[90%] flex-col justify-between gap-6 pb-16 pt-32 sm:w-full md:flex-row-reverse"
      >
        {/* FlipCard Section - Right on desktop, First on mobile */}
        <section className="flex w-full justify-center md:w-[50%]">
          <FlipCard />
        </section>

        {/* Text Content Section - Left on desktop, Second on mobile */}
        <section className="flex w-full flex-col justify-center gap-y-1 text-white md:w-[40%]">
          <h1 className="font-poppins text-[25px] font-bold leading-8 md:text-[25px] md:leading-10">
            <span className="capitalize text-primary">YOUNG ARCHITECTS</span>
            <span> - </span> <br />
            <span className="text-primary-blue">
              {" "}
              Best AI-Driven IT Solutions & Digital Transformation in Kolkata
            </span>
          </h1>
          <h2 className="mt-4 font-poppins text-[18px] opacity-90 md:mt-8 md:text-[15px]">
            <span>
              A dynamic IT solutions with AI-driven digital consultancy
              transforming the technology landscape, delivering cutting-edge
              software development, digital transformation, automation, SEO, and
              AI solutions to help businesses scale faster, enhance visibility,
              and achieve sustainable growth.
            </span>
          </h2>
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://calendly.com/yafoundations/45min"
              className="flex-1"
            >
              <Button className="w-full">Book Consultation</Button>
            </a>
            <a
              href="https://youngarchitects.in/assets/YA_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full">View Policy</Button>
            </a>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default Hero;
