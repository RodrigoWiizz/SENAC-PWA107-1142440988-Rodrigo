import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Financiamento() {


  const[valores, setValores] = useState(
    { 
      parcela2: "xxxxxxxxx",
      parcela3: "xxxxxxxxx",
      parcela4: "xxxxxxxxx"
    }
  );
  const juros= { parcelado2: 1.2,  parcelado3: 1.4, parcelado4: 1.6 };
  return (
    <Container className="main-container d-grid h-100">
      <Form className='text-center'>
        <img 
        className='mb-4 bootstrap-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/71/GNUstep_logo.svg"
        alt="Bootstrap 5"/>
        <h3>Simulação de Financiamento</h3>
        <Form.Group>
          <Form.Control type="text" size="lg" placeholder='Valor Solicitado' autoComplete="username"
            onChange={(valor) => setValores({
              parcela2: (valor.target.value * juros.parcelado2)/ 2,
              parcela3: (valor.target.value * juros.parcelado3)/ 3,
              parcela4: (valor.target.value * juros.parcelado4)/ 4,
            })} 
            className='position-relative'>
          </Form.Control>
        </Form.Group>
        <p>
          Os juros para 2x: { (juros.parcelado2 * 100) - 100 }%
          <br></br>
          Valor de cada parcela: { valores.parcela2}
        </p>
        <p>
          Os juros para 3x: { (juros.parcelado3 * 100) - 100 }%
          <br></br>
          Valor de cada parcela: { valores.parcela3}
        </p>
        <p>
          Os juros para 4x: { (juros.parcelado4 * 100) - 100 }%
          <br></br>
          Valor de cada parcela: { valores.parcela4 }
        </p>

      </Form>
    </Container>
  );
}

export default Financiamento;