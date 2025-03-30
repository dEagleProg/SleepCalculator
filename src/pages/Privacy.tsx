import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';

const Privacy = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEOHead
        title="Privacy Policy - Sleep Calculator"
        description="Our privacy policy and how we handle your data. Learn about our commitment to protecting your privacy and personal information."
        keywords="privacy policy, data protection, personal information, privacy rights, data collection, user privacy"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
              {t('privacy')}
            </h1>
            
            <div className="sleep-card p-8 md:p-10 animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="prose prose-sleep max-w-none">
                <h2 className="text-2xl font-semibold text-night-900 mb-4">{t('privacyTitle')}</h2>
                <p className="text-night-700 mb-6">{t('privacyDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('dataCollection')}</h3>
                <p className="text-night-700 mb-6">{t('dataCollectionDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('dataUsage')}</h3>
                <p className="text-night-700 mb-6">{t('dataUsageDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('dataProtection')}</h3>
                <p className="text-night-700 mb-6">{t('dataProtectionDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('cookies')}</h3>
                <p className="text-night-700 mb-6">{t('cookiesDescription')}</p>
                
                <h3 className="text-xl font-semibold text-night-900 mt-8 mb-4">{t('userRights')}</h3>
                <p className="text-night-700 mb-6">{t('userRightsDescription')}</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy; 