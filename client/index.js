var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    // <div>hello {props.person}. Weather today is {props.weather.condition} with a high of {props.weather.temperature}&deg;. {props.weather.suggestion} </div>
    (props.person == 'Sugar Cube') ? <div>{weatherSuggestion(props)}</div> : <div>"Bring an umbrella"</div>
  )
}

function weatherSuggestion(props) {
  return <div>{props.weather.suggestion}</div>
}

var data = {
    person: 'Sugar Cube',
    weather: {
      temperature: 15,
      condition: 'raining',
      suggestion: 'Stay inside, or you will melt!!!'
    }
  }
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
