import React, { useContext } from "react";
import classNames from "classnames";
import { TabConxt } from "./tabs";
var TabItem = function (props) {
    var label = props.label, disabled = props.disabled, className = props.className, style = props.style, index = props.index, isTitle = props.isTitle, children = props.children;
    var context = useContext(TabConxt);
    var classes = classNames("tab-item", className, {
        "is-disabled": disabled,
        "is-active": context.index === index,
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === "number") {
            context.onSelect(index);
        }
    };
    return isTitle ? (React.createElement("li", { className: classes, style: style, onClick: handleClick }, label)) : (context.index === index ?
        React.createElement("div", { className: "tab-content" }, children) : null);
};
TabItem.defaultProps = {
    isTitle: false,
};
TabItem.displayName = "TabItem";
export default TabItem;
