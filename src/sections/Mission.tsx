import React from 'react';
import { Shield, Zap, Heart, RefreshCcw } from 'lucide-react';

const Mission = () => {
  const values = [
    { icon: <Shield />, title: "Teacher-First", desc: "We build with real classroom needs as our North Star." },
    { icon: <Zap />, title: "Efficiency-Focused", desc: "If it saves an educator 5 minutes, it's worth building." },
    { icon: <Heart />, title: "Transparent", desc: "We are honest about what our AI can and cannot do." },
    { icon: <RefreshCcw />, title: "Iterative", desc: "Labs means we test, learn, and improve every single day." }
  ];

  return (
    <section id="mission" className="py-24 bg-indigo-600/5 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">Our Mission</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">Bridging the gap between <br /> classroom and code.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ink and Code Labs started with a simple observation: teachers are overworked and the digital tools they use are often outdated. We decided to change that by applying professional software engineering standards to the world of education.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i}>
                  <div className="text-indigo-500 mb-3">{v.icon}</div>
                  <h5 className="font-bold mb-1">{v.title}</h5>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-3xl overflow-hidden border border-white/5 relative">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="text-center">
                    <div className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 italic">
                       "LABS"
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                      EXPERIMENTAL ENGINEERING FOR MODERN LEARNERS
                    </div>
                 </div>
              </div>
              {/* Decorative particles effect simulation via CSS */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            </div>
            {/* Decorative abstract shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full blur-[60px] opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;