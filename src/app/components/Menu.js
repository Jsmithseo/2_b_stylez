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


const logo = [
  { src: 'logo.png', alt: 'Image ' },
];


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
            <NavbarBrand href="/"> 
            <img src="white_logo.png" alt="Logo" className="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="m-auto" navbar>
                <NavItem>
                  <NavLink href="https://www.styleseat.com/m/v/glennrobinson">Book Hair Appointment</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://poshmark.com/closet/2_b_stylez">Shop</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="/pricing">Style</NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink href="/contact">Events</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="/contact">News & Features</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/people/Glenn-Robinson/pfbid0ybGBbms4tk3zjrgPJ3h4CJskte13nTtJsZEMsXEzRrWNvYDuDz3kK7uzgPfrE6Eol/?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.pinterest.com/glenn9robinson/?invite_code=a1cfbb4516bf4646a817eefce244792d&sender=1120200244722890446"
                    target="_blank"
                  >
                    <i className="fab fa-pinterest"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/2_b_stylez/?igsh=MzRlODBiNWFlZA%3D%3D"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CenteredNavbar;
