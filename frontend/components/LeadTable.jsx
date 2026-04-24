import {useState, useEffect} from 'react'

const LeadTable = () => {
  
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data as soon as the component loads.
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {

      // 1. Grab the token from the browser's memory
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/lead', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setLeads(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLoading(false);
    }
  };

  // 2. Handle the Status dropdown change
  const handleStatusChange = async (id, newStatus) => {
    try {

      const token = localStorage.getItem('token'); // Get the token
      console.log("Updating ID:", id, "with Token:", token);
      // Send the update to the backend
      const response = await fetch(`http://localhost:3000/api/lead/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify({status: newStatus})
      });

      if(response.ok) {
        // Instantly update the React UI without reloading the page
        setLeads(leads.map(lead => lead._id === id ? {...lead, status: newStatus} : lead));
      }

    } catch (error) {
      console.error('Error updating status:', error);      
    }
  
  }

  // 3. The Loading State UI
  if (loading) {
    return <div className="text-center py-10 text-gray-500 font-medium">Loading pipeline data...</div>;
  }

  // 4. The Main Table UI
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Client Name</th>
              <th className="p-4 font-semibold">Phone</th>
              <th className="p-4 font-semibold">Vehicle</th>
              <th className="p-4 font-semibold">Pipeline Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leads.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500">No leads in the system yet.</td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead._id} className="hover:bg-gray-50 transition-colors text-sm text-gray-800">
                  <td className="p-4 text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-medium">{lead.name}</td>
                  <td className="p-4">{lead.phone}</td>
                  <td className="p-4">{lead.vehicle}</td>
                  <td className="p-4">
                    {/* The Status Dropdown */}
                    <select
                      value={lead.status || 'New'}
                      onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                      className={`text-sm rounded-full px-3 py-1 font-medium border outline-none cursor-pointer transition-colors
                        ${lead.status === 'Closed' ? 'bg-green-50 text-green-700 border-green-200' : 
                          lead.status === 'Contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                          'bg-yellow-50 text-yellow-700 border-yellow-200'}`}
                    >
                      <option value="New">New Lead</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Quoted">Quoted</option>
                      <option value="Closed">Closed Won</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );


}

export default LeadTable