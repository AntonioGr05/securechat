import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import {auth} from './firebase'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    // Limpiar la suscripción al desmontar
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/Login" element={<Login />} />
        )}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/Login"} />} />
      </Routes>
    </Router>
  );
}

export default App;