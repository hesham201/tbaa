import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-[1300px] mx-auto px-5 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
