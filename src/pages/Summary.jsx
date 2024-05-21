import React, { useContext } from 'react'
import { PlansContext } from '../context/PlanContext'
import { AddOnsContext } from '../context/AddOnsContext'
import { Link, useNavigate } from 'react-router-dom'

const Summary = () => {
    const {
        toggleYearly,
        selectedMonthlyPlan,
        selectedYearlyPlan,
        setselectedMonthlyPlan,
        setselectedYearlyPlan,
        setToggleYearly,
    } = useContext(PlansContext)

    const {
        selectedAddOns,
        setselectedAddOns
    } = useContext(AddOnsContext)

    const navigate = useNavigate()

    const totalPriceofAddOns = selectedAddOns.reduce((accumulator, item) => {
        return accumulator + item.price
    }, 0)

    let priceOfPlanChosen = !toggleYearly ? selectedMonthlyPlan.price : selectedYearlyPlan.price

    const totalPrice = priceOfPlanChosen + +totalPriceofAddOns

    const handleChange = () => {
        setToggleYearly(false)
        setselectedMonthlyPlan({
            title: '',
            price: null
        })
        selectedYearlyPlan({
            title: '',
            price: null
        })

        setselectedAddOns([])

    }
    return (
        <div className='w-full md:w-[20rem] grow md:px-20 py-6 px-4 md:py-7'>
            <h1 className='text-3xl font-[800] text-primary-marineBlue'>
                Finishing up
            </h1>
            <p className='text-neutral-coolGray mt-3 mb-6'>
                Double-check everything looks OK before confirming.
            </p>

            <div className='bg-neutral-alabaster rounded-md py-4 px-5'>
                <div className='flex justify-between items-center pb-4 border-b-[1px]'>
                    <div>
                        <p className='text-primary-marineBlue font-bold'>
                            {!toggleYearly ? (
                                selectedMonthlyPlan.title + ' (Monthly)'
                            ) : (
                                selectedYearlyPlan.title + ' (Yearly)'
                            )}
                        </p>
                        <Link to={'/selectplan'} onClick={handleChange} className='underline text-neutral-coolGray'>Change</Link>
                    </div>
                    <p className='text-primary-marineBlue font-bold'>
                        ${!toggleYearly ? (
                            selectedMonthlyPlan.price + '/mo'
                        ) : (
                            selectedYearlyPlan.price + '/yr'
                        )}
                    </p>
                </div>

                <ul className='mt-4 space-y-2'>
                    {
                        selectedAddOns.map(selectedAddOn => <li className='flex justify-between items-center'>
                            <span className='text-neutral-coolGray'>
                                {selectedAddOn.title}
                            </span>
                            <span className='text-primary-marineBlue'>
                                ${selectedAddOn.price}{toggleYearly ? '/yr' : '/mo'}
                            </span>
                        </li>
                        )
                    }
                </ul>

            </div>

            <div className='py-4 px-5 mt-4 flex justify-between'>
                <p className='text-neutral-coolGray'>Total {
                    toggleYearly ? '(per year)' :
                        '(per month)'
                }</p>

                <p className='text-xl font-bold text-primary-marineBlue'>
                    ${totalPrice}
                </p>
            </div>

            <div
                className='mt-5 flex justify-between items-center'
            >
                <button
                    onClick={() => navigate('/add-ons')}
                    className='btn bg-transparent border-none shadow-none
                        text-neutral-coolGray hover:bg-transparent 
                        hover:text-primary-marineBlue'>
                    Go Back
                </button>
                <button
                    onClick={() => navigate('/thank-you')}
                    className='
                            btn bg-primary-marineBlue border-none
                        text-white hover:bg-primary-marineBlue hover:opacity-75
                        '
                >
                    Next Step
                </button>
            </div>


        </div >
    )
}

export default Summary
