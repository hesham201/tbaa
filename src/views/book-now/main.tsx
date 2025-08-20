import Banner from "@/components/banner";
import { BOOK_ONLINE } from "@/constant/data2";
import React from "react";
import ImagesThree from "./images-three";
import BaadBookingForm from "./book-form";

function Main() {
  return (
    <div>
      <Banner data={BOOK_ONLINE} />
      <ImagesThree />
      <BaadBookingForm />
    </div>
  );
}

export default Main;
