/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className="bg-violet-800 p-3 fixed top-0 left-0 right-0 text-white">
   <ul  className="flex gap-20 mx-12 py-2" >
    <li > <NavLink className="p-3 font-bold" to="">Home</NavLink></li>
    <li > <NavLink className="p-3 font-bold" to="MotionGrphics">Motion Graphics</NavLink></li>
    <li > <NavLink className="p-3 font-bold" to="VideoEditing">Video Editing</NavLink></li>
    <li > <NavLink className="p-3 font-bold" to="Graphic">Graphic design</NavLink></li>
   </ul>
    </div>
  );
}
