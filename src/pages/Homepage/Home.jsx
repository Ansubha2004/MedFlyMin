import React from 'react'
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import Navbar from './Homesection/Navbar.jsx';
import Welcomepage from './Homesection/Welcomepage.jsx';
export default function Home() {
  return (
    <>
        <Navbar/>
        <main className="relative w-screen h-auto">
            <Welcomepage/>
        </main>
        
    </>
  )
}
