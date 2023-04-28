import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { getUser } from './utilities/users-service';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;