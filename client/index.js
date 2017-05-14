var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate(props) {
  console.log('props', props);
  return (
    <span>
      <div>
        hello {props.name}
      </div>
      <div>
        todays date is: {props.day}/{props.month}/{props.year}
      </div>
    </span>
  )
}

function renderFooter(props) {
  return ( <
    h1 > i am a footer < /h1>
  )
}

function renderHeader(props) {
  return ( <
    h1 > i am a header < /h1>
  )
}



var data = {
  name: 'mix, ', day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()
}
var view = helloTemplate(data)
var footer = renderFooter()
var header = renderHeader()
var placeToMount = document.getElementById('root')
var footerMountPoint = document.getElementById('footer')
var headerMountPoint = document.getElementById('header')

ReactDOM.render(view, placeToMount)
ReactDOM.render(footer, footerMountPoint)
ReactDOM.render(header, headerMountPoint)
