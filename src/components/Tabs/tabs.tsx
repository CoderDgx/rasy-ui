import React, { useState, createContext } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";

type TabsType = "line" | "card";
type SelectCallback = (selectedIndex: number) => void;
export interface TabsProps {
  defaultIndex?: number;
  className?: string;
  onSelect?: SelectCallback;
  type?: TabsType;
  style?: React.CSSProperties;
  item?: TabItemProps[];
}

interface ITabContext {
  index: number;
  onSelect?: SelectCallback;
}

export const TabConxt = createContext<ITabContext>({ index: 0 });

const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultIndex, className, onSelect, children, type, style } = props;
  const [active, setActive] = useState(defaultIndex);
  const classes = classNames("tabs", className);
  const titleClass = classNames({
    "tabs-line": type === "line",
    "tabs-card": type !== "line",
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: ITabContext = {
    index: active ? active : 0,
    onSelect: handleClick,
  };

  // const renderChildren = () => {
  //   return React.Children.map(children, (child, index) => {
  //     const childElement = child as React.FunctionComponentElement<TabItemProps>
  //     const { displayName } = childElement.type
  //     if(displayName === "TabItem") {
  //       return React.cloneElement(childElement, {
  //         index: index,
  //         isTitle: true
  //       })
  //     } else {
  //       console.error(
  //         "Warning: Tabs has a child which is not a TabItem component"
  //       );
  //     }
  //   })
  // }

  const renderChildren = (type: string) => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<TabItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "TabItem") {
        return React.cloneElement(childElement, {
          index: index,
          isTitle: type === "title",
        });
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabItem component"
        );
      }
    });
  };

  return (
    <div className={classes} style={style}>
      <TabConxt.Provider value={passedContext}>
        <ul className={titleClass}>{renderChildren("title")}</ul>
        {renderChildren("content")}
      </TabConxt.Provider>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
};

export default Tabs;
