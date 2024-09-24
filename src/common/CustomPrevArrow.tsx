import { LeftOutlined } from "@ant-design/icons";

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, color: "transparent", left: "-15px", zIndex: 1 }}
      className={className}
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

export default CustomPrevArrow;
