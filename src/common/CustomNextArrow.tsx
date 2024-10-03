import { RightOutlined } from "@ant-design/icons";

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

export default CustomNextArrow;
