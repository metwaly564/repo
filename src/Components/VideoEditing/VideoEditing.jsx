/* eslint-disable no-unused-vars */
import React from 'react'
import Photo from '../../assets/Vediting.png'
export default function VideoEditing() {
  return (
    <>
    <div className='flex'>
    <p className='text-2xl leading-loose' >Video editing is the process of manipulating and
      <br/> rearranging video shots to create a new work.
    <br/> It involves several stages and techniques to transform<br/> raw footage into a polished, final product that tells a story or conveys a message.</p>
    <img  className='w-96 rounded-lg hover:scale-110 transition-transform ease-in-out ' src={Photo} alt=""  />
    </div>
    </>
  )
}
