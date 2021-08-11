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
  const [multipleOptionOpen, setMultipleOptionOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const iconClasses = classNames("icon-wrapper", {
    "icon-active": multiple ? multipleOptionOpen : optionOpen,
  });
  const selectClasses = classNames("select", className, {
    "input-disabled": disabled,
  });
  const optionClasses = classNames("option", {
    "multiple-option-show": multiple && !multipleOptionOpen,
  });

  const handleClick = () => {
    if (!disabled && multiple) {
      setOptionOpen(true);
    }
    if (!disabled && !multiple) {
      setOptionOpen(!optionOpen);
    } else if (!disabled) {
      setMultipleOptionOpen(!multipleOptionOpen);
    }
  };

  console.log(optionOpen, multipleOptionOpen);

  const handleClickTimesDeleteOption = (e:React.MouseEvent<SVGSVGElement, MouseEvent> ,index: number) => {
    e.stopPropagation();
    let newValue = [...(value as string[] || [])];
    newValue.splice(index, 1);
    setValue(newValue)
  }


  const renderChildren = () => {
    const childrenComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<OptionProps>;
      if (childElement.type.displayName === "Option") {
        return cloneElement(childElement, {
          index: `${i}`,
          setValue: setValue,
          multiple: multiple,
          setOptionOpen: setOptionOpen,
          multipleInputValue: multiple ? (value as string[]) : undefined,
        });
      } else {
        console.error(
          "Warning: Select has a child which is not a Option component"
        );
      }
    });
    return <ul className={optionClasses}>{childrenComponent}</ul>;
  };
  return (
    <div className={selectClasses}>
      <div className="input" onClick={handleClick}>
        <input
          className="input-inner"
          name={name}
          value={multiple ? (value?.length ? " " : placeholder) : value}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
        />
        <Icon icon="angle-down" className={iconClasses}></Icon>
        {multiple && value && (
          <div className="select-item">
            {(value as string[]).map((item, index) => {
              return (
                <span className="title" key={index}>
                  {item}
                  <Icon className="times" icon="times" onClick={(e) => handleClickTimesDeleteOption(e, index)}/>
                </span>
              );
            })}
          </div>
        )}
      </div>
      {optionOpen && renderChildren()}
    </div>
  );
};

export default Select;
