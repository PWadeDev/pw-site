import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './ExperienceSection.scss';

const ExperienceSection = () => {
  const data = useStaticQuery(graphql`
    query {
      dzLogo: file(relativePath: { eq: "dz-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vvLogo: file(relativePath: { eq: "vv-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aarealLogo: file(relativePath: { eq: "aareal-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cofinproLogo: file(relativePath: { eq: "cofinpro-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saeLogo: file(relativePath: { eq: "sae-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="experience-section">
      <h1 className="experience-section--title">Worked with</h1>
      <div className="experience-section--title-bar"></div>
      <div className="row experience-section--content-container">
        <div className="col-sm-12 col-md-6 experience-section--col">
          <Img
            className="experience-section--logo"
            fluid={data.dzLogo.childImageSharp.fluid}
          />
        </div>
        <div className="col-sm-12 col-md-6 experience-section--col">
          <Img
            className="experience-section--logo"
            fluid={data.vvLogo.childImageSharp.fluid}
          />
        </div>
        <div className="col-sm-12 col-md-6 experience-section--col">
          <Img
            className="experience-section--logo-aareal"
            fluid={data.aarealLogo.childImageSharp.fluid}
          />
        </div>
        <div className="col-sm-12 col-md-6 experience-section--col">
          <Img
            className="experience-section--logo-cofinpro"
            fluid={data.cofinproLogo.childImageSharp.fluid}
          />
        </div>
        <div className="col-sm-12 col-md-12 experience-section--col">
          <Img
            className="experience-section--logo-sae"
            fluid={data.saeLogo.childImageSharp.fluid}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
