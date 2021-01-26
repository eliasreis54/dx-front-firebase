import React from 'react'
import { connect } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'

import './index.css'

const TasksList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, id) => {
        return (
          <div key={id} className='taskItem'>
            <h1>{task.description}</h1>
            <Checkbox checked={task.done} onChange={() => console.log('teste')} name="checkedA" />
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({ taskReducer }) => ({
  tasks: taskReducer.tasks,
})

export default connect(mapStateToProps, null)(TasksList);
