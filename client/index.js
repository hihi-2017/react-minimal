var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.name}</div>
  )
}

function goodbyeTemplate (props) {
  return (
    <div>goodbye {props.name}</div>
  )
}

var data = { name: 'cici' }
var view = helloTemplate(data)
var endView = goodbyeTemplate(data)

var header = document.getElementById('root')
var footer = document.getElementById('footer')

ReactDOM.render(view, header)
ReactDOM.render(endView, footer)
