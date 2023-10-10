import {FC, useEffect} from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import styles from './RegisterModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import GoogleSVG from '@/shared/lib/svg/google.svg';
import GithubSVG from '@/shared/lib/svg/github.svg';
import {authAPI} from "../../model/api/authApi";
import {onLoginModalClose, onLoginModalOpen} from "../../model/slices/loginModalSlice";
import { onRegisterModalClose} from "../../model/slices/registerModalSlice";
import { setUser,setIsAuth} from "../../model/slices/authSlice";
import {Heading} from "@/shared/ui/Heading/Heading";




export const RegisterModal: FC = () => {

  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.registerModal);

  const [registration,{isLoading, isSuccess}] = authAPI.useRegistrationMutation()

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

    useEffect(() => {
        if (isSuccess) toast.success('Registration successed')

    }, [isSuccess]);

    async function registrationHandler(data:FieldValues){
        try {

        const response = await registration(data)
        if ('data' in response) {
            localStorage.setItem('token', response?.data?.accessToken)
            dispatch(setUser(response.data))
            dispatch(setIsAuth(true))
            dispatch(onLoginModalClose())

        }
        } catch (e) {
            toast.error('Упс')
        }
    }


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
      registrationHandler(data)
  };

    const onToggle = () => {
        dispatch(onRegisterModalClose())
        dispatch(onLoginModalOpen())
    }

  const body = (
    <div className={styles.body}>
        <Heading
            title="Welcome to Hotel Finder"
            subtitle="Sign up"
        />
      <Input
        id="name"
        label="Name"
        register={register}
        errors={errors}
        disabled={isLoading}
        required
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
          Already have an account?
          {' '}
          <span onClick={onToggle}>Log in </span>
        </p>
      </div>

    </div>
  );

  return (
    <Modal
        disabled={isLoading}

        isOpen={isOpen}
      title="Register"
      onClose={() => dispatch(onRegisterModalClose())}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      body={body}
      footer={footer}
    />

  );
};
