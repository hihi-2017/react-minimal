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
    <span>{`${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`}</span>
  )
}

function goodbyeTemplate (props) {
  return (
    <div>goodbye {props.name}</div>
  )
}

var data = { name: 'cici' }
var sugarCube = {
    person: 'Sugar Cube',
    weather: {
      temperature: 15,
      condition: 'raining',
      suggestion: 'Stay inside, or you will melt!!!'
    }
  }

var view = helloTemplate(sugarCube)
var endView = goodbyeTemplate(data)

var header = document.getElementById('root')
var footer = document.getElementById('footer')

ReactDOM.render(view, header)
ReactDOM.render(endView, footer)
