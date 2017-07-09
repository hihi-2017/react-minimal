var React = require('react')
var ReactDOM = require('react-dom')

var Weather = require('./Weather')
var Footer = require('./Footer')
var Tasks = require('./Tasks')

function helloTemplate (props) {
  return (
    <div>
      <p>hello {props.name}.</p>
      {(props.name == 'Mix') ? <Weather props={data} /> : <Footer name={myName} />}
      <Tasks props={tasks} />
    </div>
  )
}

var data = {
    name: 'Mixi',
    person: 'Sugar Cube',
    weather: {
      temperature: 15,
      condition: 'raining',
      suggestion: 'Stay inside, or you will melt!!!'
    }
  }
var tasks = [
  { task: 'Shine shoes', completed: true },
  { task: 'Buy shoe polish', completed: false },
  { task: 'Wear socks', completed: true },
  { task: 'Buy milk', completed: false }
]
var myName = 'Andrew'

var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
