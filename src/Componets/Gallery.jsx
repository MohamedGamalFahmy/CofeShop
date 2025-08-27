import React from 'react'

const Gallery = ({ Data }) => {
    return (
        <section>
            <div className="container mx-auto mb-10">
                <div>
                    <h1 className="text-4xl text-white font-bold text-center pt-10 pb-3 ]">Gallery</h1>
                    < div className='border w-[200px] text-center mx-auto mb-6' >
                    </div>
                    
                </div>
                <div className="container mx-auto grid grid-cols-1 sm:w-[100%]  rounded-[2rem] items-center text-center sml:grid-cols-1 md:grid-cols-2 max-w-[100%] lg:grid-cols-3 lg:max-w-[100%]">


                                {Data.map((item) => (
                                    <div key={item.image} >
                                        <img src={item.image}
                                            className='w-[100%] h-[300px] sm:flex justify-around mx-auto  p-5 rounded-[2rem] hover:scale-110 transition duration-300	 '
                                            alt="image" />
                                    </div>
                                ))}
                </div>

            </div>


        </section>

    )
}

export default Gallery

