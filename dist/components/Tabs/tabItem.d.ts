import React from "react";
export interface TabItemProps {
    label: any;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
    index?: number;
    isTitle?: boolean;
}
declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
