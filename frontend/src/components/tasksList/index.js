import React from 'react'
import { connect } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import { updateTaskThunk } from '../tasks/thunks'

import './index.css'

const TasksList = ({ tasks, toggleTaskDone }) => {

  const toggleTask = task => {
    const newTask = {
      ...task,
      done: !task.done
    }

    toggleTaskDone(task.id, newTask)
  }

  return (
    <div>
      {tasks.map((task, id) => {
        return (
          <div key={id} className='taskItem'>
            <h1>{task.description}</h1>
            <Checkbox checked={task.done} onChange={() => toggleTask(task)} name="checkedA" />
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({ taskReducer }) => ({
  tasks: taskReducer.tasks,
})

const mapDispatchToProps = dispatch => ({
  toggleTaskDone: (id, newTask) => dispatch(updateTaskThunk(id, newTask))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
