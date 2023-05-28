import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import axios from "axios";


function NavbarAgeHome(props) {
 
  const [searchEmail, setSearchEmail] = useState('');
  
  const handleSearch = async (e) => {
    e.preventDefault();
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/SearchInAgentTicket/${searchEmail}`;
        const result = await axios.get(serverUrl);
        props.takeNewArrFromAgentCardsPage(result.data);
    setSearchEmail('');


  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="/">Ticket Ease</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/allAgentTickets">Agent Tickets</Nav.Link>
              <Nav.Link href="/allCustomersTickets">Customers Tikets</Nav.Link>

              <NavDropdown title="Sorting Tikets By Status" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/sortAgTicketByStatus/1" >Open Status</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByStatus/2" >Closed Status</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Sorting Tikets By Priority" id="navbarScrollingDropdown-2">
                <NavDropdown.Item href="/sortAgTicketByPriority/1" >High</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByPriority/2" >Medium</NavDropdown.Item>
                <NavDropdown.Item href="/sortAgTicketByPriority/3" >Low</NavDropdown.Item>
              </NavDropdown> 


              <NavDropdown title="Sorting Tikets By Department" id="navbarScrollingDropdown-3">
                <NavDropdown.Item  href="/sortagticketbydepartment/1">Finance</NavDropdown.Item>
                <NavDropdown.Item  href="/sortagticketbydepartment/2">Marketing</NavDropdown.Item>
                <NavDropdown.Item  href="/sortagticketbydepartment/3">Development</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <div style={{ marginRight: '2px' }}>
            <Form className="form-inline" style={{marginLeft:'1px'}} >
              <Form.Control
                type="search"
                placeholder="Search by email"
                className="me-2"
                aria-label="Search"
                // value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
                <Button onClick={handleSearch} variant="outline-warning " >Search</Button>
            </Form>
            </div>
         
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
   

    </>
  )
}

export default NavbarAgeHome;
