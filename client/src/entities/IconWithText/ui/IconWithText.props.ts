import React, {ReactNode} from "react";

export interface IconWithTextProps {
    size?: number
    avatar?: ReactNode
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>
    mainText:string
    secondaryText:string
    className?: string
}