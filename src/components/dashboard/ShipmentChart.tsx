import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { eStatus, Shipment } from "@/types/shipment";

interface ShipmentChartProps {
  shipments: Shipment[];
}

export function ShipmentChart({ shipments }: ShipmentChartProps) {
  const data = [
    {
      name: "Pending",
      value: shipments.filter((s) => s.status === eStatus.PENDING).length,
      color: "hsl(var(--chart-4))",
    },
    {
      name: "In Transit",
      value: shipments.filter((s) => s.status === eStatus.IN_TRANSIT).length,
      color: "hsl(var(--chart-2))",
    },
    {
      name: "Delivered",
      value: shipments.filter((s) => s.status === eStatus.DELIVERED).length,
      color: "hsl(var(--chart-1))",
    },
    {
      name: "Delayed",
      value: shipments.filter((s) => s.status === eStatus.DELAYED).length,
      color: "hsl(var(--chart-3))",
    },
  ];

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Shipment Status Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(var(--foreground))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
                tickLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                tick={{ fill: "hsl(var(--foreground))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
                tickLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                }}
                labelStyle={{
                  color: "hsl(var(--foreground))",
                }}
              />
              <Bar dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
