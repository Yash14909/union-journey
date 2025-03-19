
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView }) => {
  const [view, setView] = useState<'login' | 'register'>(initialView);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      toast.success("Logged in successfully!");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      toast.success("Account created successfully!");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 overflow-hidden w-full max-w-md rounded-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <Tabs value={view} onValueChange={(v) => setView(v as 'login' | 'register')} className="w-full">
          <div className="bg-matrimony-beige p-6 pb-4">
            <h2 className="font-serif text-2xl font-semibold text-center mb-1">
              {view === 'login' ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              {view === 'login' 
                ? 'Sign in to continue your journey to finding love'
                : 'Join thousands of singles looking for meaningful relationships'
              }
            </p>
            
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="login">Log In</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="px-6 py-8">
            <TabsContent value="login" className="m-0">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="youremail@example.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="p-0 h-auto text-xs text-matrimony-rose-dark" type="button">
                      Forgot password?
                    </Button>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button variant="outline" type="button" className="w-full">
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    Facebook
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="register" className="m-0">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="registerEmail">Email</Label>
                  <Input id="registerEmail" type="email" placeholder="youremail@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="registerPassword">Password</Label>
                  <Input id="registerPassword" type="password" placeholder="••••••••" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-4 w-4 rounded border-gray-300 text-matrimony-rose-dark focus:ring-matrimony-rose-dark"
                    required 
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-matrimony-rose-dark underline">Terms of Service</a> and <a href="#" className="text-matrimony-rose-dark underline">Privacy Policy</a>
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
