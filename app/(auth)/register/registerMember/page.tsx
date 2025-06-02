"use client";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import WizardMemberOne from "./WizardMemberOne";
import Wizard from "@/components/ui-components/wizard";
import { Button } from "@/components/ui/button";
import WizardTwo from "../registerBenificiary/wizardTwo";
import WizardMemberThree from "./WizardMemberThree";
import { useState } from "react";
import WizardOne from "../registerBenificiary/wizardOne";

export default function RegisterMember() {
  const [isLoading, setIsLoading] = useState(false);

  const handleFinish = () => {
    setIsLoading(true);
    alert("Uploaded");
  };

  return (
    <div className="min-h-screen flex items-center justify-center heroImage p-6">
      <Wizard
        stepLabels={["Details", "Personal Details", "Subscription"]}
        onFinish={handleFinish}
        renderButtons={({ next, prev, isFirstStep, isLastStep }) => (
          <div className="flex gap-4">
            {!isFirstStep && (
              <Button
                onClick={prev}
                className="h-12 w-full text-base"
                variant="outline"
              >
                Back
              </Button>
            )}

            <Button
              onClick={next}
              className="h-12 w-full text-base"
              type="submit"
            >
              {isLastStep ? "Complete" : "Next"}
            </Button>
          </div>
        )}
      >
        {[<WizardOne />, <WizardTwo />, <WizardMemberThree />]}
      </Wizard>
    </div>
  );
}
