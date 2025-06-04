"use client";
import { Form } from "@/components/ui-components/form";
import { FormField } from "@/components/ui-components/form-field";
import PopModal from "@/components/ui-components/popModal";
import BgSideCard from "@/components/ui/bgSideCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Eye, EyeOff } from "lucide-react";

export default function ServiceManagement() {
  return (
    <BgSideCard className="overflow-x-hidden">
      <div className="grid grid-cols-2 gap-6 overflow-x-hidden mt-4">
        <div>
          <Card className="w-full p-4 mr-2">
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-4">
                <Label className="text-lg text-gray-800">Ahamed</Label>
              </div>
              <EyeOff />
            </div>
            <Separator />
            <div className="text-start mr-7">
              this is a paragraph this is a paragraph this is a paragraph this
              is a paragraph this is a paragraph this is a paragraph this is a
              paragraph this is a paragraph this is a paragraph this is a
              paragraph this is a paragraph this is a paragraph{" "}
            </div>
            <div className="relative flex justify-start items-end m-4 w-full">
              <div>
                <Button className="hover:shadow-lg mx-2 text-black">
                  Service Details
                </Button>
                <Button className="bg-white shadow-lg text-black">
                  Service Modification
                </Button>
              </div>
            </div>
          </Card>
        </div>
        {/* card */}
        <Card className="w-full p-4 ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              <Label className="text-lg text-gray-800">Ahamed</Label>
            </div>
            <EyeOff />
          </div>
          <Separator />
          <div className="text-start mr-7">
            this is a paragraph this is a paragraph this is a paragraph this is
            a paragraph this is a paragraph vthis is a paragraph this is a
            paragraph this is a paragraph this is a paragraph this is a
            paragraph this is a paragraph this is a paragraph this is a
            paragraph this is a paragraph this is a paragraph{" "}
          </div>
          <div className="relative flex justify-start items-end m-4 w-full">
            <div>
              <Button className="hover:shadow-lg mx-2 text-black">
                Service Details
              </Button>
              <Button className="bg-white shadow-lg text-black">
                Service Modification
              </Button>
            </div>
          </div>
        </Card>
        {/* card */}
        <Card className="w-full p-4 ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              <Label className="text-lg text-gray-800">Ahamed</Label>
            </div>
            <EyeOff />
          </div>
          <Separator />
          <div className="text-start mr-7">
            this is a paragraph this is a paragraph this is a paragraph this is
            a paragraph this is a paragraph vthis is a paragraph this is a
            paragraph this is a paragraph this is a paragraph this is a
            paragraph this is a paragraph this is a paragraph this is a
            paragraph this is a paragraph this is a paragraph{" "}
          </div>
          <div className="relative flex justify-start items-end m-4 w-full">
            <div>
              <Button className="hover:shadow-lg mx-2 text-black">
                Service Details
              </Button>
              <Button className="bg-white shadow-lg text-black">
                Service Modification
              </Button>
            </div>
          </div>
        </Card>
        {/* card */}
        <Card className="w-full p-4 ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              <Label className="text-lg text-gray-800">Ahamed</Label>
            </div>
            <EyeOff />
          </div>
          <Separator />
          <div className="text-start mr-7">
            this is a paragraph this is a paragraph this is a paragraph this is
            a paragraph this is a paragraph vthis is a paragraph this is a
            paragraph this is a paragraph this is a paragraph this is a
            paragraph this is a paragraph this is a paragraph this is a
            paragraph this is a paragraph this is a paragraph{" "}
          </div>
          <div className="relative flex justify-start items-end m-4 w-full">
            <div>
              <Button className="hover:shadow-lg mx-2 text-black">
                Service Details
              </Button>
              <Button className="bg-white shadow-lg text-black">
                Service Modification
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <PopModal
        title={"Add a New Service"}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div>
          <Form>
            <FormField label="Service Address" placeholder="Service Address" />
            <div className="grid grid-cols-2">
              <FormField label="Service Icon" type="file" accept="file" />
              <FormField label="Service Image" type="file" accept="file" />
            </div>
            <div className="grid grid-cols-2">
              <FormField label="Field Name" placeholder="Field Name" />
              <FormField label="Field type" placeholder="Field type" />
              <Label className="Text-md text-gray-500">
                + Add a Field Type
              </Label>
            </div>
            <div className="flex justify-end">
              <Label>Watch the Form</Label>
              <Eye />
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

      <PopModal
        title={"Watch the Form"}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <Label className="text-lg text-gray-600">Marriage</Label>

        <div>
          <Form>
            <div className="grid grid-cols-2">
              <FormField label="First Name" placeholder="First Name" />
              <FormField label="Last Name" placeholder="Last Name" />
              <FormField label="Father Name" placeholder="Father Name" />
              <FormField
                label="GransFather's Name"
                placeholder="GransFather's Name"
              />
            </div>
            <FormField label="All Data is Correct " type="checkbox" />
          </Form>
          <div className="flex justify-start">
            <Button className="hover:shadow-lg mx-2 text-black">
              Cancellation
            </Button>
          </div>
        </div>
      </PopModal>

      <PopModal
        title={"Modify Marriage assistance Service "}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div>
          <Form>
            <Label className="text-[9px]"> Service Information</Label>
            <div className="grid grid-cols-2">
              <FormField label="Service " placeholder="Service " />
              <FormField label="Service Name" placeholder="Service Name" />
            </div>
            <FormField label="Service Detail" placeholder="Service Detail" />
            <Separator />

            <Label className="text-[9px]"> Form Detail</Label>
            <div className="grid grid-cols-2">
              <FormField label="Field Name " placeholder="Field Name " />
              <FormField label="Field Type" placeholder="Field Type" />
              <Label className="Text-md text-gray-500">
                + Add a Field Type
              </Label>
            </div>

            <div className="flex justify-end">
              <Label>Watch the Form</Label>
              <Eye />
            </div>
          </Form>
          <div className="flex justify-between">
          <div>
            <Button className=" shadow-lg text-black">Save Modification</Button>
            <Button className="hover:shadow-lg mx-2 text-black">
              Cancellation
            </Button>
            </div>
            <EyeOff className="text-red-500"/>
          </div>
        </div>
      </PopModal>
    </BgSideCard>
  );
}
