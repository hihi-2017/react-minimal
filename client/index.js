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
        return <div> {task.task} / {task.description} / {task.completed.toString()}  </div>
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
  {task:'Make a list', completed: false, description:'Make a list of lists for making lists'},
  {task:'Make coffee', completed: true, description:'Make a coffe that taste better than life itself'},
  {task:'Drink coffee',completed: false, description:'Drink the said coffee'}
]}


var view = helloTemplate(data)
var footer = getFooter()

var placeToMount = document.getElementById('root')
var getFooter = document.getElementById('footer')


// ReactDOM.render(helloTemplate(data), document.getElementById('root'))

ReactDOM.render(view, placeToMount)
ReactDOM.render(footer,getFooter)
