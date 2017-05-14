var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.name}</div>
  )
}

function helloDoctor (props) {
  return (
    <div>hello {props.title}, occupation {props.occupation}</div>
  )
}

var data = { name: 'mix' }
var footData = {title: 'Dr. Foot', occupation: "Podiatrist"}

var view = helloTemplate(data)
var foot = helloDoctor(footData)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(foot, footerMount)
