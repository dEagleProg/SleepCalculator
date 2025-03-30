import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';

const Terms = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEOHead
        title="Terms of Service - Sleep Calculator"
        description="Read our terms of service to understand the rules and guidelines for using our sleep calculator application."
        keywords="terms of service, user agreement, service terms, usage rules, legal terms"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
              {t('terms')}
            </h1>
            
            <div className="sleep-card p-8 md:p-10 animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="prose prose-sleep max-w-none">
                <h2 className="text-2xl font-semibold text-night-900 mb-4">{t('termsTitle')}</h2>
                <p className="text-night-700 mb-6">{t('termsDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('acceptance')}</h3>
                <p className="text-night-700 mb-6">{t('acceptanceDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('useLicense')}</h3>
                <p className="text-night-700 mb-6">{t('useLicenseDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('disclaimer')}</h3>
                <p className="text-night-700 mb-6">{t('disclaimerDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('limitations')}</h3>
                <p className="text-night-700 mb-6">{t('limitationsDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('revisions')}</h3>
                <p className="text-night-700 mb-6">{t('revisionsDescription')}</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Terms; 