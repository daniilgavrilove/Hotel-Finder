import { useEffect, useState } from "react"


export const useWindowWidth = (): number => {
	const [width, setWidth] = useState<number>(window.innerWidth)
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)

		return () => window.addEventListener('resize', handleResize)

	}, [window.innerWidth])
	return width

}
