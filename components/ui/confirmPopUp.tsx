import { Card } from "./card";
import { CheckCheckIcon, CheckCircle, ChevronLeft } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./button";

interface ConfirmPopProps {
    success?: boolean;
    warning?: boolean;
    error?: boolean;
    icon?: ReactNode;
    children: ReactNode;
}

const ConfirmPop = ({
    success = false,
    warning = false,
    error = false,
    icon,
    children,
}: ConfirmPopProps) => {
    // Determine which icon to show based on props
    const renderIcon = () => {
        if (success) {
            return <CheckCircle className="h-8 w-8 text-green-500" />;
        }
        if (warning) {
            return <CheckCheckIcon className="h-8 w-8 text-yellow-500" />;
        }
        if (error) {
            return <ChevronLeft className="h-8 w-8 text-red-500" />;
        }
        if (icon) {
            return icon;
        }
        return null;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Card className="items-center max-w-md mx-4 p-4">
                <Button
                              size="icon"
                              className="bg-transparent text-gray-500 hover:text-gray-300 "
                            >
                              ✕
                            </Button>
                <div className="m-4 mx-8">
                <div className="w-full flex justify-center mb-6">
                    {renderIcon()}
                </div>
                <div className="text-center mt-6">
                    {children}
                </div>
                <div className="flex justify-evenly mt-8">
                    <Button color={"transparent"} className="p-6 px-8">
                        Cancel
                    </Button>
                    <Button className=" p-6 px-8">
                        Confirm
                    </Button>
                </div>
                </div>
            </Card>
        </div>
    );
};

export default ConfirmPop;