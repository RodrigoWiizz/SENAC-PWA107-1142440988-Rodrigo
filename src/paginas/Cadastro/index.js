import './index.css';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Cadastro() {

  const[email, setEmail] = useState();
  const[senha, setSenha] =useState();

  return (
    <Container className="main-container d-grid h-100">
      <Form className='text-center'>
        <img 
        className='mb-4 bootstrap-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/71/GNUstep_logo.svg"
        alt="Bootstrap 5"/>
        <h3>Cadastre-se agora</h3>
        <Form.Group>
          <Form.Control type="email" size="lg" placeholder='Email' autoComplete="username" 
            onChange={(valor) => setEmail(valor.target.value)} className='position-relative'>
          </Form.Control>
          <Form.Control type="password" size="lg" placeholder='Senha' autoComplete="current-password" 
            onChange={(valor) => setSenha(valor.target.value)} className='position-relative'>
          </Form.Control>
          <Form.Control type="submit"></Form.Control>
        </Form.Group>
        <p>Seu email é: { email }</p>
        <p>Sua senha é: { senha }</p>
      </Form>
    </Container>
  );
}

export default Cadastro;