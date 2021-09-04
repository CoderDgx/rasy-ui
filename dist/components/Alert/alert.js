import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
var Alert = function (props) {
    var _a;
    var title = props.title, className = props.className, message = props.message, type = props.type, closable = props.closable;
    var _b = useState(true), isShow = _b[0], setIsShow = _b[1];
    var classes = classNames("alt", className, (_a = {},
        _a["alt-" + type] = type,
        _a["alt-show"] = isShow,
        _a));
    return (React.createElement(Transition, { in: isShow, timeout: 300, animation: "zoom-in-left", wrapper: true },
        React.createElement("div", { className: classes, "test-dataid": "test-alert" },
            React.createElement("span", null, title),
            closable ? (React.createElement(Icon, { icon: "times", className: "alt-close", onClick: function () {
                    setIsShow(false);
                } })) : null,
            message ? React.createElement("div", { className: "alt-msg" }, message) : null)));
};
Alert.defaultProps = {
    closable: true,
    type: "default",
};
export default Alert;
