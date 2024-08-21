import React from 'react';
import styled from 'styled-components'; 
import photo from '../SecondPic//Celebration.png' //'./SecondPic/Celebration.png';
import { Typography } from '@mui/material';
// import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 71px; /* Adjust as needed */
  margin-left: 220px; 
`;

const CelebrationImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;  
`;

const CustomTypography = styled(Typography)`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

const CustomTypography1 = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const Dashboard = () => {
  return (
      // <Outlet /> {/* This is where nested routes will be rendered */}
      <Container>
        <div>
        <h1>Dashboard</h1>
          <CelebrationImage src={photo} alt="Celebration" />
          <CustomTypography><b>Your Account is created successfully</b></CustomTypography><br/>
          <CustomTypography1>Please wait for approval</CustomTypography1>
        </div>
      </Container>
  );
};

export default Dashboard;
