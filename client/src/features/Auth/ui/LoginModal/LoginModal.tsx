import {FC, useEffect} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {useAppDispatch, useAppSelector} from "@/shared/lib/hooks/redux";
import {authAPI} from "../../model/api/authApi";
import {Input} from "@/shared/ui/Input/Input";
import {Button} from "@/shared/ui/Button/Button";
import GoogleSVG from "@/shared/lib/svg/google.svg";
import GithubSVG from "@/shared/lib/svg/github.svg";
import {Modal} from "@/shared/ui/Modal/Modal";
import styles from '../RegisterModal/RegisterModal.module.scss'
import {onLoginModalClose} from "../../model/slices/loginModalSlice";
import { onRegisterModalOpen} from "../../model/slices/registerModalSlice";
import {setIsAuth, setUser} from "../../model/slices/authSlice";
import {Heading} from "@/shared/ui/Heading/Heading";

export const LoginModal: FC = () => {

    const dispatch = useAppDispatch()
    const {isOpen}=useAppSelector(state=>state.loginModal)
    const [login,{isLoading, isSuccess,data:a}] = authAPI.useLoginMutation()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (isSuccess) toast.success('Log in successed')

    }, [isSuccess]);


    async function loginHandler(data:FieldValues){
        try {
                    const response = await login(data)
        if ('data' in response) {
            localStorage.setItem('token', response?.data?.accessToken)
            dispatch(setUser(response.data))
            dispatch(setIsAuth(true))
            dispatch(onLoginModalClose())

        }
        }catch (e){
            toast.error('Упс')
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        loginHandler(data)
    };

    const onToggle = () => {
        dispatch(onLoginModalClose())
        dispatch(onRegisterModalOpen())
    }



    const body = (
        <div className={styles.body}>
            <Heading
                title="Welcome back"
                subtitle="Log in"
            />
                     <Input
                id="email"
                label="Email"
                register={register}
                errors={errors}
                disabled={isLoading}
                required
            />
            <Input
                id="password"
                label="Password"
                register={register}
                errors={errors}
                disabled={isLoading}
                required
            />

        </div>
    );

    const footer = (
        <div className={styles.footer}>
            <Button
                disabled={isLoading}

                label="Continue with google"
                onClick={() => {}}
                outline
                icon={GoogleSVG}
            />
            <Button
                disabled={isLoading}
                label="Continue with github"
                onClick={() => {}}
                outline
                icon={GithubSVG}
            />
            <div className={styles.bottomText}>
                <p>
                    Do not have an account?
                    {' '}
                    <span onClick={onToggle}>Sign in </span>
                </p>
            </div>

        </div>
    );

    return (
        <Modal
            disabled={isLoading}

            isOpen={isOpen}
            title="Log in"
            onClose={() => dispatch(onLoginModalClose())}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel="Continue"
            body={body}
            footer={footer}
        />
    );
};