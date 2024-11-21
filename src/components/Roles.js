import React, { useState } from "react";

const RolesManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, role: "Admin", permissions: "Read, Write, Delete" },
    { id: 2, role: "Editor", permissions: "Read, Write" },
    { id: 3, role: "Viewer", permissions: "Read" },
  ]);
  const [newRole, setNewRole] = useState({ role: "", permissions: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editRoleId, setEditRoleId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddRole = () => {
    if (newRole.role && newRole.permissions) {
      setRoles([
        ...roles,
        { id: roles.length + 1, ...newRole },
      ]);
      setNewRole({ role: "", permissions: "" });
    } else {
      alert("Please provide both role and permissions.");
    }
  };

  const handleEditRole = (roleId) => {
    const roleToEdit = roles.find((role) => role.id === roleId);
    setNewRole({ role: roleToEdit.role, permissions: roleToEdit.permissions });
    setIsEditing(true);
    setEditRoleId(roleId);
  };

  const handleSaveEdit = () => {
    if (newRole.role && newRole.permissions) {
      const updatedRoles = roles.map((role) =>
        role.id === editRoleId
          ? { ...role, role: newRole.role, permissions: newRole.permissions }
          : role
      );
      setRoles(updatedRoles);
      setNewRole({ role: "", permissions: "" });
      setIsEditing(false);
      setEditRoleId(null);
    } else {
      alert("Please provide both role and permissions.");
    }
  };

  const handleDeleteRole = (roleId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this role?");
    if (confirmDelete) {
      const updatedRoles = roles.filter((role) => role.id !== roleId);
      setRoles(updatedRoles);
    }
  };

  const filteredRoles = roles.filter(
    (role) =>
      role.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.permissions.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Roles Management</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="mb-4 px-4 py-2 border border-gray-300 rounded"
        placeholder="Search Roles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Add/Edit Role Form */}
      <div className="mb-6">
        <input
          type="text"
          className="mr-2 px-4 py-2 border border-gray-300 rounded"
          placeholder="Role Name"
          value={newRole.role}
          onChange={(e) => setNewRole({ ...newRole, role: e.target.value })}
        />
        <input
          type="text"
          className="mr-2 px-4 py-2 border border-gray-300 rounded"
          placeholder="Permissions"
          value={newRole.permissions}
          onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
          onClick={isEditing ? handleSaveEdit : handleAddRole}
        >
          {isEditing ? "Save Edit" : "Add Role"}
        </button>
      </div>

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
            {filteredRoles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{role.id}</td>
                <td className="border border-gray-300 px-4 py-2">{role.role}</td>
                <td className="border border-gray-300 px-4 py-2">{role.permissions}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mr-2"
                    onClick={() => handleEditRole(role.id)}
                  >
                    Edit
                  </button>
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
