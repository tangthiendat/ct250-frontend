import PersonalInfo from "./components/PersonalInfo";

const MyAccount: React.FC = () => {
  return (
    <div className="grid h-full grid-cols-1 gap-5">
      <PersonalInfo />
    </div>
  );
};

export default MyAccount;
