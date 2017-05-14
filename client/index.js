var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  console.log(props)
  let items = props.map((item) => {
    return <div>{item.task} - {item.completed}</div>
  })
  return (
    <div>
      {items}
      </div>
  )
}
// <div>hello {props.person}. Weather today is {props.weather.condition} with a high of {props.weather.temperature}&deg;. {props.weather.suggestion} </div>
// (props.person == 'Sugar Cube') ? <div>{weatherSuggestion(props)}</div> : <div>"Bring an umbrella"</div>

// function weatherSuggestion(props) {
//   return <div>{props.weather.suggestion}</div>
// }
//
// var data = {
//     person: 'Chocolate',
//     weather: {
//       temperature: 15,
//       condition: 'raining',
//       suggestion: 'Stay inside, or you will melt!!!'
//     }
//   }

var tasks = [
  { task: 'shine shoes', completed: 0 },
  { task: 'watch tv', completed: false },
  { task: 'buy shoe shine', completed: false}
]
var view = helloTemplate(tasks)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
