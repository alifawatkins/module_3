import { useState } from "react";
import styles from './AuthPage.module.css';
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";
import Logo from '../components/Logo';

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}

export default AuthPage;