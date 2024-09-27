interface EconomyClassOptionsProps {
  show: boolean;
}

const EconomyClassOptions: React.FC<EconomyClassOptionsProps> = ({ show }) => {
  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 py-6 transition-all duration-500`}
    >
      <p>Chọn hạng vé</p>
      <p>Tiện ích với mỗi hành khách</p>
      <div></div>
      <p>Vui lòng chọn giá vé để tiếp tục</p>
    </div>
  );
};

export default EconomyClassOptions;
