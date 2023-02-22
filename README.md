# Bunny Feeder
The origin of Minesweeper is unclear. According to TechRadar, the first version of the game was 1990's Microsoft Minesweeper, but Eurogamer says Mined-Out by Ian Andrew (1983) was the first Minesweeper game. Curt Johnson, the creator of Microsoft Minesweeper, acknowledges that his game's design was borrowed from another game, but it was not Mined-Out, and he does not remember which game it is.

This is my take on the Minesweeper game, i call it Sleepy Bunnies. The gameplay remains the same, except that we are meant to avoid disturbing the Rabbits while you clear the land. Place Carrots instead of Flags!

# User Stories & Wireframes
| As a User, I ...                         |                 and this happens!    
| :--------------------------------------- |:-----------------------------------------------|
| Click on a square                        |  the square will display either a number, an empty square, or a bunny
| Click on a bunny                         |  then then they lose the game, and a modal displays with a lose message 
| Click on an empty square                 |  then all adjacent empty squares will be displayed, and all numbered squares adjacent to those will be displayed as well.
| Right Click                              |  that square cannot be revealed unless the user right-clicks again to remove the cupcake. This is a purely optional functionality that the player can use to protect squares that they know have a bunny in them and to accurately visualize where bunnies are placed.
| Click on a number                        |  then only that number will be displayed and they must pick another square.
| See an interger                          |  numbered squares contain an integer representing the number of bunnies in adjacent squares, which give hints about where the bunnies are placed.
| See the number of bunnies are left       |  the number on the bottom indicates so
| Click the Try Again? button              |  refresh the game

Wireframe:

<img width="315" alt="Screenshot 2023-02-20 at 1 47 59 PM" src="https://user-images.githubusercontent.com/68887503/220019702-044e28e7-f499-4ce6-b200-3cee00ab80dd.png">

Gameplay Example:

![Screenshot 2023-02-22 at 11 39 08 AM](https://user-images.githubusercontent.com/68887503/220515589-084c8165-d1da-426c-ba43-49f7306708c2.png)


# Technologies used in this project were

HTML & CSS
FlexBox
JavaScript

In addition to this, i have used inbuilt methods such as:

- addEventListener()
- setAttribute()
- fill()
- setInterval()
- some()
- every()
- forEach()
- includes()
- contains()
- add()
- remove()
- createElement()
- appendChild()
- push()
- Array()
- continue

And many more.

# Code Snipets

Learnt and implemented Recursion:

<img width="469" alt="Screenshot 2023-02-22 at 11 40 42 AM" src="https://user-images.githubusercontent.com/68887503/220515838-640be2c8-0e15-4cb6-8748-af4dec38cb02.png">


# Future Work
- Add a timer
- Add scoreboard
- Add audio
