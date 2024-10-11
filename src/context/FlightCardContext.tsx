import { createContext, PropsWithChildren, useContext, useState } from "react";
import { TicketClass } from "../interfaces";

interface FlightCardContextValue {
  selectedTicketClassOption?: TicketClass;
  setSelectedTicketClassOption: (ticketClass: TicketClass | undefined) => void;
}

const FlightCardContext = createContext<FlightCardContextValue | null>(null);

const FlightCardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedTicketClassOption, setSelectedTicketClassOption] =
    useState<TicketClass>();

  return (
    <FlightCardContext.Provider
      value={{ selectedTicketClassOption, setSelectedTicketClassOption }}
    >
      {children}
    </FlightCardContext.Provider>
  );
};

const useFlightCard = () => {
  const context = useContext(FlightCardContext);
  if (!context) {
    throw new Error("useFlightCard must be used within a FlightCardProvider");
  }
  return context;
};

export { FlightCardProvider, useFlightCard };
