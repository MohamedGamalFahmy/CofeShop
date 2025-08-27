import { useState } from "react"
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { logo } from "../assets"; 


const NavBar = ({Linkes}) => {
    const [ isOpenMenu , setIsOpenMen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-[100%] z-50 bg-black  " >
        <nav className=" container mx-auto flex justify-around  items-center  border-red-50 py-4 ">
            <div> 
                <a href="/" className='flex text-center ' > 
                <img src={logo} alt="" className='w-[70px] h-[70px]' />
                <h1 className='text-[#ffffff] flex items-center ml-2 text-[40px]'> Coffe</h1>
            
                </a>
            </div>
            <div className='hidden lg:flex justify-around '>
                {Linkes.map((link) => (
                    <ul  key={link.id}  
                    className='flex text-white px-6 text-[20px]  hover:text-[#FB923C] '>
                        <li>
                            <a href="">{link.Title}</a>
                        </li>
                    </ul>
                ))}
            </div>
            <div>
                <button className= 'hidden lg:flex items-center text-center  text-white  border-2 border-white-500/100 p-6 hover:text-[#FB923C] hover:border-[#FB923C] rounded-lg font-bold w-[150px] h-[50px]  ' > Get Started </button>
            </div >
            <div className="lg:hidden">
                {!isOpenMenu ? (
                    <TiThMenu
                    className="text-3xl cursor-pointer"
                    onClick={() => setIsOpenMen(true)}
                    />

                    ) : (
                  <IoMdCloseCircle 
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsOpenMen(false)}
                 />
            )}
                
             </div>
        </nav>
          {isOpenMenu && (
            <div className="lg:hidden flex flex-col items-center bg-transparent ">
               {Linkes.map((link) => (
                    <ul className='flex text-white px-6 text-[20px]  hover:text-[#FB923C]  mt-4'>
                        <li key={link.id} >
                            <a href="">{link.Title}</a>
                        </li>
                    </ul>
                    ))}
           
             <div>
              <button className= ' text-white  my-4 border-2 border-white-500/100 p-2 hover:text-[#FB923C] hover:border-[#FB923C] rounded-lg font-bold w-[150px] h-[50px]' > Get Started </button>
             </div >
            </div>

        )}
     </div>
  )
}

export default NavBar