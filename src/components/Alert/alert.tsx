import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

export type AlertType = "success" | "default" | "warning" | "danger";

interface AlertProps {
  title: string;
  className?: string;
  message?: string;
  type?: AlertType;
  closable?: boolean;
  onClose?: React.MouseEventHandler<SVGSVGElement>;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { title, className, message, type, closable } = props;

  const [isShow, setIsShow] = useState<boolean>(true);

  const classes = classNames("alt", className, {
    [`alt-${type}`]: type,
    "alt-show": isShow,
  });

  return (
    <Transition in={isShow} timeout={300} animation="zoom-in-left" wrapper>
      <div className={classes} test-dataid="test-alert">
        <span>{title}</span>
        {closable ? (
          <Icon
            icon="times"
            className="alt-close"
            onClick={() => {
              setIsShow(false);
            }}
          />
        ) : null}
        {message ? <div className="alt-msg">{message}</div> : null}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  closable: true,
  type: "default",
};

export default Alert;
