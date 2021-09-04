var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
export var Option = function (props) {
    var index = props.index, value = props.value, label = props.label, disabled = props.disabled, className = props.className, setValue = props.setValue, multiple = props.multiple, multipleInputValue = props.multipleInputValue, setOptionOpen = props.setOptionOpen;
    var _a = useState(false), active = _a[0], setActive = _a[1];
    var classes = classNames("option-item", className, {
        "option-disabled": disabled,
        "option-active": multiple && active,
    });
    useEffect(function () {
        var newValue = __spreadArray([], (multipleInputValue || []));
        setActive(newValue.indexOf(value) !== -1);
    }, [multipleInputValue, value]);
    var handleClick = function () {
        if (!multiple) {
            setValue !== undefined && setValue(value);
            setOptionOpen !== undefined && setOptionOpen(false);
        }
        else if (multiple && !active) {
            var newValue = __spreadArray([], (multipleInputValue || []));
            newValue.push(value);
            setValue !== undefined && setValue(newValue);
        }
        else if (multiple && active) {
            var newValue = __spreadArray([], (multipleInputValue || []));
            newValue.splice(newValue.indexOf(value), 1);
            setValue !== undefined && setValue(newValue);
        }
        setActive(!active);
    };
    return (React.createElement("li", { className: classes, onClick: handleClick, key: index },
        value,
        multiple && active && React.createElement(Icon, { className: "check", icon: "check" }),
        React.createElement("div", { className: "label" }, label)));
};
Option.displayName = "Option";
export default Option;
