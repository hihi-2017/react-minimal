var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.person} the temperature is {props.weather.temperature} degrees and it is {props.weather.condition} outside, we suggest {props.weather.suggestion}</div>
  )
}

function helloDoctor (props) {
  return (
    <div>hello {props.title}, occupation {props.occupation}</div>
  )
}

var date = {date: 'Monday, May 15th, 2017'}
var data = { name: 'Alan' }
var footData = {title: 'Dr. Foot', occupation: "Podiatrist"}
var sugarWeather =   {
    person: 'Sugar Cube',
    weather: {
      temperature: 15,
      condition: 'raining',
      suggestion: 'Stay inside, or you will melt!!!'
    }
  }

var view = helloTemplate(sugarWeather)
var foot = helloDoctor(footData)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(foot, footerMount)
