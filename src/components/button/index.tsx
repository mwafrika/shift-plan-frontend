import React, { ReactNode } from "react";

type Props = {
  label: string;
  isSubmit?: boolean;
  onClick?: any;
  textColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  icon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  type?: string;
  centerStyle?: string;
};

const Button: React.FC<Props> = (props: Props) => {
  const {
    label,
    isSubmit,
    onClick,
    textColor,
    width,
    height,
    isLoading,
    type = "primary",
    centerStyle = "justify-center items-center content-center flex ",
  } = props;
  if (isSubmit) {
  }
  const containerStyle = `${width} ${height} bg-primary/50 rounded-[10px] mt-2`;
  const buttonStyle = `h-full w-full cursor-pointer font-normal text-secondary/50`;

  <div className={containerStyle}>
    <div
      className={`flex flex-row content-center justify-around ${
        isLoading ? "" : "w-full"
      }`}
    >
      <button
        type="submit"
        className={buttonStyle}
        value={label}
        disabled={isLoading}
      >
        {label}
      </button>
    </div>
  </div>;

  return (
    <button
      className={`${centerStyle} flex-row m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 mt-2  rounded-[15px] ${width} ${height}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
