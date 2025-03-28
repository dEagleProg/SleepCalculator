import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrainIcon, HeartPulseIcon, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEOHead
        title="About Sleep Calculator - Our Mission and Science"
        description="Learn about our sleep calculator and how we help people improve their sleep quality through science-based sleep cycle calculations and personalized recommendations."
        keywords="about sleep calculator, sleep science, sleep research, sleep cycles, sleep quality, sleep hygiene, sleep health, sleep optimization"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
              {t('aboutTitle')} <span className="text-sleep-600">SleepCalculator</span>
            </h1>
            
            <div className="sleep-card p-8 md:p-10 animate-fade-in" style={{animationDelay: '100ms'}}>
              <p className="text-lg text-night-700 mb-6">
                {t('aboutDescription')}
              </p>
              
              <p className="text-night-700 mb-6">
                {t('aboutCalculator')}
              </p>
              
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-sleep-50 rounded-full mb-4">
                    <BrainIcon size={32} className="text-sleep-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-night-900 mb-2">{t('scienceBased')}</h3>
                  <p className="text-night-600">
                    {t('scienceBasedDescription')}
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-sleep-50 rounded-full mb-4">
                    <HeartPulseIcon size={32} className="text-sleep-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-night-900 mb-2">{t('healthFocused')}</h3>
                  <p className="text-night-600">
                    {t('healthFocusedDescription')}
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-display font-semibold text-night-900 mb-4">
                {t('howItWorks')}
              </h2>
              
              <p className="text-night-700 mb-4">
                {t('howItWorksDescription1')}
              </p>
              
              <p className="text-night-700 mb-8">
                {t('howItWorksDescription2')}
              </p>
              
              <div className="p-5 bg-sleep-50 rounded-xl">
                <div className="flex items-start">
                  <Star size={20} className="text-sleep-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-night-700">
                    <strong>{t('proTip')}</strong> {t('proTipDescription')}
                  </p>
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

export default About;
