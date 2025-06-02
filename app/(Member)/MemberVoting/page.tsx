"use client";
import PopModal from "@/components/ui-components/popModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BgSideCard from "@/components/ui/bgSideCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CircleChevronUp } from "lucide-react";
import { useState } from "react";

export default function MemberVotings(data: any): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <BgSideCard
      title="Member Voting"
      className="grid grid-cols-1 md:grid-cols-2 "
    >
      <Card className="p-4 my-4">
        <div className="flex justify-between m-2 my-4">
          <Label className="Text-lg text-gray-700">
            Good Initiative Meeting
          </Label>
          <Label className="text-xs text-gray-700 bg-gray-400 p-2 rounded-md">
            Ends in 15 days
          </Label>
        </div>
        <div>
          <Label className="text-sm text-gray-400 text-start">
            the Haremala Association seeks to improve the quality of life in our
            society by providing support and assistance to the most needed
            groups. In this context, the hope initiative comes as a new step to
            expand the association's work and enhance its positive impact.
          </Label>
        </div>
        <Button
          size={"lg"}
          color={"transparent"}
          onClick={() => setIsModalOpen(true)}
        >
          View Details
        </Button>
        <Button size={"lg"}>Vote</Button>
      </Card>
      {/* Wrap the modal in a React fragment or another parent element if needed */}
      <div>
        <PopModal
          showProfileImage={false}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Voting List"
        >
          <div className="w-full">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1" className="text-gray-400 w-full">
                <AccordionTrigger
                  transition={"default"}
                  icon={<CircleChevronUp />}
                >
                  Support the CMS
                </AccordionTrigger>
                <AccordionContent className="flex w-full">
                  <Button className="px-4 bg-red-500">RED-30%</Button>
                  <Button className="px-4 bg-yellow-500">YELLOW-20%</Button>
                  <Button className="px-4 bg-green-500">GREEN-50%</Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </PopModal>
      </div>
    </BgSideCard>
  );
}
