import React from "react";

export interface CategoryInputProps {
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}