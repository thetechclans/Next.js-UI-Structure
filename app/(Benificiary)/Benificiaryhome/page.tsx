import BgSideCard from "@/components/ui/bgSideCard";
import { Card } from "@/components/ui/card";
import ConfirmPop from "@/components/ui/confirmPopUp";
import { Label } from "@/components/ui/label";


export default function BeneficiaryHome () {
    return(
        <BgSideCard search={false} title="Home">
            {/* <Card className="flex justify-around mt-4">
            <div className="m-4 flex flex-col">
                <Label className="text-gray-300 text-md">Name</Label>
                <Label className="text-gray-800 text-lg">Abu thagir</Label>
            </div>
             <div className="m-4 flex flex-col">
                <Label className="text-gray-300 text-md">Email</Label>
                <Label className="text-gray-800 text-lg">Abuthagir7185@gmail.com</Label>
            </div>
             <div className="m-4 flex flex-col">
                <Label className="text-gray-300 text-md">Phone Number</Label>
                <Label className="text-gray-800 text-lg">+89938774</Label>
            </div>
            </Card> */}
            <BgSideCard>
                <Card className=" mt-4 p-4 items-start bg-slate-200 text-style">
            <div className="m-4 flex flex-col">
                <Label className="text-gray-500 text-md">Name</Label>
                <Label className="text-gray-800 text-lg">Abu thagir</Label>
            </div>
             <div className="m-4 flex flex-col">
                <Label className="text-gray-500 text-md">Email</Label>
                <Label className="text-gray-800 text-lg">Abuthagir7185@gmail.com</Label>
            </div>
             <div className="m-4 flex flex-col">
                <Label className="text-gray-500 text-md">Phone Number</Label>
                <Label className="text-gray-800 text-lg">+89938774</Label>
            </div>
            </Card>
            </BgSideCard>
{/* <ConfirmPop success={true}>
    <Label className="text-lg text-gray-600 mx-auto"> are you sure you want to continue</Label>
    </ConfirmPop> */}
            
        </BgSideCard>
    )
}