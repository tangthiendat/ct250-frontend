import { Divider } from "antd";
import { useCalculatePrice } from "../../hooks/useCalculatePrice";
import ItemPricing from "./ItemPricing";

interface ItemsPricingProps {
  type: string;
}

const ItemsPricing: React.FC<ItemsPricingProps> = ({ type }) => {
  const { adult, adultPrice, children, childrenPrice, infant, infantPrice } =
    useCalculatePrice();
  const pricing =
    type === "adult"
      ? adultPrice
      : type === "children"
        ? childrenPrice
        : infantPrice;

  return (
    <>
      {type !== "infant" ? (
        <>
          <ItemPricing title="Giá vé cơ bản" price={pricing} />
          <Divider type="horizontal" className="my-1 bg-slate-400" />
          <ItemPricing title="Phụ thu quản trị hệ thống" price={0} />
          <Divider type="horizontal" className="my-1 bg-slate-400" />
          <ItemPricing title="Thuế, phí và lệ phí" price={0} more={true} />
        </>
      ) : (
        <>
          <ItemPricing title="Giá vé cơ bản" price={pricing} />
          <Divider type="horizontal" className="my-1 bg-slate-400" />
          <ItemPricing title="Thuế, phí và lệ phí" price={0} more={true} />
        </>
      )}

      <div className="mt-4">
        <ItemPricing
          title={`Tổng giá cho mỗi ${
            type === "adult"
              ? "người lớn"
              : type === "children"
                ? "trẻ em"
                : "em bé"
          }`}
          price={0}
        />

        <ItemPricing
          title={`x ${type === "adult" ? adult : type === "children" ? children : infant} ${
            type === "adult"
              ? "người lớn"
              : type === "children"
                ? "trẻ em"
                : "em bé"
          }`}
          price={0}
        />
      </div>
    </>
  );
};

export default ItemsPricing;
