import React, { useState } from "react";

const Header: React.FC = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    // <header className="z-10 rounded-3xl bg-white shadow-xl">
    //   <div className="m-3 flex items-center justify-between">
    //     <a href="../">
    //       <img
    //         src="/logo512.png"
    //         alt="DaViKa Airways"
    //         className="h-14 md:h-14 lg:h-20 xl:h-24"
    //       />
    //     </a>

    //     <div className="text space-x-4 max-[840px]:hidden">
    //       <ConfigProvider
    //         theme={{
    //           token: {
    //             fontSize: 18,
    //           },
    //         }}
    //       >
    //         <Anchor
    //           offsetTop={-200}
    //           direction="horizontal"
    //           items={[
    //             { key: "0", title: "Khám phá", href: "#0" },
    //             { key: "1", title: "Chuyến bay của tôi", href: "#1" },
    //             { key: "2", title: "Dịch vụ bổ sung", href: "#2" },
    //             { key: "3", title: "Góp ý", href: "#3" },
    //             { key: "4", title: "Hỗ trợ", href: "#4" },
    //           ]}
    //         />
    //       </ConfigProvider>
    //     </div>

    //     <div className="flex items-center">
    //       <LanguageMenu />
    //       <AccountMenu />
    //       <div className="min-[841px]:hidden">
    //         <Menu />
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className="relative clear-both" style={{ textAlign: "left" }}>
      <div className="clear-both overflow-visible">
        <div className="relative clear-both m-auto max-w-[1000px] rounded-[4px]">
          <nav className="relative top-[0] z-0 float-left mb-0 h-[80px] rounded-none bg-[#fff] p-0">
            <div className="md:float-left">
              <div className="md: md:relative md:max-w-[325px]">
                <div className="md:float-left md:block md:h-auto md:max-w-[88%] md:overflow-hidden md:border-[1px] md:border-[solid] md:border-[transparent] md:px-[0] md:py-[5px]">
                  <img
                    src="/logo512.png"
                    alt="DaViKa Airways"
                    className="h-14 md:h-14 lg:h-20 xl:h-24"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
