import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full md:w-[20rem] grow md:px-20 py-6 px-4 md:py-7 grid place-items-center'>
            <div className='text-center space-y-4'>
                <h1 className='text-primary-marineBlue text-3xl font-bold mt-3'>Error 404: Not Found!</h1>
                <p className='text-neutral-coolGray text-sm'>
                    The page you are trying to access is not available
                </p>
            </div>
        </div>
    )
}

export default NotFound
