// components/profile-dropdown.tsx
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { User, Settings, LogOut } from "lucide-react";
import { ReactNode } from "react";

type MenuItem = {
  label: string;
  icon: ReactNode;
  onClick: () => void;
};

type TriggerType = "icon" | "photo" | "initials" | "custom";

interface ProfileDropdownProps {
  showMenuItems?: boolean;
  user?: {
    name: string;
    email: string;
    image?: string;
    icon?: ReactNode;
  };
  menuItems?: MenuItem[];
  optionalButtons?: { // New prop for optional buttons
    label: string;
    icon: ReactNode;
    onClick: () => void;
    variant?: "default" | "primary" | "secondary";
  }[];
  triggerType?: TriggerType;
  customTrigger?: ReactNode;
  showNameInTrigger?: boolean;
  className?: string;
}

export function ProfileDropdown({
  
  user = {
    name: "Guest User",
    email: "guest@example.com",
  },
  menuItems = [
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      label: "Sign Out",
      icon: <LogOut className="h-4 w-4 mr-2" />,
      onClick: () => console.log("Sign out clicked"),
    },
  ],
  optionalButtons = [], // Default empty array
  triggerType = "icon",
  customTrigger,
  showNameInTrigger = false,
  className = "",
  showMenuItems = true,
}: ProfileDropdownProps) {
  const renderTrigger = () => {
    if (customTrigger) return customTrigger;
    
    switch (triggerType) {
      case "photo":
        return user?.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <User className="h-8 w-8" />
        );
      
      case "initials":
        return (
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            {user.name
              .split(' ')
              .map(n => n[0])
              .join('')
              .toUpperCase()}
          </div>
        );
      
      case "icon":
      default:
        return <User className="h-8 w-8" />;
    }
  };

  return (
    <Card className={`border-none bg-transparent shadow-none ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            {renderTrigger()}
            {showNameInTrigger && (
              <span className="hidden md:inline font-medium">
                {user.name}
              </span>
            )}
          </div>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56 bg-gray-100 hover:bg-gray-300 rounded-md" align="end" forceMount>
          <DropdownMenuItem className="flex-col items-start">
            <div className="flex items-center gap-2">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {user.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()}
                </div>
              )}
              <div className="flex flex-col">
                <Label className="text-sm font-medium">{user.name}</Label>
                <Label className="text-xs text-muted-foreground">
                  {user.email}
                </Label>
              </div>
            </div>
          </DropdownMenuItem>
          
          {/* Optional buttons section */}
          {optionalButtons.length > 0 && (
            <>
              <Separator/>
              <div className="px-2 py-1.5 space-y-1">
                {optionalButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      button.onClick();
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded text-sm flex items-center ${
                      button.variant === "primary" 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : button.variant === "secondary"
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {button.icon}
                    <span className="ml-2">{button.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
          
          <Separator />

          {showMenuItems && ( 
            <>

          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={item.onClick}
              className="cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </DropdownMenuItem>
          ))}
          </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
}