import React, { useState, ReactElement, ReactNode } from "react";
import { CheckCircle, Circle, Dot } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface WizardProps {
  children: ReactElement[];
  onFinish?: () => void;
  stepLabels?: string[]; // Optional step names for top indicators
  renderButtons?: (props: {
    next: () => void;
    prev: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
  }) => ReactNode;
}

const Wizard: React.FC<WizardProps> = ({
  children,
  onFinish,
  stepLabels,
  renderButtons,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([0]));

  const isLastStep = currentStep === children.length - 1;
  const isFirstStep = currentStep === 0;

  const next = () => {
    if (!isLastStep) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setVisitedSteps(new Set([...visitedSteps, nextStep]));
    } else if (onFinish) onFinish();
  };

  const prev = () => {
    if (!isFirstStep) setCurrentStep((prev) => prev - 1);
  };

  const goToStep = (index: number) => {
    if (visitedSteps.has(index) && index <= currentStep) {
      setCurrentStep(index);
    }
  };

  return (
    <div className="relative">
      <Card className="w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-xl items-center backdrop-blur-sm bg-white/90 border border-white/20">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 relative">
          {children.map((_, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative z-10 cursor-pointer"
              onClick={() => goToStep(index)}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-4 transition-all duration-300
              ${
                index < currentStep
                  ? "heroImage border-heroImage text-white"
                  : index === currentStep
                  ? "bg-white border-heroImage text-heroImage"
                  : "bg-gray-200 border-gray-300 text-gray-500"
              }
              ${
                visitedSteps.has(index) && index < currentStep
                  ? "hover:ring hover:ring-blue-300"
                  : "pointer-events-none"
              }
            `}
              >
                {index < currentStep ? (
                  <CheckCircle size={20} />
                ) : index === currentStep ? (
                  <Dot size={20} />
                ) : (
                  <Circle size={20} />
                )}
              </div>
              {stepLabels && (
                <span className="text-sm text-center mt-2 text-gray-600 w-24 truncate">
                  {stepLabels[index]}
                </span>
              )}
            </div>
          ))}
          {/* Line connecting steps */}
          <div className="absolute top-5 left-5 right-5 h-1 bg-gray-200 z-0">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${(currentStep / (children.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Active Step Content */}
        <div className="mb-6">{children[currentStep]}</div>

        {/* Navigation Buttons */}
        <div className="mt-8">
          {renderButtons ? (
            renderButtons({
              next,
              prev,
              isFirstStep,
              isLastStep,
            })
          ) : (
            <div className="flex justify-between gap-4">
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
                className="px-6 py-3 text-base glossy shadow-lg hover:scale-[1.02] transition-transform bg-blue-600 hover:bg-blue-700"
              >
                {isLastStep ? "Finish" : "Next"}
              </Button>
            </div>
          )}
        </div>
      </Card>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-200 opacity-50 -mt-4 -ml-4"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-200 opacity-50 -mb-4 -mr-4"></div>
    </div>
  );
};

export default Wizard;
