import React from 'react'
import Navbar from './Homesection/Navbar.jsx';
import Welcomepage from './Homesection/Welcomepage.jsx';
import Advantage from './Homesection/Advantage.jsx';
import Howitworks from './Homesection/Howitworks.jsx';
import Problem from './Homesection/Problem.jsx';
import Solution from './Homesection/Solution.jsx';
import Contact from './Homesection/Contact.jsx';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
        <Navbar/>
        <main className="inter-font flex-1 w-full max-w-full overflow-x-hidden bg-[#FFF2E950]">
            <Welcomepage/>
            <Advantage/>
            <Howitworks/>
            <Problem/>
            <Solution/>
            <Contact/>
        </main>
    </div>
  )
}
