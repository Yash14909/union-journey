
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProfiles = () => {
  // Sample profile data
  const profiles = [
    {
      id: '1',
      name: 'Sarah',
      age: 28,
      location: 'New York, NY',
      occupation: 'Marketing Director',
      education: 'MBA',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      interests: ['Travel', 'Photography', 'Cooking', 'Hiking'],
      compatibilityScore: 93,
    },
    {
      id: '2',
      name: 'David',
      age: 32,
      location: 'San Francisco, CA',
      occupation: 'Software Engineer',
      education: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      interests: ['Coding', 'Gaming', 'Running', 'Reading'],
      compatibilityScore: 87,
    },
    {
      id: '3',
      name: 'Priya',
      age: 27,
      location: 'Chicago, IL',
      occupation: 'Doctor',
      education: 'Medical School',
      image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      interests: ['Yoga', 'Music', 'Volunteering', 'Dancing'],
      compatibilityScore: 91,
    },
    {
      id: '4',
      name: 'Michael',
      age: 34,
      location: 'Los Angeles, CA',
      occupation: 'Architect',
      education: 'Master of Architecture',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      interests: ['Design', 'Art', 'Travel', 'Coffee'],
      compatibilityScore: 85,
    },
  ];

  return (
    <section id="featured-profiles" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-matrimony-blue border border-matrimony-blue-dark/20 text-matrimony-blue-dark text-sm font-medium mb-4">
              Featured Profiles
            </div>
            <h2 className="heading-lg mb-3 text-balance">Discover Your Perfect Match</h2>
            <p className="text-gray-600 text-lg max-w-xl text-balance">
              Browse through our curated selection of profiles. Each one has been verified and matches your preferences.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="group border-matrimony-rose-dark text-matrimony-rose-dark hover:bg-matrimony-rose-dark hover:text-white"
          >
            View All Profiles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${parseInt(profile.id) * 0.1}s` }}
            >
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;
