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
      <div>
        {(props.person == "Sugar Cube") ? HelloSugarCube(props) : WhereIsSugarCube(props)}
        todays weather:{props.weather.temperature}, {props.weather.condition}, {props.weather.suggestion}
      </div>
    </span>
  )
}


function HelloSugarCube(props){
  return (<p>Sup again, {props.person}</p>)
}

function WhereIsSugarCube(props){
  return (<p>Where is my homie, {props.person}</p>)
}

// function areYouSugarCube(props) {
//   if (props.person == 'Sugar Cube') return HelloSugarCube(props)
//   return WhereIsSugarCube(props)
// }

function renderFooter(props) {
  return(
    <
    h1 > i am a footer < /h1>
  )
}

function renderHeader(props) {
  return ( <
    h1 > i am a header < /h1>
  )
}



var data = {
  name: 'Gabe, ',
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  person: 'Sugar Cube',
  weather: {
    temperature: 15,
    condition: 'raining',
    suggestion: 'Stay inside, or you will melt!!!'
  }
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
