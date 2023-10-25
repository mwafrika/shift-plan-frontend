import React, { ReactNode } from 'react';

type Props = {
  label?: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: any;
  required?: boolean;
  max?: number;
  min?: number;
  inputStyle?: string;
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
  } = props;
  return (
    <div className='mb-3 w-[100%]'>
      {label && (
        <div className="text-primary50 mb-1 flex flex-row">
          {icon}
          <span>{label} </span>
        </div>
      )}
      <input
        type={type || 'text'}
        {...register?.(name, validator)}
        className={`text-sm p-3 w-full rounded-[10px] focus:outline-0 bg-white ${props.inputStyle}`}
        placeholder={placeholder}
        max={max}
        min={min}
        defaultValue={defaultValue || ''}
        onChange={(e) => {
          props?.onChange?.(e?.target?.value || '');
        }}
        required={required}
        autoComplete="password"
        disabled={disabled}
      ></input>
    </div>
  );
};

export default Input;