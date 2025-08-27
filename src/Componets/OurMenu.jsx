import React from 'react'
import { img1,img2,img3,img4,img5,imgHero } from '../assets'
const Data= [ {
    "id": 1,
     image:img1,
     title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 2,
    image:imgHero,
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 3,
    image:img2,
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 4,
    image:img3,
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 5,
    image:img4,
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id":6,
    image:img5,
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},

]

const OurMenu = () => {
  return (
    <section className='  bg-[#252525] '>
        <div className="container mx-auto pb-[100px]">
            <div>
                <h1 className="text-4xl text-white font-bold text-center pt-10  mb-4">Our Menu</h1>
                < div className='border w-[200px] text-center mx-auto' >
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-[40px] p-[10px] my-[50px] sm:items-center text-center'>
            {Data.map((item)=>(
                <div key={item.id} className='bg-[#1E1E1E] p-[10px] flex flex-col text-center items-center rounded-lg '  >
                    <img src={item.image} alt="" className='w-[200px]  h-[200px]  '  />
                    <h1 className='text-[22px] font-bold py-[20px]'>{item.title}</h1>
                    <p className='text-neutral-100 font-normal'>{item.dic}</p>         
                </div>
                    
            ))}
            </div>

       
                
            
            

        
        </div>

    </section>
  )
}

export default OurMenu