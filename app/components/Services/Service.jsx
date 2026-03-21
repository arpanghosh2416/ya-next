import Image from "next/image";
import ServiceCards from "./ServiceCards";
import { Container, Button } from "..";
import ServiceWireImage from "@/app/assets/image/service-wire.webp";

const Service = () => {
  return (
    <Container>
      <article id="services" className="flex flex-col gap-16 py-16">
        <section className="flex flex-col-reverse justify-between gap-6 md:flex-row">
          <section className="flex w-full flex-col justify-center gap-y-2 font-poppins md:w-[60%]">
            <h3 className="text-[24px] font-bold leading-8 md:text-[32px] md:leading-10">
              <span className="text-primary-blue">
                Create a new way to enhance your{" "}
              </span>
              <br />
              <span className="text-primary">
                business needs and grow consistently
              </span>
            </h3>
            <p>
              Stay organised and improve. Streamline custom development,
              marketing, design and other business operations of your
              enterprise. Let us help enhance the bottom line of your business
              with our custom-made solutions.
            </p>
            <Button>Coming Soon</Button>
          </section>
          <section className="flex w-full justify-center md:w-[40%]">
            <Image
              className="w-[90%] object-contain"
              src={ServiceWireImage}
              alt="service-image"
              width={500}
              height={500}
            />
          </section>
        </section>
        <ServiceCards />
      </article>
    </Container>
  );
};

export default Service;
