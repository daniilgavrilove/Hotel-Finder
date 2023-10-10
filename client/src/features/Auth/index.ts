export { RegisterModal } from './ui/RegisterModal/RegisterModal';
export { onRegisterModalOpen,onRegisterModalClose, registerModalSlice } from './model/slices/registerModalSlice';
export { onLoginModalOpen,onLoginModalClose,loginModalSlice } from './model/slices/loginModalSlice';
export {AuthChecker} from './ui/AuthChecker/AuthChecker'

export { setIsAuth,setUser,authSlice } from './model/slices/authSlice';
export {authAPI} from './model/api/authApi'
export type {IUser} from './model/types/IUser'

