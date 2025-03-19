
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessagesSquare, MapPin, MoreHorizontal, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    location: string;
    occupation: string;
    education: string;
    image: string;
    interests: string[];
    compatibilityScore?: number;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <Card 
      className="relative overflow-hidden rounded-xl border-0 shadow-md transition-all duration-500 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 z-10" 
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-full w-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {profile.compatibilityScore && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-black font-semibold text-sm rounded-full h-10 w-10 flex items-center justify-center z-20">
            {profile.compatibilityScore}%
          </div>
        )}
      </div>
      
      <CardContent className="p-4 relative z-20">
        <div 
          className="flex flex-col space-y-2 transition-transform duration-300" 
          style={{ transform: isHovered ? 'translateY(-60px)' : 'translateY(0)' }}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Briefcase className="h-3.5 w-3.5 mr-1" />
              <span>{profile.occupation}</span>
            </div>
            <span className="text-xs">•</span>
            <div className="flex items-center">
              <GraduationCap className="h-3.5 w-3.5 mr-1" />
              <span>{profile.education}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 pt-1">
            {profile.interests.slice(0, 3).map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                {interest}
              </Badge>
            ))}
            {profile.interests.length > 3 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{profile.interests.length - 3}
              </Badge>
            )}
          </div>
          
          <div 
            className="flex items-center gap-2 pt-3 opacity-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-white' : ''}`} />
              {isLiked ? 'Liked' : 'Like'}
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <MessagesSquare className="h-4 w-4 mr-1" />
              Message
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
