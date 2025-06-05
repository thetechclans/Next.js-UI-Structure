"use client";
import { Form } from "@/components/ui-components/form";
import { FormField } from "@/components/ui-components/form-field";
import PopModal from "@/components/ui-components/popModal";
import BgSideCard from "@/components/ui/bgSideCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Pencil, Trash2 } from "lucide-react";

export default function MeetingManagement() {
  const meetings = [
    {
      id: 1,
      name: "Ahamed",
      status: "ends in 11 day",
      statusVariant: "outline",
      description: "This is a paragraph about the meeting details and agenda items for discussion during the session.",
    },
    {
      id: 2,
      name: "Majid",
      status: "ends in 8 day",
      statusVariant: "outline",
      description: "This meeting will cover quarterly financial reports and budget planning for next fiscal year.",
    },
    {
      id: 3,
      name: "Sarah",
      status: "ends in 2 day",
      statusVariant: "outline",
      description: "Project status updates and team coordination for the upcoming product launch.",
    },
    {
      id: 4,
      name: "David",
      status: "Finished",
      statusVariant: "destructive",
      description: "Post-mortem review of the completed marketing campaign and performance analysis.",
    },
  ];

  return (
    <BgSideCard className="overflow-x-hidden" title="Meeting Management">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>

      {/* Popup Modals */}
      <DecisionModal />
      <MeetingDetailsModal />
    </BgSideCard>
  );
}

const MeetingCard = ({ meeting }: { meeting: any }) => {
  return (
    <Card className="w-full p-4 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <Label className="text-lg font-medium text-gray-800">{meeting.name}</Label>
        <Button 
          variant={meeting.statusVariant} 
          className={`px-3 py-1 text-sm ${
            meeting.status === "Finished" ? "bg-red-100 text-red-800" : ""
          }`}
        >
          {meeting.status}
        </Button>
      </div>
      
      <Separator className="mb-3" />
      
      <div className="text-gray-600 mb-4 flex-grow px-1">
        {meeting.description}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-end gap-3 mt-auto">
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none shadow-sm hover:shadow-md">
            + Add Decisions
          </Button>
          <Button variant="outline" className="flex-1 sm:flex-none hover:shadow-md">
            Voting Results
          </Button>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full sm:w-[120px] justify-between shadow-sm hover:shadow-md"
            >
              Procedure
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="min-w-[180px]  border border-gray-200 shadow-lg"
            align="end"
          >
            <DropdownMenuItem className="cursor-pointer  hover:bg-gray-50">
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};

const DecisionModal = () => {
  return (
    <PopModal
      title="Add Decisions"
      isOpen={false}
      onClose={() => console.log("Modal closed")}
    >
      <Form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField label="Add Decisions" placeholder="Add +" />
          <FormField label="Start Date" placeholder="Start Date" type="date" />
          <FormField label="End Date" placeholder="End Date" type="date" />
        </div>
        <FormField 
          label="Voting cases" 
          placeholder="Voting cases" 
        />
        <div className="flex justify-start gap-3 mt-6">
          <Button variant="default">Addition</Button>
          <Button variant="outline">Cancellation</Button>
        </div>
      </Form>
    </PopModal>
  );
};

const MeetingDetailsModal = () => {
  return (
    <PopModal
      title="Add Decisions"
      isOpen={false}
      onClose={() => console.log("Modal closed")}
    >
      <Form>
        <div className="space-y-4 mb-4">
          <FormField label="Meeting" placeholder="Meeting title" />
          <FormField 
            label="Details Of Meeting" 
            placeholder="Meeting details" 
          />
          <FormField label="Meeting Link" placeholder="https://" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Time" placeholder="HH:MM" type="time" />
            <FormField label="Date" placeholder="DD/MM/YYYY" type="date" />
            <FormField label="Member" placeholder="Member name" />
            <FormField label="Site" placeholder="www.domain.com" />
            <FormField label="Member Details" placeholder="Details" />
            <FormField label="Reference Number" placeholder="48586" />
          </div>
        </div>
        
        <div className="flex justify-start gap-3 mt-6">
          <Button variant="default">Addition</Button>
          <Button variant="outline">Cancellation</Button>
        </div>
      </Form>
    </PopModal>
  );
};