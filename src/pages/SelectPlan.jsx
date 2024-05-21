import React, { useContext, useState } from 'react'
import { PlansContext } from '../context/PlanContext'
import { useNavigate } from 'react-router-dom'

const SelectPlan = () => {
    const {
        monthlyPlans,
        yearlyPlans,
        selectedMonthlyPlan,
        selectedYearlyPlan,
        num,
        toggleYearly,
        getMonthlyDetails,
        getYearlyDetails,
        handleTogglePlan
        
    } = useContext(PlansContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (selectedMonthlyPlan.title !== "" || selectedYearlyPlan.title !== "") {
            navigate("/add-ons")
        } else {
            alert("Please Choose a plan!")
        }
    } 
    return (
        <div className='w-full md:w-[20rem] grow md:px-20 py-6 px-4 md:py-7'>
            <h1 className='text-3xl font-[800] text-primary-marineBlue'>
                Select Plan
            </h1>
            <p className='text-neutral-coolGray mt-3 mb-6'>
                You have the option of monthly or yearly billing.
            </p>

            <form onSubmit={handleSubmit} action="">
                {/* Monthly Plans */}
                {!toggleYearly && (
                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                        {
                            monthlyPlans.map(({ id, image, title, price }, i) => {
                                return (
                                    <div
                                        onClick={() => getMonthlyDetails(i)}
                                        key={id}
                                        className={`flex space-x-4 md:space-x-0 md:flex-col 
                                     md:justify-between p-4 md:h-[200px] grow
                                     border rounded-md 
                                     hover:border-[#473dff]
                                    hover:bg-neutral-alabaster cursor-pointer

                                    ${num != (i + 1) ? 'bg-white' : 'bg-neutral-alabaster'}
                                    ${num != (i + 1) ? 'border-neutral-coolGray' : 'border-primary-purpleBlue'}
                                    
                                `}>
                                        <img className='w-10' src={image} alt={title} />
                                        <div className='space-y-1'>
                                            <h4 className='font-bold text-[#02295a]'>{title}</h4>
                                            <p className='text-sm text-[#9699ab]'>${price}/mo</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
                {/* Yearly Plans */}
                {toggleYearly && (
                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                        {
                            yearlyPlans.map(({ id, image, title, price, extra }, i) => {
                                return (
                                    <div
                                        onClick={() => getYearlyDetails(i)}
                                        key={id}
                                        className={`flex space-x-4 md:space-x-0 md:flex-col 
                                     md:justify-between p-4 md:h-[200px] grow
                                     border rounded-md 
                                     hover:border-[#473dff]
                                    hover:bg-neutral-alabaster cursor-pointer

                                    ${num != (i + 1) ? 'bg-white' : 'bg-neutral-alabaster'}
                                    ${num != (i + 1) ? 'border-neutral-coolGray' : 'border-primary-purpleBlue'}
                                    
                                `}>
                                        <img className='w-10' src={image} alt={title} />
                                        <div className='space-y-1'>
                                            <h4 className='font-bold text-[#02295a]'>{title}</h4>
                                            <p className='text-sm text-[#9699ab]'>${price}/yr</p>
                                            <p className='text-sm text-primary-marineBlue'>{extra}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                )}

                <div className='mt-4 grid place-items-center bg-neutral-alabaster py-3 rounded-xl space-x-4'>
                    <div className='flex items-center'>
                        <p className={`
                            ${toggleYearly ? 'text-neutral-coolGray' : 'text-primary-marineBlue'}
                            font-semibold
                        `}>Monthly</p>
                        <input data-theme="dark" onClick={handleTogglePlan} type="checkbox" className='toggle block mx-3 bg-white'/>
                        <p className={`
                            ${toggleYearly ? 'text-primary-marineBlue' : 'text-neutral-coolGray '}
                            font-semibold
                        `}>Yearly</p>

                    </div>
                </div>

                <div 
                    className='mt-20 flex justify-between items-center'
                >
                    <button 
                        onClick={() => navigate('/')}
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


            </form >
        </div >
    )
}

export default SelectPlan
