
import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-matrimony-rose-dark" />
              <span className="font-serif font-semibold text-xl">Matrimony</span>
            </div>
            <p className="text-gray-600 mb-6">
              Helping individuals find their perfect life partner through our trusted matrimony service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-matrimony-rose-dark hover:text-white hover:border-matrimony-rose-dark transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-matrimony-rose-dark hover:text-white hover:border-matrimony-rose-dark transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-matrimony-rose-dark hover:text-white hover:border-matrimony-rose-dark transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#featured-profiles" className="text-gray-600 hover:text-matrimony-rose-dark">Browse Profiles</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-matrimony-rose-dark">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-matrimony-rose-dark">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-matrimony-rose-dark">Membership Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-matrimony-rose-dark">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-matrimony-rose-dark mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">support@matrimony.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-matrimony-rose-dark mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-matrimony-rose-dark mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Matrimony Street, Love City, LC 12345
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for dating tips and success stories.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button className="bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90 text-white w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Matrimony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
