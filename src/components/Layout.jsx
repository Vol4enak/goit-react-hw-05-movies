import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Nav, NavItem } from './Layout.styled';
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const Layout = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavItem>
      </Nav>
      <Outlet />
    </div>
  );
};
