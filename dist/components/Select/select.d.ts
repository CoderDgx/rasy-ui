import { FC, CSSProperties } from "react";
export interface SelectProps {
    defaultValue?: string | string[];
    placeholder?: string;
    disabled?: boolean;
    multiple?: boolean;
    className?: CSSProperties;
    name?: string;
    onChange?: (selectedValue: string, selectedValues: string[]) => void;
    onVisibleChange?: (visible: boolean) => void;
}
export declare const Select: FC<SelectProps>;
export default Select;
