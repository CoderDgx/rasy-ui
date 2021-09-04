import React, { useState, createContext } from "react";
import classNames from "classnames";
export var TabConxt = createContext({ index: 0 });
var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, onSelect = props.onSelect, children = props.children, type = props.type, style = props.style;
    var _a = useState(defaultIndex), active = _a[0], setActive = _a[1];
    var classes = classNames("tabs", className);
    var titleClass = classNames({
        "tabs-line": type === "line",
        "tabs-card": type !== "line",
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
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
    var renderChildren = function (type) {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "TabItem") {
                return React.cloneElement(childElement, {
                    index: index,
                    isTitle: type === "title",
                });
            }
            else {
                console.error("Warning: Tabs has a child which is not a TabItem component");
            }
        });
    };
    return (React.createElement("div", { className: classes, style: style },
        React.createElement(TabConxt.Provider, { value: passedContext },
            React.createElement("ul", { className: titleClass }, renderChildren("title")),
            renderChildren("content"))));
};
Tabs.defaultProps = {
    defaultIndex: 0,
    type: "line",
};
export default Tabs;
