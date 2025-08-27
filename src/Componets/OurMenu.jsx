import React from 'react'
const Data= [ {
    "id": 1,
     image:"src/assets/burger-frenchfries.png",
     title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 2,
    image:"src/assets/coffee-hero-section.png",
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 3,
    image:"src/assets/cold-beverages.png",
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 4,
    image:"src/assets/special-combo.png",
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id": 5,
    image:"src/assets/desserts.png",
    title :'Hot Beverages',
     dic :'Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?'
},
{
    "id":6,
    image:"/src/assets/refreshment.png",
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