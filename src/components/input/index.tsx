import React, { ReactNode } from "react";

type Props = {
  label?: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name?: string;
  validator?: any;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: any;
  required?: boolean;
  value?: string;
  max?: number;
  min?: number;
  inputStyle?: string;
  autoComplete?: string;
};

const Input: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    icon,
    register,
    name,
    validator,
    type,
    defaultValue,
    required = false,
    max,
    min,
    disabled,
    onChange,
    value,
    autoComplete,
  } = props;

  const handleChange = (event: any) => {
    onChange && onChange(event);
  };

  return (
    <div className="mb-3 w-[100%]">
      {label && (
        <div className="text-primary/50 mb-1 flex flex-row">
          {icon}
          <span>{label} </span>
        </div>
      )}
      <input
        type={type || "text"}
        {...register?.(name, validator)}
        className={`text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white ${props.inputStyle}`}
        placeholder={placeholder}
        max={max}
        min={min}
        name={name}
        value={value || ""}
        onChange={handleChange}
        required={required}
        autoComplete="off"
        disabled={disabled}
      ></input>
    </div>
  );
};

export default Input;
