import React from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import { Box } from "@chakra-ui/react";

function Tasks() {
  return (
    <Box minH="90vh">
      <Header/>
      <TaskList/>
    </Box>
  );
}

export default Tasks;
