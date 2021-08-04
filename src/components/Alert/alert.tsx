import React, { useState } from 'react'
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons'
import Icon from '../Icon/icon';

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
  
  return isShow ? (
    <div className={classes} test-dataid="test-alert">
      <span>{title}</span>
      {closable ? <Icon icon="times" className="alt-close" onClick={() => console.log(123)} /> : null}
      {message ? <div className="alt-msg">{message}</div> : null}
    </div>
  ) : null;
}

Alert.defaultProps = {
  closable: true,
  type: "default"
}

export default Alert