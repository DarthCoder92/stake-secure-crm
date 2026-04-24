import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='bg-white shadow-sm border-b border-gray-200'>
      <div className='max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8'>
        <div className='flex justify-between items-center h-16'>

          {/* Left side: Brand Logo*/}
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' >
              <img src='/stakesecure.png' alt='Stake secure logo' className='h-12 w-auto'/>
            </Link>

          </div>

          {/* Right side: Navigation Links*/}
          <div className='flex items-center space-x-6'>
            {/*The link back topublic form */}
            <Link to="/" className='text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors'>
              Get a Quote
            </Link>

            {/* The link to private admin dashboard */}
            <Link to="/login" className='bg-gray-900 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm'>
              Admin Login
            </Link>


          </div>

          

        </div>

      </div>

    </nav>
  )
};

export default NavBar