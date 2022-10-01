import { Container} from "react-bootstrap";

function SobreNos() {
    return (
      <Container className="main-container d-grid h-100">
        <div className='text-center'>
        <img 
          className='mb-4 bootstrap-logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/71/GNUstep_logo.svg"
          alt="Bootstrap 5"/>
          <h3>Um breve resumo sobre nós</h3>
          <p>
            O Banco PW é uma empresa fundada em São Paulo
            no ano de 2022, com a missão de ajudar na distribuição de renda,
            com produtos diversos e apresenta um portfólio amplo de 
            melhor custo-benefício do mercado.
          </p>
        </div>
      </Container>
    );
  }
  
  export default SobreNos;