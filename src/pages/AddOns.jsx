import React, { useContext } from 'react'
import { AddOnsContext } from '../context/AddOnsContext'
import { useNavigate } from 'react-router-dom'
import { PlansContext } from '../context/PlanContext'

const AddOns = () => {
    const {
        addOns,
        num,
        handleChange
    } = useContext(AddOnsContext)

    const {
        toggleYearly
    } = useContext(PlansContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/summary")
    }

    return (
        <div className="w-full md:w-[20rem] grow md:px-20 py-6 px-4 md:py-7">
            <h1 className='text-2xl text-[#02295a] md:text-3xl font-bold'>Pick add-ons</h1>
            <p className='mt-2 text-[#d6d9e6]'>Add-ons help advance your gaming experience</p>

            <form action="" onSubmit={handleSubmit}>

                <div className='mt-6 flex flex-col space-y-4'>
                    {
                        addOns.map(({ id, title, description, price }, i) => {
                            return (
                                <div
                                    key={id}
                                    className={`
                                        ${num != (i + 1) ? 'bg-white' : 'bg-neutral-alabaster'}
                                        ${num != (i + 1) ? 'border-neutral-coolGray' : 'border-primary-purpleBlue'}
                                        flex items-center space-x-4 md:space-x-4 md:flex-row 
                                        p-4
                                        border border-[#d6d9e6] rounded-md 
                                        hover:border-[#473dff]
                                        hover:bg-neutral-alabaster cursor-pointer
                                `}>
                                    <input 
                                        onChange={e => handleChange(e, i)}
                                        className='checkbox' 
                                        type="checkbox" 
                                        name="add-on" 
                                        id="" 
                                    />
                                    <div className='flex justify-between items-center grow'>
                                        <div className='space-y-1'>
                                            <h4 className='font-bold text-[#02295a]'>{title}</h4>
                                            <p className='text-sm text-[#9699ab]'>{description}</p>
                                        </div>
                                        <p className='text-[#473dff]'>+${toggleYearly ? price + '0' : price}/{toggleYearly ? 'yr' : 'mo'}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <div
                    className='mt-20 flex justify-between items-center'
                >
                    <button
                        onClick={() => navigate('/selectplan')}
                        className='btn bg-transparent border-none shadow-none
                        text-neutral-coolGray hover:bg-transparent 
                        hover:text-primary-marineBlue'>
                        Go Back
                    </button>
                    <button
                        type='submit'
                        className='
                            btn bg-primary-marineBlue border-none
                        text-white hover:bg-primary-marineBlue hover:opacity-75
                        '
                    >
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddOns
