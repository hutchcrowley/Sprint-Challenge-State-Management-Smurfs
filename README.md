# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build a Smurfs village utilizing context or Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What problem does the context API help solve?
      The context API helps create a global application state that is stored on a context object and distributed to the components that need it, without the need for excessive prop drilling. It functions very much like a state management library such as Redux, in that it uses a Provider component to wrap the application, and distribuite state data only to the components that need it, rather than through excessive and confusing prop drilling with deeply nested components. It allows for smaller-scale applications to forgo the need for a library such as Redux through careful use of a combination of the context object, component composition, and limited props drilling, where necessary.

- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
      Actions are objects that describe something that happens in the application. They dispatch action objects to reducer functions, which then create a new state object. Reducers are pure functions that take two arguments. The first is the current state, and the second is an action to modify the current state. The store is an immutable object that describes the state for the entire application. By using actions and reducers to replace the state object with an entirely new state object, we can use time travel debugging, and various other cool features that would not be possible with a mutable state. Another advantage of this design pattern, that is, immutability of state, is that application behavior becomes more organized and predictable overall. This leads to an overall easier to manage application at scale.

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?
      Application state is something like the store object in Redux. It is a large JavaScript object that is immutable, and describes the global state for the entire application. Data stored in the store is meant to be used in multiple places throughout the application, thus the need for the Provider component, and global application state in the first place. Component state is data that only the componenent holding that particular piece of state is concerned with, or possibly it's children through props. Typically, a combination of global and component state will be used in a large-scale application. Really, if a piece of state is only being used by one component, it is easier and probably ultimately just as well to let that state remain component state, instead of adding it to the global state object.

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
      Redux-thunk intercepts the normal, synchronous action -> reducer flow, and allows action creators to perform asynchronous API call. It does this by intercepting and acting on data returned from action creators. If the thing returned is an action, it forwards the action through to the reducer. If it is a function, however, it then invokes the function, a.k.a. the thunk, and passes the dispatch function as an argumentto it. This allows us to dispatch an action inside the then() block of an async function.

* [x] What is your favorite state management system you've learned and this sprint? Please explain why!
      I like using context with the reducer pattern a bit more than straight Redux so far, however I can see various use cases for all of them, and I get that ultimately, the best approach is to use whichever one works best for the given problem you are trying to solve within your application. Sometimes, the best approach is to just mix and match!

## Project Set Up

Follow these steps to set up your project:

- [x] `fork & clone` this repository.
- [x] `cd` into the forked copy of this repository.
- [x] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [x] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [x] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [x] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [x] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [x] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
- [x] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [x] Plan and implement how you are going to manage your state for your application
- [x] You _must_ use either context or Redux as your state management system
- [x] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [x] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```
