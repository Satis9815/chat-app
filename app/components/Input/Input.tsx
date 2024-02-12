'use client'
import React from 'react'
import {UseFormRegister,FieldValues,FieldErrors} from "react-hook-form";
import clsx from "clsx";

interface InputProps{
    label:string,
    id:string,
    type?:string,
    required?:string,
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors,
    disabled?:boolean
}

const Input:React.FC<InputProps> = ({
    label,
    id,
    type,
    register,
    required,
    errors,
    disabled
}) => {
  return (
    <div className='mb-3'>
        <label className='block text-sm font-medium leading-6 text-gray-900 ' htmlFor={id}>{label}</label>
        <input
            type={type} 
            id={id}
            autoComplete={id}
            disabled={disabled}
            {...register(id,{required})}
            className={clsx(`
            form-input
            block
            w-full
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-600
            sm:text-sm
            sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
            )}
            />
    </div>
  )
}

export default Input