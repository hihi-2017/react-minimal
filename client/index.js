var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate(props) {
  return (
    <div>
      {
        props.person.map((thing) => <div>hello {thing} it is {props.weather.condition}, I suggest you {props.weather.suggestion} because your favourite number is {Math.random() * 100}</div>)
      }
    </div>
  )
}

function footerStuff(props) {
  return (
    <div>This is the footer, {props.name}</div>
  )
}

var data = {
  name: 'mix'
}

var cube = {
  person: [
    'Sugar Cube', 'Cherry Pie'
  ],
  weather: {
    temperature: 15,
    condition: 'raining',
    suggestion: 'Stay inside, or you will melt!!!'
  }
}
var view = helloTemplate(cube)

var placeToMount = document.getElementById('root')
var footerStuff = footerStuff(data)
var destination = document.getElementById('footer')

function footer() {
  ReactDOM.render(footerStuff, destination)
}

function pageContent() {
  ReactDOM.render(view, destination)

}

function randomPage() {
  (Math.random() > 0.5)
    ? footer()
    : pageContent()
}

randomPage()
