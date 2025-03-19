
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Heart, Users } from "lucide-react";
import AuthModal from './AuthModal';
import { useState } from 'react';

const Hero = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Create subtle parallax effect
        const element = heroRef.current;
        // Transform the background only slightly for subtle effect
        element.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-matrimony-beige opacity-70"></div>
      
      {/* Moving Background Elements for subtle animation */}
      <div 
        ref={heroRef} 
        className="absolute -z-5 inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-matrimony-rose opacity-20 animate-slow-spin"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-matrimony-blue opacity-20 animate-slow-spin" style={{animationDirection: 'reverse'}}></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in-up" style={{animationDuration: '1s'}}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm w-fit">
              <span className="flex h-2 w-2 rounded-full bg-matrimony-rose-dark"></span>
              <span className="text-sm font-medium">Find your perfect match</span>
            </div>
            
            <h1 className="heading-xl !leading-tight text-balance">
              Begin Your <span className="text-matrimony-rose-dark">Love</span> Story, One Match at a Time
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl text-balance">
              Join thousands of individuals who have found their life partners through our trusted matrimony service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90 text-white shadow-md transition-all"
                onClick={() => setShowAuthModal(true)}
              >
                Get Started Today
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 hover:bg-gray-50"
                asChild
              >
                <a href="#how-it-works" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  How It Works
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-matrimony-rose-dark" />
                <span className="text-sm font-medium">100+ Marriages</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-matrimony-blue-dark" />
                <span className="text-sm font-medium">10k+ Active Profiles</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-first md:order-last mx-auto animate-fade-in" style={{animationDuration: '1.2s', animationDelay: '0.3s'}}>
            <div className="relative z-10 w-80 h-80 md:w-96 md:h-[36rem] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532347922424-c84d79aba447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80" 
                alt="Happy couple" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-4 w-40 h-40 bg-matrimony-rose rounded-lg -z-10 blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-8 w-40 h-40 bg-matrimony-blue-dark rounded-lg -z-10 blur-xl opacity-30 animate-pulse" style={{animationDuration: '7s'}}></div>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        initialView="register" 
      />
    </div>
  );
};

export default Hero;
