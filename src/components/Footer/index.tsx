import React, { memo } from 'react';

import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo and Name */}
        <div className={styles.logoSection}>
          <Image
            src="/assets/logo.png"
            width={266}
            height={262}
            alt="Logo"
            className={styles.logo}
          />
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <div>
            <h4>BOUTIQUES</h4>
            <ul>
              <Link href="https://www.coraxsolutions.com.mx/renta-condo-vacacional">
                <li>Explore</li>
              </Link>
            </ul>
          </div>
          <div>
            <h4>REAL ESTATE</h4>
            <ul>
              <Link href="https://www.coraxsolutions.com.mx/renta-condo-vacacional">
                <li>Rental</li>
              </Link>
              <Link href="https://www.coraxsolutions.com.mx/propiedades">
                <li>Properties for Sale</li>
              </Link>
            </ul>
          </div>
          <div>
            <h4>LIFESTYLE</h4>
            <ul>
              <Link href="">
                <li>Discover</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Language and Social Section */}
        <div className={styles.additionSection}>
          {/* <div className={styles.languageSection}>
            <h4>LANGUAGE</h4>
            <select>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div> */}
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
