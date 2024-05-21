import React from 'react'
import goodImg from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {
    return (
        <div className='w-full md:w-[20rem] grow md:px-20 py-6 px-4 md:py-7 grid place-items-center'>
            <div className='text-center space-y-4'>
                <img src={goodImg} alt="completed img" className='mx-auto' />
                <h1 className='text-primary-marineBlue text-3xl font-bold mt-3'>Thank you!</h1>
                <p className='text-neutral-coolGray text-sm'>
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default ThankYou
