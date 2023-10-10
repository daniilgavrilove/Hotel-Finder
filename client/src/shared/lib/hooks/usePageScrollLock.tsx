import React, {useEffect} from 'react'

export const usePageScrollLock = (open: boolean) => {

    useEffect(() => {
            if (open) {
                document.documentElement.classList.add('lock')
            }else {
                document.documentElement.classList.remove('lock')
            }
    }, [open]);

}