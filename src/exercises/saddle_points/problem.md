Find the saddle points in a 2D matrix of tree heights.

A tree is a **saddle point** if it is:
- Greater than or equal to every element in its row, AND
- Less than or equal to every element in its column.

Return a list of coordinates `(row, column)` for each saddle point.
Matrix coordinates are 1-indexed (e.g. `{ "row": 2, "column": 1 }`).
