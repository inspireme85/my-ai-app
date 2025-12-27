import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">Introducing LessonGen AI v2.0</span>
          <ChevronRight size={14} className="text-gray-500" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
        >
          Where Education <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500">
            Meets Innovation
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Digital solutions for educators and entrepreneurs. We build the tools that automate the tedious so you can focus on what matters most.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all group hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/10">
            Explore Solutions
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-surface border border-border text-white font-bold rounded-xl flex items-center justify-center hover:bg-white/5 transition-all">
            View Portfolio
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale grayscale-1 hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center justify-center space-x-2 text-lg font-bold"><Zap size={20}/> <span>FastFlow</span></div>
          <div className="flex items-center justify-center space-x-2 text-lg font-bold"><GraduationCap size={20}/> <span>EduPulse</span></div>
          <div className="flex items-center justify-center space-x-2 text-lg font-bold"><Code2 size={20}/> <span>NodeLogic</span></div>
          <div className="flex items-center justify-center space-x-2 text-lg font-bold"><Sparkles size={20}/> <span>VividAI</span></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;