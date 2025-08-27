import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";


const Foter = () => {
    const [show, setShow] = useState([
        { id: 1, icon: <FaFacebookF /> },
        { id: 2, icon: <FaTwitter /> },
        { id: 3, icon: <CiInstagram /> },
        { id: 4, icon: <FaLinkedinIn /> },

    ]);

    const [contact, setContact] = useState([
        {
            tital: "We are committed to delivering high-quality solutions and services to meet your needs. Our mission is to empower your digital presence."
        }
    ]);
    const [links, setLinks] = useState([
        { id: 1, Title: "Home" },
        { id: 2, Title: "About" },
        { id: 3, Title: "Contact" },
        { id: 4, Title: "Services" }
    ]);
    const [linkIcon, setLinkIcon] = useState([
        { id: 1, icon: < FaMapMarkerAlt />, title: "123 Street Name, City, Country" },
        { id: 2, icon: <FaPhoneAlt />, title: "+123456789" },
        { id: 3, icon: <MdEmail />, title: "info@example.com" }
    ]);


    return (
        <section>
            <div className='container mx-auto  pt-10'>
                <div className=' grid grid-cols-1 sml:grid-cols-2 md:grid-cols-3 gap-5  '>
                    <div>
                        <h1 className='text-[22px] font-bold text-[#FDBA74] mb-2'>About Us</h1>
                        {contact.map((item) => (
                            <div key={item.tital} className=' '>
                                <p className='text-[14px] font-normal text-[#B5D5DB]'>{item.tital}</p>
                            </div>

                        ))}
                    </div>
                    {/* ------------------------------------------------------------- */}
                    <div className=' sml:flex flex-col items-center'>
                        <h1 className='text-[22px] font-bold text-[#FDBA74] mb-2'>Quick Links</h1>
                        {links.map((item) => (
                            <div key={item.id} className=''>
                                <a href="/" className='text-[14px] font-normal text-[#B5D5DB] hover:text-[#5E66CF]'> {item.Title} </a>
                            </div>


                        ))}
                    </div>
                    {/* ---------------------------------------------------------------- */}
                    <div>
                        <h1 className='text-[22px] font-bold text-[#FDBA74] mb-2 '>Contact Us </h1>
                        {linkIcon.map((item)=>(
                            <div key={item.id} className='flex items-center gap-3 '>
                                <a href="" className='text-[#BB5309]'>{item.icon}</a>
                                <p className='text-[14px] font-normal text-[#B5D5DB]'>{item.title}</p>
                            </div>

                        ))}





                    </div>

                </div>

            </div>
            <hr className=' my-8 bg-[#374151] border-0 h-[1px] dark:bg-[#374151]' />
           <div className='container mx-auto mb-10 grid grid-cols-1   text-center md:grid-cols-2 justify-around '>
                <div className='flex flex-row text-center justify-center gap-4  p-4 md:p-0  text-[22px] '>
                    {show.map((item)=>(
                        <div key={item.id} className='  '>
                            <ul className=''>
                                 <a href="" className=' hover:text-[#BB5309]'>{item.icon} </a>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className=''>
                    <p>© 2025 Mohamed Gamal.  All Rights Reserved.</p>
                </div>
           </div>

        </section>
    )
}
export default Foter 