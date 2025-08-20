import { IWithLink } from "@/types";
import React from "react";
import Banner from "./banner";
import Content from "./content";


const Main = ({ data }: { data: IWithLink }) => {
  return (
    <>
      <Banner data={{ heading: data.pageHeader, image: data.image }} />
      <Content
        venue={data.venue}
        date={data.date}
        upperPara={data.upperPara}
        speakers={data.speakers}
        speakersDateBased={data.speakersDateBased}
      />
    </>
  );
};

export default Main;
