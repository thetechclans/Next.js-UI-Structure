"use client";
import { FormField } from "@/components/ui-components/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import WizardTwo from "../registerBenificiary/wizardTwo";

const WizardMemberOne = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <Form {...props} className="textstyle text-start">
        <FormField label="Full Name" placeholder="Full Name" required/>
        <FormField label="Email" placeholder="Email" required />
        <FormField label="Phone Number" placeholder="Phone Number" required/>
      </Form>

      {/* <WizardTwo/> */}
    </>
  );
};
export default WizardMemberOne;
