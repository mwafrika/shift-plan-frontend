import React from 'react';

type PropTypes = {
  backgroundColor?: string;
  height?: number;
};

export const LoadingIcon: React.FC<PropTypes> = () => {
 
  return (
    <span className="relative flex h-[30px] w-[30px] ">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary50 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-[30px] w-[30px] bg-primary50"></span>
</span>
  )
};