interface TabsProps {
  tabItemActive: string;
  setTabItemActive: React.Dispatch<React.SetStateAction<string>>;
  tabItems: {
    key: string;
    label: string;
    icon: JSX.Element;
    children: string;
  }[];
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  tabItemActive,
  setTabItemActive,
  tabItems,
  children,
}) => {
  const onActiveTab = (key: string) => {
    setTabItemActive(key);
  };

  return (
    <div className="p-1 pb-0 md:w-[80%]">
      <div className="flex justify-center">
        {tabItems.map((item) => (
          <div className="flex-1" key={item.key}>
            <div
              className={`${item.key === tabItemActive ? "bg-blue-700 text-white" : "bg-blue-600/60"} flex cursor-pointer items-center justify-center gap-2 p-4 text-lg uppercase text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600`}
              onClick={() => onActiveTab(item.key)}
            >
              {item.icon}
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
};

export default Tabs;
