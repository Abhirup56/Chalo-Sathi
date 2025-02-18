import { useState } from 'react'
import MyMap from './MyMap'
import Header from '../Header'
import Booking from './Booking'
function Home() {
  return (
    <>
      <div className='h-screen bg-[#121a21]'>
      {/* <MyMap /> */}
      <MyMap />
      <div className='flex justify-center items-center m-10'>
        <Booking/>
      </div>
      </div>
    </>
  )
}
export default Home;