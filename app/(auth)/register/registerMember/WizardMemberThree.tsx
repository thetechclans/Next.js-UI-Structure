"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

const WizardMemberThree = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [theme, setTheme] = React.useState("light");
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
const [selectedAmount, setSelectedAmount] = useState<number>(50);

  return (
  <section className="relative max-w-md mx-auto"> {/* Fixed card size container */}
  {/* Background decorative elements */}
  <div className="absolute -z-10 inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
  </div>

  <DropdownMenu>
    <DropdownMenuTrigger>
      <DropdownMenuLabel className="border-1 rounded-xl shadow-lg p-4 bg-stone-400 textstyle backdrop-blur-sm bg-white/90 border border-white/20 hover:scale-[1.02] transition-transform w-full">
        Membership
      </DropdownMenuLabel>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="bg-grey-800 textstyle backdrop-blur-sm bg-white/90 border border-white/20 rounded-xl shadow-xl w-[180px]">
      <DropdownMenuItem className="hover:bg-blue-50">Gold</DropdownMenuItem>
      <DropdownMenuItem className="hover:bg-blue-50">Silver</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  <section className="textstyle mt-6 p-6 rounded-xl backdrop-blur-sm bg-white/90 border border-white/20 shadow-xl w-full">
    <Card className="flex flex-col space-y-6">

      <div className="flex items-center justify-center space-x-4 bg-gray-100/50 p-2 rounded-lg">
        <Button className={`px-4 py-2 rounded-md bg-transparent shadow-lg text-sm ${billingCycle === 'monthly' ? 'bg-[#8989ba] text-white' : 'text-gray-600'}`}
                onClick={() => setBillingCycle('monthly')}>
          Monthly
        </Button>
        <Button className={`px-4 py-2 rounded-md bg-transparent shadow-lg text-sm ${billingCycle === 'annual' ? 'bg-[#8989ba] text-white' : 'text-gray-600'}`}
                onClick={() => setBillingCycle('annual')}>
          Annual (Save 20%)
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`border rounded-lg p-3 cursor-pointer transition-all h-24 flex flex-col justify-between ${selectedAmount === 50 ? 'border-[#8989ba] bg-[#a7a6cb8e]' : 'border-gray-200'}`}
             onClick={() => setSelectedAmount(50)}>
          <div>
            <span className="text-xl font-bold">${billingCycle === 'monthly' ? '50' : '480'}</span>
            {billingCycle === 'annual' && (
              <span className="text-gray-500 text-xs ml-1">Save $120</span>
            )}
          </div>
          <div className="text-gray-500 text-xs">
            {billingCycle === 'monthly' ? 'per month' : 'per year'}
          </div>
        </div>
        
        <div className={`border rounded-lg p-3 cursor-pointer transition-all h-24 flex flex-col justify-between ${selectedAmount === 100 ? 'border-[#8989ba] bg-[#a7a6cb8e]' : 'border-gray-200'}`}
             onClick={() => setSelectedAmount(100)}>
          <div>
            <span className="text-xl font-bold">${billingCycle === 'monthly' ? '100' : '960'}</span>
            {billingCycle === 'annual' && (
              <span className="text-gray-500 text-xs ml-1">Save $240</span>
            )}
          </div>
          <div className="text-gray-500 text-xs">
            {billingCycle === 'monthly' ? 'per month' : 'per year'}
          </div>
        </div>
      </div>

      {/* Summary - Fixed height */}
      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
        <div className="flex justify-between py-1">
          <span className="text-gray-600">Selected:</span>
          <span>Gold Membership</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-600">Billing:</span>
          <span>{billingCycle === 'monthly' ? 'Monthly' : 'Annual'}</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-600">Total:</span>
          <span>
            ${billingCycle === 'monthly' ? selectedAmount : selectedAmount * 12 * 0.8}
            {billingCycle === 'annual' && (
              <span className="text-gray-500 text-xs ml-1">(Save ${selectedAmount * 12 * 0.2})</span>
            )}
          </span>
        </div>
      </div>
    </Card>
  </section>
</section>
  )
};
export default WizardMemberThree;
