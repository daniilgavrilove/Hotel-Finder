import React from "react";

export interface CategoryBoxProps {
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    label: string;
    selected?: boolean;
}