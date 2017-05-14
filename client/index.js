var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <span>
      <div>hello {props.name}</div>
      <div>{renderDate()}</div>
      <div>
        {
          renderWeather(props)
        }
      </div>
      <div>{renderMessage(props)}</div>
    </span>
  )
}


function renderWeather (props){
return (
  <div>
      {Object.keys(props.weather).map(function(key){
        return (
          <div>
            {key}: {props.weather[key]}
          </div>
        )
      })}
  </div>
)
}


function renderFooter () {
  return (
    <div>i am a footer</div>
  )
}

function renderDate () {
  return (
    <div>{((new Date().getMonth()+1) +
         "/" + new Date().getDate() +
         "/" + new Date().getFullYear())
    }</div>
  )
}


function renderMessage (props) {
    let message = ["Have a great day"]

  return (
    <span>
    {(props.weather.temperature < 10)? "Go outside" : "Head inside"}
    {message.map((msg) => {
      return <div>{msg} {props.name}</div>
    })}
    </span>
  )
}



var data = {
  name: 'Sheryl',
  person: 'Sugar Cube',
  weather: {
    temperature: 15,
    condition: 'raining',
    suggestion: 'Stay inside, or you will melt!!!'
  }
}
var view = helloTemplate(data)
var view2 = renderFooter()

var placeToMount = document.getElementById('root')
var placeNextToMount = document.getElementById('footer')

ReactDOM.render(view, placeToMount)
ReactDOM.render(view2, placeNextToMount)
