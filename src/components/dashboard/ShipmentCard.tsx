import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shipment } from "@/types/shipment";
import { Package, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShipmentCardProps {
  shipment: Shipment;
}

const statusColors = {
  pending: "bg-yellow-500",
  in_transit: "bg-blue-500",
  delivered: "bg-green-500",
  delayed: "bg-red-500",
};

const priorityColors = {
  low: "bg-slate-500",
  medium: "bg-orange-500",
  high: "bg-red-500",
};

export function ShipmentCard({ shipment }: ShipmentCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          #{shipment.trackingNumber}
        </CardTitle>
        <Badge className={cn(priorityColors[shipment.priority], "text-white")}>
          {shipment.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center space-x-2 text-sm">
            <Package className="h-4 w-4" />
            <span className="font-medium">{shipment.customerName}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{shipment.origin} → {shipment.destination}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>ETA: {new Date(shipment.estimatedDelivery).toLocaleDateString()}</span>
          </div>
          <Badge className={cn(statusColors[shipment.status], "text-white mt-2")}>
            {shipment.status.replace('_', ' ')}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}