'use client';
import React from 'react';
import Head from 'next/head'; // Import Head for script injection
import Image from 'next/image';
import styles from './page.module.scss';
import LoadingOverlay from '@/components/LoadingOverlay';
import clsx from 'clsx';
import Link from 'next/link';

function Home() {
  const [realEstateLoading, setRealEstateLoading] = React.useState(true);

  const handleRealEstateLoadComplete = () => {
    setRealEstateLoading(false);
  };

  return (
    <>
      {/* This script ensures overflow: hidden is applied immediately */}
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.body.style.overflow = 'hidden';`,
          }}
        />
      </Head>

      <main className={styles[`homepage-container`]}>
        {realEstateLoading && <LoadingOverlay isLoading={realEstateLoading} />}
        <div className={styles.homepage}>
          <section className={styles.heroSection}>
            <Link href="https://www.coraxsolutions.com.mx/">
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Real Estate</h1>
                <h3 className={styles.heroSubTitle}>Browse Listing</h3>
              </div>
              <div className={styles.fullScreenContainer}>
                <Image
                  className={styles.image}
                  src="/assets/realestate6.png"
                  alt="Real Estate showing beach with blue smooth colors"
                  onLoad={handleRealEstateLoadComplete}
                  onError={handleRealEstateLoadComplete}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </Link>
          </section>

          {/* Other card sections */}
          <section className={styles.cardSection}>
            <div className={clsx(styles.card)}>
              <div className={styles.cardOverlay}>
                <h2 className={styles.cardTitle}>Lifestyle</h2>
                <button className={styles.heroButton}>Discover</button>
              </div>
              <Image
                src="/assets/lifestyle3.png"
                alt="Lifestyle"
                layout="responsive"
                width={600}
                height={400}
              />
            </div>
            <div className={clsx(styles.card)}>
              <div className={styles.cardOverlay}>
                <h2 className={styles.cardTitle}>Travel</h2>
                <button className={styles.heroButton}>Explore</button>
              </div>
              <Image
                src="/assets/travel3.png"
                alt="Travel"
                layout="responsive"
                width={600}
                height={400}
              />
            </div>
            <div className={clsx(styles.card)}>
              <div className={styles.cardOverlay}>
                <h2 className={styles.cardTitle}>Boutique</h2>
                <button className={styles.heroButton}>Acquire</button>
              </div>
              <Image
                src="/assets/boutique3.png"
                alt="Boutique"
                layout="responsive"
                width={600}
                height={400}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
