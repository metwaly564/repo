// import React from 'react'
import V from '../../assets/Vediting.png';
import M from '../../assets/Mgraphics.png';
import G from '../../assets/Gdesign.png';

export default function Home() {
  return (
    <>
    <div className="container flex gap-20 justify-center my-16">
        
        <img className='w-80 rounded-xl' src={V} alt="" />
        <img className='w-80 rounded-xl' src={M} alt="" />
        <img className='w-80 rounded-xl' src={G} alt="" />
    </div>
    </>
  )
}
