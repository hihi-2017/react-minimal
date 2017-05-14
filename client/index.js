var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return ( <span>
    <div>hello {props.person}</div>
    <div>Date { getDate() }</div>
    {weather(props)}
    </span>
  )
}
function footerTemplate (props) {
  return (
    <div>goodbye {props.person}</div>
  )
}
function getDate () {
  let currentDate = new Date()
  console.log(typeof currentDate);
  return (
    <span> {currentDate.toDateString()} </span>
  )
}
function weather(props) {
  return (
    <div>
      <span>
        The temperature today is: {props.weather.temperature}
      </span>
      <span>
        The conditons today are: {props.weather.condition}
      </span>
      <span>
        We suggest you: {props.weather.suggestion}
      </span>
    </div>
  )

}



var personObject = {
    person: 'Sugar Cube',
    weather: {
      temperature: 15,
      condition: 'raining',
      suggestion: 'Stay inside, or you will melt!!!'
    }
  }

var data = { name: 'mix' }

var view = helloTemplate(personObject)

var footerView = footerTemplate(personObject)

var placeToMount = document.getElementById('root')
var footer = document.getElementById('footer')


ReactDOM.render(view, placeToMount)
ReactDOM.render(footerView, footer)
