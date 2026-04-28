import React from 'react'
import LeadForm from '../components/LeadForm.jsx';

const LandingPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

        {/* LEFT COLUMN: Copy & Image */}
        <div>
          <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6'>
            <span className='text-blue-600'>Motor Insurance</span> done right!
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            Get the right coverage. Hassle free claims settlement experience.
          </p>
          
          <div className='flex space-x-4 mb-10'> {/* Added mb-10 to push the image down a bit */}
            <div className='flex items-center text-sm text-gray-500 font-medium'>
              <svg className='w-5 h-5 text-green-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d='M5 13l4 4L19 7'></path></svg>
              Multiple Insurers
            </div>

            <div className="flex items-center text-sm text-gray-500 font-medium">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Cashless Claims Facility
            </div>
          </div>

          {/* --- NEW IMAGE SECTION --- */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-lg hidden sm:block">
            <img 
             
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
              alt="Modern car representing motor insurance" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

        </div>

        {/* RIGHT COLUMN: Lead Form */}
        <div className='max-w-md w-full mx-auto lg:mx-0 lg:ml-auto'>
          <LeadForm />
        </div>

      </div>
      {/* --- FOOTER SECTION --- */}
      <footer className="mt-20 border-t border-gray-200 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-gray-900 text-lg">Stake Secure</span>
            <p className="mt-1">Enterprise InsurTech</p>
          </div>

          <div className="flex space-x-8">
            <a href="mailto:support@stakesecure.com" className="hover:text-blue-600 transition-colors">
              support@stakesecure.com
            </a>
            <span>Mumbai, MH</span>
          </div>

        </div>
      </footer>
    </div>
  )
};

export default LandingPage;