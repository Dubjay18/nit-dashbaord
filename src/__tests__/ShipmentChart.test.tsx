import { render, screen } from "@testing-library/react";
import { ShipmentChart } from "@/components/dashboard/ShipmentChart";
import { mockShipments } from "@/lib/mock-data";
import "@testing-library/jest-dom";

describe("ShipmentChart", () => {
  it("renders the chart with correct title", () => {
    render(<ShipmentChart shipments={mockShipments} />);
    expect(screen.getByText("Shipment Status Overview")).toBeInTheDocument();
  });

  it("renders the chart with correct data", () => {
    render(<ShipmentChart shipments={mockShipments} />);

    // Check if the chart is rendered (basic check)
    const chart = screen.getByRole("img");
    expect(chart).toBeInTheDocument();
  });
});
