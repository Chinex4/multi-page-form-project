import React from 'react'

const Input = ({ label, register, required, errors, ...props }) => {
    let inputClass = 'input w-full focus:outline-none focus:border-primary-purpleBlue bg-transparent text-black'

    if (errors[label]) {
        inputClass += ' border-primary-strawRed'
    } else {
        inputClass += ' border-neutral-lightGray'
    }
    return (
        <div className='space-y-1 mb-2'>
            <div className='flex justify-between'>
                <label htmlFor="name" className='text-primary-marineBlue'>
                    {label}
                </label>
                {errors[label] && (
                    <span className='text-primary-strawRed text-sm'>
                        This field is required
                    </span>
                )}
            </div>
            <input
                className={inputClass}
                name={label}
                {...register(label, { required })}
                {...props}
            />
        </div>
    )
}

export default Input
