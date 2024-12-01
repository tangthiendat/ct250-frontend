import { Carousel } from "antd";

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

const Banner: React.FC = () => {
  return (
    <Carousel
      autoplay
      effect="scrollx"
      autoplaySpeed={3000}
      pauseOnHover={false}
    >
      {bannerImages.map((banner) => (
        <div key={banner.alt} className="pt-2">
          <img
            src={banner.src}
            alt={banner.alt}
            className="mx-auto w-[98%] rounded-md transition-all duration-1000 sm:w-[90%] md:rounded-2xl lg:max-w-screen-xl"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
