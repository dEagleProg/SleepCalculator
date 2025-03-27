
import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import SleepCycleDisplay from './SleepCycleDisplay';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

type CalculatorMode = 'sleep' | 'wake';

const SleepCalculator = () => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<CalculatorMode>('sleep');
  const [hour, setHour] = useState<number>(10);
  const [minute, setMinute] = useState<number>(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');
  const [fallAsleepTime, setFallAsleepTime] = useState<number>(14); // Minutes to fall asleep
  const [cycleResults, setCycleResults] = useState<Date[]>([]);
  const [calculated, setCalculated] = useState<boolean>(false);

  // Generate hour options
  const hours = Array.from({ length: 12 }, (_, i) => i === 0 ? 12 : i);
  
  // Generate minute options (0, 5, 10, ..., 55)
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  const calculateSleepCycles = () => {
    // Convert time input to a date object
    const now = new Date();
    
    // Set the hours based on the input
    let adjustedHour = hour;
    if (period === 'PM' && hour !== 12) {
      adjustedHour += 12;
    }
    if (period === 'AM' && hour === 12) {
      adjustedHour = 0;
    }
    
    now.setHours(adjustedHour, minute, 0, 0);
    
    const results: Date[] = [];
    
    if (mode === 'sleep') {
      // If we're calculating when to wake up
      let sleepTime = new Date(now.getTime());
      
      // Add time to fall asleep
      sleepTime = new Date(sleepTime.getTime() + fallAsleepTime * 60 * 1000);
      
      // Calculate wake-up times for 4-6 complete sleep cycles (90 minutes each)
      for (let i = 4; i <= 6; i++) {
        const wakeTime = new Date(sleepTime.getTime() + i * 90 * 60 * 1000);
        results.push(wakeTime);
      }
      
      toast.success(t('wakeupCalculated'));
    } else {
      // If we're calculating when to go to sleep
      let wakeTime = new Date(now.getTime());
      
      // Calculate bedtimes for 4-6 complete sleep cycles (90 minutes each)
      for (let i = 4; i <= 6; i++) {
        // Subtract sleep cycles plus time to fall asleep
        const bedTime = new Date(wakeTime.getTime() - (i * 90 * 60 * 1000 + fallAsleepTime * 60 * 1000));
        results.push(bedTime);
      }
      
      toast.success(t('bedtimeCalculated'));
    }
    
    setCycleResults(results);
    setCalculated(true);
  };

  const toggleMode = () => {
    setMode(mode === 'sleep' ? 'wake' : 'sleep');
    setCycleResults([]);
    setCalculated(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="sleep-card p-8 md:p-10 animate-fade-in">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-night-900">
              {mode === 'sleep' ? t('wantToSleep') : t('wantToWake')}
            </h2>
            
            <button 
              onClick={toggleMode}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-sleep-200 
                        bg-white hover:bg-sleep-50 text-sleep-800 transition-all duration-300"
            >
              <span>{mode === 'sleep' ? t('calculateBedtime') : t('calculateWakeUp')}</span>
              <span className="bg-sleep-100 p-1 rounded-full">
                <Clock size={16} className="text-sleep-700" />
              </span>
            </button>
          </div>
          
          <div className="time-picker">
            <select 
              className="time-select"
              value={hour}
              onChange={(e) => setHour(parseInt(e.target.value))}
            >
              {hours.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
            
            <span className="time-divider">:</span>
            
            <select 
              className="time-select"
              value={minute}
              onChange={(e) => setMinute(parseInt(e.target.value))}
            >
              {minutes.map((m) => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
            
            <select 
              className="time-period"
              value={period}
              onChange={(e) => setPeriod(e.target.value as 'AM' | 'PM')}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          
          <div className="text-center">
            <button
              onClick={calculateSleepCycles}
              className="px-8 py-3 bg-sleep-600 hover:bg-sleep-700 text-white font-medium rounded-full
                        transition-all duration-300 shadow-md hover:shadow-lg animate-pulse-soft"
            >
              {t('calculate')}
            </button>
          </div>
          
          {calculated && (
            <SleepCycleDisplay 
              times={cycleResults} 
              mode={mode} 
            />
          )}
          
          <div className="text-sm text-night-500 mt-4">
            <p>
              {t('sleepCycleInfo')}
            </p>
            <p className="mt-2">
              {t('fallAsleepInfo')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepCalculator;
