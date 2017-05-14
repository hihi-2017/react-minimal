var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props, date) {
  return (
    <div>hello {props.name} it is {date.date}</div>
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

var view = helloTemplate(data, date)
var foot = helloDoctor(footData)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(foot, footerMount)
