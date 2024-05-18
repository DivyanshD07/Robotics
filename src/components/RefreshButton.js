export default function RefreshButton({ refreshData }) {
    return <button className="px-4 py-1 rounded-lg bg-gray-600 text-white hover:bg-gray-500 hover:cursor-pointer" onClick={refreshData}>Refresh Data</button>;
  }
  