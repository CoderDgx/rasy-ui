import React, { useContext } from "react";
import classNames from "classnames";
import { TabConxt } from "./tabs";

export interface TabItemProps {
  label: any;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  index?: number;
  isTitle?: boolean;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { label, disabled, className, style, index, isTitle, children } = props;
  const context = useContext(TabConxt);
  const classes = classNames("tab-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };
  return isTitle ? (
    <li className={classes} style={style} onClick={handleClick}>
      {label}
    </li>
  ) : (
    context.index === index ?
    <div className="tab-content">{children}</div> : null
  );
};

TabItem.defaultProps = {
  isTitle: false,
};

TabItem.displayName = "TabItem";
export default TabItem;
