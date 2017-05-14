var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <span>
    <div>hello {props.name}</div>
    </span>
  )
}

function renderFooter(props) {
  return (
    <h1>i am a footer</h1>
  )
}
function renderHeader(props) {
  return (
    <h1>i am a header</h1>
  )
}


var data = { name: 'mix' }
var view = helloTemplate(data)
var footer = renderFooter()
var header = renderHeader()
var placeToMount = document.getElementById('root')
var footerMountPoint = document.getElementById('footer')
var headerMountPoint = document.getElementById('header')

ReactDOM.render(view, placeToMount)
ReactDOM.render(footer, footerMountPoint)
ReactDOM.render(header, headerMountPoint)
