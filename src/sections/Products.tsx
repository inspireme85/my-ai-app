import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Products = () => {
  const items = [
    {
      name: "LessonGen Pro",
      tag: "Education SaaS",
      desc: "The leading AI lesson planner for K-12 educators. Generates standards-aligned plans in seconds.",
      price: "$12/mo"
    },
    {
      name: "SaaS Boilerplate v3",
      tag: "Digital Product",
      desc: "Production-ready Next.js 14 template with Auth, Stripe, and Prisma pre-configured.",
      price: "$149"
    },
    {
      name: "Teacher Notion Hub",
      tag: "Template",
      desc: "The ultimate dashboard for managing students, grades, and parent communication.",
      price: "$29"
    }
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="Featured Products"
          title="Built for Performance"
          subtitle="Explore our most popular tools and platforms currently empowering thousands of users."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl group hover:border-indigo-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                  {item.tag}
                </span>
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{item.name}</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="font-bold">{item.price}</span>
                <button className="flex items-center text-xs font-bold text-gray-300 hover:text-white group">
                  Details <ExternalLink size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;