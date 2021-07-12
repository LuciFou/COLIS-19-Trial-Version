import React from 'react';
import ContactForm from '../ContactForm';
import HeroSection from '../HeroSection';
import HomeStart from '../HomeStart';
import { AboutUs } from './Data'
import { Helmet } from 'react-helmet';
import StatsSection from '../StatsSection';
import { Divider } from '@material-ui/core';
import Testimonials from '../Testimonials';
import CritereSection from '../CritereSection';


function Home() {
  return (
    <>
      <Helmet>
        <title>Accueil | COLIS-19</title>
      </Helmet>
      <HomeStart />
      <Divider style={{ height: '2px', backgroundColor: '#82171f' }} />
      <CritereSection />
      <Divider style={{ height: '2px', backgroundColor: '#82171f' }} />
      <Testimonials />
      <StatsSection />
      <Divider style={{ height: '2px', marginTop: '100px', backgroundColor: '#82171f' }} />
      <ContactForm />
      <Divider style={{ height: '2px', backgroundColor: '#82171f' }} />
      <HeroSection {...AboutUs} />
    </>
  );
}

export default Home;
