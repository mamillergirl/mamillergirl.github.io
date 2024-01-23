import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className='nameLogo'>
        Marisa Miller
      </div>
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
      <span></span>
      <span></span>
      <span></span>
      </div>
      <div className={`pages ${isMenuOpen ? 'show-menu' : ''}`}>
        <Link to='/' onClick={handleMenuClick}>Home</Link>
        <Link to='/about' onClick={handleMenuClick}>About</Link>
        <Link to='/skills' onClick={handleMenuClick}>Skills</Link>
        <Link to='/projects' onClick={handleMenuClick}>Projects</Link>
      </div>
    </div>
  );
}

export { Header };
