'use client'

import { useState } from 'react';
import { validateData } from "@/lib/actions";
import { useUser } from '@/context/UserContext';
import styles from "./login.module.css"
import Link from 'next/link';

export default function LoginForm() {
  const { isUser, setIsUser, userName, setUserName } = useUser();

  const [formData, setFormData] = useState({ name: '', password: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const { name, password } = formData;

    if (!name || !password) {
      setMessage('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const result = await validateData({ name, password });
      setMessage(result.msg || result.errMsg);
      if (result.msg === "Login Successful") {
        setIsUser(true);
        setUserName(name);
        setFormData({ name: '', password: '' }); // Clear form data
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className={styles.component}>
      {isUser ? 
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        // textAlign:"center",
        justifyContent:"center"
      }}>
        <p>Welcome, {userName}! You are now logged in.</p>
        <Link href={`/users/${userName}`}>DashBoard</Link>
      </div>
      : <form onSubmit={handleSubmit}>
          <h1>Login</h1>
        <div className={styles.loginBox}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name" 
            required 
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input 
            type="password" 
            id="pass" 
            name="password" 
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password" 
            required 
          />
        </div>
        {isUser && message && <p role="alert">{message}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>}
    </div>
  );
}