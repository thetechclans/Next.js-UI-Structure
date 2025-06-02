import React, { useState, useRef, ReactElement } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Camera, Icon, User } from "lucide-react";
import { FormField } from "./form-field";

interface PopModalProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  fieldsPerRow?: number;
  isOpen: boolean;
  showProfileImage?: boolean; // renamed from imageoff for clarity
  onClose: () => void;
}

export default function PopModal({
  title,
  children,
  className = "",
  fieldsPerRow = 2,
  isOpen,
  showProfileImage = false, // default to false
  onClose,
}: PopModalProps) { 
  if (!isOpen) return null;
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Card className={`p-6 w-full max-w-md ${className}`}>
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label className="text-xl font-semibold block text-center">
              {title}
            </Label>
            <Button
              size="icon"
              onClick={onClose}
              color={"transparent"}
              className="text-gray-500 hover:text-gray-300 top-2 right-2"
            >
              ✕
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            {showProfileImage && (
              <div className="flex flex-col items-center gap-2">
                <div 
                  onClick={triggerFileInput}
                  className="relative cursor-pointer group"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200">
                    <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
                />
                <span className="text-sm text-gray-500">Click to upload photo</span>
              </div>
            )}

            <div
              className={`grid gap-4 w-full`}
              style={{
                gridTemplateColumns: `repeat(${fieldsPerRow}, minmax(0, 1fr))`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}