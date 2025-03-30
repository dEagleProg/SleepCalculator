import React from 'react';
import { MoonIcon } from 'lucide-react';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-8 md:py-6 mb-4 md:mb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <MoonIcon size={24} className="text-sleep-600" />
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-xl md:text-2xl font-display font-bold text-night-900">
                SleepCalculator
                <div className="text-[10px] md:text-xs font-normal text-night-700 mt-0.5 md:mt-1">
                  <a href="https://github.com/dEagleProg" target="_blank" rel="noopener noreferrer" className="hover:text-sleep-600 transition-colors cursor-pointer">by dEagle</a>
                </div>
              </h1>
            </Link>
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
