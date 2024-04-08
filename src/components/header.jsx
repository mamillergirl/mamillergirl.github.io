import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  const [selectedItem, setSelectedItem] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); // Close the menu after selecting an item
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header id="header" className="fixed z-10 top-0 flex justify-between align-middle bg-headerColor w-full h-16">
      <h1 className="sm:w-1/3 sm:ml-24 text-white p-4">Marisa Miller</h1>
      <div className="md:hidden relative" ref={menuRef}>
        {/* Hamburger icon */}
        <button onClick={toggleMenu} className="mr-4 mt-4 text-white text-3xl">
        <FontAwesomeIcon icon={faBars} />
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          
          <div className="fixed z-20 top-0 right-0 w-2/3 h-full bg-headerColor flex flex-col justify-center items-end">
            <button onClick={toggleMenu} className="absolute top-0 right-0 text-white text-3xl mr-4 mt-4">
            <FontAwesomeIcon icon={faTimes} />
        </button>
            <ul className="text-white text-2xl p-4">
              <li>
                <a href="#home" className={selectedItem === 'home' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className={selectedItem === 'skills' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className={selectedItem === 'projects' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className={selectedItem === 'resume' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('resume')}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className={selectedItem === 'contact' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
  
      <ul className="hidden md:flex mt-1 mr-40 w-1/3 flex text-white p-4 justify-evenly">
        <li>
          <a href="#home" className={selectedItem === 'home' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className={selectedItem === 'skills' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={selectedItem === 'projects' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className={selectedItem === 'resume' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('resume')}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" className={selectedItem === 'contact' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}
