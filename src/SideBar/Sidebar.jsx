import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Link,useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from '@mui/material';
import Nav1 from '../SecondPic/nav1.png'; 
import Nav2 from '../SecondPic/nav2.png';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from '../SecondPic/dashboard.png';
import Learning from '../SecondPic/learning.png';
import Projects from '../Secondpic/project.png';
import Setting from '../Secondpic/settings.png';
import Leave from '../SecondPic/leave.png';
import People from '../SecondPic/people.png';
import Attendance from '../SecondPic/attendance.png';
import Task from '../SecondPic/tasks.png';
import TaskPro from '../SecondPic/taskpro.png';
import { createTheme, ThemeProvider,Container,Box,Grid } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    
     <ThemeProvider theme={theme}>
      <Container >
          {/* <Grid sx={{ width:'220px',height:'760px'}}> */}
          <Drawer variant="permanent" > 
          <ListItem  >
          <img src={TaskPro} alt='' />
        </ListItem>  
        <br/> 
      <List sx={{padding:'15px'}}>
      <ListItem button
      component={Link}
      to="/dashboard"
      sx={{
        backgroundColor: isActive('/dashboard') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/dashboard') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
        <ListItemIcon sx={{ color: 'white' }}>
          <img src={Dashboard} alt="Dashboard" />
        </ListItemIcon>
        <ListItemText primary="Dashboard"  sx={{ color: 'white' }} />
      </ListItem>
        <ListItem button component={Link} to="/learning" sx={{
        backgroundColor: isActive('/learning') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/learning') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
          <img src={Learning} alt='' />
          </ListItemIcon>
          <ListItemText primary="Learning" sx={{ color: 'white' }} />
        </ListItem>       
        <ListItem button component={Link} to="/projects" sx={{
        backgroundColor: isActive('/projects') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/projects') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
          <img src={Projects} alt='' />
          </ListItemIcon>
          <ListItemText primary="Projects" sx={{ color: 'white' }}/>
        </ListItem>
        <ListItem button component={Link} to="/tasks" sx={{
        backgroundColor: isActive('/tasks') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/tasks') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
            <img src={Task} alt='' />
          </ListItemIcon>
          <ListItemText primary="Tasks" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/attendance" sx={{
        backgroundColor: isActive('/attendance') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/attendance') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
          <img src={Attendance} alt='' />
          </ListItemIcon>
          <ListItemText primary="Attendance" sx={{ color: 'white' }}/>
        </ListItem>
        <ListItem button component={Link} to="/manageleave" sx={{
        backgroundColor: isActive('/manage-leave') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/manage-leave') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
            <img src={Leave} alt='' />
          </ListItemIcon>
          <ListItemText primary="Manage Leave" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/people" sx={{
        backgroundColor: isActive('/people') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/people') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
          <img src={People} alt='' />
          </ListItemIcon>
          <ListItemText primary="People" sx={{ color: 'white' }}/>
        </ListItem>
        <ListItem button component={Link} to="/settings" sx={{
        backgroundColor: isActive('/settings') ? 'purple' : 'transparent',
        '&:hover': {
          backgroundColor: isActive('/settings') ? 'purple' : 'rgba(255, 255, 255, 0.08)',
        },
        color: 'white',
      }}>
          <ListItemIcon sx={{ color: 'white' }}>
          <img src={Setting} alt='' />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: 'white' }} />
        </ListItem>
      </List>
      <Divider variant="middle" flexItem />
    </Drawer> 
      <div >
    <AppBar sx={{marginLeft:'220px'}} >
      <Toolbar sx={{ justifyContent: 'flex-end',marginLeft:'220px' }}>
        <IconButton edge="end" color="inherit" component={Link} to="/notification">
          <img src={Nav1} alt="Notification" />
        </IconButton>
        <IconButton edge="end" color="inherit" component={Link} to="/rectangle">
          <img src={Nav2} alt="Settings" />
        </IconButton>
      </Toolbar>
    </AppBar>
    </div>
  
    </Container>
    </ThemeProvider>
 
  );
};

export default Sidebar;
