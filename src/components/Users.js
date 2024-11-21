import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Bhuvan", role: "Admin", status: "Active" },
    { id: 2, name: "Ritvik", role: "Editor", status: "Inactive" },
    { id: 3, name: "Sharan", role: "Editor", status: "Inactive" },
    { id: 4, name: "Arjun", role: "Viewer", status: "Active" },
    { id: 5, name: "Antragya", role: "Editor", status: "Inactive" }, // Corrected duplicate ID
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [showForm, setShowForm] = useState(false);
  const [editUserId, setEditUserId] = useState(null); // Track the user being edited
  const [editName, setEditName] = useState(""); // Track the new name being edited
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleAddUser = () => {
    if (!newUser.name || !newUser.role) {
      alert("Please fill in both Name and Role fields.");
      return;
    }
    const newUserId = users.length ? users[users.length - 1].id + 1 : 1; // Generate a new ID
    const newUserData = { id: newUserId, ...newUser, status: "Active" };
    setUsers([...users, newUserData]);
    setNewUser({ name: "", role: "" }); // Reset the form
    setShowForm(false); // Hide the form after adding the user
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterStatus === "" || user.status === filterStatus)
  );

  const handleDeleteUser = (userId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (isConfirmed) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditUserId(userId);
    setEditName(userToEdit.name); // Pre-fill the current name
  };

  const handleSaveEdit = () => {
    setUsers(
      users.map((user) =>
        user.id === editUserId ? { ...user, name: editName } : user
      )
    );
    setEditUserId(null); // Reset the editing state
    setEditName("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {!showForm && (
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
          onClick={() => setShowForm(true)}
        >
          Add User
        </button>
      )}

      {showForm && (
        <div className="mb-6 border p-4 rounded bg-gray-100 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Add New User</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name:</label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter user name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Role:</label>
            <input
              type="text"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter user role"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleAddUser}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600"
            >
              Add
            </button>
            <button
              onClick={() => setShowForm(false)}
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
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded w-1/2"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border rounded w-1/4"
        >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="px-2 py-1 border rounded"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {editUserId === user.id ? (
                    <>
                      <button
                        className="px-3 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mr-2"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                        onClick={() => setEditUserId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="px-3 py-1 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 mr-2"
                        onClick={() => handleEditUser(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
