import React, { useState, memo } from 'react';
import clsx from 'clsx';
import styles from './Nav.module.scss';
import Link from 'next/link';

type TNav = {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = memo(({ setIsNavOpen }: TNav) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsNavOpen((prev: boolean) => !prev); // Update parent state
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsNavOpen(false); // Update parent state
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={clsx(styles.hamburger, { [styles.open]: isOpen })} onClick={toggleMenu}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>

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
