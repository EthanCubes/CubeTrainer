# CubeTrainer

A web application that serves as a timer, scramble generator, and algorithm driller for speedcubers (people who try to solve a Rubik's cube as fast as possible).

![The image isn't here yet, but when I do it'll be here](./)

[Live Demo]()


## Quick Start
Just open the link bro


## Features
- A timer that times your Rubik's cube solves.


## How it Works

### Timer
1. When the trigger button is pressed, the JavaScript value Date.now() records the current time.
2. Uses InnerHTML to change the trigger button's text from "start" to "stop" and from black to red.
3. When the trigger button is pressed again, the JavaScript value Date.now() records the current time.
4. The difference between the two values is calculated, and therefore returns the time in milliseconds.
5. Uses InnerHTML to change back the trigger button's text from "stop" to "start" and from red back to black.


## Credits
- [W3Schools](https://www.w3schools.com/) and [MDN Web Docs](https://devloper.mozilla.org) were helpful for researching what code to write because I'm still very inexperienced.