import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
