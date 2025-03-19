
import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    couple: 'Priya & Rahul',
    story: 'We matched on this platform in 2021 and instantly connected. After six months of getting to know each other, we knew we were meant to be. Now we're happily married and building our life together.',
    image: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    date: 'Married: June 2022',
  },
  {
    id: 2,
    couple: 'Sarah & David',
    story: 'Despite living in different cities, we found each other here. Our shared values and goals brought us together, and after a year of dating, we got engaged. This platform changed our lives forever.',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e331fddb20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    date: 'Married: September 2022',
  },
  {
    id: 3,
    couple: 'Mei & James',
    story: 'We were both skeptical about online matchmaking until we found each other. The compatibility matching was spot on! After our first date, we knew this was something special. We're now planning our wedding.',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    date: 'Engaged: December 2022',
  },
  {
    id: 4,
    couple: 'Aisha & Omar',
    story: 'With our families living in different countries, we never would have met without this platform. The cultural compatibility features helped us find each other. After two years of long-distance, we finally got married.',
    image: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    date: 'Married: March 2023',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Handle next testimonial
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Handle previous testimonial
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-matrimony-rose border border-matrimony-rose-dark/20 text-matrimony-rose-dark text-sm font-medium mb-4 animate-pulse">
            <Heart className="h-3.5 w-3.5 mr-1.5 fill-matrimony-rose-dark" />
            Success Stories
          </div>
          <h2 className="heading-lg mb-4 text-balance">Real Couples, Real Love Stories</h2>
          <p className="text-gray-600 text-lg text-balance">
            Discover how our matrimony service has helped couples find their perfect match and build beautiful lives together.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-8">
          <div 
            ref={testimonialRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-80 md:h-auto relative overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.couple} 
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-6 text-white">
                            <h3 className="text-2xl font-serif font-semibold">{testimonial.couple}</h3>
                            <p className="text-sm text-white/80">{testimonial.date}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col justify-center">
                        <svg className="text-matrimony-rose-dark h-10 w-10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                        </svg>
                        
                        <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                          "{testimonial.story}"
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={handlePrev}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-matrimony-rose-dark scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={handleNext}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
