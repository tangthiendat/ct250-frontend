import React, { createContext, PropsWithChildren } from "react";

interface TravelerContextValue {
  showExpand: boolean;
  setShowExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const TravelerContext = createContext<TravelerContextValue | null>(null);

const TravelerProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showExpand, setShowExpand] = React.useState<boolean>(false);

  return (
    <TravelerContext.Provider value={{ showExpand, setShowExpand }}>
      {children}
    </TravelerContext.Provider>
  );
};

const useTraveler = () => {
  const context = React.useContext(TravelerContext);
  if (!context) {
    throw new Error("useTraveler must be used within a TravelerProvider");
  }
  return context;
};

export { TravelerProvider, useTraveler };
