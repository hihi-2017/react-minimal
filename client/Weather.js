var React = require('react')

function weather ({props}) {
  return (
    <div>This is the story of {props.person}.
      Weather today is {props.weather.temperature} degrees and {props.weather.condition}.
      We suggest you {props.weather.suggestion}.</div>
  )
}

module.exports = weather
