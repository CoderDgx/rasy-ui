import React, { useState } from 'react'
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons'

export type AlertType = "success" | "default" | "warning" | "danger";

interface AlertProps {
  title: string;
  className?: string;
  message?: string;
  type?: AlertType;
  closable?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
   
const Alert: React.FC<AlertProps> = (props) => {
  const {
    title,
    className,
    message,
    type,
    closable,
  } = props;

  const [isShow, setIsShow] = useState<boolean>(true)

  const classes = classNames("alt", className, {
    [`alt-${type}`]: type,
  })
  
  return (
    isShow?
    <div className={classes}>
      <span>{title}</span>
      {closable? <CloseOutlined onClick={() => setIsShow(false)} className="alt-close"/> : null}
      {message? <div className="alt-msg">{message}</div>: null}
    </div> : null
  );
}

Alert.defaultProps = {
  closable: true,
  type: "default"
}

export default Alert