import React, { useState, memo } from 'react';
import clsx from 'clsx';
import styles from './Nav.module.scss';
import Link from 'next/link';

const Nav = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.nav}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={clsx(styles.line, { [styles.open]: isOpen })} />
              <div className={clsx(styles.line, { [styles.open]: isOpen })} />
              <div className={clsx(styles.line, { [styles.open]: isOpen })} />
            </div>
            <div className={clsx(styles.menu, { [styles.open]: isOpen })}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/about" className={styles.link}>
                About
              </Link>
              <Link href="/real-estate" className={styles.link}>
                Real Estate
              </Link>
              <Link href="/lifestyle" className={styles.link}>
                Lifestyle
              </Link>
              <Link href="/travel" className={styles.link}>
                Travel
              </Link>
              <Link href="/boutique" className={styles.link}>
                Boutique
              </Link>
              <button className={styles.button}>Contact</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

Nav.displayName = 'Nav';

export default Nav;
