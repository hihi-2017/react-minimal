var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.name}</div>
  )
}

function renderFooter () {
  return (
    <div>i am a footer</div>
  )
}

var data = { name: 'Sheryl' }
var view = helloTemplate(data)
var view2 = renderFooter()

var placeToMount = document.getElementById('root')
var placeNextToMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(view2, placeNextToMount)
