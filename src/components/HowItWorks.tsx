
import React from 'react';
import { UserPlus, Search, MessagesSquare, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: 'Create Your Profile',
      description: 'Sign up and create your detailed profile showcasing your personality, interests, and preferences.',
      color: 'bg-matrimony-rose-dark',
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Discover Matches',
      description: 'Our advanced algorithm suggests compatible matches based on your preferences and values.',
      color: 'bg-matrimony-blue-dark',
    },
    {
      icon: <MessagesSquare className="h-6 w-6" />,
      title: 'Connect & Communicate',
      description: 'Begin meaningful conversations with potential matches in a safe, private environment.',
      color: 'bg-green-500',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Find Your Partner',
      description: 'Build a relationship and take the next step toward a beautiful life together.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-matrimony-beige">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="heading-lg mb-4 text-balance">How Our Matrimony Service Works</h2>
          <p className="text-gray-600 text-lg text-balance">
            Finding your perfect match has never been easier. Our streamlined process helps you discover compatible partners with just a few steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center animate-fade-in-up transition-all hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number with line connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-gray-200"></div>
              )}
              
              <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center mb-6 relative shadow-lg`}>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-gray-800 flex items-center justify-center text-sm font-bold border border-gray-100 shadow-sm">
                  {index + 1}
                </span>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
