import React from 'react'

const TikerContact = () => {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6  pt-10">
        <div className=' bg-[#1E1E1E]'>
          <div className='p-6'>
            <h1 className='text-[#f8bc68] font-bold text-3xl py-3'>Need Help? Open a Ticket</h1>
            <p>Our support team will get back to you ASAP via email.</p>
          </div>

          <form action="" >
            <div className='  grid grid-cols-1 gap-5 sml:grid-cols-2  mx-6 '>
              <div className=" ">
                <label htmlFor="" className=''>Your Name </label>
                <input type="text" id=" name"
                  className="w-full p-2 mt-2  rounded-lg bg-[#3F181C] text-sm
                        focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600 outline-none transition duration-200"
                  placeholder='Enter Your Name'
                  required
                />

              </div>
              <div className=" ">
                <label htmlFor="">Your Email </label>
                <input type="text" id=" name"
                  className="w-full p-2 mt-2 mb-5 rounded-lg bg-[#3F181C] text-sm
                        focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600 outline-none transition duration-200
                        "
                  placeholder='Enter Your Email'
                  required
                />

              </div>

            </div>
            <div className='mx-6'>
              <textarea
                id="massge"
                required
                rows="5"
                placeholder='Write Your Message hare ...'
                className="w-full p-2 mt-2  rounded-lg bg-[#3F181C] text-sm 
                focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600 outline-none transition duration-200
                "

              >

              </textarea>
            </div>
            <button className='bg-[#D87229] mx-6 p-3 my-5 rounded-full px-[50px] grid-cols-1 max-w-full hover:bg-[#bb5309]'> Submit Ticket </button>
          </form>


        </div>
        <div className='bg-[#1E1E1E]  '>
          <div className='container py-5 px-6 '>
            <div>
              <h1 className='text-[#FDBA74] font-bold text-4xl'>Subscribe to receive future updates</h1>
              <p className='mt-3'> Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
              <hr className=' my-8 bg-[#374151] border-0 h-[2px] dark:bg-[#374151]' />
            </div>

          </div>
          <form action="" className=' mx-6' >

            <div>
              <input type="text"
                className=' 
                    mb-5 w-full
                    bg-[#3F181C]
                    text-sm
                    rounded-sm
                    p-2
                   focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600 outline-none transition duration-200

                    
                    '
                placeholder='Enter Your Name'
                required
              />
            </div>
            <div>
              <input type="text"
                className=' 
                     mb-5 w-full
                    bg-[#3F181C]
                    text-sm
                    rounded-sm
                    p-2
                focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600 outline-none transition duration-200
                     '
                placeholder='Enter Your Email'
                required
              />

            </div>
            <button className='bg-[#D87229] p-2 mb-5 rounded-md w-full hover:bg-[#bb5309]'> Submit </button>






          </form>








        </div>



      </div>

    </section>
  )
}

export default TikerContact
