import React, { CSSProperties, FC } from "react";
export interface OptionProps {
    index?: string;
    value: string;
    label?: string;
    disabled?: boolean;
    className?: CSSProperties;
    setValue?: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
    setOptionOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    multiple?: boolean;
    multipleInputValue?: string[];
}
export declare const Option: FC<OptionProps>;
export default Option;
