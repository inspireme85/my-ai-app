import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Box, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Divisions = () => {
  const divisions = [
    {
      id: 'education',
      title: 'Ink & Code Education',
      description: 'The future of teaching is AI-augmented. We build SaaS platforms and resources specifically for the modern educator.',
      icon: <BookOpen className="text-emerald-400" />,
      color: 'emerald',
      features: [
        'AI Lesson Planning SaaS',
        'Teacher Productivity Packs',
        'EdTech Consultation',
        'Custom District Tools'
      ],
      cta: 'View Education Lab'
    },
    {
      id: 'products',
      title: 'Digital Product Lab',
      description: 'High-performance templates, developer tools, and automation scripts for creators and entrepreneurs.',
      icon: <Box className="text-indigo-400" />,
      color: 'indigo',
      features: [
        'Next.js Starter Kits',
        'Notion Systems for Biz',
        'Automated Workflow Scripts',
        'UI/UX Design Systems'
      ],
      cta: 'Browse Shop'
    }
  ];

  return (
    <section id="education" className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="Our Divisions"
          title="Two Pillars of Innovation"
          subtitle="We balance the specialized needs of education with the cutting-edge requirements of digital product development."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {divisions.map((div, idx) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group p-1 rounded-[2rem] bg-gradient-to-br from-border to-transparent hover:to-border transition-all duration-500"
            >
              <div className="bg-background rounded-[1.8rem] p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-${div.color}-500/10`}>
                    {React.cloneElement(div.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-gray-500" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{div.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {div.description}
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {div.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className={`text-${div.color}-500`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold text-sm border border-border group-hover:bg-white group-hover:text-black transition-all duration-300`}>
                  {div.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;