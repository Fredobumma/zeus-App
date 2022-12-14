import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ label, ...rest }) => {
  const navigate = useNavigate();
  const getClasses = Object.keys(rest)
    .map((c) => c)
    .toString()
    .replaceAll(",", " ");

  return (
    <button
      className={`active:bg-actFocHov focus:bg-actFocHov hover:bg-actFocHov bg-secondary font-bold font-heading font-lg leading-5 outline-0 rounded-15 text-white px-5 py-3 tablet:py-4 ${getClasses}`}
      onClick={() => navigate("/plans/earnings")}
    >
      {label}
    </button>
  );
};

export default Button;
