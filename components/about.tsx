'use client';

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Heart, Award, Globe, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 relative bg-cyber-darker overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-cyber-purple/20 rotate-45 animate-spin opacity-30" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyber-lime/20 rotate-12 animate-pulse opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white hover:text-cyber-lime transition-colors duration-300 cursor-pointer">{t('about.title')}</h2>
          <div className="h-1 w-24 bg-cyber-lime mx-auto shadow-neon-lime hover:w-32 transition-all duration-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-80 h-80 mx-auto relative group">
              {/* Avatar with enhanced animations */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyber-purple via-cyber-blue to-cyber-lime p-1 shadow-neon-purple animate-pulse-slow group-hover:animate-spin transition-all duration-500">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl border-2 border-cyber-gray group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <Image src="/cusco.jpg" alt="Fernando Cabrera Nava" width={200} height={200} className="w-full h-full object-cover rounded-full" priority />
                </div>
              </div>

              {/* Enhanced floating geometric elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyber-lime rotate-45 animate-bounce shadow-neon-lime hover:scale-125 transition-transform cursor-pointer" />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-cyber-blue rotate-12 animate-spin shadow-neon-blue hover:scale-125 transition-transform cursor-pointer"
                style={{ animationDuration: '3s' }}
              />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyber-purple rotate-45 animate-pulse opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="absolute bottom-1/4 -right-8 w-3 h-3 bg-cyber-lime animate-ping opacity-40" />
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Passion Section */}
            <div className="bg-cyber-gray/60 backdrop-blur-sm border border-cyber-purple/50 rounded-lg p-8 shadow-cyber-card hover:shadow-neon-purple transition-all duration-300 hover:border-cyber-purple/70 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-cyber-lime group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-cyber-lime group-hover:text-cyber-lime-glow transition-colors">{t('about.passion')}</h3>
              </div>
              <p className="text-lg text-white leading-relaxed mb-4 group-hover:text-gray-100 transition-colors">{t('about.passionDesc')}</p>
              <p className="text-lg text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors">{t('about.passionDesc2')}</p>
            </div>

            {/* Education Section */}
            <div className="bg-cyber-gray/60 backdrop-blur-sm border border-cyber-blue/50 rounded-lg p-8 shadow-cyber-card hover:shadow-neon-blue transition-all duration-300 hover:border-cyber-blue/70 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-cyber-blue group-hover:animate-bounce" />
                <h3 className="text-xl font-bold text-cyber-blue group-hover:text-cyber-blue-glow transition-colors">{t('about.education')}</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-4 group-hover:text-gray-100 transition-colors">
                <strong className="text-white">{t('about.degree1')}</strong>
                <br />
                {t('about.university1')}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors">
                <strong className="text-white">{t('about.degree2')}</strong>
                <br />
                {t('about.university2')}
              </p>
            </div>

            {/* Skills & Certifications Section */}
            <div className="bg-cyber-gray/60 backdrop-blur-sm border border-cyber-lime/50 rounded-lg p-8 shadow-cyber-card hover:shadow-neon-lime transition-all duration-300 hover:border-cyber-lime/70 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-cyber-lime group-hover:animate-spin" />
                <h3 className="text-xl font-bold text-cyber-lime group-hover:text-cyber-lime-glow transition-colors">{t('about.certifications')}</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-4 group-hover:text-gray-100 transition-colors">{t('about.certificationsDesc')}</p>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-5 w-5 text-cyber-blue" />
                <span className="text-white font-semibold">{t('about.english')}</span>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors">{t('about.skillsDesc')}</p>
            </div>

            {/* Leadership Section */}
            <div className="bg-cyber-gray/60 backdrop-blur-sm border border-cyber-purple/50 rounded-lg p-8 shadow-cyber-card hover:shadow-neon-purple transition-all duration-300 hover:border-cyber-purple/70 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-cyber-purple group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-cyber-purple group-hover:text-cyber-purple-glow transition-colors">{t('about.leadership')}</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors">{t('about.leadershipDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
