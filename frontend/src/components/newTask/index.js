import React, { useState } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { createTaskThunk } from '../tasks/thunks'

import './index.css'

const NewTask = ({ onClickButton }) => {
  const [taskName, setTaskName] = useState()

  const inputOnChange = event => {
    setTaskName(event.target.value)
  }

  const createTask = () => {
    const message = {
      description: taskName,
      author: 'elias reis',
      done: false,
    }

    onClickButton(message)
  }

  return (
    <div className='new-task-div'>
      <TextField fullWidth onChange={inputOnChange} defaultValue={taskName} margin="dense" required id="standard-required" label="Required" />
      <Button onClick={() => createTask()} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onClickButton: task => dispatch(createTaskThunk(task))
})

export default connect(null, mapDispatchToProps)(NewTask)
