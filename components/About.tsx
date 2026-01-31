
import React from 'react';
import { ABOUT_DATA } from '../constants';
import { SectionType } from '../types';

export const About: React.FC = () => {
  return (
    <section id={SectionType.ABOUT} className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 shadow-2xl">
               <img 
                src={ABOUT_DATA.avatarUrl} 
                alt={ABOUT_DATA.name} 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-black rounded-full flex items-center justify-center bg-white rotate-12 shadow-lg z-20">
               <span className="font-display font-bold text-xl">{ABOUT_DATA.type}</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 pt-8">
            <h2 className="text-5xl font-display font-bold mb-2 uppercase tracking-tighter">关于我 / About</h2>
            <h3 className="text-2xl text-gray-500 mb-8 font-light">{ABOUT_DATA.name} <span className="text-sm align-top ml-2">{ABOUT_DATA.birth}</span></h3>
            
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
               <p className="font-bold text-xl border-l-4 border-gray-900 pl-4">
                 {ABOUT_DATA.school} <br/>
                 <span className="text-base text-gray-500 font-normal">{ABOUT_DATA.major}</span>
               </p>
               
               <p className="font-light">{ABOUT_DATA.bio}</p>
            </div>

            <div className="mt-12">
              <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-bold">核心技能 / Skills</h4>
              <div className="flex flex-wrap gap-2">
                {ABOUT_DATA.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-full hover:bg-black hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
