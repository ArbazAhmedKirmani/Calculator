
# React Calculator

A React JS based Simple Calculator

### Run Online
Open [http://ReactCalculator.netlify.com](http://localhost:3000) to view the project online.
  
### Run Locally

Clone the project

`git clone https://github.com/ArbazAhmedKirmani/Calculator`

Go to the project directory

`cd my-project`

In the project directory, you can run:

`npm install`

To download all the required dependencies for the project

To runs the app in the development mode, run:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Documentation

#### 1. Introduction
This project is created to perform Simple Mathmatical Calculation. 
The main functions to perform by this calculator are Adding, Subtraction, Multiplication or Division

#### 2. Overview
It has the option for making simple equations by using brackets `()` and Operators `+ , - , * , /`

In this project, we use `useState` for holding states.
We use `eval()` method for calculation purpose.

This calculator works fine with basic funcationality and can be modified easily by adding other funcationalities
## Demo

![Blank App Screenshot](https://s9.gifyu.com/images/Calculator.gif)

  
## FAQ

#### What if we enter a wrong Equation?

The system will throw error if wrong expression is provided.

#### Does this work with Brakets

Yes it does. It has a functionality to render operator before and after the brakets if not provided.
It also check the number of open and close brackets before calculation and throwan error if found something.

#### What we use for calculation inside project code
We use `eval()` javascript functionality to do the calculation. And for reducing the errors we use Loops and conditions.
