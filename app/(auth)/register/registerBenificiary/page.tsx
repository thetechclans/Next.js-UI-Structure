"use client";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { JSX } from "react/jsx-runtime";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import WizardOne from "./wizardOne";
import WizardTwo from "./wizardTwo";
import { Button } from "@/components/ui/button";
import Wizard from "@/components/ui-components/wizard";
export default function BenificiaryRegister(): JSX.Element {
  const form = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center heroImage p-6">
      <Wizard
        stepLabels={["Details", "Personal Details", "Subscription"]}
        onFinish={() => alert("All done!")}
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
              {isLastStep ? "Complete" : "Register"}
            </Button>
          </div>
        )}
      >
        {[<WizardOne />, <WizardTwo />]}
      </Wizard>
    </div>
  );
}
