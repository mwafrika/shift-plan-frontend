import React, { ReactNode } from 'react';

type Props = {
  label?: string;
  style?: string;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  checked?: boolean;
  setValue?: any;
};

const Checkbox: React.FC<Props> = (props: Props) => {
  const { label, style, register, name, validator, type, checked } = props;
  return (
    <div className={`${style}`}>
      {label && <div className="text-blue">{label}</div>}
      <input
        defaultChecked={checked}
        checked={checked}
        type={type || 'checkbox'}
        className="text-blue"
        {...(register?.(name, validator) || {})}
        onChange={(e) => {
          props.setValue?.(name, e.target.checked);
        }}
      ></input>
    </div>
  );
};

export default Checkbox;