import React from 'react';
import { Code2, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 p-1 rounded-md">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Ink & Code<span className="text-indigo-500">.</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-8">
              Automating education and building digital tools for the modern age. Excellence in engineering, empathy in design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Education</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">LessonGen Pro</a></li>
              <li><a href="#" className="hover:text-white">Classroom Tools</a></li>
              <li><a href="#" className="hover:text-white">Teacher Packs</a></li>
              <li><a href="#" className="hover:text-white">AI Training</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Products</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Automation</a></li>
              <li><a href="#" className="hover:text-white">Components</a></li>
              <li><a href="#" className="hover:text-white">Store</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Ink and Code Labs LLC. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Built with <Heart size={12} className="mx-1 text-red-500 fill-red-500" /> in the Education Lab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;