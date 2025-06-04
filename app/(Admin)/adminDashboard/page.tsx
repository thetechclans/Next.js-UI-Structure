// app(Admin)/adminDashboard/page.tsx
"use client";

import BgSideCard from "@/components/ui/bgSideCard";
import { BarChart } from "@/components/ui/Charts";

export default function AdminHome() {
  const datas = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "apr", sales: 600 },
    { name: "may", sales: 700 },
  ];

  return (
    <BgSideCard>
    <div className="grid grid-col grid-cols-2 md:grid-cols-2 mt-4">
    <BarChart data={datas} xdatakey="name" ydatakey="sales" />
    <BarChart data={datas} xdatakey="name" ydatakey="sales" />
    <BarChart data={datas} xdatakey="name" ydatakey="sales" />
    <BarChart data={datas} xdatakey="name" ydatakey="sales" />
    </div>
    </BgSideCard>
  );
}
