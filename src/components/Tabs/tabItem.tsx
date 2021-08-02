import React, { useContext } from "react";
import classNames from "classnames";
import { TabConxt } from "./tabs";

export interface TabItemProps {
  label: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  index?: number;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { label, disabled, className, style, index } = props;
  const context = useContext(TabConxt);
  const classes = classNames("tab-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index
  });

  const handleClick = () => {
    if(context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {label}
    </li>
  );
}

TabItem.displayName = "TabItem"
export default TabItem