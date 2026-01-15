'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingPage from './LoadingPage';

const RouteLoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading when route changes
    setLoading(true);

    // Hide loading after animation completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Match the progress bar duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <LoadingPage />}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
};

export default RouteLoadingWrapper;
