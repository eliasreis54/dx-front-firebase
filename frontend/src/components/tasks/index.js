import React from 'react';
import Container from '@material-ui/core/Container';

import  TasksList from '../tasksList'
import Newtask from '../newTask'

import './index.css'

const TasksHome = () => {
  return (
    <React.Fragment>
      <Container className='tasks-home-margin' maxWidth="lg">
        <Newtask />
        <TasksList />
      </Container>
    </React.Fragment>
  );
}

export default TasksHome 
