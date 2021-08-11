import React, { useState, useEffect, CSSProperties, FC } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";

export interface OptionProps {
  index?: string;
  value: string;
  label?: string;
  disabled?: boolean;
  className?: CSSProperties;
  setValue?: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >;
  setOptionOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  multiple?: boolean;
  multipleInputValue?: string[];
}

export const Option: FC<OptionProps> = (props) => {
  const {
    index,
    value,
    label,
    disabled,
    className,
    setValue,
    multiple,
    multipleInputValue,
    setOptionOpen,
  } = props;
  const [active, setActive] = useState(false);
  const classes = classNames("option-item", className, {
    "option-disabled": disabled,
    "option-active": multiple && active,
  });

  useEffect(() => {
    let newValue = [...(multipleInputValue || [])];
    setActive(newValue.indexOf(value) !== -1);
  }, [multipleInputValue, value]);

  const handleClick = () => {
    if (!multiple) {
      setValue !== undefined && setValue(value);
      setOptionOpen !== undefined && setOptionOpen(false);
    } else if (multiple && !active) {
      let newValue = [...(multipleInputValue || [])];
      newValue.push(value);
      setValue !== undefined && setValue(newValue);
    } else if (multiple && active) {
      let newValue = [...(multipleInputValue || [])];
      newValue.splice(newValue.indexOf(value), 1);
      setValue !== undefined && setValue(newValue);
    }
    setActive(!active);
  };
  return (
    <li className={classes} onClick={handleClick} key={index}>
      {value}
      {multiple && active && <Icon className="check" icon="check" />}
      <div className="label">{label}</div>
    </li>
  );
};
Option.displayName = "Option";
export default Option;
