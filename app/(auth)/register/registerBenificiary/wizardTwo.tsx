import React from "react";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui-components/form";
import { FormField } from "@/components/ui-components/form-field";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Spinner from "@/components/ui/spinner";

const WizardTwo = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form
      {...props}
      className="flex flex-col textstyle text-start items-center justify-center"
    >
      {/* <div className="flex ">
        <div className="w-[350px] h-[350px] p-8 absolute -right-20 -top-16 rounded-full glossy"></div>
      </div> */}
      <div className="flex space-x-6">
        <FormField label="Employer" placeholder="Employer" required />
        <FormField label="Profession" placeholder="Profession" required />
      </div>
      <div className="flex space-x-6">
        <FormField label="Its Source" placeholder="Its Source" required />
        <FormField
          label="National Id Number"
          placeholder="National Id Number"
          required
        />
      </div>
      <div className="flex space-x-6">
        <FormField label="Date of Birth" placeholder="dd/mm/yyyy" required />
        <FormField label="Accommodation" placeholder="Accommodation" required />
      </div>
    </Form>
  );
};
export default WizardTwo;
