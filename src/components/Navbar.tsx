
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();
  
  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('sleepTips'), path: '/sleep-tips' },
    { name: t('about'), path: '/about' },
  ];

  return (
    <nav className="flex items-center space-x-1 md:space-x-2">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            `px-4 py-2 rounded-full transition-all duration-300 font-medium ${
              isActive 
              ? 'bg-sleep-600 text-white' 
              : 'text-night-700 hover:bg-sleep-50'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
