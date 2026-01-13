import React from 'react';
import Herosection from './Herosection';
import About from './About';
import Perpective from './Perpective';
import Service from './Service';
import ServiceMArque from './ServiceMArque';
import TeachStack from './TeachStack';
import TeachMarque from './TeachMarque';
import Project from './Project';
import Education from './Education';
import Strategy from './Strategy';
import Approach from './Approach';

const Home = () => {
  return (
    <>
      <Herosection />
      <About />
      <Perpective />
      <Service />
      <ServiceMArque />
      <TeachStack />
      <TeachMarque />
      <Project />
      <Education />
      <Strategy />
      <Approach />
    </>
  );
};

export default Home;