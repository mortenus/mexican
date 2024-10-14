import React, { useState, useEffect, memo } from 'react';
import clsx from 'clsx';
import styles from './Nav.module.scss';
import Link from 'next/link';

const Nav = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Reset on component unmount
    };
  }, [isOpen]);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {/* Hamburger menu */}
          <div className={clsx(styles.hamburger, { [styles.open]: isOpen })} onClick={toggleMenu}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>

          {/* Menu links */}
          <div className={clsx(styles.menu, { [styles.open]: isOpen })}>
            <Link href="/" className={styles.link} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className={styles.link} onClick={closeMenu}>
              About
            </Link>
            <Link href="/real-estate" className={styles.link} onClick={closeMenu}>
              Real Estate
            </Link>
            <Link href="/lifestyle" className={styles.link} onClick={closeMenu}>
              Lifestyle
            </Link>
            <Link href="/travel" className={styles.link} onClick={closeMenu}>
              Travel
            </Link>
            <Link href="/boutique" className={styles.link} onClick={closeMenu}>
              Boutique
            </Link>
            <button className={styles.button} onClick={closeMenu}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;
