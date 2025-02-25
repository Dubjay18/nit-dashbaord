import { Shipment } from "@/types/shipment";
import { ShipmentCard } from "./ShipmentCard";

interface ShipmentListProps {
  shipments: Shipment[];
}

export function ShipmentList({ shipments }: ShipmentListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {shipments.map((shipment) => (
        <ShipmentCard key={shipment.id} shipment={shipment} />
      ))}
    </div>
  );
}