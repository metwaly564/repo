// import React from 'react'
import V from '../../assets/Vediting.png';
import M from '../../assets/Mgraphics.png';
import G from '../../assets/Gdesign.png';

export default function Home() {
  return (
    <>
    <div className="container flex gap-20 justify-center my-16">
        
        <img className='w-80 rounded-xl hover:scale-110 transition-transform ease-in-out ' src={V} alt="" />
        <img className='w-80 rounded-xl hover:scale-110 transition-transform ease-in-out ' src={M} alt="" />
        <img className='w-80 rounded-xl hover:scale-110 transition-transform ease-in-out ' src={G} alt="" />
    </div>
    </>
  )
}
