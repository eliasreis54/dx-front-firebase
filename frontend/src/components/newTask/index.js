import React, { useState } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { addTask } from '../tasks/actions'

import './index.css'

const NewTask = ({ onClickButton }) => {
  const [taskName, setTaskName] = useState()

  const inputOnChange = event => {
    setTaskName(event.target.value)
  }

  return (
    <div className='new-task-div'>
      <TextField fullWidth onChange={inputOnChange} defaultValue={taskName} margin="dense" required id="standard-required" label="Required" />
      <Button onClick={() => onClickButton(taskName)} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onClickButton: task => dispatch(addTask('teste'))
})

export default connect(null, mapDispatchToProps)(NewTask)
