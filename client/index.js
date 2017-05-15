var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <span>
    <div>{todaysDate()}</div>
    <div>{toDos(tasks)}</div>
    <div>hello {props.name}</div>
    <div>Hello {props.person}</div>
    <div> {(props.weather.condition == 'raining') ? props.weather.suggestion:'wear a rain jacket'}</div>
    </span>
  )
}
function RenderFooter(props) {
  return (
    <div> I'm a footer</div>
  )
}

function todaysDate() {
  var d = new Date()
return (
  <span>{d.getFullYear()}/{d.getMonth()+1}/{d.getDate()}</span>
)
}

function toDos(tasks) {
  return(
  <div>
    {
      tasks.map((task) => {
        return <div>{task.title}, {task.completed}</div>
        })
    }
  </div>
)}



var data = {
  name: 'mix',
   person: 'Sugar Cube',
   weather: {
     temperature: 15,
     condition: 'raining',
     suggestion: 'Stay inside, or you will melt!!!'
   }
 }

var tasks = [
   {title:'do the washing',completed: true},
   {title: 'wash the dishes',completed: false},
   {title:'go for a walk on the beach',completed: true}
 ]

var view = helloTemplate(data)
var myFooter = RenderFooter()

var placeToMount = document.getElementById('root')
var footerView = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(myFooter ,footerView)
