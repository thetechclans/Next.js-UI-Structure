// app(Admin)/adminDashboard/page.tsx
"use client";

import BgSideCard from "@/components/ui/bgSideCard";
import { BarChart } from "@/components/ui/Charts";

export default function AdminHome() {
  const dataone = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "apr", sales: 600 },
    { name: "may", sales: 700 },
  ];
  const datatwo = [
    { name: "June", sales: 200 },
    { name: "July", sales: 800 },
    { name: "Aug", sales: 500 },
    { name: "Sept", sales: 900 },
    { name: "Oct", sales: 700 },
  ];
 const datathree = [
    { name: "Nov", sales: 600 },
    { name: "Dec", sales: 900 },
    { name: "Jan", sales: 500 },
    { name: "Feb", sales: 600 },
    { name: "Mar", sales: 700 },
  ];
   const datafour = [
    { name: "Apr", sales: 900 },
    { name: "May", sales: 600 },
    { name: "June", sales: 400 },
    { name: "July", sales: 700 },
    { name: "Aug", sales: 800 },
  ];

  return (
    <BgSideCard>
    <div className="grid grid-col grid-cols-2 md:grid-cols-2 mt-4">
    <BarChart data={dataone} xdatakey="name" ydatakey="sales" />
    <BarChart data={datatwo} xdatakey="name" ydatakey="sales" />
    <BarChart data={datathree} xdatakey="name" ydatakey="sales" />
    <BarChart data={datafour} xdatakey="name" ydatakey="sales" />
    </div>
    </BgSideCard>
  );
}
