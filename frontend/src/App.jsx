import { useState } from 'react'


function App() {

  const [formData, setFromData] = useState({
    name:"",
    phone:"",
    vehicle:""
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800">Stake Secure</h1>
    </div>
  )
}

export default App
