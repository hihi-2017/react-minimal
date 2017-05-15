var React = require('react')
var ReactDOM = require('react-dom')
var Greetings = require('./greetings')
var Tasks = require('./tasks')

function HelloComponent (props) {
  return (
    <span>
      <Tasks tasks={props.tasks}/>
      <div>testing </div>
      <div><Greetings name={props.name} a="lb" /></div>
    <div className='bob' width='100'></div>
    </span>
  )
}

var data = {
  name: 'hihi',
  tasks: [
    {description: 'dance', completed: true},
    {description: 'sing', completed: false}
  ]
}
var view = HelloComponent(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

