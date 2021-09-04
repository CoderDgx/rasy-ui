import React from "react";
import { TabItemProps } from "./tabItem";
declare type TabsType = "line" | "card";
declare type SelectCallback = (selectedIndex: number) => void;
export interface TabsProps {
    defaultIndex?: number;
    className?: string;
    onSelect?: SelectCallback;
    type?: TabsType;
    style?: React.CSSProperties;
    item?: TabItemProps[];
}
interface ITabContext {
    index: number;
    onSelect?: SelectCallback;
}
export declare const TabConxt: React.Context<ITabContext>;
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
