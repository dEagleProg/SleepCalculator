import React, { useState, useRef } from 'react';
import { Clock } from 'lucide-react';
import SleepCycleDisplay from './SleepCycleDisplay';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

type CalculatorMode = 'sleep' | 'wake';

const SleepCalculator = () => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<CalculatorMode>('sleep');
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [fallAsleepTime] = useState(14);
  const [cycleResults, setCycleResults] = useState<Date[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const calculateSleepCycles = () => {
    const baseTime = new Date().setHours(hour, minute, 0, 0);
    const results: Date[] = [];

    if (mode === 'sleep') {
      const sleepTime = baseTime + fallAsleepTime * 60 * 1000;
      for (let i = 4; i <= 6; i++) {
        results.push(new Date(sleepTime + i * 90 * 60 * 1000));
      }
      toast.success(t('wakeupCalculated'));
    } else {
      const wakeTime = baseTime;
      for (let i = 4; i <= 6; i++) {
        results.push(new Date(wakeTime - (i * 90 * 60 * 1000 + fallAsleepTime * 60 * 1000)));
      }
      toast.success(t('bedtimeCalculated'));
    }

    setCycleResults(results);
    
    // Плавная прокрутка к результатам
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const toggleMode = () => {
    setMode(mode === 'sleep' ? 'wake' : 'sleep');
    setHour(mode === 'sleep' ? 9 : 24);
    setMinute(0);
    setCycleResults([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="sleep-card p-6 rounded-lg shadow-md bg-white">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-night-900">
              {mode === 'sleep' ? t('wantToSleep') : t('wantToWake')}
            </h2>
            <button
              onClick={toggleMode}
              className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-sleep-200 bg-white hover:bg-sleep-50 text-sleep-800"
            >
              {mode === 'sleep' ? t('calculateBedtime') : t('calculateWakeUp')}
              <Clock size={14} className="text-sleep-700" />
            </button>
          </div>

          <div className="flex justify-center gap-3 items-center">
            <select
              value={hour}
              onChange={(e) => setHour(+e.target.value)}
              className="appearance-none bg-white border-2 border-sleep-200 rounded-full px-4 py-2 text-lg font-medium text-night-800 focus:outline-none focus:border-sleep-400 focus:ring-2 focus:ring-sleep-100 transition-all duration-200 cursor-pointer hover:border-sleep-300 min-w-[90px] text-center"
            >
              {hours.map((h) => (
                <option key={h} value={h}>
                  {h.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            <span className="text-2xl font-medium text-night-700">:</span>
            <select
              value={minute}
              onChange={(e) => setMinute(+e.target.value)}
              className="appearance-none bg-white border-2 border-sleep-200 rounded-full px-4 py-2 text-lg font-medium text-night-800 focus:outline-none focus:border-sleep-400 focus:ring-2 focus:ring-sleep-100 transition-all duration-200 cursor-pointer hover:border-sleep-300 min-w-[90px] text-center"
            >
              {minutes.map((m) => (
                <option key={m} value={m}>
                  {m.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateSleepCycles}
            className="px-4 py-1.5 text-sm bg-sleep-600 hover:bg-sleep-700 text-white rounded-full"
          >
            {t('calculate')}
          </button>

          <div ref={resultsRef}>
            {cycleResults.length > 0 && <SleepCycleDisplay times={cycleResults} mode={mode} />}
          </div>

          <p className="text-sm text-night-500">
            {t('sleepCycleInfo')} {t('fallAsleepInfo')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SleepCalculator;