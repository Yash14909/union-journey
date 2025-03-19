
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-matrimony-beige px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-matrimony-rose/20">
          <Heart className="h-10 w-10 text-matrimony-rose-dark" />
        </div>
        <h1 className="font-serif text-5xl font-semibold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          size="lg"
          className="bg-matrimony-rose-dark hover:bg-matrimony-rose-dark/90 text-white"
          onClick={() => navigate("/")}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
