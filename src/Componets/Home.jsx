import React, { useState } from 'react'
import NavBar from './NavBar'
import BestCoffee from './BestCoffee'
import OurMenu from './OurMenu'
import Gallery from './Gallery'
import Persons from './Persons'
import TikerContact from './TikerContact'

const Linkes= [
    {id:1,Title:"Home"},
    {id:2,Title:"About"},
    {id:3,Title:"Contact"},
    {id:4,Title:"Support"},
    {id:5,Title:"Pricing"},
  ]

const Img_Gallary = [
{
  image:"/src/assets/gallery-1.jpg",},
  {
  image:"/src/assets/gallery-2.jpg",},
  {
  image:"/src/assets/gallery-3.jpg",},
  {
  image:"/src/assets/gallery-4.jpg",},
  {
  image:"/src/assets/gallery-5.jpg",},
  {
  image:"/src/assets/gallery-6.jpg",
}

]

const User_profile =[{
  id:1,
  image:"/src/assets/user-1.jpg",
  name:"-Mona",
  tital:"Best Cofe shop in town"
},
{
id:2,
image:"/src/assets/user-4.jpg",
name:" -Soha",
tital:"Best Coffe shop in Staff"

},
{  id:3,
image:"/src/assets/Pmohamed.jpg",
name:"-MohamedGamal",
tital:"Director of the Board of Directors"
},
]

const Home = () => {
  return (
    <>
        <NavBar Linkes={Linkes} />    
        <BestCoffee />
        
        <OurMenu/>
        <Gallery Data={Img_Gallary} />
        <Persons Per={User_profile}/>
        <TikerContact/>

    </>
  )
}

export default Home