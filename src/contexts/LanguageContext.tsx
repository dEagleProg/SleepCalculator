
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'ru';

type Translations = {
  [key: string]: {
    [lang in Language]: string;
  };
};

// Translations for all UI elements
export const translations: Translations = {
  // Navbar
  home: {
    en: 'Home',
    es: 'Inicio',
    ru: 'Главная',
  },
  sleepTips: {
    en: 'Sleep Tips',
    es: 'Consejos de Sueño',
    ru: 'Советы по Сну',
  },
  about: {
    en: 'About',
    es: 'Acerca de',
    ru: 'О нас',
  },
  // Calculator
  calculateBedtime: {
    en: 'Calculate Bedtime',
    es: 'Calcular Hora de Dormir',
    ru: 'Рассчитать Время Сна',
  },
  calculateWakeUp: {
    en: 'Calculate Wake Up',
    es: 'Calcular Despertador',
    ru: 'Рассчитать Пробуждение',
  },
  calculate: {
    en: 'Calculate',
    es: 'Calcular',
    ru: 'Рассчитать',
  },
  wantToSleep: {
    en: 'I want to go to sleep at...',
    es: 'Quiero dormir a las...',
    ru: 'Я хочу лечь спать в...',
  },
  wantToWake: {
    en: 'I want to wake up at...',
    es: 'Quiero despertar a las...',
    ru: 'Я хочу проснуться в...',
  },
  sleepCycleInfo: {
    en: 'A good night\'s sleep consists of 5-6 complete sleep cycles. Each sleep cycle lasts approximately 90 minutes.',
    es: 'Una buena noche de sueño consiste en 5-6 ciclos completos. Cada ciclo dura aproximadamente 90 minutos.',
    ru: 'Хороший ночной сон состоит из 5-6 полных циклов. Каждый цикл сна длится примерно 90 минут.',
  },
  fallAsleepInfo: {
    en: 'This calculator assumes it takes about 14 minutes to fall asleep after going to bed.',
    es: 'Esta calculadora asume que se tarda aproximadamente 14 minutos en quedarse dormido después de acostarse.',
    ru: 'Этот калькулятор предполагает, что засыпание занимает около 14 минут после того, как вы ложитесь в постель.',
  },
  // Index page
  optimizeSleep: {
    en: 'Optimize Your',
    es: 'Optimice Sus',
    ru: 'Оптимизируйте Ваши',
  },
  sleepCycles: {
    en: 'Sleep Cycles',
    es: 'Ciclos de Sueño',
    ru: 'Циклы Сна',
  },
  indexDescription: {
    en: 'Calculate the best time to wake up or fall asleep based on your sleep cycles for a refreshed morning.',
    es: 'Calcule el mejor momento para despertar o dormir según sus ciclos de sueño para un despertar renovado.',
    ru: 'Рассчитайте лучшее время для пробуждения или засыпания на основе циклов сна для бодрого утра.',
  },
  understandingCycles: {
    en: 'Understanding Sleep Cycles',
    es: 'Entendiendo los Ciclos de Sueño',
    ru: 'Понимание Циклов Сна',
  },
  sleepCyclesDescription: {
    en: 'Sleep consists of multiple 90-minute cycles, each containing stages of light sleep, deep sleep, and REM sleep. Waking up at the end of a complete cycle helps you feel more refreshed.',
    es: 'El sueño consiste en múltiples ciclos de 90 minutos, cada uno con etapas de sueño ligero, sueño profundo y sueño REM. Despertar al final de un ciclo completo ayuda a sentirse más renovado.',
    ru: 'Сон состоит из нескольких 90-минутных циклов, каждый из которых содержит фазы легкого сна, глубокого сна и быстрого сна (REM). Пробуждение в конце полного цикла помогает чувствовать себя более отдохнувшим.',
  },
  lightSleep: {
    en: 'Light Sleep',
    es: 'Sueño Ligero',
    ru: 'Легкий Сон',
  },
  lightSleepDescription: {
    en: 'The beginning stage where you can be easily awakened. Your muscles relax and your brain activity slows.',
    es: 'La etapa inicial donde puede ser despertado fácilmente. Sus músculos se relajan y la actividad cerebral disminuye.',
    ru: 'Начальная стадия, когда вас легко разбудить. Мышцы расслабляются, а активность мозга замедляется.',
  },
  deepSleep: {
    en: 'Deep Sleep',
    es: 'Sueño Profundo',
    ru: 'Глубокий Сон',
  },
  deepSleepDescription: {
    en: 'The restorative stage where your body repairs tissues, builds bone and muscle, and strengthens your immune system.',
    es: 'La etapa restauradora donde su cuerpo repara tejidos, construye hueso y músculo, y fortalece su sistema inmunológico.',
    ru: 'Восстановительная стадия, когда ваше тело восстанавливает ткани, строит кости и мышцы, и укрепляет иммунную систему.',
  },
  remSleep: {
    en: 'REM Sleep',
    es: 'Sueño REM',
    ru: 'Быстрый Сон (REM)',
  },
  remSleepDescription: {
    en: 'The dream state where your brain is active. Important for memory consolidation and cognitive function.',
    es: 'El estado de sueño donde su cerebro está activo. Importante para la consolidación de la memoria y la función cognitiva.',
    ru: 'Стадия сновидений, когда ваш мозг активен. Важна для консолидации памяти и когнитивных функций.',
  },
  // Footer
  rights: {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    ru: 'Все права защищены.',
  },
  madeWith: {
    en: 'Made with',
    es: 'Hecho con',
    ru: 'Сделано с',
  },
  forBetterSleep: {
    en: 'for better sleep',
    es: 'para un mejor sueño',
    ru: 'для лучшего сна',
  },
  privacy: {
    en: 'Privacy',
    es: 'Privacidad',
    ru: 'Конфиденциальность',
  },
  terms: {
    en: 'Terms',
    es: 'Términos',
    ru: 'Условия',
  },
  contact: {
    en: 'Contact',
    es: 'Contacto',
    ru: 'Контакты',
  },
  // Toasts
  wakeupCalculated: {
    en: 'Wake-up times calculated!',
    es: '¡Horarios de despertar calculados!',
    ru: 'Время пробуждения рассчитано!',
  },
  bedtimeCalculated: {
    en: 'Bedtimes calculated!',
    es: '¡Horarios de dormir calculados!',
    ru: 'Время отхода ко сну рассчитано!',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultContextValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
};

export const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    console.warn(`Translation missing for key: ${key} in language: ${language}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
