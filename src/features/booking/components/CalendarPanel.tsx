interface CalendarPanelProps {
  show: boolean;
}

const CalendarPanel: React.FC<CalendarPanelProps> = ({ show }) => {
  return (
    <div className="overflow-hidden border-t-4 py-6 shadow-inner">
      <div
        className={`w-full transform rounded-b-lg bg-white pt-5 shadow-md transition-all duration-500 ${
          show ? "-translate-y-0" : "-translate-y-20 opacity-0"
        }`}
      >
        {show && (
          <>
            Hi there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel. Hi
            there! I'm a calendar panel. Hi there! I'm a calendar panel.
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarPanel;
