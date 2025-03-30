import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEOHead
        title="Contact Us - Sleep Calculator"
        description="Get in touch with us. We're here to help with any questions about our sleep calculator and sleep optimization."
        keywords="contact us, support, help, questions, feedback, sleep calculator support"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
              {t('contact')}
            </h1>
            
            <div className="sleep-card p-8 md:p-10 animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="prose prose-sleep max-w-none">
                <h2 className="text-2xl font-semibold text-night-900 mb-4">{t('contactTitle')}</h2>
                <p className="text-night-700 mb-8">{t('contactDescription')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4 p-6 bg-sleep-50 rounded-xl">
                    <div className="p-3 bg-sleep-100 rounded-full">
                      <Mail size={24} className="text-sleep-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-night-900 mb-2">{t('email')}</h3>
                      <p className="text-night-700">{t('emailDescription')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-sleep-50 rounded-xl">
                    <div className="p-3 bg-sleep-100 rounded-full">
                      <MessageSquare size={24} className="text-sleep-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-night-900 mb-2">{t('responseTime')}</h3>
                      <p className="text-night-700">{t('responseTimeDescription')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-sleep-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-night-900 mb-4">{t('contactForm')}</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-night-700 mb-1">
                        {t('name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border-2 border-sleep-200 rounded-lg focus:outline-none focus:border-sleep-400 focus:ring-2 focus:ring-sleep-100"
                        placeholder={t('namePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-night-700 mb-1">
                        {t('email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border-2 border-sleep-200 rounded-lg focus:outline-none focus:border-sleep-400 focus:ring-2 focus:ring-sleep-100"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-night-700 mb-1">
                        {t('message')}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border-2 border-sleep-200 rounded-lg focus:outline-none focus:border-sleep-400 focus:ring-2 focus:ring-sleep-100"
                        placeholder={t('messagePlaceholder')}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-sleep-600 hover:bg-sleep-700 text-white rounded-lg transition-colors"
                    >
                      <Send size={18} />
                      {t('send')}
                    </button>
                  </form>
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

export default Contact; 