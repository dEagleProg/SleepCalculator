import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SleepCycleDisplayProps {
  times: Date[];
  mode: 'sleep' | 'wake';
}

const SleepCycleDisplay: React.FC<SleepCycleDisplayProps> = ({ times, mode }) => {
  const { t } = useLanguage();
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getCycleQuality = (index: number): string => {
    // For 4, 5, and 6 cycles
    const qualityMap = [t('good'), t('ideal'), t('best')];
    return qualityMap[index];
  };

  // Reverse the times if in wake mode so earliest time is first
  const displayTimes = mode === 'wake' ? times : times;

  return (
    <div className="mt-6 animate-fade-in">
      <h3 className="text-xl font-display font-semibold text-night-800 mb-4">
        {mode === 'sleep' ? t('wakeupTimes') : t('sleepTimes')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayTimes.map((time, index) => (
          <div 
            key={index}
            className="sleep-card p-5 flex flex-col items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-sleep-50 text-sleep-700 mb-1">
              {mode === 'sleep' ? 
                <SunIcon size={24} className="animate-pulse-soft" /> : 
                <MoonIcon size={24} className="animate-pulse-soft" />
              }
            </div>
            <div className="text-2xl font-semibold text-night-900">{formatTime(time)}</div>
            <div className="text-sm font-medium text-sleep-700">
              {getCycleQuality(mode === 'sleep' ? index : 2 - index)} • {mode === 'sleep' ? 4 + index : 6 - index} {t('cycles')}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-sleep-50 rounded-xl text-sleep-800 text-sm">
        <strong>{t('recommendation')}</strong> {mode === 'sleep' ? t('wakeRecommendation') : t('sleepRecommendation')}
      </div>
    </div>
  );
};

export default SleepCycleDisplay;
