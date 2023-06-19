import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const RegisterForm = ({ handleRegister, setShowRegisterForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Wywołanie funkcji handleRegister z przekazaniem danych rejestracji
    try {
      await handleRegister(username, password);
      // Rejestracja udana, można wyczyścić formularz
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log('Błąd rejestracji:', error);
    }
  };

  return (
    <>
      <Navbar expand="lg" style={{backgroundColor: "#4f9ee5"}}>
        <Container>
          <Navbar.Brand>NoteIt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="mt-5 px-3 py-4 border d-flex flex-column align-items-center justify-content-center">
      <h2 className="h2 display-3">Formularz rejestracji</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column mb-2">
          <label className="small-label" htmlFor="username">
            Nazwa użytkownika:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column mb-2">
          <label className="small-label" htmlFor="password">
            Hasło:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-flex justify-content-between w-100">
          <button type="submit" className="mr-2">Zarejestruj</button>
          <button onClick={() => setShowRegisterForm(false)}>Anuluj</button>
        </div>
      </form>
    </div>
          </>
  );
  
  
  
    
  
};

export default RegisterForm;
