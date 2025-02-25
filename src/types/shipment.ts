export interface Shipment {
  id: string;
  trackingNumber: string;
  status: eStatus;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdated: string;
  customerName: string;
  priority: "low" | "medium" | "high";
}

export type ShipmentUpdate = {
  id: string;
  status: Shipment["status"];
  lastUpdated: string;
};
export enum eStatus {
  IN_TRANSIT = "in_transit",
  DELIVERED = "delivered",
  DELAYED = "delayed",
  PENDING = "pending",
}
