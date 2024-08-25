/* eslint-disable no-unused-vars */
import React from 'react'
import Photo from '../../assets/Gdesign.png'
export default function GraphicDesign() {
  return (
    <>
    <div className='flex'>
    <p className='text-2xl leading-loose m-8' >Graphic design is a visual communication discipline that involves
    <br/> creating and combining symbols, images,
    <br/> and text to convey ideas and messages effectively.
    <br/> It plays a crucial role in various media,
    <br/>  including print, digital, and multimedia.</p>
    <img  className='w-96 rounded-lg hover:scale-110 transition-transform ease-in-out ' src={Photo} alt=""  />
    </div> 
    </>
     )
}
