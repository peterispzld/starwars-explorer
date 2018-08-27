import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-social">
          <a href="https://github.com/peteriscaurs/starwars-explorer">
            <i className="fa fa-star"></i> <i className="fa fa-arrow-right"></i> <i className="fa fa-github"> </i>
          </a>
      </div>
      <div className="footer-copyright">
        <p className="text-copyright">
          Made with <span>React</span>, <span>MDBootstrap</span> and <span>SWAPI</span> by
          <a href="https://github.com/peteriscaurs">
            <strong> Pēteris Čaurs</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;