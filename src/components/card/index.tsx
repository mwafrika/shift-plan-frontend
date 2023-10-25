import React from "react";

type Props = {
  title: string;
  total: string;
  style?: string;
  icon: any;
};

const Card: React.FC<Props> = (card: Props) => {
  return (
    <div className="bg-white w-[20%] p-2 rounded-lg my-5">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="bg-white shadow-lg p-2 rounded-[50%]">{card.icon}</div>
        <div className="ml-4">
          <h1 className="text-[12px] text-black/50 font-semibold">
            {card.title}
          </h1>
          <p className="text-black text-[10px] font-bold">{card.total}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
