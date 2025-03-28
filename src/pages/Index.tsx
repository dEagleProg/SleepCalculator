import React from 'react';
import { MoonIcon, SunIcon, BedIcon } from 'lucide-react';
import SleepCalculator from '@/components/SleepCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEOHead
        title="Sleep Calculator - Find Your Perfect Sleep Schedule"
        description="Calculate the best time to sleep and wake up based on your body's natural sleep cycles. Optimize your sleep schedule for better rest and improved sleep quality."
        keywords="sleep calculator, sleep schedule, sleep cycles, bedtime calculator, wake up time, sleep hygiene, sleep quality, sleep phases, REM sleep, deep sleep, light sleep"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <SleepCalculator />
          
          <section className="mb-16 text-center max-w-3xl mx-auto mt-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-4 animate-fade-in">
              {t('optimizeSleep')} <span className="text-sleep-600">{t('sleepCycles')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-night-600 mb-8 text-balance animate-fade-in" style={{animationDelay: '100ms'}}>
              {t('indexDescription')}
            </p>
            
            <div className="flex justify-center space-x-8 mb-12">
              <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="p-3 bg-sleep-100 rounded-full mb-3">
                  <BedIcon size={24} className="text-sleep-700" />
                </div>
                <span className="text-night-800 font-medium">{t('sleepCycles')}</span>
              </div>
              
              <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="p-3 bg-sleep-100 rounded-full mb-3">
                  <MoonIcon size={24} className="text-sleep-700" />
                </div>
                <span className="text-night-800 font-medium">{t('calculateBedtime')}</span>
              </div>
              
              <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
                <div className="p-3 bg-sleep-100 rounded-full mb-3">
                  <SunIcon size={24} className="text-sleep-700" />
                </div>
                <span className="text-night-800 font-medium">{t('calculateWakeUp')}</span>
              </div>
            </div>
          </section>
          
          <section className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-night-900 mb-6 text-center">
              {t('understandingCycles')}
            </h2>
            
            <div className="sleep-card p-8">
              <p className="text-night-700 mb-4">
                {t('sleepCyclesDescription')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col">
                  <div className="text-sleep-700 font-semibold mb-2">{t('lightSleep')}</div>
                  <p className="text-night-600 text-sm">{t('lightSleepDescription')}</p>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-sleep-700 font-semibold mb-2">{t('deepSleep')}</div>
                  <p className="text-night-600 text-sm">{t('deepSleepDescription')}</p>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-sleep-700 font-semibold mb-2">{t('remSleep')}</div>
                  <p className="text-night-600 text-sm">{t('remSleepDescription')}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
