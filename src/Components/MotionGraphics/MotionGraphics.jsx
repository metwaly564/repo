/* eslint-disable no-unused-vars */
import React from 'react'
import Photo from '../../assets/Mgraphics.png'
export default function MotionGraphics() {
  return (
    <>
        <div className='flex'>
    <p className='text-2xl leading-loose m-8' >Motion graphics is a field of design that combines graphic design 
      <br/>elements with animation to create moving visuals.
      <br/> It encompasses a wide range of applications,
      <br/> from animated text and logos to complex video sequences and visual effects.</p>
    <img  className='w-96 rounded-lg' src={Photo} alt=""  />
    </div>
    </>
  )
}
