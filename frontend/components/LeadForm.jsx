import {useState} from 'react'

const LeadForm = () => {
  
  // 1. State to hold the form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: ''
  });

  // 2. State to handle the UI feedback (Loading spinner, success status)
  const [status, setStatus] = useState('idle');

  // 3. Update the state as the user types
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };

  // 4. Send your data to your Node/ Express backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the page from reloading
    setStatus('loading');


    try {
      const response = await fetch('http://localhost:3000/api/lead', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      if(response.ok) {

        setStatus('success');
        setFormData({name: '', phone: '', vehicle: ''}); // Clear the form

        setTimeout(() => setStatus('idle'), 4000); // Remove the success message after 4 seconds.

      } else {
        setStatus('error');
      }

    } catch (error) {
      console.error('Failed to fetch:', error);
      setStatus('error');
    }
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md border border-gray-100'>
      <h2 className='text-2xl font-bold text-gray-900 mb-6'>Get Your Quote</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name Input */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
          <input 
            type='text'
            name='name'
            required
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
            placeholder='Rohit Sharma'
          />
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Vehicle Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Registration or Model</label>
          <input 
            type="text" 
            name="vehicle"
            required
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="MH 01 AB 1234"
          />
        </div>

        {/* Dynamic submit button */}
        <button 
          type='submit'
          disabled={status === 'loading'}
          className='w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 mt-4'
        >
          {status === 'loading' ? 'Processing...' : 'Request Quote'}
        </button>

        {/* Feedback Messages */}
        {status === 'success' && (
          <div className='p-3 bg-green-50 text-green-700 text-sm rounded-md mt-4 text-center font-medium'>
          Success! Your lead has been securely created. We will contact you shortly.
        </div>
        )}

        {status === 'error' && (
          <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md mt-4 text-center font-medium">
            Api request error. 
          </div>
        )}


      </form>

    </div>
  );

};

export default LeadForm