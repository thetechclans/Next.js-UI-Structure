import React, { Children } from "react";
import { Label } from "@/components/ui/label";
import SearchBox from "@/components/ui-components/search";
import Search from "@/components/ui-components/search";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { title } from "process";
import { Button } from "./button";
import { cn } from "@/lib/utils"; // Make sure you have a `cn` utility for className merging
// import loading from "@/app/loading";

interface BgSideCardProps {
  title?: string;
  button?: boolean;
  search?: boolean;
  children?: React.ReactNode;
  className?: string;
  Bname?: boolean;
}
const BgSideCard = ({
  search = true,
  children,
  title,
  button = false,
  className,
  Bname,
}: BgSideCardProps) => {
  function setCurrentItem(arg0: null) {
    throw new Error("Function not implemented.");
  }

  function setIsDialogOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  function setForm(arg0: {}) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="items-start overflow-x-hidden">
        <div className="flex justify-between">
      <div className="px-4">
        <Label className="text-3xl text-gray-700 te">{title}</Label>
      </div>
      
          <div className="flex justify-between items-center px-4">
            {button ? (
        <>
            <Button
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setCurrentItem(null);
                setIsDialogOpen(true);
                setForm({});
              }}
              disabled={false}
            >
              {Bname || "+ Add Status"}
            </Button>  </>
      ) : null}
          </div>
      </div>

      <div className="mr-4 pr-4 pt-4 mt-4">
        {/* dir={data.isArabic ? "ltr" : "rtl"} */}
        <Card className="w-full py-6 px-2 items-start inset-shadow-sm shadow-black rounded-none rounded-tr-[50px] bg-gray-300">
          {search ? (
            <>
              <div className="flex relative w-full items-end justify-end">
                <SearchBox />
              </div>
              <Separator />
            </>
          ) : null}
          <div className={cn("", className)}>{children}</div>
        </Card>
      </div>
    </div>
  );
};

export default BgSideCard;
