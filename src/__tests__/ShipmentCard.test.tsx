/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { eStatus, Shipment } from "@/types/shipment";

import { ShipmentCard } from "@/components/dashboard/ShipmentCard";

const mockShipment: Shipment = {
  id: "1",
  trackingNumber: "123456789",
  priority: "high",
  status: eStatus.IN_TRANSIT,
  customerName: "John Doe",
  origin: "New York",
  destination: "Los Angeles",
  estimatedDelivery: new Date("2025-03-01").toISOString(),
  lastUpdated: "2025-02-10T14:30:00Z",
};

describe("ShipmentCard", () => {
  it("renders the shipment tracking number", () => {
    render(<ShipmentCard shipment={mockShipment} />);
    expect(
      screen.getByText(`#${mockShipment.trackingNumber}`)
    ).toBeInTheDocument();
  });

  it("renders the priority badge with correct text", () => {
    render(<ShipmentCard shipment={mockShipment} />);
    expect(screen.getByText(mockShipment.priority)).toBeInTheDocument();
  });

  it("renders the customer name", () => {
    render(<ShipmentCard shipment={mockShipment} />);
    expect(screen.getByText(mockShipment.customerName)).toBeInTheDocument();
  });

  it("renders the correct origin and destination", () => {
    render(<ShipmentCard shipment={mockShipment} />);
    expect(
      screen.getByText(`${mockShipment.origin} → ${mockShipment.destination}`)
    ).toBeInTheDocument();
  });

  it("renders the estimated delivery date correctly", () => {
    render(<ShipmentCard shipment={mockShipment} />);
    expect(
      screen.getByText(
        `ETA: ${new Date(mockShipment.estimatedDelivery).toLocaleDateString()}`
      )
    ).toBeInTheDocument();
  });

  it("renders the status badge with correct text", () => {
    render(<ShipmentCard shipment={mockShipment} />);
    expect(screen.getByText("in transit")).toBeInTheDocument();
  });
});
