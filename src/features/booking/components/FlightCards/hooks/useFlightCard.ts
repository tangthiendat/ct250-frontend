import { useState } from "react";

const useFlightCard = () => {
  const [showDetailClass, setShowDetailClass] = useState<boolean>(false);
  const [showEconomyClass, setShowEconomyClass] = useState<boolean>(false);
  const [showBusinessClass, setShowBusinessClass] = useState<boolean>(false);

  const handleShowEconomyClass = () => {
    setShowEconomyClass(true);
    setShowBusinessClass(false);
    setShowDetailClass(true);
  };

  const handleShowBusinessClass = () => {
    setShowBusinessClass(true);
    setShowEconomyClass(false);
    setShowDetailClass(true);
  };

  const handleCloseDetailClass = () => {
    setShowEconomyClass(false);
    setShowBusinessClass(false);
    setShowDetailClass(false);
  };

  return {
    showDetailClass,
    showEconomyClass,
    showBusinessClass,
    handleShowEconomyClass,
    handleShowBusinessClass,
    handleCloseDetailClass,
  };
};

export default useFlightCard;
