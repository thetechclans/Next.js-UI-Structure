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
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

export default function MeetingManagement() {
  return (
    <BgSideCard className="overflow-x-hidden" title="Meeting Management">
      <div className="grid grid-cols-2 gap-6 overflow-x-hidden mt-4">
        <div>
          <Card className="w-full p-4 mr-2">
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center space-x-4">
                <Label className="text-lg text-gray-800">Ahamed</Label>
              </div>
              <Button variant={"outline"} className=" px-2 -py-0">
                ends in 11 day
              </Button>
            </div>
            <Separator />
            <div className="text-start px-3">
              this is a paragraph this is a paragraphthis is a paragraphthis is
              a paragraphvvthis is a paragraphvthis is a paragraph
            </div>
            <div className="relative flex justify-around items-end m-4 w-full">
              <div>
                <Button className="bg-white shadow-lg text-black">
                  + Add Decisions
                </Button>
                <Button className="hover:shadow-lg mx-2 text-black">
                  Voting Results
                </Button>
              </div>
              <div className="full">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <DropdownMenuLabel className=" flex border-1 rounded-xl shadow-lg p-4 bg-stone-400 textstyle backdrop-blur-sm bg-white/90 border border-white/20 hover:scale-[1.02] transition-transform w-full">
                      Procedure
                      <ChevronDown />
                    </DropdownMenuLabel>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-grey-800 textstyle backdrop-blur-sm bg-white/90 border border-white/20 rounded-xl shadow-xl w-[180px]">
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Pencil />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Trash2 />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        </div>
        {/* card 2 */}

        <div>
          <Card className="w-full p-4 mr-2">
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center space-x-4">
                <Label className="text-lg text-gray-800">Ahamed</Label>
              </div>
              <Button variant={"outline"} className=" px-2 -py-0">
                ends in 8 day
              </Button>
            </div>
            <Separator />
            <div className="text-start px-3">
              this is a paragraph this is a paragraphthis is a paragraphthis is
              a paragraphvvthis is a paragraphvthis is a paragraph
            </div>
            <div className="relative flex justify-around items-end m-4 w-full">
              <div>
                <Button className="bg-white shadow-lg text-black">
                  + Add Decisions
                </Button>
                <Button className="hover:shadow-lg mx-2 text-black">
                  Voting Results
                </Button>
              </div>
              <div className="full">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <DropdownMenuLabel className=" flex border-1 rounded-xl shadow-lg p-4 bg-stone-400 textstyle backdrop-blur-sm bg-white/90 border border-white/20 hover:scale-[1.02] transition-transform w-full">
                      Procedure
                      <ChevronDown />
                    </DropdownMenuLabel>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-grey-800 textstyle backdrop-blur-sm bg-white/90 border border-white/20 rounded-xl shadow-xl w-[180px]">
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Pencil />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Trash2 />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        </div>
        {/* card3 */}
        <div>
          <Card className="w-full p-4 mr-2">
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center space-x-4">
                <Label className="text-lg text-gray-800">Ahamed</Label>
              </div>
              <Button variant={"outline"} className=" px-2 -py-0">
                ends in 2 day
              </Button>
            </div>
            <Separator />
            <div className="text-start px-3">
              this is a paragraph this is a paragraphthis is a paragraphthis is
              a paragraphvvthis is a paragraphvthis is a paragraph
            </div>
            <div className="relative flex justify-around items-end m-4 w-full">
              <div>
                <Button className="bg-white shadow-lg text-black">
                  + Add Decisions
                </Button>
                <Button className="hover:shadow-lg mx-2 text-black">
                  Voting Results
                </Button>
              </div>
              <div className="full">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <DropdownMenuLabel className=" flex border-1 rounded-xl shadow-lg p-4 bg-stone-400 textstyle backdrop-blur-sm bg-white/90 border border-white/20 hover:scale-[1.02] transition-transform w-full">
                      Procedure
                      <ChevronDown />
                    </DropdownMenuLabel>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-grey-800 textstyle backdrop-blur-sm bg-white/90 border border-white/20 rounded-xl shadow-xl w-[180px]">
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Pencil />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Trash2 />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        </div>
        {/* card4 */}
        <div>
          <Card className="w-full p-4 mr-2">
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center space-x-4">
                <Label className="text-lg text-gray-800">Ahamed</Label>
              </div>
              <Button
                variant={"outline"}
                className=" px-2 -py-0 bg-red-300 text-red-900"
              >
                Finished
              </Button>
            </div>
            <Separator />
            <div className="text-start px-3">
              this is a paragraph this is a paragraphthis is a paragraphthis is
              a paragraphvvthis is a paragraphvthis is a paragraph
            </div>
            <div className="relative flex justify-around items-end m-4 w-full">
              <div>
                <Button className="bg-white shadow-lg text-black">
                  + Add Decisions
                </Button>
                <Button className="hover:shadow-lg mx-2 text-black">
                  Voting Results
                </Button>
              </div>
              <div className="full">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <DropdownMenuLabel className=" flex border-1 rounded-xl shadow-lg p-4 bg-stone-400 textstyle backdrop-blur-sm bg-white/90 border border-white/20 hover:scale-[1.02] transition-transform w-full">
                      Procedure
                      <ChevronDown />
                    </DropdownMenuLabel>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-grey-800 textstyle backdrop-blur-sm bg-white/90 border border-white/20 rounded-xl shadow-xl w-[180px]">
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Pencil />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50">
                      <Trash2 />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* pop up */}
      <PopModal
        title={"Add Decisions"}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div>
          <Form>
            <div className="grid grid-cols-2">
              <FormField label="Add Decisions" placeholder="Add +" />

              <FormField label="Start Date" placeholder="Start Date" />
              <FormField label="End Date" placeholder="End Date" />
            </div>
            <FormField label="Voting cases" placeholder="Voting cases" />
          </Form>
          <div className="flex justify-start">
            <Button className="bg-white shadow-lg text-black">Addition</Button>
            <Button className="hover:shadow-lg mx-2 text-black">
              Cancellation
            </Button>
          </div>
        </div>
      </PopModal>
      // pop modal 2
      <PopModal
        title={"Add Decisions"}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div>
          <Form>
              <FormField label="Meeting" placeholder="_" />
              <FormField label="Details Of Meeting" placeholder="Details Of Meeting" />
              <FormField label="Meeting Link" placeholder="Meeting Link" />
            <div className="grid grid-cols-2">
              <FormField label="the Time" placeholder="Time" />
              <FormField label="the Date" placeholder="the Date" />
              <FormField label="Member" placeholder="Member" />
              <FormField label="site" placeholder="www.domain.com//" />
              <FormField label="" placeholder="member details" />
              <FormField label="The reference number" placeholder="48586" />
            </div>
          </Form>
          <div className="flex justify-start">
            <Button className="bg-white shadow-lg text-black">Addition</Button>
            <Button className="hover:shadow-lg mx-2 text-black">
            
              Cancellation
            </Button>
          </div>
        </div>
      </PopModal>
    </BgSideCard>
  );
}
