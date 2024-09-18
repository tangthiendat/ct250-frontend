import BodyLayout from "../../layouts/BodyLayout";

const flightRoutes = [
  {
    key: "AKL",
    from: "Hà Nội (HAN)",
    to: "Auckland (AKL)",
    typeFlight: "round-trip",
    cabinClass: "business",
    price: 25000000,
  },
  {
    key: "ATL",
    from: "Hà Nội (HAN)",
    to: "Atlanta (ATL)",
    typeFlight: "round-trip",
    cabinClass: "business",
    price: 22000000,
  },
  {
    key: "JFK",
    from: "Hà Nội (HAN)",
    to: "New York (JFK)",
    typeFlight: "round-trip",
    cabinClass: "classic",
    price: 20000000,
  },
  {
    key: "LAX",
    from: "Hà Nội (HAN)",
    to: "Los Angeles (LAX)",
    typeFlight: "one-way",
    cabinClass: "classic",
    price: 18000000,
  },
  {
    key: "SIN",
    from: "Hà Nội (HAN)",
    to: "Singapore (SIN)",
    typeFlight: "one-way",
    cabinClass: "business",
    price: 10000000,
  },
  {
    key: "DAD",
    from: "Hà Nội (HAN)",
    to: "Đà Nẵng (DAD)",
    typeFlight: "one-way",
    cabinClass: "classic",
    price: 1000000,
  },
  {
    key: "FUK",
    from: "Hà Nội (HAN)",
    to: "Fukuoka (FUK)",
    typeFlight: "one-way",
    cabinClass: "business",
    price: 15000000,
  },
  {
    key: "KIX",
    from: "Hà Nội (HAN)",
    to: "Osaka (KIX)",
    typeFlight: "one-way",
    cabinClass: "business",
    price: 16000000,
  },
];

const FlightRoutes: React.FC = () => {
  return (
    <BodyLayout>
      <h1 className="text-heading">Các tuyến bay phổ biến của chúng tôi</h1>
      <div className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {flightRoutes.map((route) => (
            <div
              key={route.key}
              className="cursor-pointer rounded-md border border-gray-200 shadow-md"
            >
              <div className="sm:h- lg:h- relative mx-auto h-52 overflow-hidden rounded-t-md transition-all duration-1000">
                <img
                  src={`/flight-routes/${route.key}.jpg`}
                  alt={route.key}
                  //   className="h-52 w-full transition-transform duration-1000 hover:scale-105 md:h-72"
                  className="relative h-full w-full rounded-t-md object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-2">
                <h2 className="text-lg font-semibold">
                  {route.from} - {route.to}
                </h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">
                    {route.typeFlight === "round-trip"
                      ? "Khứ hồi"
                      : "Một chiều"}
                  </p>
                  <span className="mx-2">|</span>
                  <p className="text-sm text-gray-500">
                    {route.cabinClass === "business"
                      ? "Hạng thương gia"
                      : "Hạng phổ thông"}
                  </p>
                </div>
                <p className="text-right text-lg font-semibold text-red-500">
                  {route.price.toLocaleString()} VNĐ
                  {/* {(route.price / 23000).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BodyLayout>
  );
};

export default FlightRoutes;
