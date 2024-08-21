import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
// import Sidebar1 from './Sidebar1'; // Import your Sidebar component
// import Sidebar1 from './Sidebar1';
import { AppBar, Toolbar, IconButton, createTheme, ThemeProvider } from '@mui/material';
import Nav1 from '../SecondPic/nav1.png'; 
import Nav2 from '../SecondPic/nav2.png';
import Sidebar1 from './Sidebar1';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: 240px; /* Adjust based on the sidebar width */
  margin-top: 60px; /* Adjust based on the navbar height */
`;

const Navbar = styled(AppBar)`
  width: calc(100% - 220px); /* 220px for the sidebar */
  margin-left: 220px;
  background-color: #333; /* Dark theme */
`;

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Sidebar1 />
        <div>
          <Navbar position="fixed">
            <Toolbar sx={{ justifyContent: 'flex-end' }}>
              <IconButton edge="end" color="inherit">
                <img src={Nav1} alt="Notification" />
              </IconButton>
              <IconButton edge="end" color="inherit">
                <img src={Nav2} alt="Settings" />
              </IconButton>
            </Toolbar>
          </Navbar>
          <MainContent>
            <Outlet />
          </MainContent>
        </div>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
