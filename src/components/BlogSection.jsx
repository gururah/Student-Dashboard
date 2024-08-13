import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';


// Styled Components
const StyledContainer = styled(Container)`
  margin-top: 10px;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Inter';
  color: ${({ color }) => color || '#4D4D4D'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin-bottom: ${({ mb }) => mb || '0'}px;
`;

const StyledBox = styled(Box)`
  text-align: center;
  position: relative;
`;

const Overlay = styled(Box)`
  position: absolute;
  bottom: -32px; /* Push the box below the image */
  left: 48px; /* 48px gap on the left */
  right: 48px; /* 48px gap on the right */
  background-color: white;
  color: black;
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const OverlayTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1rem;
`;

const OverlayButton = styled(Button)`
  align-self: flex-start;
  font-weight: bold;
  text-transform: none;
  padding: 0;
  margin-top: 8px;
`;

const CommunityUpdates = () => {
  return (
    <StyledContainer>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <StyledTypography variant="h5" align="center" fontWeight="bold" mb={4}>
            Caring is the new marketing
          </StyledTypography>
          <StyledTypography variant="subtitle1" align="center" color="#717171" mb={4}>
            The Nexcent blog is the best place to read about the latest membership insights,<br /> 
            trends, and more. See who's joining the community, read about how our community <br />
            are increasing their membership income and lot's more.
          </StyledTypography>
        </Grid>

        <Grid item xs={12} container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledBox>
              <img src={Card1} alt="Safeguarding Processes" style={{ width: '100%', height: 'auto' }} />
              <Overlay>
                <OverlayTitle>Creating Streamlined Safeguarding Processes with OneRen</OverlayTitle>
                <OverlayButton sx={{ color: 'green' }}>Read more →</OverlayButton>
              </Overlay>
            </StyledBox>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          
          <Grid item xs={12} md={4}>
            <StyledBox>
              <img src={Card2} alt="Safeguarding Processes" style={{ width: '100%', height: 'auto' }} />
              <Overlay>
                <OverlayTitle>What are your safeguarding responsibilities and how can you manage them?</OverlayTitle>
                <OverlayButton sx={{ color: 'green' }}>Read more →</OverlayButton>
              </Overlay>
            </StyledBox>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <Grid item xs={12} md={4}>
            <StyledBox>
              <img src={Card3} alt="Membership Model" style={{ width: '100%', height: 'auto' }} />
              <Overlay>
                <OverlayTitle>Revamping the Membership Model with Triathlon <br/>Australia</OverlayTitle>
                <OverlayButton sx={{ color: 'green' }}>Read more →</OverlayButton>
              </Overlay>
            </StyledBox>
          </Grid>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </StyledContainer>
  );
};

export default CommunityUpdates;
