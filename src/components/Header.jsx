import { Bars3Icon } from '@heroicons/react/24/solid'
import React, {useState} from 'react'

function Header() {

    const [toggle, setToggle] = useState(false);

    return(<>
        <header className="flex justify-between px-5 py-3 secondary">
        <a className="font-bold text-sky-300" href="#home">Vishva</a>
            <nav className="hidden md:block">
                <ul className="flex text-white text-[15px] gap-1">
                    <li className='abc'><a href="#home">Home</a></li>
                    <li className='abc'><a href="#about">About</a></li>
                    <li className='abc'><a href="#projects">Projects</a></li>
                    <li className='abc'><a href="#resume">Resume</a></li>
                    <li className='abc'><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {toggle && <nav className="block md:hidden pt-8">
                <ul onClick={() => setToggle(!toggle)} className="flex flex-col text-white mobile-nav">
                    <li className="pt-5"><a href="/">Home</a></li>
                    <li className="pt-5"><a href="#about">About</a></li>
                    <li className="pt-5"><a href="#projects">Projects</a></li>
                    <li className="pt-5"><a href="#resume">Resume</a></li>
                    <li className="pt-5"><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggle(!toggle)} className='block md:hidden'><Bars3Icon className='text-white h-7'/></button>
        </header>
    </>);
}

export default Header;