import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="py-3 ps-5 border-b-2">
      <img onClick={()=> navigate("/")} className="w-10 sm:w-12 md:w-14 cursor-pointer" src="public/logo.png" />
    </div>
  );
};

export default Header;
