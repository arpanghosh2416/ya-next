"use client";

import { useState } from "react";
import Image from "next/image";

const FlipCard = ({
  frontLogo = "https://youngarchitects.in/assets/image/logo.webp",
  backLogo = "https://youngarchitects.in/assets/image/logo2.webp",
  qrCode = "https://youngarchitects.in/assets/image/qr.webp",
  phoneNumbers = ["+91 9883952010", "+91 9804569051"],
  email = "yafoundations@gmail.com",
  animationGif = "https://youngarchitects.in/assets/image/clickhere.webp", // Add your GIF import here
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    // Add vibration feedback
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {/* Main Container with Card and Animation */}
      <div className="flex flex-col items-center justify-center gap-1">
        {/* Flip Card */}
        <div
          onClick={handleFlip}
          className="flex min-h-150 min-w-87.5 cursor-pointer items-center justify-center transition-transform duration-300 perspective-[1000px] hover:scale-105"
        >
          <div
            className={`relative h-full w-full transition-transform duration-700 ease-in-out transform-3d ${isFlipped ? "transform-[rotateY(0deg)]" : "transform-[rotateY(180deg)]"} `}
          >
            {/* Front Side */}
            <div className="absolute flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[60px] bg-[#1e1e1e] p-6 text-center font-sans text-[#d5cbcb] transform-[rotateY(180deg)] backface-hidden [box-shadow:inset_-29px_15px_17px_rgba(111,109,109,0.956),inset_-29px_15px_17px_rgba(34,34,34,0.697),0px_10px_20px_rgb(0,0,0),inset_15px_-18px_19px_rgb(0,0,0)]">
              {/* Logo Circle */}
              <div
                className="h-[45%] w-4/5 rounded-full border border-[#1a191923] bg-cover bg-center bg-no-repeat [box-shadow:-5px_-9px_5px_rgba(255,255,255,0.16),-5px_-9px_5px_rgba(34,34,34,0.697),3px_8px_4px_rgba(0,0,0,0.392)] max-md:h-[40%] max-md:w-[70%] max-[399px]:h-[35%] max-[399px]:w-[65%]"
                style={{ backgroundImage: `url(${frontLogo})` }}
              />

              {/* Contact Info */}
              <div className="w-full font-roboto font-semibold text-white">
                {/* Phone Section */}
                <div className="mb-4 flex w-full items-center justify-center">
                  <div className="flex flex-col gap-1 text-[1.1rem] font-light">
                    {phoneNumbers.map((phone, index) => (
                      <div key={index} className="text-[1.18rem]">
                        {phone}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex w-full items-center justify-center">
                  <div className="flex flex-col text-[1.1rem] font-light">
                    {email}
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div
                className="h-37.5 w-37.5 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${qrCode})` }}
              />
            </div>

            {/* Back Side */}
            <div className="absolute flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[60px] bg-[#1e1e1e] p-6 text-center font-sans text-[#d5cbcb] backface-hidden [box-shadow:inset_-29px_15px_17px_rgba(111,109,109,0.956),inset_-29px_15px_17px_rgba(34,34,34,0.697),0px_10px_20px_rgb(0,0,0),inset_15px_-18px_19px_rgb(0,0,0)]">
              {/* Logo Circle */}
              <div
                className="h-[45%] w-4/5 rounded-full border border-[#1a191923] bg-cover bg-center bg-no-repeat [box-shadow:-5px_-9px_5px_rgba(255,255,255,0.16),-5px_-9px_5px_rgba(34,34,34,0.697),3px_8px_4px_rgba(0,0,0,0.392)] max-md:h-[40%] max-md:w-[70%] max-[399px]:h-[35%] max-[399px]:w-[65%]"
                style={{ backgroundImage: `url(${backLogo})` }}
              />

              {/* Contact Info */}
              <div className="w-full font-roboto font-semibold text-white">
                {/* Phone Section */}
                <div className="mb-4 flex w-full items-center justify-center">
                  <div className="flex flex-col gap-1 text-[1.1rem] font-light">
                    {phoneNumbers.map((phone, index) => (
                      <div key={index} className="text-[1.18rem]">
                        {phone}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex w-full items-center justify-center">
                  <div className="flex flex-col text-[1.1rem] font-light">
                    {email}
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div
                className="flex h-37.5 w-37.5 justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${qrCode})` }}
              />
            </div>
          </div>
        </div>

        {/* Click to Flip Text and Animation GIF - Below the card, side by side */}
        {animationGif && (
          <div className="mt-3 flex items-center justify-center gap-1">
            <p className="text-lg font-medium text-white">Click to Flip</p>
            <Image
              src={animationGif}
              alt="Click animation"
              className="contrast-less: h-20 w-32 object-contain brightness-200"
              width={132}
              height={80}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FlipCard;
