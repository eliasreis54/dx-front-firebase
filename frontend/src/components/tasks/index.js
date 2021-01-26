import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';

import  TasksList from '../tasksList'
import Newtask from '../newTask'
import { getAllThunk } from './thunks'

import './index.css'

const TasksHome = ({ getAllTasksFromApi }) => {
  useEffect(() => {
    getAllTasksFromApi()
  }, [getAllTasksFromApi])

  return (
    <React.Fragment>
      <Container className='tasks-home-margin' maxWidth="lg">
        <Newtask />
        <TasksList />
      </Container>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  getAllTasksFromApi: () => dispatch(getAllThunk())
})

export default connect(null, mapDispatchToProps)(TasksHome)
