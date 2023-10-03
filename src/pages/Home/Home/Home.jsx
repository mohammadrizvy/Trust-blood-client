import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import Swiper from '../Swiper/Swiper';
import About from '../../About/About';
import SectionCards from '../SectionCards/SectionCards';
import Network from '../Network/Network';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>TRUST | Home </title>
        </Helmet>
        <Banner></Banner>
        <Welcome></Welcome>
        <SectionCards></SectionCards>
        <Swiper></Swiper>
        <Network></Network>
      </div>
    );
};

export default Home;