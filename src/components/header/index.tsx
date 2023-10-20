import React from "react";

type Props = {
  title: string;
};

const Header: React.FC<Props> = (header: Props) => {
  return (
    <h1 className="text-[14px] text-primary font-semibold">{header.title}</h1>
  );
};

export default Header;
