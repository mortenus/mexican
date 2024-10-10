import React, { useEffect, useState } from 'react';
import styles from './LoadingOverlay.module.scss';
import Logo from '../Logo';

type TLoadingOverlay = {
  isLoading: boolean;
};

const LoadingOverlay = ({ isLoading }: TLoadingOverlay) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      // Loading started, ensure overlay is shown and scroll is disabled
      setIsFadingOut(false);
      setShouldRender(true);
    } else {
      // Loading finished, start fade out
      setIsFadingOut(true);
      setTimeout(() => {
        setShouldRender(false); // Remove the overlay after fade-out
        document.body.style.overflow = ''; // Enable scrolling again
      }, 500); // Match CSS transition timing
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.overlay} ${isFadingOut ? styles.fadeOut : ''}`}>
      <Logo /> {/* Spinner or logo */}
    </div>
  );
};

export default LoadingOverlay;
