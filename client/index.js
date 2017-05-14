var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return ( <span>
    <div>hello {props.name}</div>
    <div>Date { getDate() }</div>
    </span>
  )
}
function footerTemplate (props) {
  return (
    <div>goodbye {props.name}</div>
  )
}
function getDate () {
  let currentDate = new Date()
  console.log(typeof currentDate);
  return (
    <span> {currentDate.toDateString()} </span>
  )
}




var data = { name: 'mix' }
var view = helloTemplate(data)
var footerView = footerTemplate(data)

var placeToMount = document.getElementById('root')
var footer = document.getElementById('footer')


ReactDOM.render(view, placeToMount)
ReactDOM.render(footerView, footer)
