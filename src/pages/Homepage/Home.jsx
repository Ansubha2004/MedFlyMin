import React from 'react'
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import Navbar from './Homesection/Navbar.jsx';
import Welcomepage from './Homesection/Welcomepage.jsx';
import Advantage from './Homesection/Advantage.jsx';
import Howitworks from './Homesection/Howitworks.jsx';
import Problem from './Homesection/Problem.jsx';
import Solution from './Homesection/Solution.jsx';
import Contact from './Homesection/Contact.jsx';

export default function Home() {
  return (
    <>
        <Navbar/>
        <main className="relative w-screen h-auto">
            <Welcomepage/>
            <Advantage/>
            <Howitworks/>
            <Problem/>
            <Solution/>
            <Contact/>
        </main>
        
    </>
  )
}
