
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MoonIcon, SunIcon, CoffeeIcon, SmartphoneIcon, DumbbellIcon, ClockIcon, BedIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SleepTips = () => {
  const { t } = useLanguage();
  
  const sleepTips = [
    {
      icon: <ClockIcon className="text-sleep-600" />,
      title: t('consistentSchedule'),
      description: t('consistentScheduleDescription')
    },
    {
      icon: <SunIcon className="text-sleep-600" />,
      title: t('naturalSunlight'),
      description: t('naturalSunlightDescription')
    },
    {
      icon: <CoffeeIcon className="text-sleep-600" />,
      title: t('limitCaffeine'),
      description: t('limitCaffeineDescription')
    },
    {
      icon: <BedIcon className="text-sleep-600" />,
      title: t('comfortableEnvironment'),
      description: t('comfortableEnvironmentDescription')
    },
    {
      icon: <SmartphoneIcon className="text-sleep-600" />,
      title: t('reduceBlueLight'),
      description: t('reduceBlueDescription')
    },
    {
      icon: <DumbbellIcon className="text-sleep-600" />,
      title: t('exerciseRegularly'),
      description: t('exerciseRegularlyDescription')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
            {t('sleepTipsTitle')} <span className="text-sleep-600">{t('sleepTipsHighlight')}</span>
          </h1>
          
          <p className="text-lg text-night-700 mb-12 text-center max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '100ms'}}>
            {t('sleepTipsDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sleepTips.map((tip, index) => (
              <div 
                key={index} 
                className="sleep-card p-6 flex hover:scale-[1.02] transition-all duration-300 animate-fade-in" 
                style={{animationDelay: `${150 + (index * 50)}ms`}}
              >
                <div className="p-3 bg-sleep-50 rounded-full h-fit mr-4">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-night-900 mb-2">{tip.title}</h3>
                  <p className="text-night-600 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 sleep-card p-8 animate-fade-in" style={{animationDelay: '500ms'}}>
            <h2 className="text-2xl font-display font-semibold text-night-900 mb-4 text-center">
              {t('sleepRule')}
            </h2>
            
            <p className="text-night-700 mb-6 text-center">
              {t('sleepRuleDescription')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-5 bg-sleep-50 rounded-xl">
                <div className="text-3xl font-bold text-sleep-700 mb-3">3</div>
                <p className="text-night-700">
                  {t('threeHours')}
                </p>
              </div>
              
              <div className="text-center p-5 bg-sleep-50 rounded-xl">
                <div className="text-3xl font-bold text-sleep-700 mb-3">2</div>
                <p className="text-night-700">
                  {t('twoHours')}
                </p>
              </div>
              
              <div className="text-center p-5 bg-sleep-50 rounded-xl">
                <div className="text-3xl font-bold text-sleep-700 mb-3">1</div>
                <p className="text-night-700">
                  {t('oneHour')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SleepTips;
