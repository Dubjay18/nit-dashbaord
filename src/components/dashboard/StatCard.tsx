import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { eStatus } from "@/types/shipment";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  status: eStatus | "total";
}

export const StatCard = ({ title, value, icon, status }: StatCardProps) => {
  const borderColors: Record<eStatus | "total", string> = {
    in_transit: "border-blue-500",
    delivered: "border-green-500",
    delayed: "border-red-500",
    total: "border-gray-500",
    pending: "border-yellow-500",
  };
  return (
    <Card className="shadow">
      <CardHeader
        className={`flex flex-row border-l ${borderColors[status]}  items-center justify-between space-y-0 py-6`}
      >
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};
