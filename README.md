# CubeTrainer

A web application that serves as a timer, scramble generator, and algorithm driller for speedcubers (people who try to solve a Rubik's cube as fast as possible).

![Website with a timer and net of a Rubik's cube](./screenshots/2026-07-03%2013.30.png)

[Live Demo](https://ethancubes.github.io/CubeTrainer)


## Quick Start
Just open the link bro


## Features
- A timer that times your Rubik's cube solves.
- A scramble generator that generates scrambles for you to time on the timer.
- A net of the cube (A.K.A. Drawing) displays the current scramble that the scramble generator generated.


## How it Works

### Timer
1. When the trigger button is pressed, the JavaScript value Date.now() records the current time.
2. Uses InnerHTML to change the trigger button's text from "start" to "stop" and from black to red.
3. When the trigger button is pressed again, the JavaScript value Date.now() records the current time.
4. The difference between the two values is calculated, and therefore returns the time in milliseconds.
5. Uses InnerHTML to change back the trigger button's text from "stop" to "start" and from red back to black.

### Scramble Generator
1. Upon the page loading or the timer stopping, the scramble generator is told to generate a new scramble.
2. For each of the 20 moves in the scramble, a random basic move is picked (U, L, F, R, B, or D). At this stage there are no primes of twos yet.
3. The chosen move is compared against the previous move. If it is the same move, a different one is picked. If it is not, it procedes.
4. A modifier is chosen (basic, prime, or two). A basic move is just a clockwise rotation, while a prime is a counterclockwise rotations and a two is two rotations (yes, it counts as one move).
5. InnerHTML is used to change the previous/filler scramble text into the actual scramble.

### Cube Drawing (The Cube Net Thing)
This was by far the hardest and most impressive thing to code.
1. An array is set up to store the positions of each sticker) (not pieces cause I don't want to figure that out)
2. Functions for rotation of the top layer and rotatation of the entire cube are the base for every single other move.They work by switching the positions of the stickers in the array to simulate a normal, physical 3x3 cube.
3. A function, when called, analyzes the moves of the scramble, and does every single move in the scramble.
4. The array is then "rendered". That is too say that the actual cube net, (which was made using CSS and HTML) has each sticker on it updated according to it's correspondent in the array.


## Credits
- AI was used to indentify bugs.
- AI was also used to make the JSON algorithm sets from sets of algorithms found on websites like [JPerm.net](https://jperm.net). It otherwise would've taken ages and also leaves a lot of room for human error.
- The algorithms for Roux Edge Orientation (EO) were taken from the JPerm video: [Rubik's Cube: Learn the Roux Method in 10 Minutes](https://www.youtube.com/watch?v=lmBWkk-7teA)
- A bunch of code was stolen from my other project CubeOS, and therefore I guess credit goes to SerenityUX's WebOS tutorial.
- [W3Schools](https://www.w3schools.com/) and [MDN Web Docs](https://devloper.mozilla.org) were helpful for researching what code to write because I'm still very inexperienced.
- [CSTimer.net](https://cstimer.net) and [JPerm.net](https://jperm.net) were the inspirations for me even making this project. A large portion of this project is me trying to copy them lol.