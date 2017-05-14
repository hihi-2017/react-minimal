var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  console.log(props.today)
  return (
    <div>hello {props.name}. The date today is: {props.today.toString()}.</div>
  )
}

function goodbyeTemplate(info) {
  return (
    <div>goodbye {info.name}</div>
  )
}


var data = { name: 'hihi',
            today: new Date()}
var view = helloTemplate(data)

let info = { name: 'Pork Pie'}
var footerView = goodbyeTemplate(info)

var placeToMount = document.getElementById('root')
var footerMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(footerView, footerMount)
