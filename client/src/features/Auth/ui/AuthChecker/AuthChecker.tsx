import {useEffect} from "react";
import {authAPI} from "../../model/api/authApi";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {setIsAuth, setUser} from "../../model/slices/authSlice";

export const AuthChecker =()=>{

    const dispatch = useAppDispatch()
    const [refresh] = authAPI.useLazyRefreshQuery()

    async function refreshHandler  ()  {
        try {
            const user = await refresh('').unwrap()
            dispatch(setIsAuth(true))
            dispatch(setUser(user))
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            refreshHandler()
        }}, []);
return(<div />)
}