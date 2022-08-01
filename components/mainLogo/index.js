import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainLogo({ collapsedState }) {
  function arizonnaNotCollapsed() {
    return (
      <div className="absolute left-[5vw] font-[500] h-[1rem] font-[montserrat] text-[3.2vw] top-[-1.5vh] ">
        Arizonna
      </div>
    );
  }

  return (
    <a
      href="/"
      className="text-white text-[5vh] mt-[1vw] pl-[1.5vw] font-[300] no-underline mb-[2vh] z-10 relative "
    >
      <FontAwesomeIcon
        icon="fa-brands fa-atlassian"
        className="w-[3vw] top-0 absolute left-[1.5vw] text-cyan-400"
      />
      {collapsedState ? "" : arizonnaNotCollapsed()}
    </a>
  );
}

export default MainLogo;
