import React, { ReactNode } from "react";
interface IOption {
  value: string;
  label: string;
}

type Props = {
  label: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  onChange?: any;
  value?: string | number;
  Options: IOption[];
  disabled?: boolean;
};

const SelectInput: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    register,
    name,
    value,
    validator,
    type,
    onChange,
    disabled,
    Options,
  } = props;

  const handleChange = (event: any) => {
    onChange && onChange(event);
  };
  return (
    // <div className="w-[100%] mb-3">
    //   <div className="sm:text-sm flex flex-row">
    //     {icon}
    //     <span>{label} </span>
    //   </div>
    //   <datalist id={`${name}-list`}>
    //     {options.map((o) => (
    //       <option
    //         className="text-primary bg-primary-300"
    //         value={o.value}
    //         key={o.value}
    //       />
    //     ))}
    //   </datalist>
    //   <input
    //     list={`${name}-list`}
    //     type={type || "text"}
    //     {...register?.(name, validator)}
    //     className={`text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white ${style}`}
    //     placeholder={placeholder}
    //   ></input>
    // </div>

    <select
      onChange={handleChange}
      className={`text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white ${style}`}
      {...register?.(name, validator)}
      {...props}
      disabled={disabled}
      value={value}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {Options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
