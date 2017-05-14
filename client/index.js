var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>{dateToday()} - hello {props.person}!</div>
  )
}

function dateToday () {
  var d = new Date()
  return (
    <span>{d.getFullYear()}/{d.getMonth()+1}/{d.getDate()}</span>
  )
}

function weather (props) {
  return (
    <div>{(props.weather.condition === 'raining')? props.weather.suggestion : "You'll be okay" }</div>
  )
}

function goodbyeTemplate (props) {
  return (
    <div>goodbye {props.name}</div>
  )
}

function showTask(tasks) {
  return (
    <div>
      <span>Tasks for today</span>
      <ul>
        {
          tasks.map((task) => {
            return <li>{task.description} : {(task.status === 'done')? "[X]":'[ ]' }</li>
            }
          )
        }
      </ul>
    </div>
  )
}

function showAll (data) {
    return(
      <div>
        <div>{helloTemplate(data.sugarCube)}</div>
        <div>{weather(data.sugarCube)}</div>
        <div>{showTask(data.taskData)}</div>
        <div>{goodbyeTemplate(data)}</div>
      </div>
    )
}

var data = {
  name: 'cici',
  sugarCube: {
    person: 'Sugar Cube',
    weather: {
      temperature: 15,
      condition: 'raining',
      suggestion: 'Stay inside, or you will melt!!!'
    }
  },
  taskData : [
    {description:'get curry at Great India', status:'not done'},
    {description:'eat lunch', status:'not done'},
    {description:'eat dinner', status:'not done'},
    {description:'take a walk on the waterfront', status:'done'}
  ]
}

var view = showAll(data)
// var view = helloTemplate(sugarCube)
// var weatherSuggest = weather(sugarCube)
// var endView = goodbyeTemplate(data)
// var viewTask = showTask(taskData)

var header = document.getElementById('root')
// var weather = document.getElementById('weather')
// var footer = document.getElementById('footer')
// var tasks = document.getElementById('tasks')

ReactDOM.render(view, header)
// ReactDOM.render(weatherSuggest, weather)
// ReactDOM.render(endView, footer)
// ReactDOM.render(viewTask,tasks)
