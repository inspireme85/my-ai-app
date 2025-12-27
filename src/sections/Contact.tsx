import React, { useState } from 'react';
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo - in production this would connect to your backend.');
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-panel rounded-[2rem] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-white/5 p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 text-sm mb-12">
                Have a question about our platforms or interested in a custom solution? Our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-indigo-400"><Mail size={20}/></div>
                  <span className="text-sm font-medium">hello@inkandcodelabs.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-indigo-400"><MessageSquare size={20}/></div>
                  <span className="text-sm font-medium">Live Chat Available</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-indigo-400"><MapPin size={20}/></div>
                  <span className="text-sm font-medium">Remote-First Lab</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Average Response Time: 2-4 Hours
              </p>
            </div>
          </div>

          <div className="md:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-background border border-border p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-background border border-border p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-background border border-border p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="How can we help?"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;