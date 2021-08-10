import React, {
  CSSProperties,
  FC,
} from "react";
import classNames from "classnames";

export interface OptionProps {
  value: string;
  label?: string;
  disabled?: boolean;
  className?: CSSProperties;
  setValue?: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >;
}

export const Option: FC<OptionProps> = (props) => {
  const { value, label, disabled, className, setValue } = props;
  const classes = classNames("option-item", className, {
    "is-disabled": disabled,
  });


  const handleClick = () => {
    setValue !== undefined && setValue(value)
  };
  return (
    <li className={classes} onClick={handleClick}>
      {value}
      <div className="label">{label}</div>
    </li>
  );
};
Option.displayName = "Option";
export default Option;
