var React = require('react')

//props.tasks = [task1, task2]
//task1 = {description: "string", completed: boolean}

//(a) => a.task
//(a) => {return a.task}

function Tasks(props) {
  console.log(props)
  let taskList = props.tasks.filter(completed).map(displayTask)

  return (
    <span>
      <div className='tasks'>
      <ul>
        {taskList}
      </ul>
    </div>
    </span>
  )
}

function completed(task) {
    return task.completed
}

function displayTask(task) {
  return <li>{task.description}</li>
}

module.exports = Tasks
