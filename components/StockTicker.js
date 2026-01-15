'use client';

import { useEffect, useState } from 'react';

const StockTicker = () => {
  // Sample NSE stocks with realistic data
  const [stocks] = useState([
    { symbol: 'SCOM', name: 'Safaricom', price: 15.45, change: 0.65, changePercent: 4.21 },
    { symbol: 'KCB', name: 'KCB Group', price: 28.50, change: -0.35, changePercent: -1.21 },
    { symbol: 'EQTY', name: 'Equity Bank', price: 42.75, change: 1.25, changePercent: 2.93 },
    { symbol: 'COOP', name: 'Co-operative Bank', price: 12.80, change: 0.20, changePercent: 1.56 },
    { symbol: 'ABSA', name: 'ABSA Bank Kenya', price: 11.95, change: -0.15, changePercent: -1.24 },
    { symbol: 'EABL', name: 'East African Breweries', price: 165.00, change: 2.50, changePercent: 1.52 },
    { symbol: 'BAT', name: 'British American Tobacco', price: 425.00, change: -5.00, changePercent: -1.16 },
    { symbol: 'SCBK', name: 'Standard Chartered', price: 152.00, change: 3.00, changePercent: 1.97 },
    { symbol: 'DTK', name: 'Diamond Trust Bank', price: 68.50, change: 0.50, changePercent: 0.73 },
    { symbol: 'NCBA', name: 'NCBA Group', price: 34.25, change: -0.75, changePercent: -2.14 },
  ]);

  // Duplicate stocks for seamless scrolling
  const duplicatedStocks = [...stocks, ...stocks, ...stocks];

  return (
    <div className="w-full bg-[#1a1a2e] dark:bg-[#0f0f1e] border-y border-primary/30 overflow-hidden py-3 mt-[72px]">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {duplicatedStocks.map((stock, index) => (
            <div
              key={`${stock.symbol}-${index}`}
              className="ticker-item inline-flex items-center px-6 space-x-3"
            >
              {/* Stock Symbol */}
              <span className="font-bold text-white text-sm">{stock.symbol}</span>
              
              {/* Stock Price */}
              <span className="text-white font-semibold">
                KES {stock.price.toFixed(2)}
              </span>
              
              {/* Change */}
              <span
                className={`text-xs font-medium flex items-center space-x-1`}
                style={{ color: stock.change >= 0 ? '#09a129' : '#c1121f' }}
              >
                <span>{stock.change >= 0 ? '▲' : '▼'}</span>
                <span>{Math.abs(stock.change).toFixed(2)}</span>
                <span>({Math.abs(stock.changePercent).toFixed(2)}%)</span>
              </span>
              
              {/* Separator */}
              <span className="text-primary/40">|</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .ticker-content {
          display: inline-flex;
          animation: scroll 60s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default StockTicker;
