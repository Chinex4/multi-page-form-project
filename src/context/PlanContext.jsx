import React, { createContext, useState } from 'react'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
export const PlansContext = createContext()

const PlansContextProvider = ({ children }) => {
    const [toggleYearly, setToggleYearly] = useState(false)
    const [num, setNum] = useState(0)
    
    const [monthlyPlans, setMonthlyPlans] = useState([
        {
            id: 1,
            image: arcade,
            title: "Arcade",
            price: 9
        },
        {
            id: 2,
            image: advanced,
            title: "Advanced",
            price: 12
        },
        {
            id: 3,
            image: pro,
            title: "Pro",
            price: 15
        },
    ])

    const [yearlyPlans, setYearlyPlans] = useState([
        {
            id: 1,
            image: arcade,
            title: "Arcade",
            price: 90,
            extra: "2 months free"
        },
        {
            id: 2,
            image: advanced,
            title: "Advanced",
            price: 120,
            extra: "2 months free"
        },
        {
            id: 3,
            image: pro,
            title: "Pro",
            price: 150,
            extra: "2 months free"

        },
    ])

    const [selectedMonthlyPlan, setselectedMonthlyPlan] = useState({
        title: "",
        price: null
    });
    const [selectedYearlyPlan, setselectedYearlyPlan] = useState({
        title: "",
        price: null
    });


    const getMonthlyDetails = id => {
        setselectedMonthlyPlan(prevMonthlyplan => {
            return {
                ...prevMonthlyplan,
                title: monthlyPlans[id].title,
                price: monthlyPlans[id].price
            }
        })

        setNum(id + 1)
    }
    const getYearlyDetails = id => {
        setselectedYearlyPlan(prevYearlyPlan => {
            return {
                ...prevYearlyPlan,
                title: yearlyPlans[id].title,
                price: yearlyPlans[id].price
            }
        })

        setNum(id + 1)
    }

    const handleTogglePlan = () => {
        setToggleYearly(!toggleYearly)
    }

    

    const providerValue = {
        monthlyPlans,
        setMonthlyPlans,
        yearlyPlans,
        setYearlyPlans,
        selectedMonthlyPlan,
        setselectedMonthlyPlan,
        selectedYearlyPlan,
        setselectedYearlyPlan,
        toggleYearly,
        num,
        getMonthlyDetails,
        getYearlyDetails,
        handleTogglePlan
    }



    return (
        <PlansContext.Provider value={providerValue}>
            {children}
        </PlansContext.Provider>
    )
}

export default PlansContextProvider
