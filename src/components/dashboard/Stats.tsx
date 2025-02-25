import { Package, Truck, CheckCircle, AlertCircle } from "lucide-react";
import { eStatus, Shipment } from "@/types/shipment";
import { StatCard } from "./StatCard";

interface StatsProps {
  shipments: Shipment[];
}

export function Stats({ shipments }: StatsProps) {
  const stats = {
    total: shipments.length,
    inTransit: shipments.filter((s) => s.status === eStatus.IN_TRANSIT).length,
    delivered: shipments.filter((s) => s.status === eStatus.DELIVERED).length,
    delayed: shipments.filter((s) => s.status === eStatus.DELAYED).length,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Shipments"
        value={stats.total}
        icon={<Package className="h-4 w-4 text-muted-foreground" />}
        status="total"
      />
      <StatCard
        title="In Transit"
        value={stats.inTransit}
        icon={<Truck className="h-4 w-4 text-muted-foreground" />}
        status={eStatus.IN_TRANSIT}
      />
      <StatCard
        title="Delivered"
        value={stats.delivered}
        icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />}
        status={eStatus.DELIVERED}
      />
      <StatCard
        title="Delayed"
        value={stats.delayed}
        icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
        status={eStatus.DELAYED}
      />
      <StatCard
        title="Pending"
        value={shipments.filter((s) => s.status === eStatus.PENDING).length}
        icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
        status={eStatus.PENDING}
      />
    </div>
  );
}
