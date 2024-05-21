import React from 'react'
import { data } from '../data/data'
import { NavLink, useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navLinkClasses = `font-[500] w-[2rem] h-[2rem] rounded-[50%] flex items-center justify-center text-primary-lightBlue cursor-pointer`
    return (
        <aside
            className='absolute top-0 left-0 md:relative nav-background w-full px-8
                    pt-8 pb-8 md:pb-0 md:basis-[30%] md:rounded-lg flex justify-center md:flex-col 
                    md:justify-start md:space-y-4 '
        >
            {
                data.map((navItem, i) => {
                    return (
                        <div key={i}
                            className='flex items-center space-x-4'    //md:mb-10
                        >
                            <NavLink
                                style={({ isActive }) => ({
                                    color: `${isActive ? 'black' : 'hsl(206, 94%, 87%)'}`,
                                    backgroundColor: `${isActive ? 'hsl(228, 100%, 84%)' : 'transparent'}`,
                                    border: `${isActive ? 'none' : '1px solid hsl(206, 94%, 87%)'}`,
                                    fontWeight: 500,
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                })}
                                to={navItem.linkTo}
                            >
                                {navItem.id}
                            </NavLink>
                            <div>
                                <p className='hidden md:block uppercase text-neutral-coolGray text-[14px]'>
                                    {navItem.step}
                                </p>
                                <p className='hidden md:block uppercase text-neutral-lightGray font-[500] text-[14px]'>
                                    {navItem.about}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </aside>
    )
}

export default SideBar
