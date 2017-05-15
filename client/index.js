var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>
      hello {props.name}<br />
      {props.person}<br />
    {props.day}/{props.month}/{props.year}<br />
  <p>
    {props.weather === 'sunny' ? 'time for a walk.':'time to stay inside'}


    {
      props.tasks.map ((task)=> {
        return <div> {task.task} / {task.completed.toString()}</div>
      })
  }


  </p>
    </div>
  )
}


function getFooter (footer) {
  return (
    <h2>Well I guess I am a footer</h2>
  )
}






var data = { name: 'mix', person: 'Sugar Cube', weather: 'sunny', temperature: 15, condition:'raining', suggestion: 'Stay inside, or you will melt!!!', day: new Date().getDate(), month: new Date().getMonth()+1, year: new Date().getFullYear(), tasks:
  [
  {task:'make a list', completed: false},
  {task:'make coffee', completed: true},
  {task:'drink coffee',completed: false}
]}
var view = helloTemplate(data)
var footer = getFooter()

var placeToMount = document.getElementById('root')
var getFooter = document.getElementById('footer')


// ReactDOM.render(helloTemplate(data), document.getElementById('root'))

ReactDOM.render(view, placeToMount)
ReactDOM.render(footer,getFooter)
