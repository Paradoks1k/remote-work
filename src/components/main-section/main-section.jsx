import React from "react";
import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import { Button } from "../Button/indexd";

export const MainSection = () => {
  return (
    <section className="w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between">
      <div className="relative order-2 xl:order-1 w-2/4 text-center xl:text-left  mt-12 xl:mt-60">
        <h1 className="text-3xl xl:text-8xl font-black text-center mt-4 xl:whitespace-pre-line">{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg my-6 mt-12 whitespace-pre-line ">{`sdasdasdsa\n sadasdasd\n sadsadsadas`}</p>
        <Button isFilled={true}>Learn More</Button>
        <div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="hidden xl:flex w-2/4 mt-20 xl:order-2 ">
        <img src={MenImage} alt="men"></img>
      </div>
      <div className="flex xl:hidden w-full mt-20 justify-center mb-6 order-1   ">
        <img src={MenImageMobile} alt="men"></img>
      </div>
    </section>
  );
};
