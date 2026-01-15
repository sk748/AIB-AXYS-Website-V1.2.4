'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const LoadingPage = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar from 0 to 100%
    const duration = 800; // 800ms
    const steps = 60;
    const increment = 100 / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setProgress(currentStep * increment);
      } else {
        clearInterval(timer);
        setProgress(100);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-background">
      {/* Logo */}
      <div className="mb-12">
        <Image
          src={theme === 'dark' 
            ? 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/83rf6q6x_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20DARK%20BG.svg'
            : 'https://customer-assets.emergentagent.com/job_33cba548-cc10-4443-ba2a-5d85d6be63d5/artifacts/c84w37kp_NEW%20AIB%20AXYS%20AFRICA%20LOGO%20WHITE%20BG.svg'
          }
          alt="AIB-AXYS Africa"
          width={300}
          height={100}
          className="w-[300px] h-auto"
          priority
        />
      </div>

      {/* Progress Bar Container */}
      <div className="w-[400px] max-w-[90vw] h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        {/* Progress Bar */}
        <div 
          className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingPage;
