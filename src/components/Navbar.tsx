
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLoginModal = () => {
    setAuthType('login');
    setAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthType('register');
    setAuthModalOpen(true);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-matrimony-rose-dark" />
              <span className="font-serif font-semibold text-xl">Matrimony</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <a href="#how-it-works" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-matrimony-rose-dark transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-matrimony-rose-dark transition-colors">
                Success Stories
              </a>
              <a href="#features" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-matrimony-rose-dark transition-colors">
                Features
              </a>
            </nav>
            
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="ghost" 
                className="text-sm font-medium hover:text-matrimony-rose-dark transition-all"
                onClick={openLoginModal}
              >
                Log in
              </Button>
              <Button 
                className="bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90 text-white"
                onClick={openRegisterModal}
              >
                Register
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}>
          <div className="container-custom flex flex-col space-y-4 px-4">
            <a 
              href="#how-it-works" 
              className="py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </a>
            <a 
              href="#features" 
              className="py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" onClick={openLoginModal}>Log in</Button>
              <Button onClick={openRegisterModal}>Register</Button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialView={authType} 
      />
    </>
  );
};

export default Navbar;
