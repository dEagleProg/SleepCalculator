
import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 mt-12 border-t border-sleep-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-night-500 text-sm">
            © {currentYear} SleepCalculator. {t('rights')}
          </div>
          
          <div className="flex items-center text-sm text-night-500">
            <span>{t('madeWith')}</span>
            <Heart size={14} className="mx-1 text-sleep-500" />
            <span>{t('forBetterSleep')}</span>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-night-600 hover:text-sleep-600 transition-colors">{t('privacy')}</a>
            <a href="#" className="text-night-600 hover:text-sleep-600 transition-colors">{t('terms')}</a>
            <a href="#" className="text-night-600 hover:text-sleep-600 transition-colors">{t('contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
