import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SecondaryNavbarContainer = styled.nav`
  display: flex;
  background-color: #444;
  padding: 8px;
  margin-top: 10px;
`;

const NavItem = styled(NavLink)`
  color: white;
  padding: 8px;
  text-decoration: none;
  
  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }

  &:hover {
    background-color: #666;
  }
`;

const DashboardNavbar = () => {
  return (
    <SecondaryNavbarContainer>
      <NavItem to="overview">Overview</NavItem>
      <NavItem to="stats">Stats</NavItem>
      <NavItem to="reports">Reports</NavItem>
    </SecondaryNavbarContainer>
  );
};

export default DashboardNavbar;
