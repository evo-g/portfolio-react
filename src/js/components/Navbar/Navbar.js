import React, { useState, useCallback, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const toggleOpen = useCallback(() => {
    setOpen(currentOpen => {
      return !currentOpen
    })
  }, [])

  return (
    <header ref={node}>
      <nav>
        {!open ?
          <>
            <span className='navbar-toggle' open={open} onClick={toggleOpen}>
              <i className='fas fa-bars'></i>
            </span>
            <ul className='desk-nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <a href='https://tinyurl.com/y7wt8w4r' target='_blank' rel='noopener'>Resume</a>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </>
          :
          <>
            <span className='navbar-toggle' open={open} onClick={toggleOpen}>
              <i class="fas fa-times"></i>
            </span>
            <ul className='top-nav'>
              <li>
                <Link to='/' open={open} onClick={toggleOpen}>Home</Link>
              </li>
              <li>
                <Link to='/about' open={open} onClick={toggleOpen}>About</Link>
              </li>
              <li>
                <Link to='/services' open={open} onClick={toggleOpen}>Services</Link>
              </li>
              <li>
                <a href='https://tinyurl.com/y7wt8w4r' target='blank' open={open} onClick={toggleOpen}>Resume</a>
              </li>
              <li>
                <Link to='/contact' open={open} onClick={toggleOpen}>Contact</Link>
              </li>
            </ul>
          </>
        }
      </nav>
    </header>
  )
}

export default Navbar;
