import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-body">
        <NavLink style={{ color: 'whitesmoke', marginLeft: '15px', marginRight: '15px' }} to={SHOP_ROUTE}>
          ROZETKA
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'whitesmoke' }}>
            <Button to="/admin" className="ml-2" as={NavLink}>
              Админ Панель
            </Button>
            <Button to="/features" className="ml-4" as={NavLink}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'whitesmoke' }}>
            <Button to="/login" activeClassName="active" onClick={() => user.setIsAuth(true)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Navbar>
    </Container>
  );
});

export default NavBar;
