"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { services } from "../../assets";
import { Modal } from "..";
import AOS from "aos";
import "aos/dist/aos.css";

const MARKETING_TAB = "marketing";
const DESIGNING_TAB = "designing";
const DEVELOPMENT_TAB = "development";
const tabs = [MARKETING_TAB, DEVELOPMENT_TAB, DESIGNING_TAB];

const ServiceCards = () => {
  const modalRootRef = useRef(null);
  const [activeTab, setActiveTab] = useState(DEVELOPMENT_TAB);
  const [activeServiceList, setActiveServiceList] = useState(
    services[DEVELOPMENT_TAB],
  );
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  const toggleModalRoot = (service) => {
    setSelectedService(service);
    modalRootRef.current.toggle();
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setActiveServiceList(services[tab]);
  };

  return (
    <article>
      <section className="mb-10 flex justify-center">
        <div className="flex justify-between text-[0.6rem] font-medium text-white xs:text-xs md:text-base">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => handleTabChange(tab)}
              className={[
                "select-none border px-4 py-2 capitalize transition-all duration-300 lg:px-6",
                index === 0 ? "rounded-l-full" : "",
                index === tabs.length - 1 ? "rounded-r-full" : "",
                tab === activeTab
                  ? "cursor-default bg-primary"
                  : "cursor-pointer bg-black",
              ].join(" ")}
            >
              {tab}
            </span>
          ))}
        </div>
      </section>
      <section
        key={activeTab}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="grid grid-cols-1 place-items-center gap-10 font-[Poppins] sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(3n-2)]:lg:col-start-2"
      >
        {activeServiceList.map((service, index) => (
          <section
            key={index}
            className="flex w-85 flex-col items-center gap-10 rounded-[50px] px-6 py-16 outline outline-slate-400 duration-200 hover:-translate-y-2 hover:border-b-4 hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-400"
          >
            <div>
              <Image
                className="w-auto h-auto"
                src={service.logo}
                alt={service.title}
                width={240}
                height={240}
              />
            </div>
            <div className="space-y-2 font-[Roboto]">
              <h2 className="text-black text-center text-lg font-extrabold capitalize ">
                {service.title}
              </h2>
              <p className="text-center text-sm text-slate-950 font-medium">
                {service.description}
              </p>
            </div>
            <button
              onClick={() => toggleModalRoot(service)}
              className="text-center font-extrabold text-primary font-[Roboto]"
            >
              Learn More
            </button>
          </section>
        ))}
      </section>
      <Modal ref={modalRootRef}>
        {selectedService && (
          <>
            <p className="mb-3 text-lg font-bold leading-none text-primary">
              {selectedService.learnMore?.intro}
            </p>
            <ul className="list-disc pl-5">
              {selectedService.learnMore?.points.map((point, index) => (
                <li key={index} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-md text-slate-600">
              {selectedService.learnMore?.conclusion}
            </p>
          </>
        )}
      </Modal>
    </article>
  );
};

export default ServiceCards;
