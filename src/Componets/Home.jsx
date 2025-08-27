import React, { useState } from 'react'
import NavBar from './NavBar'
import BestCoffee from './BestCoffee'
import OurMenu from './OurMenu'
import Gallery from './Gallery'
import Persons from './Persons'
import TikerContact from './TikerContact'
import { gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,user1,user2,user3,user4,user5,mohamed } from '../assets'

const Linkes= [
    {id:1,Title:"Home"},
    {id:2,Title:"About"},
    {id:3,Title:"Contact"},
    {id:4,Title:"Support"},
    {id:5,Title:"Pricing"},
  ]

const Img_Gallary = [
{
 id:1,
 image:gallery1
},{ 
 id:2,
 image:gallery2
},{
 id:3,
 image:gallery3
},{
 id:4,
 image:gallery4
},{
 id:5,
 image:gallery5
},{
 id:6,
 image:gallery6
},


]

const User_profile =[{
  id:1,
  image:user1,
  name:"-Mona",
  tital:"Best Cofe shop in town"
},
{
id:2,
image:user2,
name:" -Deep",
tital:"Best Coffe shop in Staff"

},
{  id:3,
image:mohamed,
name:"-MohamedGamal",
tital:"Director of the Board of Directors"
},{  id:4,
image:user3,
name:"-Rahim",
tital:"Best Coffe shop in Staff"}
,{  id:5,
image:user4,
name:"-Sofya",
tital:"Best Coffe shop in Staff"},
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