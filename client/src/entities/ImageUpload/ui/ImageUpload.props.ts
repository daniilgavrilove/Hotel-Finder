import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

export interface ImageUploadProps {
    label:string
    maxFiles?:number
    rules?:any
    multiple?:boolean
    className?: string
    value: any
    onChange: (value:any)=>void
    error:string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}