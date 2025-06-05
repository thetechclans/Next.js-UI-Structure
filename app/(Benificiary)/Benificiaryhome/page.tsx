import BgSideCard from "@/components/ui/bgSideCard";
import { Card } from "@/components/ui/card";
import ConfirmPop from "@/components/ui/confirmPopUp";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function BeneficiaryHome() {
  const beneficiaryData = [
    {
      title: "Personal Information",
      items: [
        { label: "Name", value: "Abu thagir" },
        { label: "Email", value: "Abuthagir7185@gmail.com" },
        { label: "Phone Number", value: "+89938774" }
      ]
    },
    {
      title: "Account Details",
      items: [
        { label: "Account Number", value: "1234567890" },
        { label: "Bank Name", value: "National Bank" },
        { label: "Branch", value: "Main Branch" }
      ]
    },
    {
      title: "Benefit Status",
      items: [
        { label: "Last Payment", value: "15 Jan 2024" },
        { label: "Next Payment", value: "15 Feb 2024" },
        { label: "Amount", value: "$500.00" }
      ]
    },
    {
      title: "Support",
      items: [
        { label: "Case Worker", value: "Sarah Johnson" },
        { label: "Contact", value: "sarah@support.org" },
        { label: "Status", value: "Active" }
      ]
    }
  ];

  return (
    <BgSideCard search={false} title="Home" className="pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {beneficiaryData.map((card, index) => (
          <Card key={index} className="p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
            <h3 className="text-lg font-medium text-gray-700 mb-3 border-b pb-2">
              {card.title}
            </h3>
            <div className="space-y-3">
              {card.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col">
                  <Label className="text-gray-500 text-sm">{item.label}</Label>
                  <Label className="text-gray-800 text-md">{item.value}</Label>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* <ConfirmPop success={true}>
        <div className="text-center">
          <Label className="text-lg text-gray-600">Are you sure you want to continue?</Label>
        </div>
      </ConfirmPop> */}
    </BgSideCard>
  );
}