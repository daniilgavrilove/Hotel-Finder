import {FC, useCallback, useState} from "react";
import cn from 'classnames'
import Dropzone, {FileRejection, FileWithPath, useDropzone} from "react-dropzone";
import {ImageUploadProps} from './ImageUpload.props'
import styles from './ImageUpload.module.scss'
import CloudUploadSVG from '@/shared/lib/svg/cloud-upload.svg'
import CloseSVG from '@/shared/lib/svg/close.svg'
import {Button} from "@/shared/ui/Button/Button";




export const ImageUpload: FC<ImageUploadProps> = (props) => {

    const {className, maxFiles, multiple, rules, label,value,onChange,error} = props

    const onDrop = useCallback((acceptedFiles: any) => {
        if (multiple) {
            onChange([...value, ...acceptedFiles])
        } else {
            onChange(acceptedFiles)
        }
    }, [value, multiple, onChange])

    const {fileRejections, getRootProps, getInputProps,} = useDropzone({onDrop, maxFiles, multiple});

    const removeFile = (file: File) => {
        const newFiles = [...value]
        newFiles.splice(newFiles.indexOf(file), 1)
        onChange(newFiles)
    }

    const removeAll = () => {
        onChange([])
    }


    return (
        <div className={cn(styles.ImageUpload, className)}>
           <div  className={styles.dropZone}
                 {...getRootProps()}
            >
               <CloudUploadSVG
                className={styles.icon}

               />
               <input
                   {...getInputProps()}
                   // value={value}
                   onChange={onChange}
                   // onBlur={field.onBlur}
               />
               <p>Put in files or press for select!</p>
               {error && <div className={styles.error}>{String(error)}</div>}

           </div>
            {value.length
                ? <>
                    <div className={styles.imageItems}>
                        {Array.isArray(value as FileWithPath[]) && value.map((file: FileWithPath, index: React.Key) => (
                        <>

                            <div className={styles.imageItem} key={index}>
                                <div className={styles.icon}>
                                    <img alt="Icon"
                                         height={70}
                                         src={URL.createObjectURL(file)
                                    }/>
                                    {/* <InsertDriveFile/> */}
                                </div>
                                <div className={styles.text}
                                >
                                    <div className={styles.textPrimary}>{file.name} </div>
                                    <div className={styles.textSecondary}>
                                        {`${Math.round(file.size / 1024) / 1000  } кб.`}
                                    </div>
                                </div>
                                <div onClick={() => removeFile(file)} className={styles.cross}>
                                    <CloseSVG height="30px"
                                              width="30px"/>
                                </div>
                            </div>
                                <hr/>
                        </>

                        ))}
                    </div>
                    <Button label="Delete all" onClick={removeAll}  />
                </>
                : ''
            }

            {fileRejections.length ? <div className={styles.dndError}>Слишком много файлов</div> : ''}
        </div>
    );
};