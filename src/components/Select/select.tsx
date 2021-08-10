import React, {
  useState,
  Children,
  cloneElement,
  FC,
  FunctionComponentElement,
  CSSProperties,
} from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import { OptionProps } from "./option";

interface SelectProps {
  defaultValue?: string | string[];
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  className?: CSSProperties;
  name?: string;
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  onVisibleChange?: (visible: boolean) => void;
}

export const Select: FC<SelectProps> = (props) => {
  const {
    defaultValue,
    placeholder,
    className,
    disabled,
    multiple,
    name,
    onChange,
    onVisibleChange,
    children,
  } = props;
  const [optionOpen, setOptionOpen] = useState(false);
  const [value, setValue] = useState(defaultValue)
  const iconClasses = classNames("icon-wrapper", {
    "icon-active": optionOpen
  });
  const selectClasses = classNames("select", className, {
    "is-disabled": disabled
  })
  
  const handleClick = () => {
    if(!disabled) {
      setOptionOpen(!optionOpen)
    } 
  }

  const renderChildren = () => {
    const childrenComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<OptionProps>;
      if (childElement.type.displayName === "Option") {
        return cloneElement(childElement, {
          setValue: setValue
        });
      } else {
        console.error(
          "Warning: Select has a child which is not a Option component"
        );
      }
    });
    return <ul className="option">{childrenComponent}</ul>;
  };
  return (
    <div className={selectClasses} onClick={handleClick}>
      <div className="input">
        <input
          className="input-inner"
          value={value || ""}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
        />
        <Icon icon="angle-down" className={iconClasses}></Icon>
      </div>
      {optionOpen && renderChildren()}
    </div>
  );
};

export default Select;
