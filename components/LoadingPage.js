'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Get theme from localStorage
    const storedTheme = localStorage.getItem('aib-theme') || 'dark';
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    // Simulate realistic loading progress
    const intervals = [
      { progress: 30, delay: 100 },   // Quick initial load
      { progress: 50, delay: 200 },   // Component loading
      { progress: 70, delay: 150 },   // Data fetching
      { progress: 85, delay: 100 },   // Rendering
      { progress: 95, delay: 80 },    // Almost done
      { progress: 100, delay: 50 },   // Complete
    ];

    let currentIndex = 0;
    
    const runNextInterval = () => {
      if (currentIndex < intervals.length) {
        const { progress, delay } = intervals[currentIndex];
        setTimeout(() => {
          setProgress(progress);
          currentIndex++;
          runNextInterval();
        }, delay);
      }
    };

    runNextInterval();
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0f]">
      {/* Logo */}
      <div className="mb-12 animate-fade-in">
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
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Loading percentage */}
      <div className="mt-4 text-sm text-muted-foreground">
        {progress}%
      </div>
    </div>
  );
};

export default LoadingPage;
