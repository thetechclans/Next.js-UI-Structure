import React from 'react';
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface EmptyStateProps {
  message: string;
  imageSrc?: string;
  className?: string;
  imageClass?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  imageSrc,
  className = "",
  imageClass = "w-1/3",
}) => {
  return (
    <Card className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {imageSrc && (
        <img 
          src={"/imgs/affiliate-marketing_5067008.png"} 
          alt="Empty state" 
          className={`mb-4 ${imageClass}`}
        />
      )}
      <Label className="text-lg text-gray-500 text-center">
        {message}
      </Label>
    </Card>
  );
};

export default EmptyState;