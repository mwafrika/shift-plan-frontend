import React from 'react';
import Button from '../button';

type PropTypes = {
  backgroundColor?: string;
  height?: number;
  reset?: any;
};

export const Loading: React.FC<PropTypes> = () => {
  return (
    <div className="absolute w-full h-full flex justify-center">
      <div className=" flex justify-center flex-col items-center">
      <p>Chargement ...</p>
      </div>
    </div>
  );
};

export const ErrorLoading: React.FC<PropTypes> = (props) => {
  return (
    <div className="absolute w-full h-full flex justify-center">
      <div className=" flex justify-center flex-col items-center">
        <div>
          <p className="text-center max-w-[400px] text-lg text-[#6B6E75] mt-8">
            Une erreur s'est produite
          </p>
          <Button
            label="Reesayer"
            onClick={() => {
              props?.reset?.();
            }}
            width="bg-primary-900 text-white mx-auto max-w-[150px] h-[30px] mt-3 rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};