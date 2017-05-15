var React = require('react')

module.exports = Greetings

function Greetings (props) {
  console.log(props)
  let greetings = ['hi', 'hello']
  let person = {
    name: 'bob',
    profession: 'lawyer'
  }

  return (
    <span>
    {(person.name == 'bob') ? "yay it's bob" : "where is bob"}
      {
        greetings.map((greetingMessage) =>  greeting({name: props.name, greetingMessage}))
      }
    </span>
  )
}

function greeting (props) {
  return <div>{props.greeting} {props.name}</div>
}
