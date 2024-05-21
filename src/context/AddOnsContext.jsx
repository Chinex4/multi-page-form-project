import React, { createContext, useState } from 'react'

export const AddOnsContext = createContext()

const AddOnsContextProvider = ({ children }) => {
    const [addOns, setAddOns] = useState([
        {
            id: 1,
            title: "Online service",
            description: "Access to multiplayer games",
            price: 1
        },
        {
            id: 2,
            title: "Larger Storage",
            description: "Extra 1TB of cloud save",
            price: 2

        },
        {
            id: 3,
            title: "Customizable Profile",
            description: "Custom theme on your profile",
            price: 2
        },
    ])

    const [num, setnum] = useState(0);

    const [selectedAddOns, setselectedAddOns] = useState([]);

    const handleChange = (e, i) => {
        setselectedAddOns(prevSelectedAddOns => [
            ...prevSelectedAddOns,
            addOns[i]
        ])

        setnum(i + 1)
    }

    const providerValue = {
        addOns,
        selectedAddOns,
        setselectedAddOns,
        num,
        setnum,
        handleChange
    }

    return (
        <AddOnsContext.Provider value={providerValue}>
            {children}
        </AddOnsContext.Provider>
    )
}

export default AddOnsContextProvider
