var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate(props) {
  console.log('props', props);
  return (
    <span>
      <div>
        Hello {props.name}
      </div>
      <div>
        Todays date is: {props.day}/{props.month}/{props.year}
      </div>
      <div>
        {(props.person == "Sugar Cube") ? HelloSugarCube(props) : WhereIsSugarCube(props)}
        Todays weather:{props.weather.temperature}, {props.weather.condition}, {props.weather.suggestion}
      </div>
      <div><p>
      Todays task: {displayTasks(props.tasks)}
      </p></div>
    </span>
  )
}

//Josh's bit
  // <p>Todays Task: {
  //   props.tasks.map((task) => displayTask(task))
  // }</p>

function displayTasks(tasks) {
  return tasks.map(displayTask)
}

function displayTask(task){
  return (<ul> {task.title}, <li>    {task.description}, <li>    {task.Status}</li></li></ul>)
}

function HelloSugarCube(props){
  return (<p>Sup again, {props.person}</p>)
}

function WhereIsSugarCube(props){
  return (<p>Where is my homie, {props.person}</p>)
}

// function areYouSugarCube(props) {
//   if (props.person == 'Sugar Cube') return HelloSugarCube(props)
//   return WhereIsSugarCube(props)
// }

function renderFooter(props){
    return(<h1> i am a footer </h1>)
}

function renderHeader(props){
  return ( <h1> i am a header </h1>)
}


var data = {
  name: 'Mr Wizard, ',
  day: new Date().getDate(),
  month: new Date().getMonth()+1,
  weather: {
    temperature: 15,
    condition: 'raining',
    suggestion: 'Stay inside, or you will melt!!!'
  },
  tasks: [
    {title: '1: Make coffee sweet', description: 'Dip in toes - only', Status: 'I got soggy'},
    {title:'2. Remain cubical', description: 'Stay out of coffee', Status: 'Dry and happy'},
    {title: '3. Feed horses', description: 'Not looking forward to this', Status: 'Cancelled til tomorrow'}
  ]
}

var view = helloTemplate(data)
var footer = renderFooter()
var header = renderHeader()
var placeToMount = document.getElementById('root')
var footerMountPoint = document.getElementById('footer')
var headerMountPoint = document.getElementById('header')

ReactDOM.render(view, placeToMount)
ReactDOM.render(footer, footerMountPoint)
ReactDOM.render(header, headerMountPoint)
