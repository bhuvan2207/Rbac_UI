import React, { useState } from "react";

const AccessControlManagement = () => {
  const [accessControl, setAccessControl] = useState([
    { id: 1, user: "Bhuvan", role: "Admin", accessLevel: "Full Access" },
    { id: 2, user: "Ritvik", role: "Editor", accessLevel: "Partial Access" },
    { id: 3, user: "Sharan", role: "Viewer", accessLevel: "Read-Only" },
  ]);

  const handleDeleteAccess = (accessId) => {
    const updatedAccess = accessControl.filter((access) => access.id !== accessId);
    setAccessControl(updatedAccess);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Access Control Management</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
        onClick={() => alert("Add Access functionality coming soon!")}
      >
        Add Access Control
      </button>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">User</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Access Level</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accessControl.map((access) => (
              <tr key={access.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{access.id}</td>
                <td className="border border-gray-300 px-4 py-2">{access.user}</td>
                <td className="border border-gray-300 px-4 py-2">{access.role}</td>
                <td className="border border-gray-300 px-4 py-2">{access.accessLevel}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                    onClick={() => handleDeleteAccess(access.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessControlManagement;
