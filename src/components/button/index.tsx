import React, { ReactNode } from 'react';

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
    type = 'primary',
    centerStyle='justify-center items-center content-center flex text-secondary50'
  } = props;
  if (isSubmit)
    return (
      <div
        className={`${width} ${height} ${centerStyle} bg-primary50 rounded-[10px]`}
      >
        <div
          className={`flex flex-row content-center justify-around ${!isLoading ? 'w-full' : ''}`}
        >
          <input
            type="submit"
            className={`h-full w-full cursor-pointer text-secondary50 font-semibold `}
            value={label}
            disabled={isLoading}
          />
          {isLoading && (
            <div className="w-[30px] my-auto ml-2">
            </div>
          )}
        </div>
      </div>
    );

  return (
    <button
      className={`${centerStyle} flex-row m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-primary50  rounded-[15px] ${width} ${height}`}
      onClick={onClick}
    >
      {label}
      {isLoading && (
        <div className="w-[30px] my-auto ml-2">
          <label>...</label>
        </div>
      )}
    </button>
  );
};

export default Button;