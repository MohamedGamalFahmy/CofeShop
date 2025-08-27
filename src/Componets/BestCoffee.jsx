import React from 'react'
import { imgHero } from '../assets'

const BestCoffee = () => {
  return (
    <section className="mt-[100px] container mx-auto max-w-[100%] ">
        <div className=' grid grid-cols-1 md:grid-cols-2 md:p-[100px] gap-8 '>
            <div className=' top-8 text-4xl w-[50%]sm:text-center items-center mx-3 '> 
                <h1 className='text-[#FDBA74] text-5xl font-bold mt-4 '>Best Coffee</h1>
                <br />
                <h1 className='text-3xl font-extrabold'>Make Your Day Great With Our Special Coffee</h1>
                <br />
                <p className='text-[18px] font-normal'>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                <div className='md:flex-col  ' >
                    <button className='bg-[#F3961B]  rounded-full p-[15px] mx-3 my-5 text-2xl  hover:bg-[#3F181C]'> Order Now</button>
                    <button className='border rounded-full p-[15px] text-2xl '> Contact Us</button>
                </div>

            </div>
            
            <div >
                <img src={imgHero} alt="" className=' relative  w-[800px] h-[600px] top-[-50px]'/>
            </div>
          


        </div>



    </section>
  )
}

export default BestCoffee