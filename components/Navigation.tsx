
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionType } from '../types';

interface NavigationProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: SectionType.HERO, label: '首页 / Home' },
    { id: SectionType.ABOUT, label: '关于 / About' },
    { id: SectionType.COMFYUI, label: '工作流 / Flow' },
    { id: SectionType.LORA, label: '美学 / Lora' },
    { id: SectionType.GALLERY, label: '作品 / Gallery' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className={`text-xl font-display font-bold cursor-pointer text-black transition-opacity duration-300 ${
                isScrolled || isMobileOpen ? 'opacity-100' : 'opacity-0 md:opacity-0'
            }`}
            onClick={() => onNavigate(SectionType.HERO)}
          >
            A/I/G/C
          </div>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest rounded-full transition-all font-bold ${
                  activeSection === item.id 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-black">
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center space-y-8 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileOpen(false);
              }}
              className="text-3xl font-display font-bold text-black hover:text-gray-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
