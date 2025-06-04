import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Eye } from "lucide-react";
import { Label } from "@/components/ui/label";
import BgSideCard from "@/components/ui/bgSideCard";
import { Separator } from "@/components/ui/separator";

export default function ServiceManagement () {
    return(
        <BgSideCard className="overflow-x-hidden" title="Membership">
        <div className="grid grid-cols-2 gap-6 overflow-x-hidden mt-4" >
            <div>
        <Card className="w-full p-4 mr-2">
        <div className="flex items-center justify-between w-[400px]">
          <div className="flex items-center space-x-4">
            <Label className="text-lg text-gray-800">Membership</Label>
          </div>
         <Eye/>
        </div>
        <Separator/>
        <div className="text-start">
            this is a paragraph
        </div>
        <div className="flex justify-evenly m-4">
          <Button variant={"outline"} className=" shadow-md text-black px-4">Procedure <ChevronDown/></Button>
          <Button className="bg-white shadow-lg text-black">Cancel</Button>
          <Button className="hover:shadow-lg text-black">Submit</Button>
        </div>
      </Card> 
      </div>
      <Card className="w-full p-4 ">
        <div className="flex items-center justify-between w-[400px]">
          <div className="flex items-center space-x-4">
            <Label className="text-lg text-gray-800">MemberShip</Label>
          </div>
         <Eye/>
        </div>
        <Separator/>
        <div className="text-start">
            this is a paragraph
        </div>
        <div className="flex justify-evenly m-4">
          <Button className="bg-white shadow-lg text-black">Service Modification</Button>
          <Button className="hover:shadow-lg text-black"> Service Details</Button>
        </div>
      </Card> 
      </div>
      </BgSideCard>
    )
}