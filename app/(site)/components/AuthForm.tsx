'use client';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input/Input';
import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';
export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleAuthForm = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'LOGIN') {
      //Axios Register
    }
    if (variant === 'REGISTER') {
      // NextAuth SignIn
    }
  };
  const socialAction = (action: string) => {
    setIsLoading(true);

    //Next Social signin
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(submitForm)}>
          {variant === 'REGISTER' && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <Button type="submit" disabled={isLoading} fullWidth>
            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className='mt-3 flex gap-2'>
            <AuthSocialButton icon={BsGithub} onClick={()=>socialAction("github")}/>
            <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction("google")}/>
          </div>
        </div>
        <div className='flex gap-2 justify-center mt-6 px-2 text-gray-500'>
            <div>
                {variant==="LOGIN"?"New to Messanger":"Already have an account"}
            </div>
            <div onClick={toggleAuthForm}
            className='
            underline cursor-pointer
            '
            >
                {variant === "LOGIN"  ? "Create an account" :"Login"}
            </div>

        </div>
      </div>
    </div>
  );
}
