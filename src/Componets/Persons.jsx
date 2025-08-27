
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Persons = ({Per}) => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <section >
        <div className= 'bg-[#252525] py-[40px] '>
            
                <div className='container mx-auto' >
                    <h1 className='text-center font-bold text-[30px]'> Testimoials </h1>
                </div>
                <div className=' w-[100px] mx-auto my-2 border '> </div> 
                <div className='container mx-auto'>
                   <Swiper
                   spaceBetween={30}
                   centeredSlides={true}
                   autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                   }}

                   modules={[Autoplay, Pagination, Navigation]}
                   onAutoplayTimeLeft={onAutoplayTimeLeft}
                   className="mySwiper"

                   >
                    {Per.map((item)=>(

                            <SwiperSlide key={item.id}>
                                <div  className='flex flex-col items-center text-center py-3 mt-10'>
                                    <img src={item.image}
                                    className='w-[100px] h-[100px] rounded-full'
                                    alt="" />
                                    <p>{item.tital}</p>
                                    <h1>{item.name}</h1>
                                    
                                </div>
                            </SwiperSlide>
                    ))}
                   <div className="autoplay-progress" slot="container-end">
                     <svg viewBox="0 0 48 48" ref={progressCircle}>
                       <circle cx="24" cy="24" r="20"></circle>
                     </svg>
                     <span ref={progressContent}></span>
                   </div>
                   </Swiper>
                </div>
        </div>
    </section>  
    
)
}

export default Persons

