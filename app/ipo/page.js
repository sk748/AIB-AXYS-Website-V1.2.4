'use client';

import { useCountdown } from '@/hooks/useCountdown';
import GlassCard from '@/components/GlassCard';
import content from '@/config/content.json';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

export default function IPOPage() {
  const countdown = useCountdown(content.ipoDate);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Kenya Pipeline IPO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive opportunity to invest in Kenya's infrastructure future
          </p>
        </div>

        {/* Countdown or Status */}
        <div className="max-w-4xl mx-auto mb-16 animate-stagger-1">
          <GlassCard className="p-8">
            {countdown.isExpired ? (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Allocation Completed</h2>
                <p className="text-muted-foreground">
                  The IPO application period has ended. Check your allocation status in your account.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-accent mr-2" />
                  <h2 className="text-2xl font-bold">IPO Closes In:</h2>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="glass p-4 rounded-lg bg-white/5 dark:bg-white/5">
                    <div className="text-4xl font-bold text-white dark:text-white mb-1">{countdown.days}</div>
                    <div className="text-sm text-muted-foreground mt-2">Days</div>
                  </div>
                  <div className="glass p-4 rounded-lg bg-white/5 dark:bg-white/5">
                    <div className="text-4xl font-bold text-white dark:text-white mb-1">{countdown.hours}</div>
                    <div className="text-sm text-muted-foreground mt-2">Hours</div>
                  </div>
                  <div className="glass p-4 rounded-lg bg-white/5 dark:bg-white/5">
                    <div className="text-4xl font-bold text-white dark:text-white mb-1">{countdown.minutes}</div>
                    <div className="text-sm text-muted-foreground mt-2">Minutes</div>
                  </div>
                  <div className="glass p-4 rounded-lg bg-white/5 dark:bg-white/5">
                    <div className="text-4xl font-bold text-white dark:text-white mb-1">{countdown.seconds}</div>
                    <div className="text-sm text-muted-foreground mt-2">Seconds</div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 active:scale-98">
                    Apply Now
                  </button>
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* IPO Timeline */}
        <div className="max-w-4xl mx-auto animate-stagger-2">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">IPO Timeline</span>
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {content.ipoTimeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <GlassCard hover3d className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">{item.phase}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.date}</p>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IPO Details */}
        <div className="max-w-4xl mx-auto mt-16 animate-stagger-3">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">IPO Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Share Price Range</h3>
                <p className="text-muted-foreground">KES 45 - KES 55</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Minimum Application</h3>
                <p className="text-muted-foreground">100 Shares</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Lot Size</h3>
                <p className="text-muted-foreground">100 Shares</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Issue Size</h3>
                <p className="text-muted-foreground">KES 2.5 Billion</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold text-primary mb-2">About Kenya Pipeline</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kenya Pipeline Company is a state corporation established to provide efficient, reliable and cost-effective 
                pipeline transportation and storage services for petroleum products. This IPO offers a unique opportunity 
                to invest in Kenya's critical infrastructure.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}