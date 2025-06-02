import BgSideCard from "@/components/ui/bgSideCard";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";


export default function BeneficiaryHome () {
    return(
        <BgSideCard search={false} title="Home">
            <Card className="flex justify-around mt-4">
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
            </Card>
            <BgSideCard>
                <Card className=" mt-4">
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
            </Card>
            </BgSideCard>
        </BgSideCard>
    )
}