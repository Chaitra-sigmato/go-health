import React from "react";
import Dentist from "../../../components/TopHospitals/TopHospitals";
import Feature from "../../../components/Feature/Feature";
import LatestBlog from "../../../components/LatestBlog/LatestBlog";
import Service from "../../../components/Care/CareBeyondCompare";

import Promo from "../Appoinment-promo/Promo";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Slick from "../Slick/Slick";
import AboutConditions from "../About/AboutConditions";

const Conditions = () => {
  return (
    <div className="conditions-container">
      <Banner />
      <Feature />
      {/* <About /> */}
      <AboutConditions />
      <Service />
      <Dentist />
      <Appoinment />
      {/* <Gallery /> */}
      {/* <LatestBlog /> */}
      <Promo />
      <Slick />
    </div>
  );
};

export default Conditions;
