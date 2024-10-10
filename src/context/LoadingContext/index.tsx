'use client'; // This should be at the top of the file

import React, { createContext, useContext, useState } from 'react';

// Define the default context value
const defaultLoadingContextValue = {
  loadingCount: 0,
  incrementLoading: () => {},
  decrementLoading: () => {},
};

const LoadingContext = createContext(defaultLoadingContextValue);

export const LoadingProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const incrementLoading = () => setLoadingCount((prev) => prev + 1);
  const decrementLoading = () => setLoadingCount((prev) => Math.max(prev - 1, 0));

  return (
    <LoadingContext.Provider value={{ loadingCount, incrementLoading, decrementLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  console.log('useLoading called:', context); // Check the context value
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
