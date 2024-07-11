import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class CenteredNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
          <Container>
            <NavbarBrand href="/">2 B Stylez</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="m-auto" navbar>
                <NavItem>
                  <NavLink href="/">Hair</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/features">Shop</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/pricing">Style</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Events</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">News & Features</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://facebook.com" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://twitter.com" target="_blank">
                    <i className="fab fa-pinterest"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://instagram.com" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default CenteredNavbar;
