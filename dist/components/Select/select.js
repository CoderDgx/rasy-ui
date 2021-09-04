var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import React, { useState, useRef, Children, cloneElement, } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import useClickOutside from "../../hooks/useClickOutside";
export var Select = function (props) {
    var defaultValue = props.defaultValue, placeholder = props.placeholder, className = props.className, disabled = props.disabled, multiple = props.multiple, name = props.name, onChange = props.onChange, onVisibleChange = props.onVisibleChange, children = props.children;
    var _a = useState(false), optionOpen = _a[0], setOptionOpen = _a[1];
    var componentRef = useRef(null);
    var _b = useState(false), multipleOptionOpen = _b[0], setMultipleOptionOpen = _b[1];
    var _c = useState(defaultValue), value = _c[0], setValue = _c[1];
    useClickOutside(componentRef, function () {
        setOptionOpen(false);
        setMultipleOptionOpen(false);
    });
    var iconClasses = classNames("icon-wrapper", {
        "icon-active": multiple ? multipleOptionOpen : optionOpen,
    });
    var selectClasses = classNames("select", className, {
        "input-disabled": disabled,
    });
    var optionClasses = classNames("option", {
        "multiple-option-show": multiple && !multipleOptionOpen,
    });
    var handleClick = function () {
        if (!disabled && multiple) {
            setOptionOpen(true);
        }
        if (!disabled && !multiple) {
            setOptionOpen(!optionOpen);
        }
        else if (!disabled) {
            setMultipleOptionOpen(!multipleOptionOpen);
        }
    };
    console.log(optionOpen, multipleOptionOpen);
    var handleClickTimesDeleteOption = function (e, index) {
        e.stopPropagation();
        var newValue = __spreadArray([], (value || []));
        newValue.splice(index, 1);
        setValue(newValue);
    };
    var renderChildren = function () {
        var childrenComponent = Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "Option") {
                return cloneElement(childElement, {
                    index: "" + i,
                    setValue: setValue,
                    multiple: multiple,
                    setOptionOpen: setOptionOpen,
                    multipleInputValue: multiple ? value : undefined,
                });
            }
            else {
                console.error("Warning: Select has a child which is not a Option component");
            }
        });
        return React.createElement("ul", { className: optionClasses }, childrenComponent);
    };
    return (React.createElement("div", { className: selectClasses, ref: componentRef },
        React.createElement("div", { className: "input", onClick: handleClick },
            React.createElement("input", { className: "input-inner", name: name, value: multiple ? ((value === null || value === void 0 ? void 0 : value.length) ? " " : placeholder) : value, placeholder: placeholder, readOnly: true, disabled: disabled }),
            React.createElement(Icon, { icon: "angle-down", className: iconClasses }),
            multiple && value && (React.createElement("div", { className: "select-item" }, value.map(function (item, index) {
                return (React.createElement("span", { className: "title", key: index },
                    item,
                    React.createElement(Icon, { className: "times", icon: "times", onClick: function (e) { return handleClickTimesDeleteOption(e, index); } })));
            })))),
        optionOpen && renderChildren()));
};
export default Select;
