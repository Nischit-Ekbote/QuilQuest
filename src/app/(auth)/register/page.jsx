'use client'

import { useState } from 'react';
import { setUser } from "@/lib/actions";
import { useUser } from '@/context/UserContext';
import styles from "./register.module.css"

export default function RegisterForm() {
  const { isUser, setIsUser, setUserName } = useUser();

  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const { name, email, password } = formData;

    if (!name || !password || !email) {
      setMessage('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const result = await setUser({ name, email, password });
      setMessage(result.msg || result.errMsg);
      if (result.success) {
        setFormData({ name: '', email: '', password: '' });
        setIsUser(true);
        setUserName(name);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.component}>
      {isUser ? <p>Welcome, {formData.name}! You are now registered.</p> : <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name" 
            required 
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email" 
            required 
            disabled={isLoading}
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
            placeholder="Password (min. 8 characters)" 
            required 
            disabled={isLoading}
            minLength={8}
          />
        </div>
        {message && <p role="alert">{message}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Register'}
        </button>
      </form>}
    </div>
  );
}