var React = require('react')

function listTasks ({props}) {
  console.log(props)
  return (
    <ul>

      { props.map((task, i) => {
          return <li key={i}>{task.task}</li>
      }) }
    </ul>
  )
}

module.exports = listTasks
