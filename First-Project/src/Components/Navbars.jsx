import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbars.css';

function Navbars() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav.Link href="/#home" className="navbar-brand-link">
        <Navbar.Brand className='navbar-brand'>聯大二手書交易站</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="/#card">瀏覽</Nav.Link>
            <Nav.Link href="/#sign">註冊</Nav.Link>
            <Nav.Link href="/#login">登入</Nav.Link>
            <NavDropdown title="選單" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Menu/Publish">刊登</NavDropdown.Item>
              <NavDropdown.Item href="#Validations">查看已刊登商品</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
