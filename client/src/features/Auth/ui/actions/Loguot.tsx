import {FC, ReactNode} from "react";
import {authAPI, IUser, setIsAuth, setUser} from "@/features/Auth";
import {useAppDispatch} from "@/shared/lib/hooks/redux";

interface LogoutProps {
    children: ReactNode
}

export const Logout: FC<LogoutProps> = ({children}) => {

    const dispatch = useAppDispatch()
    const [logout] = authAPI.useLogoutMutation()

    async function logoutHandler(){
        try {
        await logout('')
        localStorage.removeItem('token')
        dispatch(setUser({} as IUser))
        dispatch(setIsAuth(false))
        } catch (e) {
            console.log(e)
        }
    }

    return (
      <button
          type="button"
          onClick={logoutHandler}
      >
          {children}
      </button>
    )
}