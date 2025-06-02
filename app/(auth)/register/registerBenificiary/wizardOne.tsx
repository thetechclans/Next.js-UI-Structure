import { Form } from "@/components/ui-components/form";
import { FormField } from "@/components/ui-components/form-field";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { Mail, Lock } from "lucide-react";
import Link from "next/dist/client/link";
import { useState } from "react";

const WizardOne = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto"> {/* Increased max width */}
 

  <Form 
    {...props} 
    className="textstyle text-start mx-auto items-center"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
        <FormField
          label="First Name"
          name="First name"
          type="text"
          placeholder="Enter your First name"
          startIcon={<Lock className="h-8 w-8 text-gray-500 relative z-50" />}
          required
          className="w-full"  // Ensure full width
        /></div>
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full"
        />
        <FormField
          label="Password"
          name="Password"
          type="password"
          placeholder="Enter your Password"
          required
          className="w-full"
        />
      </div>
      
      <div className="space-y-6">
        <FormField
          label="Last Name"
          name="Last name"
          type="text"
          placeholder="Enter your Last name"
          required
          className="w-full"  // Ensure full width
        />
        <FormField
          label="Phone Number"
          name="Phone Number"
          type="text"
          placeholder="Enter your Phone Number"
          required
          className="w-full"  // Ensure full width
        />
        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your Password"
          required
          className="w-full"
        />
      </div>
    </div>
  </Form>
</div>
  );
};

export default WizardOne;
