import { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/reset-password', { email });

      if (response.status === 200) {
        console.log('Password reset request sent successfully!');
        window.location.href = '/login'; // Redirect to login page
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error sending reset request:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Réinitialiser le mot de passe</h2>
      <form onSubmit={handleResetSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Envoyer</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ResetPassword;
