import React from 'react'
import styled from 'styled-components'; 
import Trash from '../SecondPic/Box.png';
import { Typography } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height to center vertically */
  margin-left: 220px; /* Adjust if needed */
  margin-top:71px;
`;

const CelebrationImage = styled.img`
  display: block;
  margin-bottom: 20px; /* Space between image and text */
`;

const CustomTypography = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
`;

// const CustomTypography1 = styled(Typography)`
//   font-weight: 700;
//   font-size: 18px;
//   margin-top: 40px;
//   margin-left: 13px;
// `;

const Learning = () => {
  return (
    <Container>
      <div>
      <CelebrationImage src={Trash} alt="No Courses" />
      <CustomTypography><b>No Courses found!</b></CustomTypography>
      {/* You can also add additional text below if needed */}
      </div>
    </Container>
  )
}

export default Learning;
