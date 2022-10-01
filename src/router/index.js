import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Cadastro from "../paginas/Cadastro";
import Financiamento from "../paginas/Financiamento";
import Home from "../paginas/Home";
import Movimentacao from "../paginas/Movimentacao";
import SobreNos from "../paginas/SobreNos";

function RouterApp() {
  return (
    <BrowserRouter>
      <>
      
      <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={ Link } to="/">Banco Programação Web</Navbar.Brand>
              <Nav>
                <Nav.Link as={ Link } to="/" >Home</Nav.Link>
                <Nav.Link as={ Link } to="/cadastro">Cadastro</Nav.Link>
                <Nav.Link as={ Link } to="/sobrenos">Sobre nós</Nav.Link>
                <Nav.Link as={ Link } to="/financiamento">Financiamento</Nav.Link>
                <Nav.Link as={ Link } to="/movimentacao">Movimentação c/c</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </div>
      
      <div className="corpo">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/sobrenos" element={<SobreNos />}/>
          <Route path="/financiamento" element={<Financiamento />}/>
          <Route path="/movimentacao" element={<Movimentacao />}/>
        </Routes>
      </div>

      </>
      
    </BrowserRouter>
  );
}

export default RouterApp;