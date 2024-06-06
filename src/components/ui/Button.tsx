// import React from "react";

import { ReactNode } from "react";

interface IProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

function Button({ children, className, onClick }: IProps) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
