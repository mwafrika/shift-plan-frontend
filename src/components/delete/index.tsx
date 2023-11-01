import { RiDeleteBin2Fill } from "react-icons/ri";
import React from "react";
import Dialog from "../dialog";
import Button from "../button";

type PropTypes = {
  id?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
};

const Delete: React.FC<PropTypes> = ({ title, description, onClick }) => {
  const [deleted, setDeleted] = React.useState(false);

  return (
    <div>
      {deleted && (
        <Dialog
          onClose={() => {
            setDeleted(false);
          }}
          width="w-[30%]"
        >
          <h1 className="text-base font-bold text-center">{title}</h1>
          <p className="text-sm font-medium text-center py-4">{description}</p>
          <div className="flex flex-row items-center gap-2">
            <Button
              label="Cancel"
              width="bg-secondary w-[110px] h-[25px] rounded-[5px] text-white"
            />
            <Button
              label="Delete"
              width="w-[110px] h-[25px] bg-red rounded-[5px] text-white"
              onClick={() => {
                setDeleted(false);
                onClick();
              }}
            />
          </div>
        </Dialog>
      )}
      <RiDeleteBin2Fill
        fontSize={16}
        height={16}
        color="red"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setDeleted(true);
        }}
      />
    </div>
  );
};

export default Delete;
