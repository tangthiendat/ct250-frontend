import { MdExpandMore } from "react-icons/md";

interface ExpansionButtonProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  titleOpen: string;
  titleClose: string;
  moreHandle?: () => void;
}

const ExpansionButton: React.FC<ExpansionButtonProps> = ({
  showForm,
  setShowForm,
  titleOpen,
  titleClose,
  moreHandle,
}) => {
  return (
    <div
      onClick={() => {
        if (moreHandle) {
          moreHandle();
        }
        setShowForm(!showForm);
      }}
      className="absolute left-1/2 z-50 flex w-40 -translate-x-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-b-full bg-white shadow-md hover:bg-white/50"
    >
      {showForm ? (
        <>
          {titleClose}
          <MdExpandMore className="rotate-180 transform duration-500" />
        </>
      ) : (
        <>
          {titleOpen}
          <MdExpandMore className="transform duration-500" />
        </>
      )}
    </div>
  );
};

export default ExpansionButton;
