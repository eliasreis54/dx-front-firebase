import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import  TasksList from '../tasksList'


const TasksHome = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <TasksList />
      </Container>
    </React.Fragment>
  );
}

export default TasksHome 
