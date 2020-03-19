import * as React from 'react';

import * as TwitterLogo from '../../images/svg/twitter-logo.svg';
import * as CodepenLogo from '../../images/svg/codepen-logo.svg';
import * as GithubLogo from '../../images/svg/github-logo.svg';
import * as LinkedinLogo from '../../images/svg/linkedin-logo.svg';

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
