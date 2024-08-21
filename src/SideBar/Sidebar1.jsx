import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '../SecondPic/dashboard.png';
import LearningIcon from '../SecondPic/learning.png';
import ProjectsIcon from '../SecondPic/project.png';
import TaskIcon from '../SecondPic/tasks.png';
import AttendanceIcon from '../SecondPic/attendance.png';
import PeopleIcon from '../SecondPic/people.png';
import SettingsIcon from '../SecondPic/settings.png';
import styled from 'styled-components';

const CustomDrawer = styled(Drawer)`
  width: 220px;
  & .MuiDrawer-paper {
    width: 220px;
    background-color: #333; /* Dark theme */
    color: white;
  }
`;

const Sidebar1 = () => {
  return (
    <CustomDrawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <img src={DashboardIcon} alt="Dashboard" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/learning">
          <ListItemIcon>
            <img src={LearningIcon} alt="Learning" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Learning" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
          <ListItemIcon>
            <img src={ProjectsIcon} alt="Projects" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>
            <img src={TaskIcon} alt="Tasks" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button component={Link} to="/attendance">
          <ListItemIcon>
            <img src={AttendanceIcon} alt="Attendance" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button component={Link} to="/people">
          <ListItemIcon>
            <img src={PeopleIcon} alt="People" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <img src={SettingsIcon} alt="Settings" style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </CustomDrawer>
  );
};

export default Sidebar1;
