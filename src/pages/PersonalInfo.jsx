import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/UI/Input'
import { useNavigate } from 'react-router-dom'

const PersonalInfo = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    }
        = useForm()
    const navigate = useNavigate()
    const onSubmit = data => {
        // alert(JSON.stringify(data))

        if (data) {
            navigate('/selectplan')
        }
    }


    return (
        <div className='w-full md:w-[20rem] grow md:px-20 py-6 px-4 md:py-7'>
            <h1 className='text-3xl font-[800] text-primary-marineBlue'>
                Personal info
            </h1>
            <p className='text-neutral-coolGray mt-3 mb-6'>
                Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='space-y-4'>
                <Input errors={errors} label={'Name'} register={register} required type="text" placeholder="e.g Stephen King"/>
                <Input errors={errors} label={'Email Address'} register={register} required type="email" placeholder="e.g. stephenking@lorem.com" />
                <Input errors={errors} label={'Phone Number'} register={register} required type="text" placeholder="e.g. +1 234 567 890" />
                <div className='flex justify-end items-end py-1 mt-[120px] md:mt-[26px]'>
                    <button
                        type='submit'
                        className='bg-primary-marineBlue text-white border-none px-3 py-2 hover:opacity-75 transition-all duration-500 rounded-md'
                    >
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo
