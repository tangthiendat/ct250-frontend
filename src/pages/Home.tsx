import { Carousel } from "antd";
import React from "react";
import SearchPanel from "../features/searching/SearchPanel";

const bannerImages = [
  {
    src: "/pages/home/banner-1.jpg",
    alt: "banner-1",
  },
  {
    src: "/pages/home/banner-2.jpg",
    alt: "banner-2",
  },
  {
    src: "/pages/home/banner-3.jpg",
    alt: "banner-3",
  },
  {
    src: "/pages/home/banner-4.jpg",
    alt: "banner-4",
  },
];

// const destinationsImages = [];

const Home: React.FC = () => {
  return (
    <div className="relative top-6 flex min-h-full flex-col justify-center">
      <div className="max-md:hiden">
        <Carousel
          autoplay
          effect="scrollx"
          // arrows={true}
          autoplaySpeed={3000}
          pauseOnHover={false}
        >
          {bannerImages.map((banner) => (
            <div key={banner.alt}>
              <img
                src={banner.src}
                alt={banner.alt}
                className="mx-auto w-[98%] rounded-xl md:w-[80%]"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="">
        <SearchPanel />
      </div>
    </div>
  );
};

export default Home;
