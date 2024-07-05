import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AdminUsers from "./admin-users";
const AdminDash = () => {
  return (
    <div>
      Here is the admin Dashboard
      <Link to="/admin/users">AdminUsers</Link>
      <Routes>
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default AdminDash;
