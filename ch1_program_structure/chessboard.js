/*
Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a '#' character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

let board = '';
const size = 20

for (let y = 0; y < size; y++) {
  for (let x = 1; x <= size; x++) {
    // If the x axis iteration is odd then add a ' ' to the grid string
    if (x % 2 !== 0) {
      board += ' ';
    } else {
      // if even add a '#' to the board
      board += '#';
    }
  }

  // If the y axis iteration is odd then add a newline character alone
  if (y % 2 !== 0) {
    board += '\n';
  } else {
    // if even add a newline character with a space to shift the position of the chessboard
    board += '\n ';
  }
}

console.log(board);
