import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './AboutSection.scss';

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      patrickImage: file(relativePath: { eq: "patrick-wade.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="about-section">
      <h1 className="about-section--title">About</h1>
      <div className="about-section--title-bar"></div>
      <div className="row about-section--content-container">
        <div className="col-sm-6 col-12 about-section--image-container--col">
          <Img
            className="about-section--image"
            fluid={data.patrickImage.childImageSharp.fluid}
          />
        </div>
        <div className="col-sm-6 col-12 about-section--image-container--col">
          <div className="about-section--text">
            I'm a Full-Stack Developer and Consultant for Cofinpro AG in
            Frankfurt, Germany. Having graduated in Games Programming at SAE
            Insitute back in 2017, I decided to continue following my passion
            for programming and decided to study Business and Computer Science.
            At my time with Cofinpro AG I have been working with different
            customers focusing on the Financial Indutry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
