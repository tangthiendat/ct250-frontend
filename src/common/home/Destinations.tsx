import BodyLayout from "../../layouts/BodyLayout";
import HeadingTitle from "../HeadingTitle";
import Destination from "./common/Destination";

const Destinations: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <HeadingTitle level={1} title="Điểm đến nội địa" />
        <Destination
          linkTo="#"
          imgSrc="VietNam/VietNam.png"
          country="Việt Nam"
        />
      </BodyLayout>

      <BodyLayout>
        <HeadingTitle level={1} title="Châu Âu" />
        <div className="flex flex-col gap-5 md:flex-row">
          <Destination linkTo="#" imgSrc="Europe/Anh.png" country="Anh" />
          <Destination linkTo="#" imgSrc="Europe/Duc.png" country="Đức" />
        </div>
      </BodyLayout>

      <BodyLayout>
        <HeadingTitle level={1} title="Đông Bắc Á" />
        <div className="flex flex-col gap-5 md:flex-row">
          <Destination
            linkTo="#"
            imgSrc="NortheastAsia/HanQuoc.png"
            country="Hàn Quốc"
          />
          <Destination
            linkTo="#"
            imgSrc="NortheastAsia/NhatBan.png"
            country="Nhật Bản"
          />
        </div>
        <div className="mt-5">
          <Destination
            linkTo="#"
            imgSrc="NortheastAsia/DaiLoan.png"
            country="Đài Loan"
          />
        </div>
      </BodyLayout>

      <BodyLayout>
        <HeadingTitle level={1} title="Đông Nam Á" />
        <div className="flex flex-col gap-5 md:flex-row">
          <Destination
            linkTo="#"
            imgSrc="SoutheastAsia/Singapore.png"
            country="Singapore"
          />
          <Destination
            linkTo="#"
            imgSrc="SoutheastAsia/ThaiLan.png"
            country="Thái Lan"
          />
        </div>
      </BodyLayout>
    </>
  );
};

export default Destinations;
