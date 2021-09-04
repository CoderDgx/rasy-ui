import React from "react";
export declare type AlertType = "success" | "default" | "warning" | "danger";
interface AlertProps {
    title: string;
    className?: string;
    message?: string;
    type?: AlertType;
    closable?: boolean;
    onClose?: React.MouseEventHandler<SVGSVGElement>;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
