import { PaginatedNav } from "@/components/ui-components/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BgSideCard from "@/components/ui/bgSideCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pagination, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { CircleChevronUp, Headset, MapPin } from "lucide-react";

export default function CommonQuestions() {
  return (
    <div>
      <BgSideCard title={"Common Questions"}>
        <div>
          <Accordion type="multiple">
            <AccordionItem value="item-1" className="text-gray-400">
              <AccordionTrigger transition={"default"} icon={<CircleChevronUp/>}>What is Huraymila Association</AccordionTrigger>
              <AccordionContent>Huraymila association is association that was a 
                reason and that is called for ans Huraymila Association</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger transition={"default"} icon={<CircleChevronUp/>}>What is Huraymila Association</AccordionTrigger>
              <AccordionContent>Huraymila association is association that was a 
                reason and that is called for ans Huraymila Association</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <PaginatedNav currentPage={0} pageCount={0} onPageChange={function (page: number): void {
                  throw new Error("Function not implemented.");
              } } />
      </BgSideCard>
      <div className=" flex justify-center my-2 w-full items-center">
        <Card className="flex w-full items-center justify-evenly">
          <div className="items-center mr-2">
            <Button size={"xl"} className="flex flex-col bg-transparent text-gray-400 shadow-none">
              <Headset className="text-gray-400 " />
              <span>Contact</span>
              <span>+938484394</span>
            </Button>
          </div>
          <div className="items-center ml-2">
            <Button size={"xl"} className="flex flex-col bg-transparent text-gray-400 shadow-none">
              <MapPin className="text-gray-400" />
              <span>Location</span>
              <span>san Francisco</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
