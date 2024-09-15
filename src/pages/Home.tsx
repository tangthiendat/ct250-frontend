import { Carousel } from "antd";
import React from "react";
import SearchPanel from "../features/searching/SearchPanel";

const Home: React.FC = () => {
  return (
    <div className="relative flex min-h-full flex-col justify-center">
      <div className="max-md:hiden">
        <Carousel
          autoplay
          dots={false}
          effect="fade"
          autoplaySpeed={5000}
          slickGoTo={1}
        >
          <div>
            <img
              src="/pages/home/landscape_background_1.jpg"
              alt="landscape_background_1"
              className="w-full rounded-sm object-cover"
            />
          </div>

          <div>
            <img
              src="/pages/home/booking_illustration_background.jpg"
              alt="landscape_background_2"
              className="w-full rounded-sm object-cover"
            />
          </div>
        </Carousel>
      </div>

      <div className="">
        <SearchPanel />
      </div>
    </div>
  );
};

export default Home;
