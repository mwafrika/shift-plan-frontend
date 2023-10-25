import { RiCloseFill } from 'react-icons/ri';
import React from 'react';

type PropTypes = {
  width?: string;
  height?: string;
  children: any;
  title?: string;
  onClose?: () => void;
};

const Dialog: React.FC<PropTypes> = ({
  children,
  title,
  height,
  width = 'm-4 lg:w-2/4 w-3/4',
  onClose,
}) => {
  return (
    <div className="w-full  h-full bg-primary/60 fixed left-0 top-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-full absolute inset-0 z-30`}
        onClick={() => {
          onClose?.();
        }}
      />
      <div
        className={`${height} ${width} max-h-[90%] bg-white shadow-2xl z-50 p-4`}
      >
        <div className="flex flex-row items-center justify-between mb-8">
        <h2 className="text-primary font-bold text-lg">{title}</h2>
        <div
          className="cursor-pointer ml-auto flex flex-row justify-center text-center text-primary w-[50px] h-[25px]"
          onClick={() => {
            onClose?.();
          }}
        >
          <RiCloseFill width={20} className="text-primary" />
        </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;