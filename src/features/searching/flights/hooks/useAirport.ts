export const useAirport = (
  departureAirport: string,
  destinationAirport: string,
) => {
  const airPortOptions = [
    {
      label: "Trong nước",
      options: [
        {
          airportID: 43,
          label: "Thành phố Hồ Chí Minh - SGN",
          value: "Thành phố Hồ Chí Minh - SGN",
        },
        {
          airportID: 44,
          label: "Thành phố Hà Nội - HAN",
          value: "Thành phố Hà Nội - HAN",
        },
      ],
    },
    {
      label: "Châu Á",
      options: [
        {
          airportID: 31,
          label: "Thành phố Bangkok - BKK",
          value: "Thành phố Bangkok - BKK",
        },
        {
          airportID: 19,
          label: "Thành phố Singapore - SIN",
          value: "Thành phố Singapore - SIN",
        },
      ],
    },
    {
      label: "Châu Đại Dương",
      options: [
        {
          airportID: 30,
          label: "Thành phố Sydney - SYD",
          value: "Thành phố Sydney - SYD",
        },
      ],
    },
  ];

  const filteredDepartureOptions = airPortOptions.map((group) => ({
    ...group,
    options: group.options.filter(
      (option) => option.value !== destinationAirport,
    ),
  }));

  const filteredDestinationOptions = airPortOptions.map((group) => ({
    ...group,
    options: group.options.filter(
      (option) => option.value !== departureAirport,
    ),
  }));

  const validateAirport = (airport: string) => {
    return airPortOptions.some((group) =>
      group.options.some((option) => option.value === airport),
    );
  };

  return {
    filteredDepartureOptions,
    filteredDestinationOptions,
    validateAirport,
  };
};

export default useAirport;
