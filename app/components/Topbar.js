"use client";

import { useContext, useRef, useEffect } from "react";
import { IconContext } from "../context/IconContext";

import Image from "next/image";
import ruNextLogoDark from "../../public/assets/runext logo-dark.svg";
import ruNextLogoLight from "../../public/assets/runext logo-light.svg";

import searchIconDark from "../../public/assets/search-icon-dark.svg";
import searchIconLight from "../../public/assets/search-icon-light.svg";

const Topbar = () => {
  const { iconTheme } = useContext(IconContext);

  // adding z-index doesn't allow the page to be scroll at the topbar
  return (
    <nav className="fixed top-0 left-0 z-[99] w-full">
      {!iconTheme && (
        <div className="flex flex-row justify-between p-6">
          <Image
            src={!iconTheme ? ruNextLogoDark : ruNextLogoLight}
            alt="r u next logo dark"
            priority
          />
          <Image
            src={!iconTheme ? searchIconDark : searchIconLight}
            alt="search icon dark"
            className="w-6 h-6"
            priority
          />
        </div>
      )}
    </nav>
  );
};

export default Topbar;
