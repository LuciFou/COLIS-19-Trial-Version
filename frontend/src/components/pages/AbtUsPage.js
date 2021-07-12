import React from 'react';
import AboutUs from '../AboutUs';
import { Helmet } from "react-helmet";

function AbtUsPage() {
  return (
    <>
      <Helmet>
        <title>A Propos de Nous | COLIS-19</title>
      </Helmet>
      <AboutUs />
    </>
  );
}

export default AbtUsPage;
