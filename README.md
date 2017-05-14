# React minimal

As part of an introduction to React, this repo attempts to show React in a most basic form.

* Many components can be simple functions.
* Data to render in the component is passed in as props.
* Assemble other components by importing them and calling them.


## Setup

Clone this repo, and from the repo's folder

```sh
npm install
npm start
```


## Next steps

* Add a new mount point in index.html (e.g. a div with an id of footer) and render a component into it.
* Add new components and use them inside existing components (e.g. try rendering todays date into the helloTemplate)
* Render complex data structures (objects in objects) as props. Can you pass in the following object to hello template?
  ```
    {
      person: 'Sugar Cube',
      weather: {
        temperature: 15,
        condition: 'raining',
        suggestion: 'Stay inside, or you will melt!!!'
      }
    }
  ```
* Check out the `npm start` script and the `webpack.config.js` file.
* Conditionally show child components using a ternary operator.
* Create child components from an array of data using `.map()`. Can you display a list of tasks on the page, with each having a description and completed status?
