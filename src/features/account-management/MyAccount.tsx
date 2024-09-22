import AccountInfo from "./components/AccountInfo";
import PersonalInfo from "./components/PersonalInfo";

const MyAccount: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-5 min-[860px]:grid-cols-2">
      <AccountInfo />
      <PersonalInfo />
    </div>
  );
};

export default MyAccount;
