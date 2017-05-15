var React = require('react')
var ReactDOM = require('react-dom')

// function helloTemplate (props) {
//   return (
//     <div>
//       {props.person == 'Sugar Cube' ? helloSugarCube(props) : whereIsSugarCube(props)}
//       <p>hello {props.person} the temperature is {props.weather.temperature} degrees and it is {props.weather.condition} outside, we suggest {props.weather.suggestion}
//       </p>
//     </div>
//   )
// }
//
// function helloSugarCube(props) {
//   return <h1>Hello Sugar Cube</h1>
// }
//
// function whereIsSugarCube(props) {
//   return <h3>Where is Sugar Cube</h3>
// }
//
// function helloDoctor (props) {
//   return (
//     <div>hello {props.title}, occupation {props.occupation}</div>
//   )
// }
//
// var date = {date: 'Monday, May 15th, 2017'}
// var data = { name: 'Alan' }
// var footData = {title: 'Dr. Foot', occupation: "Podiatrist"}
// var sugarWeather =   {
//   person: 'Sugar Cube',
//   weather: {
//     temperature: 15,
//     condition: 'raining',
//     suggestion: 'Stay inside, or you will melt!!!'
//   }
// }


function checkCompleted(task) {
  return task.completed
}

function displayTask(task) {
  return <h2 className="task">{task.task}</h2>
}

function displayCompleted(props) {
  return <div className="completedTasks">
    {props.filter(checkCompleted).map(displayTask)}
  </div>
}


var tasks = [
  {task: 'clean your room', description: 'get your shit off the floor', completed: false},
  {task: 'clean the dishes', description: 'get your shit off the dishes', completed: true},
  {task: 'learn to react', description: 'I know, it is weird, but you are luckier than me as I never actually learnt this', completed: true}]
//
// var view = helloTemplate(sugarWeather)
// var foot = helloDoctor(footData)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')


ReactDOM.render(displayCompleted(tasks), placeToMount)
ReactDOM.render(view, footerMount)
