import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'error'
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 🛑 Make sure this port matches your backend (5000)
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token); // Save the VIP Pass
        navigate('/admin'); // Redirect to dashboard
      } else {
        setStatus('error'); // Trigger the red error UI
      }
    } catch(err) {
      console.error("Login fetch error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Admin Access</h2>
          <p className="text-sm text-gray-500 mt-2">Sign in to manage your pipeline</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="admin@stakesecure.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md text-center font-medium">
              Invalid admin credentials. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-md hover:bg-black transition-colors disabled:bg-gray-400 mt-2"
          >
            {status === 'loading' ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;