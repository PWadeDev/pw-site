import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LandingSection from '../components/LandingSection/LandingSection';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
import AboutSection from '../components/AboutSection/AboutSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <LandingSection></LandingSection>
    <AboutSection></AboutSection>
  </Layout>
);

export default IndexPage;
