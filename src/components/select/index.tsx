import React, { ReactNode } from "react";
interface IOption {
  value: string;
  label: string;
}

type Props = {
  label: string;
  placeholder: string;
  Style?: string;
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
    Style,
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
    <>
      {label && (
        <div className="text-primary/50 mb-1 flex flex-row">
          {icon}
          <span>{label} </span>
        </div>
      )}
      <select
        onChange={handleChange}
        className={`text-sm p-3 w-full rounded-[10px] focus:outline-0 mb-5 bg-white ${Style}`}
        {...register?.(name, validator)}
        {...props}
        disabled={disabled}
        value={value}
        label={label}
        placeholder={placeholder}
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
    </>
  );
};

export default SelectInput;
