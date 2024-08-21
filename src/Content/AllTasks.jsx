import React from 'react';
import Navbar from '../SideBar/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 71px;
  margin-left: 220px;
`;

const AllTasks = () => {
  return (
    <Container>
    <div>
    <Navbar/>
      <h2>All Tasks</h2>
      <p>Here is the content for all tasks...</p>
    </div>
    </Container>
  );
};

export default AllTasks;
