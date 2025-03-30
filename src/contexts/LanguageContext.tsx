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
    en: 'Sleep tips',
    es: 'Consejos de sueño',
    ru: 'Советы для сна',
  },
  about: {
    en: 'About',
    es: 'Acerca de',
    ru: 'О нас',
  },
  // Calculator
  calculateBedtime: {
    en: 'Calculate bedtime',
    es: 'Calcular hora de dormir',
    ru: 'Рассчитать время сна',
  },
  calculateWakeUp: {
    en: 'Calculate wake up',
    es: 'Calcular despertador',
    ru: 'Рассчитать пробуждение',
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
    en: 'Made by dEagle',
    es: 'Hecho por dEagle',
    ru: 'Сделано by dEagle',
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
  // About page
  aboutTitle: {
    en: 'About',
    es: 'Acerca de',
    ru: 'Про',
  },
  aboutDescription: {
    en: 'SleepCalculator was created to help people understand and optimize their sleep cycles. We believe that quality sleep is fundamental to health, productivity, and overall well-being.',
    es: 'SleepCalculator fue creado para ayudar a las personas a entender y optimizar sus ciclos de sueño. Creemos que un sueño de calidad es fundamental para la salud, la productividad y el bienestar general.',
    ru: 'SleepCalculator был создан, чтобы помочь людям понять и оптимизировать циклы сна. Мы считаем, что качественный сон является основой здоровья, продуктивности и общего благополучия.',
  },
  aboutCalculator: {
    en: 'Our calculator uses sleep cycle science to help you determine the best times to go to bed or wake up, ensuring you wake up between cycles, when you\'re in your lightest sleep phase.',
    es: 'Nuestra calculadora utiliza la ciencia de los ciclos de sueño para ayudarle a determinar los mejores momentos para acostarse o despertarse, asegurándose de que se despierte entre ciclos, cuando está en su fase de sueño más ligera.',
    ru: 'Наш калькулятор использует науку о циклах сна, чтобы помочь вам определить лучшее время для сна или пробуждения, гарантируя, что вы проснетесь между циклами, когда находитесь в самой легкой фазе сна.',
  },
  scienceBased: {
    en: 'Science-Based',
    es: 'Basado en la Ciencia',
    ru: 'Научно-обоснованный',
  },
  scienceBasedDescription: {
    en: 'Our recommendations are based on established sleep science and research on sleep cycles.',
    es: 'Nuestras recomendaciones se basan en la ciencia del sueño establecida y la investigación sobre los ciclos de sueño.',
    ru: 'Наши рекомендации основаны на установленной науке о сне и исследованиях циклов сна.',
  },
  healthFocused: {
    en: 'Health-Focused',
    es: 'Enfocado en la Salud',
    ru: 'Ориентированный на здоровье',
  },
  healthFocusedDescription: {
    en: 'We prioritize your health and well-being by helping you achieve more restorative sleep.',
    es: 'Priorizamos su salud y bienestar ayudándole a lograr un sueño más reparador.',
    ru: 'Мы отдаем приоритет вашему здоровью и благополучию, помогая вам достичь более восстановительного сна.',
  },
  howItWorks: {
    en: 'How It Works',
    es: 'Cómo Funciona',
    ru: 'Как Это Работает',
  },
  howItWorksDescription1: {
    en: 'Each sleep cycle lasts approximately 90 minutes, and a typical night\'s sleep consists of 4-6 complete cycles. Our calculator helps you plan your sleep or wake time to align with these natural cycles.',
    es: 'Cada ciclo de sueño dura aproximadamente 90 minutos, y una noche típica de sueño consiste en 4-6 ciclos completos. Nuestra calculadora le ayuda a planificar su tiempo de sueño o de despertar para alinearse con estos ciclos naturales.',
    ru: 'Каждый цикл сна длится примерно 90 минут, а типичный ночной сон состоит из 4-6 полных циклов. Наш калькулятор помогает вам планировать время сна или пробуждения в соответствии с этими естественными циклами.',
  },
  howItWorksDescription2: {
    en: 'When you wake up at the end of a cycle, you\'re more likely to feel refreshed and alert, rather than groggy and disoriented.',
    es: 'Cuando se despierta al final de un ciclo, es más probable que se sienta renovado y alerta, en lugar de aturdido y desorientado.',
    ru: 'Когда вы просыпаетесь в конце цикла, вы с большей вероятностью почувствуете себя отдохнувшим и бодрым, а не сонным и дезориентированным.',
  },
  proTip: {
    en: 'Pro Tip:',
    es: 'Consejo Profesional:',
    ru: 'Профессиональный совет:',
  },
  proTipDescription: {
    en: 'Consistency is key! Try to maintain a regular sleep schedule, even on weekends, to help regulate your body\'s internal clock.',
    es: '¡La consistencia es clave! Intente mantener un horario de sueño regular, incluso los fines de semana, para ayudar a regular el reloj interno de su cuerpo.',
    ru: 'Постоянство - ключ к успеху! Старайтесь поддерживать регулярный режим сна, даже в выходные дни, чтобы помочь регулировать внутренние часы вашего организма.',
  },
  // Sleep Tips page
  sleepTipsTitle: {
    en: 'Sleep',
    es: 'Consejos de',
    ru: 'Советы по',
  },
  sleepTipsHighlight: {
    en: 'Tips',
    es: 'Sueño',
    ru: 'Сну',
  },
  sleepTipsDescription: {
    en: 'Beyond optimizing your sleep schedule, these evidence-based tips can help improve your sleep quality and overall well-being.',
    es: 'Más allá de optimizar su horario de sueño, estos consejos basados en evidencia pueden ayudar a mejorar la calidad de su sueño y su bienestar general.',
    ru: 'Помимо оптимизации режима сна, эти научно-обоснованные советы могут помочь улучшить качество сна и общее самочувствие.',
  },
  // Sleep Tips items
  consistentSchedule: {
    en: 'Maintain a Consistent Schedule',
    es: 'Mantener un Horario Constante',
    ru: 'Поддерживайте постоянный режим',
  },
  consistentScheduleDescription: {
    en: 'Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body\'s internal clock.',
    es: 'Acuéstese y despiértese a la misma hora todos los días, incluso los fines de semana. Esto ayuda a regular el reloj interno de su cuerpo.',
    ru: 'Ложитесь спать и просыпайтесь в одно и то же время каждый день, даже в выходные. Это помогает регулировать внутренние часы вашего организма.',
  },
  naturalSunlight: {
    en: 'Get Natural Sunlight',
    es: 'Obtener Luz Solar Natural',
    ru: 'Получайте естественный солнечный свет',
  },
  naturalSunlightDescription: {
    en: 'Expose yourself to sunlight in the morning to help reset your circadian rhythm and improve sleep quality.',
    es: 'Expóngase a la luz solar por la mañana para ayudar a restablecer su ritmo circadiano y mejorar la calidad del sueño.',
    ru: 'Подвергайте себя воздействию солнечного света утром, чтобы помочь сбросить циркадный ритм и улучшить качество сна.',
  },
  limitCaffeine: {
    en: 'Limit Caffeine & Alcohol',
    es: 'Limitar Cafeína y Alcohol',
    ru: 'Ограничьте кофеин и алкоголь',
  },
  limitCaffeineDescription: {
    en: 'Avoid caffeine late in the day and limit alcohol, as both can disrupt your sleep patterns and quality.',
    es: 'Evite la cafeína tarde en el día y limite el alcohol, ya que ambos pueden interrumpir sus patrones de sueño y calidad.',
    ru: 'Избегайте кофеина поздно днем и ограничьте алкоголь, так как оба могут нарушить режим и качество сна.',
  },
  comfortableEnvironment: {
    en: 'Create a Comfortable Environment',
    es: 'Crear un Ambiente Cómodo',
    ru: 'Создайте комфортную среду',
  },
  comfortableEnvironmentDescription: {
    en: 'Ensure your bedroom is cool, dark, and quiet. Invest in a comfortable mattress and pillows.',
    es: 'Asegúrese de que su dormitorio esté fresco, oscuro y tranquilo. Invierta en un colchón y almohadas cómodos.',
    ru: 'Убедитесь, что ваша спальня прохладная, темная и тихая. Вложитесь в удобный матрас и подушки.',
  },
  reduceBlueLight: {
    en: 'Reduce Blue Light Exposure',
    es: 'Reducir la Exposición a la Luz Azul',
    ru: 'Уменьшите воздействие синего света',
  },
  reduceBlueDescription: {
    en: 'Limit screen time before bed, or use night mode/blue light filters on your devices to minimize sleep disruption.',
    es: 'Limite el tiempo de pantalla antes de acostarse, o use el modo nocturno/filtros de luz azul en sus dispositivos para minimizar la interrupción del sueño.',
    ru: 'Ограничьте время перед экраном перед сном или используйте ночной режим/фильтры синего света на устройствах, чтобы минимизировать нарушение сна.',
  },
  exerciseRegularly: {
    en: 'Exercise Regularly',
    es: 'Ejercitarse Regularmente',
    ru: 'Регулярно занимайтесь спортом',
  },
  exerciseRegularlyDescription: {
    en: 'Regular physical activity can help you fall asleep faster and enjoy deeper sleep, but avoid exercising too close to bedtime.',
    es: 'La actividad física regular puede ayudarlo a dormir más rápido y disfrutar de un sueño más profundo, pero evite hacer ejercicio demasiado cerca de la hora de acostarse.',
    ru: 'Регулярная физическая активность может помочь вам быстрее заснуть и наслаждаться более глубоким сном, но избегайте упражнений слишком близко ко времени сна.',
  },
  sleepRule: {
    en: 'The 3-2-1 Sleep Rule',
    es: 'La Regla de Sueño 3-2-1',
    ru: 'Правило сна 3-2-1',
  },
  sleepRuleDescription: {
    en: 'A simple framework to improve your sleep quality:',
    es: 'Un marco simple para mejorar la calidad de su sueño:',
    ru: 'Простая структура для улучшения качества сна:',
  },
  threeHours: {
    en: 'Hours before bed: Stop eating heavy meals and drinking alcohol',
    es: 'Horas antes de acostarse: Deje de comer comidas pesadas y beber alcohol',
    ru: 'Часа до сна: Прекратите есть тяжелую пищу и употреблять алкоголь',
  },
  twoHours: {
    en: 'Hours before bed: Stop working on any demanding tasks',
    es: 'Horas antes de acostarse: Deje de trabajar en tareas exigentes',
    ru: 'Часа до сна: Прекратите работать над сложными задачами',
  },
  oneHour: {
    en: 'Hour before bed: Turn off all screens and electronic devices',
    es: 'Hora antes de acostarse: Apague todas las pantallas y dispositivos electrónicos',
    ru: 'Час до сна: Выключите все экраны и электронные устройства',
  },
  // Sleep Cycle Display
  wakeupTimes: {
    en: 'You should wake up at one of these times:',
    es: 'Debería despertarse a una de estas horas:',
    ru: 'Вам следует проснуться в одно из этих времен:',
  },
  sleepTimes: {
    en: 'You should go to sleep at one of these times:',
    es: 'Debería irse a dormir a una de estas horas:',
    ru: 'Вам следует лечь спать в одно из этих времен:',
  },
  good: {
    en: 'Good',
    es: 'Bueno',
    ru: 'Хорошо',
  },
  ideal: {
    en: 'Ideal',
    es: 'Ideal',
    ru: 'Идеально',
  },
  best: {
    en: 'Best',
    es: 'Óptimo',
    ru: 'Лучше всего',
  },
  cycles: {
    en: 'cycles',
    es: 'ciclos',
    ru: 'циклов',
  },
  recommendation: {
    en: 'Recommendation:',
    es: 'Recomendación:',
    ru: 'Рекомендация:',
  },
  wakeRecommendation: {
    en: 'Try to wake up at the end of a sleep cycle to feel more refreshed.',
    es: 'Intente despertarse al final de un ciclo de sueño para sentirse más renovado.',
    ru: 'Старайтесь просыпаться в конце цикла сна, чтобы чувствовать себя более отдохнувшим.',
  },
  sleepRecommendation: {
    en: 'Plan to fall asleep at one of these times to wake up feeling refreshed.',
    es: 'Planee dormirse a una de estas horas para despertarse sintiéndose renovado.',
    ru: 'Планируйте засыпать в одно из этих времен, чтобы проснуться отдохнувшим.',
  },
  // Privacy Policy
  privacyTitle: {
    en: 'Privacy Policy',
    es: 'Política de Privacidad',
    ru: 'Политика Конфиденциальности',
  },
  privacyDescription: {
    en: 'At SleepCalculator, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.',
    es: 'En SleepCalculator, nos tomamos su privacidad muy en serio. Esta política describe cómo recopilamos, utilizamos y protegemos su información personal.',
    ru: 'В SleepCalculator мы серьезно относимся к вашей конфиденциальности. Эта политика описывает, как мы собираем, используем и защищаем вашу личную информацию.',
  },
  dataCollection: {
    en: 'Data Collection',
    es: 'Recopilación de Datos',
    ru: 'Сбор Данных',
  },
  dataCollectionDescription: {
    en: 'We collect minimal personal information necessary to provide our sleep calculator service. This includes basic usage data and preferences.',
    es: 'Recopilamos la información personal mínima necesaria para proporcionar nuestro servicio de calculadora de sueño. Esto incluye datos básicos de uso y preferencias.',
    ru: 'Мы собираем минимальный объем личной информации, необходимый для предоставления нашего сервиса калькулятора сна. Это включает базовые данные об использовании и предпочтения.',
  },
  dataUsage: {
    en: 'Data Usage',
    es: 'Uso de Datos',
    ru: 'Использование Данных',
  },
  dataUsageDescription: {
    en: 'Your data is used solely to improve our service and provide you with personalized sleep recommendations. We never sell or share your information with third parties.',
    es: 'Sus datos se utilizan únicamente para mejorar nuestro servicio y proporcionarle recomendaciones de sueño personalizadas. Nunca vendemos ni compartimos su información con terceros.',
    ru: 'Ваши данные используются исключительно для улучшения нашего сервиса и предоставления вам персонализированных рекомендаций по сну. Мы никогда не продаем и не передаем вашу информацию третьим лицам.',
  },
  dataProtection: {
    en: 'Data Protection',
    es: 'Protección de Datos',
    ru: 'Защита Данных',
  },
  dataProtectionDescription: {
    en: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
    es: 'Implementamos medidas de seguridad estándar de la industria para proteger su información personal de acceso, alteración o divulgación no autorizada.',
    ru: 'Мы применяем стандартные меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения или разглашения.',
  },
  cookies: {
    en: 'Cookies',
    es: 'Cookies',
    ru: 'Файлы Cookie',
  },
  cookiesDescription: {
    en: 'We use cookies to enhance your experience and remember your preferences. You can control cookie settings through your browser.',
    es: 'Utilizamos cookies para mejorar su experiencia y recordar sus preferencias. Puede controlar la configuración de cookies a través de su navegador.',
    ru: 'Мы используем файлы cookie для улучшения вашего опыта и запоминания ваших предпочтений. Вы можете управлять настройками файлов cookie через браузер.',
  },
  userRights: {
    en: 'Your Rights',
    es: 'Sus Derechos',
    ru: 'Ваши Права',
  },
  userRightsDescription: {
    en: 'You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.',
    es: 'Tiene derecho a acceder, corregir o eliminar su información personal. Contáctenos para ejercer estos derechos.',
    ru: 'Вы имеете право на доступ, исправление или удаление вашей личной информации. Свяжитесь с нами для осуществления этих прав.',
  },

  // Terms of Service
  termsTitle: {
    en: 'Terms of Service',
    es: 'Términos de Servicio',
    ru: 'Условия Использования',
  },
  termsDescription: {
    en: 'By using SleepCalculator, you agree to these terms of service. Please read them carefully.',
    es: 'Al utilizar SleepCalculator, acepta estos términos de servicio. Por favor, léalos detenidamente.',
    ru: 'Используя SleepCalculator, вы соглашаетесь с этими условиями использования. Пожалуйста, внимательно прочитайте их.',
  },
  acceptance: {
    en: 'Acceptance of Terms',
    es: 'Aceptación de Términos',
    ru: 'Принятие Условий',
  },
  acceptanceDescription: {
    en: 'By accessing or using SleepCalculator, you agree to be bound by these terms and all applicable laws and regulations.',
    es: 'Al acceder o utilizar SleepCalculator, acepta estar sujeto a estos términos y todas las leyes y regulaciones aplicables.',
    ru: 'Получая доступ или используя SleepCalculator, вы соглашаетесь соблюдать эти условия и все применимые законы и правила.',
  },
  useLicense: {
    en: 'Use License',
    es: 'Licencia de Uso',
    ru: 'Лицензия на Использование',
  },
  useLicenseDescription: {
    en: 'We grant you a personal, non-exclusive, non-transferable license to use SleepCalculator for personal, non-commercial purposes.',
    es: 'Le otorgamos una licencia personal, no exclusiva, no transferible para usar SleepCalculator con fines personales y no comerciales.',
    ru: 'Мы предоставляем вам личную, неисключительную, непередаваемую лицензию на использование SleepCalculator для личных, некоммерческих целей.',
  },
  disclaimer: {
    en: 'Disclaimer',
    es: 'Descargo de Responsabilidad',
    ru: 'Отказ от Ответственности',
  },
  disclaimerDescription: {
    en: 'SleepCalculator is provided "as is" without any warranties. We are not responsible for any sleep-related decisions made based on our calculations.',
    es: 'SleepCalculator se proporciona "tal cual" sin garantías. No somos responsables de las decisiones relacionadas con el sueño tomadas basadas en nuestros cálculos.',
    ru: 'SleepCalculator предоставляется "как есть" без каких-либо гарантий. Мы не несем ответственности за решения, связанные со сном, принятые на основе наших расчетов.',
  },
  limitations: {
    en: 'Limitations',
    es: 'Limitaciones',
    ru: 'Ограничения',
  },
  limitationsDescription: {
    en: 'We are not liable for any damages arising from the use or inability to use SleepCalculator.',
    es: 'No somos responsables de ningún daño derivado del uso o la imposibilidad de usar SleepCalculator.',
    ru: 'Мы не несем ответственности за любые убытки, возникшие в результате использования или невозможности использования SleepCalculator.',
  },
  revisions: {
    en: 'Revisions',
    es: 'Revisiones',
    ru: 'Изменения',
  },
  revisionsDescription: {
    en: 'We reserve the right to modify these terms at any time. Continued use of SleepCalculator after changes constitutes acceptance of new terms.',
    es: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuo de SleepCalculator después de los cambios constituye la aceptación de los nuevos términos.',
    ru: 'Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования SleepCalculator после изменений означает принятие новых условий.',
  },

  // Contact
  contactTitle: {
    en: 'Get in Touch',
    es: 'Contáctenos',
    ru: 'Свяжитесь с Нами',
  },
  contactDescription: {
    en: 'Have questions or feedback? We\'d love to hear from you. Our team is here to help improve your sleep experience.',
    es: '¿Tiene preguntas o comentarios? Nos encantaría saber de usted. Nuestro equipo está aquí para ayudarle a mejorar su experiencia de sueño.',
    ru: 'Есть вопросы или отзывы? Мы будем рады услышать от вас. Наша команда готова помочь улучшить ваш опыт сна.',
  },
  email: {
    en: 'Email Us',
    es: 'Envíenos un Correo',
    ru: 'Напишите Нам',
  },
  emailDescription: {
    en: 'support@sleepcalculator.life',
    es: 'support@sleepcalculator.life',
    ru: 'support@sleepcalculator.life',
  },
  responseTime: {
    en: 'Response Time',
    es: 'Tiempo de Respuesta',
    ru: 'Время Ответа',
  },
  responseTimeDescription: {
    en: 'We typically respond within 24-48 hours during business days.',
    es: 'Normalmente respondemos en 24-48 horas durante días laborables.',
    ru: 'Мы обычно отвечаем в течение 24-48 часов в рабочие дни.',
  },
  contactForm: {
    en: 'Send us a Message',
    es: 'Envíenos un Mensaje',
    ru: 'Отправьте Нам Сообщение',
  },
  name: {
    en: 'Name',
    es: 'Nombre',
    ru: 'Имя',
  },
  namePlaceholder: {
    en: 'Your name',
    es: 'Su nombre',
    ru: 'Ваше имя',
  },
  emailPlaceholder: {
    en: 'your@email.com',
    es: 'su@email.com',
    ru: 'ваш@email.com',
  },
  message: {
    en: 'Message',
    es: 'Mensaje',
    ru: 'Сообщение',
  },
  messagePlaceholder: {
    en: 'Your message...',
    es: 'Su mensaje...',
    ru: 'Ваше сообщение...',
  },
  send: {
    en: 'Send Message',
    es: 'Enviar Mensaje',
    ru: 'Отправить Сообщение',
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
