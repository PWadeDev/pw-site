import * as React from 'react';

const TwitterLogo = require('../../images/svg/twitter-logo.svg');
const CodepenLogo = require('../../images/svg/codepen-logo.svg');
const GithubLogo = require('../../images/svg/github-logo.svg');
const LinkedinLogo = require('../../images/svg/linkedin-logo.svg');

import './Footer.scss';

/*
twitter
github
codepen
linkedin
 */

const Footer: React.FC = () => (
  <>
    <div className="footer">
      <a
        href="https://twitter.com/pwadedev"
        target="_blank"
        className="footer--container"
      >
        <TwitterLogo className="footer--container--logo"></TwitterLogo>
      </a>
      <a
        href="https://codepen.io/PWadeDev"
        target="_blank"
        className="footer--container"
      >
        <CodepenLogo className="footer--container--logo"></CodepenLogo>
      </a>
      <a
        href="https://github.com/PWadeDev"
        target="_blank"
        className="footer--container"
      >
        <GithubLogo className="footer--container--logo"></GithubLogo>
      </a>
      <a
        href="https://www.linkedin.com/in/patrick-wade-81ba8bb8"
        target="_blank"
        className="footer--container"
      >
        <LinkedinLogo className="footer--container--logo"></LinkedinLogo>
      </a>
    </div>
  </>
);

export default Footer;
