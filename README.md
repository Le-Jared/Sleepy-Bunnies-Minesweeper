# Bunny Feeder
The origin of Minesweeper is unclear. According to TechRadar, the first version of the game was 1990's Microsoft Minesweeper, but Eurogamer says Mined-Out by Ian Andrew (1983) was the first Minesweeper game. Curt Johnson, the creator of Microsoft Minesweeper, acknowledges that his game's design was borrowed from another game, but it was not Mined-Out, and he does not remember which game it is.

This is my take on the Minesweeper game, i call it Sleepy Bunnies. The gameplay remains the same, except that we are meant to avoid disturbing the Rabbits while you clear the land. Place Carrots instead of Flags!

# User Stories & Wireframes
- When the user clicks on a square, the square will display either a number, an empty square, or a bunny.
- If the user clicks on a bunny, then then they lose the game, and a modal displays with a lose message and a restart button.
- If the user clicks on an empty square, then all adjacent empty squares will be displayed, and all numbered squares adjacent to those will be displayed as well.
- If the user clicks on a number, then only that number will be displayed and they must pick another square.
- The numbered squares contain an integer representing the number of bunnies in adjacent squares, which give hints about where the bunnies are placed.
- If the user can accurately deduce the location of a bunny, they can "flag" that square with a carrot by right-clicking on it. -- That square cannot be revealed unless the user right-clicks again to remove the cupcake. This is a purely optional functionality that the player can use to protect squares that they know have a bunny in them and to accurately visualize where bunnies are placed.
- If the user reveals all empty and numbered squares without waking a bunny, they win the game, and a modal displays with a win message and a restart button.
- The number on the bottom indicates how many bunnies are on the board.
- The user can restart again by clicking the Try Again? button

![Screenshot 2023-02-20 at 1 03 38 PM](https://user-images.githubusercontent.com/68887503/220013672-b3436f2a-d191-4407-8aa7-8f3d668420a1.png)

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

