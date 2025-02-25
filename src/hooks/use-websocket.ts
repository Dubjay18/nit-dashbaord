import { useEffect, useRef, useState } from 'react';
import { Shipment, ShipmentUpdate } from '@/types/shipment';

const WS_URL = 'wss://mock-socket-url.com'; // Replace with your actual WebSocket URL

export function useWebSocket(initialShipments: Shipment[]) {
  const [shipments, setShipments] = useState<Shipment[]>(initialShipments);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Simulate WebSocket connection with mock data
    const mockWs = {
      send: () => {},
      close: () => {},
    };

    const mockUpdate = () => {
      const randomShipment = shipments[Math.floor(Math.random() * shipments.length)];
      if (randomShipment) {
        const statuses: Shipment['status'][] = ['pending', 'in_transit', 'delivered', 'delayed'];
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        const update: ShipmentUpdate = {
          id: randomShipment.id,
          status: newStatus,
          lastUpdated: new Date().toISOString(),
        };

        handleShipmentUpdate(update);
      }
    };

    const interval = setInterval(mockUpdate, 5000);

    return () => {
      clearInterval(interval);
      mockWs.close();
    };
  }, [shipments]);

  const handleShipmentUpdate = (update: ShipmentUpdate) => {
    setShipments(current =>
      current.map(shipment =>
        shipment.id === update.id
          ? { ...shipment, status: update.status, lastUpdated: update.lastUpdated }
          : shipment
      )
    );
  };

  return { shipments };
}