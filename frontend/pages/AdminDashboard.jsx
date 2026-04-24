import LeadTable from '../components/LeadTable';

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pipeline Dashboard</h1>
        <p className="text-gray-500 mt-2">Manage and update your active motor insurance leads.</p>
      </div>

      {/* The Data Table */}
      <LeadTable />

    </div>
  );
};

export default AdminDashboard;