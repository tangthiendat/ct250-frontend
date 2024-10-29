interface CategoryRecapProps {
  showModal: boolean;
}

const CategoryRecap: React.FC<CategoryRecapProps> = ({ showModal }) => {
  return (
    <>
      <div
        className={`${showModal ? "h-[50px]" : "h-[0px]"} transition-all duration-200`}
      >
        ???
      </div>
    </>
  );
};

export default CategoryRecap;
