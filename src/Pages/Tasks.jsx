import React from 'react';
import styled from 'styled-components';
import { Typography, Badge } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const Container = styled.div`
  margin-top: 71px;
  margin-left: 220px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-radius: 8px;
`;

const NavbarItem = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  color: ${({ active }) => (active ? 'purple' : 'black')};
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  &:hover {
    color: purple;
    text-decoration: underline;
  }
`;

const Tasks = () => {
  return (
    <Container>
      <Navbar>
        <NavbarItem to="all">All</NavbarItem>
        <NavbarItem to="uiux">UI/UX</NavbarItem>
        <NavbarItem to="frontend">Front End</NavbarItem>
        <NavbarItem to="backend">BackEnd</NavbarItem>
        <NavbarItem to="qa">QA</NavbarItem>
        <NavbarItem to="idle"> Idle Members</NavbarItem>
        <Badge
            badgeContent={99}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: 'red',
                color: 'white',
                fontSize: '12px',
              },
            }}
          to ="msg">
          </Badge>
        
      </Navbar>
      <Outlet />
    </Container>
  );
};

export default Tasks;
