import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='header'>
      <Link href={"/"}> 
        <h1>Welcome To MY Portfolio</h1>
      </Link>
      <nav className='nav'> 
        <Link href={"/pages/home"}> 
          <p>Home</p>
        </Link>  
        <Link href={"/pages/contact"}> 
          <p>Contact</p>
        </Link> 
        <Link href={"/pages/about"}> 
          <p>About</p>
        </Link>  
      </nav>
    </div>
  )
}

export default Header;
