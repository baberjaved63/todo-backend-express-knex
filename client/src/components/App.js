import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import SignOut from "./SignOut";
import ProtectedRoute from "./ProtectedRoute";

const base_url = "http://localhost:5000";

function App() {
  return (
    <div>
      <ProtectedRoute />
    </div>
  );
}

export default App;
