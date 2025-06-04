"use client";
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
          {/* <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-r-2 border-blue-200 opacity-50 -mt-6 mr-4 rounded-tl-xl" /> */}

        <Card className="w-full py-6 px-2 items-start inset-shadow-lg shadow-black rounded-none rounded-tr-[30px] bg-stone-100">
          {search ? (
            <>
              <div className="flex relative w-full items-end justify-end">
                <SearchBox onSearch={function (query: string): void {
                  throw new Error("Function not implemented.");
                } } />
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
