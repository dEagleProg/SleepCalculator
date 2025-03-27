
import React from 'react';
import { MoonIcon } from 'lucide-react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="p-2 bg-sleep-100 rounded-full mr-3">
              <MoonIcon size={24} className="text-sleep-700" />
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-night-900">
              <span className="text-sleep-600">Sleep</span>Calculator
            </h1>
          </div>
          
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
