import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function NavBar() {
  return (
    <Navbar  expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#" style={{margin:"5px", color:"#6F7378"}}><SettingsIcon/></Navbar.Brand>
        <Navbar.Brand href="#" style={{margin:"5px",color:"#6F7378"}}><NotificationsIcon/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: '35%', borderRadius:'50px', backgroundColor:'black', }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ borderRadius:'50px',backgroundColor:' grey', color:'white', margin:'5px'}}>Timeline</Nav.Link>
            <Nav.Link href="#action2" style={{color:'grey',margin:'5px'}}>Albums</Nav.Link>
            <Nav.Link href="#action2" style={{color:'grey',margin:'5px'}}>Events</Nav.Link>
            <Nav.Link href="#" style={{color:'grey',margin:'5px'}}>
              Favourites
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            
            <Button style={{backgroundColor:'lightblue', color:'white',borderRadius:'50px' ,margin:'5px'}}><ControlPointIcon/> Upload Photos</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;