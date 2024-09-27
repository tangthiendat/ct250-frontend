interface BusinessClassOptionsProps {
  show: boolean;
}

const BusinessClassOptions: React.FC<BusinessClassOptionsProps> = ({
  show,
}) => {
  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 py-6 transition-all duration-500`}
    >
      <div>TOP</div>
      <div>hoho</div>
      <div>hoho</div>
      <div>hoho</div>
      <div>hoho</div>
      <div>hoho</div>
      <div>hoho</div>
      <div>BOTTOM</div>
    </div>
  );
};

export default BusinessClassOptions;
