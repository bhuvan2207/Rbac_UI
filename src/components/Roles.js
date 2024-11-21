import React, { useState } from "react";

const RolesManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, role: "Admin", permissions: "Read, Write, Delete" },
    { id: 2, role: "Editor", permissions: "Read, Write" },
    { id: 3, role: "Viewer", permissions: "Read" },
  ]);

  const handleDeleteRole = (roleId) => {
    const updatedRoles = roles.filter((role) => role.id !== roleId);
    setRoles(updatedRoles);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Roles Management</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
        onClick={() => alert("Add Role functionality coming soon!")}
      >
        Add Role
      </button>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Permissions</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{role.id}</td>
                <td className="border border-gray-300 px-4 py-2">{role.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {role.permissions}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                    onClick={() => handleDeleteRole(role.id)}
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

export default RolesManagement;
