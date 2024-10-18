interface ItemPricingProps {
  title: string;
  price: number;
  more?: boolean;
}

const ItemPricing: React.FC<ItemPricingProps> = ({ title, price, more }) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-base font-semibold text-green-800">{title}</p>
        <p className="text-base font-semibold text-green-800">
          {price.toLocaleString()} VND
        </p>
      </div>
      {more && (
        <div className="pl-4 pr-0">
          <div className="flex justify-between">
            <p className="title-4">
              Phí dịch vụ hành khách chặng nội địa, Việt Nam
            </p>
            <p className="title-4">0 VND</p>
          </div>

          <div className="flex justify-between">
            <p className="title-4">
              Phí soi chiếu an ninh hành khách và hành lý, Việt Nam
            </p>
            <p className="title-4">0 VND</p>
          </div>

          <div className="flex justify-between">
            <p className="title-4">Thuế giá trị gia tăng, Việt Nam</p>
            <p className="title-4">0 VND</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemPricing;
