import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
//import Navbar from '../components/Navbar/Navbar';
import LandingSection from '../components/LandingSection/LandingSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <LandingSection></LandingSection>
    {/* Not needed at current Site height <Navbar></Navbar>*/}
    <AboutSection></AboutSection>
    <ExperienceSection></ExperienceSection>
  </Layout>
);

export default IndexPage;
