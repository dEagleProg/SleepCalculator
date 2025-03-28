import React from 'react';
import { MoonIcon } from 'lucide-react';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="w-full py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <MoonIcon size={24} className="text-sleep-600" />
            <h1 className="text-2xl font-display font-bold text-night-900">
              SleepCalculator
              <div className="text-xs font-normal text-night-700 mt-1">by dEagle</div>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Navbar />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
