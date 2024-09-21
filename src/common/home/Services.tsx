import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Title from "antd/es/typography/Title";

const services = [
  {
    src: "/pages/home/services/hanh_ly.jpg",
    alt: "Hành lý",
    title: "Mua thêm hành lý ký gửi",
    description:
      "Nếu hành lý ký gửi của hành khách vượt quá quy định, hành khách có thể chọn mua thêm hành lý ký gửi!!!",
  },
  {
    src: "/pages/home/services/suat_an.jpg",
    alt: "Suất ăn",
    title: "Dịch vụ đặt trước suất ăn",
    description:
      "Với dịch vụ đặt trước suất ăn, hành khách có thể thoải mái lựa chọn suất ăn phù hợp với khẩu vị của mình.",
  },
  {
    src: "/pages/home/services/cho_ngoi.jpg",
    alt: "Chỗ ngồi",
    title: "Lựa chọn chỗ ngồi yêu thích",
    description:
      "Hãy chọn trước chỗ ngồi để có được vị trí ưng ý nhất và tận hưởng trải nghiệm bay thoải mái cùng DaViKa Airways!!!",
  },
  {
    src: "/pages/home/services/dichvu_thucung.jpg",
    alt: "Dịch vụ thú cưng",
    title: "Dịch vụ vận chuyển thú cưng",
    description:
      "Hành khách có thể mang theo thú cưng lên khoang hành khách hoặc vận chuyển theo hành lý ký gửi.",
  },
  {
    src: "/pages/home/services/dichvu_treem.jpg",
    alt: "Dịch vụ cho trẻ em",
    title: "Dịch vụ cho trẻ em đi một mình",
    description:
      "DaViKa Airways cũng cấp dịch vụ chăm sóc trẻ em đi một mình trong trường hợp trẻ em không có người lớn đi cùng trên chuyến bay.",
  },
];

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "transparent", left: "-15px", zIndex: 1 }}
      onClick={onClick}
    >
      <LeftOutlined
        style={{
          fontSize: "30px",
          color: "white",
          backgroundColor: "black",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "transparent", right: "0px", zIndex: 1 }}
      onClick={onClick}
    >
      <RightOutlined
        style={{
          fontSize: "30px",
          color: "white",
          backgroundColor: "black",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="py-10">
      <h1 className="text-heading text-center">
        Các dịch vụ khác của chúng tôi
      </h1>

      <Carousel
        autoplay
        effect="scrollx"
        arrows={true}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        dots={false}
        autoplaySpeed={5000}
        speed={2000}
        pauseOnHover={true}
        slidesToShow={3}
        className="bg-re-700 mx-auto w-[90%] pt-2 transition-all duration-1000 lg:w-[80%]"
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {services.map((service) => (
          <div key={service.alt} className="bg-red700 pb-8">
            <div className="mx-auto h-[380px] w-[90%] cursor-pointer rounded-xl bg-white shadow-xl transition-all duration-1000 sm:h-[430px] md:h-[380px] lg:h-[430px] xl:h-[380px]">
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={service.src}
                  alt={service.alt}
                  className="mx-auto h-[250px] w-full rounded-t-xl transition-transform duration-1000 hover:scale-125"
                />
              </div>
              <div className="text-balance p-2 text-center text-black">
                <Title level={4}>{service.title}</Title>
                <i>{service.description}</i>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
