import React from 'react'

import LeadForm from '../components/LeadForm.jsx';

const LandingPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

        {/*Left column: The pitch */}
        <div>
          <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6'>
            Enterprise-Grade <br />
            <span className='text-blue-600'>Motor Insurance</span> Routing.
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            Experience lightning-fast premium calculations and secure lead tracking. Submit your vehicle details to see our real-time data pipeline in action.
          </p>
          <div className='flex space-x-4'>
            <div className='flex items-center text-sm text-gray-500 font-medium'>
              <svg className='w-5 h-5 text-green-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d='M5 13l4 4L19 7'></path></svg>
              Real-Time Sync
            </div>

            <div className="flex items-center text-sm text-gray-500 font-medium">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Secure Pipeline
            </div>

          </div>
        </div>

        {/* Right column: The Form */}
        <div className='max-w-md w-full mx-auto lg:mx-0 lg:ml-auto'>
          <LeadForm />
        </div>

      </div>

    </div>
  )
};

export default LandingPage