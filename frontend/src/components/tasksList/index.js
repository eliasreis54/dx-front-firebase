import React from 'react'
import { connect } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'

import './index.css'

const TasksList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, id) => {
        return (
          <div className='taskItem'>
            <h1>xs</h1>
            <Checkbox checked={true} onChange={console.log} name="checkedA" />
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
