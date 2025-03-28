import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SleepCycleDisplayProps {
  times: Date[];
  mode: 'sleep' | 'wake';
}

const SleepCycleDisplay: React.FC<SleepCycleDisplayProps> = ({ times, mode }) => {
  const { t } = useLanguage();

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const getCycleQuality = (index: number): string => {
    // Порядок: 6 — best, 5 — ideal, 4 — good
    const qualityMap = [t('best'), t('ideal'), t('good')]; // Развернули порядок
    return qualityMap[index];
  };

  // Разворачиваем times, чтобы получить [6, 5, 4] вместо [4, 5, 6]
  const displayTimes = [...times].reverse();

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
              {mode === 'sleep' ? (
                <SunIcon size={24} className="animate-pulse-soft" />
              ) : (
                <MoonIcon size={24} className="animate-pulse-soft" />
              )}
            </div>
            <div className="text-2xl font-semibold text-night-900">{formatTime(time)}</div>
            <div className="text-sm font-medium text-sleep-700">
              {getCycleQuality(index)} • {6 - index} {t('cycles')} {/* 6 - index для 6, 5, 4 */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-sleep-50 rounded-xl text-sleep-800 text-sm">
        <strong>{t('recommendation')}</strong>{' '}
        {mode === 'sleep' ? t('wakeRecommendation') : t('sleepRecommendation')}
      </div>
    </div>
  );
};

export default SleepCycleDisplay;