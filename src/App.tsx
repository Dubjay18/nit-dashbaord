import { lazy, Suspense } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Stats } from "@/components/dashboard/Stats";
import { mockShipments } from "@/lib/mock-data";
import { useWebSocket } from "@/hooks/use-websocket";
import { Loader2 } from "lucide-react";
import { ShipmentChart } from "./components/dashboard/ShipmentChart";

// Lazy load the ShipmentList component
const ShipmentList = lazy(() =>
  import("@/components/dashboard/ShipmentList").then((mod) => ({
    default: mod.ShipmentList,
  }))
);

function App() {
  const { shipments } = useWebSocket(mockShipments);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Logistics Dashboard</h1>
          <ThemeToggle />
        </header>

        <div className="space-y-8">
          <Stats shipments={shipments} />
          <ShipmentChart shipments={shipments} />
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            }
          >
            <ShipmentList shipments={shipments} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
