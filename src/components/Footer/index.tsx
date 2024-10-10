import React, { memo } from 'react';

import styles from './Footer.module.scss';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo and Name */}
        <div className={styles.logoSection}>
          <img src="/path-to-your-logo.png" alt="Logo" className={styles.logo} />
          <span className={styles.brandName}>
            Mexican <span className={styles.highlight}>Best Life</span>
          </span>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <div>
            <h4>BOUTIQUES</h4>
            <ul>
              <li>Links</li>
              <li>Links</li>
            </ul>
          </div>
          <div>
            <h4>REAL ESTATE</h4>
            <ul>
              <li>Links</li>
              <li>Links</li>
            </ul>
          </div>
          <div>
            <h4>LIFESTYLE</h4>
            <ul>
              <li>Links</li>
              <li>Links</li>
            </ul>
          </div>
        </div>

        {/* Language and Social Section */}
        <div className={styles.languageSection}>
          <h4>LANGUAGE</h4>
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
          <ul className={styles.socialIcons}>
            <li>
              <a href="#">
                <img src="/facebook-icon.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/instagram-icon.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/twitter-icon.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 Mexican Best Life. All rights reserved.</p>
        <ul className={styles.legalLinks}>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
        <ul className={styles.helpLinks}>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Refund</a>
          </li>
        </ul>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
