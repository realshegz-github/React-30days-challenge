### WHAT IS REACT:

React is a JavaScript library for building a reusable user interface(UI)

# JSX:

JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code
In JSX element we write className instead of class because class is a reserved word in JavaScript. Similar to className, htmlFor instead of for in label tag
We can inject string, number, boolean, array data to JSX but we cannot directly inject an object

### React Set up

Node is a JavaScript runtime environment that allows JavaScript to run on the server.
The create-react-app has configured a node server for the React Application.

# Module

A single or multiple functions, that can be exported and imported when needed, can be included in a project.

# Package

A Package is a module or a collection of modules.

# Node Package Manager(NPM)

You do not need to install NPM separately - when you install node you will have also NPM. NPM is a default package manager for Node.js

# React Boilerplate

React boilerplate which has been created by create-react-app.

1. node_modules - stores all the necessary node packages of the React applications.

2. Public

### Components

Component is a small, reusable code, which is responsible for one part of the application UI.
A React application is an aggregation of components
Components in React are JavaScript functions or classes, that return a JSX.
Component name must start with an uppercase, and if the name is two words, it should be CamelCase

## Components can be classified as:

- Functional Component / Presentational Component / Stateless Component / Dumb Component
- Class Component / Container Component/ Statefull Component / Smart Component

JavaScript function
A JavaScript function could be either a regular function or an arrow function.
These functions are not exactly the same there is a slight difference between them.

JavaScript Class
A class is a blueprint of an object. We instantiate(declare) a class to create different objects.
In addition, we can create children, by inheriting all the methods and properties of the parent.
read more: https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/

# Rendering components

When we call JSX element we use curly brackets--><Jsx/> and when we call components we do as follows

# Props

Props is a special keyword in React that stands for properties and is used to pass data from one component to another and mostly from parent to child component.
We can say props is a data carrier or a means to transport data.

props is an object which you get instantly when you create a React component.
A component can have one or many props.
Props could be different data types.

only when properties are passed in the parent component that we can access with (props) in child component.

It could be a string, number, boolean, array, object or a function.
However, if we want to apply some logic it is hard to implement with statically written data, so it will be better to use a variable as props

HTML has onclick, onmouseover, onhover, onkeypress and etc event handlers. In React, these handlers are in camelCase.
For instance onClick, onMouseOver, onKeyPress etc

propTypes
The propTypes package helps us to assign the data types of the props we passed to a component.

# defaultProps

The defaultProps can be used when we want to have some default prop types for a component.

When we use an object as props we usually destructure the data to access the values
Destructuring makes our code easy to read

### In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.

Keys help React to identify items which have changed, added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity.
The key should be unique.
Mostly data will come with as an id and we can use id as key
If we do not pass key to React during mapping it raises a warning on the browser.

### Class Component

We will cover class components or stateful component.
Only class based components used to have state and life cycle methods.

However, after React version 16.8.0
Functional components can have state and life cycle using React Hooks.
