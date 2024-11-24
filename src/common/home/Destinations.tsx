import BodyLayout from "../../layouts/BodyLayout";
import Destination from "./common/Destination";

const Destinations: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <p className="text-heading-1 text-blue-900">Điểm đến nội địa</p>
        <Destination
          linkTo="#"
          imgSrc="VietNam/VietNam.png"
          country="Việt Nam"
        />
      </BodyLayout>

      <BodyLayout>
        <p className="text-heading-1 text-blue-900">Châu Âu</p>
        <div className="flex flex-col gap-5 md:flex-row">
          <Destination linkTo="#" imgSrc="Europe/Anh.png" country="Anh" />
          <Destination linkTo="#" imgSrc="Europe/Duc.png" country="Đức" />
        </div>
      </BodyLayout>

      <BodyLayout>
        <p className="text-heading-1 text-blue-900">Đông Bắc Á</p>
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
        <p className="text-heading-1 text-blue-900">Đông Nam Á</p>
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
