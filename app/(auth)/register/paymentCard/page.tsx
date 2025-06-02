"use client";
import Wizard from "@/components/ui-components/wizard";
import { Button } from "@/components/ui/button";
import { JSX, useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/ui-components/form-field";
import Spinner from "@/components/ui/spinner";

export default function PaymentCard(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center heroImage p-6">
      <div className="relative">
        <Card className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <div className="mx-6 my-2">
            <Label className="text-2xl font-semibold mb-0">
              Debit/Credit Card Payment
            </Label>
          </div>
          <br />
          <div className="my-4">
            <Label className="text-gray-600 border-1 my-4 bg-gray-50 py-2 px-6 rounded-lg">
              Visa
            </Label>
          </div>
          <div>
            <FormField
              label="Card Number"
              placeholder="Enter your card Number"
              required
            />
            <FormField
              label="Card Name"
              placeholder="Enter your Card name"
              required
            />
          </div>
          <div className="flex space-x-6">
            <FormField label="Cvv Number" placeholder="123" required />
            <FormField label="Expire Date" placeholder="MM/YYYY" required />
          </div>
          <Button
        className="h-12 w-full text-base my-2"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Spinner />
            paying...
          </>
        ) : (
          "Pay"
        )}
      </Button>
        </Card>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-200 opacity-50 -mt-4 -ml-4"></div>
  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-200 opacity-50 -mb-4 -mr-4"></div>
      </div>
    </div>
  );
}
