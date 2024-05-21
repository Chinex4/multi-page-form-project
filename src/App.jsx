import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo'
import SideBar from './components/SideBar'
import SelectPlan from './pages/SelectPlan'
import PlansContextProvider from './context/PlanContext'
import AddOns from './pages/AddOns'
import AddOnsContextProvider from './context/AddOnsContext'
import Summary from './pages/Summary'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'


function App() {
  return (
    <AddOnsContextProvider>
      <PlansContextProvider>
        <BrowserRouter>
          <div className='md:w-full md:min-h-screen md:grid md:place-items-center px-4'>
            <div className='mt-36 md:mt-0 bg-white w-full md:w-[60rem] md:h-[35rem] rounded-xl shadow-xl
                      p-4 flex flex-col md:flex-row justify-between mb-10 md:mb-0'
            >
              <SideBar />
              <Routes>
                <Route path='/' element={<PersonalInfo />}></Route>
                <Route path='/selectplan' element={<SelectPlan />}></Route>
                <Route path='/add-ons' element={<AddOns />}></Route>
                <Route path='/summary' element={<Summary />}></Route>
                <Route path='/thank-you' element={<ThankYou />}></Route>
                <Route path='*' element={<NotFound />}></Route>
              </Routes>
            </div>
          </div>

        </BrowserRouter>
      </PlansContextProvider>
    </AddOnsContextProvider>
  )
}

export default App
