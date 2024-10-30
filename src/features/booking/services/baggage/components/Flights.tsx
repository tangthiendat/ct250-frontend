const Flights: React.FC = () => {
  return (
    <div className="mx-auto mt-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
      {/* flight */}
      <div className="rounded-lg bg-slate-100 px-20 py-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
        <div className="text-heading-3 mb-4 text-center">
          <p className="text-blue-900">Hành lý cho chuyến bay</p>
          <p className="text-green-700">Hà Nội đến TP.Hồ Chí Minh</p>
        </div>
      </div>
    </div>
  );
};

export default Flights;
