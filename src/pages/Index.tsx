
import React from 'react';
import { MoonIcon, SunIcon, BedIcon } from 'lucide-react';
import SleepCalculator from '@/components/SleepCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-4 animate-fade-in">
            Optimize Your <span className="text-sleep-600">Sleep Cycles</span>
          </h1>
          
          <p className="text-lg md:text-xl text-night-600 mb-8 text-balance animate-fade-in" style={{animationDelay: '100ms'}}>
            Calculate the best time to wake up or fall asleep based on your sleep cycles for a refreshed morning.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="p-3 bg-sleep-100 rounded-full mb-3">
                <BedIcon size={24} className="text-sleep-700" />
              </div>
              <span className="text-night-800 font-medium">Sleep Cycles</span>
            </div>
            
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="p-3 bg-sleep-100 rounded-full mb-3">
                <MoonIcon size={24} className="text-sleep-700" />
              </div>
              <span className="text-night-800 font-medium">Bedtime</span>
            </div>
            
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="p-3 bg-sleep-100 rounded-full mb-3">
                <SunIcon size={24} className="text-sleep-700" />
              </div>
              <span className="text-night-800 font-medium">Wake Up</span>
            </div>
          </div>
        </section>
        
        <SleepCalculator />
        
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-night-900 mb-6 text-center">
            Understanding Sleep Cycles
          </h2>
          
          <div className="sleep-card p-8">
            <p className="text-night-700 mb-4">
              Sleep consists of multiple 90-minute cycles, each containing stages of light sleep, deep sleep, and REM sleep. Waking up at the end of a complete cycle helps you feel more refreshed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col">
                <div className="text-sleep-700 font-semibold mb-2">Light Sleep</div>
                <p className="text-night-600 text-sm">The beginning stage where you can be easily awakened. Your muscles relax and your brain activity slows.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sleep-700 font-semibold mb-2">Deep Sleep</div>
                <p className="text-night-600 text-sm">The restorative stage where your body repairs tissues, builds bone and muscle, and strengthens your immune system.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sleep-700 font-semibold mb-2">REM Sleep</div>
                <p className="text-night-600 text-sm">The dream state where your brain is active. Important for memory consolidation and cognitive function.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
