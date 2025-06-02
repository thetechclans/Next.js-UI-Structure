import React from "react";
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import BgSideCard from "@/components/ui/bgSideCard";
import { FormField } from "@/components/ui-components/form-field";

export default function MemberMembership(): React.ReactElement {
    return (
    <BgSideCard search={true} title="Member Dashboard">
        <Card>
            <FormField
            label="name"
            placeholder="Enter Your Name"
            />
        </Card>
    </BgSideCard>
    )
}