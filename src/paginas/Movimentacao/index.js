import { Container} from "react-bootstrap";

function Movimentacao() {
    return (
      <Container className="main-container d-grid h-100">
        <div className='text-center'>
        <img 
          className='mb-4 bootstrap-logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/71/GNUstep_logo.svg"
          alt="Bootstrap 5"/>
          <h3>Conta corrente</h3>
        </div>
      </Container>
    );
  }
  
  export default Movimentacao;