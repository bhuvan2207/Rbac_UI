import React, { useState } from "react";

const AccessControlManagement = () => {
  const [accessControl, setAccessControl] = useState([
    { id: 1, user: "Bhuvan", role: "Admin", accessLevel: "Full Access" },
    { id: 2, user: "Ritvik", role: "Editor", accessLevel: "Partial Access" },
    { id: 3, user: "Sharan", role: "Viewer", accessLevel: "Read-Only" },
  ]);
  const [newAccess, setNewAccess] = useState({ user: "", role: "", accessLevel: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editAccessId, setEditAccessId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteAccess = (accessId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this access?");
    if (confirmDelete) {
      const updatedAccess = accessControl.filter((access) => access.id !== accessId);
      setAccessControl(updatedAccess);
    }
  };

  const handleAddAccess = () => {
    if (!newAccess.user || !newAccess.role || !newAccess.accessLevel) {
      alert("Please fill in all fields.");
      return;
    }
    const newAccessId = accessControl.length ? accessControl[accessControl.length - 1].id + 1 : 1;
    const newAccessData = { id: newAccessId, ...newAccess };
    setAccessControl([...accessControl, newAccessData]);
    setNewAccess({ user: "", role: "", accessLevel: "" });
    setIsFormVisible(false);
  };

  const handleEditAccess = (accessId) => {
    const accessToEdit = accessControl.find((access) => access.id === accessId);
    setEditAccessId(accessId);
    setNewAccess({ ...accessToEdit });
  };

  const handleSaveEdit = () => {
    setAccessControl(
      accessControl.map((access) =>
        access.id === editAccessId ? { ...access, ...newAccess } : access
      )
    );
    setEditAccessId(null);
    setNewAccess({ user: "", role: "", accessLevel: "" });
  };

  const filteredAccessControl = accessControl.filter(
    (access) =>
      access.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      access.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      access.accessLevel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Access Control Management</h1>
      
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
        onClick={() => setIsFormVisible(true)}
      >
        Add Access Control
      </button>

      {isFormVisible && (
        <div className="mb-6 border p-4 rounded bg-gray-100 shadow-md">
          <h2 className="text-lg font-semibold mb-4">{editAccessId ? "Edit" : "Add"} Access Control</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">User:</label>
            <input
              type="text"
              value={newAccess.user}
              onChange={(e) => setNewAccess({ ...newAccess, user: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter user name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Role:</label>
            <input
              type="text"
              value={newAccess.role}
              onChange={(e) => setNewAccess({ ...newAccess, role: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter user role"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Access Level:</label>
            <select
              value={newAccess.accessLevel}
              onChange={(e) => setNewAccess({ ...newAccess, accessLevel: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select Access Level</option>
              <option value="Full Access">Full Access</option>
              <option value="Partial Access">Partial Access</option>
              <option value="Read-Only">Read-Only</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              onClick={editAccessId ? handleSaveEdit : handleAddAccess}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600"
            >
              {editAccessId ? "Save Changes" : "Add Access"}
            </button>
            <button
              onClick={() => setIsFormVisible(false)}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search by user, role, or access level"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded w-1/2"
        />
      </div>

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
            {filteredAccessControl.map((access) => (
              <tr key={access.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{access.id}</td>
                <td className="border border-gray-300 px-4 py-2">{access.user}</td>
                <td className="border border-gray-300 px-4 py-2">{access.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      access.accessLevel === "Full Access"
                        ? "bg-green-500"
                        : access.accessLevel === "Partial Access"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {access.accessLevel}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 mr-2"
                    onClick={() => handleEditAccess(access.id)}
                  >
                    Edit
                  </button>
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
