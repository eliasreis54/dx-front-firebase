import React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { addTask } from '../tasks/actions'

import './index.css'

const NewTask = ({ onClickButton }) => {
  return (
    <div className='new-task-div'>
      <TextField fullWidth margin="dense" required id="standard-required" label="Required" />
      <Button onClick={onClickButton} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onClickButton: task => dispatch(addTask('teste'))
})

export default connect(null, mapDispatchToProps)(NewTask)
