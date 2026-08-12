const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./adapter-6kzDakjG.js","./base-adapter-tFZ4sJX1.js","./adapter-CvJ76Tk4.js","./adapter-ffOAhqJL.js","./adapter-CTPajF56.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},r=(e=>e?n(e):n);function i(e,t){let n;try{n=e()}catch{return}return{getItem:e=>{let r=e=>e===null?null:JSON.parse(e,t?.reviver),i=n.getItem(e)??null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,t?.replacer)),removeItem:e=>n.removeItem(e)}}var a=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return a(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return a(t)(e)}}}},o=(e,t)=>(n,r,o)=>{let s={storage:i(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,l=0,u=new Set,d=new Set,f=s.storage;if(!f)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...e)},r,o);let p=()=>{let e=s.partialize({...r()});return f.setItem(s.name,{state:e,version:s.version})},m=o.setState;o.setState=(e,t)=>(m(e,t),p());let h=e((...e)=>(n(...e),p()),r,o);o.getInitialState=()=>h;let g,_=()=>{if(!f)return;let e=++l;c=!1,u.forEach(e=>e(r()??h));let t=s.onRehydrateStorage?.call(s,r()??h)||void 0;return a(f.getItem.bind(f))(s.name).then(e=>{if(e){if(typeof e.version==`number`&&e.version!==s.version){if(s.migrate){let t=s.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}else return[!1,e.state]}return[!1,void 0]}).then(t=>{if(e!==l)return;let[i,a]=t;if(g=s.merge(a,r()??h),n(g,!0),i)return p()}).then(()=>{e===l&&(t?.(r(),void 0),g=r(),c=!0,d.forEach(e=>e(g)))}).catch(n=>{e===l&&t?.(void 0,n)})};return o.persist={setOptions:e=>{s={...s,...e},e.storage&&(f=e.storage)},clearStorage:()=>{f?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>c,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},s.skipHydration||_(),g||h},s=`Convert a long phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).

Punctuation is handled as follows: hyphens are word separators (like whitespace); all other punctuation can be removed from the input.

For example:

| Input                     | Output |
| ------------------------- | ------ |
| As Soon As Possible       | ASAP   |
| Liquid-crystal display    | LCD    |
| Thank George It's Friday! | TGIF   |
`,c=`Given a person's allergy score, determine whether or not they're allergic to a given item, and their full list of allergies.

An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

The list of items (and their value) that were tested are:

- eggs (1)
- peanuts (2)
- shellfish (4)
- strawberries (8)
- tomatoes (16)
- chocolate (32)
- pollen (64)
- cats (128)

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Tom is allergic to any one of those allergens listed above.
- All the allergens Tom is allergic to.

Note: a given score may include allergens **not** listed above (i.e. allergens that score 256, 512, 1024, etc.).
Your program should ignore those components of the score.
For example, if the allergy score is 257, your program should only report the eggs (1) allergy.
`,l=`To try and encourage more sales of different books from a popular 5 book series, a bookshop has decided to offer discounts on multiple book purchases.

One copy of any of the five books costs $8.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you buy all 5, you get a 25% discount.

Note that if you buy four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs $8.

Your mission is to write code to calculate the price of any conceivable shopping basket (containing only books of the same series), giving as big a discount as possible.

For example, how much does this basket of books cost?

- 2 copies of the first book
- 2 copies of the second book
- 2 copies of the third book
- 1 copy of the fourth book
- 1 copy of the fifth book

One way of grouping these 8 books is:

- 1 group of 5 (1st, 2nd,3rd, 4th, 5th)
- 1 group of 3 (1st, 2nd, 3rd)

This would give a total of:

- 5 books at a 25% discount
- 3 books at a 10% discount

Resulting in:

- 5 × (100% - 25%) × $8 = 5 × $6.00 = $30.00, plus
- 3 × (100% - 10%) × $8 = 3 × $7.20 = $21.60

Which equals $51.60.

However, a different way to group these 8 books is:

- 1 group of 4 books (1st, 2nd, 3rd, 4th)
- 1 group of 4 books (1st, 2nd, 3rd, 5th)

This would give a total of:

- 4 books at a 20% discount
- 4 books at a 20% discount

Resulting in:

- 4 × (100% - 20%) × $8 = 4 × $6.40 = $25.60, plus
- 4 × (100% - 20%) × $8 = 4 × $6.40 = $25.60

Which equals $51.20.

And $51.20 is the price with the biggest discount.
`,u=`Score a bowling game.

Bowling is a game where players roll a heavy ball to knock down pins arranged in a triangle.
Write code to keep track of the score of a game of bowling.

## Scoring Bowling

The game consists of 10 frames.
A frame is composed of one or two ball throws with 10 pins standing at frame initialization.
There are three cases for the tabulation of a frame.

- An open frame is where a score of less than 10 is recorded for the frame.
  In this case the score for the frame is the number of pins knocked down.

- A spare is where all ten pins are knocked down by the second throw.
  The total value of a spare is 10 plus the number of pins knocked down in their next throw.

- A strike is where all ten pins are knocked down by the first throw.
  The total value of a strike is 10 plus the number of pins knocked down in the next two throws.
  If a strike is immediately followed by a second strike, then the value of the first strike cannot be determined until the ball is thrown one more time.

Here is a three frame example:

|  Frame 1   |  Frame 2   |     Frame 3      |
| :--------: | :--------: | :--------------: |
| X (strike) | 5/ (spare) | 9 0 (open frame) |

Frame 1 is (10 + 5 + 5) = 20

Frame 2 is (5 + 5 + 9) = 19

Frame 3 is (9 + 0) = 9

This means the current running total is 48.

The tenth frame in the game is a special case.
If someone throws a spare or a strike then they get one or two fill balls respectively.
Fill balls exist to calculate the total of the 10th frame.
Scoring a strike or spare on the fill ball does not give the player more fill balls.
The total value of the 10th frame is the total number of pins knocked down.

For a tenth frame of X1/ (strike and a spare), the total value is 20.

For a tenth frame of XXX (three strikes), the total value is 30.

## Requirements

Write code to keep track of the score of a game of bowling.
It should support two operations:

- \`roll(pins : int)\` is called each time the player rolls a ball.
  The argument is the number of pins knocked down.
- \`score() : int\` is called only at the very end of the game.
  It returns the total score for that game.
`,d=`Implement a clock that handles times without dates.

You should be able to add and subtract minutes to it.

Two clocks that represent the same time should be equal to each other.
`,f=`Calculate the number of steps to reach 1 using the Collatz conjecture.

One evening, you stumbled upon an old notebook filled with cryptic scribbles, as though someone had been obsessively chasing an idea.
On one page, a single question stood out: **Can every number find its way to 1?**
It was tied to something called the **Collatz Conjecture**, a puzzle that has baffled thinkers for decades.

The rules were deceptively simple.
Pick any positive integer.

- If it's even, divide it by 2.
- If it's odd, multiply it by 3 and add 1.

Then, repeat these steps with the result, continuing indefinitely.

Curious, you picked number 12 to test and began the journey:

12 ➜ 6 ➜ 3 ➜ 10 ➜ 5 ➜ 16 ➜ 8 ➜ 4 ➜ 2 ➜ 1

Counting from the second number (6), it took 9 steps to reach 1, and each time the rules repeated, the number kept changing.
At first, the sequence seemed unpredictable — jumping up, down, and all over.
Yet, the conjecture claims that no matter the starting number, we'll always end at 1.

It was fascinating, but also puzzling.
Why does this always seem to work?
Could there be a number where the process breaks down, looping forever or escaping into infinity?
The notebook suggested solving this could reveal something profound — and with it, fame, [fortune][collatz-prize], and a place in history awaits whoever could unlock its secrets.

[collatz-prize]: https://mathprize.net/posts/collatz-conjecture/

Given a positive integer, return the number of steps it takes to reach 1 according to the rules of the Collatz Conjecture.
`,p=`Implement the classic method for composing secret messages called a square code.

Given an English text, output the encoded version of that text.

First, the input is normalized: the spaces and punctuation are removed from the English text and the message is down-cased.

Then, the normalized characters are broken into rows.
These rows can be regarded as forming a rectangle when printed with intervening newlines.

For example, the sentence

\`\`\`text
"If man was meant to stay on the ground, god would have given us roots."
\`\`\`

is normalized to:

\`\`\`text
"ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots"
\`\`\`

The plaintext should be organized into a rectangle as square as possible.
The size of the rectangle should be decided by the length of the message.

If \`c\` is the number of columns and \`r\` is the number of rows, then for the rectangle \`r\` x \`c\` find the smallest possible integer \`c\` such that:

- \`r * c >= length of message\`,
- and \`c >= r\`,
- and \`c - r <= 1\`.

Our normalized text is 54 characters long, dictating a rectangle with \`c = 8\` and \`r = 7\`:

\`\`\`text
"ifmanwas"
"meanttos"
"tayonthe"
"groundgo"
"dwouldha"
"vegivenu"
"sroots  "
\`\`\`

The coded message is obtained by reading down the columns going left to right.

The message above is coded as:

\`\`\`text
"imtgdvsfearwermayoogoanouuiontnnlvtwttddesaohghnsseoau"
\`\`\`

Output the encoded text in chunks that fill perfect rectangles \`(r X c)\`, with \`c\` chunks of \`r\` length, separated by spaces.
For phrases that are \`n\` characters short of the perfect rectangle, pad each of the last \`n\` chunks with a single trailing space.

\`\`\`text
"imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau "
\`\`\`

Notice that were we to stack these, we could visually decode the ciphertext back in to the original message:

\`\`\`text
"imtgdvs"
"fearwer"
"mayoogo"
"anouuio"
"ntnnlvt"
"wttddes"
"aohghn "
"sseoau "
\`\`\`
`,m=`Write a Domain Specific Language similar to the Graphviz dot language.

A [Domain Specific Language (DSL)][dsl] is a small language optimized for a specific domain.
Since a DSL is targeted, it can greatly impact productivity/understanding by allowing the writer to declare _what_ they want rather than _how_.

One problem area where they are applied are complex customizations/configurations.

For example the [DOT language][dot-language] allows you to write a textual description of a graph which is then transformed into a picture by one of the [Graphviz][graphviz] tools (such as \`dot\`).
A simple graph looks like this:

    graph {
        graph [bgcolor="yellow"]
        a [color="red"]
        b [color="blue"]
        a -- b [color="green"]
    }

Putting this in a file \`example.dot\` and running \`dot example.dot -T png -o example.png\` creates an image \`example.png\` with red and blue circle connected by a green line on a yellow background.

Our DSL is similar to the Graphviz dot language in that our DSL will be used to create graph data structures.
However, unlike the DOT Language, our DSL will be an internal DSL for use only in our language.

[Learn more about the difference between internal and external DSLs][fowler-dsl].

[dsl]: https://en.wikipedia.org/wiki/Domain-specific_language
[dot-language]: https://en.wikipedia.org/wiki/DOT_(graph_description_language)
[graphviz]: https://graphviz.org/
[fowler-dsl]: https://martinfowler.com/bliki/DomainSpecificLanguage.html
`,h='Write a function `fizzbuzz` that takes an integer `n` and returns a string based on the following rules:\n\n- If `n` is divisible by both 3 and 5, return `"FizzBuzz"`.\n- If `n` is divisible by 3, return `"Fizz"`.\n- If `n` is divisible by 5, return `"Buzz"`.\n- Otherwise, return `n` converted to a string (e.g. `"1"`, `"2"`).\n\n# Problem Statement\n\nImplement `fizzbuzz` so that it returns the correct string according to the FizzBuzz rules.\n',g=`Implement Conway's Game of Life.

[Conway's Game of Life][game-of-life] is a fascinating cellular automaton created by the British mathematician John Horton Conway in 1970.

The game consists of a two-dimensional grid of cells that can either be "alive" or "dead."

After each generation, the cells interact with their eight neighbors via a set of rules, which define the new generation.

[game-of-life]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

After each generation, the cells interact with their eight neighbors, which are cells adjacent horizontally, vertically, or diagonally.

The following rules are applied to each cell:

- Any live cell with two or three live neighbors lives on.
- Any dead cell with exactly three live neighbors becomes a live cell.
- All other cells die or stay dead.

Given a matrix of 1s and 0s (corresponding to live and dead cells), apply the rules to each cell, and return the next generation.
`,_=`Given students' names along with the grade they are in, create a roster for the school.

In the end, you should be able to:

- Add a student's name to the roster for a grade:
  - "Add Jim to grade 2."
  - "OK."
- Get a list of all students enrolled in a grade:
  - "Which students are in grade 2?"
  - "We've only got Jim right now."
- Get a sorted list of all students in all grades.
  Grades should be sorted as 1, 2, 3, etc., and students within a grade should be sorted alphabetically by name.
  - "Who is enrolled in school right now?"
  - "Let me think.
    We have Anna, Barb, and Charlie in grade 1, Alex, Peter, and Zoe in grade 2, and Jim in grade 5.
    So the answer is: Anna, Barb, Charlie, Alex, Peter, Zoe, and Jim."

Note that all our students only have one name (it's a small town, what do you want?), and each student cannot be added more than once to a grade or the roster.
If a test attempts to add the same student more than once, your implementation should indicate that this is incorrect.
`,v=`Welcome to interactive coding exercises! All exercises can be run directly inside your browser.

Let's start with the classic "Hello World" program.

Check the starter code in the exercise window, modify it to print "Hello, world!", and then click the **Run** button to execute your code.

# Problem Statement

Print out \`"Hello, world!"\` to the console output.`,y=`Write a tool that makes it easier to solve Killer Sudokus

A friend of yours is learning how to solve Killer Sudokus (rules below) but struggling to figure out which digits can go in a cage.
They ask you to help them out by writing a small program that lists all valid combinations for a given cage, and any constraints that affect the cage.

To make the output of your program easy to read, the combinations it returns must be sorted.

## Killer Sudoku Rules

- [Standard Sudoku rules][sudoku-rules] apply.
- The digits in a cage, usually marked by a dotted line, add up to the small number given in the corner of the cage.
- A digit may only occur once in a cage.

For a more detailed explanation, check out [this guide][killer-guide].

## Example 1: Cage with only 1 possible combination

In a 3-digit cage with a sum of 7, there is only one valid combination: 124.

- 1 + 2 + 4 = 7
- Any other combination that adds up to 7, e.g. 232, would violate the rule of not repeating digits within a cage.

![Sudoku grid, with three killer cages that are marked as grouped together.
The first killer cage is in the 3×3 box in the top left corner of the grid.
The middle column of that box forms the cage, with the followings cells from top to bottom: first cell contains a 1 and a pencil mark of 7, indicating a cage sum of 7, second cell contains a 2, third cell contains a 5.
The numbers are highlighted in red to indicate a mistake.
The second killer cage is in the central 3×3 box of the grid.
The middle column of that box forms the cage, with the followings cells from top to bottom: first cell contains a 1 and a pencil mark of 7, indicating a cage sum of 7, second cell contains a 2, third cell contains a 4.
None of the numbers in this cage are highlighted and therefore don't contain any mistakes.
The third killer cage follows the outside corner of the central 3×3 box of the grid.
It is made up of the following three cells: the top left cell of the cage contains a 2, highlighted in red, and a cage sum of 7.
The top right cell of the cage contains a 3.
The bottom right cell of the cage contains a 2, highlighted in red. All other cells are empty.][one-solution-img]

## Example 2: Cage with several combinations

In a 2-digit cage with a sum 10, there are 4 possible combinations:

- 19
- 28
- 37
- 46

![Sudoku grid, all squares empty except for the middle column, column 5, which has 8 rows filled.
Each continguous two rows form a killer cage and are marked as grouped together.
From top to bottom: first group is a cell with value 1 and a pencil mark indicating a cage sum of 10, cell with value 9.
Second group is a cell with value 2 and a pencil mark of 10, cell with value 8.
Third group is a cell with value 3 and a pencil mark of 10, cell with value 7.
Fourth group is a cell with value 4 and a pencil mark of 10, cell with value 6.
The last cell in the column is empty.][four-solutions-img]

## Example 3: Cage with several combinations that is restricted

In a 2-digit cage with a sum 10, where the column already contains a 1 and a 4, there are 2 possible combinations:

- 28
- 37

19 and 46 are not possible due to the 1 and 4 in the column according to standard Sudoku rules.

![Sudoku grid, all squares empty except for the middle column, column 5, which has 8 rows filled.
The first row contains a 4, the second is empty, and the third contains a 1.
The 1 is highlighted in red to indicate a mistake.
The last 6 rows in the column form killer cages of two cells each.
From top to bottom: first group is a cell with value 2 and a pencil mark indicating a cage sum of 10, cell with value 8.
Second group is a cell with value 3 and a pencil mark of 10, cell with value 7.
Third group is a cell with value 1, highlighted in red, and a pencil mark of 10, cell with value 9.][not-possible-img]

## Trying it yourself

If you want to give an approachable Killer Sudoku a go, you can try out [this puzzle][clover-puzzle] by Clover, featured by [Mark Goodliffe on Cracking The Cryptic on the 21st of June 2021][goodliffe-video].

You can also find Killer Sudokus in varying difficulty in numerous newspapers, as well as Sudoku apps, books and websites.

## Credit

The screenshots above have been generated using F-Puzzles.com, a Puzzle Setting Tool by Eric Fox.

[sudoku-rules]: https://en.wikipedia.org/wiki/Sudoku
[killer-guide]: https://en.wikipedia.org/wiki/Killer_sudoku
[one-solution-img]: https://assets.exercism.org/images/exercises/killer-sudoku-helper/example1.png
[four-solutions-img]: https://assets.exercism.org/images/exercises/killer-sudoku-helper/example2.png
[not-possible-img]: https://assets.exercism.org/images/exercises/killer-sudoku-helper/example3.png
[clover-puzzle]: https://sudokupad.app/HqTBn3Pr6R
[goodliffe-video]: https://youtu.be/c_NjEbFEeW0?t=1180
`,ee=`Given a diagram, determine which plants each child in the kindergarten class is responsible for.

There are 12 children in the class (in alphabetical order):
- Alice, Bob, Charlie, David, Eve, Fred, Ginny, Harriet, Ileana, Joseph, Kincaid, and Larry.

Four different types of seeds are planted:
- Grass (\`G\`)
- Clover (\`C\`)
- Radish (\`R\`)
- Violet (\`V\`)

Each child gets four cups, two on each row (top row and bottom row).
The teacher assigns cups to children alphabetically by their names from left to right.

Given a diagram string (two lines separated by \`\\n\`), return an array/list of plant names (e.g. \`["radishes", "clover", "grass", "grass"]\`) for a given student.
`,b=`Make sure the brackets and braces all match.

You're given the opportunity to write software for the Bracketeer™, an ancient but powerful mainframe.
The software that runs on it is written in a proprietary language.
Much of its syntax is familiar, but you notice _lots_ of brackets, braces and parentheses.
Despite the Bracketeer™ being powerful, it lacks flexibility.
If the source code has any unbalanced brackets, braces or parentheses, the Bracketeer™ crashes and must be rebooted.
To avoid such a scenario, you start writing code that can verify that brackets, braces, and parentheses are balanced before attempting to run it on the Bracketeer™.

Given a string containing brackets \`[]\`, braces \`{}\`, parentheses \`()\`, or any combination thereof, verify that any and all pairs are matched and nested correctly.
Any other characters should be ignored.
For example, \`"{what is (42)}?"\` is balanced and \`"[text}"\` is not.
`,te=`Given a 3 x 4 grid of pipes, underscores, and spaces, determine which number is represented, or whether it is garbled.

Your best friend Marta recently landed their dream job working with a local history museum's collections.
Knowing of your interests in programming, they confide in you about an issue at work for an upcoming exhibit on computing history.
A local university's math department had donated several boxes of historical printouts, but given the poor condition of the documents, the decision has been made to digitize the text.
However, the university's old printer had some quirks in how text was represented, and your friend could use your help to extract the data successfully.

Optical Character Recognition or OCR is software that converts images of text into machine-readable text.
Given a grid of characters representing some digits, convert the grid to a string of digits.
If the grid has multiple rows of cells, the rows should be separated in the output with a \`","\`.

- The grid is made of one of more lines of cells.
- Each line of the grid is made of one or more cells.
- Each cell is three columns wide and four rows high (3x4) and represents one digit.
- Digits are drawn using pipes (\`"|"\`), underscores (\`"_"\`), and spaces (\`" "\`).

## Edge cases

- If the input is not a valid size, your program should indicate there is an error.
- If the input is the correct size, but a cell is not recognizable, your program should output a \`"?"\` for that character.

## Examples

The following input (without the comments) is converted to \`"1234567890"\`.

\`\`\`text
      _  _     _  _  _  _  _  _  #
    | _| _||_||_ |_   ||_||_|| | # Decimal numbers.
    ||_  _|  | _||_|  ||_| _||_| #
                                 # The fourth line is always blank,
\`\`\`

The following input is converted to \`"123,456,789"\`.

<!-- prettier-ignore-start -->

\`\`\`text
    _  _ 
  | _| _|
  ||_  _|
         
    _  _ 
|_||_ |_ 
  | _||_|
         
 _  _  _ 
  ||_||_|
  ||_| _|
         
\`\`\`

<!-- prettier-ignore-end -->
`,x=`Determine if a number is perfect, abundant, or deficient based on Nicomachus' (60 - 120 CE) classification scheme for positive integers.

The Greek mathematician [Nicomachus][nicomachus] devised a classification scheme for positive integers, identifying each as belonging uniquely to the categories of [perfect](#perfect), [abundant](#abundant), or [deficient](#deficient) based on their [aliquot sum][aliquot-sum].
The _aliquot sum_ is defined as the sum of the factors of a number not including the number itself.
For example, the aliquot sum of \`15\` is \`1 + 3 + 5 = 9\`.

## Perfect

A number is perfect when it equals its aliquot sum.
For example:

- \`6\` is a perfect number because \`1 + 2 + 3 = 6\`
- \`28\` is a perfect number because \`1 + 2 + 4 + 7 + 14 = 28\`

## Abundant

A number is abundant when it is less than its aliquot sum.
For example:

- \`12\` is an abundant number because \`1 + 2 + 3 + 4 + 6 = 16\`
- \`24\` is an abundant number because \`1 + 2 + 3 + 4 + 6 + 8 + 12 = 36\`

## Deficient

A number is deficient when it is greater than its aliquot sum.
For example:

- \`8\` is a deficient number because \`1 + 2 + 4 = 7\`
- Prime numbers are deficient

## Task

Implement a way to determine whether a given number is [perfect](#perfect).
Depending on your language track, you may also need to implement a way to determine whether a given number is [abundant](#abundant) or [deficient](#deficient).

[nicomachus]: https://en.wikipedia.org/wiki/Nicomachus
[aliquot-sum]: https://en.wikipedia.org/wiki/Aliquot_sum
`,S=`Pick the best hand(s) from a list of poker hands.

Given a list of poker hands as strings (e.g. \`["4S 5S 7H 8D JC", "2S 4C 7S 9H 10H"]\`), evaluate each hand according to standard Texas Hold'em high-card / pair / flush / straight rules and return an array containing the winning hand(s). If there is a tie, return all tying winning hands.
`,C=`Reparent a tree on a selected node.

A [tree][wiki-tree] is a special type of [graph][wiki-graph] where all nodes are connected but there are no cycles.
That means, there is exactly one path to get from one node to another for any pair of nodes.

This exercise is all about re-orientating a tree to see things from a different point of view.
For example family trees are usually presented from the ancestor's perspective:

\`\`\`text
    +------0------+
    |      |      |
  +-1-+  +-2-+  +-3-+
  |   |  |   |  |   |
  4   5  6   7  8   9
\`\`\`

But there is no inherent direction in a tree.
The same information can be presented from the perspective of any other node in the tree, by pulling it up to the root and dragging its relationships along with it.
So the same tree from 6's perspective would look like:

\`\`\`text
        6
        |
  +-----2-----+
  |           |
  7     +-----0-----+
        |           |
      +-1-+       +-3-+
      |   |       |   |
      4   5       8   9
\`\`\`

This lets us more simply describe the paths between two nodes.
So for example the path from 6-9 (which in the first tree goes up to the root and then down to a different leaf node) can be seen to follow the path 6-2-0-3-9.

This exercise involves taking an input tree and re-orientating it from the point of view of one of the nodes.

[wiki-graph]: https://en.wikipedia.org/wiki/Tree_(graph_theory)
[wiki-tree]: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
`,ne=`Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.

In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

A chessboard can be represented by an 8 by 8 array.

So if you are told the white queen is at \`c5\` (zero-indexed at column 2, row 3) and the black queen at \`f2\` (zero-indexed at column 5, row 6), then you know that the set-up is like so:

![A chess board with two queens. Arrows emanating from the queen at c5 indicate possible directions of capture along file, rank and diagonal.](https://assets.exercism.org/images/exercises/queen-attack/queen-capture.svg)

You are also able to answer whether the queens can attack each other.
In this case, that answer would be yes, they can, because both pieces share a diagonal.

## Credit

The chessboard image was made by [habere-et-dispertire][habere-et-dispertire] using LaTeX and the [chessboard package][chessboard-package] by Ulrike Fischer.

[habere-et-dispertire]: https://exercism.org/profiles/habere-et-dispertire
[chessboard-package]: https://github.com/u-fischer/chessboard
`,re=`Count the rectangles in an ASCII diagram like the one below.

\`\`\`text
   +--+
  ++  |
+-++--+
|  |  |
+--+--+
\`\`\`

The above diagram contains these 6 rectangles:

\`\`\`text


+-----+
|     |
+-----+
\`\`\`

\`\`\`text
   +--+
   |  |
   |  |
   |  |
   +--+
\`\`\`

\`\`\`text
   +--+
   |  |
   +--+


\`\`\`

\`\`\`text


   +--+
   |  |
   +--+
\`\`\`

\`\`\`text


+--+
|  |
+--+
\`\`\`

\`\`\`text

  ++
  ++


\`\`\`

You may assume that the input is always a proper rectangle (i.e. the length of every line equals the length of the first line).
`,ie=`Given a family tree, calculate the degree of separation.

You've been hired to develop **Noble Knots**, the hottest new dating app for nobility!
With centuries of royal intermarriage, things have gotten… _complicated_.
To avoid any _oops-we're-twins_ situations, your job is to build a system that checks how closely two people are related.

Noble Knots is inspired by Iceland's "[Islendinga-App][islendiga-app]," which is backed up by a database that traces all known family connections between Icelanders from the time of the settlement of Iceland.
Your algorithm will determine the **degree of separation** between two individuals in the royal family tree.

Will your app help crown a perfect match?

[islendiga-app]: https://web.archive.org/web/20250816223614/http://www.islendingaapp.is/information-in-english/

Your task is to determine the degree of separation between two individuals in a family tree.
This is similar to the pop culture idea that every Hollywood actor is [within six degrees of Kevin Bacon][six-bacons].

- You will be given an input, with all parent names and their children.
- Each name is unique, a child _can_ have one or two parents.
- The degree of separation is defined as the shortest number of connections from one person to another.
- If two individuals are not connected, return a value that represents "no known relationship."
  Please see the test cases for the actual implementation.

## Example

Given the following family tree:

\`\`\`text
      ┌──────────┐            ┌──────────┐     ┌───────────┐
      │  Helena  │            │  Erdős   ├─────┤  Shusaku  │
      └───┬───┬──┘            └─────┬────┘     └────┬──────┘
      ┌───┘   └───────┐             └───────┬───────┘
┌─────┴────┐     ┌────┴───┐           ┌─────┴────┐
│   Isla   ├─────┤ Tariq  │           │   Kevin  │
└────┬─────┘     └────┬───┘           └──────────┘
     │                │
┌────┴────┐      ┌────┴───┐
│   Uma   │      │ Morphy │
└─────────┘      └────────┘
\`\`\`

The degree of separation between Tariq and Uma is 2 (Tariq → Isla → Uma).
There's no known relationship between Isla and Kevin, as there is no connection in the given data.
The degree of separation between Uma and Isla is 1.

~~~~exercism/note
Isla and Tariq are siblings and have a separation of 1.
Similarly, this implementation would report a separation of 2 from you to your father's brother.
~~~~

[six-bacons]: https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon
`,ae=`Write a robot simulator.

A robot factory's test facility needs a program to verify robot movements.

The robots have three possible movements:

- turn right
- turn left
- advance

Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of {x,y} coordinates,
e.g., {3,8}, with coordinates increasing to the north and east.

The robot then receives a number of instructions, at which point the testing facility verifies the robot's new position, and in which direction it is pointing.

- The letter-string "RAALAL" means:
  - Turn right
  - Advance twice
  - Turn left
  - Advance once
  - Turn left yet again
- Say a robot starts at {7, 3} facing north.
  Then running this stream of instructions should leave it at {9, 4} facing west.
`,oe=`Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

\`\`\`text
"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
\`\`\`

RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.

\`\`\`text
"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
\`\`\`

For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace.
This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.
`,se=`Find the saddle points in a 2D matrix of tree heights.

A tree is a **saddle point** if it is:
- Greater than or equal to every element in its row, AND
- Less than or equal to every element in its column.

Return a list of coordinates \`(row, column)\` for each saddle point.
Matrix coordinates are 1-indexed (e.g. \`{ "row": 2, "column": 1 }\`).
`,ce=`Given a number from 0 to 999,999,999,999, spell out that number in English.

Your friend Yaʻqūb works the counter at the busiest deli in town, slicing, weighing, and wrapping orders for a never-ending line of hungry customers.
To keep things moving, each customer takes a numbered ticket when they arrive.

When it’s time to call the next person, Yaʻqūb reads their number out loud, always in full English words to make sure everyone hears it clearly.

Given a number, your task is to express it in English words exactly as your friend should say it out loud.
Yaʻqūb expects to use numbers from 0 up to 999,999,999,999.

Examples:

- 0 → zero
- 1 → one
- 12 → twelve
- 123 → one hundred twenty-three
- 1,234 → one thousand two hundred thirty-four
`,le=`Given a word, compute the Scrabble score for that word.

[Scrabble][wikipedia] is a word game where players place letter tiles on a board to form words.
Each letter has a value.
A word's score is the sum of its letters' values.

[wikipedia]: https://en.wikipedia.org/wiki/Scrabble

Your task is to compute a word's Scrabble score by summing the values of its letters.

The letters are valued as follows:

| Letter                       | Value |
| ---------------------------- | ----- |
| A, E, I, O, U, L, N, R, S, T | 1     |
| D, G                         | 2     |
| B, C, M, P                   | 3     |
| F, H, V, W, Y                | 4     |
| K                            | 5     |
| J, X                         | 8     |
| Q, Z                         | 10    |

For example, the word "cabbage" is worth 14 points:

- 3 points for C
- 1 point for A
- 3 points for B
- 3 points for B
- 1 point for A
- 2 points for G
- 1 point for E
`,ue=`Write a simple linked list implementation that uses Elements and a List.

You work for a music streaming company.

You've been tasked with creating a playlist feature for your music player application.

Write a prototype of the music player application.

For the prototype, each song will simply be represented by a number.
Given a range of numbers (the song IDs), create a singly linked list.

Given a singly linked list, you should be able to reverse the list to play the songs in the opposite order.

~~~~exercism/note
The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures.

The simplest kind of linked list is a **singly** linked list.
That means that each element (or "node") contains data, along with something that points to the next node in the list.

If you want to dig deeper into linked lists, check out [this article][intro-linked-list] that explains it using nice drawings.

[intro-linked-list]: https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d
~~~~
`,de=`Determine the game state of a match of Tic-Tac-Toe.

In this exercise, you're going to implement a program that determines the state of a [tic-tac-toe][] game.
(_You may also know the game as "noughts and crosses" or "Xs and Os"._)

The game is played on a 3×3 grid.
Players take turns to place \`X\`s and \`O\`s on the grid.
The game ends when one player has won by placing three of marks in a row, column, or along a diagonal of the grid, or when the entire grid is filled up.

In this exercise, we will assume that \`X\` starts.

It's your job to determine which state a given game is in.

There are 3 potential game states:

- The game is **ongoing**.
- The game ended in a **draw**.
- The game ended in a **win**.

If the given board is invalid, throw an appropriate error.

If a board meets the following conditions, it is invalid:

- The given board cannot be reached when turns are taken in the correct order (remember that \`X\` starts).
- The game was played after it already ended.

## Examples

### Ongoing game

\`\`\`text
   |   |
 X |   |
___|___|___
   |   |
   | X | O
___|___|___
   |   |
 O | X |
   |   |
\`\`\`

### Draw

\`\`\`text
   |   |
 X | O | X
___|___|___
   |   |
 X | X | O
___|___|___
   |   |
 O | X | O
   |   |
\`\`\`

### Win

\`\`\`text
   |   |
 X | X | X
___|___|___
   |   |
   | O | O
___|___|___
   |   |
   |   |
   |   |
\`\`\`

### Invalid

#### Wrong turn order

\`\`\`text
   |   |
 O | O | X
___|___|___
   |   |
   |   |
___|___|___
   |   |
   |   |
   |   |
\`\`\`

#### Continued playing after win

\`\`\`text
   |   |
 X | X | X
___|___|___
   |   |
 O | O | O
___|___|___
   |   |
   |   |
   |   |
\`\`\`

[tic-tac-toe]: https://en.wikipedia.org/wiki/Tic-tac-toe
`,w="Implement the `keep` and `discard` operations on collections.\n\nGiven a collection and a predicate on the collection's elements, `keep` returns a new collection containing those elements where the predicate is true, while `discard` returns a new collection containing those elements where the predicate is false.\n\nFor example, given the collection of numbers `[1, 2, 3, 4, 5]` and the predicate `is_even`:\n- `keep` should produce `[2, 4]`\n- `discard` should produce `[1, 3, 5]`\n\n## Restrictions\nDo not use standard library collection filtering (e.g. `Array.prototype.filter`, `List.filter`, `filter()` in Python/Go). Solve this using basic loop and conditional constructs!\n",T=`Convert delivery date descriptions to actual delivery dates.

This week, it is your turn to take notes in the department's planning meeting.
In this meeting, your boss will set delivery dates for all open work items.
Annoyingly, instead of specifying the _actual_ delivery dates, your boss will only _describe them_ in an abbreviated format.
As many of your colleagues won't be familiar with this corporate lingo, you'll need to convert these delivery date descriptions to actual delivery dates.

Your task is to convert delivery date descriptions to _actual_ delivery dates, based on when the meeting started.

There are two types of delivery date descriptions:

1. Fixed: a predefined set of words.
2. Variable: words that have a variable component, but follow a predefined set of patterns.

## Fixed delivery date descriptions

There are three fixed delivery date descriptions:

- \`"NOW"\`
- \`"ASAP"\` (As Soon As Possible)
- \`"EOW"\` (End Of Week)

The following table shows how to translate them:

| Description | Meeting start                 | Delivery date                       |
| ----------- | ----------------------------- | ----------------------------------- |
| \`"NOW"\`     | -                             | Two hours after the meeting started |
| \`"ASAP"\`    | Before 13:00                  | Today at 17:00                      |
| \`"ASAP"\`    | After or at 13:00             | Tomorrow at 13:00                   |
| \`"EOW"\`     | Monday, Tuesday, or Wednesday | Friday at 17:00                     |
| \`"EOW"\`     | Thursday or Friday            | Sunday at 20:00                     |

## Variable delivery date descriptions

There are two variable delivery date description patterns:

- \`"<N>M"\` (N-th month)
- \`"Q<N>"\` (N-th quarter)

| Description | Meeting start             | Delivery date                                             |
| ----------- | ------------------------- | --------------------------------------------------------- |
| \`"<N>M"\`    | Before N-th month         | At 8:00 on the _first_ workday of this year's N-th month  |
| \`"<N>M"\`    | After or in N-th month    | At 8:00 on the _first_ workday of next year's N-th month  |
| \`"Q<N>"\`    | Before or in N-th quarter | At 8:00 on the _last_ workday of this year's N-th quarter |
| \`"Q<N>"\`    | After N-th quarter        | At 8:00 on the _last_ workday of next year's N-th quarter |

~~~~exercism/note
A workday is a Monday, Tuesday, Wednesday, Thursday, or Friday.

A year has four quarters, each with three months:
1. January/February/March
2. April/May/June
3. July/August/September
4. October/November/December.
~~~~
`,E=`Tally the results of a small football competition.

Based on an input file containing which team played against which and what the outcome was, create a file with a table like this:

\`\`\`text
Team                           | MP |  W |  D |  L |  P
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6
Blithering Badgers             |  3 |  1 |  0 |  2 |  3
Courageous Californians        |  3 |  0 |  1 |  2 |  1
\`\`\`

What do those abbreviations mean?

- MP: Matches Played
- W: Matches Won
- D: Matches Drawn (Tied)
- L: Matches Lost
- P: Points

A win earns a team 3 points.
A draw earns 1.
A loss earns 0.

The outcome is ordered by points, descending.
In case of a tie, teams are ordered alphabetically.

## Input

Your tallying program will receive input that looks like:

\`\`\`text
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win
\`\`\`

The result of the match refers to the first team listed.
So this line:

\`\`\`text
Allegoric Alaskans;Blithering Badgers;win
\`\`\`

means that the Allegoric Alaskans beat the Blithering Badgers.

This line:

\`\`\`text
Courageous Californians;Blithering Badgers;loss
\`\`\`

means that the Blithering Badgers beat the Courageous Californians.

And this line:

\`\`\`text
Devastating Donkeys;Courageous Californians;draw
\`\`\`

means that the Devastating Donkeys and Courageous Californians tied.
`,D=`Refactor a tree building algorithm.

Some web-forums have a tree layout, so posts are presented as a tree.
However the posts are typically stored in a database as an unsorted set of records.
Thus when presenting the posts to the user the tree structure has to be reconstructed.

Your job will be to refactor a working but slow and ugly piece of code that implements the tree building logic for highly abstracted records.
The records only contain an ID number and a parent ID number.
The ID number is always between 0 (inclusive) and the length of the record list (exclusive).
All records have a parent ID lower than their own ID, except for the root record, which has a parent ID that's equal to its own ID.

An example tree:

\`\`\`text
root (ID: 0, parent ID: 0)
|-- child1 (ID: 1, parent ID: 0)
|    |-- grandchild1 (ID: 2, parent ID: 1)
|    +-- grandchild2 (ID: 4, parent ID: 1)
+-- child2 (ID: 3, parent ID: 0)
|    +-- grandchild3 (ID: 6, parent ID: 3)
+-- child3 (ID: 5, parent ID: 0)
\`\`\`
`,fe=`Given two buckets of different size and which bucket to fill first, determine how many actions are required to measure an exact number of liters by strategically transferring fluid between the buckets.

There are some rules that your solution must follow:

- You can only do one action at a time.
- There are only 3 possible actions:
  1. Pouring one bucket into the other bucket until either:
     a) the first bucket is empty
     b) the second bucket is full
  2. Emptying a bucket and doing nothing to the other.
  3. Filling a bucket and doing nothing to the other.
- After an action, you may not arrive at a state where the initial starting bucket is empty and the other bucket is full.

Your program will take as input:

- the size of bucket one
- the size of bucket two
- the desired number of liters to reach
- which bucket to fill first, either bucket one or bucket two

Your program should determine:

- the total number of actions it should take to reach the desired number of liters, including the first fill of the starting bucket
- which bucket should end up with the desired number of liters - either bucket one or bucket two
- how many liters are left in the other bucket

Note: any time a change is made to either or both buckets counts as one (1) action.

Example:
Bucket one can hold up to 7 liters, and bucket two can hold up to 11 liters.
Let's say at a given step, bucket one is holding 7 liters and bucket two is holding 8 liters (7,8).
If you empty bucket one and make no change to bucket two, leaving you with 0 liters and 8 liters respectively (0,8), that counts as one action.
Instead, if you had poured from bucket one into bucket two until bucket two was full, resulting in 4 liters in bucket one and 11 liters in bucket two (4,11), that would also only count as one action.

Another Example:
Bucket one can hold 3 liters, and bucket two can hold up to 5 liters.
You are told you must start with bucket one.
So your first action is to fill bucket one.
You choose to empty bucket one for your second action.
For your third action, you may not fill bucket two, because this violates the third rule -- you may not end up in a state after any action where the starting bucket is empty and the other bucket is full.

Written with <3 at [Fullstack Academy][fullstack] by Lindsay Levine.

[fullstack]: https://www.fullstackacademy.com/
`,O=`Implement variable length quantity encoding and decoding.

The goal of this exercise is to implement [VLQ][vlq] encoding/decoding.

In short, the goal of this encoding is to encode integer values in a way that would save bytes.
Only the first 7 bits of each byte are significant (right-justified; sort of like an ASCII byte).
So, if you have a 32-bit value, you have to unpack it into a series of 7-bit bytes.
Of course, you will have a variable number of bytes depending upon your integer.
To indicate which is the last byte of the series, you leave bit #7 clear.
In all of the preceding bytes, you set bit #7.

So, if an integer is between \`0-127\`, it can be represented as one byte.
Although VLQ can deal with numbers of arbitrary sizes, for this exercise we will restrict ourselves to only numbers that fit in a 32-bit unsigned integer.
Here are examples of integers as 32-bit values, and the variable length quantities that they translate to:

\`\`\`text
 NUMBER        VARIABLE QUANTITY
00000000              00
00000040              40
0000007F              7F
00000080             81 00
00002000             C0 00
00003FFF             FF 7F
00004000           81 80 00
00100000           C0 80 00
001FFFFF           FF FF 7F
00200000          81 80 80 00
08000000          C0 80 80 00
0FFFFFFF          FF FF FF 7F
\`\`\`

[vlq]: https://en.wikipedia.org/wiki/Variable-length_quantity
`,pe=`Parse and evaluate simple math word problems returning the answer as an integer.

## Iteration 0 — Numbers

Problems with no operations simply evaluate to the number given.

> What is 5?

Evaluates to 5.

## Iteration 1 — Addition

Add two numbers together.

> What is 5 plus 13?

Evaluates to 18.

Handle large numbers and negative numbers.

## Iteration 2 — Subtraction, Multiplication and Division

Now, perform the other three operations.

> What is 7 minus 5?

2

> What is 6 multiplied by 4?

24

> What is 25 divided by 5?

5

## Iteration 3 — Multiple Operations

Handle a set of operations, in sequence.

Since these are verbal word problems, evaluate the expression from left-to-right, _ignoring the typical order of operations._

> What is 5 plus 13 plus 6?

24

> What is 3 plus 2 multiplied by 3?

15 (i.e. not 9)

## Iteration 4 — Errors

The parser should reject:

- Unsupported operations ("What is 52 cubed?")
- Non-math questions ("Who is the President of the United States")
- Word problems with invalid syntax ("What is 1 plus plus 2?")
`,me=`Score a single throw of dice in the game Yacht.

Each year, something new is "all the rage" in your high school.
This year it is a dice game: [Yacht][yacht].

The game of Yacht is from the same family as Poker Dice, Generala and particularly Yahtzee, of which it is a precursor.
The game consists of twelve rounds.
In each, five dice are rolled and the player chooses one of twelve categories.
The chosen category is then used to score the throw of the dice.

[yacht]: https://en.wikipedia.org/wiki/Yacht_(dice_game)

Given five dice and a category, calculate the score of the dice for that category.

~~~~exercism/note
You'll always be presented with five dice.
Each dice's value will be between one and six inclusively.
The dice may be unordered.
~~~~

## Scores in Yacht

| Category        | Score                  | Description                              | Example             |
| --------------- | ---------------------- | ---------------------------------------- | ------------------- |
| Ones            | 1 × number of ones     | Any combination                          | 1 1 1 4 5 scores 3  |
| Twos            | 2 × number of twos     | Any combination                          | 2 2 3 4 5 scores 4  |
| Threes          | 3 × number of threes   | Any combination                          | 3 3 3 3 3 scores 15 |
| Fours           | 4 × number of fours    | Any combination                          | 1 2 3 3 5 scores 0  |
| Fives           | 5 × number of fives    | Any combination                          | 5 1 5 2 5 scores 15 |
| Sixes           | 6 × number of sixes    | Any combination                          | 2 3 4 5 6 scores 6  |
| Full House      | Total of the dice      | Three of one number and two of another   | 3 3 3 5 5 scores 19 |
| Four of a Kind  | Total of the four dice | At least four dice showing the same face | 4 4 4 4 6 scores 16 |
| Little Straight | 30 points              | 1-2-3-4-5                                | 1 2 3 4 5 scores 30 |
| Big Straight    | 30 points              | 2-3-4-5-6                                | 2 3 4 5 6 scores 30 |
| Choice          | Sum of the dice        | Any combination                          | 2 3 3 4 6 scores 18 |
| Yacht           | 50 points              | All five dice showing the same face      | 4 4 4 4 4 scores 50 |

If the dice do **not** satisfy the requirements of a category, the score is zero.
If, for example, _Four Of A Kind_ is entered in the _Yacht_ category, zero points are scored.
A _Yacht_ scores zero if entered in the _Full House_ category.
`,he=`package main

func Abbreviate(s string) string {
	// Your code here
	return ""
}
`,ge=`let abbreviate (phrase : string) : string =
  (* Your code here *)
  ""
`,_e=`def abbreviate(words: str) -> str:
    # Your code here
    return ""
`,ve=`export function parse(phrase: string): string {
  // Your code here
  return "";
}
`,ye=`package main

func AllergicTo(item string, score int) bool {
	// Your code here
	return false
}

func Allergies(score int) []string {
	// Your code here
	return nil
}
`,be=`let allergic_to (item : string) (score : int) : bool =
  (* Your code here *)
  false

let allergies (score : int) : string list =
  (* Your code here *)
  []
`,xe=`def allergic_to(item: str, score: int) -> bool:
    # Your code here
    return False

def list_allergies(score: int) -> list[str]:
    # Your code here
    return []
`,Se=`export function allergicTo(item: string, score: number): boolean {
  // Your code here
  return false;
}

export function list(score: number): string[] {
  // Your code here
  return [];
}
`,Ce=`package main

func Total(basket []int) int {
	// Your code here
	return 0
}
`,we=`let total (basket : int list) : int =
  (* Your code here *)
  0
`,Te=`def total(basket: list[int]) -> int:
    # Your code here
    return 0
`,Ee=`export function total(basket: number[]): number {
  // Your code here
  return 0;
}
`,De=`package main

type Game struct{}

func NewBowling() *Game {
	return &Game{}
}

func (g *Game) Roll(pins int) error {
	// Your code here
	return nil
}

func (g *Game) Score() (int, error) {
	// Your code here
	return 0, nil
}
`,Oe=`type game = { rolls : int list }

let create () : game = { rolls = [] }

let roll (pins : int) (g : game) : (game, string) result =
  (* Your code here *)
  Ok g

let score (g : game) : (int, string) result =
  (* Your code here *)
  Ok 0
`,ke=`class BowlingGame:
    def __init__(self):
        # Your code here
        pass

    def roll(self, pins: int):
        # Your code here
        pass

    def score(self) -> int:
        # Your code here
        return 0
`,Ae=`export class Bowling {
  public roll(pins: number): void {
    // Your code here
  }

  public score(): number | { error: string } {
    // Your code here
    return 0;
  }
}
`,je=`package main

type Clock struct {
	totalMinutes int
}

func NewClock(hour, minute int) Clock {
	// Your code here
	return Clock{}
}

func (c Clock) String() string {
	// Your code here
	return "00:00"
}

func (c Clock) Add(minutes int) Clock {
	// Your code here
	return c
}

func (c Clock) Subtract(minutes int) Clock {
	// Your code here
	return c
}
`,Me=`type clock = { total_minutes : int }

let create (hour : int) (minute : int) : clock =
  (* Your code here *)
  { total_minutes = 0 }

let add (minutes : int) (c : clock) : clock =
  (* Your code here *)
  c

let sub (minutes : int) (c : clock) : clock =
  (* Your code here *)
  c

let to_string (c : clock) : string =
  (* Your code here *)
  "00:00"
`,Ne=`class Clock:
    def __init__(self, hour: int, minute: int = 0):
        # Your code here
        pass

    def __repr__(self) -> str:
        return "00:00"

    def __eq__(self, other: object) -> bool:
        return False

    def __add__(self, minutes: int) -> "Clock":
        return self

    def __sub__(self, minutes: int) -> "Clock":
        return self
`,Pe=`export class Clock {
  constructor(hour: number, minute: number = 0) {
    // Your code here
  }

  public toString(): string {
    // Your code here
    return "00:00";
  }

  public plus(minutes: number): Clock {
    // Your code here
    return this;
  }

  public minus(minutes: number): Clock {
    // Your code here
    return this;
  }

  public equals(other: Clock): boolean {
    // Your code here
    return false;
  }
}
`,Fe=`package main

func Steps(number int) (int, error) {
	// Your code here
	return 0, nil
}
`,Ie=`let steps (number : int) : (int, string) result =
  (* Your code here *)
  Ok 0
`,Le=`def steps(number: int) -> int:
    # Your code here
    return 0
`,k=`export function steps(n: number): number | { error: string } {
  // Your code here
  return 0;
}
`,Re=`package main

func Encode(pt string) string {
	// Your code here
	return ""
}
`,ze=`let encode (plaintext : string) : string =
  (* Your code here *)
  ""
`,Be=`def cipher_text(plain_text: str) -> str:
    # Your code here
    return ""
`,Ve=`export function encode(plaintext: string): string {
  // Your code here
  return "";
}
`,He=`package main

type Node struct {
	Name  string
	Attrs map[string]string
}

type Edge struct {
	From  string
	To    string
	Attrs map[string]string
}

type Graph struct {
	Nodes []Node
	Edges []Edge
	Attrs map[string]string
}

func NewGraph() *Graph {
	return &Graph{
		Nodes: []Node{},
		Edges: []Edge{},
		Attrs: make(map[string]string),
	}
}
`,Ue=`type attr = string * string
type node = { name : string; attrs : attr list }
type edge = { from_node : string; to_node : string; attrs : attr list }
type graph = { nodes : node list; edges : edge list; attrs : attr list }

let create_graph (items : [\`Node of node | \`Edge of edge | \`Attr of attr] list) : graph =
  (* Your code here *)
  { nodes = []; edges = []; attrs = [] }
`,We=`NODE = 0
EDGE = 1
ATTR = 2

class Node:
    def __init__(self, name: str, attrs: dict = None):
        self.name = name
        self.attrs = attrs or {}

class Edge:
    def __init__(self, src: str, dst: str, attrs: dict = None):
        self.src = src
        self.dst = dst
        self.attrs = attrs or {}

class Graph:
    def __init__(self, data=None):
        self.nodes = []
        self.edges = []
        self.attrs = {}
        # Your code here
`,Ge=`export class Node {
  constructor(public name: string, public attrs: Record<string, string> = {}) {}
}

export class Edge {
  constructor(public from: string, public to: string, public attrs: Record<string, string> = {}) {}
}

export class Attr {
  constructor(public key: string, public value: string) {}
}

export class Graph {
  public nodes: Node[] = [];
  public edges: Edge[] = [];
  public attrs: Record<string, string> = {};

  constructor(items: Array<Node | Edge | Attr> = []) {
    // Your code here
  }
}
`,Ke=`package main

import "strconv"

func FizzBuzz(n int) string {
	// Your code here
	return ""
}
`,qe=`let fizzbuzz (n : int) : string =
  (* Your code here *)
  ""
`,Je=`def fizzbuzz(n: int) -> str:
    # Your code here
    pass
`,Ye=`function fizzbuzz(n: number): string {
  // Your code here
  return "";
}
`,Xe=`package main

func Tick(matrix [][]int) [][]int {
	// Your code here
	return nil
}
`,Ze=`let tick (matrix : int list list) : int list list =
  (* Your code here *)
  []
`,Qe=`def tick(matrix: list[list[int]]) -> list[list[int]]:
    # Your code here
    return []
`,$e=`export function tick(matrix: number[][]): number[][] {
  // Your code here
  return [];
}
`,et=`package main

type Student struct {
	Name  string
	Grade int
}

func Roster(students []Student) []string {
	// Your code here
	return nil
}

func Grade(students []Student, desiredGrade int) []string {
	// Your code here
	return nil
}

func Add(students []Student) []bool {
	// Your code here
	return nil
}
`,tt=`let roster (students : (string * int) list) : string list =
  (* Your code here *)
  []

let grade (students : (string * int) list) (desired_grade : int) : string list =
  (* Your code here *)
  []

let add (students : (string * int) list) : bool list =
  (* Your code here *)
  []
`,nt=`def roster(students: list[tuple[str, int]]) -> list[str]:
    # Your code here
    return []

def grade(students: list[tuple[str, int]], desired_grade: int) -> list[str]:
    # Your code here
    return []

def add(students: list[tuple[str, int]]) -> list[bool]:
    # Your code here
    return []
`,rt=`export function roster(students: Array<[string, number]>): string[] {
  // Your code here
  return [];
}

export function grade(students: Array<[string, number]>, desiredGrade: number): string[] {
  // Your code here
  return [];
}

export function add(students: Array<[string, number]>): boolean[] {
  // Your code here
  return [];
}
`,it=`package main

import "fmt"

func main() {
	fmt.Println("some message")
}
`,at=`let () = print_endline "some message"
`,ot=`print("some message")
`,st=`console.log("some message");
`,ct=`package main

func Combinations(target, size int, exclude []int) [][]int {
	// Your code here
	return [][]int{}
}
`,lt=`let combinations (target : int) (size : int) (exclude : int list) : int list list =
  (* Your code here *)
  []
`,ut=`def combinations(target: int, size: int, exclude: list[int]) -> list[list[int]]:
    # Your code here
    return []
`,dt=`export interface Cage {
  sum: number;
  size: number;
  exclude?: number[];
}

export function combinations(cage: Cage): number[][] {
  // Your code here
  return [];
}
`,ft=`package main

func Plants(diagram string, student string) []string {
	// Your code here
	return nil
}
`,pt=`let plants (diagram : string) (student : string) : string list =
  (* Your code here *)
  []
`,mt=`def plants(diagram, student):
    # Your code here
    pass
`,ht=`export function plants(diagram: string, student: string): string[] {
  // Your code here
  return [];
}
`,gt=`package main

func IsPaired(input string) bool {
	// Your code here
	return false
}
`,_t=`let is_paired (input : string) : bool =
  (* Your code here *)
  false
`,vt=`def is_paired(input_string: str) -> bool:
    # Your code here
    return False
`,yt=`export function isPaired(input: string): boolean {
  // Your code here
  return false;
}
`,bt=`package main

func Convert(lines string) (string, error) {
	// Your code here
	return "", nil
}
`,xt=`let convert (input_grid : string list) : (string, string) result =
  (* Your code here *)
  Ok ""
`,St=`def convert(input_grid: list[str]) -> str:
    # Your code here
    return ""
`,Ct=`export function convert(lines: string): string | { error: string } {
  // Your code here
  return "";
}
`,wt=`package main

func Classify(number int) (string, error) {
	// Your code here
	return "deficient", nil
}
`,Tt=`let classify (number : int) : (string, string) result =
  (* Your code here *)
  Ok "deficient"
`,Et=`def classify(number: int) -> str:
    # Your code here
    return "deficient"
`,Dt=`export function classify(n: number): "perfect" | "abundant" | "deficient" | { error: string } {
  // Your code here
  return "deficient";
}
`,Ot=`package main

func BestHands(hands []string) []string {
	// Your code here
	return nil
}
`,kt=`let best_hands (hands : string list) : string list =
  (* Your code here *)
  []
`,At=`def best_hands(hands):
    # Your code here
    pass
`,jt=`export function bestHands(hands: string[]): string[] {
  // Your code here
  return [];
}
`,Mt=`package main

type Tree struct {
	Value    string
	Children []*Tree
}

func NewTree(value string, children ...*Tree) *Tree {
	return &Tree{Value: value, Children: children}
}

func FromPov(tr *Tree, target string) *Tree {
	// Your code here
	return tr
}

func PathTo(tr *Tree, from, to string) []string {
	// Your code here
	return nil
}
`,Nt=`type tree = { value : string; children : tree list }

let from_pov (target : string) (tr : tree) : tree option =
  (* Your code here *)
  Some tr

let path_to (from_node : string) (to_node : string) (tr : tree) : string list option =
  (* Your code here *)
  Some []
`,Pt=`class Tree:
    def __init__(self, label: str, children: list = None):
        self.label = label
        self.children = children or []

    def from_pov(self, from_node: str):
        # Your code here
        return self

    def path_to(self, from_node: str, to_node: str) -> list[str]:
        # Your code here
        return []
`,Ft=`export class Tree {
  constructor(public value: string, public children: Tree[] = []) {}

  public fromPov(target: string): Tree {
    // Your code here
    return this;
  }

  public pathTo(from: string, to: string): string[] {
    // Your code here
    return [];
  }
}
`,It=`package main

func Create(row, col int) string {
	// Your code here
	return "ok"
}

func CanAttack(whiteRow, whiteCol, blackRow, blackCol int) bool {
	// Your code here
	return false
}
`,Lt=`let create (row : int) (col : int) : string =
  (* Your code here *)
  "ok"

let can_attack ((w_row, w_col) : int * int) ((b_row, b_col) : int * int) : bool =
  (* Your code here *)
  false
`,Rt=`def create(queen: dict):
    # Your code here
    return 0

def can_attack(white_queen: dict, black_queen: dict) -> bool:
    # Your code here
    return False
`,zt=`interface Position {
  row: number;
  column: number;
}

interface Queen {
  position: Position;
}

export function create(queen: Queen): number | { error: string } {
  // Your code here
  return 0;
}

export function canAttack(whiteQueen: Queen, blackQueen: Queen): boolean {
  // Your code here
  return false;
}
`,Bt=`package main

func Count(lines []string) int {
	// Your code here
	return 0
}
`,Vt=`let count (lines : string list) : int =
  (* Your code here *)
  0
`,Ht=`def count(lines: list[str]) -> int:
    # Your code here
    return 0
`,Ut=`export function count(lines: string[]): number {
  // Your code here
  return 0;
}
`,Wt=`package main

func DegreeOfSeparation(familyTree map[string][]string, personA, personB string) int {
	// Your code here
	return -1
}
`,Gt=`let degree_of_separation (family_tree : (string * string list) list) (person_a : string) (person_b : string) : int option =
  (* Your code here *)
  None
`,Kt=`def degree_of_separation(family_tree: dict[str, list[str]], person_a: str, person_b: str):
    # Your code here
    return None
`,qt=`export function degreeOfSeparation(
  familyTree: Record<string, string[]>,
  personA: string,
  personB: string
): number | null {
  // Your code here
  return null;
}
`,Jt=`package main

func Step(x, y int, dir string, instructions string) (int, int, string) {
	// Your code here
	return x, y, dir
}
`,Yt=`let simulate (x : int) (y : int) (dir : string) (instructions : string) : (int * int * string) =
  (* Your code here *)
  (x, y, dir)
`,Xt=`NORTH = "north"
EAST = "east"
SOUTH = "south"
WEST = "west"

class Robot:
    def __init__(self, direction=NORTH, x=0, y=0):
        self.direction = direction
        self.coordinates = (x, y)

    def turn_right(self):
        # Your code here
        pass

    def turn_left(self):
        # Your code here
        pass

    def advance(self):
        # Your code here
        pass

    def move(self, instructions):
        # Your code here
        pass
`,Zt=`export type Direction = "north" | "east" | "south" | "west";
export type Coordinates = [number, number];

export class Robot {
  public get bearing(): Direction {
    // Your code here
    return "north";
  }

  public get coordinates(): Coordinates {
    // Your code here
    return [0, 0];
  }

  public place(position: { x: number; y: number; direction: Direction }): void {
    // Your code here
  }

  public evaluate(instructions: string): void {
    // Your code here
  }
}
`,Qt=`package main

func Encode(input string) string {
	// Your code here
	return ""
}

func Decode(input string) string {
	// Your code here
	return ""
}
`,$t=`let encode (input : string) : string =
  (* Your code here *)
  ""

let decode (input : string) : string =
  (* Your code here *)
  ""
`,en=`def encode(string: str) -> str:
    # Your code here
    return ""

def decode(string: str) -> str:
    # Your code here
    return ""
`,tn=`export function encode(input: string): string {
  // Your code here
  return "";
}

export function decode(input: string): string {
  // Your code here
  return "";
}
`,nn=`package main

type Pair struct {
	Row    int
	Column int
}

func SaddlePoints(matrix [][]int) []Pair {
	// Your code here
	return nil
}
`,rn=`type position = { row : int; column : int }

let saddle_points (matrix : int list list) : position list =
  (* Your code here *)
  []
`,an=`def saddle_points(matrix):
    # Your code here
    pass
`,on=`export interface Position {
  row: number;
  column: number;
}

export function saddlePoints(matrix: number[][]): Position[] {
  // Your code here
  return [];
}
`,sn=`package main

func Say(n int64) (string, bool) {
	// Your code here
	return "", false
}
`,cn=`let say (number : Int64.t) : (string, string) result =
  (* Your code here *)
  Ok "zero"
`,ln=`def say(number: int) -> str:
    # Your code here
    return ""
`,un=`export function say(n: number): string | { error: string } {
  // Your code here
  return "";
}
`,dn=`package main

func Score(word string) int {
	// Your code here
	return 0
}
`,fn=`let score (word : string) : int =
  (* Your code here *)
  0
`,pn=`def score(word: str) -> int:
    # Your code here
    return 0
`,mn=`export function score(word: string): number {
  // Your code here
  return 0;
}
`,hn=`package main

type Element struct {
	Value int
	Next  *Element
}

type List struct {
	head *Element
	size int
}

func (l *List) Size() int {
	return l.size
}

func (l *List) Push(element int) {
	// Your code here
}

func (l *List) Pop() (int, error) {
	// Your code here
	return 0, nil
}

func (l *List) Reverse() *List {
	// Your code here
	return l
}

func ListOps(initialValues []int, operations []map[string]interface{}) map[string]interface{} {
	// Your code here
	return map[string]interface{}{}
}
`,gn=`type 'a node = {
  value : 'a;
  mutable next : 'a node option;
}

type 'a simple_linked_list = {
  mutable head : 'a node option;
  mutable size : int;
}

let create () = { head = None; size = 0 }

let push list v =
  (* Your code here *)
  ()

let pop list =
  (* Your code here *)
  None

let list_ops (initial_values : int list) (operations : (string * int option) list) : bool =
  (* Your code here *)
  true
`,_n=`class Element:
    def __init__(self, value):
        self.value = value
        self.next = None

class SimpleLinkedList:
    def __init__(self, values=None):
        self._head = None
        self._length = 0
        if values:
            for v in values:
                self.push(v)

    def __len__(self):
        return self._length

    def push(self, value):
        # Your code here
        pass

    def pop(self):
        # Your code here
        raise IndexError("list is empty")

    def reversed(self):
        # Your code here
        return self

def list_ops(initial_values: list[int], operations: list[dict]) -> dict:
    # Your code here
    return {}
`,vn=`export class Element<T> {
  public value: T;
  public next: Element<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class SimpleLinkedList<T> {
  private headNode: Element<T> | null = null;
  private countNodes: number = 0;

  push(value: T): void {
    // Your code here
  }

  pop(): T {
    // Your code here
    throw new Error("list is empty");
  }

  get length(): number {
    return this.countNodes;
  }

  toArray(): T[] {
    // Your code here
    return [];
  }

  reverse(): SimpleLinkedList<T> {
    // Your code here
    return this;
  }
}

export function list(initialValues: number[], operations: any[]): Record<string, any> {
  // Your code here
  return {};
}
`,yn=`package main

func Gamestate(board []string) (string, error) {
	// Your code here
	return "ongoing", nil
}
`,bn=`let gamestate (board : string list) : (string, string) result =
  (* Your code here *)
  Ok "ongoing"
`,xn=`def gamestate(board: list[str]) -> str:
    # Your code here
    return "ongoing"
`,Sn=`export function gamestate(board: string[]): "win" | "draw" | "ongoing" | { error: string } {
  // Your code here
  return "ongoing";
}
`,Cn=`package main

func Keep[T any](list []T, predicate func(T) bool) []T {
	// Your code here
	return nil
}

func Discard[T any](list []T, predicate func(T) bool) []T {
	// Your code here
	return nil
}
`,wn=`let keep (p : 'a -> bool) (l : 'a list) : 'a list =
  (* Your code here *)
  []

let discard (p : 'a -> bool) (l : 'a list) : 'a list =
  (* Your code here *)
  []
`,Tn=`def keep(seq, predicate):
    # Your code here
    pass

def discard(seq, predicate):
    # Your code here
    pass
`,En=`export function keep<T>(array: T[], predicate: (element: T) => boolean): T[] {
  // Your code here
  return [];
}

export function discard<T>(array: T[], predicate: (element: T) => boolean): T[] {
  // Your code here
  return [];
}
`,Dn=`package main

func DeliveryDate(meetingStart, description string) string {
	// Your code here
	return ""
}
`,On=`let delivery_date (meeting_start : string) (description : string) : string =
  (* Your code here *)
  ""
`,kn=`def delivery_date(meeting_start: str, description: str) -> str:
    # Your code here
    return ""
`,An=`export function deliveryDate(meetingStart: string, description: string): string {
  // Your code here
  return "";
}
`,jn=`package main

func Tally(input []string) []string {
	// Your code here
	return []string{"Team                           | MP |  W |  D |  L |  P"}
}
`,Mn=`let tally (input : string list) : string list =
  (* Your code here *)
  ["Team                           | MP |  W |  D |  L |  P"]
`,Nn=`def tally(input: list[str]) -> list[str]:
    # Your code here
    return ["Team                           | MP |  W |  D |  L |  P"]
`,Pn=`export function tally(input: string[]): string[] {
  // Your code here
  return ["Team                           | MP |  W |  D |  L |  P"];
}
`,Fn=`package main

type Record struct {
	ID     int
	Parent int
}

type Node struct {
	ID       int
	Children []*Node
}

func Build(records []Record) (*Node, error) {
	// Your code here
	return nil, nil
}
`,In=`type record = { id : int; parent : int }
type node = { id : int; children : node list }

let build (records : record list) : (node option, string) result =
  (* Your code here *)
  Ok None
`,Ln=`class Record:
    def __init__(self, record_id: int, parent_id: int):
        self.record_id = record_id
        self.parent_id = parent_id

class RecordNode:
    def __init__(self, node_id: int):
        self.node_id = node_id
        self.children = []

def Build(records: list[Record]) -> RecordNode | None:
    # Your code here
    return None
`,Rn=`export interface Record {
  id: number;
  parent: number;
}

export class RecordNode {
  id: number;
  children: RecordNode[];

  constructor(id: number) {
    this.id = id;
    this.children = [];
  }
}

export function Build(records: Record[]): RecordNode | null {
  // Your code here
  return null;
}
`,zn=`package main

type Result struct {
	Moves       int
	GoalBucket  string
	OtherBucket int
}

func Measure(bucketOne, bucketTwo, goal int, startBucket string) (Result, string) {
	// Your code here
	return Result{}, "impossible"
}
`,Bn=`type result = {
  moves : int;
  goal_bucket : string;
  other_bucket : int;
}

let measure (bucket_one : int) (bucket_two : int) (goal : int) (start_bucket : string) : result option =
  (* Your code here *)
  None
`,Vn=`def measure(bucket_one: int, bucket_two: int, goal: int, start_bucket: str) -> dict:
    # Your code here
    return {}
`,Hn=`export interface Result {
  moves: number;
  goalBucket: string;
  otherBucket: number;
}

export function measure(
  bucketOne: number,
  bucketTwo: number,
  goal: number,
  startBucket: string
): Result | { error: string } {
  // Your code here
  return { moves: 0, goalBucket: "", otherBucket: 0 };
}
`,Un=`package main

func Encode(numbers []uint32) []byte {
	// Your code here
	return nil
}

func Decode(bytes []byte) ([]uint32, error) {
	// Your code here
	return nil, nil
}
`,Wn=`let encode (numbers : int list) : int list =
  (* Your code here *)
  []

let decode (bytes : int list) : int list =
  (* Your code here *)
  []
`,Gn=`def encode(numbers: list[int]) -> list[int]:
    # Your code here
    return []

def decode(bytes_seq: list[int]) -> list[int]:
    # Your code here
    return []
`,Kn=`export function encode(numbers: number[]): number[] {
  // Your code here
  return [];
}

export function decode(bytes: number[]): number[] {
  // Your code here
  return [];
}
`,qn=`package main

func Answer(question string) (int, error) {
	// Your code here
	return 0, nil
}
`,Jn=`let answer (question : string) : (int, string) result =
  (* Your code here *)
  Ok 0
`,Yn=`def answer(question: str) -> int:
    # Your code here
    return 0
`,Xn=`export function answer(question: string): number | { error: string } {
  // Your code here
  return 0;
}
`,Zn=`package main

func Score(dice []int, category string) int {
	// Your code here
	return 0
}
`,Qn=`let score (dice : int list) (category : string) : int =
  (* Your code here *)
  0
`,$n=`def score(dice: list[int], category: str) -> int:
    # Your code here
    return 0
`,er=`export function score(dice: number[], category: string): number {
  // Your code here
  return 0;
}
`,tr=`package main

func main() {
	Tests.EqualCheck("basic", "PNG", Abbreviate("Portable Network Graphics"))
	Tests.EqualCheck("lowercase words", "ROR", Abbreviate("Ruby on Rails"))
	Tests.EqualCheck("punctuation", "FIFO", Abbreviate("First In, First Out"))
	Tests.EqualCheck("all caps word", "GIMP", Abbreviate("GNU Image Manipulation Program"))
	Tests.EqualCheck("hyphenated", "CMOS", Abbreviate("Complementary metal-oxide-semaphore"))
	Tests.EqualCheck("consecutive delimiters", "SIMUFTA", Abbreviate("Something - I must have dreamt it or wept: a-footfall on the stair"))
}
`,nr=`let identity s = s

let () =
  Tests.string_check identity "basic" "PNG" (abbreviate "Portable Network Graphics");
  Tests.string_check identity "lowercase words" "ROR" (abbreviate "Ruby on Rails");
  Tests.string_check identity "punctuation" "FIFO" (abbreviate "First In, First Out");
  Tests.string_check identity "all caps word" "GIMP" (abbreviate "GNU Image Manipulation Program");
  Tests.string_check identity "hyphenated" "CMOS" (abbreviate "Complementary metal-oxide-semaphore");
  Tests.string_check identity "consecutive delimiters" "SIMUFTA" (abbreviate "Something - I must have dreamt it or wept: a-footfall on the stair")
`,rr=`if 'abbreviate' not in globals():
    raise Exception("abbreviate function is not defined")

Tests.equal_check("basic", "PNG", abbreviate("Portable Network Graphics"))
Tests.equal_check("lowercase words", "ROR", abbreviate("Ruby on Rails"))
Tests.equal_check("punctuation", "FIFO", abbreviate("First In, First Out"))
Tests.equal_check("all caps word", "GIMP", abbreviate("GNU Image Manipulation Program"))
Tests.equal_check("hyphenated", "CMOS", abbreviate("Complementary metal-oxide-semaphore"))
Tests.equal_check("consecutive delimiters", "SIMUFTA", abbreviate("Something - I must have dreamt it or wept: a-footfall on the stair"))
`,ir=`// @ts-nocheck
if (typeof parse !== "function") {
  throw new Error("parse function is not defined");
}

Tests.equalCheck("basic", "PNG", parse("Portable Network Graphics"));
Tests.equalCheck("lowercase words", "ROR", parse("Ruby on Rails"));
Tests.equalCheck("punctuation", "FIFO", parse("First In, First Out"));
Tests.equalCheck("all caps word", "GIMP", parse("GNU Image Manipulation Program"));
Tests.equalCheck("hyphenated", "CMOS", parse("Complementary metal-oxide-semaphore"));
Tests.equalCheck("consecutive delimiters", "SIMUFTA", parse("Something - I must have dreamt it or wept: a-footfall on the stair"));
`,ar=`package main

import "fmt"

func main() {
	Tests.BoolCheck("not allergic to anything", false == AllergicTo("eggs", 0))
	Tests.BoolCheck("allergic only to eggs", true == AllergicTo("eggs", 1))
	Tests.BoolCheck("allergic to eggs and something else", true == AllergicTo("eggs", 3))
	Tests.BoolCheck("allergic to something, but not eggs", false == AllergicTo("eggs", 2))
	Tests.BoolCheck("allergic to everything", true == AllergicTo("eggs", 255))
	Tests.BoolCheck("allergic to peanuts", true == AllergicTo("peanuts", 7))
	Tests.BoolCheck("ignores non-allergen bits for AllergicTo", true == AllergicTo("eggs", 257))

	Tests.EqualCheck("no allergies", fmt.Sprintf("%v", []string{}), fmt.Sprintf("%v", Allergies(0)))
	Tests.EqualCheck("just eggs", fmt.Sprintf("%v", []string{"eggs"}), fmt.Sprintf("%v", Allergies(1)))
	Tests.EqualCheck("just peanuts", fmt.Sprintf("%v", []string{"peanuts"}), fmt.Sprintf("%v", Allergies(2)))
	Tests.EqualCheck("just strawberries", fmt.Sprintf("%v", []string{"strawberries"}), fmt.Sprintf("%v", Allergies(8)))
	Tests.EqualCheck("eggs and peanuts", fmt.Sprintf("%v", []string{"eggs", "peanuts"}), fmt.Sprintf("%v", Allergies(3)))
	Tests.EqualCheck("more than eggs but not peanuts", fmt.Sprintf("%v", []string{"eggs", "shellfish"}), fmt.Sprintf("%v", Allergies(5)))
	Tests.EqualCheck("everything", fmt.Sprintf("%v", []string{"eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"}), fmt.Sprintf("%v", Allergies(255)))
	Tests.EqualCheck("ignores non-allergen score parts", fmt.Sprintf("%v", []string{"eggs", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"}), fmt.Sprintf("%v", Allergies(509)))
	Tests.EqualCheck("ignores non-allergen score parts without highest valid score", fmt.Sprintf("%v", []string{"eggs"}), fmt.Sprintf("%v", Allergies(257)))
}
`,or=`let string_of_str_list lst =
  "[" ^ String.concat "; " (List.map (fun s -> "\\"" ^ s ^ "\\"") lst) ^ "]"

let () =
  Tests.bool_check "not allergic to anything" (not (allergic_to "eggs" 0));
  Tests.bool_check "allergic only to eggs" (allergic_to "eggs" 1);
  Tests.bool_check "allergic to eggs and something else" (allergic_to "eggs" 3);
  Tests.bool_check "allergic to something, but not eggs" (not (allergic_to "eggs" 2));
  Tests.bool_check "allergic to everything" (allergic_to "eggs" 255);
  Tests.bool_check "allergic to peanuts" (allergic_to "peanuts" 7);
  Tests.bool_check "ignores non-allergen bits for allergic_to" (allergic_to "eggs" 257);

  Tests.string_check string_of_str_list "no allergies" [] (allergies 0);
  Tests.string_check string_of_str_list "just eggs" ["eggs"] (allergies 1);
  Tests.string_check string_of_str_list "just peanuts" ["peanuts"] (allergies 2);
  Tests.string_check string_of_str_list "just strawberries" ["strawberries"] (allergies 8);
  Tests.string_check string_of_str_list "eggs and peanuts" ["eggs"; "peanuts"] (allergies 3);
  Tests.string_check string_of_str_list "more than eggs but not peanuts" ["eggs"; "shellfish"] (allergies 5);
  Tests.string_check string_of_str_list "everything" ["eggs"; "peanuts"; "shellfish"; "strawberries"; "tomatoes"; "chocolate"; "pollen"; "cats"] (allergies 255);
  Tests.string_check string_of_str_list "ignores non-allergen score parts" ["eggs"; "shellfish"; "strawberries"; "tomatoes"; "chocolate"; "pollen"; "cats"] (allergies 509);
  Tests.string_check string_of_str_list "ignores non-allergen score parts without highest valid score" ["eggs"] (allergies 257)
`,sr=`if 'allergic_to' not in globals() or 'list_allergies' not in globals():
    raise Exception("allergic_to and list_allergies functions must be defined")

Tests.equal_check("not allergic to anything", False, allergic_to("eggs", 0))
Tests.equal_check("allergic only to eggs", True, allergic_to("eggs", 1))
Tests.equal_check("allergic to eggs and something else", True, allergic_to("eggs", 3))
Tests.equal_check("allergic to something, but not eggs", False, allergic_to("eggs", 2))
Tests.equal_check("allergic to everything", True, allergic_to("eggs", 255))
Tests.equal_check("allergic to peanuts", True, allergic_to("peanuts", 7))
Tests.equal_check("ignores non-allergen bits for allergic_to", True, allergic_to("eggs", 257))

Tests.equal_check("no allergies", [], list_allergies(0))
Tests.equal_check("just eggs", ["eggs"], list_allergies(1))
Tests.equal_check("just peanuts", ["peanuts"], list_allergies(2))
Tests.equal_check("just strawberries", ["strawberries"], list_allergies(8))
Tests.equal_check("eggs and peanuts", ["eggs", "peanuts"], list_allergies(3))
Tests.equal_check("more than eggs but not peanuts", ["eggs", "shellfish"], list_allergies(5))
Tests.equal_check("everything", ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"], list_allergies(255))
Tests.equal_check("ignores non-allergen score parts", ["eggs", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"], list_allergies(509))
Tests.equal_check("ignores non-allergen score parts without highest valid score", ["eggs"], list_allergies(257))
`,cr=`// @ts-nocheck
if (typeof allergicTo !== "function" || typeof list !== "function") {
  throw new Error("allergicTo and list functions must be defined");
}

Tests.equalCheck("not allergic to anything", false, allergicTo("eggs", 0));
Tests.equalCheck("allergic only to eggs", true, allergicTo("eggs", 1));
Tests.equalCheck("allergic to eggs and something else", true, allergicTo("eggs", 3));
Tests.equalCheck("allergic to something, but not eggs", false, allergicTo("eggs", 2));
Tests.equalCheck("allergic to everything", true, allergicTo("eggs", 255));
Tests.equalCheck("allergic to peanuts", true, allergicTo("peanuts", 7));
Tests.equalCheck("ignores non-allergen bits for allergicTo", true, allergicTo("eggs", 257));

Tests.equalCheck("no allergies", JSON.stringify([]), JSON.stringify(list(0)));
Tests.equalCheck("just eggs", JSON.stringify(["eggs"]), JSON.stringify(list(1)));
Tests.equalCheck("just peanuts", JSON.stringify(["peanuts"]), JSON.stringify(list(2)));
Tests.equalCheck("just strawberries", JSON.stringify(["strawberries"]), JSON.stringify(list(8)));
Tests.equalCheck("eggs and peanuts", JSON.stringify(["eggs", "peanuts"]), JSON.stringify(list(3)));
Tests.equalCheck("more than eggs but not peanuts", JSON.stringify(["eggs", "shellfish"]), JSON.stringify(list(5)));
Tests.equalCheck("everything", JSON.stringify(["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]), JSON.stringify(list(255)));
Tests.equalCheck("ignores non-allergen score parts", JSON.stringify(["eggs", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]), JSON.stringify(list(509)));
Tests.equalCheck("ignores non-allergen score parts without highest valid score", JSON.stringify(["eggs"]), JSON.stringify(list(257)));
`,lr=`package main

func main() {
	Tests.EqualCheck("Only a single book", 800, Total([]int{1}))
	Tests.EqualCheck("Two of the same book", 1600, Total([]int{2, 2}))
	Tests.EqualCheck("Empty basket", 0, Total([]int{}))
	Tests.EqualCheck("Two different books", 1520, Total([]int{1, 2}))
	Tests.EqualCheck("Three different books", 2160, Total([]int{1, 2, 3}))
	Tests.EqualCheck("Four different books", 2560, Total([]int{1, 2, 3, 4}))
	Tests.EqualCheck("Five different books", 3000, Total([]int{1, 2, 3, 4, 5}))
	Tests.EqualCheck("Two groups of four is cheaper than group of five plus group of three", 5120, Total([]int{1, 1, 2, 2, 3, 3, 4, 5}))
	Tests.EqualCheck("Two groups of four differs in book order", 5120, Total([]int{1, 1, 2, 3, 4, 4, 5, 5}))
}
`,ur=`let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "Only a single book" 800 (total [1]);
  Tests.string_check string_of_int_val "Two of the same book" 1600 (total [2; 2]);
  Tests.string_check string_of_int_val "Empty basket" 0 (total []);
  Tests.string_check string_of_int_val "Two different books" 1520 (total [1; 2]);
  Tests.string_check string_of_int_val "Three different books" 2160 (total [1; 2; 3]);
  Tests.string_check string_of_int_val "Four different books" 2560 (total [1; 2; 3; 4]);
  Tests.string_check string_of_int_val "Five different books" 3000 (total [1; 2; 3; 4; 5]);
  Tests.string_check string_of_int_val "Two groups of four is cheaper than group of five plus group of three" 5120 (total [1; 1; 2; 2; 3; 3; 4; 5]);
  Tests.string_check string_of_int_val "Two groups of four differs in book order" 5120 (total [1; 1; 2; 3; 4; 4; 5; 5])
`,dr=`if 'total' not in globals():
    raise Exception("total function is not defined")

Tests.equal_check("Only a single book", 800, total([1]))
Tests.equal_check("Two of the same book", 1600, total([2, 2]))
Tests.equal_check("Empty basket", 0, total([]))
Tests.equal_check("Two different books", 1520, total([1, 2]))
Tests.equal_check("Three different books", 2160, total([1, 2, 3]))
Tests.equal_check("Four different books", 2560, total([1, 2, 3, 4]))
Tests.equal_check("Five different books", 3000, total([1, 2, 3, 4, 5]))
Tests.equal_check("Two groups of four is cheaper than group of five plus group of three", 5120, total([1, 1, 2, 2, 3, 3, 4, 5]))
Tests.equal_check("Two groups of four differs in book order", 5120, total([1, 1, 2, 3, 4, 4, 5, 5]))
`,fr=`// @ts-nocheck
if (typeof total !== "function") {
  throw new Error("total function is not defined");
}

Tests.equalCheck("Only a single book", 800, total([1]));
Tests.equalCheck("Two of the same book", 1600, total([2, 2]));
Tests.equalCheck("Empty basket", 0, total([]));
Tests.equalCheck("Two different books", 1520, total([1, 2]));
Tests.equalCheck("Three different books", 2160, total([1, 2, 3]));
Tests.equalCheck("Four different books", 2560, total([1, 2, 3, 4]));
Tests.equalCheck("Five different books", 3000, total([1, 2, 3, 4, 5]));
Tests.equalCheck("Two groups of four is cheaper than group of five plus group of three", 5120, total([1, 1, 2, 2, 3, 3, 4, 5]));
Tests.equalCheck("Two groups of four differs in book order", 5120, total([1, 1, 2, 3, 4, 4, 5, 5]));
`,pr=`package main

func play(rolls []int) (*Game, error) {
	g := NewBowling()
	for _, r := range rolls {
		if err := g.Roll(r); err != nil {
			return nil, err
		}
	}
	return g, nil
}

func main() {
	g1, _ := play(repeat(0, 20))
	s1, _ := g1.Score()
	Tests.EqualCheck("gutter game", 0, s1)

	g2, _ := play(repeat(1, 20))
	s2, _ := g2.Score()
	Tests.EqualCheck("all ones", 20, s2)

	g3, _ := play(append([]int{5, 5, 3}, repeat(0, 17)...))
	s3, _ := g3.Score()
	Tests.EqualCheck("one spare", 22, s3)

	g4, _ := play(append([]int{10, 3, 5}, repeat(0, 16)...))
	s4, _ := g4.Score()
	Tests.EqualCheck("one strike", 26, s4)

	g5, _ := play(repeat(10, 12))
	s5, _ := g5.Score()
	Tests.EqualCheck("perfect game", 300, s5)

	g6, _ := play([]int{0, 0})
	_, err6 := g6.Score()
	Tests.BoolCheck("incomplete game score is error", err6 != nil)
}

func repeat(val, count int) []int {
	res := make([]int, count)
	for i := range res {
		res[i] = val
	}
	return res
}
`,mr=`let string_of_res = function
  | Ok n -> Printf.sprintf "Ok %d" n
  | Error e -> Printf.sprintf "Error %s" e

let play_game rolls =
  let g = ref (create ()) in
  List.iter (fun r ->
    match roll r !g with
    | Ok g' -> g := g'
    | Error _ -> ()
  ) rolls;
  !g

let repeat val_ v_count =
  let rec aux acc n = if n <= 0 then acc else aux (val_ :: acc) (n - 1) in
  aux [] v_count

let () =
  Tests.string_check string_of_res "gutter game" (Ok 0) (score (play_game (repeat 0 20)));
  Tests.string_check string_of_res "all ones" (Ok 20) (score (play_game (repeat 1 20)));
  Tests.string_check string_of_res "one spare" (Ok 22) (score (play_game ([5; 5; 3] @ repeat 0 17)));
  Tests.string_check string_of_res "one strike" (Ok 26) (score (play_game ([10; 3; 5] @ repeat 0 16)));
  Tests.string_check string_of_res "perfect game" (Ok 300) (score (play_game (repeat 10 12)));
  Tests.bool_check "incomplete game score is error" (match score (play_game [0; 0]) with Error _ -> true | _ -> false)
`,hr=`if 'BowlingGame' not in globals():
    raise Exception("BowlingGame class is not defined")

def play(rolls):
    g = BowlingGame()
    for r in rolls:
        g.roll(r)
    return g

Tests.equal_check("gutter game", 0, play([0]*20).score())
Tests.equal_check("all ones", 20, play([1]*20).score())
Tests.equal_check("one spare", 22, play([5, 5, 3] + [0]*17).score())
Tests.equal_check("one strike", 26, play([10, 3, 5] + [0]*16).score())
Tests.equal_check("perfect game", 300, play([10]*12).score())

caught = False
try:
    play([0, 0]).score()
except ValueError:
    caught = True
Tests.bool_check("incomplete game score is error", caught)
`,gr=`// @ts-nocheck
if (typeof Bowling !== "function") {
  throw new Error("Bowling class is not defined");
}

function play(rolls: number[]): Bowling {
  const g = new Bowling();
  for (const r of rolls) {
    g.roll(r);
  }
  return g;
}

Tests.equalCheck("gutter game", 0, play(Array(20).fill(0)).score());
Tests.equalCheck("all ones", 20, play(Array(20).fill(1)).score());
Tests.equalCheck("one spare", 22, play([5, 5, 3, ...Array(17).fill(0)]).score());
Tests.equalCheck("one strike", 26, play([10, 3, 5, ...Array(16).fill(0)]).score());
Tests.equalCheck("perfect game", 300, play(Array(12).fill(10)).score());
Tests.boolCheck("incomplete game score is error", typeof play([0, 0]).score() === "object");
`,_r=`package main

func main() {
	Tests.EqualCheck("on the hour", "08:00", NewClock(8, 0).String())
	Tests.EqualCheck("past the hour", "11:09", NewClock(11, 9).String())
	Tests.EqualCheck("midnight is zero hours", "00:00", NewClock(24, 0).String())
	Tests.EqualCheck("hour rolls over", "01:00", NewClock(25, 0).String())
	Tests.EqualCheck("minutes roll over", "02:40", NewClock(0, 160).String())
	Tests.EqualCheck("negative hour", "23:00", NewClock(-1, 0).String())
	Tests.EqualCheck("negative minutes", "02:20", NewClock(3, -40).String())
	Tests.EqualCheck("add minutes", "10:03", NewClock(10, 0).Add(3).String())
	Tests.EqualCheck("subtract minutes", "09:40", NewClock(10, 0).Subtract(20).String())
	Tests.BoolCheck("clocks with same time are equal", NewClock(15, 37) == NewClock(15, 37))
	Tests.BoolCheck("clocks with different time are not equal", NewClock(15, 37) != NewClock(15, 36))
}
`,vr=`let identity s = s

let () =
  Tests.string_check identity "on the hour" "08:00" (to_string (create 8 0));
  Tests.string_check identity "past the hour" "11:09" (to_string (create 11 9));
  Tests.string_check identity "midnight is zero hours" "00:00" (to_string (create 24 0));
  Tests.string_check identity "hour rolls over" "01:00" (to_string (create 25 0));
  Tests.string_check identity "minutes roll over" "02:40" (to_string (create 0 160));
  Tests.string_check identity "negative hour" "23:00" (to_string (create (-1) 0));
  Tests.string_check identity "negative minutes" "02:20" (to_string (create 3 (-40)));
  Tests.string_check identity "add minutes" "10:03" (to_string (add 3 (create 10 0)));
  Tests.string_check identity "subtract minutes" "09:40" (to_string (sub 20 (create 10 0)));
  Tests.bool_check "clocks with same time are equal" (create 15 37 = create 15 37);
  Tests.bool_check "clocks with different time are not equal" (create 15 37 <> create 15 36)
`,yr=`if 'Clock' not in globals():
    raise Exception("Clock class is not defined")

Tests.equal_check("on the hour", "08:00", str(Clock(8, 0)))
Tests.equal_check("past the hour", "11:09", str(Clock(11, 9)))
Tests.equal_check("midnight is zero hours", "00:00", str(Clock(24, 0)))
Tests.equal_check("hour rolls over", "01:00", str(Clock(25, 0)))
Tests.equal_check("minutes roll over", "02:40", str(Clock(0, 160)))
Tests.equal_check("negative hour", "23:00", str(Clock(-1, 0)))
Tests.equal_check("negative minutes", "02:20", str(Clock(3, -40)))
Tests.equal_check("add minutes", "10:03", str(Clock(10, 0) + 3))
Tests.equal_check("subtract minutes", "09:40", str(Clock(10, 0) - 20))
Tests.bool_check("clocks with same time are equal", Clock(15, 37) == Clock(15, 37))
Tests.bool_check("clocks with different time are not equal", Clock(15, 37) != Clock(15, 36))
`,br=`// @ts-nocheck
if (typeof Clock !== "function") {
  throw new Error("Clock class is not defined");
}

Tests.equalCheck("on the hour", "08:00", new Clock(8, 0).toString());
Tests.equalCheck("past the hour", "11:09", new Clock(11, 9).toString());
Tests.equalCheck("midnight is zero hours", "00:00", new Clock(24, 0).toString());
Tests.equalCheck("hour rolls over", "01:00", new Clock(25, 0).toString());
Tests.equalCheck("minutes roll over", "02:40", new Clock(0, 160).toString());
Tests.equalCheck("negative hour", "23:00", new Clock(-1, 0).toString());
Tests.equalCheck("negative minutes", "02:20", new Clock(3, -40).toString());
Tests.equalCheck("add minutes", "10:03", new Clock(10, 0).plus(3).toString());
Tests.equalCheck("subtract minutes", "09:40", new Clock(10, 0).minus(20).toString());
Tests.boolCheck("clocks with same time are equal", new Clock(15, 37).equals(new Clock(15, 37)));
Tests.boolCheck("clocks with different time are not equal", !new Clock(15, 37).equals(new Clock(15, 36)));
`,xr=`package main

func main() {
	s1, err1 := Steps(1)
	Tests.BoolCheck("zero steps for one err", err1 == nil)
	Tests.EqualCheck("zero steps for one", 0, s1)

	s2, err2 := Steps(16)
	Tests.BoolCheck("divide if even err", err2 == nil)
	Tests.EqualCheck("divide if even", 4, s2)

	s3, err3 := Steps(12)
	Tests.BoolCheck("even and odd steps err", err3 == nil)
	Tests.EqualCheck("even and odd steps", 9, s3)

	s4, err4 := Steps(1000000)
	Tests.BoolCheck("large number of even and odd steps err", err4 == nil)
	Tests.EqualCheck("large number of even and odd steps", 152, s4)

	_, err5 := Steps(0)
	Tests.BoolCheck("zero is an error", err5 != nil)

	_, err6 := Steps(-15)
	Tests.BoolCheck("negative value is an error", err6 != nil)
}
`,Sr=`let string_of_res = function
  | Ok n -> Printf.sprintf "Ok %d" n
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "zero steps for one" (Ok 0) (steps 1);
  Tests.string_check string_of_res "divide if even" (Ok 4) (steps 16);
  Tests.string_check string_of_res "even and odd steps" (Ok 9) (steps 12);
  Tests.string_check string_of_res "large number of even and odd steps" (Ok 152) (steps 1000000);
  Tests.bool_check "zero is an error" (match steps 0 with Error _ -> true | _ -> false);
  Tests.bool_check "negative value is an error" (match steps (-15) with Error _ -> true | _ -> false)
`,Cr=`if 'steps' not in globals():
    raise Exception("steps function is not defined")

Tests.equal_check("zero steps for one", 0, steps(1))
Tests.equal_check("divide if even", 4, steps(16))
Tests.equal_check("even and odd steps", 9, steps(12))
Tests.equal_check("large number of even and odd steps", 152, steps(1000000))

caught1 = False
try:
    steps(0)
except ValueError:
    caught1 = True
Tests.bool_check("zero is an error", caught1)

caught2 = False
try:
    steps(-15)
except ValueError:
    caught2 = True
Tests.bool_check("negative value is an error", caught2)
`,wr=`// @ts-nocheck
if (typeof steps !== "function") {
  throw new Error("steps function is not defined");
}

Tests.equalCheck("zero steps for one", 0, steps(1));
Tests.equalCheck("divide if even", 4, steps(16));
Tests.equalCheck("even and odd steps", 9, steps(12));
Tests.equalCheck("large number of even and odd steps", 152, steps(1000000));
Tests.boolCheck("zero is an error", typeof steps(0) === "object");
Tests.boolCheck("negative value is an error", typeof steps(-15) === "object");
`,Tr=`package main

func main() {
	Tests.EqualCheck("empty plain text results in an empty cipher text", "", Encode(""))
	Tests.EqualCheck("normalization results in empty text", "", Encode("..."))
	Tests.EqualCheck("Lowercase", "a", Encode("A"))
	Tests.EqualCheck("Remove spaces", "b", Encode("  b "))
	Tests.EqualCheck("Remove punctuation", "1", Encode("@1,%!"))
	Tests.EqualCheck("9 character plaintext forms 3x3 square", "tsf hiu isn", Encode("This is fun!"))
	Tests.EqualCheck("8 character plaintext forms 3x3 square with trailing space", "clu hlt io ", Encode("Chill out."))
	Tests.EqualCheck("54 character plaintext forms 8x7 rectangle", "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ", Encode("If man was meant to stay on the ground, god would have given us roots."))
}
`,Er=`let identity s = s

let () =
  Tests.string_check identity "empty plain text results in an empty cipher text" "" (encode "");
  Tests.string_check identity "normalization results in empty text" "" (encode "...");
  Tests.string_check identity "Lowercase" "a" (encode "A");
  Tests.string_check identity "Remove spaces" "b" (encode "  b ");
  Tests.string_check identity "Remove punctuation" "1" (encode "@1,%!");
  Tests.string_check identity "9 character plaintext forms 3x3 square" "tsf hiu isn" (encode "This is fun!");
  Tests.string_check identity "8 character plaintext forms 3x3 square with trailing space" "clu hlt io " (encode "Chill out.");
  Tests.string_check identity "54 character plaintext forms 8x7 rectangle" "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau " (encode "If man was meant to stay on the ground, god would have given us roots.")
`,Dr=`if 'cipher_text' not in globals():
    raise Exception("cipher_text function is not defined")

Tests.equal_check("empty plain text results in an empty cipher text", "", cipher_text(""))
Tests.equal_check("normalization results in empty text", "", cipher_text("..."))
Tests.equal_check("Lowercase", "a", cipher_text("A"))
Tests.equal_check("Remove spaces", "b", cipher_text("  b "))
Tests.equal_check("Remove punctuation", "1", cipher_text("@1,%!"))
Tests.equal_check("9 character plaintext forms 3x3 square", "tsf hiu isn", cipher_text("This is fun!"))
Tests.equal_check("8 character plaintext forms 3x3 square with trailing space", "clu hlt io ", cipher_text("Chill out."))
Tests.equal_check("54 character plaintext forms 8x7 rectangle", "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ", cipher_text("If man was meant to stay on the ground, god would have given us roots."))
`,Or=`// @ts-nocheck
if (typeof encode !== "function") {
  throw new Error("encode function is not defined");
}

Tests.equalCheck("empty plain text results in an empty cipher text", "", encode(""));
Tests.equalCheck("normalization results in empty text", "", encode("..."));
Tests.equalCheck("Lowercase", "a", encode("A"));
Tests.equalCheck("Remove spaces", "b", encode("  b "));
Tests.equalCheck("Remove punctuation", "1", encode("@1,%!"));
Tests.equalCheck("9 character plaintext forms 3x3 square", "tsf hiu isn", encode("This is fun!"));
Tests.equalCheck("8 character plaintext forms 3x3 square with trailing space", "clu hlt io ", encode("Chill out."));
Tests.equalCheck("54 character plaintext forms 8x7 rectangle", "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ", encode("If man was meant to stay on the ground, god would have given us roots."));
`,kr=`package main

func main() {
	emptyG := NewGraph()
	Tests.EqualCheck("empty graph nodes", 0, len(emptyG.Nodes))
	Tests.EqualCheck("empty graph edges", 0, len(emptyG.Edges))

	g := NewGraph().
		WithAttrs(map[string]string{"bgcolor": "yellow"}).
		WithNodes(
			Node{Name: "a", Attrs: map[string]string{"color": "red"}},
			Node{Name: "b", Attrs: map[string]string{"color": "blue"}},
		).
		WithEdges(
			Edge{From: "a", To: "b", Attrs: map[string]string{"color": "green"}},
		)

	Tests.EqualCheck("graph attrs", "yellow", g.Attrs["bgcolor"])
	Tests.EqualCheck("graph nodes count", 2, len(g.Nodes))
	Tests.EqualCheck("graph node a attr", "red", g.Nodes[0].Attrs["color"])
	Tests.EqualCheck("graph edges count", 1, len(g.Edges))
	Tests.EqualCheck("graph edge a-b attr", "green", g.Edges[0].Attrs["color"])
}
`,Ar=`let () =
  let empty_g = create_graph [] in
  Tests.equal_check "empty graph nodes" 0 (List.length empty_g.nodes);
  Tests.equal_check "empty graph edges" 0 (List.length empty_g.edges);

  let g = create_graph [
    \`Attr ("bgcolor", "yellow");
    \`Node { name = "a"; attrs = [("color", "red")] };
    \`Node { name = "b"; attrs = [("color", "blue")] };
    \`Edge { from_node = "a"; to_node = "b"; attrs = [("color", "green")] };
  ] in

  Tests.string_check (fun x -> x) "graph attrs" "yellow" (List.assoc "bgcolor" g.attrs);
  Tests.equal_check "graph nodes count" 2 (List.length g.nodes);
  Tests.string_check (fun x -> x) "graph node a attr" "red" (List.assoc "color" (List.hd g.nodes).attrs);
  Tests.equal_check "graph edges count" 1 (List.length g.edges)
`,jr=`if 'Graph' not in globals():
    raise Exception("Graph class is not defined")

empty_g = Graph()
Tests.equal_check("empty graph nodes", 0, len(empty_g.nodes))
Tests.equal_check("empty graph edges", 0, len(empty_g.edges))

g = Graph([
    (ATTR, "bgcolor", "yellow"),
    (NODE, "a", {"color": "red"}),
    (NODE, "b", {"color": "blue"}),
    (EDGE, "a", "b", {"color": "green"}),
])

Tests.equal_check("graph attrs", "yellow", g.attrs["bgcolor"])
Tests.equal_check("graph nodes count", 2, len(g.nodes))
Tests.equal_check("graph node a attr", "red", g.nodes[0].attrs["color"])
Tests.equal_check("graph edges count", 1, len(g.edges))
Tests.equal_check("graph edge a-b attr", "green", g.edges[0].attrs["color"])
`,Mr=`// @ts-nocheck
if (typeof Graph !== "function") {
  throw new Error("Graph class is not defined");
}

const emptyGraph = new Graph();
Tests.equalCheck("empty graph nodes", 0, emptyGraph.nodes.length);
Tests.equalCheck("empty graph edges", 0, emptyGraph.edges.length);

const g = new Graph([
  new Attr("bgcolor", "yellow"),
  new Node("a", { color: "red" }),
  new Node("b", { color: "blue" }),
  new Edge("a", "b", { color: "green" }),
]);

Tests.equalCheck("graph attrs", "yellow", g.attrs["bgcolor"]);
Tests.equalCheck("graph nodes count", 2, g.nodes.length);
Tests.equalCheck("graph node a attr", "red", g.nodes[0].attrs["color"]);
Tests.equalCheck("graph edges count", 1, g.edges.length);
Tests.equalCheck("graph edge a-b attr", "green", g.edges[0].attrs["color"]);
`,Nr=`package main

import "fmt"

func main() {
	testCases := []struct {
		input    int
		expected string
	}{
		{1, "1"},
		{3, "Fizz"},
		{5, "Buzz"},
		{30, "FizzBuzz"},
	}

	for _, tc := range testCases {
		res := FizzBuzz(tc.input)
		Tests.EqualCheck(fmt.Sprintf("fizzbuzz(%d)", tc.input), tc.expected, res)
	}
}
`,Pr=`let () =
  let test_cases = [
    (1, "1");
    (2, "2");
    (3, "Fizz");
    (4, "4");
    (5, "Buzz");
    (6, "Fizz");
    (10, "Buzz");
    (15, "FizzBuzz");
    (30, "FizzBuzz");
  ] in
  List.iter (fun (input_val, expected) ->
    let res = fizzbuzz input_val in
    let msg = "fizzbuzz " ^ string_of_int input_val in
    Tests.string_check (fun s -> "\\"" ^ s ^ "\\"") msg expected res
  ) test_cases

`,Fr=`if 'fizzbuzz' not in globals():
    raise Exception("fizzbuzz function is not defined")

test_cases = [
    (1, "1"),
    (2, "2"),
    (3, "Fizz"),
    (4, "4"),
    (5, "Buzz"),
    (6, "Fizz"),
    (10, "Buzz"),
    (15, "FizzBuzz"),
    (30, "FizzBuzz"),
]

for input_val, expected in test_cases:
    res = fizzbuzz(input_val)
    Tests.equal_check(f"fizzbuzz({input_val})", expected, res)

`,Ir=`// JN: since TS lang server will flag errors here as these functions are not availabl, we ignore checks:
// @ts-nocheck
if (typeof fizzbuzz !== "function") {
  throw new Error("fizzbuzz function is not defined");
}

const testCases = [
  [1, "1"],
  [2, "2"],
  [3, "Fizz"],
  [4, "4"],
  [5, "Buzz"],
  [6, "Fizz"],
  [10, "Buzz"],
  [15, "FizzBuzz"],
  [30, "FizzBuzz"],
];

for (const [input, expected] of testCases) {
  const result = fizzbuzz(input as number);
  Tests.equalCheck(\`fizzbuzz(\${input})\`, expected, result);
}
`,Lr=`package main

import "fmt"

func main() {
	Tests.EqualCheck("empty matrix", fmt.Sprintf("%v", [][]int{}), fmt.Sprintf("%v", Tick([][]int{})))
	Tests.EqualCheck("live cells with zero neighbors die", fmt.Sprintf("%v", [][]int{{0,0,0},{0,0,0},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{0,0,0},{0,1,0},{0,0,0}})))
	Tests.EqualCheck("live cells with one neighbor die", fmt.Sprintf("%v", [][]int{{0,0,0},{0,0,0},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{0,0,0},{0,1,0},{0,1,0}})))
	Tests.EqualCheck("live cells with two neighbors stay alive", fmt.Sprintf("%v", [][]int{{0,0,0},{1,0,1},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{1,0,1},{1,0,1},{1,0,1}})))
	Tests.EqualCheck("live cells with three neighbors stay alive", fmt.Sprintf("%v", [][]int{{0,0,0},{1,0,0},{1,1,0}}), fmt.Sprintf("%v", Tick([][]int{{0,1,0},{1,0,0},{1,1,0}})))
	Tests.EqualCheck("dead cells with three neighbors become alive", fmt.Sprintf("%v", [][]int{{0,0,0},{1,1,0},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{1,1,0},{0,0,0},{1,0,0}})))
}
`,Rr=`let string_of_matrix m =
  "[" ^ String.concat "; " (List.map (fun row -> "[" ^ String.concat "; " (List.map string_of_int row) ^ "]") m) ^ "]"

let () =
  Tests.string_check string_of_matrix "empty matrix" [] (tick []);
  Tests.string_check string_of_matrix "live cells with zero neighbors die" [[0;0;0];[0;0;0];[0;0;0]] (tick [[0;0;0];[0;1;0];[0;0;0]]);
  Tests.string_check string_of_matrix "live cells with one neighbor die" [[0;0;0];[0;0;0];[0;0;0]] (tick [[0;0;0];[0;1;0];[0;1;0]]);
  Tests.string_check string_of_matrix "live cells with two neighbors stay alive" [[0;0;0];[1;0;1];[0;0;0]] (tick [[1;0;1];[1;0;1];[1;0;1]]);
  Tests.string_check string_of_matrix "live cells with three neighbors stay alive" [[0;0;0];[1;0;0];[1;1;0]] (tick [[0;1;0];[1;0;0];[1;1;0]]);
  Tests.string_check string_of_matrix "dead cells with three neighbors become alive" [[0;0;0];[1;1;0];[0;0;0]] (tick [[1;1;0];[0;0;0];[1;0;0]])
`,zr=`if 'tick' not in globals():
    raise Exception("tick function is not defined")

Tests.equal_check("empty matrix", [], tick([]))
Tests.equal_check("live cells with zero neighbors die", [[0,0,0],[0,0,0],[0,0,0]], tick([[0,0,0],[0,1,0],[0,0,0]]))
Tests.equal_check("live cells with one neighbor die", [[0,0,0],[0,0,0],[0,0,0]], tick([[0,0,0],[0,1,0],[0,1,0]]))
Tests.equal_check("live cells with two neighbors stay alive", [[0,0,0],[1,0,1],[0,0,0]], tick([[1,0,1],[1,0,1],[1,0,1]]))
Tests.equal_check("live cells with three neighbors stay alive", [[0,0,0],[1,0,0],[1,1,0]], tick([[0,1,0],[1,0,0],[1,1,0]]))
Tests.equal_check("dead cells with three neighbors become alive", [[0,0,0],[1,1,0],[0,0,0]], tick([[1,1,0],[0,0,0],[1,0,0]]))
`,Br=`// @ts-nocheck
if (typeof tick !== "function") {
  throw new Error("tick function is not defined");
}

Tests.equalCheck("empty matrix", JSON.stringify([]), JSON.stringify(tick([])));
Tests.equalCheck("live cells with zero neighbors die", JSON.stringify([[0,0,0],[0,0,0],[0,0,0]]), JSON.stringify(tick([[0,0,0],[0,1,0],[0,0,0]])));
Tests.equalCheck("live cells with one neighbor die", JSON.stringify([[0,0,0],[0,0,0],[0,0,0]]), JSON.stringify(tick([[0,0,0],[0,1,0],[0,1,0]])));
Tests.equalCheck("live cells with two neighbors stay alive", JSON.stringify([[0,0,0],[1,0,1],[0,0,0]]), JSON.stringify(tick([[1,0,1],[1,0,1],[1,0,1]])));
Tests.equalCheck("live cells with three neighbors stay alive", JSON.stringify([[0,0,0],[1,0,0],[1,1,0]]), JSON.stringify(tick([[0,1,0],[1,0,0],[1,1,0]])));
Tests.equalCheck("dead cells with three neighbors become alive", JSON.stringify([[0,0,0],[1,1,0],[0,0,0]]), JSON.stringify(tick([[1,1,0],[0,0,0],[1,0,0]])));
`,Vr=`package main

import "fmt"

func main() {
	Tests.EqualCheck("Roster is empty when no student is added", fmt.Sprintf("%v", []string{}), fmt.Sprintf("%v", Roster([]Student{})))
	Tests.EqualCheck("Add a student", fmt.Sprintf("%v", []bool{true}), fmt.Sprintf("%v", Add([]Student{{"Aimee", 2}})))
	Tests.EqualCheck("Student is added to the roster", fmt.Sprintf("%v", []string{"Aimee"}), fmt.Sprintf("%v", Roster([]Student{{"Aimee", 2}})))
	Tests.EqualCheck("Adding multiple students in the same grade", fmt.Sprintf("%v", []bool{true, true, true}), fmt.Sprintf("%v", Add([]Student{{"Blair", 2}, {"James", 2}, {"Paul", 2}})))
	Tests.EqualCheck("Multiple students in the same grade sorted in roster", fmt.Sprintf("%v", []string{"Blair", "James", "Paul"}), fmt.Sprintf("%v", Roster([]Student{{"James", 2}, {"Blair", 2}, {"Paul", 2}})))
	Tests.EqualCheck("Cannot add student to same grade more than once", fmt.Sprintf("%v", []bool{true, true, false, true}), fmt.Sprintf("%v", Add([]Student{{"Blair", 2}, {"James", 2}, {"James", 2}, {"Paul", 2}})))
	Tests.EqualCheck("Student can't be in two different grades", fmt.Sprintf("%v", []string{}), fmt.Sprintf("%v", Grade([]Student{{"Aimee", 2}, {"Aimee", 1}}, 1)))
}
`,Hr=`let string_of_str_list l =
  "[" ^ String.concat "; " (List.map (fun s -> "\\"" ^ s ^ "\\"") l) ^ "]"

let string_of_bool_list l =
  "[" ^ String.concat "; " (List.map string_of_bool l) ^ "]"

let () =
  Tests.string_check string_of_str_list "Roster is empty when no student is added" [] (roster []);
  Tests.string_check string_of_bool_list "Add a student" [true] (add [("Aimee", 2)]);
  Tests.string_check string_of_str_list "Student is added to the roster" ["Aimee"] (roster [("Aimee", 2)]);
  Tests.string_check string_of_bool_list "Adding multiple students in the same grade" [true; true; true] (add [("Blair", 2); ("James", 2); ("Paul", 2)]);
  Tests.string_check string_of_str_list "Multiple students in the same grade sorted in roster" ["Blair"; "James"; "Paul"] (roster [("James", 2); ("Blair", 2); ("Paul", 2)]);
  Tests.string_check string_of_bool_list "Cannot add student to same grade more than once" [true; true; false; true] (add [("Blair", 2); ("James", 2); ("James", 2); ("Paul", 2)]);
  Tests.string_check string_of_str_list "Student can't be in two different grades" [] (grade [("Aimee", 2); ("Aimee", 1)] 1)
`,Ur=`if 'roster' not in globals():
    raise Exception("roster function is not defined")

Tests.equal_check("Roster is empty when no student is added", [], roster([]))
Tests.equal_check("Add a student", [True], add([("Aimee", 2)]))
Tests.equal_check("Student is added to the roster", ["Aimee"], roster([("Aimee", 2)]))
Tests.equal_check("Adding multiple students in the same grade", [True, True, True], add([("Blair", 2), ("James", 2), ("Paul", 2)]))
Tests.equal_check("Multiple students in the same grade sorted in roster", ["Blair", "James", "Paul"], roster([("James", 2), ("Blair", 2), ("Paul", 2)]))
Tests.equal_check("Cannot add student to same grade more than once", [True, True, False, True], add([("Blair", 2), ("James", 2), ("James", 2), ("Paul", 2)]))
Tests.equal_check("Student can't be in two different grades", [], grade([("Aimee", 2), ("Aimee", 1)], 1))
`,Wr=`// @ts-nocheck
if (typeof roster !== "function") {
  throw new Error("roster function is not defined");
}

Tests.equalCheck("Roster is empty when no student is added", JSON.stringify([]), JSON.stringify(roster([])));
Tests.equalCheck("Add a student", JSON.stringify([true]), JSON.stringify(add([["Aimee", 2]])));
Tests.equalCheck("Student is added to the roster", JSON.stringify(["Aimee"]), JSON.stringify(roster([["Aimee", 2]])));
Tests.equalCheck("Adding multiple students in the same grade", JSON.stringify([true, true, true]), JSON.stringify(add([["Blair", 2], ["James", 2], ["Paul", 2]])));
Tests.equalCheck("Multiple students in the same grade sorted in roster", JSON.stringify(["Blair", "James", "Paul"]), JSON.stringify(roster([["James", 2], ["Blair", 2], ["Paul", 2]])));
Tests.equalCheck("Cannot add student to same grade more than once", JSON.stringify([true, true, false, true]), JSON.stringify(add([["Blair", 2], ["James", 2], ["James", 2], ["Paul", 2]])));
Tests.equalCheck("Student can't be in two different grades", JSON.stringify([]), JSON.stringify(grade([["Aimee", 2], ["Aimee", 1]], 1)));
`,Gr=`// Test harness for Go hello_world exercise
`,Kr=`(* no tests needed here *)
`,qr=`# Test assertions for hello_world
`,Jr=`// Test assertions for hello_world
`,Yr=`package main

import "fmt"

func main() {
	Tests.EqualCheck("1-digit cage sum 1", fmt.Sprintf("%v", [][]int{{1}}), fmt.Sprintf("%v", Combinations(1, 1, []int{})))
	Tests.EqualCheck("1-digit cage sum 7", fmt.Sprintf("%v", [][]int{{7}}), fmt.Sprintf("%v", Combinations(7, 1, []int{})))
	Tests.EqualCheck("2-digit cage sum 10", fmt.Sprintf("%v", [][]int{{1,9},{2,8},{3,7},{4,6}}), fmt.Sprintf("%v", Combinations(10, 2, []int{})))
	Tests.EqualCheck("3-digit cage sum 7", fmt.Sprintf("%v", [][]int{{1,2,4}}), fmt.Sprintf("%v", Combinations(7, 3, []int{})))
	Tests.EqualCheck("2-digit cage sum 10 with excluded digits", fmt.Sprintf("%v", [][]int{{2,8},{3,7}}), fmt.Sprintf("%v", Combinations(10, 2, []int{1,4})))
}
`,Xr=`let string_of_combos m =
  "[" ^ String.concat "; " (List.map (fun row -> "[" ^ String.concat "; " (List.map string_of_int row) ^ "]") m) ^ "]"

let () =
  Tests.string_check string_of_combos "1-digit cage sum 1" [[1]] (combinations 1 1 []);
  Tests.string_check string_of_combos "1-digit cage sum 7" [[7]] (combinations 7 1 []);
  Tests.string_check string_of_combos "2-digit cage sum 10" [[1;9];[2;8];[3;7];[4;6]] (combinations 10 2 []);
  Tests.string_check string_of_combos "3-digit cage sum 7" [[1;2;4]] (combinations 7 3 []);
  Tests.string_check string_of_combos "2-digit cage sum 10 with excluded digits" [[2;8];[3;7]] (combinations 10 2 [1;4])
`,Zr=`if 'combinations' not in globals():
    raise Exception("combinations function is not defined")

Tests.equal_check("1-digit cage sum 1", [[1]], combinations(1, 1, []))
Tests.equal_check("1-digit cage sum 7", [[7]], combinations(7, 1, []))
Tests.equal_check("2-digit cage sum 10", [[1,9],[2,8],[3,7],[4,6]], combinations(10, 2, []))
Tests.equal_check("3-digit cage sum 7", [[1,2,4]], combinations(7, 3, []))
Tests.equal_check("2-digit cage sum 10 with excluded digits", [[2,8],[3,7]], combinations(10, 2, [1,4]))
`,Qr=`// @ts-nocheck
if (typeof combinations !== "function") {
  throw new Error("combinations function is not defined");
}

Tests.equalCheck("1-digit cage sum 1", JSON.stringify([[1]]), JSON.stringify(combinations({ sum: 1, size: 1, exclude: [] })));
Tests.equalCheck("1-digit cage sum 7", JSON.stringify([[7]]), JSON.stringify(combinations({ sum: 7, size: 1, exclude: [] })));
Tests.equalCheck("2-digit cage sum 10", JSON.stringify([[1,9],[2,8],[3,7],[4,6]]), JSON.stringify(combinations({ sum: 10, size: 2, exclude: [] })));
Tests.equalCheck("3-digit cage sum 7", JSON.stringify([[1,2,4]]), JSON.stringify(combinations({ sum: 7, size: 3, exclude: [] })));
Tests.equalCheck("2-digit cage sum 10 with excluded digits", JSON.stringify([[2,8],[3,7]]), JSON.stringify(combinations({ sum: 10, size: 2, exclude: [1,4] })));
`,$r=`package main

import "fmt"

func main() {
	res := Plants("RC\\nGG", "Alice")
	Tests.EqualCheck("Alice plants", fmt.Sprintf("%v", []string{"radishes", "clover", "grass", "grass"}), fmt.Sprintf("%v", res))
}
`,ei=`let () =
  let res = plants "RC\\nGG" "Alice" in
  Tests.equal_check "Alice plants" ["radishes"; "clover"; "grass"; "grass"] res
`,ti=`if 'plants' not in globals():
    raise Exception("plants function is not defined")

Tests.equal_check("single student Alice", ["radishes", "clover", "grass", "grass"], plants("RC\\nGG", "Alice"))
Tests.equal_check("two students Bob", ["clover", "grass", "radishes", "clover"], plants("VVCG\\nVVRC", "Bob"))
`,ni=`// @ts-nocheck
if (typeof plants !== "function") {
  throw new Error("plants function is not defined");
}

const diagram1 = "RC\\nGG";
Tests.equalCheck("garden with single student", JSON.stringify(["radishes", "clover", "grass", "grass"]), JSON.stringify(plants(diagram1, "Alice")));

const diagram2 = "VVCG\\nVVRC";
Tests.equalCheck("garden with two students - Bob", JSON.stringify(["clover", "grass", "radishes", "clover"]), JSON.stringify(plants(diagram2, "Bob")));
`,ri=`package main

func main() {
	Tests.BoolCheck("paired square brackets", IsPaired("[]"))
	Tests.BoolCheck("empty string", IsPaired(""))
	Tests.BoolCheck("unpaired brackets", !IsPaired("[["))
	Tests.BoolCheck("wrong ordered brackets", !IsPaired("}{"))
	Tests.BoolCheck("wrong closing bracket", !IsPaired("{]"))
	Tests.BoolCheck("paired with whitespace", IsPaired("{ }"))
	Tests.BoolCheck("partially paired brackets", !IsPaired("{[])"))
	Tests.BoolCheck("simple nested brackets", IsPaired("{[]}"))
	Tests.BoolCheck("several paired brackets", IsPaired("{}[]"))
	Tests.BoolCheck("paired and nested brackets", IsPaired("([{}({}[])])"))
	Tests.BoolCheck("math expression", IsPaired("(((185 + 223.85) * 15) - 343)"))
}
`,ii=`let () =
  Tests.bool_check "paired square brackets" (is_paired "[]");
  Tests.bool_check "empty string" (is_paired "");
  Tests.bool_check "unpaired brackets" (not (is_paired "[["));
  Tests.bool_check "wrong ordered brackets" (not (is_paired "}{"));
  Tests.bool_check "wrong closing bracket" (not (is_paired "{]"));
  Tests.bool_check "paired with whitespace" (is_paired "{ }");
  Tests.bool_check "partially paired brackets" (not (is_paired "{[])"));
  Tests.bool_check "simple nested brackets" (is_paired "{[]}");
  Tests.bool_check "several paired brackets" (is_paired "{}[]");
  Tests.bool_check "paired and nested brackets" (is_paired "([{}({}[])])");
  Tests.bool_check "math expression" (is_paired "(((185 + 223.85) * 15) - 343)")
`,ai=`if 'is_paired' not in globals():
    raise Exception("is_paired function is not defined")

Tests.bool_check("paired square brackets", is_paired("[]"))
Tests.bool_check("empty string", is_paired(""))
Tests.bool_check("unpaired brackets", not is_paired("[["))
Tests.bool_check("wrong ordered brackets", not is_paired("}{"))
Tests.bool_check("wrong closing bracket", not is_paired("{]"))
Tests.bool_check("paired with whitespace", is_paired("{ }"))
Tests.bool_check("partially paired brackets", not is_paired("{[])"))
Tests.bool_check("simple nested brackets", is_paired("{[]}"))
Tests.bool_check("several paired brackets", is_paired("{}[]"))
Tests.bool_check("paired and nested brackets", is_paired("([{}({}[])])"))
Tests.bool_check("math expression", is_paired("(((185 + 223.85) * 15) - 343)"))
`,oi=`// @ts-nocheck
if (typeof isPaired !== "function") {
  throw new Error("isPaired function is not defined");
}

Tests.boolCheck("paired square brackets", isPaired("[]"));
Tests.boolCheck("empty string", isPaired(""));
Tests.boolCheck("unpaired brackets", !isPaired("[["));
Tests.boolCheck("wrong ordered brackets", !isPaired("}{"));
Tests.boolCheck("wrong closing bracket", !isPaired("{]"));
Tests.boolCheck("paired with whitespace", isPaired("{ }"));
Tests.boolCheck("partially paired brackets", !isPaired("{[])"));
Tests.boolCheck("simple nested brackets", isPaired("{[]}"));
Tests.boolCheck("several paired brackets", isPaired("{}[]"));
Tests.boolCheck("paired and nested brackets", isPaired("([{}({}[])])"));
Tests.boolCheck("math expression", isPaired("(((185 + 223.85) * 15) - 343)"));
Tests.boolCheck("complex latex expression", isPaired("\\\\left(\\\\begin{array}{cc} \\\\frac{1}{3} & x\\\\\\\\ \\\\frac{2}{3} & y \\\\end{array}\\\\right)"));
`,si=`package main

func main() {
	zero := " _ \\n| |\\n|_|\\n   "
	one := "   \\n  |\\n  |\\n   "

	res0, err0 := Convert(zero)
	Tests.BoolCheck("Recognizes 0 err", err0 == nil)
	Tests.EqualCheck("Recognizes 0", "0", res0)

	res1, err1 := Convert(one)
	Tests.BoolCheck("Recognizes 1 err", err1 == nil)
	Tests.EqualCheck("Recognizes 1", "1", res1)

	resG, errG := Convert("   \\n| |\\n| |\\n   ")
	Tests.BoolCheck("Recognizes garbled err", errG == nil)
	Tests.EqualCheck("Recognizes garbled", "?", resG)

	multi := "    _  _     _  _  _  _  _  _ \\n  | _| _||_||_ |_   ||_||_|| |\\n  ||_  _|  | _||_|  ||_| _||_|\\n                              "
	resM, errM := Convert(multi)
	Tests.BoolCheck("Recognizes 1234567890 err", errM == nil)
	Tests.EqualCheck("Recognizes 1234567890", "1234567890", resM)

	_, errL := Convert(" _ \\n| |\\n|_|")
	Tests.BoolCheck("Invalid line count error", errL != nil)

	_, errC := Convert(" _\\n| \\n|_")
	Tests.BoolCheck("Invalid col count error", errC != nil)
}
`,ci=`let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let zero = [" _ "; "| |"; "|_|"; "   "]
let one = ["   "; "  |"; "  |"; "   "]

let () =
  Tests.string_check string_of_res "Recognizes 0" (Ok "0") (convert zero);
  Tests.string_check string_of_res "Recognizes 1" (Ok "1") (convert one);
  Tests.string_check string_of_res "Recognizes garbled" (Ok "?") (convert ["   "; "| |"; "| |"; "   "]);
  Tests.string_check string_of_res "Recognizes 1234567890" (Ok "1234567890") (convert [
    "    _  _     _  _  _  _  _  _ ";
    "  | _| _||_||_ |_   ||_||_|| |";
    "  ||_  _|  | _||_|  ||_| _||_|";
    "                              "
  ]);
  Tests.bool_check "Invalid line count error" (match convert [" _ "; "| |"; "|_|"] with Error _ -> true | _ -> false);
  Tests.bool_check "Invalid col count error" (match convert [" _"; "| "; "|_"] with Error _ -> true | _ -> false)
`,li=`if 'convert' not in globals():
    raise Exception("convert function is not defined")

zero = [" _ ", "| |", "|_|", "   "]
one = ["   ", "  |", "  |", "   "]

Tests.equal_check("Recognizes 0", "0", convert(zero))
Tests.equal_check("Recognizes 1", "1", convert(one))
Tests.equal_check("Recognizes garbled", "?", convert(["   ", "| |", "| |", "   "]))
Tests.equal_check("Recognizes 1234567890", "1234567890", convert([
    "    _  _     _  _  _  _  _  _ ",
    "  | _| _||_||_ |_   ||_||_|| |",
    "  ||_  _|  | _||_|  ||_| _||_|",
    "                              "
]))

caught1 = False
try:
    convert([" _ ", "| |", "|_|"])
except ValueError:
    caught1 = True
Tests.bool_check("Invalid line count error", caught1)

caught2 = False
try:
    convert([" _", "| ", "|_"])
except ValueError:
    caught2 = True
Tests.bool_check("Invalid col count error", caught2)
`,ui=`// @ts-nocheck
if (typeof convert !== "function") {
  throw new Error("convert function is not defined");
}

const zero = " _ \\n| |\\n|_|\\n   ";
const one = "   \\n  |\\n  |\\n   ";

Tests.equalCheck("Recognizes 0", "0", convert(zero));
Tests.equalCheck("Recognizes 1", "1", convert(one));
Tests.equalCheck("Recognizes garbled", "?", convert("   \\n| |\\n| |\\n   "));
Tests.equalCheck("Recognizes 1234567890", "1234567890", convert("    _  _     _  _  _  _  _  _ \\n  | _| _||_||_ |_   ||_||_|| |\\n  ||_  _|  | _||_|  ||_| _||_|\\n                              "));
Tests.boolCheck("Invalid line count error", typeof convert(" _ \\n| |\\n|_|") === "object");
Tests.boolCheck("Invalid col count error", typeof convert(" _\\n| \\n|_") === "object");
`,di=`package main

func main() {
	res1, err1 := Classify(6)
	Tests.BoolCheck("Smallest perfect number err", err1 == nil)
	Tests.EqualCheck("Smallest perfect number", "perfect", res1)

	res2, err2 := Classify(28)
	Tests.BoolCheck("Medium perfect number err", err2 == nil)
	Tests.EqualCheck("Medium perfect number", "perfect", res2)

	res3, err3 := Classify(33550336)
	Tests.BoolCheck("Large perfect number err", err3 == nil)
	Tests.EqualCheck("Large perfect number", "perfect", res3)

	res4, err4 := Classify(12)
	Tests.BoolCheck("Smallest abundant number err", err4 == nil)
	Tests.EqualCheck("Smallest abundant number", "abundant", res4)

	res5, err5 := Classify(2)
	Tests.BoolCheck("Smallest prime deficient number err", err5 == nil)
	Tests.EqualCheck("Smallest prime deficient number", "deficient", res5)

	_, err6 := Classify(0)
	Tests.BoolCheck("Zero is rejected", err6 != nil)

	_, err7 := Classify(-1)
	Tests.BoolCheck("Negative integer is rejected", err7 != nil)
}
`,fi=`let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "Smallest perfect number" (Ok "perfect") (classify 6);
  Tests.string_check string_of_res "Medium perfect number" (Ok "perfect") (classify 28);
  Tests.string_check string_of_res "Large perfect number" (Ok "perfect") (classify 33550336);
  Tests.string_check string_of_res "Smallest abundant number" (Ok "abundant") (classify 12);
  Tests.string_check string_of_res "Smallest prime deficient number" (Ok "deficient") (classify 2);
  Tests.bool_check "Zero is rejected" (match classify 0 with Error _ -> true | _ -> false);
  Tests.bool_check "Negative integer is rejected" (match classify (-1) with Error _ -> true | _ -> false)
`,pi=`if 'classify' not in globals():
    raise Exception("classify function is not defined")

Tests.equal_check("Smallest perfect number", "perfect", classify(6))
Tests.equal_check("Medium perfect number", "perfect", classify(28))
Tests.equal_check("Large perfect number", "perfect", classify(33550336))
Tests.equal_check("Smallest abundant number", "abundant", classify(12))
Tests.equal_check("Medium abundant number", "abundant", classify(30))
Tests.equal_check("Large abundant number", "abundant", classify(33550335))
Tests.equal_check("Smallest prime deficient number", "deficient", classify(2))
Tests.equal_check("Smallest non-prime deficient number", "deficient", classify(4))
Tests.equal_check("Medium deficient number", "deficient", classify(32))
Tests.equal_check("One is classified correctly", "deficient", classify(1))

caught1 = False
try:
    classify(0)
except ValueError:
    caught1 = True
Tests.bool_check("Zero is rejected", caught1)

caught2 = False
try:
    classify(-1)
except ValueError:
    caught2 = True
Tests.bool_check("Negative integer is rejected", caught2)
`,mi=`// @ts-nocheck
if (typeof classify !== "function") {
  throw new Error("classify function is not defined");
}

Tests.equalCheck("Smallest perfect number", "perfect", classify(6));
Tests.equalCheck("Medium perfect number", "perfect", classify(28));
Tests.equalCheck("Large perfect number", "perfect", classify(33550336));
Tests.equalCheck("Smallest abundant number", "abundant", classify(12));
Tests.equalCheck("Medium abundant number", "abundant", classify(30));
Tests.equalCheck("Large abundant number", "abundant", classify(33550335));
Tests.equalCheck("Smallest prime deficient number", "deficient", classify(2));
Tests.equalCheck("Smallest non-prime deficient number", "deficient", classify(4));
Tests.equalCheck("Medium deficient number", "deficient", classify(32));
Tests.equalCheck("One is classified correctly", "deficient", classify(1));
Tests.boolCheck("Zero is rejected", typeof classify(0) === "object");
Tests.boolCheck("Negative integer is rejected", typeof classify(-1) === "object");
`,hi=`package main

import "fmt"

func main() {
	res := BestHands([]string{"4S 5S 7H 8D JC"})
	Tests.EqualCheck("Single hand wins", fmt.Sprintf("%v", []string{"4S 5S 7H 8D JC"}), fmt.Sprintf("%v", res))
}
`,gi=`let () =
  let res = best_hands ["4S 5S 7H 8D JC"] in
  Tests.equal_check "single hand" ["4S 5S 7H 8D JC"] res
`,_i=`if 'best_hands' not in globals():
    raise Exception("best_hands function is not defined")

Tests.equal_check("single hand wins", ["4S 5S 7H 8D JC"], best_hands(["4S 5S 7H 8D JC"]))
Tests.equal_check("highest card wins", ["3S 4S 5D 6H JH"], best_hands(["4D 5S 6S 8D 3C", "2S 4C 7S 9H 10H", "3S 4S 5D 6H JH"]))
`,vi=`// @ts-nocheck
if (typeof bestHands !== "function") {
  throw new Error("bestHands function is not defined");
}

Tests.equalCheck("single hand wins", JSON.stringify(["4S 5S 7H 8D JC"]), JSON.stringify(bestHands(["4S 5S 7H 8D JC"])));
Tests.equalCheck("highest card wins", JSON.stringify(["3S 4S 5D 6H JH"]), JSON.stringify(bestHands(["4D 5S 6S 8D 3C", "2S 4C 7S 9H 10H", "3S 4S 5D 6H JH"])));
`,yi=`package main

import "encoding/json"

func main() {
	leaf := NewTree("x")
	repLeaf := FromPov(leaf, "x")
	Tests.EqualCheck("singleton fromPov", "x", repLeaf.Value)

	t := NewTree("parent", NewTree("x"), NewTree("y"))
	reparented := FromPov(t, "x")
	Tests.EqualCheck("x is new root", "x", reparented.Value)
	Tests.EqualCheck("x has parent as child", "parent", reparented.Children[0].Value)

	p := PathTo(t, "x", "y")
	bytes, _ := json.Marshal(p)
	Tests.EqualCheck("pathTo simple", \`["x","parent","y"]\`, string(bytes))
}
`,bi=`let string_of_tree_opt = function
  | Some t -> Printf.sprintf "Some %s" t.value
  | None -> "None"

let string_of_list_opt = function
  | Some l -> Printf.sprintf "Some [%s]" (String.concat "; " l)
  | None -> "None"

let () =
  let leaf = { value = "x"; children = [] } in
  Tests.string_check string_of_tree_opt "singleton fromPov" (Some "x") (from_pov "x" leaf);

  let t = { value = "parent"; children = [{ value = "x"; children = [] }; { value = "y"; children = [] }] } in
  let reparented = from_pov "x" t in
  Tests.string_check string_of_tree_opt "x is new root" (Some "x") reparented;

  Tests.string_check string_of_list_opt "pathTo simple" (Some ["x"; "parent"; "y"]) (path_to "x" "y" t)
`,xi=`if 'Tree' not in globals():
    raise Exception("Tree class is not defined")

leaf = Tree("x")
Tests.equal_check("singleton fromPov", "x", leaf.from_pov("x").label)

t = Tree("parent", [Tree("x"), Tree("y")])
reparented = t.from_pov("x")
Tests.equal_check("x is new root", "x", reparented.label)
Tests.equal_check("x has parent as child", "parent", reparented.children[0].label)

Tests.equal_check("pathTo simple", ["x", "parent", "y"], t.path_to("x", "y"))
`,Si=`// @ts-nocheck
if (typeof Tree !== "function") {
  throw new Error("Tree class is not defined");
}

const leaf = new Tree("x");
Tests.equalCheck("singleton fromPov", "x", leaf.fromPov("x").value);

const t = new Tree("parent", [new Tree("x"), new Tree("y")]);
const reparented = t.fromPov("x");
Tests.equalCheck("x is new root", "x", reparented.value);
Tests.equalCheck("x has parent as child", "parent", reparented.children[0].value);

Tests.equalCheck("pathTo simple", JSON.stringify(["x", "parent", "y"]), JSON.stringify(t.pathTo("x", "y")));
`,Ci=`package main

func main() {
	// Position validation tests
	Tests.EqualCheck("queen with a valid position", "ok", Create(2, 2))
	Tests.EqualCheck("queen must have positive row", "row not positive", Create(-2, 2))
	Tests.EqualCheck("queen must have row on board", "row not on board", Create(8, 4))
	Tests.EqualCheck("queen must have positive column", "column not positive", Create(2, -2))
	Tests.EqualCheck("queen must have column on board", "column not on board", Create(4, 8))

	// Attack detection tests
	Tests.BoolCheck("cannot attack", false == CanAttack(2, 4, 6, 6))
	Tests.BoolCheck("can attack on same row", true == CanAttack(2, 4, 2, 6))
	Tests.BoolCheck("can attack on same column", true == CanAttack(4, 5, 2, 5))
	Tests.BoolCheck("can attack on first diagonal", true == CanAttack(2, 2, 0, 4))
	Tests.BoolCheck("can attack on second diagonal", true == CanAttack(2, 2, 3, 1))
	Tests.BoolCheck("can attack on third diagonal", true == CanAttack(2, 2, 1, 1))
	Tests.BoolCheck("can attack on fourth diagonal", true == CanAttack(1, 7, 0, 6))
	Tests.BoolCheck("cannot attack if falling diagonals only match on reflection", false == CanAttack(4, 1, 2, 5))
}
`,wi=`let string_of_str s = s

let () =
  (* Position validation tests *)
  Tests.string_check string_of_str "queen with a valid position" "ok" (create 2 2);
  Tests.string_check string_of_str "queen must have positive row" "row not positive" (create (-2) 2);
  Tests.string_check string_of_str "queen must have row on board" "row not on board" (create 8 4);
  Tests.string_check string_of_str "queen must have positive column" "column not positive" (create 2 (-2));
  Tests.string_check string_of_str "queen must have column on board" "column not on board" (create 4 8);

  (* Attack detection tests *)
  Tests.bool_check "cannot attack" (not (can_attack (2, 4) (6, 6)));
  Tests.bool_check "can attack on same row" (can_attack (2, 4) (2, 6));
  Tests.bool_check "can attack on same column" (can_attack (4, 5) (2, 5));
  Tests.bool_check "can attack on first diagonal" (can_attack (2, 2) (0, 4));
  Tests.bool_check "can attack on second diagonal" (can_attack (2, 2) (3, 1));
  Tests.bool_check "can attack on third diagonal" (can_attack (2, 2) (1, 1));
  Tests.bool_check "can attack on fourth diagonal" (can_attack (1, 7) (0, 6));
  Tests.bool_check "cannot attack if falling diagonals only match on reflection" (not (can_attack (4, 1) (2, 5)))
`,Ti=`if 'create' not in globals() or 'can_attack' not in globals():
    raise Exception("create and can_attack functions must be defined")

# Position validation tests
Tests.equal_check("queen with a valid position", 0, create({"position":{"row":2,"column":2}}))
Tests.equal_check("queen must have positive row", {"error":"row not positive"}, create({"position":{"row":-2,"column":2}}))
Tests.equal_check("queen must have row on board", {"error":"row not on board"}, create({"position":{"row":8,"column":4}}))
Tests.equal_check("queen must have positive column", {"error":"column not positive"}, create({"position":{"row":2,"column":-2}}))
Tests.equal_check("queen must have column on board", {"error":"column not on board"}, create({"position":{"row":4,"column":8}}))

# Attack detection tests
Tests.equal_check("cannot attack", False, can_attack({"position":{"row":2,"column":4}}, {"position":{"row":6,"column":6}}))
Tests.equal_check("can attack on same row", True, can_attack({"position":{"row":2,"column":4}}, {"position":{"row":2,"column":6}}))
Tests.equal_check("can attack on same column", True, can_attack({"position":{"row":4,"column":5}}, {"position":{"row":2,"column":5}}))
Tests.equal_check("can attack on first diagonal", True, can_attack({"position":{"row":2,"column":2}}, {"position":{"row":0,"column":4}}))
Tests.equal_check("can attack on second diagonal", True, can_attack({"position":{"row":2,"column":2}}, {"position":{"row":3,"column":1}}))
Tests.equal_check("can attack on third diagonal", True, can_attack({"position":{"row":2,"column":2}}, {"position":{"row":1,"column":1}}))
Tests.equal_check("can attack on fourth diagonal", True, can_attack({"position":{"row":1,"column":7}}, {"position":{"row":0,"column":6}}))
Tests.equal_check("cannot attack if falling diagonals only match on reflection", False, can_attack({"position":{"row":4,"column":1}}, {"position":{"row":2,"column":5}}))
`,Ei=`// @ts-nocheck
if (typeof create !== "function" || typeof canAttack !== "function") {
  throw new Error("create and canAttack functions must be defined");
}

// Position validation tests
Tests.equalCheck("queen with a valid position", JSON.stringify(0), JSON.stringify(create({ position: { row: 2, column: 2 } })));
Tests.equalCheck("queen must have positive row", JSON.stringify({ error: "row not positive" }), JSON.stringify(create({ position: { row: -2, column: 2 } })));
Tests.equalCheck("queen must have row on board", JSON.stringify({ error: "row not on board" }), JSON.stringify(create({ position: { row: 8, column: 4 } })));
Tests.equalCheck("queen must have positive column", JSON.stringify({ error: "column not positive" }), JSON.stringify(create({ position: { row: 2, column: -2 } })));
Tests.equalCheck("queen must have column on board", JSON.stringify({ error: "column not on board" }), JSON.stringify(create({ position: { row: 4, column: 8 } })));

// Attack detection tests
Tests.equalCheck("cannot attack", false, canAttack({ position: { row: 2, column: 4 } }, { position: { row: 6, column: 6 } }));
Tests.equalCheck("can attack on same row", true, canAttack({ position: { row: 2, column: 4 } }, { position: { row: 2, column: 6 } }));
Tests.equalCheck("can attack on same column", true, canAttack({ position: { row: 4, column: 5 } }, { position: { row: 2, column: 5 } }));
Tests.equalCheck("can attack on first diagonal", true, canAttack({ position: { row: 2, column: 2 } }, { position: { row: 0, column: 4 } }));
Tests.equalCheck("can attack on second diagonal", true, canAttack({ position: { row: 2, column: 2 } }, { position: { row: 3, column: 1 } }));
Tests.equalCheck("can attack on third diagonal", true, canAttack({ position: { row: 2, column: 2 } }, { position: { row: 1, column: 1 } }));
Tests.equalCheck("can attack on fourth diagonal", true, canAttack({ position: { row: 1, column: 7 } }, { position: { row: 0, column: 6 } }));
Tests.equalCheck("cannot attack if falling diagonals only match on reflection", false, canAttack({ position: { row: 4, column: 1 } }, { position: { row: 2, column: 5 } }));
`,Di=`package main

func main() {
	Tests.EqualCheck("no rows", 0, Count([]string{}))
	Tests.EqualCheck("no columns", 0, Count([]string{""}))
	Tests.EqualCheck("no rectangles", 0, Count([]string{" "}))
	Tests.EqualCheck("one rectangle", 1, Count([]string{"+-+", "| |", "+-+"}))
	Tests.EqualCheck("two rectangles without shared parts", 2, Count([]string{"  +-+", "  | |", "+-+-+", "| |  ", "+-+  "}))
	Tests.EqualCheck("five rectangles with shared parts", 5, Count([]string{"  +-+", "  | |", "+-+-+", "| | |", "+-+-+"}))
	Tests.EqualCheck("rectangle of height 1", 1, Count([]string{"+--+", "+--+"}))
	Tests.EqualCheck("rectangle of width 1", 1, Count([]string{"++", "||", "++"}))
}
`,Oi=`let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "no rows" 0 (count []);
  Tests.string_check string_of_int_val "no columns" 0 (count [""]);
  Tests.string_check string_of_int_val "no rectangles" 0 (count [" "]);
  Tests.string_check string_of_int_val "one rectangle" 1 (count ["+-+"; "| |"; "+-+"]);
  Tests.string_check string_of_int_val "two rectangles without shared parts" 2 (count ["  +-+"; "  | |"; "+-+-+"; "| |  "; "+-+  "]);
  Tests.string_check string_of_int_val "five rectangles with shared parts" 5 (count ["  +-+"; "  | |"; "+-+-+"; "| | |"; "+-+-+"]);
  Tests.string_check string_of_int_val "rectangle of height 1" 1 (count ["+--+"; "+--+"]);
  Tests.string_check string_of_int_val "rectangle of width 1" 1 (count ["++"; "||"; "++"])
`,ki=`if 'count' not in globals():
    raise Exception("count function is not defined")

Tests.equal_check("no rows", 0, count([]))
Tests.equal_check("no columns", 0, count([""]))
Tests.equal_check("no rectangles", 0, count([" "]))
Tests.equal_check("one rectangle", 1, count(["+-+", "| |", "+-+"]))
Tests.equal_check("two rectangles without shared parts", 2, count(["  +-+", "  | |", "+-+-+", "| |  ", "+-+  "]))
Tests.equal_check("five rectangles with shared parts", 5, count(["  +-+", "  | |", "+-+-+", "| | |", "+-+-+"]))
Tests.equal_check("rectangle of height 1", 1, count(["+--+", "+--+"]))
Tests.equal_check("rectangle of width 1", 1, count(["++", "||", "++"]))
`,Ai=`// @ts-nocheck
if (typeof count !== "function") {
  throw new Error("count function is not defined");
}

Tests.equalCheck("no rows", 0, count([]));
Tests.equalCheck("no columns", 0, count([""]));
Tests.equalCheck("no rectangles", 0, count([" "]));
Tests.equalCheck("one rectangle", 1, count(["+-+", "| |", "+-+"]));
Tests.equalCheck("two rectangles without shared parts", 2, count(["  +-+", "  | |", "+-+-+", "| |  ", "+-+  "]));
Tests.equalCheck("five rectangles with shared parts", 5, count(["  +-+", "  | |", "+-+-+", "| | |", "+-+-+"]));
Tests.equalCheck("rectangle of height 1", 1, count(["+--+", "+--+"]));
Tests.equalCheck("rectangle of width 1", 1, count(["++", "||", "++"]));
`,ji=`package main

func main() {
	Tests.EqualCheck("Direct parent-child relation", 1, DegreeOfSeparation(map[string][]string{ "Vera": {"Tomoko"}, "Tomoko": {"Aditi"} }, "Vera", "Tomoko"))
	Tests.EqualCheck("Sibling relationship", 1, DegreeOfSeparation(map[string][]string{ "Dalia": {"Olga", "Yassin"} }, "Olga", "Yassin"))
	Tests.EqualCheck("Two degrees of separation, grandchild", 2, DegreeOfSeparation(map[string][]string{ "Khadija": {"Mateo"}, "Mateo": {"Rami"} }, "Khadija", "Rami"))
	Tests.EqualCheck("Unrelated individuals", -1, DegreeOfSeparation(map[string][]string{ "Priya": {"Rami"}, "Kaito": {"Elif"} }, "Priya", "Kaito"))

	complexTree := map[string][]string{
		"Aiko": {"Bao", "Carlos"},
		"Bao": {"Dalia", "Elias"},
		"Carlos": {"Fatima", "Gustavo"},
		"Dalia": {"Hassan", "Isla"},
		"Elias": {"Javier"},
		"Fatima": {"Khadija", "Liam"},
		"Gustavo": {"Mina"},
		"Hassan": {"Noah", "Olga"},
		"Isla": {"Pedro"},
		"Javier": {"Quynh", "Ravi"},
		"Khadija": {"Sofia"},
		"Liam": {"Tariq", "Uma"},
		"Mina": {"Viktor", "Wang"},
		"Noah": {"Xiomara"},
		"Olga": {"Yuki"},
		"Pedro": {"Zane", "Aditi"},
		"Quynh": {"Boris"},
		"Ravi": {"Celine"},
		"Sofia": {"Diego", "Elif"},
		"Tariq": {"Farah"},
		"Uma": {"Giorgio"},
		"Viktor": {"Hana", "Ian"},
		"Wang": {"Jing"},
		"Xiomara": {"Kaito"},
		"Yuki": {"Leila"},
		"Zane": {"Mateo"},
		"Aditi": {"Nia"},
		"Boris": {"Oscar"},
		"Celine": {"Priya"},
		"Diego": {"Qi"},
		"Elif": {"Rami"},
		"Farah": {"Sven"},
		"Giorgio": {"Tomoko"},
		"Hana": {"Umar"},
		"Ian": {"Vera"},
		"Jing": {"Wyatt"},
		"Kaito": {"Xia"},
		"Leila": {"Yassin"},
		"Mateo": {"Zara"},
		"Nia": {"Antonio"},
		"Oscar": {"Bianca"},
		"Priya": {"Cai"},
		"Qi": {"Dimitri"},
		"Rami": {"Ewa"},
		"Sven": {"Fabio"},
		"Tomoko": {"Gabriela"},
		"Umar": {"Helena"},
		"Vera": {"Igor"},
		"Wyatt": {"Jun"},
		"Xia": {"Kim"},
		"Yassin": {"Lucia"},
		"Zara": {"Mohammed"},
	}

	Tests.EqualCheck("Complex graph cousins", 9, DegreeOfSeparation(complexTree, "Dimitri", "Fabio"))
	Tests.EqualCheck("Complex graph far removed nephew", 14, DegreeOfSeparation(complexTree, "Lucia", "Jun"))
	Tests.EqualCheck("Complex graph shortcuts", 12, DegreeOfSeparation(complexTree, "Wyatt", "Xia"))
}
`,Mi=`let string_of_opt_int = function
  | None -> "None"
  | Some x -> Printf.sprintf "Some %d" x

let () =
  Tests.string_check string_of_opt_int "Direct parent-child relation" (Some 1) (degree_of_separation [("Vera", ["Tomoko"]); ("Tomoko", ["Aditi"])] "Vera" "Tomoko");
  Tests.string_check string_of_opt_int "Sibling relationship" (Some 1) (degree_of_separation [("Dalia", ["Olga"; "Yassin"])] "Olga" "Yassin");
  Tests.string_check string_of_opt_int "Two degrees of separation, grandchild" (Some 2) (degree_of_separation [("Khadija", ["Mateo"]); ("Mateo", ["Rami"])] "Khadija" "Rami");
  Tests.string_check string_of_opt_int "Unrelated individuals" None (degree_of_separation [("Priya", ["Rami"]); ("Kaito", ["Elif"])] "Priya" "Kaito")
`,Ni=`if 'degree_of_separation' not in globals():
    raise Exception("degree_of_separation function is not defined")

Tests.equal_check("Direct parent-child relation", 1, degree_of_separation({ "Vera": ["Tomoko"], "Tomoko": ["Aditi"] }, "Vera", "Tomoko"))
Tests.equal_check("Sibling relationship", 1, degree_of_separation({ "Dalia": ["Olga", "Yassin"] }, "Olga", "Yassin"))
Tests.equal_check("Two degrees of separation, grandchild", 2, degree_of_separation({ "Khadija": ["Mateo"], "Mateo": ["Rami"] }, "Khadija", "Rami"))
Tests.equal_check("Unrelated individuals", None, degree_of_separation({ "Priya": ["Rami"], "Kaito": ["Elif"] }, "Priya", "Kaito"))

complex_tree = {
  "Aiko": ["Bao", "Carlos"],
  "Bao": ["Dalia", "Elias"],
  "Carlos": ["Fatima", "Gustavo"],
  "Dalia": ["Hassan", "Isla"],
  "Elias": ["Javier"],
  "Fatima": ["Khadija", "Liam"],
  "Gustavo": ["Mina"],
  "Hassan": ["Noah", "Olga"],
  "Isla": ["Pedro"],
  "Javier": ["Quynh", "Ravi"],
  "Khadija": ["Sofia"],
  "Liam": ["Tariq", "Uma"],
  "Mina": ["Viktor", "Wang"],
  "Noah": ["Xiomara"],
  "Olga": ["Yuki"],
  "Pedro": ["Zane", "Aditi"],
  "Quynh": ["Boris"],
  "Ravi": ["Celine"],
  "Sofia": ["Diego", "Elif"],
  "Tariq": ["Farah"],
  "Uma": ["Giorgio"],
  "Viktor": ["Hana", "Ian"],
  "Wang": ["Jing"],
  "Xiomara": ["Kaito"],
  "Yuki": ["Leila"],
  "Zane": ["Mateo"],
  "Aditi": ["Nia"],
  "Boris": ["Oscar"],
  "Celine": ["Priya"],
  "Diego": ["Qi"],
  "Elif": ["Rami"],
  "Farah": ["Sven"],
  "Giorgio": ["Tomoko"],
  "Hana": ["Umar"],
  "Ian": ["Vera"],
  "Jing": ["Wyatt"],
  "Kaito": ["Xia"],
  "Leila": ["Yassin"],
  "Mateo": ["Zara"],
  "Nia": ["Antonio"],
  "Oscar": ["Bianca"],
  "Priya": ["Cai"],
  "Qi": ["Dimitri"],
  "Rami": ["Ewa"],
  "Sven": ["Fabio"],
  "Tomoko": ["Gabriela"],
  "Umar": ["Helena"],
  "Vera": ["Igor"],
  "Wyatt": ["Jun"],
  "Xia": ["Kim"],
  "Yassin": ["Lucia"],
  "Zara": ["Mohammed"]
}

Tests.equal_check("Complex graph cousins", 9, degree_of_separation(complex_tree, "Dimitri", "Fabio"))
Tests.equal_check("Complex graph far removed nephew", 14, degree_of_separation(complex_tree, "Lucia", "Jun"))
Tests.equal_check("Complex graph shortcuts", 12, degree_of_separation(complex_tree, "Wyatt", "Xia"))
`,Pi=`// @ts-nocheck
if (typeof degreeOfSeparation !== "function") {
  throw new Error("degreeOfSeparation function is not defined");
}

Tests.equalCheck("Direct parent-child relation", 1, degreeOfSeparation({ "Vera": ["Tomoko"], "Tomoko": ["Aditi"] }, "Vera", "Tomoko"));
Tests.equalCheck("Sibling relationship", 1, degreeOfSeparation({ "Dalia": ["Olga", "Yassin"] }, "Olga", "Yassin"));
Tests.equalCheck("Two degrees of separation, grandchild", 2, degreeOfSeparation({ "Khadija": ["Mateo"], "Mateo": ["Rami"] }, "Khadija", "Rami"));
Tests.equalCheck("Unrelated individuals", null, degreeOfSeparation({ "Priya": ["Rami"], "Kaito": ["Elif"] }, "Priya", "Kaito"));

const complexTree = {
  "Aiko": ["Bao", "Carlos"],
  "Bao": ["Dalia", "Elias"],
  "Carlos": ["Fatima", "Gustavo"],
  "Dalia": ["Hassan", "Isla"],
  "Elias": ["Javier"],
  "Fatima": ["Khadija", "Liam"],
  "Gustavo": ["Mina"],
  "Hassan": ["Noah", "Olga"],
  "Isla": ["Pedro"],
  "Javier": ["Quynh", "Ravi"],
  "Khadija": ["Sofia"],
  "Liam": ["Tariq", "Uma"],
  "Mina": ["Viktor", "Wang"],
  "Noah": ["Xiomara"],
  "Olga": ["Yuki"],
  "Pedro": ["Zane", "Aditi"],
  "Quynh": ["Boris"],
  "Ravi": ["Celine"],
  "Sofia": ["Diego", "Elif"],
  "Tariq": ["Farah"],
  "Uma": ["Giorgio"],
  "Viktor": ["Hana", "Ian"],
  "Wang": ["Jing"],
  "Xiomara": ["Kaito"],
  "Yuki": ["Leila"],
  "Zane": ["Mateo"],
  "Aditi": ["Nia"],
  "Boris": ["Oscar"],
  "Celine": ["Priya"],
  "Diego": ["Qi"],
  "Elif": ["Rami"],
  "Farah": ["Sven"],
  "Giorgio": ["Tomoko"],
  "Hana": ["Umar"],
  "Ian": ["Vera"],
  "Jing": ["Wyatt"],
  "Kaito": ["Xia"],
  "Leila": ["Yassin"],
  "Mateo": ["Zara"],
  "Nia": ["Antonio"],
  "Oscar": ["Bianca"],
  "Priya": ["Cai"],
  "Qi": ["Dimitri"],
  "Rami": ["Ewa"],
  "Sven": ["Fabio"],
  "Tomoko": ["Gabriela"],
  "Umar": ["Helena"],
  "Vera": ["Igor"],
  "Wyatt": ["Jun"],
  "Xia": ["Kim"],
  "Yassin": ["Lucia"],
  "Zara": ["Mohammed"]
};

Tests.equalCheck("Complex graph cousins", 9, degreeOfSeparation(complexTree, "Dimitri", "Fabio"));
Tests.equalCheck("Complex graph far removed nephew", 14, degreeOfSeparation(complexTree, "Lucia", "Jun"));
Tests.equalCheck("Complex graph shortcuts", 12, degreeOfSeparation(complexTree, "Wyatt", "Xia"));
`,Fi=`package main

func main() {
	x1, y1, d1 := Step(0, 0, "north", "LA")
	Tests.EqualCheck("at origin facing north turn left advance x", -1, x1)
	Tests.EqualCheck("at origin facing north turn left advance y", 0, y1)
	Tests.EqualCheck("facing west after turn left", "west", d1)

	x2, y2, d2 := Step(7, 3, "north", "RAALAL")
	Tests.EqualCheck("at 7,3 facing north evaluate RAALAL x", 9, x2)
	Tests.EqualCheck("at 7,3 facing north evaluate RAALAL y", 4, y2)
	Tests.EqualCheck("at 7,3 facing north evaluate RAALAL bearing", "west", d2)
}
`,Ii=`let string_of_tuple (x, y, d) =
  Printf.sprintf "(%d, %d, %s)" x y d

let () =
  Tests.string_check string_of_tuple "at origin facing north turn left advance" (-1, 0, "west") (simulate 0 0 "north" "LA");
  Tests.string_check string_of_tuple "at 7,3 facing north evaluate RAALAL" (9, 4, "west") (simulate 7 3 "north" "RAALAL")
`,Li=`if 'Robot' not in globals():
    raise Exception("Robot class is not defined")

robot1 = Robot(NORTH, 0, 0)
robot1.move("LA")
Tests.equal_check("at origin facing north turn left advance", (-1, 0), robot1.coordinates)
Tests.equal_check("facing west after turn left", WEST, robot1.direction)

robot2 = Robot(NORTH, 7, 3)
robot2.move("RAALAL")
Tests.equal_check("at 7,3 facing north evaluate RAALAL coords", (9, 4), robot2.coordinates)
Tests.equal_check("at 7,3 facing north evaluate RAALAL bearing", WEST, robot2.direction)
`,Ri=`// @ts-nocheck
if (typeof Robot !== "function") {
  throw new Error("Robot class is not defined");
}

const robot1 = new Robot();
robot1.place({ x: 0, y: 0, direction: "north" });
robot1.evaluate("LA");
Tests.equalCheck("at origin facing north turn left advance", JSON.stringify([-1, 0]), JSON.stringify(robot1.coordinates));
Tests.equalCheck("facing west after turn left", "west", robot1.bearing);

const robot2 = new Robot();
robot2.place({ x: 7, y: 3, direction: "north" });
robot2.evaluate("RAALAL");
Tests.equalCheck("at 7,3 facing north evaluate RAALAL coords", JSON.stringify([9, 4]), JSON.stringify(robot2.coordinates));
Tests.equalCheck("at 7,3 facing north evaluate RAALAL bearing", "west", robot2.bearing);
`,zi=`package main

func main() {
	Tests.EqualCheck("encode empty string", "", Encode(""))
	Tests.EqualCheck("encode single characters without count", "XYZ", Encode("XYZ"))
	Tests.EqualCheck("encode string with repeated characters", "2A3B4C", Encode("AABBBCCCC"))
	Tests.EqualCheck("encode multiple whitespace", "2 hs2q q2w", Encode("  hs  q q  w"))
	Tests.EqualCheck("decode empty string", "", Decode(""))
	Tests.EqualCheck("decode single characters without count", "XYZ", Decode("XYZ"))
	Tests.EqualCheck("decode string with repeated characters", "AABBBCCCC", Decode("2A3B4C"))
	Tests.EqualCheck("encode and then decode", "zzz ZZ zZ", Decode(Encode("zzz ZZ zZ")))
}
`,Bi=`let identity s = s

let () =
  Tests.string_check identity "encode empty string" "" (encode "");
  Tests.string_check identity "encode single characters without count" "XYZ" (encode "XYZ");
  Tests.string_check identity "encode string with repeated characters" "2A3B4C" (encode "AABBBCCCC");
  Tests.string_check identity "encode multiple whitespace" "2 hs2q q2w" (encode "  hs  q q  w");
  Tests.string_check identity "decode empty string" "" (decode "");
  Tests.string_check identity "decode single characters without count" "XYZ" (decode "XYZ");
  Tests.string_check identity "decode string with repeated characters" "AABBBCCCC" (decode "2A3B4C");
  Tests.string_check identity "encode and then decode" "zzz ZZ zZ" (decode (encode "zzz ZZ zZ"))
`,Vi=`if 'encode' not in globals() or 'decode' not in globals():
    raise Exception("encode/decode function is not defined")

Tests.equal_check("encode empty string", "", encode(""))
Tests.equal_check("encode single characters without count", "XYZ", encode("XYZ"))
Tests.equal_check("encode string with repeated characters", "2A3B4C", encode("AABBBCCCC"))
Tests.equal_check("encode multiple whitespace", "2 hs2q q2w", encode("  hs  q q  w"))
Tests.equal_check("decode empty string", "", decode(""))
Tests.equal_check("decode single characters without count", "XYZ", decode("XYZ"))
Tests.equal_check("decode string with repeated characters", "AABBBCCCC", decode("2A3B4C"))
Tests.equal_check("encode and then decode", "zzz ZZ zZ", decode(encode("zzz ZZ zZ")))
`,Hi=`// @ts-nocheck
if (typeof encode !== "function" || typeof decode !== "function") {
  throw new Error("encode/decode function is not defined");
}

Tests.equalCheck("encode empty string", "", encode(""));
Tests.equalCheck("encode single characters without count", "XYZ", encode("XYZ"));
Tests.equalCheck("encode string with repeated characters", "2A3B4C", encode("AABBBCCCC"));
Tests.equalCheck("encode multiple whitespace", "2 hs2q q2w", encode("  hs  q q  w"));
Tests.equalCheck("decode empty string", "", decode(""));
Tests.equalCheck("decode single characters without count", "XYZ", decode("XYZ"));
Tests.equalCheck("decode string with repeated characters", "AABBBCCCC", decode("2A3B4C"));
Tests.equalCheck("encode and then decode", "zzz ZZ zZ", decode(encode("zzz ZZ zZ")));
`,Ui=`package main

import "fmt"

func main() {
	matrix := [][]int{
		{9, 8, 7},
		{5, 3, 2},
		{6, 6, 7},
	}
	res := SaddlePoints(matrix)
	Tests.EqualCheck("Single saddle point", fmt.Sprintf("%v", []Pair{{Row: 2, Column: 1}}), fmt.Sprintf("%v", res))
}
`,Wi=`let () =
  let m = [ [9; 8; 7]; [5; 3; 2]; [6; 6; 7] ] in
  let res = saddle_points m in
  Tests.equal_check "single saddle point" [{ row = 2; column = 1 }] res
`,Gi=`if 'saddle_points' not in globals():
    raise Exception("saddle_points function is not defined")

matrix1 = [
    [9, 8, 7],
    [5, 3, 2],
    [6, 6, 7]
]
Tests.equal_check("single saddle point", [{"row": 2, "column": 1}], saddle_points(matrix1))

matrix2 = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
]
Tests.equal_check("no saddle points", [], saddle_points(matrix2))
`,Ki=`// @ts-nocheck
if (typeof saddlePoints !== "function") {
  throw new Error("saddlePoints function is not defined");
}

const matrix1 = [
  [9, 8, 7],
  [5, 3, 2],
  [6, 6, 7]
];
Tests.equalCheck("single saddle point", JSON.stringify([{ row: 2, column: 1 }]), JSON.stringify(saddlePoints(matrix1)));

const matrix2 = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1]
];
Tests.equalCheck("no saddle points", JSON.stringify([]), JSON.stringify(saddlePoints(matrix2)));
`,qi=`package main

func main() {
	s1, ok1 := Say(0)
	Tests.BoolCheck("zero ok", ok1)
	Tests.EqualCheck("zero", "zero", s1)

	s2, ok2 := Say(1)
	Tests.BoolCheck("one ok", ok2)
	Tests.EqualCheck("one", "one", s2)

	s3, ok3 := Say(14)
	Tests.BoolCheck("fourteen ok", ok3)
	Tests.EqualCheck("fourteen", "fourteen", s3)

	s4, ok4 := Say(1234)
	Tests.BoolCheck("1234 ok", ok4)
	Tests.EqualCheck("one thousand two hundred thirty-four", "one thousand two hundred thirty-four", s4)

	s5, ok5 := Say(999999999999)
	Tests.BoolCheck("999999999999 ok", ok5)
	Tests.EqualCheck("999,999,999,999", "nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", s5)

	_, ok6 := Say(-1)
	Tests.BoolCheck("negative is error", !ok6)

	_, ok7 := Say(1000000000000)
	Tests.BoolCheck("too large is error", !ok7)
}
`,Ji=`let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "zero" (Ok "zero") (say 0L);
  Tests.string_check string_of_res "one" (Ok "one") (say 1L);
  Tests.string_check string_of_res "fourteen" (Ok "fourteen") (say 14L);
  Tests.string_check string_of_res "twenty-two" (Ok "twenty-two") (say 22L);
  Tests.string_check string_of_res "one thousand two hundred thirty-four" (Ok "one thousand two hundred thirty-four") (say 1234L);
  Tests.bool_check "negative is error" (match say (-1L) with Error _ -> true | _ -> false);
  Tests.bool_check "too large is error" (match say 1000000000000L with Error _ -> true | _ -> false)
`,Yi=`if 'say' not in globals():
    raise Exception("say function is not defined")

Tests.equal_check("zero", "zero", say(0))
Tests.equal_check("one", "one", say(1))
Tests.equal_check("fourteen", "fourteen", say(14))
Tests.equal_check("twenty", "twenty", say(20))
Tests.equal_check("twenty-two", "twenty-two", say(22))
Tests.equal_check("one hundred", "one hundred", say(100))
Tests.equal_check("one hundred twenty-three", "one hundred twenty-three", say(123))
Tests.equal_check("one thousand", "one thousand", say(1000))
Tests.equal_check("one thousand two hundred thirty-four", "one thousand two hundred thirty-four", say(1234))
Tests.equal_check("one million", "one million", say(1000000))
Tests.equal_check("one billion", "one billion", say(1000000000))
Tests.equal_check("999,999,999,999", "nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", say(999999999999))

caught1 = False
try:
    say(-1)
except ValueError:
    caught1 = True
Tests.bool_check("negative is error", caught1)

caught2 = False
try:
    say(1000000000000)
except ValueError:
    caught2 = True
Tests.bool_check("too large is error", caught2)
`,Xi=`// @ts-nocheck
if (typeof say !== "function") {
  throw new Error("say function is not defined");
}

Tests.equalCheck("zero", "zero", say(0));
Tests.equalCheck("one", "one", say(1));
Tests.equalCheck("fourteen", "fourteen", say(14));
Tests.equalCheck("twenty", "twenty", say(20));
Tests.equalCheck("twenty-two", "twenty-two", say(22));
Tests.equalCheck("one hundred", "one hundred", say(100));
Tests.equalCheck("one hundred twenty-three", "one hundred twenty-three", say(123));
Tests.equalCheck("one thousand", "one thousand", say(1000));
Tests.equalCheck("one thousand two hundred thirty-four", "one thousand two hundred thirty-four", say(1234));
Tests.equalCheck("one million", "one million", say(1000000));
Tests.equalCheck("one billion", "one billion", say(1000000000));
Tests.equalCheck("999,999,999,999", "nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", say(999999999999));
Tests.boolCheck("negative is error", typeof say(-1) === "object");
Tests.boolCheck("too large is error", typeof say(1000000000000) === "object");
`,Zi=`package main

func main() {
	Tests.EqualCheck("lowercase letter", 1, Score("a"))
	Tests.EqualCheck("uppercase letter", 1, Score("A"))
	Tests.EqualCheck("valuable letter", 4, Score("f"))
	Tests.EqualCheck("short word", 2, Score("at"))
	Tests.EqualCheck("short, valuable word", 12, Score("zoo"))
	Tests.EqualCheck("medium word", 6, Score("street"))
	Tests.EqualCheck("medium, valuable word", 22, Score("quirky"))
	Tests.EqualCheck("long, mixed-case word", 41, Score("OxyphenButazone"))
	Tests.EqualCheck("english-like word", 8, Score("pinata"))
	Tests.EqualCheck("empty input", 0, Score(""))
	Tests.EqualCheck("entire alphabet available", 87, Score("abcdefghijklmnopqrstuvwxyz"))
}
`,Qi=`let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "lowercase letter" 1 (score "a");
  Tests.string_check string_of_int_val "uppercase letter" 1 (score "A");
  Tests.string_check string_of_int_val "valuable letter" 4 (score "f");
  Tests.string_check string_of_int_val "short word" 2 (score "at");
  Tests.string_check string_of_int_val "short, valuable word" 12 (score "zoo");
  Tests.string_check string_of_int_val "medium word" 6 (score "street");
  Tests.string_check string_of_int_val "medium, valuable word" 22 (score "quirky");
  Tests.string_check string_of_int_val "long, mixed-case word" 41 (score "OxyphenButazone");
  Tests.string_check string_of_int_val "english-like word" 8 (score "pinata");
  Tests.string_check string_of_int_val "empty input" 0 (score "");
  Tests.string_check string_of_int_val "entire alphabet available" 87 (score "abcdefghijklmnopqrstuvwxyz")
`,$i=`if 'score' not in globals():
    raise Exception("score function is not defined")

Tests.equal_check("lowercase letter", 1, score("a"))
Tests.equal_check("uppercase letter", 1, score("A"))
Tests.equal_check("valuable letter", 4, score("f"))
Tests.equal_check("short word", 2, score("at"))
Tests.equal_check("short, valuable word", 12, score("zoo"))
Tests.equal_check("medium word", 6, score("street"))
Tests.equal_check("medium, valuable word", 22, score("quirky"))
Tests.equal_check("long, mixed-case word", 41, score("OxyphenButazone"))
Tests.equal_check("english-like word", 8, score("pinata"))
Tests.equal_check("empty input", 0, score(""))
Tests.equal_check("entire alphabet available", 87, score("abcdefghijklmnopqrstuvwxyz"))
`,ea=`// @ts-nocheck
if (typeof score !== "function") {
  throw new Error("score function is not defined");
}

Tests.equalCheck("lowercase letter", 1, score("a"));
Tests.equalCheck("uppercase letter", 1, score("A"));
Tests.equalCheck("valuable letter", 4, score("f"));
Tests.equalCheck("short word", 2, score("at"));
Tests.equalCheck("short, valuable word", 12, score("zoo"));
Tests.equalCheck("medium word", 6, score("street"));
Tests.equalCheck("medium, valuable word", 22, score("quirky"));
Tests.equalCheck("long, mixed-case word", 41, score("OxyphenButazone"));
Tests.equalCheck("english-like word", 8, score("pinata"));
Tests.equalCheck("empty input", 0, score(""));
Tests.equalCheck("entire alphabet available", 87, score("abcdefghijklmnopqrstuvwxyz"));
`,ta=`package main

import "fmt"

func main() {
	Tests.EqualCheck("Empty list has length of zero", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{}, []map[string]interface{}{{"operation": "count", "expected": float64(0)}})))
	Tests.EqualCheck("Singleton list has length of one", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{1}, []map[string]interface{}{{"operation": "count", "expected": float64(1)}})))
	Tests.EqualCheck("Non-empty list has correct length", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{1, 2, 3}, []map[string]interface{}{{"operation": "count", "expected": float64(3)}})))
	Tests.EqualCheck("Pop from empty list is an error", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{}, []map[string]interface{}{{"operation": "pop", "expected": map[string]interface{}{"error": "list is empty"}}})))
	Tests.EqualCheck("Can pop from singleton list", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{1}, []map[string]interface{}{{"operation": "pop", "expected": float64(1)}})))
}
`,na=`let () =
  Tests.bool_check "Empty list has length of zero" (list_ops [] [("count", Some 0)]);
  Tests.bool_check "Singleton list has length of one" (list_ops [1] [("count", Some 1)]);
  Tests.bool_check "Non-empty list has correct length" (list_ops [1; 2; 3] [("count", Some 3)]);
  Tests.bool_check "Pop from empty list is an error" (list_ops [] [("pop", None)]);
  Tests.bool_check "Can pop from singleton list" (list_ops [1] [("pop", Some 1)])
`,ra=`if 'list_ops' not in globals():
    raise Exception("list_ops function is not defined")

Tests.equal_check("Empty list has length of zero", {}, list_ops([], [{"operation":"count","expected":0}]))
Tests.equal_check("Singleton list has length of one", {}, list_ops([1], [{"operation":"count","expected":1}]))
Tests.equal_check("Non-empty list has correct length", {}, list_ops([1,2,3], [{"operation":"count","expected":3}]))
Tests.equal_check("Pop from empty list is an error", {}, list_ops([], [{"operation":"pop","expected":{"error":"list is empty"}}]))
Tests.equal_check("Can pop from singleton list", {}, list_ops([1], [{"operation":"pop","expected":1}]))
`,ia=`// @ts-nocheck
if (typeof list !== "function") {
  throw new Error("list function is not defined");
}

Tests.equalCheck("Empty list has length of zero", JSON.stringify({}), JSON.stringify(list([], [{"operation":"count","expected":0}])));
Tests.equalCheck("Singleton list has length of one", JSON.stringify({}), JSON.stringify(list([1], [{"operation":"count","expected":1}])));
Tests.equalCheck("Non-empty list has correct length", JSON.stringify({}), JSON.stringify(list([1,2,3], [{"operation":"count","expected":3}])));
Tests.equalCheck("Pop from empty list is an error", JSON.stringify({}), JSON.stringify(list([], [{"operation":"pop","expected":{"error":"list is empty"}}])));
Tests.equalCheck("Can pop from singleton list", JSON.stringify({}), JSON.stringify(list([1], [{"operation":"pop","expected":1}])));
`,aa=`package main

func main() {
	st1, err1 := Gamestate([]string{"XOO","X  ","X  "})
	Tests.BoolCheck("Finished game where X won err", err1 == nil)
	Tests.EqualCheck("Finished game where X won", "win", st1)

	st2, err2 := Gamestate([]string{"OXX","OX ","O  "})
	Tests.BoolCheck("Finished game where O won err", err2 == nil)
	Tests.EqualCheck("Finished game where O won", "win", st2)

	st3, err3 := Gamestate([]string{"XOX","XXO","OXO"})
	Tests.BoolCheck("Draw game err", err3 == nil)
	Tests.EqualCheck("Draw game", "draw", st3)

	st4, err4 := Gamestate([]string{"   ","   ","   "})
	Tests.BoolCheck("Ongoing game err", err4 == nil)
	Tests.EqualCheck("Ongoing game", "ongoing", st4)

	_, err5 := Gamestate([]string{"XX ","   ","   "})
	Tests.BoolCheck("Invalid board: X went twice", err5 != nil)

	_, err6 := Gamestate([]string{"OOX","   ","   "})
	Tests.BoolCheck("Invalid board: O started", err6 != nil)

	_, err7 := Gamestate([]string{"XXX","OOO","   "})
	Tests.BoolCheck("Invalid board: both won", err7 != nil)
}
`,oa=`let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "Finished game where X won" (Ok "win") (gamestate ["XOO"; "X  "; "X  "]);
  Tests.string_check string_of_res "Finished game where O won" (Ok "win") (gamestate ["OXX"; "OX "; "O  "]);
  Tests.string_check string_of_res "Draw game" (Ok "draw") (gamestate ["XOX"; "XXO"; "OXO"]);
  Tests.string_check string_of_res "Ongoing game" (Ok "ongoing") (gamestate ["   "; "   "; "   "]);
  Tests.bool_check "Invalid board: X went twice" (match gamestate ["XX "; "   "; "   "] with Error _ -> true | _ -> false);
  Tests.bool_check "Invalid board: O started" (match gamestate ["OOX"; "   "; "   "] with Error _ -> true | _ -> false);
  Tests.bool_check "Invalid board: both won" (match gamestate ["XXX"; "OOO"; "   "] with Error _ -> true | _ -> false)
`,sa=`if 'gamestate' not in globals():
    raise Exception("gamestate function is not defined")

Tests.equal_check("Finished game where X won", "win", gamestate(["XOO","X  ","X  "]))
Tests.equal_check("Finished game where O won", "win", gamestate(["OXX","OX ","O  "]))
Tests.equal_check("Draw game", "draw", gamestate(["XOX","XXO","OXO"]))
Tests.equal_check("Ongoing game", "ongoing", gamestate(["   ","   ","   "]))
Tests.equal_check("Ongoing game 5 moves in", "ongoing", gamestate(["X  "," XO","OX "]))

caught1 = False
try:
    gamestate(["XX ","   ","   "])
except ValueError:
    caught1 = True
Tests.bool_check("Invalid board: X went twice", caught1)

caught2 = False
try:
    gamestate(["OOX","   ","   "])
except ValueError:
    caught2 = True
Tests.bool_check("Invalid board: O started", caught2)

caught3 = False
try:
    gamestate(["XXX","OOO","   "])
except ValueError:
    caught3 = True
Tests.bool_check("Invalid board: both won", caught3)
`,ca=`// @ts-nocheck
if (typeof gamestate !== "function") {
  throw new Error("gamestate function is not defined");
}

Tests.equalCheck("Finished game where X won", JSON.stringify("win"), JSON.stringify(gamestate(["XOO","X  ","X  "])));
Tests.equalCheck("Finished game where O won", JSON.stringify("win"), JSON.stringify(gamestate(["OXX","OX ","O  "])));
Tests.equalCheck("Draw game", JSON.stringify("draw"), JSON.stringify(gamestate(["XOX","XXO","OXO"])));
Tests.equalCheck("Ongoing game", JSON.stringify("ongoing"), JSON.stringify(gamestate(["   ","   ","   "])));
Tests.equalCheck("Ongoing game 5 moves in", JSON.stringify("ongoing"), JSON.stringify(gamestate(["X  "," XO","OX "])));
Tests.boolCheck("Invalid board: X went twice", typeof gamestate(["XX ","   ","   "]) === "object");
Tests.boolCheck("Invalid board: O started", typeof gamestate(["OOX","   ","   "]) === "object");
Tests.boolCheck("Invalid board: both won", typeof gamestate(["XXX","OOO","   "]) === "object");
Tests.boolCheck("Invalid board: O kept playing after X wins", typeof gamestate(["OO ","XXX"," O "]) === "object");
`,la=`package main

import "fmt"

func main() {
	res1 := Keep([]int{1, 2, 3}, func(x int) bool { return x%2 == 1 })
	Tests.EqualCheck("Keep odd numbers", fmt.Sprintf("%v", []int{1, 3}), fmt.Sprintf("%v", res1))

	res2 := Discard([]int{1, 2, 3}, func(x int) bool { return x%2 == 1 })
	Tests.EqualCheck("Discard odd numbers", fmt.Sprintf("%v", []int{2}), fmt.Sprintf("%v", res2))
}
`,ua=`let () =
  let res1 = keep (fun x -> x mod 2 = 1) [1; 2; 3] in
  Tests.equal_check "keep odd" [1; 3] res1;
  let res2 = discard (fun x -> x mod 2 = 1) [1; 2; 3] in
  Tests.equal_check "discard odd" [2] res2
`,da=`if 'keep' not in globals() or 'discard' not in globals():
    raise Exception("keep and discard functions must be defined")

Tests.equal_check("keep on empty list", [], keep([], lambda x: True))
Tests.equal_check("keeps everything", [1, 3, 5], keep([1, 3, 5], lambda x: True))
Tests.equal_check("keeps nothing", [], keep([1, 3, 5], lambda x: False))
Tests.equal_check("keeps first and last", [1, 3], keep([1, 2, 3], lambda x: x % 2 == 1))
Tests.equal_check("keeps strings", ["zebra", "zombies", "zealot"], keep(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], lambda x: x.startswith('z')))

Tests.equal_check("discard on empty list", [], discard([], lambda x: True))
Tests.equal_check("discards everything", [], discard([1, 3, 5], lambda x: True))
Tests.equal_check("discards nothing", [1, 3, 5], discard([1, 3, 5], lambda x: False))
Tests.equal_check("discards first and last", [2], discard([1, 2, 3], lambda x: x % 2 == 1))
Tests.equal_check("discards strings", ["apple", "banana", "cherimoya"], discard(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], lambda x: x.startswith('z')))
`,fa=`// @ts-nocheck
if (typeof keep !== "function" || typeof discard !== "function") {
  throw new Error("keep and discard functions must be defined");
}

Tests.equalCheck("keep on empty list", JSON.stringify([]), JSON.stringify(keep([], (x) => true)));
Tests.equalCheck("keeps everything", JSON.stringify([1, 3, 5]), JSON.stringify(keep([1, 3, 5], (x) => true)));
Tests.equalCheck("keeps nothing", JSON.stringify([]), JSON.stringify(keep([1, 3, 5], (x) => false)));
Tests.equalCheck("keeps first and last", JSON.stringify([1, 3]), JSON.stringify(keep([1, 2, 3], (x) => x % 2 === 1)));
Tests.equalCheck("keeps strings starting with z", JSON.stringify(["zebra", "zombies", "zealot"]), JSON.stringify(keep(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], (x: string) => x.startsWith('z'))));

Tests.equalCheck("discard on empty list", JSON.stringify([]), JSON.stringify(discard([], (x) => true)));
Tests.equalCheck("discards everything", JSON.stringify([]), JSON.stringify(discard([1, 3, 5], (x) => true)));
Tests.equalCheck("discards nothing", JSON.stringify([1, 3, 5]), JSON.stringify(discard([1, 3, 5], (x) => false)));
Tests.equalCheck("discards first and last", JSON.stringify([2]), JSON.stringify(discard([1, 2, 3], (x) => x % 2 === 1)));
Tests.equalCheck("discards strings starting with z", JSON.stringify(["apple", "banana", "cherimoya"]), JSON.stringify(discard(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], (x: string) => x.startsWith('z'))));
`,pa=`package main

func main() {
	Tests.EqualCheck("NOW translates to two hours later", "2012-02-13T11:00:00", DeliveryDate("2012-02-13T09:00:00", "NOW"))
	Tests.EqualCheck("ASAP before 13:00", "1999-06-03T17:00:00", DeliveryDate("1999-06-03T09:45:00", "ASAP"))
	Tests.EqualCheck("ASAP at 13:00", "2008-12-22T13:00:00", DeliveryDate("2008-12-21T13:00:00", "ASAP"))
	Tests.EqualCheck("ASAP after 13:00", "2008-12-22T13:00:00", DeliveryDate("2008-12-21T14:50:00", "ASAP"))
	Tests.EqualCheck("EOW on Monday", "2025-02-07T17:00:00", DeliveryDate("2025-02-03T16:00:00", "EOW"))
	Tests.EqualCheck("EOW on Tuesday", "1997-05-02T17:00:00", DeliveryDate("1997-04-29T10:50:00", "EOW"))
	Tests.EqualCheck("EOW on Wednesday", "2005-09-16T17:00:00", DeliveryDate("2005-09-14T11:00:00", "EOW"))
	Tests.EqualCheck("EOW on Thursday", "2011-05-22T20:00:00", DeliveryDate("2011-05-19T08:30:00", "EOW"))
	Tests.EqualCheck("EOW on Friday", "2022-08-07T20:00:00", DeliveryDate("2022-08-05T14:00:00", "EOW"))
	Tests.EqualCheck("EOW leap day", "2008-02-29T17:00:00", DeliveryDate("2008-02-25T10:30:00", "EOW"))
	Tests.EqualCheck("2M before second month", "2007-02-01T08:00:00", DeliveryDate("2007-01-02T14:15:00", "2M"))
	Tests.EqualCheck("11M in eleventh month", "2014-11-03T08:00:00", DeliveryDate("2013-11-21T15:30:00", "11M"))
	Tests.EqualCheck("4M in ninth month", "2020-04-01T08:00:00", DeliveryDate("2019-11-18T15:15:00", "4M"))
	Tests.EqualCheck("Q1 in Q1", "2003-03-31T08:00:00", DeliveryDate("2003-01-01T10:45:00", "Q1"))
	Tests.EqualCheck("Q4 in Q2", "2001-12-31T08:00:00", DeliveryDate("2001-04-09T09:00:00", "Q4"))
	Tests.EqualCheck("Q3 in Q4", "2023-09-29T08:00:00", DeliveryDate("2022-10-06T11:00:00", "Q3"))
	Tests.EqualCheck("Q2 in Q2 month 6", "2019-06-28T08:00:00", DeliveryDate("2019-06-15T09:50:00", "Q2"))
}
`,ma=`let string_of_str s = s

let () =
  Tests.string_check string_of_str "NOW translates to two hours later" "2012-02-13T11:00:00" (delivery_date "2012-02-13T09:00:00" "NOW");
  Tests.string_check string_of_str "ASAP before 13:00" "1999-06-03T17:00:00" (delivery_date "1999-06-03T09:45:00" "ASAP");
  Tests.string_check string_of_str "ASAP at 13:00" "2008-12-22T13:00:00" (delivery_date "2008-12-21T13:00:00" "ASAP");
  Tests.string_check string_of_str "ASAP after 13:00" "2008-12-22T13:00:00" (delivery_date "2008-12-21T14:50:00" "ASAP");
  Tests.string_check string_of_str "EOW on Monday" "2025-02-07T17:00:00" (delivery_date "2025-02-03T16:00:00" "EOW");
  Tests.string_check string_of_str "EOW on Tuesday" "1997-05-02T17:00:00" (delivery_date "1997-04-29T10:50:00" "EOW");
  Tests.string_check string_of_str "EOW on Wednesday" "2005-09-16T17:00:00" (delivery_date "2005-09-14T11:00:00" "EOW");
  Tests.string_check string_of_str "EOW on Thursday" "2011-05-22T20:00:00" (delivery_date "2011-05-19T08:30:00" "EOW");
  Tests.string_check string_of_str "EOW on Friday" "2022-08-07T20:00:00" (delivery_date "2022-08-05T14:00:00" "EOW");
  Tests.string_check string_of_str "EOW leap day" "2008-02-29T17:00:00" (delivery_date "2008-02-25T10:30:00" "EOW");
  Tests.string_check string_of_str "2M before second month" "2007-02-01T08:00:00" (delivery_date "2007-01-02T14:15:00" "2M");
  Tests.string_check string_of_str "11M in eleventh month" "2014-11-03T08:00:00" (delivery_date "2013-11-21T15:30:00" "11M");
  Tests.string_check string_of_str "4M in ninth month" "2020-04-01T08:00:00" (delivery_date "2019-11-18T15:15:00" "4M");
  Tests.string_check string_of_str "Q1 in Q1" "2003-03-31T08:00:00" (delivery_date "2003-01-01T10:45:00" "Q1");
  Tests.string_check string_of_str "Q4 in Q2" "2001-12-31T08:00:00" (delivery_date "2001-04-09T09:00:00" "Q4");
  Tests.string_check string_of_str "Q3 in Q4" "2023-09-29T08:00:00" (delivery_date "2022-10-06T11:00:00" "Q3");
  Tests.string_check string_of_str "Q2 in Q2 month 6" "2019-06-28T08:00:00" (delivery_date "2019-06-15T09:50:00" "Q2")
`,ha=`if 'delivery_date' not in globals():
    raise Exception("delivery_date function is not defined")

Tests.equal_check("NOW translates to two hours later", "2012-02-13T11:00:00", delivery_date("2012-02-13T09:00:00", "NOW"))
Tests.equal_check("ASAP before 13:00", "1999-06-03T17:00:00", delivery_date("1999-06-03T09:45:00", "ASAP"))
Tests.equal_check("ASAP at 13:00", "2008-12-22T13:00:00", delivery_date("2008-12-21T13:00:00", "ASAP"))
Tests.equal_check("ASAP after 13:00", "2008-12-22T13:00:00", delivery_date("2008-12-21T14:50:00", "ASAP"))
Tests.equal_check("EOW on Monday", "2025-02-07T17:00:00", delivery_date("2025-02-03T16:00:00", "EOW"))
Tests.equal_check("EOW on Tuesday", "1997-05-02T17:00:00", delivery_date("1997-04-29T10:50:00", "EOW"))
Tests.equal_check("EOW on Wednesday", "2005-09-16T17:00:00", delivery_date("2005-09-14T11:00:00", "EOW"))
Tests.equal_check("EOW on Thursday", "2011-05-22T20:00:00", delivery_date("2011-05-19T08:30:00", "EOW"))
Tests.equal_check("EOW on Friday", "2022-08-07T20:00:00", delivery_date("2022-08-05T14:00:00", "EOW"))
Tests.equal_check("EOW leap day", "2008-02-29T17:00:00", delivery_date("2008-02-25T10:30:00", "EOW"))
Tests.equal_check("2M before second month", "2007-02-01T08:00:00", delivery_date("2007-01-02T14:15:00", "2M"))
Tests.equal_check("11M in eleventh month", "2014-11-03T08:00:00", delivery_date("2013-11-21T15:30:00", "11M"))
Tests.equal_check("4M in ninth month", "2020-04-01T08:00:00", delivery_date("2019-11-18T15:15:00", "4M"))
Tests.equal_check("Q1 in Q1", "2003-03-31T08:00:00", delivery_date("2003-01-01T10:45:00", "Q1"))
Tests.equal_check("Q4 in Q2", "2001-12-31T08:00:00", delivery_date("2001-04-09T09:00:00", "Q4"))
Tests.equal_check("Q3 in Q4", "2023-09-29T08:00:00", delivery_date("2022-10-06T11:00:00", "Q3"))
Tests.equal_check("Q2 in Q2 month 6", "2019-06-28T08:00:00", delivery_date("2019-06-15T09:50:00", "Q2"))
`,ga=`// @ts-nocheck
if (typeof deliveryDate !== "function") {
  throw new Error("deliveryDate function is not defined");
}

Tests.equalCheck("NOW translates to two hours later", "2012-02-13T11:00:00", deliveryDate("2012-02-13T09:00:00", "NOW"));
Tests.equalCheck("ASAP before 13:00", "1999-06-03T17:00:00", deliveryDate("1999-06-03T09:45:00", "ASAP"));
Tests.equalCheck("ASAP at 13:00", "2008-12-22T13:00:00", deliveryDate("2008-12-21T13:00:00", "ASAP"));
Tests.equalCheck("ASAP after 13:00", "2008-12-22T13:00:00", deliveryDate("2008-12-21T14:50:00", "ASAP"));
Tests.equalCheck("EOW on Monday", "2025-02-07T17:00:00", deliveryDate("2025-02-03T16:00:00", "EOW"));
Tests.equalCheck("EOW on Tuesday", "1997-05-02T17:00:00", deliveryDate("1997-04-29T10:50:00", "EOW"));
Tests.equalCheck("EOW on Wednesday", "2005-09-16T17:00:00", deliveryDate("2005-09-14T11:00:00", "EOW"));
Tests.equalCheck("EOW on Thursday", "2011-05-22T20:00:00", deliveryDate("2011-05-19T08:30:00", "EOW"));
Tests.equalCheck("EOW on Friday", "2022-08-07T20:00:00", deliveryDate("2022-08-05T14:00:00", "EOW"));
Tests.equalCheck("EOW leap day", "2008-02-29T17:00:00", deliveryDate("2008-02-25T10:30:00", "EOW"));
Tests.equalCheck("2M before second month", "2007-02-01T08:00:00", deliveryDate("2007-01-02T14:15:00", "2M"));
Tests.equalCheck("11M in eleventh month", "2014-11-03T08:00:00", deliveryDate("2013-11-21T15:30:00", "11M"));
Tests.equalCheck("4M in ninth month", "2020-04-01T08:00:00", deliveryDate("2019-11-18T15:15:00", "4M"));
Tests.equalCheck("Q1 in Q1", "2003-03-31T08:00:00", deliveryDate("2003-01-01T10:45:00", "Q1"));
Tests.equalCheck("Q4 in Q2", "2001-12-31T08:00:00", deliveryDate("2001-04-09T09:00:00", "Q4"));
Tests.equalCheck("Q3 in Q4", "2023-09-29T08:00:00", deliveryDate("2022-10-06T11:00:00", "Q3"));
Tests.equalCheck("Q2 in Q2 month 6", "2019-06-28T08:00:00", deliveryDate("2019-06-15T09:50:00", "Q2"));
`,_a=`package main

import "fmt"

func main() {
	Tests.EqualCheck("just the header if no input", fmt.Sprintf("%v", []string{"Team                           | MP |  W |  D |  L |  P"}), fmt.Sprintf("%v", Tally([]string{})))

	winLossExp := []string{
		"Team                           | MP |  W |  D |  L |  P",
		"Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
		"Blithering Badgers             |  1 |  0 |  0 |  1 |  0",
	}
	Tests.EqualCheck("a win is three points, a loss is zero points", fmt.Sprintf("%v", winLossExp), fmt.Sprintf("%v", Tally([]string{"Allegoric Alaskans;Blithering Badgers;win"})))

	drawExp := []string{
		"Team                           | MP |  W |  D |  L |  P",
		"Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
		"Blithering Badgers             |  1 |  0 |  1 |  0 |  1",
	}
	Tests.EqualCheck("a draw is one point each", fmt.Sprintf("%v", drawExp), fmt.Sprintf("%v", Tally([]string{"Allegoric Alaskans;Blithering Badgers;draw"})))
}
`,va=`let string_of_str_list l =
  "[" ^ String.concat "; " (List.map (fun s -> "\\"" ^ s ^ "\\"") l) ^ "]"

let () =
  Tests.string_check string_of_str_list "just the header if no input" ["Team                           | MP |  W |  D |  L |  P"] (tally []);
  Tests.string_check string_of_str_list "a win is three points, a loss is zero points"
    ["Team                           | MP |  W |  D |  L |  P";
     "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3";
     "Blithering Badgers             |  1 |  0 |  0 |  1 |  0"]
    (tally ["Allegoric Alaskans;Blithering Badgers;win"]);
  Tests.string_check string_of_str_list "a draw is one point each"
    ["Team                           | MP |  W |  D |  L |  P";
     "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1";
     "Blithering Badgers             |  1 |  0 |  1 |  0 |  1"]
    (tally ["Allegoric Alaskans;Blithering Badgers;draw"])
`,ya=`if 'tally' not in globals():
    raise Exception("tally function is not defined")

Tests.equal_check("just the header if no input", ["Team                           | MP |  W |  D |  L |  P"], tally([]))

win_loss_exp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
  "Blithering Badgers             |  1 |  0 |  0 |  1 |  0"
]
Tests.equal_check("a win is three points, a loss is zero points", win_loss_exp, tally(["Allegoric Alaskans;Blithering Badgers;win"]))

draw_exp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
  "Blithering Badgers             |  1 |  0 |  1 |  0 |  1"
]
Tests.equal_check("a draw is one point each", draw_exp, tally(["Allegoric Alaskans;Blithering Badgers;draw"]))
`,ba=`// @ts-nocheck
if (typeof tally !== "function") {
  throw new Error("tally function is not defined");
}

Tests.equalCheck("just the header if no input", JSON.stringify(["Team                           | MP |  W |  D |  L |  P"]), JSON.stringify(tally([])));

const winLossExp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
  "Blithering Badgers             |  1 |  0 |  0 |  1 |  0"
];
Tests.equalCheck("a win is three points, a loss is zero points", JSON.stringify(winLossExp), JSON.stringify(tally(["Allegoric Alaskans;Blithering Badgers;win"])));

const drawExp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
  "Blithering Badgers             |  1 |  0 |  1 |  0 |  1"
];
Tests.equalCheck("a draw is one point each", JSON.stringify(drawExp), JSON.stringify(tally(["Allegoric Alaskans;Blithering Badgers;draw"])));
`,xa=`package main

func main() {
	resEmpty, errEmpty := Build([]Record{})
	Tests.BoolCheck("empty list err", errEmpty == nil)
	Tests.BoolCheck("empty list res", resEmpty == nil)

	resOne, errOne := Build([]Record{{ID: 0, Parent: 0}})
	Tests.BoolCheck("one node err", errOne == nil)
	Tests.EqualCheck("one node id", 0, resOne.ID)

	tree, errTree := Build([]Record{
		{ID: 0, Parent: 0},
		{ID: 1, Parent: 0},
		{ID: 2, Parent: 0},
	})
	Tests.BoolCheck("tree err", errTree == nil)
	Tests.EqualCheck("root id", 0, tree.ID)
	Tests.EqualCheck("root children count", 2, len(tree.Children))

	_, errInvalid := Build([]Record{{ID: 0, Parent: 1}})
	Tests.BoolCheck("invalid root parent error", errInvalid != nil)
}
`,Sa=`let string_of_node_opt = function
  | Ok (Some n) -> Printf.sprintf "Ok (Node %d, %d children)" n.id (List.length n.children)
  | Ok None -> "Ok None"
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_node_opt "empty list" (Ok None) (build []);
  Tests.string_check string_of_node_opt "one node" (Ok (Some { id = 0; children = [] })) (build [{ id = 0; parent = 0 }]);
  Tests.bool_check "invalid root parent error" (match build [{ id = 0; parent = 1 }] with Error _ -> true | _ -> false)
`,Ca=`if 'Build' not in globals():
    raise Exception("Build function is not defined")

Tests.equal_check("empty list", None, Build([]))
Tests.equal_check("one node", 0, Build([Record(0, 0)]).node_id)

tree = Build([Record(0, 0), Record(1, 0), Record(2, 0)])
Tests.equal_check("root id", 0, tree.node_id)
Tests.equal_check("root children count", 2, len(tree.children))

caught = False
try:
    Build([Record(0, 1)])
except ValueError:
    caught = True
Tests.bool_check("invalid root parent error", caught)
`,wa=`// @ts-nocheck
if (typeof Build !== "function") {
  throw new Error("Build function is not defined");
}

Tests.equalCheck("empty list", null, Build([]));
Tests.equalCheck("one node", 0, Build([{ id: 0, parent: 0 }]).id);

const tree = Build([
  { id: 0, parent: 0 },
  { id: 1, parent: 0 },
  { id: 2, parent: 0 },
]);
Tests.equalCheck("root id", 0, tree.id);
Tests.equalCheck("root children count", 2, tree.children.length);

let caught = false;
try {
  Build([{ id: 0, parent: 1 }]);
} catch {
  caught = true;
}
Tests.boolCheck("invalid root parent error", caught);
`,Ta=`package main

func main() {
	r1, status1 := Measure(3, 5, 1, "one")
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one status", "ok", status1)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one moves", 4, r1.Moves)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one goalBucket", "one", r1.GoalBucket)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one otherBucket", 5, r1.OtherBucket)

	r2, status2 := Measure(3, 5, 1, "two")
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two status", "ok", status2)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two moves", 8, r2.Moves)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two goalBucket", "two", r2.GoalBucket)

	_, status3 := Measure(6, 15, 5, "one")
	Tests.EqualCheck("Not possible to reach the goal", "impossible", status3)

	_, status4 := Measure(5, 7, 8, "one")
	Tests.EqualCheck("Goal larger than both buckets is impossible", "impossible", status4)
}
`,Ea=`let string_of_result_opt = function
  | None -> "None"
  | Some r -> Printf.sprintf "{moves=%d, goal_bucket=\\"%s\\", other_bucket=%d}" r.moves r.goal_bucket r.other_bucket

let () =
  Tests.string_check string_of_result_opt "Measure bucket one size 3 bucket two size 5 start with bucket one"
    (Some { moves = 4; goal_bucket = "one"; other_bucket = 5 }) (measure 3 5 1 "one");
  Tests.string_check string_of_result_opt "Measure bucket one size 3 bucket two size 5 start with bucket two"
    (Some { moves = 8; goal_bucket = "two"; other_bucket = 3 }) (measure 3 5 1 "two");
  Tests.string_check string_of_result_opt "Measure bucket one size 7 bucket two size 11 start with bucket one"
    (Some { moves = 14; goal_bucket = "one"; other_bucket = 11 }) (measure 7 11 2 "one");
  Tests.string_check string_of_result_opt "Measure bucket one size 7 bucket two size 11 start with bucket two"
    (Some { moves = 18; goal_bucket = "two"; other_bucket = 7 }) (measure 7 11 2 "two");
  Tests.string_check string_of_result_opt "Impossible goal"
    None (measure 6 15 5 "one");
  Tests.string_check string_of_result_opt "Goal larger than both buckets"
    None (measure 5 7 8 "one")
`,Da=`if 'measure' not in globals():
    raise Exception("measure function is not defined")

Tests.equal_check("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one", {"moves": 4, "goalBucket": "one", "otherBucket": 5}, measure(3, 5, 1, "one"))
Tests.equal_check("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two", {"moves": 8, "goalBucket": "two", "otherBucket": 3}, measure(3, 5, 1, "two"))
Tests.equal_check("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket one", {"moves": 14, "goalBucket": "one", "otherBucket": 11}, measure(7, 11, 2, "one"))
Tests.equal_check("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket two", {"moves": 18, "goalBucket": "two", "otherBucket": 7}, measure(7, 11, 2, "two"))
Tests.equal_check("Measure one step using bucket one of size 1 and bucket two of size 3 - start with bucket two", {"moves": 1, "goalBucket": "two", "otherBucket": 0}, measure(1, 3, 3, "two"))
Tests.equal_check("Measure using bucket one of size 2 and bucket two of size 3", {"moves": 2, "goalBucket": "two", "otherBucket": 2}, measure(2, 3, 3, "one"))
Tests.equal_check("Bucket one much bigger than bucket two", {"moves": 6, "goalBucket": "one", "otherBucket": 1}, measure(5, 1, 2, "one"))
Tests.equal_check("Bucket one much smaller than bucket two", {"moves": 6, "goalBucket": "two", "otherBucket": 0}, measure(3, 15, 9, "one"))
Tests.equal_check("Not possible to reach the goal", {"error": "impossible"}, measure(6, 15, 5, "one"))
Tests.equal_check("Goal larger than both buckets is impossible", {"error": "impossible"}, measure(5, 7, 8, "one"))
`,Oa=`// @ts-nocheck
if (typeof measure !== "function") {
  throw new Error("measure function is not defined");
}

Tests.equalCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one", JSON.stringify({ moves: 4, goalBucket: "one", otherBucket: 5 }), JSON.stringify(measure(3, 5, 1, "one")));
Tests.equalCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two", JSON.stringify({ moves: 8, goalBucket: "two", otherBucket: 3 }), JSON.stringify(measure(3, 5, 1, "two")));
Tests.equalCheck("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket one", JSON.stringify({ moves: 14, goalBucket: "one", otherBucket: 11 }), JSON.stringify(measure(7, 11, 2, "one")));
Tests.equalCheck("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket two", JSON.stringify({ moves: 18, goalBucket: "two", otherBucket: 7 }), JSON.stringify(measure(7, 11, 2, "two")));
Tests.equalCheck("Measure one step using bucket one of size 1 and bucket two of size 3 - start with bucket two", JSON.stringify({ moves: 1, goalBucket: "two", otherBucket: 0 }), JSON.stringify(measure(1, 3, 3, "two")));
Tests.equalCheck("Measure using bucket one of size 2 and bucket two of size 3", JSON.stringify({ moves: 2, goalBucket: "two", otherBucket: 2 }), JSON.stringify(measure(2, 3, 3, "one")));
Tests.equalCheck("Bucket one much bigger than bucket two", JSON.stringify({ moves: 6, goalBucket: "one", otherBucket: 1 }), JSON.stringify(measure(5, 1, 2, "one")));
Tests.equalCheck("Bucket one much smaller than bucket two", JSON.stringify({ moves: 6, goalBucket: "two", otherBucket: 0 }), JSON.stringify(measure(3, 15, 9, "one")));
Tests.equalCheck("Not possible to reach the goal", JSON.stringify({ error: "impossible" }), JSON.stringify(measure(6, 15, 5, "one")));
Tests.equalCheck("Goal larger than both buckets is impossible", JSON.stringify({ error: "impossible" }), JSON.stringify(measure(5, 7, 8, "one")));
`,ka=`package main

import "fmt"

func main() {
	// Encoding tests
	Tests.EqualCheck("zero", fmt.Sprintf("%v", []byte{0}), fmt.Sprintf("%v", Encode([]uint32{0})))
	Tests.EqualCheck("arbitrary single byte", fmt.Sprintf("%v", []byte{64}), fmt.Sprintf("%v", Encode([]uint32{64})))
	Tests.EqualCheck("asymmetric single byte", fmt.Sprintf("%v", []byte{83}), fmt.Sprintf("%v", Encode([]uint32{83})))
	Tests.EqualCheck("largest single byte", fmt.Sprintf("%v", []byte{127}), fmt.Sprintf("%v", Encode([]uint32{127})))
	Tests.EqualCheck("smallest double byte", fmt.Sprintf("%v", []byte{129, 0}), fmt.Sprintf("%v", Encode([]uint32{128})))
	Tests.EqualCheck("arbitrary double byte", fmt.Sprintf("%v", []byte{192, 0}), fmt.Sprintf("%v", Encode([]uint32{8192})))
	Tests.EqualCheck("largest double byte", fmt.Sprintf("%v", []byte{255, 127}), fmt.Sprintf("%v", Encode([]uint32{16383})))
	Tests.EqualCheck("smallest triple byte", fmt.Sprintf("%v", []byte{129, 128, 0}), fmt.Sprintf("%v", Encode([]uint32{16384})))
	Tests.EqualCheck("maximum 32-bit integer input", fmt.Sprintf("%v", []byte{143, 255, 255, 255, 127}), fmt.Sprintf("%v", Encode([]uint32{4294967295})))
	Tests.EqualCheck("two single-byte values", fmt.Sprintf("%v", []byte{64, 127}), fmt.Sprintf("%v", Encode([]uint32{64, 127})))
	Tests.EqualCheck("many multi-byte values", fmt.Sprintf("%v", []byte{192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0}), fmt.Sprintf("%v", Encode([]uint32{8192, 1193046, 268435455, 0, 16383, 16384})))

	// Decoding tests
	dec1, err1 := Decode([]byte{127})
	Tests.BoolCheck("decode one byte err", err1 == nil)
	Tests.EqualCheck("decode one byte", fmt.Sprintf("%v", []uint32{127}), fmt.Sprintf("%v", dec1))

	dec2, err2 := Decode([]byte{192, 0})
	Tests.BoolCheck("decode two bytes err", err2 == nil)
	Tests.EqualCheck("decode two bytes", fmt.Sprintf("%v", []uint32{8192}), fmt.Sprintf("%v", dec2))

	dec3, err3 := Decode([]byte{255, 255, 127})
	Tests.BoolCheck("decode three bytes err", err3 == nil)
	Tests.EqualCheck("decode three bytes", fmt.Sprintf("%v", []uint32{2097151}), fmt.Sprintf("%v", dec3))

	dec4, err4 := Decode([]byte{143, 255, 255, 255, 127})
	Tests.BoolCheck("decode max 32-bit int err", err4 == nil)
	Tests.EqualCheck("decode max 32-bit int", fmt.Sprintf("%v", []uint32{4294967295}), fmt.Sprintf("%v", dec4))

	dec5, err5 := Decode([]byte{192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0})
	Tests.BoolCheck("decode multiple values err", err5 == nil)
	Tests.EqualCheck("decode multiple values", fmt.Sprintf("%v", []uint32{8192, 1193046, 268435455, 0, 16383, 16384}), fmt.Sprintf("%v", dec5))

	// Incomplete sequence errors
	_, err6 := Decode([]byte{255})
	Tests.BoolCheck("incomplete sequence error", err6 != nil)

	_, err7 := Decode([]byte{128})
	Tests.BoolCheck("incomplete sequence error zero", err7 != nil)
}
`,Aa=`let string_of_int_list lst =
  "[" ^ String.concat "; " (List.map string_of_int lst) ^ "]"

let () =
  (* Encoding tests *)
  Tests.string_check string_of_int_list "zero" [0] (encode [0]);
  Tests.string_check string_of_int_list "arbitrary single byte" [64] (encode [64]);
  Tests.string_check string_of_int_list "asymmetric single byte" [83] (encode [83]);
  Tests.string_check string_of_int_list "largest single byte" [127] (encode [127]);
  Tests.string_check string_of_int_list "smallest double byte" [129; 0] (encode [128]);
  Tests.string_check string_of_int_list "arbitrary double byte" [192; 0] (encode [8192]);
  Tests.string_check string_of_int_list "largest double byte" [255; 127] (encode [16383]);
  Tests.string_check string_of_int_list "smallest triple byte" [129; 128; 0] (encode [16384]);
  Tests.string_check string_of_int_list "two single-byte values" [64; 127] (encode [64; 127]);
  Tests.string_check string_of_int_list "many multi-byte values" [192; 0; 200; 232; 86; 255; 255; 255; 127; 0; 255; 127; 129; 128; 0] (encode [8192; 1193046; 268435455; 0; 16383; 16384]);

  (* Decoding tests *)
  Tests.string_check string_of_int_list "decode one byte" [127] (decode [127]);
  Tests.string_check string_of_int_list "decode two bytes" [8192] (decode [192; 0]);
  Tests.string_check string_of_int_list "decode three bytes" [2097151] (decode [255; 255; 127]);
  Tests.string_check string_of_int_list "decode multiple values" [8192; 1193046; 268435455; 0; 16383; 16384] (decode [192; 0; 200; 232; 86; 255; 255; 255; 127; 0; 255; 127; 129; 128; 0]);

  (* Incomplete sequence errors *)
  let caught1 = try ignore (decode [255]); false with _ -> true in
  Tests.bool_check "incomplete sequence error" caught1;

  let caught2 = try ignore (decode [128]); false with _ -> true in
  Tests.bool_check "incomplete sequence error zero" caught2
`,ja=`if 'encode' not in globals() or 'decode' not in globals():
    raise Exception("encode and decode functions must be defined")

# Encoding tests
Tests.equal_check("zero", [0], encode([0]))
Tests.equal_check("arbitrary single byte", [64], encode([64]))
Tests.equal_check("asymmetric single byte", [83], encode([83]))
Tests.equal_check("largest single byte", [127], encode([127]))
Tests.equal_check("smallest double byte", [129, 0], encode([128]))
Tests.equal_check("arbitrary double byte", [192, 0], encode([8192]))
Tests.equal_check("largest double byte", [255, 127], encode([16383]))
Tests.equal_check("smallest triple byte", [129, 128, 0], encode([16384]))
Tests.equal_check("maximum 32-bit integer input", [143, 255, 255, 255, 127], encode([4294967295]))
Tests.equal_check("two single-byte values", [64, 127], encode([64, 127]))
Tests.equal_check("many multi-byte values", [192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0], encode([8192, 1193046, 268435455, 0, 16383, 16384]))

# Decoding tests
Tests.equal_check("decode one byte", [127], decode([127]))
Tests.equal_check("decode two bytes", [8192], decode([192, 0]))
Tests.equal_check("decode three bytes", [2097151], decode([255, 255, 127]))
Tests.equal_check("decode maximum 32-bit integer", [4294967295], decode([143, 255, 255, 255, 127]))
Tests.equal_check("decode multiple values", [8192, 1193046, 268435455, 0, 16383, 16384], decode([192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0]))

# Incomplete sequence errors
caught1 = False
try:
    decode([255])
except Exception:
    caught1 = True
Tests.bool_check("incomplete sequence causes error", caught1)

caught2 = False
try:
    decode([128])
except Exception:
    caught2 = True
Tests.bool_check("incomplete sequence causes error even if zero", caught2)
`,Ma=`// @ts-nocheck
if (typeof encode !== "function" || typeof decode !== "function") {
  throw new Error("encode and decode functions must be defined");
}

// Encoding tests
Tests.equalCheck("zero", JSON.stringify([0]), JSON.stringify(encode([0])));
Tests.equalCheck("arbitrary single byte", JSON.stringify([64]), JSON.stringify(encode([64])));
Tests.equalCheck("asymmetric single byte", JSON.stringify([83]), JSON.stringify(encode([83])));
Tests.equalCheck("largest single byte", JSON.stringify([127]), JSON.stringify(encode([127])));
Tests.equalCheck("smallest double byte", JSON.stringify([129, 0]), JSON.stringify(encode([128])));
Tests.equalCheck("arbitrary double byte", JSON.stringify([192, 0]), JSON.stringify(encode([8192])));
Tests.equalCheck("largest double byte", JSON.stringify([255, 127]), JSON.stringify(encode([16383])));
Tests.equalCheck("smallest triple byte", JSON.stringify([129, 128, 0]), JSON.stringify(encode([16384])));
Tests.equalCheck("maximum 32-bit integer input", JSON.stringify([143, 255, 255, 255, 127]), JSON.stringify(encode([4294967295])));
Tests.equalCheck("two single-byte values", JSON.stringify([64, 127]), JSON.stringify(encode([64, 127])));
Tests.equalCheck("many multi-byte values", JSON.stringify([192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0]), JSON.stringify(encode([8192, 1193046, 268435455, 0, 16383, 16384])));

// Decoding tests
Tests.equalCheck("decode one byte", JSON.stringify([127]), JSON.stringify(decode([127])));
Tests.equalCheck("decode two bytes", JSON.stringify([8192]), JSON.stringify(decode([192, 0])));
Tests.equalCheck("decode three bytes", JSON.stringify([2097151]), JSON.stringify(decode([255, 255, 127])));
Tests.equalCheck("decode maximum 32-bit integer", JSON.stringify([4294967295]), JSON.stringify(decode([143, 255, 255, 255, 127])));
Tests.equalCheck("decode multiple values", JSON.stringify([8192, 1193046, 268435455, 0, 16383, 16384]), JSON.stringify(decode([192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0])));

// Incomplete sequence errors
let caught1 = false;
try {
  decode([255]);
} catch (e) {
  caught1 = true;
}
Tests.boolCheck("incomplete sequence causes error", caught1);

let caught2 = false;
try {
  decode([128]);
} catch (e) {
  caught2 = true;
}
Tests.boolCheck("incomplete sequence causes error even if zero", caught2);
`,Na=`package main

func main() {
	ans1, err1 := Answer("What is 5?")
	Tests.BoolCheck("just a number err", err1 == nil)
	Tests.EqualCheck("just a number", 5, ans1)

	ans2, err2 := Answer("What is 1 plus 1?")
	Tests.BoolCheck("addition err", err2 == nil)
	Tests.EqualCheck("addition", 2, ans2)

	ans3, err3 := Answer("What is 53 plus 2?")
	Tests.BoolCheck("more addition err", err3 == nil)
	Tests.EqualCheck("more addition", 55, ans3)

	ans4, err4 := Answer("What is 4 minus -12?")
	Tests.BoolCheck("subtraction err", err4 == nil)
	Tests.EqualCheck("subtraction", 16, ans4)

	ans5, err5 := Answer("What is 3 plus 2 multiplied by 3?")
	Tests.BoolCheck("addition and multiplication err", err5 == nil)
	Tests.EqualCheck("addition and multiplication", 15, ans5)

	_, err6 := Answer("What is 52 cubed?")
	Tests.BoolCheck("reject cubed", err6 != nil)

	_, err7 := Answer("Who is the President of the United States?")
	Tests.BoolCheck("reject non-math", err7 != nil)

	_, err8 := Answer("What is 1 plus plus 2?")
	Tests.BoolCheck("reject syntax error plus plus", err8 != nil)
}
`,Pa=`let string_of_res = function
  | Ok n -> Printf.sprintf "Ok %d" n
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "just a number" (Ok 5) (answer "What is 5?");
  Tests.string_check string_of_res "addition" (Ok 2) (answer "What is 1 plus 1?");
  Tests.string_check string_of_res "more addition" (Ok 55) (answer "What is 53 plus 2?");
  Tests.string_check string_of_res "subtraction" (Ok 16) (answer "What is 4 minus -12?");
  Tests.string_check string_of_res "addition and multiplication" (Ok 15) (answer "What is 3 plus 2 multiplied by 3?");
  Tests.bool_check "reject cubed" (match answer "What is 52 cubed?" with Error _ -> true | _ -> false);
  Tests.bool_check "reject non-math" (match answer "Who is the President of the United States?" with Error _ -> true | _ -> false);
  Tests.bool_check "reject syntax error plus plus" (match answer "What is 1 plus plus 2?" with Error _ -> true | _ -> false)
`,Fa=`if 'answer' not in globals():
    raise Exception("answer function is not defined")

Tests.equal_check("just a number", 5, answer("What is 5?"))
Tests.equal_check("addition", 2, answer("What is 1 plus 1?"))
Tests.equal_check("more addition", 55, answer("What is 53 plus 2?"))
Tests.equal_check("subtraction", 16, answer("What is 4 minus -12?"))
Tests.equal_check("multiplication", -12, answer("What is -3 multiplied by 4?"))
Tests.equal_check("division", -11, answer("What is -33 divided by 3?"))
Tests.equal_check("multiple additions", 3, answer("What is 1 plus 1 plus 1?"))
Tests.equal_check("addition and multiplication", 15, answer("What is 3 plus 2 multiplied by 3?"))

caught1 = False
try:
    answer("What is 52 cubed?")
except ValueError:
    caught1 = True
Tests.bool_check("reject cubed", caught1)

caught2 = False
try:
    answer("Who is the President of the United States?")
except ValueError:
    caught2 = True
Tests.bool_check("reject non-math", caught2)

caught3 = False
try:
    answer("What is 1 plus plus 2?")
except ValueError:
    caught3 = True
Tests.bool_check("reject syntax error plus plus", caught3)
`,Ia=`// @ts-nocheck
if (typeof answer !== "function") {
  throw new Error("answer function is not defined");
}

Tests.equalCheck("just a number", 5, answer("What is 5?"));
Tests.equalCheck("addition", 2, answer("What is 1 plus 1?"));
Tests.equalCheck("more addition", 55, answer("What is 53 plus 2?"));
Tests.equalCheck("subtraction", 16, answer("What is 4 minus -12?"));
Tests.equalCheck("multiplication", -12, answer("What is -3 multiplied by 4?"));
Tests.equalCheck("division", -11, answer("What is -33 divided by 3?"));
Tests.equalCheck("multiple additions", 3, answer("What is 1 plus 1 plus 1?"));
Tests.equalCheck("addition and multiplication", 15, answer("What is 3 plus 2 multiplied by 3?"));
Tests.boolCheck("reject cubed", typeof answer("What is 52 cubed?") === "object");
Tests.boolCheck("reject non-math", typeof answer("Who is the President of the United States?") === "object");
Tests.boolCheck("reject syntax error plus plus", typeof answer("What is 1 plus plus 2?") === "object");
`,La=`package main

func main() {
	Tests.EqualCheck("Yacht", 50, Score([]int{5, 5, 5, 5, 5}, "yacht"))
	Tests.EqualCheck("Not Yacht", 0, Score([]int{1, 3, 3, 2, 5}, "yacht"))
	Tests.EqualCheck("Ones", 3, Score([]int{1, 1, 1, 3, 5}, "ones"))
	Tests.EqualCheck("Ones out of order", 3, Score([]int{3, 1, 1, 5, 1}, "ones"))
	Tests.EqualCheck("No ones", 0, Score([]int{4, 3, 6, 5, 5}, "ones"))
	Tests.EqualCheck("Twos", 10, Score([]int{2, 3, 4, 5, 6}, "twos"))
	Tests.EqualCheck("Four of a Kind", 12, Score([]int{3, 3, 3, 3, 5}, "four of a kind"))
	Tests.EqualCheck("Four of a Kind from Yacht", 12, Score([]int{3, 3, 3, 3, 3}, "four of a kind"))
	Tests.EqualCheck("Full House", 19, Score([]int{3, 3, 3, 5, 5}, "full house"))
	Tests.EqualCheck("Full House not matching", 0, Score([]int{3, 3, 3, 3, 5}, "full house"))
	Tests.EqualCheck("Little Straight", 30, Score([]int{3, 5, 4, 1, 2}, "little straight"))
	Tests.EqualCheck("Big Straight", 30, Score([]int{4, 6, 2, 5, 3}, "big straight"))
	Tests.EqualCheck("Choice", 23, Score([]int{3, 3, 5, 6, 6}, "choice"))
}
`,Ra=`let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "Yacht" 50 (score [5; 5; 5; 5; 5] "yacht");
  Tests.string_check string_of_int_val "Not Yacht" 0 (score [1; 3; 3; 2; 5] "yacht");
  Tests.string_check string_of_int_val "Ones" 3 (score [1; 1; 1; 3; 5] "ones");
  Tests.string_check string_of_int_val "Ones out of order" 3 (score [3; 1; 1; 5; 1] "ones");
  Tests.string_check string_of_int_val "No ones" 0 (score [4; 3; 6; 5; 5] "ones");
  Tests.string_check string_of_int_val "Twos" 10 (score [2; 3; 4; 5; 6] "twos");
  Tests.string_check string_of_int_val "Four of a Kind" 12 (score [3; 3; 3; 3; 5] "four of a kind");
  Tests.string_check string_of_int_val "Four of a Kind from Yacht" 12 (score [3; 3; 3; 3; 3] "four of a kind");
  Tests.string_check string_of_int_val "Full House" 19 (score [3; 3; 3; 5; 5] "full house");
  Tests.string_check string_of_int_val "Full House not matching" 0 (score [3; 3; 3; 3; 5] "full house");
  Tests.string_check string_of_int_val "Little Straight" 30 (score [3; 5; 4; 1; 2] "little straight");
  Tests.string_check string_of_int_val "Big Straight" 30 (score [4; 6; 2; 5; 3] "big straight");
  Tests.string_check string_of_int_val "Choice" 23 (score [3; 3; 5; 6; 6] "choice")
`,za=`if 'score' not in globals():
    raise Exception("score function is not defined")

Tests.equal_check("Yacht", 50, score([5, 5, 5, 5, 5], "yacht"))
Tests.equal_check("Not Yacht", 0, score([1, 3, 3, 2, 5], "yacht"))
Tests.equal_check("Ones", 3, score([1, 1, 1, 3, 5], "ones"))
Tests.equal_check("Ones out of order", 3, score([3, 1, 1, 5, 1], "ones"))
Tests.equal_check("No ones", 0, score([4, 3, 6, 5, 5], "ones"))
Tests.equal_check("Twos", 10, score([2, 3, 4, 5, 6], "twos"))
Tests.equal_check("Four of a Kind", 12, score([3, 3, 3, 3, 5], "four of a kind"))
Tests.equal_check("Four of a Kind from Yacht", 12, score([3, 3, 3, 3, 3], "four of a kind"))
Tests.equal_check("Full House", 19, score([3, 3, 3, 5, 5], "full house"))
Tests.equal_check("Full House not matching", 0, score([3, 3, 3, 3, 5], "full house"))
Tests.equal_check("Little Straight", 30, score([3, 5, 4, 1, 2], "little straight"))
Tests.equal_check("Big Straight", 30, score([4, 6, 2, 5, 3], "big straight"))
Tests.equal_check("Choice", 23, score([3, 3, 5, 6, 6], "choice"))
`,Ba=`// @ts-nocheck
if (typeof score !== "function") {
  throw new Error("score function is not defined");
}

Tests.equalCheck("Yacht", 50, score([5, 5, 5, 5, 5], "yacht"));
Tests.equalCheck("Not Yacht", 0, score([1, 3, 3, 2, 5], "yacht"));
Tests.equalCheck("Ones", 3, score([1, 1, 1, 3, 5], "ones"));
Tests.equalCheck("Ones out of order", 3, score([3, 1, 1, 5, 1], "ones"));
Tests.equalCheck("No ones", 0, score([4, 3, 6, 5, 5], "ones"));
Tests.equalCheck("Twos", 10, score([2, 3, 4, 5, 6], "twos"));
Tests.equalCheck("Four of a Kind", 12, score([3, 3, 3, 3, 5], "four of a kind"));
Tests.equalCheck("Four of a Kind from Yacht", 12, score([3, 3, 3, 3, 3], "four of a kind"));
Tests.equalCheck("Full House", 19, score([3, 3, 3, 5, 5], "full house"));
Tests.equalCheck("Full House not matching", 0, score([3, 3, 3, 3, 5], "full house"));
Tests.equalCheck("Little Straight", 30, score([3, 5, 4, 1, 2], "little straight"));
Tests.equalCheck("Big Straight", 30, score([4, 6, 2, 5, 3], "big straight"));
Tests.equalCheck("Choice", 23, score([3, 3, 5, 6, 6], "choice"));
`,Va=t({default:()=>Ha,validate:()=>Ha});function Ha(e,t){let n=t.toLowerCase();return n.includes(`hello`)&&n.includes(`world`)?!0:`Expected output to contain: hello and world`}var Ua=t({default:()=>Wa,validate:()=>Wa});function Wa(e,t){let n=t.toLowerCase();return n.includes(`hello`)&&n.includes(`world`)?!0:`Expected output to contain: hello and world`}var Ga=t({default:()=>Ka,validate:()=>Ka});function Ka(e,t){let n=t.toLowerCase();return n.includes(`hello`)&&n.includes(`world`)?!0:`Expected output to contain: hello and world`}var qa=t({default:()=>Ja,validate:()=>Ja});function Ja(e,t){let n=t.toLowerCase();return n.includes(`hello`)&&n.includes(`world`)?!0:`Expected output to contain: hello and world`}var Ya={chapters:{Intro:[`hello_world`],"Array Operations":[`strain`,`kindergarten_garden`,`saddle_points`,`poker`],"Bitwise Operations":[`allergies`,`variable_length_quantity`],"Control Flow":[`queen_attack`,`yacht`,`swift_scheduling`],"Graph Traversal":[`relative_distance`,`two_bucket`],"Grid Traversal":[`game_of_life`,`state_of_tic_tac_toe`,`rectangles`],"Hash Maps":[`scrabble_score`,`grade_school`,`tournament`],"Loops & Iteration":[`collatz_conjecture`,`perfect_numbers`],"Pointer Structures":[`simple_linked_list`],"Recursion & Backtracking":[`killer_sudoku_helper`,`book_store`],"Stack & Parsing":[`matching_brackets`,`wordy`],"State Accumulation":[`clock`,`robot_simulator`,`bowling`],"String Processing":[`acronym`,`crypto_square`,`run_length_encoding`,`say`,`ocr_numbers`],"Tree Traversal":[`tree_building`,`dot_dsl`,`pov`]}},Xa=Object.assign({"./acronym/problem.md":s,"./allergies/problem.md":c,"./book_store/problem.md":l,"./bowling/problem.md":u,"./clock/problem.md":d,"./collatz_conjecture/problem.md":f,"./crypto_square/problem.md":p,"./dot_dsl/problem.md":m,"./fizz_buzz/problem.md":h,"./game_of_life/problem.md":g,"./grade_school/problem.md":_,"./hello_world/problem.md":v,"./killer_sudoku_helper/problem.md":y,"./kindergarten_garden/problem.md":ee,"./matching_brackets/problem.md":b,"./ocr_numbers/problem.md":te,"./perfect_numbers/problem.md":x,"./poker/problem.md":S,"./pov/problem.md":C,"./queen_attack/problem.md":ne,"./rectangles/problem.md":re,"./relative_distance/problem.md":ie,"./robot_simulator/problem.md":ae,"./run_length_encoding/problem.md":oe,"./saddle_points/problem.md":se,"./say/problem.md":ce,"./scrabble_score/problem.md":le,"./simple_linked_list/problem.md":ue,"./state_of_tic_tac_toe/problem.md":de,"./strain/problem.md":w,"./swift_scheduling/problem.md":T,"./tournament/problem.md":E,"./tree_building/problem.md":D,"./two_bucket/problem.md":fe,"./variable_length_quantity/problem.md":O,"./wordy/problem.md":pe,"./yacht/problem.md":me}),Za=Object.assign({"./acronym/go/template.go":he,"./acronym/ocaml/template.ml":ge,"./acronym/python/template.py":_e,"./acronym/typescript/template.ts":ve,"./allergies/go/template.go":ye,"./allergies/ocaml/template.ml":be,"./allergies/python/template.py":xe,"./allergies/typescript/template.ts":Se,"./book_store/go/template.go":Ce,"./book_store/ocaml/template.ml":we,"./book_store/python/template.py":Te,"./book_store/typescript/template.ts":Ee,"./bowling/go/template.go":De,"./bowling/ocaml/template.ml":Oe,"./bowling/python/template.py":ke,"./bowling/typescript/template.ts":Ae,"./clock/go/template.go":je,"./clock/ocaml/template.ml":Me,"./clock/python/template.py":Ne,"./clock/typescript/template.ts":Pe,"./collatz_conjecture/go/template.go":Fe,"./collatz_conjecture/ocaml/template.ml":Ie,"./collatz_conjecture/python/template.py":Le,"./collatz_conjecture/typescript/template.ts":k,"./crypto_square/go/template.go":Re,"./crypto_square/ocaml/template.ml":ze,"./crypto_square/python/template.py":Be,"./crypto_square/typescript/template.ts":Ve,"./dot_dsl/go/template.go":He,"./dot_dsl/ocaml/template.ml":Ue,"./dot_dsl/python/template.py":We,"./dot_dsl/typescript/template.ts":Ge,"./fizz_buzz/go/template.go":Ke,"./fizz_buzz/ocaml/template.ml":qe,"./fizz_buzz/python/template.py":Je,"./fizz_buzz/typescript/template.ts":Ye,"./game_of_life/go/template.go":Xe,"./game_of_life/ocaml/template.ml":Ze,"./game_of_life/python/template.py":Qe,"./game_of_life/typescript/template.ts":$e,"./grade_school/go/template.go":et,"./grade_school/ocaml/template.ml":tt,"./grade_school/python/template.py":nt,"./grade_school/typescript/template.ts":rt,"./hello_world/go/template.go":it,"./hello_world/ocaml/template.ml":at,"./hello_world/python/template.py":ot,"./hello_world/typescript/template.ts":st,"./killer_sudoku_helper/go/template.go":ct,"./killer_sudoku_helper/ocaml/template.ml":lt,"./killer_sudoku_helper/python/template.py":ut,"./killer_sudoku_helper/typescript/template.ts":dt,"./kindergarten_garden/go/template.go":ft,"./kindergarten_garden/ocaml/template.ml":pt,"./kindergarten_garden/python/template.py":mt,"./kindergarten_garden/typescript/template.ts":ht,"./matching_brackets/go/template.go":gt,"./matching_brackets/ocaml/template.ml":_t,"./matching_brackets/python/template.py":vt,"./matching_brackets/typescript/template.ts":yt,"./ocr_numbers/go/template.go":bt,"./ocr_numbers/ocaml/template.ml":xt,"./ocr_numbers/python/template.py":St,"./ocr_numbers/typescript/template.ts":Ct,"./perfect_numbers/go/template.go":wt,"./perfect_numbers/ocaml/template.ml":Tt,"./perfect_numbers/python/template.py":Et,"./perfect_numbers/typescript/template.ts":Dt,"./poker/go/template.go":Ot,"./poker/ocaml/template.ml":kt,"./poker/python/template.py":At,"./poker/typescript/template.ts":jt,"./pov/go/template.go":Mt,"./pov/ocaml/template.ml":Nt,"./pov/python/template.py":Pt,"./pov/typescript/template.ts":Ft,"./queen_attack/go/template.go":It,"./queen_attack/ocaml/template.ml":Lt,"./queen_attack/python/template.py":Rt,"./queen_attack/typescript/template.ts":zt,"./rectangles/go/template.go":Bt,"./rectangles/ocaml/template.ml":Vt,"./rectangles/python/template.py":Ht,"./rectangles/typescript/template.ts":Ut,"./relative_distance/go/template.go":Wt,"./relative_distance/ocaml/template.ml":Gt,"./relative_distance/python/template.py":Kt,"./relative_distance/typescript/template.ts":qt,"./robot_simulator/go/template.go":Jt,"./robot_simulator/ocaml/template.ml":Yt,"./robot_simulator/python/template.py":Xt,"./robot_simulator/typescript/template.ts":Zt,"./run_length_encoding/go/template.go":Qt,"./run_length_encoding/ocaml/template.ml":$t,"./run_length_encoding/python/template.py":en,"./run_length_encoding/typescript/template.ts":tn,"./saddle_points/go/template.go":nn,"./saddle_points/ocaml/template.ml":rn,"./saddle_points/python/template.py":an,"./saddle_points/typescript/template.ts":on,"./say/go/template.go":sn,"./say/ocaml/template.ml":cn,"./say/python/template.py":ln,"./say/typescript/template.ts":un,"./scrabble_score/go/template.go":dn,"./scrabble_score/ocaml/template.ml":fn,"./scrabble_score/python/template.py":pn,"./scrabble_score/typescript/template.ts":mn,"./simple_linked_list/go/template.go":hn,"./simple_linked_list/ocaml/template.ml":gn,"./simple_linked_list/python/template.py":_n,"./simple_linked_list/typescript/template.ts":vn,"./state_of_tic_tac_toe/go/template.go":yn,"./state_of_tic_tac_toe/ocaml/template.ml":bn,"./state_of_tic_tac_toe/python/template.py":xn,"./state_of_tic_tac_toe/typescript/template.ts":Sn,"./strain/go/template.go":Cn,"./strain/ocaml/template.ml":wn,"./strain/python/template.py":Tn,"./strain/typescript/template.ts":En,"./swift_scheduling/go/template.go":Dn,"./swift_scheduling/ocaml/template.ml":On,"./swift_scheduling/python/template.py":kn,"./swift_scheduling/typescript/template.ts":An,"./tournament/go/template.go":jn,"./tournament/ocaml/template.ml":Mn,"./tournament/python/template.py":Nn,"./tournament/typescript/template.ts":Pn,"./tree_building/go/template.go":Fn,"./tree_building/ocaml/template.ml":In,"./tree_building/python/template.py":Ln,"./tree_building/typescript/template.ts":Rn,"./two_bucket/go/template.go":zn,"./two_bucket/ocaml/template.ml":Bn,"./two_bucket/python/template.py":Vn,"./two_bucket/typescript/template.ts":Hn,"./variable_length_quantity/go/template.go":Un,"./variable_length_quantity/ocaml/template.ml":Wn,"./variable_length_quantity/python/template.py":Gn,"./variable_length_quantity/typescript/template.ts":Kn,"./wordy/go/template.go":qn,"./wordy/ocaml/template.ml":Jn,"./wordy/python/template.py":Yn,"./wordy/typescript/template.ts":Xn,"./yacht/go/template.go":Zn,"./yacht/ocaml/template.ml":Qn,"./yacht/python/template.py":$n,"./yacht/typescript/template.ts":er}),Qa=Object.assign({"./acronym/go/test.go":tr,"./acronym/ocaml/test.ml":nr,"./acronym/python/test.py":rr,"./acronym/typescript/test.ts":ir,"./allergies/go/test.go":ar,"./allergies/ocaml/test.ml":or,"./allergies/python/test.py":sr,"./allergies/typescript/test.ts":cr,"./book_store/go/test.go":lr,"./book_store/ocaml/test.ml":ur,"./book_store/python/test.py":dr,"./book_store/typescript/test.ts":fr,"./bowling/go/test.go":pr,"./bowling/ocaml/test.ml":mr,"./bowling/python/test.py":hr,"./bowling/typescript/test.ts":gr,"./clock/go/test.go":_r,"./clock/ocaml/test.ml":vr,"./clock/python/test.py":yr,"./clock/typescript/test.ts":br,"./collatz_conjecture/go/test.go":xr,"./collatz_conjecture/ocaml/test.ml":Sr,"./collatz_conjecture/python/test.py":Cr,"./collatz_conjecture/typescript/test.ts":wr,"./crypto_square/go/test.go":Tr,"./crypto_square/ocaml/test.ml":Er,"./crypto_square/python/test.py":Dr,"./crypto_square/typescript/test.ts":Or,"./dot_dsl/go/test.go":kr,"./dot_dsl/ocaml/test.ml":Ar,"./dot_dsl/python/test.py":jr,"./dot_dsl/typescript/test.ts":Mr,"./fizz_buzz/go/test.go":Nr,"./fizz_buzz/ocaml/test.ml":Pr,"./fizz_buzz/python/test.py":Fr,"./fizz_buzz/typescript/test.ts":Ir,"./game_of_life/go/test.go":Lr,"./game_of_life/ocaml/test.ml":Rr,"./game_of_life/python/test.py":zr,"./game_of_life/typescript/test.ts":Br,"./grade_school/go/test.go":Vr,"./grade_school/ocaml/test.ml":Hr,"./grade_school/python/test.py":Ur,"./grade_school/typescript/test.ts":Wr,"./hello_world/go/test.go":Gr,"./hello_world/ocaml/test.ml":Kr,"./hello_world/python/test.py":qr,"./hello_world/typescript/test.ts":Jr,"./killer_sudoku_helper/go/test.go":Yr,"./killer_sudoku_helper/ocaml/test.ml":Xr,"./killer_sudoku_helper/python/test.py":Zr,"./killer_sudoku_helper/typescript/test.ts":Qr,"./kindergarten_garden/go/test.go":$r,"./kindergarten_garden/ocaml/test.ml":ei,"./kindergarten_garden/python/test.py":ti,"./kindergarten_garden/typescript/test.ts":ni,"./matching_brackets/go/test.go":ri,"./matching_brackets/ocaml/test.ml":ii,"./matching_brackets/python/test.py":ai,"./matching_brackets/typescript/test.ts":oi,"./ocr_numbers/go/test.go":si,"./ocr_numbers/ocaml/test.ml":ci,"./ocr_numbers/python/test.py":li,"./ocr_numbers/typescript/test.ts":ui,"./perfect_numbers/go/test.go":di,"./perfect_numbers/ocaml/test.ml":fi,"./perfect_numbers/python/test.py":pi,"./perfect_numbers/typescript/test.ts":mi,"./poker/go/test.go":hi,"./poker/ocaml/test.ml":gi,"./poker/python/test.py":_i,"./poker/typescript/test.ts":vi,"./pov/go/test.go":yi,"./pov/ocaml/test.ml":bi,"./pov/python/test.py":xi,"./pov/typescript/test.ts":Si,"./queen_attack/go/test.go":Ci,"./queen_attack/ocaml/test.ml":wi,"./queen_attack/python/test.py":Ti,"./queen_attack/typescript/test.ts":Ei,"./rectangles/go/test.go":Di,"./rectangles/ocaml/test.ml":Oi,"./rectangles/python/test.py":ki,"./rectangles/typescript/test.ts":Ai,"./relative_distance/go/test.go":ji,"./relative_distance/ocaml/test.ml":Mi,"./relative_distance/python/test.py":Ni,"./relative_distance/typescript/test.ts":Pi,"./robot_simulator/go/test.go":Fi,"./robot_simulator/ocaml/test.ml":Ii,"./robot_simulator/python/test.py":Li,"./robot_simulator/typescript/test.ts":Ri,"./run_length_encoding/go/test.go":zi,"./run_length_encoding/ocaml/test.ml":Bi,"./run_length_encoding/python/test.py":Vi,"./run_length_encoding/typescript/test.ts":Hi,"./saddle_points/go/test.go":Ui,"./saddle_points/ocaml/test.ml":Wi,"./saddle_points/python/test.py":Gi,"./saddle_points/typescript/test.ts":Ki,"./say/go/test.go":qi,"./say/ocaml/test.ml":Ji,"./say/python/test.py":Yi,"./say/typescript/test.ts":Xi,"./scrabble_score/go/test.go":Zi,"./scrabble_score/ocaml/test.ml":Qi,"./scrabble_score/python/test.py":$i,"./scrabble_score/typescript/test.ts":ea,"./simple_linked_list/go/test.go":ta,"./simple_linked_list/ocaml/test.ml":na,"./simple_linked_list/python/test.py":ra,"./simple_linked_list/typescript/test.ts":ia,"./state_of_tic_tac_toe/go/test.go":aa,"./state_of_tic_tac_toe/ocaml/test.ml":oa,"./state_of_tic_tac_toe/python/test.py":sa,"./state_of_tic_tac_toe/typescript/test.ts":ca,"./strain/go/test.go":la,"./strain/ocaml/test.ml":ua,"./strain/python/test.py":da,"./strain/typescript/test.ts":fa,"./swift_scheduling/go/test.go":pa,"./swift_scheduling/ocaml/test.ml":ma,"./swift_scheduling/python/test.py":ha,"./swift_scheduling/typescript/test.ts":ga,"./tournament/go/test.go":_a,"./tournament/ocaml/test.ml":va,"./tournament/python/test.py":ya,"./tournament/typescript/test.ts":ba,"./tree_building/go/test.go":xa,"./tree_building/ocaml/test.ml":Sa,"./tree_building/python/test.py":Ca,"./tree_building/typescript/test.ts":wa,"./two_bucket/go/test.go":Ta,"./two_bucket/ocaml/test.ml":Ea,"./two_bucket/python/test.py":Da,"./two_bucket/typescript/test.ts":Oa,"./variable_length_quantity/go/test.go":ka,"./variable_length_quantity/ocaml/test.ml":Aa,"./variable_length_quantity/python/test.py":ja,"./variable_length_quantity/typescript/test.ts":Ma,"./wordy/go/test.go":Na,"./wordy/ocaml/test.ml":Pa,"./wordy/python/test.py":Fa,"./wordy/typescript/test.ts":Ia,"./yacht/go/test.go":La,"./yacht/ocaml/test.ml":Ra,"./yacht/python/test.py":za,"./yacht/typescript/test.ts":Ba}),$a=Object.assign({"./hello_world/go/validator.ts":Va,"./hello_world/ocaml/validator.ts":Ua,"./hello_world/python/validator.ts":Ga,"./hello_world/typescript/validator.ts":qa});function eo(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`_`).replace(/^_+|_+$/g,``)}function to(e){return e.split(`_`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}var no=Ya?.chapters&&typeof Ya.chapters==`object`&&!Array.isArray(Ya.chapters)?Object.entries(Ya.chapters).map(([e,t])=>({title:e,exercises:Array.isArray(t)?t:[]})):Array.isArray(Ya)?Ya:Ya?.chapter||Ya?.chapters||[],ro=no.map((e,t)=>{let n=e.id||eo(e.title),r=t+1,i=(e.exercises||[]).map((e,t)=>{let n=t+1,i=`${r}.${n}`,a=Xa[`./${e}/problem.md`]||``;return{id:i,title:to(e),description:a,variants:{}}});return{id:n,title:e.title,exercises:i}});function io(e){let t={};for(let e in Za){let n=e.match(/^\.\/([^/]+)\/([^/]+)\/template\..+$/);if(!n)continue;let[,r,i]=n,a=Za[e]||``,o=Object.keys(Qa).find(e=>e.startsWith(`./${r}/${i}/test.`)),s=o&&Qa[o]||``,c=Object.keys($a).find(e=>e===`./${r}/${i}/validator.ts`),l=c?$a[c]:void 0,u=l?.validate||l?.default;t[r]||(t[r]={}),t[r][i]={initialCode:a,testCode:s,...u?{validate:u}:{}}}no.forEach((n,r)=>{let i=e[r];i&&(n.exercises||[]).forEach((e,n)=>{let r=i.exercises[n];if(r&&(r.variants||={},t[e]))for(let n in t[e])r.variants[n]={...t[e][n]}})})}var ao=ro.flatMap(e=>e.exercises);io(ro);var oo=t({default:()=>so,metadata:()=>so}),so={id:`go`,name:`Go`,extension:`.go`,cmLanguage:`go`},co=t({default:()=>lo,metadata:()=>lo}),lo={id:`ocaml`,name:`OCaml`,extension:`.ml`,cmLanguage:`ocaml`},uo=t({default:()=>fo,metadata:()=>fo}),fo={id:`python`,name:`Python`,extension:`.py`,cmLanguage:`python`},po=t({default:()=>mo,metadata:()=>mo}),mo={id:`typescript`,name:`TypeScript`,extension:`.ts`,cmLanguage:`typescript`},ho=1024,go=0,_o=class{constructor(e,t){this.from=e,this.to=t}},A=class{constructor(e={}){this.id=go++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=bo.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}};A.closedBy=new A({deserialize:e=>e.split(` `)}),A.openedBy=new A({deserialize:e=>e.split(` `)}),A.group=new A({deserialize:e=>e.split(` `)}),A.isolate=new A({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),A.contextHash=new A({perNode:!0}),A.lookAhead=new A({perNode:!0}),A.mounted=new A({perNode:!0});var vo=class{constructor(e,t,n,r=!1){this.tree=e,this.overlay=t,this.parser=n,this.bracketed=r}static get(e){return e&&e.props&&e.props[A.mounted.id]}},yo=Object.create(null),bo=class e{constructor(e,t,n,r=0){this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){let n=t.props&&t.props.length?Object.create(null):yo,r=!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(let e of t.props)if(Array.isArray(e)||(e=e(i)),e){if(e[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[e[0].id]=e[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;let t=this.prop(A.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let r of n.split(` `))t[r]=e[n];return e=>{for(let n=e.prop(A.group),r=-1;r<(n?n.length:0);r++){let i=t[r<0?e.name:n[r]];if(i)return i}}}};bo.none=new bo(``,Object.create(null),0,8);var xo=class e{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError(`Node type ids should correspond to array positions when creating a node set`)}extend(...t){let n=[];for(let e of this.types){let r=null;for(let n of t){let t=n(e);if(t){r||=Object.assign({},e.props);let n=t[1],i=t[0];i.combine&&i.id in r&&(n=i.combine(r[i.id],n)),r[i.id]=n}}n.push(r?new bo(e.name,r,e.id,e.flags):e)}return new e(n)}},So=new WeakMap,Co=new WeakMap,j;(function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`})(j||={});var M=class e{constructor(e,t,n,r,i){if(this.type=e,this.children=t,this.positions=n,this.length=r,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e==`number`?e:e.id]=t}}toString(){let e=vo.get(this);if(e&&!e.overlay)return e.tree.toString();let t=``;for(let e of this.children){let n=e.toString();n&&(t&&(t+=`,`),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?`(`+t+`)`:``):t}cursor(e=0){return new Lo(this.topNode,e)}cursorAt(e,t=0,n=0){let r=new Lo(So.get(this)||this.topNode);return r.moveTo(e,t),So.set(this,r._tree),r}get topNode(){return new ko(this,0,0,null)}resolve(e,t=0){let n=Do(So.get(this)||this.topNode,e,t,!1);return So.set(this,n),n}resolveInner(e,t=0){let n=Do(Co.get(this)||this.topNode,e,t,!0);return Co.set(this,n),n}resolveStack(e,t=0){return Io(this,e,t)}iterate(e){let{enter:t,leave:n,from:r=0,to:i=this.length}=e,a=e.mode||0,o=(a&j.IncludeAnonymous)>0;for(let e=this.cursor(a|j.IncludeAnonymous);;){let a=!1;if(e.from<=i&&e.to>=r&&(!o&&e.type.isAnonymous||t(e)!==!1)){if(e.firstChild())continue;a=!0}for(;a&&n&&(o||!e.type.isAnonymous)&&n(e),!e.nextSibling();){if(!e.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(t={}){return this.children.length<=8?this:Ho(bo.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,r)=>new e(this.type,t,n,r,this.propValues),t.makeTree||((t,n,r)=>new e(bo.none,t,n,r)))}static build(e){return zo(e)}};M.empty=new M(bo.none,[],[],0);var wo=class e{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new e(this.buffer,this.index)}},To=class e{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return bo.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(`,`)}childString(e){let t=this.buffer[e],n=this.buffer[e+3],r=this.set.types[t],i=r.name;if(/\W/.test(i)&&!r.isError&&(i=JSON.stringify(i)),e+=4,n==e)return i;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return i+`(`+a.join(`,`)+`)`}findChild(e,t,n,r,i){let{buffer:a}=this,o=-1;for(let s=e;s!=t&&!(Eo(i,r,a[s+1],a[s+2])&&(o=s,n>0));s=a[s+3]);return o}slice(t,n,r){let i=this.buffer,a=new Uint16Array(n-t),o=0;for(let e=t,s=0;e<n;){a[s++]=i[e++],a[s++]=i[e++]-r;let n=a[s++]=i[e++]-r;a[s++]=i[e++]-t,o=Math.max(o,n)}return new e(a,o,this.set)}};function Eo(e,t,n,r){switch(e){case-2:return n<t;case-1:return r>=t&&n<t;case 0:return n<t&&r>t;case 1:return n<=t&&r>t;case 2:return r>t;case 4:return!0}}function Do(e,t,n,r){for(;e.from==e.to||(n<1?e.from>=t:e.from>t)||(n>-1?e.to<=t:e.to<t);){let t=!r&&e instanceof ko&&e.index<0?null:e.parent;if(!t)return e;e=t}let i=r?0:j.IgnoreOverlays;if(r)for(let r=e,a=r.parent;a;r=a,a=r.parent)r instanceof ko&&r.index<0&&a.enter(t,n,i)?.from!=r.from&&(e=a);for(;;){let r=e.enter(t,n,i);if(!r)return e;e=r}}var Oo=class{cursor(e=0){return new Lo(this,e)}getChild(e,t=null,n=null){let r=Ao(this,e,t,n);return r.length?r[0]:null}getChildren(e,t=null,n=null){return Ao(this,e,t,n)}resolve(e,t=0){return Do(this,e,t,!1)}resolveInner(e,t=0){return Do(this,e,t,!0)}matchContext(e){return jo(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(n=t,t=e.prevSibling):t=e}return n}get node(){return this}get next(){return this.parent}},ko=class e extends Oo{constructor(e,t,n,r){super(),this._tree=e,this.from=t,this.index=n,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,n,r,i,a=0){for(let o=this;;){for(let{children:s,positions:c}=o._tree,l=n>0?s.length:-1;t!=l;t+=n){let l=s[t],u=c[t]+o.from,d;if(!(!(a&j.EnterBracketed&&l instanceof M&&(d=vo.get(l))&&!d.overlay&&d.bracketed&&r>=u&&r<=u+l.length)&&!Eo(i,r,u,u+l.length))){if(l instanceof To){if(a&j.ExcludeBuffers)continue;let e=l.findChild(0,l.buffer.length,n,r-u,i);if(e>-1)return new No(new Mo(o,l,t,u),null,e)}else if(a&j.IncludeAnonymous||!l.type.isAnonymous||Ro(l)){let s;if(!(a&j.IgnoreMounts)&&(s=vo.get(l))&&!s.overlay)return new e(s.tree,u,t,o);let c=new e(l,u,t,o);return a&j.IncludeAnonymous||!c.type.isAnonymous?c:c.nextChild(n<0?l.children.length-1:0,n,r,i,a)}}}if(a&j.IncludeAnonymous||!o.type.isAnonymous||(t=o.index>=0?o.index+n:n<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(t,n,r=0){let i;if(!(r&j.IgnoreOverlays)&&(i=vo.get(this._tree))&&i.overlay){let a=t-this.from,o=r&j.EnterBracketed&&i.bracketed;for(let{from:t,to:r}of i.overlay)if((n>0||o?t<=a:t<a)&&(n<0||o?r>=a:r>a))return new e(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,n,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}};function Ao(e,t,n,r){let i=e.cursor(),a=[];if(!i.firstChild())return a;if(n!=null){for(let e=!1;!e;)if(e=i.type.is(n),!i.nextSibling())return a}for(;;){if(r!=null&&i.type.is(r))return a;if(i.type.is(t)&&a.push(i.node),!i.nextSibling())return r==null?a:[]}}function jo(e,t,n=t.length-1){for(let r=e;n>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(t[n]&&t[n]!=r.name)return!1;n--}}return!0}var Mo=class{constructor(e,t,n,r){this.parent=e,this.buffer=t,this.index=n,this.start=r}},No=class e extends Oo{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(t,n,r){let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],t,n-this.context.start,r);return a<0?null:new e(this.context,this,a)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(t,n,r=0){if(r&j.ExcludeBuffers)return null;let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],n>0?1:-1,t-this.context.start,n);return a<0?null:new e(this.context,this,a)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:t}=this.context,n=t.buffer[this.index+3];return n<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new e(this.context,this._parent,n):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,n=this._parent?this._parent.index+4:0;return this.index==n?this.externalSibling(-1):new e(this.context,this._parent,t.findChild(n,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,r=this.index+4,i=n.buffer[this.index+3];if(i>r){let a=n.buffer[this.index+1];e.push(n.slice(r,i,a)),t.push(0)}return new M(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}};function Po(e){if(!e.length)return null;let t=0,n=e[0];for(let r=1;r<e.length;r++){let i=e[r];(i.from>n.from||i.to<n.to)&&(n=i,t=r)}let r=n instanceof ko&&n.index<0?null:n.parent,i=e.slice();return r?i[t]=r:i.splice(t,1),new Fo(i,n)}var Fo=class{constructor(e,t){this.heads=e,this.node=t}get next(){return Po(this.heads)}};function Io(e,t,n){let r=e.resolveInner(t,n),i=null;for(let e=r instanceof ko?r:r.context.parent;e;e=e.parent)if(e.index<0){let a=e.parent;(i||=[r]).push(a.resolve(t,n)),e=a}else{let a=vo.get(e.tree);if(a&&a.overlay&&a.overlay[0].from<=t&&a.overlay[a.overlay.length-1].to>=t){let o=new ko(a.tree,a.overlay[0].from+e.from,-1,e);(i||=[r]).push(Do(o,t,n,!1))}}return i?Po(i):r}var Lo=class{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~j.EnterBracketed,e instanceof ko)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=n+r.buffer[e+1],this.to=n+r.buffer[e+2],!0}yield(e){return e?e instanceof ko?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:r}=this.buffer,i=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,n);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&j.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&j.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&j.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let e=n<0?0:this.stack[n]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(e)}return n<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(r.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:n}=r)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,i=e<0?-1:n._tree.children.length;r!=i;r+=e){let e=n._tree.children[r];if(this.mode&j.IncludeAnonymous||e instanceof To||!e.type.isAnonymous||Ro(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)scan:for(let r=this.index,i=this.stack.length;i>=0;){for(let a=e;a;a=a._parent)if(a.index==r){if(r==this.index)return a;t=a,n=i+1;break scan}r=this.stack[--i]}for(let e=n;e<this.stack.length;e++)t=new No(this.buffer,t,this.stack[e]);return this.bufferNode=new No(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,r=!0}}}matchContext(e){if(!this.buffer)return jo(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let r=e.length-1,i=this.stack.length-1;r>=0;i--){if(i<0)return jo(this._tree,e,r);let a=n[t.buffer[this.stack[i]]];if(!a.isAnonymous){if(e[r]&&e[r]!=a.name)return!1;r--}}return!0}};function Ro(e){return e.children.some(e=>e instanceof To||!e.type.isAnonymous||Ro(e))}function zo(e){let{buffer:t,nodeSet:n,maxBufferLength:r=ho,reused:i=[],minRepeatType:a=n.types.length}=e,o=Array.isArray(t)?new wo(t,t.length):t,s=n.types,c=0,l=0;function u(e,t,_,v,y,ee){let{id:b,start:te,end:x,size:S}=o,C=l,ne=c;if(S<0){if(o.next(),S==-1){let t=i[b];_.push(t),v.push(te-e);return}if(S==-3){c=b;return}if(S==-4){l=b;return}throw RangeError(`Unrecognized record size: ${S}`)}let re=s[b],ie,ae,oe=te-e;if(x-te<=r&&(ae=h(o.pos-t,y))){let t=new Uint16Array(ae.size-ae.skip),r=o.pos-ae.size,i=t.length;for(;o.pos>r;)i=g(ae.start,t,i);ie=new To(t,x-ae.start,n),oe=ae.start-e}else{let e=o.pos-S;o.next();let t=[],n=[],i=b>=a?b:-1,s=0,c=x;for(;o.pos>e;)i>=0&&o.id==i&&o.size>=0?(o.end<=c-r&&(p(t,n,te,s,o.end,c,i,C,ne),s=t.length,c=o.end),o.next()):ee>2500?d(te,e,t,n):u(te,e,t,n,i,ee+1);if(i>=0&&s>0&&s<t.length&&p(t,n,te,s,te,c,i,C,ne),t.reverse(),n.reverse(),i>-1&&s>0){let e=f(re,ne);ie=Ho(re,t,n,0,t.length,0,x-te,e,e)}else ie=m(re,t,n,x-te,C-x,ne)}_.push(ie),v.push(oe)}function d(e,t,i,a){let s=[],c=0,l=-1;for(;o.pos>t;){let{id:e,start:t,end:n,size:i}=o;if(i>4)o.next();else if(l>-1&&t<l)break;else l<0&&(l=n-r),s.push(e,t,n),c++,o.next()}if(c){let t=new Uint16Array(c*4),r=s[s.length-2];for(let e=s.length-3,n=0;e>=0;e-=3)t[n++]=s[e],t[n++]=s[e+1]-r,t[n++]=s[e+2]-r,t[n++]=n;i.push(new To(t,s[2]-r,n)),a.push(r-e)}}function f(e,t){return(n,r,i)=>{let a=0,o=n.length-1,s,c;if(o>=0&&(s=n[o])instanceof M){if(!o&&s.type==e&&s.length==i)return s;(c=s.prop(A.lookAhead))&&(a=r[o]+s.length+c)}return m(e,n,r,i,a,t)}}function p(e,t,r,i,a,o,s,c,l){let u=[],d=[];for(;e.length>i;)u.push(e.pop()),d.push(t.pop()+r-a);e.push(m(n.types[s],u,d,o-a,c-o,l)),t.push(a-r)}function m(e,t,n,r,i,a,o){if(a){let e=[A.contextHash,a];o=o?[e].concat(o):[e]}if(i>25){let e=[A.lookAhead,i];o=o?[e].concat(o):[e]}return new M(e,t,n,r,o)}function h(e,t){let n=o.fork(),i=0,s=0,c=0,l=n.end-r,u={size:0,start:0,skip:0};scan:for(let r=n.pos-e;n.pos>r;){let e=n.size;if(n.id==t&&e>=0){u.size=i,u.start=s,u.skip=c,c+=4,i+=4,n.next();continue}let o=n.pos-e;if(e<0||o<r||n.start<l)break;let d=n.id>=a?4:0,f=n.start;for(n.next();n.pos>o;){if(n.size<0){if(n.size==-3||n.size==-4)d+=4;else break scan}else n.id>=a&&(d+=4);n.next()}s=f,i+=e,c+=d}return(t<0||i==e)&&(u.size=i,u.start=s,u.skip=c),u.size>4?u:void 0}function g(e,t,n){let{id:r,start:i,end:s,size:u}=o;if(o.next(),u>=0&&r<a){let a=n;if(u>4){let r=o.pos-(u-4);for(;o.pos>r;)n=g(e,t,n)}t[--n]=a,t[--n]=s-e,t[--n]=i-e,t[--n]=r}else u==-3?c=r:u==-4&&(l=r);return n}let _=[],v=[];for(;o.pos>0;)u(e.start||0,e.bufferStart||0,_,v,-1,0);let y=e.length??(_.length?v[0]+_[0].length:0);return new M(s[e.topID],_.reverse(),v.reverse(),y)}var Bo=new WeakMap;function Vo(e,t){if(!e.isAnonymous||t instanceof To||t.type!=e)return 1;let n=Bo.get(t);if(n==null){n=1;for(let r of t.children){if(r.type!=e||!(r instanceof M)){n=1;break}n+=Vo(e,r)}Bo.set(t,n)}return n}function Ho(e,t,n,r,i,a,o,s,c){let l=0;for(let n=r;n<i;n++)l+=Vo(e,t[n]);let u=Math.ceil(l*1.5/8),d=[],f=[];function p(t,n,r,i,o){for(let s=r;s<i;){let r=s,l=n[s],m=Vo(e,t[s]);for(s++;s<i;s++){let n=Vo(e,t[s]);if(m+n>=u)break;m+=n}if(s==r+1){if(m>u){let e=t[r];p(e.children,e.positions,0,e.children.length,n[r]+o);continue}d.push(t[r])}else{let i=n[s-1]+t[s-1].length-l;d.push(Ho(e,t,n,r,s,l,i,null,c))}f.push(l+o-a)}}return p(t,n,r,i,0),(s||c)(d,f,o)}var Uo=class e{constructor(e,t,n,r,i=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=r,this.open=!!i|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(t,n=[],r=!1){let i=[new e(0,t.length,t,0,!1,r)];for(let e of n)e.to>t.length&&i.push(e);return i}static applyChanges(t,n,r=128){if(!n.length)return t;let i=[],a=1,o=t.length?t[0]:null;for(let s=0,c=0,l=0;;s++){let u=s<n.length?n[s]:null,d=u?u.fromA:1e9;if(d-c>=r)for(;o&&o.from<d;){let n=o;if(c>=n.from||d<=n.to||l){let t=Math.max(n.from,c)-l,r=Math.min(n.to,d)-l;n=t>=r?null:new e(t,r,n.tree,n.offset+l,s>0,!!u)}if(n&&i.push(n),o.to>d)break;o=a<t.length?t[a++]:null}if(!u)break;c=u.toA,l=u.toA-u.toB}return i}},Wo=class{startParse(e,t,n){return typeof e==`string`&&(e=new Go(e)),n=n?n.length?n.map(e=>new _o(e.from,e.to)):[new _o(0,0)]:[new _o(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let r=this.startParse(e,t,n);for(;;){let e=r.advance();if(e)return e}}},Go=class{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}};new A({perNode:!0});var Ko=[],qo=[];(()=>{let e=`lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o`.split(`,`).map(e=>e?parseInt(e,36):1);for(let t=0,n=0;t<e.length;t++)(t%2?qo:Ko).push(n+=e[t])})();function Jo(e){if(e<768)return!1;for(let t=0,n=Ko.length;;){let r=t+n>>1;if(e<Ko[r])n=r;else if(e>=qo[r])t=r+1;else return!0;if(t==n)return!1}}function Yo(e){return e>=127462&&e<=127487}var Xo=8205;function Zo(e,t,n=!0,r=!0){return(n?Qo:$o)(e,t,r)}function Qo(e,t,n){if(t==e.length)return t;t&&ts(e.charCodeAt(t))&&ns(e.charCodeAt(t-1))&&t--;let r=es(e,t);for(t+=rs(r);t<e.length;){let i=es(e,t);if(r==Xo||i==Xo||n&&Jo(i))t+=rs(i),r=i;else if(Yo(i)){let n=0,r=t-2;for(;r>=0&&Yo(es(e,r));)n++,r-=2;if(n%2==0)break;t+=2}else break}return t}function $o(e,t,n){for(;t>1;){let r=Qo(e,t-2,n);if(r<t)return r;t--}return 0}function es(e,t){let n=e.charCodeAt(t);if(!ns(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return ts(r)?(n-55296<<10)+(r-56320)+65536:n}function ts(e){return e>=56320&&e<57344}function ns(e){return e>=55296&&e<56320}function rs(e){return e<65536?1:2}var N=class e{lineAt(e){if(e<0||e>this.length)throw RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=ps(this,e,t);let r=[];return this.decompose(0,e,r,2),n.length&&n.decompose(0,n.length,r,3),this.decompose(t,this.length,r,1),as.from(r,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=ps(this,e,t);let n=[];return this.decompose(e,t,n,0),as.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),r=new ls(this),i=new ls(e);for(let e=t,a=t;;){if(r.next(e),i.next(e),e=0,r.lineBreak!=i.lineBreak||r.done!=i.done||r.value!=i.value)return!1;if(a+=r.value.length,r.done||a>=n)return!0}}iter(e=1){return new ls(this,e)}iterRange(e,t=this.length){return new us(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t??=this.lines+1;let r=this.line(e).from;n=this.iterRange(r,Math.max(r,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new ds(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(t){if(t.length==0)throw RangeError(`A document must have at least one line`);return t.length==1&&!t[0]?e.empty:t.length<=32?new is(t):as.from(is.split(t,[]))}},is=class e extends N{constructor(e,t=os(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.text[i],o=r+a.length;if((t?n:o)>=e)return new fs(r,o,n,a);r=o+1,n++}}decompose(t,n,r,i){let a=t<=0&&n>=this.length?this:new e(cs(this.text,t,n),Math.min(n,this.length)-Math.max(0,t));if(i&1){let t=r.pop(),n=ss(a.text,t.text.slice(),0,a.length);if(n.length<=32)r.push(new e(n,t.length+a.length));else{let t=n.length>>1;r.push(new e(n.slice(0,t)),new e(n.slice(t)))}}else r.push(a)}replace(t,n,r){if(!(r instanceof e))return super.replace(t,n,r);[t,n]=ps(this,t,n);let i=ss(this.text,ss(r.text,cs(this.text,0,t)),n),a=this.length+r.length-(n-t);return i.length<=32?new e(i,a):as.from(e.split(i,[]),a)}sliceString(e,t=this.length,n=`
`){[e,t]=ps(this,e,t);let r=``;for(let i=0,a=0;i<=t&&a<this.text.length;a++){let o=this.text[a],s=i+o.length;i>e&&a&&(r+=n),e<s&&t>i&&(r+=o.slice(Math.max(0,e-i),t-i)),i=s+1}return r}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(t,n){let r=[],i=-1;for(let a of t)r.push(a),i+=a.length+1,r.length==32&&(n.push(new e(r,i)),r=[],i=-1);return i>-1&&n.push(new e(r,i)),n}},as=class e extends N{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let t of e)this.lines+=t.lines}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.children[i],o=r+a.length,s=n+a.lines-1;if((t?s:o)>=e)return a.lineInner(e,t,n,r);r=o+1,n=s+1}}decompose(e,t,n,r){for(let i=0,a=0;a<=t&&i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(e<=s&&t>=a){let i=r&(a<=e|(s>=t?2:0));a>=e&&s<=t&&!i?n.push(o):o.decompose(e-a,t-a,n,i)}a=s+1}}replace(t,n,r){if([t,n]=ps(this,t,n),r.lines<this.lines)for(let i=0,a=0;i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(t>=a&&n<=s){let c=o.replace(t-a,n-a,r),l=this.lines-o.lines+c.lines;if(c.lines<l>>4&&c.lines>l>>6){let a=this.children.slice();return a[i]=c,new e(a,this.length-(n-t)+r.length)}return super.replace(a,s,c)}a=s+1}return super.replace(t,n,r)}sliceString(e,t=this.length,n=`
`){[e,t]=ps(this,e,t);let r=``;for(let i=0,a=0;i<this.children.length&&a<=t;i++){let o=this.children[i],s=a+o.length;a>e&&i&&(r+=n),e<s&&t>a&&(r+=o.sliceString(e-a,t-a,n)),a=s+1}return r}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(t,n){if(!(t instanceof e))return 0;let r=0,[i,a,o,s]=n>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1];for(;;i+=n,a+=n){if(i==o||a==s)return r;let e=this.children[i],c=t.children[a];if(e!=c)return r+e.scanIdentical(c,n);r+=e.length+1}}static from(t,n=t.reduce((e,t)=>e+t.length+1,-1)){let r=0;for(let e of t)r+=e.lines;if(r<32){let e=[];for(let n of t)n.flatten(e);return new is(e,n)}let i=Math.max(32,r>>5),a=i<<1,o=i>>1,s=[],c=0,l=-1,u=[];function d(t){let n;if(t.lines>a&&t instanceof e)for(let e of t.children)d(e);else t.lines>o&&(c>o||!c)?(f(),s.push(t)):t instanceof is&&c&&(n=u[u.length-1])instanceof is&&t.lines+n.lines<=32?(c+=t.lines,l+=t.length+1,u[u.length-1]=new is(n.text.concat(t.text),n.length+1+t.length)):(c+t.lines>i&&f(),c+=t.lines,l+=t.length+1,u.push(t))}function f(){c!=0&&(s.push(u.length==1?u[0]:e.from(u,l)),l=-1,c=u.length=0)}for(let e of t)d(e);return f(),s.length==1?s[0]:new e(s,n)}};N.empty=new is([``],0);function os(e){let t=-1;for(let n of e)t+=n.length+1;return t}function ss(e,t,n=0,r=1e9){for(let i=0,a=0,o=!0;a<e.length&&i<=r;a++){let s=e[a],c=i+s.length;c>=n&&(c>r&&(s=s.slice(0,r-i)),i<n&&(s=s.slice(n-i)),o?(t[t.length-1]+=s,o=!1):t.push(s)),i=c+1}return t}function cs(e,t,n){return ss(e,[``],t,n)}var ls=class{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value=``,this.nodes=[e],this.offsets=[t>0?1:(e instanceof is?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,r=this.nodes[n],i=this.offsets[n],a=i>>1,o=r instanceof is?r.text.length:r.children.length;if(a==(t>0?o:0)){if(n==0)return this.done=!0,this.value=``,this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((i&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(r instanceof is){let i=r.text[a+(t<0?-1:0)];if(this.offsets[n]+=t,i.length>Math.max(0,e))return this.value=e==0?i:t>0?i.slice(e):i.slice(0,i.length-e),this;e-=i.length}else{let i=r.children[a+(t<0?-1:0)];e>i.length?(e-=i.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(i),this.offsets.push(t>0?1:(i instanceof is?i.text.length:i.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}},us=class{constructor(e,t,n){this.value=``,this.done=!1,this.cursor=new ls(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value=``,this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:r}=this.cursor.next(e);return this.pos+=(r.length+e)*t,this.value=r.length<=n?r:t<0?r.slice(r.length-n):r.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=``}},ds=class{constructor(e){this.inner=e,this.afterBreak=!0,this.value=``,this.done=!1}next(e=0){let{done:t,lineBreak:n,value:r}=this.inner.next(e);return t&&this.afterBreak?(this.value=``,this.afterBreak=!1):t?(this.done=!0,this.value=``):n?this.afterBreak?this.value=``:(this.afterBreak=!0,this.next()):(this.value=r,this.afterBreak=!1),this}get lineBreak(){return!1}};typeof Symbol<`u`&&(N.prototype[Symbol.iterator]=function(){return this.iter()},ls.prototype[Symbol.iterator]=us.prototype[Symbol.iterator]=ds.prototype[Symbol.iterator]=function(){return this});var fs=class{constructor(e,t,n,r){this.from=e,this.to=t,this.number=n,this.text=r}get length(){return this.to-this.from}};function ps(e,t,n){return t=Math.max(0,Math.min(e.length,t)),[t,Math.max(t,Math.min(e.length,n))]}function ms(e,t,n=!0,r=!0){return Zo(e,t,n,r)}function hs(e){return e>=56320&&e<57344}function gs(e){return e>=55296&&e<56320}function _s(e,t){let n=e.charCodeAt(t);if(!gs(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return hs(r)?(n-55296<<10)+(r-56320)+65536:n}function vs(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}function ys(e){return e<65536?1:2}var bs=/\r\n?|\n/,xs=(function(e){return e[e.Simple=0]=`Simple`,e[e.TrackDel=1]=`TrackDel`,e[e.TrackBefore=2]=`TrackBefore`,e[e.TrackAfter=3]=`TrackAfter`,e})(xs||={}),Ss=class e{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,r=0;t<this.sections.length;){let i=this.sections[t++],a=this.sections[t++];a<0?(e(n,r,i),r+=i):r+=a,n+=i}}iterChangedRanges(e,t=!1){Es(this,e,t)}get invertedDesc(){let t=[];for(let e=0;e<this.sections.length;){let n=this.sections[e++],r=this.sections[e++];r<0?t.push(n,r):t.push(r,n)}return new e(t)}composeDesc(e){return this.empty?e:e.empty?this:Os(this,e)}mapDesc(e,t=!1){return e.empty?this:Ds(this,e,t)}mapPos(e,t=-1,n=xs.Simple){let r=0,i=0;for(let a=0;a<this.sections.length;){let o=this.sections[a++],s=this.sections[a++],c=r+o;if(s<0){if(c>e)return i+(e-r);i+=o}else{if(n!=xs.Simple&&c>=e&&(n==xs.TrackDel&&r<e&&c>e||n==xs.TrackBefore&&r<e||n==xs.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!o)return e==r||t<0?i:i+s;i+=s}r=c}if(e>r)throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);return i}touchesRange(e,t=e){for(let n=0,r=0;n<this.sections.length&&r<=t;){let i=this.sections[n++],a=this.sections[n++],o=r+i;if(a>=0&&r<=t&&o>=e)return r<e&&o>t?`cover`:!0;r=o}return!1}toString(){let e=``;for(let t=0;t<this.sections.length;){let n=this.sections[t++],r=this.sections[t++];e+=(e?` `:``)+n+(r>=0?`:`+r:``)}return e}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(e=>typeof e!=`number`))throw RangeError(`Invalid JSON representation of ChangeDesc`);return new e(t)}static create(t){return new e(t)}},Cs=class e extends Ss{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw RangeError(`Applying change set to a document with the wrong length`);return Es(this,(t,n,r,i,a)=>e=e.replace(r,r+(n-t),a),!1),e}mapDesc(e,t=!1){return Ds(this,e,t,!0)}invert(t){let n=this.sections.slice(),r=[];for(let e=0,i=0;e<n.length;e+=2){let a=n[e],o=n[e+1];if(o>=0){n[e]=o,n[e+1]=a;let s=e>>1;for(;r.length<s;)r.push(N.empty);r.push(a?t.slice(i,i+a):N.empty)}i+=a}return new e(n,r)}compose(e){return this.empty?e:e.empty?this:Os(this,e,!0)}map(e,t=!1){return e.empty?this:Ds(this,e,t,!0)}iterChanges(e,t=!1){Es(this,e,t)}get desc(){return Ss.create(this.sections)}filter(t){let n=[],r=[],i=[],a=new ks(this);done:for(let e=0,o=0;;){let s=e==t.length?1e9:t[e++];for(;o<s||o==s&&a.len==0;){if(a.done)break done;let e=Math.min(a.len,s-o);ws(i,e,-1);let t=a.ins==-1?-1:a.off==0?a.ins:0;ws(n,e,t),t>0&&Ts(r,n,a.text),a.forward(e),o+=e}let c=t[e++];for(;o<c;){if(a.done)break done;let e=Math.min(a.len,c-o);ws(n,e,-1),ws(i,e,a.ins==-1?-1:a.off==0?a.ins:0),a.forward(e),o+=e}}return{changes:new e(n,r),filtered:Ss.create(i)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],r=this.sections[t+1];r<0?e.push(n):r==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(t,n,r){let i=[],a=[],o=0,s=null;function c(t=!1){if(!t&&!i.length)return;o<n&&ws(i,n-o,-1);let r=new e(i,a);s=s?s.compose(r.map(s)):r,i=[],a=[],o=0}function l(t){if(Array.isArray(t))for(let e of t)l(e);else if(t instanceof e){if(t.length!=n)throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);c(),s=s?s.compose(t.map(s)):t}else{let{from:e,to:s=e,insert:l}=t;if(e>s||e<0||s>n)throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);let u=l?typeof l==`string`?N.of(l.split(r||bs)):l:N.empty,d=u.length;if(e==s&&d==0)return;e<o&&c(),e>o&&ws(i,e-o,-1),ws(i,s-e,d),Ts(a,i,u),o=s}}return l(t),c(!s),s}static empty(t){return new e(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw RangeError(`Invalid JSON representation of ChangeSet`);let n=[],r=[];for(let e=0;e<t.length;e++){let i=t[e];if(typeof i==`number`)n.push(i,-1);else if(!Array.isArray(i)||typeof i[0]!=`number`||i.some((e,t)=>t&&typeof e!=`string`))throw RangeError(`Invalid JSON representation of ChangeSet`);else if(i.length==1)n.push(i[0],0);else{for(;r.length<e;)r.push(N.empty);r[e]=N.of(i.slice(1)),n.push(i[0],r[e].length)}}return new e(n,r)}static createSet(t,n){return new e(t,n)}};function ws(e,t,n,r=!1){if(t==0&&n<=0)return;let i=e.length-2;i>=0&&n<=0&&n==e[i+1]?e[i]+=t:i>=0&&t==0&&e[i]==0?e[i+1]+=n:r?(e[i]+=t,e[i+1]+=n):e.push(t,n)}function Ts(e,t,n){if(n.length==0)return;let r=t.length-2>>1;if(r<e.length)e[e.length-1]=e[e.length-1].append(n);else{for(;e.length<r;)e.push(N.empty);e.push(n)}}function Es(e,t,n){let r=e.inserted;for(let i=0,a=0,o=0;o<e.sections.length;){let s=e.sections[o++],c=e.sections[o++];if(c<0)i+=s,a+=s;else{let l=i,u=a,d=N.empty;for(;l+=s,u+=c,c&&r&&(d=d.append(r[o-2>>1])),!(n||o==e.sections.length||e.sections[o+1]<0);)s=e.sections[o++],c=e.sections[o++];t(i,l,a,u,d),i=l,a=u}}}function Ds(e,t,n,r=!1){let i=[],a=r?[]:null,o=new ks(e),s=new ks(t);for(let e=-1;;)if(o.done&&s.len||s.done&&o.len)throw Error(`Mismatched change set lengths`);else if(o.ins==-1&&s.ins==-1){let e=Math.min(o.len,s.len);ws(i,e,-1),o.forward(e),s.forward(e)}else if(s.ins>=0&&(o.ins<0||e==o.i||o.off==0&&(s.len<o.len||s.len==o.len&&!n))){let t=s.len;for(ws(i,s.ins,-1);t;){let n=Math.min(o.len,t);o.ins>=0&&e<o.i&&o.len<=n&&(ws(i,0,o.ins),a&&Ts(a,i,o.text),e=o.i),o.forward(n),t-=n}s.next()}else if(o.ins>=0){let t=0,n=o.len;for(;n;)if(s.ins==-1){let e=Math.min(n,s.len);t+=e,n-=e,s.forward(e)}else if(s.ins==0&&s.len<n)n-=s.len,s.next();else break;ws(i,t,e<o.i?o.ins:0),a&&e<o.i&&Ts(a,i,o.text),e=o.i,o.forward(o.len-n)}else if(o.done&&s.done)return a?Cs.createSet(i,a):Ss.create(i);else throw Error(`Mismatched change set lengths`)}function Os(e,t,n=!1){let r=[],i=n?[]:null,a=new ks(e),o=new ks(t);for(let e=!1;;)if(a.done&&o.done)return i?Cs.createSet(r,i):Ss.create(r);else if(a.ins==0)ws(r,a.len,0,e),a.next();else if(o.len==0&&!o.done)ws(r,0,o.ins,e),i&&Ts(i,r,o.text),o.next();else if(a.done||o.done)throw Error(`Mismatched change set lengths`);else{let t=Math.min(a.len2,o.len),n=r.length;if(a.ins==-1){let n=o.ins==-1?-1:o.off?0:o.ins;ws(r,t,n,e),i&&n&&Ts(i,r,o.text)}else o.ins==-1?(ws(r,a.off?0:a.len,t,e),i&&Ts(i,r,a.textBit(t))):(ws(r,a.off?0:a.len,o.off?0:o.ins,e),i&&!o.off&&Ts(i,r,o.text));e=(a.ins>t||o.ins>=0&&o.len>t)&&(e||r.length>n),a.forward2(t),o.forward(t)}}var ks=class{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?N.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?N.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}},As=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.flags=n,this.goalColumn=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get undirectional(){return(this.flags&64)>0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}map(t,n=-1){let r,i;return this.empty?r=i=t.mapPos(this.from,n):(r=t.mapPos(this.from,1),i=t.mapPos(this.to,-1)),r==this.from&&i==this.to?this:new e(r,i,this.flags,this.goalColumn)}extend(e,t=e,n=0){if(e<=this.anchor&&t>=this.anchor)return P.range(e,t,void 0,void 0,n);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return P.range(this.anchor,r,void 0,void 0,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!=`number`||typeof e.head!=`number`)throw RangeError(`Invalid JSON representation for SelectionRange`);return P.range(e.anchor,e.head)}static create(t,n,r,i){return new e(t,n,r,i)}},P=class e{constructor(e,t){this.ranges=e,this.mainIndex=t}map(t,n=-1){return t.empty?this:e.create(this.ranges.map(e=>e.map(t,n)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new e([this.main],0)}addRange(t,n=!0){return e.create([t].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(t,n=this.mainIndex){let r=this.ranges.slice();return r[n]=t,e.create(r,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||typeof t.main!=`number`||t.main>=t.ranges.length)throw RangeError(`Invalid JSON representation for EditorSelection`);return new e(t.ranges.map(e=>As.fromJSON(e)),t.main)}static single(t,n=t){return new e([e.range(t,n)],0)}static create(t,n=0){if(t.length==0)throw RangeError(`A selection needs at least one range`);for(let r=0,i=0;i<t.length;i++){let a=t[i];if(a.empty?a.from<=r:a.from<r)return e.normalized(t.slice(),n);r=a.to}return new e(t,n)}static cursor(e,t=0,n,r){return As.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n)),r)}static range(e,t,n,r,i){let a=r==null?7:Math.min(6,r);return!i&&e!=t&&(i=t<e?1:-1),i&&(a|=i<0?8:16),t<e?As.create(t,e,a|32,n):As.create(e,t,a,n)}static undirectionalRange(e,t){return As.create(e,t,64,void 0)}static normalized(t,n=0){let r=t[n];t.sort((e,t)=>e.from-t.from),n=t.indexOf(r);for(let r=1;r<t.length;r++){let i=t[r],a=t[r-1];if(i.empty?i.from<=a.to:i.from<a.to){let o=a.from,s=Math.max(i.to,a.to);r<=n&&n--,t.splice(--r,2,i.anchor>i.head?e.range(s,o):e.range(o,s))}}return new e(t,n)}};function js(e,t){for(let n of e.ranges)if(n.to>t)throw RangeError(`Selection points outside of document`)}var Ms=0,F=class e{constructor(e,t,n,r,i){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=r,this.id=Ms++,this.default=e([]),this.extensions=typeof i==`function`?i(this):i}get reader(){return this}static define(t={}){return new e(t.combine||(e=>e),t.compareInput||((e,t)=>e===t),t.compare||(t.combine?(e,t)=>e===t:Ns),!!t.static,t.enables)}of(e){return new Ps([],this,0,e)}compute(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Ps(e,this,1,t)}computeN(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Ps(e,this,2,t)}from(e,t){return t||=e=>e,this.compute([e],n=>t(n.field(e)))}};function Ns(e,t){return e==t||e.length==t.length&&e.every((e,n)=>e===t[n])}var Ps=class{constructor(e,t,n,r){this.dependencies=e,this.facet=t,this.type=n,this.value=r,this.id=Ms++}dynamicSlot(e){let t=this.value,n=this.facet.compareInput,r=this.id,i=e[r]>>1,a=this.type==2,o=!1,s=!1,c=[];for(let t of this.dependencies)t==`doc`?o=!0:t==`selection`?s=!0:(e[t.id]??1)&1||c.push(e[t.id]);return{create(e){return e.values[i]=t(e),1},update(e,r){if(o&&r.docChanged||s&&(r.docChanged||r.selection)||Is(e,c)){let r=t(e);if(a?!Fs(r,e.values[i],n):!n(r,e.values[i]))return e.values[i]=r,1}return 0},reconfigure:(e,o)=>{let s,c=o.config.address[r];if(c!=null){let r=Ys(o,c);if(this.dependencies.every(t=>t instanceof F?o.facet(t)===e.facet(t):t instanceof zs?o.field(t,!1)==e.field(t,!1):!0)||(a?Fs(s=t(e),r,n):n(s=t(e),r)))return e.values[i]=r,0}else s=t(e);return e.values[i]=s,1}}}get extension(){return this}};function Fs(e,t,n){if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function Is(e,t){let n=!1;for(let r of t)Js(e,r)&1&&(n=!0);return n}function Ls(e,t,n){let r=n.map(t=>e[t.id]),i=n.map(e=>e.type),a=r.filter(e=>!(e&1)),o=e[t.id]>>1;function s(e){let n=[];for(let t=0;t<r.length;t++){let a=Ys(e,r[t]);if(i[t]==2)for(let e of a)n.push(e);else n.push(a)}return t.combine(n)}return{create(e){for(let t of r)Js(e,t);return e.values[o]=s(e),1},update(e,n){if(!Is(e,a))return 0;let r=s(e);return t.compare(r,e.values[o])?0:(e.values[o]=r,1)},reconfigure(e,i){let a=Is(e,r),c=i.config.facets[t.id],l=i.facet(t);if(c&&!a&&Ns(n,c))return e.values[o]=l,0;let u=s(e);return t.compare(u,l)?(e.values[o]=l,0):(e.values[o]=u,1)}}}var Rs=F.define({static:!0}),zs=class e{constructor(e,t,n,r,i){this.id=e,this.createF=t,this.updateF=n,this.compareF=r,this.spec=i,this.provides=void 0}static define(t){let n=new e(Ms++,t.create,t.update,t.compare||((e,t)=>e===t),t);return t.provide&&(n.provides=t.provide(n)),n}create(e){return(e.facet(Rs).find(e=>e.field==this)?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:e=>(e.values[t]=this.create(e),1),update:(e,n)=>{let r=e.values[t],i=this.updateF(r,n);return this.compareF(r,i)?0:(e.values[t]=i,1)},reconfigure:(e,n)=>{let r=e.facet(Rs),i=n.facet(Rs),a;return(a=r.find(e=>e.field==this))&&a!=i.find(e=>e.field==this)?(e.values[t]=a.create(e),1):n.config.address[this.id]==null?(e.values[t]=this.create(e),1):(e.values[t]=n.field(this),0)}}}init(e){return[this,Rs.of({field:this,create:e})]}get extension(){return this}},Bs={lowest:4,low:3,default:2,high:1,highest:0};function Vs(e){return t=>new Us(t,e)}var Hs={highest:Vs(Bs.highest),high:Vs(Bs.high),default:Vs(Bs.default),low:Vs(Bs.low),lowest:Vs(Bs.lowest)},Us=class{constructor(e,t){this.inner=e,this.prec=t}get extension(){return this}},Ws=class e{of(e){return new Gs(this,e)}reconfigure(t){return e.reconfigure.of({compartment:this,extension:t})}get(e){return e.config.compartments.get(this)}},Gs=class{constructor(e,t){this.compartment=e,this.inner=t}get extension(){return this}},Ks=class e{constructor(e,t,n,r,i,a){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=r,this.staticValues=i,this.facets=a,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(t,n,r){let i=[],a=Object.create(null),o=new Map;for(let e of qs(t,n,o))e instanceof zs?i.push(e):(a[e.facet.id]||(a[e.facet.id]=[])).push(e);let s=Object.create(null),c=[],l=[];for(let e of i)s[e.id]=l.length<<1,l.push(t=>e.slot(t));let u=r?.config.facets;for(let e in a){let t=a[e],n=t[0].facet,i=u&&u[e]||[];if(t.every(e=>e.type==0)){if(s[n.id]=c.length<<1|1,Ns(i,t))c.push(r.facet(n));else{let e=n.combine(t.map(e=>e.value));c.push(r&&n.compare(e,r.facet(n))?r.facet(n):e)}}else{for(let e of t)e.type==0?(s[e.id]=c.length<<1|1,c.push(e.value)):(s[e.id]=l.length<<1,l.push(t=>e.dynamicSlot(t)));s[n.id]=l.length<<1,l.push(e=>Ls(e,n,t))}}let d=l.map(e=>e(s));return new e(t,o,d,s,c,a)}};function qs(e,t,n){let r=[[],[],[],[],[]],i=new Map;function a(e,o){let s=i.get(e);if(s!=null){if(s<=o)return;let t=r[s].indexOf(e);t>-1&&r[s].splice(t,1),e instanceof Gs&&n.delete(e.compartment)}if(i.set(e,o),Array.isArray(e))for(let t of e)a(t,o);else if(e instanceof Gs){if(n.has(e.compartment))throw RangeError(`Duplicate use of compartment in extensions`);let r=t.get(e.compartment)||e.inner;n.set(e.compartment,r),a(r,o)}else if(e instanceof Us)a(e.inner,e.prec);else if(e instanceof zs)r[o].push(e),e.provides&&a(e.provides,o);else if(e instanceof Ps)r[o].push(e),e.facet.extensions&&a(e.facet.extensions,Bs.default);else{let t=e.extension;if(!t)throw Error(`Unrecognized extension value in extension set (${e}).`);if(t==e)throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);a(t,o)}}return a(e,Bs.default),r.reduce((e,t)=>e.concat(t))}function Js(e,t){if(t&1)return 2;let n=t>>1,r=e.status[n];if(r==4)throw Error(`Cyclic dependency between fields and/or facets`);if(r&2)return r;e.status[n]=4;let i=e.computeSlot(e,e.config.dynamicSlots[n]);return e.status[n]=2|i}function Ys(e,t){return t&1?e.config.staticValues[t>>1]:e.values[t>>1]}var Xs=F.define(),Zs=F.define({combine:e=>e.some(e=>e),static:!0}),Qs=F.define({combine:e=>e.length?e[0]:void 0,static:!0}),$s=F.define(),ec=F.define(),tc=F.define(),nc=F.define({combine:e=>e.length?e[0]:!1}),rc=class{constructor(e,t){this.type=e,this.value=t}static define(){return new ic}},ic=class{of(e){return new rc(this,e)}},ac=class{constructor(e){this.map=e}of(e){return new I(this,e)}},I=class e{constructor(e,t){this.type=e,this.value=t}map(t){let n=this.type.map(this.value,t);return n===void 0?void 0:n==this.value?this:new e(this.type,n)}is(e){return this.type==e}static define(e={}){return new ac(e.map||(e=>e))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let r of e){let e=r.map(t);e&&n.push(e)}return n}};I.reconfigure=I.define(),I.appendConfig=I.define();var oc=class e{constructor(t,n,r,i,a,o){this.startState=t,this.changes=n,this.selection=r,this.effects=i,this.annotations=a,this.scrollIntoView=o,this._doc=null,this._state=null,r&&js(r,n.newLength),a.some(t=>t.type==e.time)||(this.annotations=a.concat(e.time.of(Date.now())))}static create(t,n,r,i,a,o){return new e(t,n,r,i,a,o)}get newDoc(){return this._doc||=this.changes.apply(this.startState.doc)}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let n=this.annotation(e.userEvent);return!!(n&&(n==t||n.length>t.length&&n.slice(0,t.length)==t&&n[t.length]==`.`))}};oc.time=rc.define(),oc.userEvent=rc.define(),oc.addToHistory=rc.define(),oc.remote=rc.define();function sc(e,t){let n=[];for(let r=0,i=0;;){let a,o;if(r<e.length&&(i==t.length||t[i]>=e[r]))a=e[r++],o=e[r++];else if(i<t.length)a=t[i++],o=t[i++];else return n;!n.length||n[n.length-1]<a?n.push(a,o):n[n.length-1]<o&&(n[n.length-1]=o)}}function cc(e,t,n){let r,i,a;return n?(r=t.changes,i=Cs.empty(t.changes.length),a=e.changes.compose(t.changes)):(r=t.changes.map(e.changes),i=e.changes.mapDesc(t.changes,!0),a=e.changes.compose(r)),{changes:a,selection:t.selection?t.selection.map(i):e.selection?.map(r),effects:I.mapEffects(e.effects,r).concat(I.mapEffects(t.effects,i)),annotations:e.annotations.length?e.annotations.concat(t.annotations):t.annotations,scrollIntoView:e.scrollIntoView||t.scrollIntoView}}function lc(e,t,n){let r=t.selection,i=mc(t.annotations);return t.userEvent&&(i=i.concat(oc.userEvent.of(t.userEvent))),{changes:t.changes instanceof Cs?t.changes:Cs.of(t.changes||[],n,e.facet(Qs)),selection:r&&(r instanceof P?r:P.single(r.anchor,r.head)),effects:mc(t.effects),annotations:i,scrollIntoView:!!t.scrollIntoView}}function uc(e,t,n){let r=lc(e,t.length?t[0]:{},e.doc.length);t.length&&t[0].filter===!1&&(n=!1);for(let i=1;i<t.length;i++){t[i].filter===!1&&(n=!1);let a=!!t[i].sequential;r=cc(r,lc(e,t[i],a?r.changes.newLength:e.doc.length),a)}let i=oc.create(e,r.changes,r.selection,r.effects,r.annotations,r.scrollIntoView);return fc(n?dc(i):i)}function dc(e){let t=e.startState,n=!0;for(let r of t.facet($s)){let t=r(e);if(t===!1){n=!1;break}Array.isArray(t)&&(n=n===!0?t:sc(n,t))}if(n!==!0){let r,i;if(n===!1)i=e.changes.invertedDesc,r=Cs.empty(t.doc.length);else{let t=e.changes.filter(n);r=t.changes,i=t.filtered.mapDesc(t.changes).invertedDesc}e=oc.create(t,r,e.selection&&e.selection.map(i),I.mapEffects(e.effects,i),e.annotations,e.scrollIntoView)}let r=t.facet(ec);for(let n=r.length-1;n>=0;n--){let i=r[n](e);e=i instanceof oc?i:Array.isArray(i)&&i.length==1&&i[0]instanceof oc?i[0]:uc(t,mc(i),!1)}return e}function fc(e){let t=e.startState,n=t.facet(tc),r=e;for(let i=n.length-1;i>=0;i--){let a=n[i](e);a&&Object.keys(a).length&&(r=cc(r,lc(t,a,e.changes.newLength),!0))}return r==e?e:oc.create(t,e.changes,e.selection,r.effects,r.annotations,r.scrollIntoView)}var pc=[];function mc(e){return e==null?pc:Array.isArray(e)?e:[e]}var L=(function(e){return e[e.Word=0]=`Word`,e[e.Space=1]=`Space`,e[e.Other=2]=`Other`,e})(L||={}),hc=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,gc;try{gc=RegExp(`[\\p{Alphabetic}\\p{Number}_]`,`u`)}catch{}function _c(e){if(gc)return gc.test(e);for(let t=0;t<e.length;t++){let n=e[t];if(/\w/.test(n)||n>``&&(n.toUpperCase()!=n.toLowerCase()||hc.test(n)))return!0}return!1}function vc(e){return t=>{if(!/\S/.test(t))return L.Space;if(_c(t))return L.Word;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return L.Word;return L.Other}}var R=class e{constructor(e,t,n,r,i,a){this.config=e,this.doc=t,this.selection=n,this.values=r,this.status=e.statusTemplate.slice(),this.computeSlot=i,a&&(a._state=this);for(let e=0;e<this.config.dynamicSlots.length;e++)Js(this,e<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw RangeError(`Field is not present in this state`);return}return Js(this,n),Ys(this,n)}update(...e){return uc(this,e,!0)}applyTransaction(t){let n=this.config,{base:r,compartments:i}=n;for(let e of t.effects)e.is(Ws.reconfigure)?(n&&=(i=new Map,n.compartments.forEach((e,t)=>i.set(t,e)),null),i.set(e.value.compartment,e.value.extension)):e.is(I.reconfigure)?(n=null,r=e.value):e.is(I.appendConfig)&&(n=null,r=mc(r).concat(e.value));let a;n?a=t.startState.values.slice():(n=Ks.resolve(r,i,this),a=new e(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(e,t)=>t.reconfigure(e,this),null).values);let o=t.startState.facet(Zs)?t.newSelection:t.newSelection.asSingle();new e(n,t.newDoc,o,a,(e,n)=>n.update(e,t),t)}replaceSelection(e){return typeof e==`string`&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:P.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),r=this.changes(n.changes),i=[n.range],a=mc(n.effects);for(let n=1;n<t.ranges.length;n++){let o=e(t.ranges[n]),s=this.changes(o.changes),c=s.map(r);for(let e=0;e<n;e++)i[e]=i[e].map(c);let l=r.mapDesc(s,!0);i.push(o.range.map(l)),r=r.compose(c),a=I.mapEffects(a,c).concat(I.mapEffects(mc(o.effects),l))}return{changes:r,selection:P.create(i,t.mainIndex),effects:a}}changes(t=[]){return t instanceof Cs?t:Cs.of(t,this.doc.length,this.facet(e.lineSeparator))}toText(t){return N.of(t.split(this.facet(e.lineSeparator)||bs))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(Js(this,t),Ys(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let r=e[n];r instanceof zs&&this.config.address[r.id]!=null&&(t[n]=r.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(t,n={},r){if(!t||typeof t.doc!=`string`)throw RangeError(`Invalid JSON representation for EditorState`);let i=[];if(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(t,e)){let n=r[e],a=t[e];i.push(n.init(e=>n.spec.fromJSON(a,e)))}}return e.create({doc:t.doc,selection:P.fromJSON(t.selection),extensions:n.extensions?i.concat([n.extensions]):i})}static create(t={}){let n=Ks.resolve(t.extensions||[],new Map),r=t.doc instanceof N?t.doc:N.of((t.doc||``).split(n.staticFacet(e.lineSeparator)||bs)),i=t.selection?t.selection instanceof P?t.selection:P.single(t.selection.anchor,t.selection.head):P.single(0);return js(i,r.length),n.staticFacet(Zs)||(i=i.asSingle()),new e(n,r,i,n.dynamicSlots.map(()=>null),(e,t)=>t.create(e),null)}get tabSize(){return this.facet(e.tabSize)}get lineBreak(){return this.facet(e.lineSeparator)||`
`}get readOnly(){return this.facet(nc)}phrase(t,...n){for(let n of this.facet(e.phrases))if(Object.prototype.hasOwnProperty.call(n,t)){t=n[t];break}return n.length&&(t=t.replace(/\$(\$|\d*)/g,(e,t)=>{if(t==`$`)return`$`;let r=+(t||1);return!r||r>n.length?e:n[r-1]})),t}languageDataAt(e,t,n=-1){let r=[];for(let i of this.facet(Xs))for(let a of i(this,t,n))Object.prototype.hasOwnProperty.call(a,e)&&r.push(a[e]);return r}charCategorizer(e){let t=this.languageDataAt(`wordChars`,e);return vc(t.length?t[0]:``)}wordAt(e){let{text:t,from:n,length:r}=this.doc.lineAt(e),i=this.charCategorizer(e),a=e-n,o=e-n;for(;a>0;){let e=ms(t,a,!1);if(i(t.slice(e,a))!=L.Word)break;a=e}for(;o<r;){let e=ms(t,o);if(i(t.slice(o,e))!=L.Word)break;o=e}return a==o?null:P.range(a+n,o+n)}};R.allowMultipleSelections=Zs,R.tabSize=F.define({combine:e=>e.length?e[0]:4}),R.lineSeparator=Qs,R.readOnly=nc,R.phrases=F.define({compare(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length==r.length&&n.every(n=>e[n]==t[n])}}),R.languageData=Xs,R.changeFilter=$s,R.transactionFilter=ec,R.transactionExtender=tc,Ws.reconfigure=I.define();function yc(e,t,n={}){let r={};for(let t of e)for(let e of Object.keys(t)){let i=t[e],a=r[e];if(a===void 0)r[e]=i;else if(a!==i&&i!==void 0){if(Object.hasOwnProperty.call(n,e))r[e]=n[e](a,i);else throw Error(`Config merge conflict for field `+e)}}for(let e in t)r[e]===void 0&&(r[e]=t[e]);return r}var bc=class{eq(e){return this==e}range(e,t=e){return Sc.create(e,t,this)}};bc.prototype.startSide=bc.prototype.endSide=0,bc.prototype.point=!1,bc.prototype.mapMode=xs.TrackDel;function xc(e,t){return e==t||e.constructor==t.constructor&&e.eq(t)}var Sc=class e{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(t,n,r){return new e(t,n,r)}};function Cc(e,t){return e.from-t.from||e.value.startSide-t.value.startSide}var wc=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.value=n,this.maxPoint=r}get length(){return this.to[this.to.length-1]}findIndex(e,t,n,r=0){let i=n?this.to:this.from;for(let a=r,o=i.length;;){if(a==o)return a;let r=a+o>>1,s=i[r]-e||(n?this.value[r].endSide:this.value[r].startSide)-t;if(r==a)return s>=0?a:o;s>=0?o=r:a=r+1}}between(e,t,n,r){for(let i=this.findIndex(t,-1e9,!0),a=this.findIndex(n,1e9,!1,i);i<a;i++)if(r(this.from[i]+e,this.to[i]+e,this.value[i])===!1)return!1}map(t,n){let r=[],i=[],a=[],o=-1,s=-1;for(let e=0;e<this.value.length;e++){let c=this.value[e],l=this.from[e]+t,u=this.to[e]+t,d,f;if(l==u){let e=n.mapPos(l,c.startSide,c.mapMode);if(e==null||(d=f=e,c.startSide!=c.endSide&&(f=n.mapPos(l,c.endSide),f<d)))continue}else if(d=n.mapPos(l,c.startSide),f=n.mapPos(u,c.endSide),d>f||d==f&&c.startSide>0&&c.endSide<=0)continue;(f-d||c.endSide-c.startSide)<0||(o<0&&(o=d),c.point&&(s=Math.max(s,f-d)),r.push(c),i.push(d-o),a.push(f-o))}return{mapped:r.length?new e(i,a,r,s):null,pos:o}}},z=class e{constructor(e,t,n,r){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=r}static create(t,n,r,i){return new e(t,n,r,i)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(t){let{add:n=[],sort:r=!1,filterFrom:i=0,filterTo:a=this.length}=t,o=t.filter;if(n.length==0&&!o)return this;if(r&&(n=n.slice().sort(Cc)),this.isEmpty)return n.length?e.of(n):this;let s=new Oc(this,null,-1).goto(0),c=0,l=[],u=new Ec;for(;s.value||c<n.length;)if(c<n.length&&(s.from-n[c].from||s.startSide-n[c].value.startSide)>=0){let e=n[c++];u.addInner(e.from,e.to,e.value)||l.push(e)}else s.rangeIndex==1&&s.chunkIndex<this.chunk.length&&(c==n.length||this.chunkEnd(s.chunkIndex)<n[c].from)&&(!o||i>this.chunkEnd(s.chunkIndex)||a<this.chunkPos[s.chunkIndex])&&u.addChunk(this.chunkPos[s.chunkIndex],this.chunk[s.chunkIndex])?s.nextChunk():((!o||i>s.to||a<s.from||o(s.from,s.to,s.value))&&(u.addInner(s.from,s.to,s.value)||l.push(Sc.create(s.from,s.to,s.value))),s.next());return u.finishInner(this.nextLayer.isEmpty&&!l.length?e.empty:this.nextLayer.update({add:l,filter:o,filterFrom:i,filterTo:a}))}map(t){if(t.empty||this.isEmpty)return this;let n=[],r=[],i=-1;for(let e=0;e<this.chunk.length;e++){let a=this.chunkPos[e],o=this.chunk[e],s=t.touchesRange(a,a+o.length);if(s===!1)i=Math.max(i,o.maxPoint),n.push(o),r.push(t.mapPos(a));else if(s===!0){let{mapped:e,pos:s}=o.map(a,t);e&&(i=Math.max(i,e.maxPoint),n.push(e),r.push(s))}}let a=this.nextLayer.map(t);return n.length==0?a:new e(r,n,a||e.empty,i)}between(e,t,n){if(!this.isEmpty){for(let r=0;r<this.chunk.length;r++){let i=this.chunkPos[r],a=this.chunk[r];if(t>=i&&e<=i+a.length&&a.between(i,e-i,t-i,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return kc.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return kc.from(e).goto(t)}static compare(e,t,n,r,i=-1){let a=e.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),o=t.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),s=Dc(a,o,n),c=new jc(a,s,i),l=new jc(o,s,i);n.iterGaps((e,t,n)=>Mc(c,e,l,t,n,r)),n.empty&&n.length==0&&Mc(c,0,l,0,0,r)}static eq(e,t,n=0,r){r??=1e9-1;let i=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0),a=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0);if(i.length!=a.length)return!1;if(!i.length)return!0;let o=Dc(i,a),s=new jc(i,o,0).goto(n),c=new jc(a,o,0).goto(n);for(;;){if(s.to!=c.to||!Nc(s.active,c.active)||s.point&&(!c.point||!xc(s.point,c.point)))return!1;if(s.to>r)return!0;s.next(),c.next()}}static spans(e,t,n,r,i=-1){let a=new jc(e,null,i).goto(t),o=t,s=a.openStart;for(;;){let e=Math.min(a.to,n);if(a.point){let n=a.activeForPoint(a.to),i=a.pointFrom<t?n.length+1:a.point.startSide<0?n.length:Math.min(n.length,s);r.point(o,e,a.point,n,i,a.pointRank),s=Math.min(a.openEnd(e),n.length)}else e>o&&(r.span(o,e,a.active,s),s=a.openEnd(e));if(a.to>n)return s+(a.point&&a.to>n?1:0);o=a.to,a.next()}}static of(e,t=!1){let n=new Ec;for(let r of e instanceof Sc?[e]:t?Tc(e):e)n.add(r.from,r.to,r.value);return n.finish()}static join(t){if(!t.length)return e.empty;let n=t[t.length-1];for(let r=t.length-2;r>=0;r--)for(let i=t[r];i!=e.empty;i=i.nextLayer)n=new e(i.chunkPos,i.chunk,n,Math.max(i.maxPoint,n.maxPoint));return n}};z.empty=new z([],[],null,-1);function Tc(e){if(e.length>1)for(let t=e[0],n=1;n<e.length;n++){let r=e[n];if(Cc(t,r)>0)return e.slice().sort(Cc);t=r}return e}z.empty.nextLayer=z.empty;var Ec=class e{finishChunk(e){this.chunks.push(new wc(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(t,n,r){this.addInner(t,n,r)||(this.nextLayer||=new e).add(t,n,r)}addInner(e,t,n){let r=e-this.lastTo||n.startSide-this.last.endSide;if(r<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw Error("Ranges must be added sorted by `from` position and `startSide`");return r<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(z.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=z.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}};function Dc(e,t,n){let r=new Map;for(let t of e)for(let e=0;e<t.chunk.length;e++)t.chunk[e].maxPoint<=0&&r.set(t.chunk[e],t.chunkPos[e]);let i=new Set;for(let e of t)for(let t=0;t<e.chunk.length;t++){let a=r.get(e.chunk[t]);a!=null&&(n?n.mapPos(a):a)==e.chunkPos[t]&&!n?.touchesRange(a,a+e.chunk[t].length)&&i.add(e.chunk[t])}return i}var Oc=class{constructor(e,t,n,r=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=r}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let t=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(t)||this.layer.chunkEnd(this.chunkIndex)<e||t.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let r=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<r)&&this.setRangeIndex(r)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}},kc=class e{constructor(e){this.heap=e}static from(t,n=null,r=-1){let i=[];for(let e=0;e<t.length;e++)for(let a=t[e];!a.isEmpty;a=a.nextLayer)a.maxPoint>=r&&i.push(new Oc(a,n,r,e));return i.length==1?i[0]:new e(i)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let e=this.heap.length>>1;e>=0;e--)Ac(this.heap,e);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let e=this.heap.length>>1;e>=0;e--)Ac(this.heap,e);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Ac(this.heap,0)}}};function Ac(e,t){for(let n=e[t];;){let r=(t<<1)+1;if(r>=e.length)break;let i=e[r];if(r+1<e.length&&i.compare(e[r+1])>=0&&(i=e[r+1],r++),n.compare(i)<0)break;e[r]=n,e[t]=i,t=r}}var jc=class{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=kc.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Pc(this.active,e),Pc(this.activeTo,e),Pc(this.activeRank,e),this.minActive=Ic(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:r,rank:i}=this.cursor;for(;t<this.activeRank.length&&(i-this.activeRank[t]||r-this.activeTo[t])>0;)t++;Fc(this.active,t,n),Fc(this.activeTo,t,r),Fc(this.activeRank,t,i),e&&Fc(e,t,this.cursor.from),this.minActive=Ic(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),n&&Pc(n,r)}else if(!this.cursor.value){this.to=this.endSide=1e9;break}else if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let e=this.cursor.value;if(!e.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=e,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=e.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}}if(n){this.openStart=0;for(let t=n.length-1;t>=0&&n[t]<e;t--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}};function Mc(e,t,n,r,i,a){e.goto(t),n.goto(r);let o=r+i,s=r,c=r-t,l=!!a.boundChange;for(let t=!1;;){let r=e.to+c-n.to,i=r||e.endSide-n.endSide,u=i<0?e.to+c:n.to,d=Math.min(u,o);if(e.point||n.point?(e.point&&n.point&&xc(e.point,n.point)&&Nc(e.activeForPoint(e.to),n.activeForPoint(n.to))||a.comparePoint(s,d,e.point,n.point),t=!1):(t&&a.boundChange(s),d>s&&!Nc(e.active,n.active)&&a.compareRange(s,d,e.active,n.active),l&&d<o&&(r||e.openEnd(u)!=n.openEnd(u))&&(t=!0)),u>o)break;s=u,i<=0&&e.next(),i>=0&&n.next()}}function Nc(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n]&&!xc(e[n],t[n]))return!1;return!0}function Pc(e,t){for(let n=t,r=e.length-1;n<r;n++)e[n]=e[n+1];e.pop()}function Fc(e,t,n){for(let n=e.length-1;n>=t;n--)e[n+1]=e[n];e[t]=n}function Ic(e,t){let n=-1,r=1e9;for(let i=0;i<t.length;i++)(t[i]-r||e[i].endSide-e[n].endSide)<0&&(n=i,r=t[i]);return n}function Lc(e,t,n=e.length){let r=0;for(let i=0;i<n&&i<e.length;)e.charCodeAt(i)==9?(r+=t-r%t,i++):(r++,i=ms(e,i));return r}function Rc(e,t,n,r){for(let r=0,i=0;;){if(i>=t)return r;if(r==e.length)break;i+=e.charCodeAt(r)==9?n-i%n:1,r=ms(e,r)}return r===!0?-1:e.length}for(var zc=`ͼ`,Bc=typeof Symbol>`u`?`__ͼ`:Symbol.for(zc),Vc=typeof Symbol>`u`?`__styleSet`+Math.floor(Math.random()*1e8):Symbol(`styleSet`),Hc=typeof globalThis<`u`?globalThis:typeof window<`u`?window:{},Uc=class{constructor(e,t){this.rules=[];let{finish:n}=t||{};function r(e){return/^@/.test(e)?[e]:e.split(/,\s*/)}function i(e,t,a,o){let s=[],c=/^@(\w+)\b/.exec(e[0]),l=c&&c[1]==`keyframes`;if(c&&t==null)return a.push(e[0]+`;`);for(let n in t){let o=t[n];if(/&/.test(n))i(n.split(/,\s*/).map(t=>e.map(e=>t.replace(/&/,e))).reduce((e,t)=>e.concat(t)),o,a);else if(o&&typeof o==`object`){if(!c)throw RangeError(`The value of a property (`+n+`) should be a primitive value.`);i(r(n),o,s,l)}else o!=null&&s.push(n.replace(/_.*/,``).replace(/[A-Z]/g,e=>`-`+e.toLowerCase())+`: `+o+`;`)}(s.length||l)&&a.push((n&&!c&&!o?e.map(n):e).join(`, `)+` {`+s.join(` `)+`}`)}for(let t in e)i(r(t),e[t],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=Hc[Bc]||1;return Hc[Bc]=e+1,zc+e.toString(36)}static mount(e,t,n){let r=e[Vc],i=n&&n.nonce;r?i&&r.setNonce(i):r=new Gc(e,i),r.mount(Array.isArray(t)?t:[t],e)}},Wc=new Map,Gc=class{constructor(e,t){let n=e.ownerDocument||e,r=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&r.CSSStyleSheet){let t=Wc.get(n);if(t)return e[Vc]=t;this.sheet=new r.CSSStyleSheet,Wc.set(n,this)}else this.styleTag=n.createElement(`style`),t&&this.styleTag.setAttribute(`nonce`,t);this.modules=[],e[Vc]=this}mount(e,t){let n=this.sheet,r=0,i=0;for(let t=0;t<e.length;t++){let a=e[t],o=this.modules.indexOf(a);if(o<i&&o>-1&&(this.modules.splice(o,1),i--,o=-1),o==-1){if(this.modules.splice(i++,0,a),n)for(let e=0;e<a.rules.length;e++)n.insertRule(a.rules[e],r++)}else{for(;i<o;)r+=this.modules[i++].rules.length;r+=a.rules.length,i++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let e=``;for(let t=0;t<this.modules.length;t++)e+=this.modules[t].getRules()+`
`;this.styleTag.textContent=e;let n=t.head||t;this.styleTag.parentNode!=n&&n.insertBefore(this.styleTag,n.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute(`nonce`)!=e&&this.styleTag.setAttribute(`nonce`,e)}},Kc={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},qc={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},Jc=typeof navigator<`u`&&/Mac/.test(navigator.platform),Yc=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Xc=0;Xc<10;Xc++)Kc[48+Xc]=Kc[96+Xc]=String(Xc);for(var Xc=1;Xc<=24;Xc++)Kc[Xc+111]=`F`+Xc;for(var Xc=65;Xc<=90;Xc++)Kc[Xc]=String.fromCharCode(Xc+32),qc[Xc]=String.fromCharCode(Xc);for(var Zc in Kc)qc.hasOwnProperty(Zc)||(qc[Zc]=Kc[Zc]);function Qc(e){var t=!(Jc&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||Yc&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?qc:Kc)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}function B(){var e=arguments[0];typeof e==`string`&&(e=document.createElement(e));var t=1,n=arguments[1];if(n&&typeof n==`object`&&n.nodeType==null&&!Array.isArray(n)){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r];typeof i==`string`?e.setAttribute(r,i):i!=null&&(e[r]=i)}t++}for(;t<arguments.length;t++)$c(e,arguments[t]);return e}function $c(e,t){if(typeof t==`string`)e.appendChild(document.createTextNode(t));else if(t!=null){if(t.nodeType!=null)e.appendChild(t);else if(Array.isArray(t))for(var n=0;n<t.length;n++)$c(e,t[n]);else throw RangeError(`Unsupported child node: `+t)}}var el=typeof navigator<`u`?navigator:{userAgent:``,vendor:``,platform:``},tl=typeof document<`u`?document:{documentElement:{style:{}}},nl=/Edge\/(\d+)/.exec(el.userAgent),rl=/MSIE \d/.test(el.userAgent),il=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(el.userAgent),al=!!(rl||il||nl),ol=!al&&/gecko\/(\d+)/i.test(el.userAgent),sl=!al&&/Chrome\/(\d+)/.exec(el.userAgent),cl=`webkitFontSmoothing`in tl.documentElement.style,ll=!al&&/Apple Computer/.test(el.vendor),ul=ll&&(/Mobile\/\w+/.test(el.userAgent)||el.maxTouchPoints>2),V={mac:ul||/Mac/.test(el.platform),windows:/Win/.test(el.platform),linux:/Linux|X11/.test(el.platform),ie:al,ie_version:rl?tl.documentMode||6:il?+il[1]:nl?+nl[1]:0,gecko:ol,gecko_version:ol?+(/Firefox\/(\d+)/.exec(el.userAgent)||[0,0])[1]:0,chrome:!!sl,chrome_version:sl?+sl[1]:0,ios:ul,android:/Android\b/.test(el.userAgent),webkit:cl,webkit_version:cl?+(/\bAppleWebKit\/(\d+)/.exec(el.userAgent)||[0,0])[1]:0,safari:ll,safari_version:ll?+(/\bVersion\/(\d+(\.\d+)?)/.exec(el.userAgent)||[0,0])[1]:0,tabSize:tl.documentElement.style.tabSize==null?`-moz-tab-size`:`tab-size`};function dl(e,t){for(let n in e)n==`class`&&t.class?t.class+=` `+e.class:n==`style`&&t.style?t.style+=`;`+e.style:t[n]=e[n];return t}var fl=Object.create(null);function pl(e,t,n){if(e==t)return!0;e||=fl,t||=fl;let r=Object.keys(e),i=Object.keys(t);if(r.length-(n&&r.indexOf(n)>-1?1:0)!=i.length-(n&&i.indexOf(n)>-1?1:0))return!1;for(let a of r)if(a!=n&&(i.indexOf(a)==-1||e[a]!==t[a]))return!1;return!0}function ml(e,t){for(let n=e.attributes.length-1;n>=0;n--){let r=e.attributes[n].name;t[r]??e.removeAttribute(r)}for(let n in t){let r=t[n];n==`style`?e.style.cssText=r:e.getAttribute(n)!=r&&e.setAttribute(n,r)}}function hl(e,t,n){let r=!1;if(t)for(let i in t)n&&i in n||(r=!0,i==`style`?e.style.cssText=``:e.removeAttribute(i));if(n)for(let i in n)t&&t[i]==n[i]||(r=!0,i==`style`?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return r}function gl(e){let t=Object.create(null);for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t}var _l=class{eq(e){return!1}updateDOM(e,t,n){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}},vl=(function(e){return e[e.Text=0]=`Text`,e[e.WidgetBefore=1]=`WidgetBefore`,e[e.WidgetAfter=2]=`WidgetAfter`,e[e.WidgetRange=3]=`WidgetRange`,e})(vl||={}),H=class extends bc{constructor(e,t,n,r){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=r}get heightRelevant(){return!1}static mark(e){return new yl(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new xl(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,r;if(e.isBlockGap)n=-5e8,r=4e8;else{let{start:i,end:a}=Sl(e,t);n=(i?t?-3e8:-1:5e8)-1,r=(a?t?2e8:1:-6e8)+1}return new xl(e,n,r,t,e.widget||null,!0)}static line(e){return new bl(e)}static set(e,t=!1){return z.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}};H.none=z.empty;var yl=class e extends H{constructor(e){let{start:t,end:n}=Sl(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||`span`,this.attrs=e.class&&e.attributes?dl(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||fl}eq(t){return this==t||t instanceof e&&this.tagName==t.tagName&&pl(this.attrs,t.attrs)}range(e,t=e){if(e>=t)throw RangeError(`Mark decorations may not be empty`);return super.range(e,t)}};yl.prototype.point=!1;var bl=class e extends H{constructor(e){super(-2e8,-2e8,null,e)}eq(t){return t instanceof e&&this.spec.class==t.spec.class&&pl(this.spec.attributes,t.spec.attributes)}range(e,t=e){if(t!=e)throw RangeError(`Line decoration ranges must be zero-length`);return super.range(e,t)}};bl.prototype.mapMode=xs.TrackBefore,bl.prototype.point=!0;var xl=class e extends H{constructor(e,t,n,r,i,a){super(t,n,i,e),this.block=r,this.isReplace=a,this.mapMode=r?t<=0?xs.TrackBefore:xs.TrackAfter:xs.TrackDel}get type(){return this.startSide==this.endSide?this.startSide<=0?vl.WidgetBefore:vl.WidgetAfter:vl.WidgetRange}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof e&&Cl(this.widget,t.widget)&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw RangeError(`Invalid range for replacement decoration`);if(!this.isReplace&&t!=e)throw RangeError(`Widget decorations can only have zero-length ranges`);return super.range(e,t)}};xl.prototype.point=!0;function Sl(e,t=!1){let{inclusiveStart:n,inclusiveEnd:r}=e;return n??=e.inclusive,r??=e.inclusive,{start:n??t,end:r??t}}function Cl(e,t){return e==t||!!(e&&t&&e.compare(t))}function wl(e,t,n,r=0){let i=n.length-1;i>=0&&n[i]+r>=e?n[i]=Math.max(n[i],t):n.push(e,t)}var Tl=class e extends bc{constructor(e,t,n){super(),this.tagName=e,this.attributes=t,this.rank=n}eq(t){return t==this||t instanceof e&&this.tagName==t.tagName&&pl(this.attributes,t.attributes)}static create(t){return new e(t.tagName,t.attributes||fl,t.rank==null?50:Math.max(0,Math.min(t.rank,100)))}static set(e,t=!1){return z.of(e,t)}};Tl.prototype.startSide=Tl.prototype.endSide=-1;function El(e){let t;return t=e.nodeType==11?e.getSelection?e:e.ownerDocument:e,t.getSelection()}function Dl(e,t){return t?e==t||e.contains(t.nodeType==1?t:t.parentNode):!1}function Ol(e,t){if(!t.anchorNode)return!1;try{return Dl(e,t.anchorNode)}catch{return!1}}function kl(e){return e.nodeType==3?Kl(e,0,e.nodeValue.length).getClientRects():e.nodeType==1?e.getClientRects():[]}function Al(e,t,n,r){return n?Nl(e,t,n,r,-1)||Nl(e,t,n,r,1):!1}function jl(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t}function Ml(e){return e.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName)}function Nl(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:Pl(e))){if(e.nodeName==`DIV`)return!1;let n=e.parentNode;if(!n||n.nodeType!=1)return!1;t=jl(e)+(i<0?0:1),e=n}else if(e.nodeType==1){if(e=e.childNodes[t+(i<0?-1:0)],e.nodeType==1&&e.contentEditable==`false`)return!1;t=i<0?Pl(e):0}else return!1}}function Pl(e){return e.nodeType==3?e.nodeValue.length:e.childNodes.length}function Fl(e,t){let{left:n,right:r}=e;if(n==r)return e;let i=t?n:r;return{left:i,right:i,top:e.top,bottom:e.bottom}}function Il(e){let t=e.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}function Ll(e,t){let n=t.width/e.offsetWidth,r=t.height/e.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(t.width-e.offsetWidth)<1)&&(n=1),(r>.995&&r<1.005||!isFinite(r)||Math.abs(t.height-e.offsetHeight)<1)&&(r=1),{scaleX:n,scaleY:r}}function Rl(e,t,n,r,i,a,o,s){let c=e.ownerDocument,l=c.defaultView||window;for(let u=e,d=!1;u&&!d;)if(u.nodeType==1){let e,f=u==c.body,p=1,m=1;if(f)e=Il(l);else{if(/^(fixed|sticky)$/.test(getComputedStyle(u).position)&&(d=!0),u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth){u=u.assignedSlot||u.parentNode;continue}let t=u.getBoundingClientRect();({scaleX:p,scaleY:m}=Ll(u,t)),e={left:t.left,right:t.left+u.clientWidth*p,top:t.top,bottom:t.top+u.clientHeight*m}}let h=0,g=0;if(i==`nearest`)t.top<e.top+o?(g=t.top-(e.top+o),n>0&&t.bottom>e.bottom+g&&(g=t.bottom-e.bottom+o)):t.bottom>e.bottom-o&&(g=t.bottom-e.bottom+o,n<0&&t.top-g<e.top&&(g=t.top-(e.top+o)));else{let r=t.bottom-t.top,a=e.bottom-e.top;g=(i==`center`&&r<=a?t.top+r/2-a/2:i==`start`||i==`center`&&n<0?t.top-o:t.bottom-a+o)-e.top}if(r==`nearest`?t.left<e.left+a?(h=t.left-(e.left+a),n>0&&t.right>e.right+h&&(h=t.right-e.right+a)):t.right>e.right-a&&(h=t.right-e.right+a,n<0&&t.left<e.left+h&&(h=t.left-(e.left+a))):h=(r==`center`?t.left+(t.right-t.left)/2-(e.right-e.left)/2:r==`start`==s?t.left-a:t.right-(e.right-e.left)+a)-e.left,h||g){if(f)l.scrollBy(h,g);else{let e=0,n=0;if(g){let e=u.scrollTop;u.scrollTop+=g/m,n=(u.scrollTop-e)*m}if(h){let t=u.scrollLeft;u.scrollLeft+=h/p,e=(u.scrollLeft-t)*p}t={left:t.left-e,top:t.top-n,right:t.right-e,bottom:t.bottom-n},e&&Math.abs(e-h)<1&&(r=`nearest`),n&&Math.abs(n-g)<1&&(i=`nearest`)}}if(f)break;(t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)&&(t={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)}),u=u.assignedSlot||u.parentNode}else if(u.nodeType==11)u=u.host;else break}function zl(e,t=!0){let n=e.ownerDocument,r=null,i=null;for(let a=e.parentNode;a&&!(a==n.body||(!t||r)&&i);)if(a.nodeType==1)!i&&a.scrollHeight>a.clientHeight&&(i=a),t&&!r&&a.scrollWidth>a.clientWidth&&(r=a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;return{x:r,y:i}}var Bl=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?Pl(t):0),n,Math.min(e.focusOffset,n?Pl(n):0))}set(e,t,n,r){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=r}};function Vl(e){let t=[];for(let n=e;n;n=n.nodeType==11?n.host:n.parentNode)n.nodeType==1&&t.push({node:n,left:n.scrollLeft,top:n.scrollTop});return t}function Hl(e,t=!0){for(let{node:n,left:r,top:i}of e)t&&n.scrollTop!=i&&(n.scrollTop=i),n.scrollLeft!=r&&(n.scrollLeft=r)}var Ul=null;V.safari&&V.safari_version>=26&&(Ul=!1);function Wl(e){if(e.setActive)return e.setActive();if(Ul)return e.focus(Ul);let t=Vl(e);e.focus(Ul==null?{get preventScroll(){return Ul={preventScroll:!0},!0}}:void 0),Ul||(Ul=!1,Hl(t))}var Gl;function Kl(e,t,n=t){let r=Gl||=document.createRange();return r.setEnd(e,n),r.setStart(e,t),r}function ql(e,t,n,r){let i={key:t,code:t,keyCode:n,which:n,cancelable:!0};r&&({altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}=r);let a=new KeyboardEvent(`keydown`,i);a.synthetic=!0,e.dispatchEvent(a);let o=new KeyboardEvent(`keyup`,i);return o.synthetic=!0,e.dispatchEvent(o),a.defaultPrevented||o.defaultPrevented}function Jl(e){for(;e;){if(e&&(e.nodeType==9||e.nodeType==11&&e.host))return e;e=e.assignedSlot||e.parentNode}return null}function Yl(e,t){let n=t.focusNode,r=t.focusOffset;if(!n||t.anchorNode!=n||t.anchorOffset!=r)return!1;for(r=Math.min(r,Pl(n));;)if(r){if(n.nodeType!=1)return!1;let e=n.childNodes[r-1];e.contentEditable==`false`?r--:(n=e,r=Pl(n))}else if(n==e)return!0;else r=jl(n),n=n.parentNode}function Xl(e){return e instanceof Window?e.pageYOffset>Math.max(0,e.document.documentElement.scrollHeight-e.innerHeight-4):e.scrollTop>Math.max(1,e.scrollHeight-e.clientHeight-4)}function Zl(e,t){for(let n=e,r=t;;)if(n.nodeType==3&&r>0)return{node:n,offset:r};else if(n.nodeType==1&&r>0){if(n.contentEditable==`false`)return null;n=n.childNodes[r-1],r=Pl(n)}else if(n.parentNode&&!Ml(n))r=jl(n),n=n.parentNode;else return null}function Ql(e,t){for(let n=e,r=t;;)if(n.nodeType==3&&r<n.nodeValue.length)return{node:n,offset:r};else if(n.nodeType==1&&r<n.childNodes.length){if(n.contentEditable==`false`)return null;n=n.childNodes[r],r=0}else if(n.parentNode&&!Ml(n))r=jl(n)+1,n=n.parentNode;else return null}var $l=class e{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(t,n){return new e(t.parentNode,jl(t),n)}static after(t,n){return new e(t.parentNode,jl(t)+1,n)}},U=(function(e){return e[e.LTR=0]=`LTR`,e[e.RTL=1]=`RTL`,e})(U||={}),eu=U.LTR,tu=U.RTL;function nu(e){let t=[];for(let n=0;n<e.length;n++)t.push(1<<e[n]);return t}var ru=nu(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`),iu=nu(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`),au=Object.create(null),ou=[];for(let e of[`()`,`[]`,`{}`]){let t=e.charCodeAt(0),n=e.charCodeAt(1);au[t]=n,au[n]=-t}function su(e){return e<=247?ru[e]:1424<=e&&e<=1524?2:1536<=e&&e<=1785?iu[e-1536]:1774<=e&&e<=2220?4:8192<=e&&e<=8204?256:64336<=e&&e<=65023?4:1}var cu=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/,lu=class{get dir(){return this.level%2?tu:eu}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,r){let i=-1;for(let a=0;a<e.length;a++){let o=e[a];if(o.from<=t&&o.to>=t){if(o.level==n)return a;(i<0||(r==0?e[i].level>o.level:r<0?o.from<t:o.to>t))&&(i=a)}}if(i<0)throw RangeError(`Index out of range`);return i}};function uu(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.direction!=i.direction||!uu(r.inner,i.inner))return!1}return!0}var W=[];function du(e,t,n,r,i){for(let a=0;a<=r.length;a++){let o=a?r[a-1].to:t,s=a<r.length?r[a].from:n,c=a?256:i;for(let t=o,n=c,r=c;t<s;t++){let i=su(e.charCodeAt(t));i==512?i=n:i==8&&r==4&&(i=16),W[t]=i==4?2:i,i&7&&(r=i),n=i}for(let e=o,t=c,r=c;e<s;e++){let i=W[e];if(i==128)e<s-1&&t==W[e+1]&&t&24?i=W[e]=t:W[e]=256;else if(i==64){let i=e+1;for(;i<s&&W[i]==64;)i++;let a=e&&t==8||i<n&&W[i]==8?r==1?1:8:256;for(let t=e;t<i;t++)W[t]=a;e=i-1}else i==8&&r==1&&(W[e]=1);t=i,i&7&&(r=i)}}}function fu(e,t,n,r,i){let a=i==1?2:1;for(let o=0,s=0,c=0;o<=r.length;o++){let l=o?r[o-1].to:t,u=o<r.length?r[o].from:n;for(let t=l,n,r,o;t<u;t++)if(r=au[n=e.charCodeAt(t)]){if(r<0){for(let e=s-3;e>=0;e-=3)if(ou[e+1]==-r){let n=ou[e+2],r=n&2?i:n&4?n&1?a:i:0;r&&(W[t]=W[ou[e]]=r),s=e;break}}else if(ou.length==189)break;else ou[s++]=t,ou[s++]=n,ou[s++]=c}else if((o=W[t])==2||o==1){let e=o==i;c=+!e;for(let t=s-3;t>=0;t-=3){let n=ou[t+2];if(n&2)break;if(e)ou[t+2]|=2;else{if(n&4)break;ou[t+2]|=4}}}}}function pu(e,t,n,r){for(let i=0,a=r;i<=n.length;i++){let o=i?n[i-1].to:e,s=i<n.length?n[i].from:t;for(let c=o;c<s;){let o=W[c];if(o==256){let o=c+1;for(;;)if(o==s){if(i==n.length)break;o=n[i++].to,s=i<n.length?n[i].from:t}else if(W[o]==256)o++;else break;let l=a==1,u=l==((o<t?W[o]:r)==1)?l?1:2:r;for(let t=o,r=i,a=r?n[r-1].to:e;t>c;)t==a&&(t=n[--r].from,a=r?n[r-1].to:e),W[--t]=u;c=o}else a=o,c++}}}function mu(e,t,n,r,i,a,o){let s=r%2?2:1;if(r%2==i%2)for(let c=t,l=0;c<n;){let t=!0,u=!1;if(l==a.length||c<a[l].from){let e=W[c];e!=s&&(t=!1,u=e==16)}let d=!t&&s==1?[]:null,f=t?r:r+1,p=c;run:for(;;)if(l<a.length&&p==a[l].from){if(u)break run;let m=a[l];if(!t)for(let e=m.to,t=l+1;;){if(e==n)break run;if(t<a.length&&a[t].from==e)e=a[t++].to;else if(W[e]==s)break run;else break}l++,d?d.push(m):(m.from>c&&o.push(new lu(c,m.from,f)),hu(e,m.direction==eu==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.to),p=m.to}else if(p==n||(t?W[p]!=s:W[p]==s))break;else p++;d?mu(e,c,p,r+1,i,d,o):c<p&&o.push(new lu(c,p,f)),c=p}else for(let c=n,l=a.length;c>t;){let n=!0,u=!1;if(!l||c>a[l-1].to){let e=W[c-1];e!=s&&(n=!1,u=e==16)}let d=!n&&s==1?[]:null,f=n?r:r+1,p=c;run:for(;;)if(l&&p==a[l-1].to){if(u)break run;let m=a[--l];if(!n)for(let e=m.from,n=l;;){if(e==t)break run;if(n&&a[n-1].to==e)e=a[--n].from;else if(W[e-1]==s)break run;else break}d?d.push(m):(m.to<c&&o.push(new lu(m.to,c,f)),hu(e,m.direction==eu==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.from),p=m.from}else if(p==t||(n?W[p-1]!=s:W[p-1]==s))break;else p--;d?mu(e,p,c,r+1,i,d,o):p<c&&o.push(new lu(p,c,f)),c=p}}function hu(e,t,n,r,i,a,o){let s=t%2?2:1;du(e,i,a,r,s),fu(e,i,a,r,s),pu(i,a,r,s),mu(e,i,a,t,n,r,o)}function gu(e,t,n){if(!e)return[new lu(0,0,+(t==tu))];if(t==eu&&!n.length&&!cu.test(e))return _u(e.length);if(n.length)for(;e.length>W.length;)W[W.length]=256;let r=[],i=t==eu?0:1;return hu(e,i,i,n,0,e.length,r),r}function _u(e){return[new lu(0,e,0)]}var vu=``;function yu(e,t,n,r,i){let a=r.head-e.from,o=lu.find(t,a,r.bidiLevel??-1,r.assoc),s=t[o],c=s.side(i,n);if(a==c){let e=o+=i?1:-1;if(e<0||e>=t.length)return null;s=t[o=e],a=s.side(!i,n),c=s.side(i,n)}let l=ms(e.text,a,s.forward(i,n));(l<s.from||l>s.to)&&(l=c),vu=e.text.slice(Math.min(a,l),Math.max(a,l));let u=o==(i?t.length-1:0)?null:t[o+(i?1:-1)];return u&&l==c&&u.level+ +!i<s.level?P.cursor(u.side(!i,n)+e.from,u.forward(i,n)?1:-1,u.level):P.cursor(l+e.from,s.forward(i,n)?-1:1,s.level)}function bu(e,t,n){for(let r=t;r<n;r++){let t=su(e.charCodeAt(r));if(t==1)return eu;if(t==2||t==4)return tu}return eu}var xu=F.define(),Su=F.define(),Cu=F.define(),wu=F.define(),Tu=F.define(),Eu=F.define(),Du=F.define(),Ou=F.define(),ku=F.define(),Au=F.define({combine:e=>e.some(e=>e)}),ju=F.define({combine:e=>e.some(e=>e)}),Mu=F.define(),Nu=class e{constructor(e,t,n,r,i,a=!1){this.range=e,this.y=t,this.x=n,this.yMargin=r,this.xMargin=i,this.isSnapshot=a}map(t){return t.empty?this:new e(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new e(P.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}},Pu=I.define({map:(e,t)=>e.map(t)}),Fu=I.define();function Iu(e,t,n){let r=e.facet(wu);r.length?r[0](t):window.onerror&&window.onerror(String(t),n,void 0,void 0,t)||(n?console.error(n+`:`,t):console.error(t))}var Lu=F.define({combine:e=>!e.length||e[0]}),Ru=0,zu=F.define({combine(e){return e.filter((t,n)=>{for(let r=0;r<n;r++)if(e[r].plugin==t.plugin)return!1;return!0})}}),Bu=class e{constructor(e,t,n,r,i){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=r,this.baseExtensions=i(this),this.extension=this.baseExtensions.concat(zu.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(zu.of({plugin:this,arg:e}))}static define(t,n){let{eventHandlers:r,eventObservers:i,provide:a,decorations:o}=n||{};return new e(Ru++,t,r,i,e=>{let t=[];return o&&t.push(Wu.of(t=>{let n=t.plugin(e);return n?o(n):H.none})),a&&t.push(a(e)),t})}static fromClass(t,n){return e.define((e,n)=>new t(e,n),n)}},Vu=class{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(!this.value){if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){Iu(e.state,t,`CodeMirror plugin crashed`),this.deactivate()}}else if(this.mustUpdate){let e=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(e)}catch(t){if(Iu(e.state,t,`CodeMirror plugin crashed`),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}return this}destroy(e){if(this.value?.destroy)try{this.value.destroy()}catch(t){Iu(e.state,t,`CodeMirror plugin crashed`)}}deactivate(){this.spec=this.value=null}},Hu=F.define(),Uu=F.define(),Wu=F.define(),Gu=F.define(),Ku=F.define(),qu=F.define(),Ju=F.define();function Yu(e,t){let n=e.state.facet(Ju);if(!n.length)return n;let r=n.map(t=>t instanceof Function?t(e):t),i=[];return z.spans(r,t.from,t.to,{point(){},span(e,n,r,a){let o=e-t.from,s=n-t.from,c=i;for(let e=r.length-1;e>=0;e--,a--){let n=r[e].spec.bidiIsolate,i;if(n??=bu(t.text,o,s),a>0&&c.length&&(i=c[c.length-1]).to==o&&i.direction==n)i.to=s,c=i.inner;else{let e={from:o,to:s,direction:n,inner:[]};c.push(e),c=e.inner}}}}),i}var Xu=F.define();function Zu(e){let t=0,n=0,r=0,i=0;for(let a of e.state.facet(Xu)){let o=a(e);o&&(o.left!=null&&(t=Math.max(t,o.left)),o.right!=null&&(n=Math.max(n,o.right)),o.top!=null&&(r=Math.max(r,o.top)),o.bottom!=null&&(i=Math.max(i,o.bottom)))}return{left:t,right:n,top:r,bottom:i}}var Qu=F.define(),$u=class e{constructor(e,t,n,r){this.fromA=e,this.toA=t,this.fromB=n,this.toB=r}join(t){return new e(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let r=e[t-1];if(!(r.fromA>n.toA)){if(r.toA<n.fromA)break;n=n.join(r),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(t,n){if(n.length==0)return t;let r=[];for(let i=0,a=0,o=0;;){let s=i<t.length?t[i].fromB:1e9,c=a<n.length?n[a]:1e9,l=Math.min(s,c);if(l==1e9)break;let u=l+o,d=l,f=u;for(;;)if(a<n.length&&n[a]<=d){let e=n[a+1];a+=2,d=Math.max(d,e);for(let e=i;e<t.length&&t[e].fromB<=d;e++)o=t[e].toA-t[e].toB;f=Math.max(f,e+o)}else if(i<t.length&&t[i].fromB<=d){let e=t[i++];d=Math.max(d,e.toB),f=Math.max(f,e.toA),o=e.toA-e.toB}else break;r.push(new e(u,f,l,d))}return r}},ed=class e{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=Cs.empty(this.startState.doc.length);for(let e of n)this.changes=this.changes.compose(e.changes);let r=[];this.changes.iterChangedRanges((e,t,n,i)=>r.push(new $u(e,t,n,i))),this.changedRanges=r}static create(t,n,r){return new e(t,n,r)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}},td=[],G=class{constructor(e,t,n=0){this.dom=e,this.length=t,this.flags=n,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return td}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let e=this.domAttrs;e&&ml(this.dom,e)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:``)+(this.breakAfter?`#`:``)}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let n=t;for(let t of this.children){if(t==e)return n;n+=t.length+t.breakAfter}throw RangeError(`Invalid child in posBefore`)}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t,n){return null}domPosFor(e,t){let n=jl(this.dom),r=this.length?e>0:t>0;return new $l(this.parent.dom,n+ +!!r,e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof id)return e;return null}static get(e){return e.cmTile}},nd=class extends G{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let t=this.dom,n=null,r,i=e?.node==t?e:null,a=0;for(let o of this.children){if(o.sync(e),a+=o.length+o.breakAfter,r=n?n.nextSibling:t.firstChild,i&&r!=o.dom&&(i.written=!0),o.dom.parentNode==t)for(;r&&r!=o.dom;)r=rd(r);else t.insertBefore(o.dom,r);n=o.dom}for(r=n?n.nextSibling:t.firstChild,i&&r&&(i.written=!0);r;)r=rd(r);this.length=a}};function rd(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var id=class extends nd{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=G.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],n=this,r=0,i=0;;)if(r==n.children.length){if(!t.length)return;n=n.parent,n.breakAfter&&i++,r=t.pop()}else{let a=n.children[r++];if(a instanceof ad)t.push(r),n=a,r=0;else{let t=i+a.length,n=e(a,i);if(n!==void 0)return n;i=t+a.breakAfter}}}resolveBlock(e,t){let n,r=-1,i,a=-1;if(this.blockTiles((o,s)=>{let c=s+o.length;if(e>=s&&e<=c){if(o.isWidget()&&t>=-1&&t<=1){if(o.flags&32)return!0;o.flags&16&&(n=void 0)}(s<e||e==c&&(t<-1?o.length:o.covers(1)))&&(!n||!o.isWidget()&&n.isWidget())&&(n=o,r=e-s),(c>e||e==s&&(t>1?o.length:o.covers(-1)))&&(!i||!o.isWidget()&&i.isWidget())&&(i=o,a=e-s)}}),!n&&!i)throw Error(`No tile at position `+e);return n&&t<0||!i?{tile:n,offset:r}:{tile:i,offset:a}}},ad=class e extends nd{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},od=class e extends nd{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(t,n,r){let i=new e(n||document.createElement(`div`),t);return(!n||!r)&&(i.flags|=4),i}get domAttrs(){return this.attrs}resolveInline(e,t,n){let r=null,i=-1,a=null,o=-1;function s(e,c){for(let l=0,u=0;l<e.children.length&&u<=c;l++){let d=e.children[l],f=u+d.length;f>=c&&(d.isComposite()?s(d,c-u):(!a||a.isHidden&&(t>0&&!(a.flags&32)||n&&cd(a,d)))&&(f>c||d.flags&32&&t<=1)?(a=d,o=c-u):(u<c||d.flags&16&&!d.isHidden&&t>=-1)&&(r=d,i=c-u)),u=f}}s(this,e);let c=(t<0?r:a)||r||a;return c?{tile:c,offset:c==r?i:o}:null}coordsIn(e,t,n){let r=this.resolveInline(e,t,!0);return r?r.tile.coordsIn(Math.max(0,r.offset),t,n):sd(this)}domIn(e,t){let n=this.resolveInline(e,t);if(n){let{tile:e,offset:r}=n;if(this.dom.contains(e.dom))return e.isText()?new $l(e.dom,Math.min(e.dom.nodeValue.length,r)):e.domPosFor(r,e.flags&16?1:e.flags&32?-1:t);let i=n.tile.parent,a=!1;for(let e of i.children){if(a)return new $l(e.dom,0);e==n.tile&&(a=!0)}}return new $l(this.dom,0)}};function sd(e){let t=e.dom.lastChild;if(!t)return e.dom.getBoundingClientRect();let n=kl(t);return n[n.length-1]||null}function cd(e,t){let n=e.coordsIn(0,1),r=t.coordsIn(0,1);return n&&r&&r.top<n.bottom}var ld=class e extends nd{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},ud=class e extends G{constructor(e,t){super(e,t.length),this.text=t}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t,n){let r=this.dom.nodeValue.length;e>r&&(e=r);let i=e,a=e,o=0;e==0&&t<0||e==r&&t>=0?V.chrome||V.gecko||(e?(i--,o=1):a<r&&(a++,o=-1)):t<0?i--:a<r&&a++;let s=Kl(this.dom,i,a).getClientRects();if(!s.length)return null;let c=s[(o?o<0:t>=0)?0:s.length-1];return V.safari&&!o&&c.width==0&&(c=Array.prototype.find.call(s,e=>e.width)||c),n==null?c:Fl(c,(o?o>0:t<0)==n)}static of(t,n){let r=new e(n||document.createTextNode(t),t);return n||(r.flags|=2),r}},dd=class e extends G{constructor(e,t,n,r){super(e,t,r),this.widget=n}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,n){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;if(n)return Fl(this.dom.getBoundingClientRect(),this.length?e==0:t<=0);{let t=this.dom.getClientRects(),n=null;if(!t.length)return null;let r=this.flags&16?!0:this.flags&32?!1:e>0;for(let i=r?t.length-1:0;n=t[i],!(e>0?i==0:i==t.length-1||n.top<n.bottom);i+=r?-1:1);return Fl(n,!r)}}get overrideDOMText(){if(!this.length)return N.empty;let{root:e}=this;if(!e)return N.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,n,r,i,a){return a||(a=t.toDOM(n),t.editable||(a.contentEditable=`false`)),new e(a,r,t,i)}},fd=class extends G{constructor(e){let t=document.createElement(`img`);t.className=`cm-widgetBuffer`,t.setAttribute(`aria-hidden`,`true`),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return N.empty}coordsIn(e,t,n){let r=this.dom.getBoundingClientRect();return n==null?r:Fl(r,t>0==n)}},pd=class{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,n){let{tile:r,index:i,beforeBreak:a,parents:o}=this;for(;e||t>0;)if(!r.isComposite()){let t=r.length;if(i<t&&e){let a=Math.min(e,t-i);n&&n.skip(r,i,i+a),e-=a,i+=a}if(i==t)a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++;else if(!e)break}else if(a){if(!e)break;n&&n.break(),e--,a=!1}else if(i==r.children.length){if(!e&&!o.length)break;n&&n.leave(r),a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++}else{let s=r.children[i],c=s.breakAfter;(t>0?s.length<=e:s.length<e)&&(!n||n.skip(s,0,s.length)!==!1||!s.isComposite)?(a=!!c,i++,e-=s.length):(o.push({tile:r,index:i}),r=s,i=0,n&&s.isComposite()&&n.enter(s))}return this.tile=r,this.index=i,this.beforeBreak=a,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}},md=class{constructor(e,t,n,r){this.from=e,this.to=t,this.wrapper=n,this.rank=r}},hd=class{constructor(e,t,n){this.cache=e,this.root=t,this.blockWrappers=n,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,n,r){this.flushBuffer();let i=this.ensureMarks(t,n),a=i.lastChild;if(a&&a.isText()&&!(a.flags&8)&&a.length+e.length<512){this.cache.reused.set(a,2);let t=i.children[i.children.length-1]=new ud(a.dom,a.text+e);t.parent=i}else i.append(r||ud.of(e,this.cache.find(ud)?.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let n=this.curLine;n.dom!=t.line.dom&&(n.setDOM(this.cache.reused.has(t.line)?Td(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let r=n;for(let e=t.marks.length-1;e>=0;e--){let n=t.marks[e],i=r.lastChild;if(i instanceof ld&&i.mark.eq(n.mark))i.dom!=n.dom&&i.setDOM(Td(n.dom)),r=i;else{if(this.cache.reused.get(n)){let e=G.get(n.dom);e&&e.setDOM(Td(n.dom))}let e=ld.of(n.mark,n.dom);r.append(e),r=e}this.cache.reused.set(n,2)}let i=G.get(e.text);i&&this.cache.reused.set(i,2);let a=new ud(e.text,e.text.nodeValue);a.flags|=8,this.pos=e.range.toB,r.append(a)}addInlineWidget(e,t,n){let r=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);r||this.flushBuffer();let i=this.ensureMarks(t,n);!r&&!(e.flags&16)&&i.append(this.getBuffer(1)),i.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,n){this.flushBuffer(),this.ensureMarks(t,n).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let t=this.afterWidget||this.lastBlock;t.length+=e,this.pos+=e}addLineStart(e,t){e||=Sd;let n=od.start(e,t||this.cache.find(od)?.dom,!!t);this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){let n=this.curLine;for(let r=e.length-1;r>=0;r--){let i=e[r],a;if(t>0&&(a=n.lastChild)&&a instanceof ld&&a.mark.eq(i))n=a,t--;else{let e=ld.of(i,this.cache.find(ld,e=>e.mark.eq(i))?.dom);n.append(e),n=e,t=0}}return n}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!bd(this.curLine,!1)||e.dom.nodeName!=`BR`&&e.isWidget()&&!(V.ios&&bd(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(Dd,0,32)||new dd(Dd.toDOM(),0,Dd,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=e.rank*102+e.value.rank,n=new md(e.from,e.to,e.value,t),r=this.wrappers.length;for(;r>0&&(this.wrappers[r-1].rank-n.rank||this.wrappers[r-1].to-n.to)<0;)r--;this.wrappers.splice(r,0,n)}this.wrapperPos=this.pos}getBlockPos(){this.updateBlockWrappers();let e=this.root;for(let t of this.wrappers){let n=e.lastChild;if(t.from<this.pos&&n instanceof ad&&n.wrapper.eq(t.wrapper))e=n;else{let n=ad.of(t.wrapper,this.cache.find(ad,e=>e.wrapper.eq(t.wrapper))?.dom);e.append(n),e=n}}return e}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let t=2|(e<0?16:32),n=this.cache.find(fd,void 0,1);return n&&(n.flags=t),n||new fd(t)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}},gd=class{constructor(e){this.skipCount=0,this.text=``,this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text=``,this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:t,lineBreak:n,done:r}=this.cursor.next(this.skipCount);if(this.skipCount=0,r)throw Error(`Ran out of text content when drawing inline views`);this.text=t;let i=this.textOff=Math.min(e,t.length);return n?null:t.slice(0,i)}let t=Math.min(this.text.length,this.textOff+e),n=this.text.slice(this.textOff,t);return this.textOff=t,n}},_d=[dd,od,ud,ld,fd,ad,id];for(let e=0;e<_d.length;e++)_d[e].bucket=e;var vd=class{constructor(e){this.view=e,this.buckets=_d.map(()=>[]),this.index=_d.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,n=this.buckets[t];n.length<6?n.push(e):n[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,n=2){let r=e.bucket,i=this.buckets[r],a=this.index[r];for(let e=0;e<i.length;e++){let o=(e+a)%i.length,s=i[o];if((!t||t(s))&&!this.reused.has(s))return i.splice(o,1),o<a&&this.index[r]--,this.reused.set(s,n),s}return null}findWidget(e,t,n){let r=this.buckets[0];if(r.length)for(let i=0,a=0;;i++){if(i==r.length){if(a)return null;a=1,i=0}let o=r[i];if(!this.reused.has(o)&&(a==0?o.widget.compare(e):o.widget.constructor==e.constructor&&e.updateDOM(o.dom,this.view,o.widget)))return r.splice(i,1),i<this.index[0]&&this.index[0]--,o.widget==e&&o.length==t&&(o.flags&497)==n?(this.reused.set(o,1),o):(this.reused.set(o,2),new dd(o.dom,t,e,o.flags&-498|n))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}},yd=class{constructor(e,t,n,r,i){this.view=e,this.decorations=r,this.disallowBlockEffectsFor=i,this.openWidget=!1,this.openMarks=0,this.cache=new vd(e),this.text=new gd(e.state.doc),this.builder=new hd(this.cache,new id(e,e.contentDOM),z.iter(n)),this.cache.reused.set(t,2),this.old=new pd(t),this.reuseWalker={skip:(e,t,n)=>{if(this.cache.add(e),e.isComposite())return!1},enter:e=>this.cache.add(e),leave:()=>{},break:()=>{}}}run(e,t){let n=t&&this.getCompositionContext(t.text);for(let r=0,i=0,a=0;;){let o=a<e.length?e[a++]:null,s=o?o.fromA:this.old.root.length;if(s>r){let e=s-r;this.preserve(e,!a,!o),r=s,i+=e}if(!o)break;t&&o.fromA<=t.range.fromA&&o.toA>=t.range.toA?(this.forward(o.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(i,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,n),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,o.toA),this.emit(t.range.toB,o.toB)):(this.forward(o.fromA,o.toA),this.emit(i,o.toB)),i=o.toB,r=o.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,n){let r=wd(this.old),i=this.openMarks;this.old.advance(e,n?1:-1,{skip:(e,t,n)=>{if(e.isWidget()){if(this.openWidget)this.builder.continueWidget(n-t);else{let a=n>0||t<e.length?dd.of(e.widget,this.view,n-t,e.flags&496,this.cache.maybeReuse(e)):this.cache.reuse(e);a.flags&256?(a.flags&=-2,this.builder.addBlockWidget(a)):(this.builder.ensureLine(null),this.builder.addInlineWidget(a,r,i),i=r.length)}}else if(e.isText())this.builder.ensureLine(null),!t&&n==e.length&&!this.cache.reused.has(e)?this.builder.addText(e.text,r,i,this.cache.reuse(e)):(this.cache.add(e),this.builder.addText(e.text.slice(t,n),r,i)),i=r.length;else if(e.isLine())e.flags&=-2,this.cache.reused.set(e,1),this.builder.addLine(e);else if(e instanceof fd)this.cache.add(e);else if(e instanceof ld)this.builder.ensureLine(null),this.builder.addMark(e,r,i),this.cache.reused.set(e,1),i=r.length;else return!1;this.openWidget=!1},enter:e=>{e.isLine()?this.builder.addLineStart(e.attrs,this.cache.maybeReuse(e)):(this.cache.add(e),e instanceof ld&&r.unshift(e.mark)),this.openWidget=!1},leave:e=>{e.isLine()?r.length&&=i=0:e instanceof ld&&(r.shift(),i=Math.min(i,r.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let n=null,r=this.builder,i=-1,a=z.spans(this.decorations,e,t,{point:(e,t,a,o,s,c)=>{if(a instanceof xl){if(this.disallowBlockEffectsFor[c]){if(a.block)throw RangeError(`Block decorations may not be specified via plugins`);if(t>this.view.state.doc.lineAt(e).to)throw RangeError(`Decorations that replace line breaks may not be specified via plugins`)}if(i=o.length,s>o.length)r.continueWidget(t-e);else{let i=a.widget||(a.block?Ed.block:Ed.inline),c=xd(a),l=this.cache.findWidget(i,t-e,c)||dd.of(i,this.view,t-e,c);a.block?(a.startSide>0&&r.addLineStartIfNotCovered(n),r.addBlockWidget(l)):(r.ensureLine(n),r.addInlineWidget(l,o,s))}n=null}else n=Cd(n,a);t>e&&this.text.skip(t-e)},span:(e,t,a,o)=>{for(let i=e;i<t;){let s=this.text.next(Math.min(512,t-i));s==null?(r.addLineStartIfNotCovered(n),r.addBreak(),i++):(r.ensureLine(n),r.addText(s,a,i==e?o:a.length),i+=s.length),n=null}i=a.length}});i>-1&&(this.openWidget=a>i),this.openWidget||r.addLineStartIfNotCovered(n),this.openMarks=a}forward(e,t,n=1){t-e<=10?this.old.advance(t-e,n,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,n,this.reuseWalker))}getCompositionContext(e){let t=[],n=null;for(let r=e.parentNode;;r=r.parentNode){let e=G.get(r);if(r==this.view.contentDOM)break;e instanceof ld?t.push(e):e?.isLine()?n=e:e instanceof ad||(r.nodeName==`DIV`&&!n&&r!=this.view.contentDOM?n=new od(r,Sd):n||t.push(ld.of(new yl({tagName:r.nodeName.toLowerCase(),attributes:gl(r)}),r)))}return{line:n,marks:t}}};function bd(e,t){let n=e=>{for(let r of e.children)if((t?r.isText():r.length)||n(r))return!0;return!1};return n(e)}function xd(e){let t=e.isReplace?(e.startSide<0?64:0)|(e.endSide>0?128:0):e.startSide>0?32:16;return e.block&&(t|=256),t}var Sd={class:`cm-line`};function Cd(e,t){let n=t.spec.attributes,r=t.spec.class;return!n&&!r?e:(e||={class:`cm-line`},n&&dl(n,e),r&&(e.class+=` `+r),e)}function wd(e){let t=[];for(let n=e.parents.length;n>1;n--){let r=n==e.parents.length?e.tile:e.parents[n].tile;r instanceof ld&&t.push(r.mark)}return t}function Td(e){let t=G.get(e);return t&&t.setDOM(e.cloneNode()),e}var Ed=class extends _l{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}};Ed.inline=new Ed(`span`),Ed.block=new Ed(`div`);var Dd=new class extends _l{toDOM(){return document.createElement(`br`)}get isHidden(){return!0}get editable(){return!0}},Od=class{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=H.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new id(e,e.contentDOM),this.updateInner([new $u(0,0,0,e.state.doc.length)],null)}update(e){let t=e.changedRanges;this.minWidth>0&&t.length&&(t.every(({fromA:e,toA:t})=>t<this.minWidthFrom||e>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let n=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(this.domChanged?.newSel?n=this.domChanged.newSel.head:!zd(e.changes,this.hasComposition)&&!e.selectionSet&&(n=e.state.selection.main.head));let r=n>-1?Md(this.view,e.changes,n):null;if(this.domChanged=null,this.hasComposition){let{from:n,to:r}=this.hasComposition;t=new $u(n,r,e.changes.mapPos(n,-1),e.changes.mapPos(r,1)).addToSet(t.slice())}this.hasComposition=r?{from:r.range.fromB,to:r.range.toB}:null,(V.ie||V.chrome)&&!r&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let i=this.decorations,a=this.blockWrappers;this.updateDeco();let o=Fd(i,this.decorations,e.changes);o.length&&(t=$u.extendWithRanges(t,o));let s=Ld(a,this.blockWrappers,e.changes);return s.length&&(t=$u.extendWithRanges(t,s)),r&&!t.some(e=>e.fromA<=r.range.fromA&&e.toA>=r.range.toA)&&(t=r.range.addToSet(t.slice())),this.tile.flags&2&&t.length==0?!1:(this.updateInner(t,r),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:n}=this.view;n.ignore(()=>{if(t||e.length){let n=this.tile,r=new yd(this.view,n,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&G.get(t.text)&&r.cache.reused.set(G.get(t.text),2),this.tile=r.run(e,t),kd(n,r.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+`px`,this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+`px`:``;let r=V.chrome||V.ios?{node:n.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(r),r&&(r.written||n.selectionRange.focusNode!=r.node||!this.tile.dom.contains(r.node))&&(this.forceSelection=!0),this.tile.dom.style.height=``});let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let e of this.tile.children)e.isWidget()&&e.widget instanceof Bd&&r.push(e.dom);n.updateGaps(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let e of t.effects)e.is(Fu)&&(this.editContextFormatting=e.value)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:n}=this.tile,r=this.view.root.activeElement,i=r==n,a=!i&&!(this.view.state.facet(Lu)||n.tabIndex>-1)&&Ol(n,this.view.observer.selectionRange)&&!(r&&n.contains(r));if(!(i||t||a))return;let o=this.forceSelection;this.forceSelection=!1;let s=this.view.state.selection.main,c,l;if(s.empty?l=c=this.inlineDOMNearPos(s.anchor,s.assoc||1):(l=this.inlineDOMNearPos(s.head,s.head==s.from?1:-1),c=this.inlineDOMNearPos(s.anchor,s.anchor==s.from?1:-1)),V.gecko&&s.empty&&!this.hasComposition&&Ad(c)){let e=document.createTextNode(``);this.view.observer.ignore(()=>c.node.insertBefore(e,c.node.childNodes[c.offset]||null)),c=l=new $l(e,0),o=!0}let u=this.view.observer.selectionRange;(o||!u.focusNode||(!Al(c.node,c.offset,u.anchorNode,u.anchorOffset)||!Al(l.node,l.offset,u.focusNode,u.focusOffset))&&!this.suppressWidgetCursorChange(u,s))&&(this.view.observer.ignore(()=>{V.android&&V.chrome&&n.contains(u.focusNode)&&Rd(u.focusNode,n)&&(n.blur(),n.focus({preventScroll:!0}));let e=El(this.view.root);if(e){if(s.empty){if(V.gecko){let e=Nd(c.node,c.offset);if(e&&e!=3){let t=(e==1?Zl:Ql)(c.node,c.offset);t&&(c=new $l(t.node,t.offset))}}e.collapse(c.node,c.offset),s.bidiLevel!=null&&e.caretBidiLevel!==void 0&&(e.caretBidiLevel=s.bidiLevel)}else if(e.extend){e.collapse(c.node,c.offset);try{e.extend(l.node,l.offset)}catch{}}else{let t=document.createRange();s.anchor>s.head&&([c,l]=[l,c]),t.setEnd(l.node,l.offset),t.setStart(c.node,c.offset),e.removeAllRanges(),e.addRange(t)}}a&&this.view.root.activeElement==n&&(n.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(c,l)),this.impreciseAnchor=c.precise?null:new $l(u.anchorNode,u.anchorOffset),this.impreciseHead=l.precise?null:new $l(u.focusNode,u.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Al(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=El(e.root),{anchorNode:r,anchorOffset:i}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let a=this.lineAt(t.head,t.assoc);if(!a)return;let o=a.posAtStart;if(t.head==o||t.head==o+a.length)return;let s=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!s||!c||s.bottom>c.top)return;let l=this.domAtPos(t.head+t.assoc,t.assoc);n.collapse(l.node,l.offset),n.modify(`move`,t.assoc<0?`forward`:`backward`,`lineboundary`),e.observer.readSelectionRange();let u=e.observer.selectionRange;e.docView.posFromDOM(u.anchorNode,u.anchorOffset)!=t.from&&n.collapse(r,i)}posFromDOM(e,t){let n=this.tile.nearest(e);if(!n)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let r=n.posAtStart;if(n.isComposite()){let i;if(e==n.dom)i=n.dom.childNodes[t];else{let r=Pl(e)==0?0:t==0?-1:1;for(;;){let t=e.parentNode;if(t==n.dom)break;r==0&&t.firstChild!=t.lastChild&&(r=e==t.firstChild?-1:1),e=t}i=r<0?e:e.nextSibling}if(i==n.dom.firstChild)return r;for(;i&&!G.get(i);)i=i.nextSibling;if(!i)return r+n.length;for(let e=0,t=r;;e++){let r=n.children[e];if(r.dom==i)return t;t+=r.length+r.breakAfter}}else if(n.isText())return e==n.dom?r+t:r+(t?n.length:0);else return r}domAtPos(e,t){let{tile:n,offset:r}=this.tile.resolveBlock(e,t);return n.isWidget()?n.domPosFor(r,t):n.domIn(r,t)}inlineDOMNearPos(e,t){let n,r=-1,i=!1,a,o=-1,s=!1;return this.tile.blockTiles((t,c)=>{if(t.isWidget()){if(t.flags&32&&c>=e)return!0;t.flags&16&&(i=!0)}else{let l=c+t.length;if(c<=e&&(n=t,r=e-c,i=l<e),l>=e&&!a&&(a=t,o=e-c,s=c>e),c>e&&a)return!0}}),!n&&!a?this.domAtPos(e,t):(i&&a?n=null:s&&n&&(a=null),n&&t<0||!a?n.domIn(r,t):a.domIn(o,t))}coordsAt(e,t,n){let{tile:r,offset:i}=this.tile.resolveBlock(e,t);return r.isWidget()?r.widget instanceof Bd?null:r.coordsInWidget(i,t,!0):r.coordsIn(i,t,n)}lineAt(e,t){let{tile:n}=this.tile.resolveBlock(e,t);return n.isLine()?n:null}coordsForChar(e){let{tile:t,offset:n}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;function r(e,t){if(e.isComposite())for(let n of e.children){if(n.length>=t){let e=r(n,t);if(e)return e}if(t-=n.length,t<0)break}else if(e.isText()&&t<e.length){let n=ms(e.text,t);if(n==t)return null;let r=Kl(e.dom,t,n).getClientRects();for(let e=0;e<r.length;e++){let t=r[e];if(e==r.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}return r(t,n)}measureVisibleLineHeights(e){let t=[],{from:n,to:r}=e,i=this.view.contentDOM.clientWidth,a=i>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,s=this.view.textDirection==U.LTR,c=0,l=(e,u,d)=>{for(let f=0;f<e.children.length&&!(u>r);f++){let r=e.children[f],p=u+r.length,m=r.dom.getBoundingClientRect(),{height:h}=m;if(d&&!f&&(c+=m.top-d.top),r instanceof ad)p>n&&l(r,u,m);else if(u>=n&&(c>0&&t.push(-c),t.push(h+c),c=0,a)){let e=r.dom.lastChild,t=e?kl(e):[];if(t.length){let e=t[t.length-1],n=s?e.right-m.left:m.right-e.left;n>o&&(o=n,this.minWidth=i,this.minWidthFrom=u,this.minWidthTo=p)}}d&&f==e.children.length-1&&(c+=d.bottom-m.bottom),u=p+r.breakAfter}};return l(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return getComputedStyle(t.dom).direction==`rtl`?U.RTL:U.LTR}measureTextSize(){let e=this.tile.blockTiles(e=>{if(e.isLine()&&e.children.length&&e.length<=20){let t=0,n;for(let r of e.children){if(!r.isText()||/[^ -~]/.test(r.text))return;let e=kl(r.dom);if(e.length!=1)return;t+=e[0].width,n=e[0].height}if(t)return{lineHeight:e.dom.getBoundingClientRect().height,charWidth:t/e.length,textHeight:n}}});if(e)return e;let t=document.createElement(`div`),n,r,i;return t.className=`cm-line`,t.style.width=`99999px`,t.style.position=`absolute`,t.textContent=`abc def ghi jkl mno pqr stu`,this.view.observer.ignore(()=>{this.tile.dom.appendChild(t);let e=kl(t.firstChild)[0];n=t.getBoundingClientRect().height,r=e&&e.width?e.width/27:7,i=e&&e.height?e.height:n,t.remove()}),{lineHeight:n,charWidth:r,textHeight:i}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,r=0;;r++){let i=r==t.viewports.length?null:t.viewports[r],a=i?i.from-1:this.view.state.doc.length;if(a>n){let r=(t.lineBlockAt(a).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(H.replace({widget:new Bd(r),block:!0,inclusive:!0,isBlockGap:!0}).range(n,a))}if(!i)break;n=i.to+1}return H.set(e)}updateDeco(){let e=1,t=this.view.state.facet(Wu).map(t=>(this.dynamicDecorationMap[e++]=typeof t==`function`)?t(this.view):t),n=!1,r=this.view.state.facet(Ku).map((e,t)=>{let r=typeof e==`function`;return r&&(n=!0),r?e(this.view):e});for(r.length&&(this.dynamicDecorationMap[e++]=n,t.push(z.join(r))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(Gu).map(e=>typeof e==`function`?e(this.view):e)}scrollIntoView(e){if(e.isSnapshot){let t=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=t.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let t of this.view.state.facet(Mu))try{if(t(this.view,e.range,e))return!0}catch(e){Iu(this.view.state,e,`scroll handler`)}let{range:t}=e,n=this.coordsAt(t.head,t.assoc||(t.head>t.anchor?-1:1)),r;if(!n)return;!t.empty&&(r=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,r.left),top:Math.min(n.top,r.top),right:Math.max(n.right,r.right),bottom:Math.max(n.bottom,r.bottom)});let i=Zu(this.view),a={left:n.left-i.left,top:n.top-i.top,right:n.right+i.right,bottom:n.bottom+i.bottom},{offsetWidth:o,offsetHeight:s}=this.view.scrollDOM;if(Rl(this.view.scrollDOM,a,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,o),-o),Math.max(Math.min(e.yMargin,s),-s),this.view.textDirection==U.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(n.top>window.visualViewport.offsetTop+window.visualViewport.height||n.bottom<window.visualViewport.offsetTop)){let e=this.view.docView.lineAt(t.head,1);if(e){let t=Vl(e.dom);e.dom.scrollIntoView({block:`nearest`}),Hl(t,!1)}}}lineHasWidget(e){let t=e=>e.isWidget()||e.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){kd(this.tile)}};function kd(e,t){let n=t?.get(e);if(n!=1){n??e.destroy();for(let n of e.children)kd(n,t)}}function Ad(e){return e.node.nodeType==1&&e.node.firstChild&&(e.offset==0||e.node.childNodes[e.offset-1].contentEditable==`false`)&&(e.offset==e.node.childNodes.length||e.node.childNodes[e.offset].contentEditable==`false`)}function jd(e,t){let n=e.observer.selectionRange;if(!n.focusNode)return null;let r=Zl(n.focusNode,n.focusOffset),i=Ql(n.focusNode,n.focusOffset),a=r||i;if(i&&r&&i.node!=r.node){let t=G.get(i.node);if(!t||t.isText()&&t.text!=i.node.nodeValue)a=i;else if(e.docView.lastCompositionAfterCursor){let e=G.get(r.node);!e||e.isText()&&e.text!=r.node.nodeValue||(a=i)}}if(e.docView.lastCompositionAfterCursor=a!=r,!a)return null;let o=t-a.offset;return{from:o,to:o+a.node.nodeValue.length,node:a.node}}function Md(e,t,n){let r=jd(e,n);if(!r)return null;let{node:i,from:a,to:o}=r,s=i.nodeValue;if(/[\n\r]/.test(s)||e.state.doc.sliceString(r.from,r.to)!=s)return null;let c=t.invertedDesc;return{range:new $u(c.mapPos(a),c.mapPos(o),a,o),text:i}}function Nd(e,t){return e.nodeType==1?(t&&e.childNodes[t-1].contentEditable==`false`?1:0)|(t<e.childNodes.length&&e.childNodes[t].contentEditable==`false`?2:0):0}var Pd=class{constructor(){this.changes=[]}compareRange(e,t){wl(e,t,this.changes)}comparePoint(e,t){wl(e,t,this.changes)}boundChange(e){wl(e,e,this.changes)}};function Fd(e,t,n){let r=new Pd;return z.compare(e,t,n,r),r.changes}var Id=class{constructor(){this.changes=[]}compareRange(e,t){wl(e,t,this.changes)}comparePoint(){}boundChange(e){wl(e,e,this.changes)}};function Ld(e,t,n){let r=new Id;return z.compare(e,t,n,r),r.changes}function Rd(e,t){for(let n=e;n&&n!=t;n=n.assignedSlot||n.parentNode)if(n.nodeType==1&&n.contentEditable==`false`)return!0;return!1}function zd(e,t){let n=!1;return t&&e.iterChangedRanges((e,r)=>{e<t.to&&r>t.from&&(n=!0)}),n}var Bd=class extends _l{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement(`div`);return e.className=`cm-gap`,this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+`px`,!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}};function Vd(e,t,n=1){let r=e.charCategorizer(t),i=e.doc.lineAt(t),a=t-i.from;if(i.length==0)return P.cursor(t);a==0?n=1:a==i.length&&(n=-1);let o=a,s=a;n<0?o=ms(i.text,a,!1):s=ms(i.text,a);let c=r(i.text.slice(o,s));for(;o>0;){let e=ms(i.text,o,!1);if(r(i.text.slice(e,o))!=c)break;o=e}for(;s<i.length;){let e=ms(i.text,s);if(r(i.text.slice(s,e))!=c)break;s=e}return P.undirectionalRange(o+i.from,s+i.from)}function Hd(e,t,n,r,i){let a=Math.round((r-t.left)*e.defaultCharacterWidth);if(e.lineWrapping&&n.height>e.defaultLineHeight*1.5){let t=e.viewState.heightOracle.textHeight,r=Math.floor((i-n.top-(e.defaultLineHeight-t)*.5)/t);a+=r*e.viewState.heightOracle.lineLength}let o=e.state.sliceDoc(n.from,n.to);return n.from+Rc(o,a,e.state.tabSize)}function Ud(e,t,n){let r=e.lineBlockAt(t);if(Array.isArray(r.type)){let e;for(let i of r.type){if(i.from>t)break;if(!(i.to<t)){if(i.from<t&&i.to>t)return i;(!e||i.type==vl.Text&&(e.type!=i.type||(n<0?i.from<t:i.to>t)))&&(e=i)}}return e||r}return r}function Wd(e,t,n,r){let i=Ud(e,t.head,t.assoc||-1),a=!r||i.type!=vl.Text||!(e.lineWrapping||i.widgetLineBreaks)?null:e.coordsAtPos(t.assoc<0&&t.head>i.from?t.head-1:t.head);if(a){let t=e.dom.getBoundingClientRect(),r=e.textDirectionAt(i.from),o=e.posAtCoords({x:n==(r==U.LTR)?t.right-1:t.left+1,y:(a.top+a.bottom)/2});if(o!=null)return P.cursor(o,n?-1:1)}return P.cursor(n?i.to:i.from,n?-1:1)}function Gd(e,t,n,r){let i=e.state.doc.lineAt(t.head),a=e.bidiSpans(i),o=e.textDirectionAt(i.from);for(let s=t,c=null;;){let t=yu(i,a,o,s,n),l=vu;if(!t){if(i.number==(n?e.state.doc.lines:1))return s;l=`
`,i=e.state.doc.line(i.number+(n?1:-1)),a=e.bidiSpans(i),t=e.visualLineSide(i,!n)}if(!c){if(!r)return t;c=r(l)}else if(!c(l))return s;s=t}}function Kd(e,t,n){let r=e.state.charCategorizer(t),i=r(n);return e=>{let t=r(e);return i==L.Space&&(i=t),i==t}}function qd(e,t,n,r){let i=t.head,a=n?1:-1;if(i==(n?e.state.doc.length:0))return P.cursor(i,t.assoc);let o=t.goalColumn,s,c=e.contentDOM.getBoundingClientRect(),l=e.coordsAtPos(i,t.assoc||((t.empty?n:t.head==t.from)?1:-1)),u=e.documentTop;if(l)o??=l.left-c.left,s=a<0?l.top:l.bottom;else{let t=e.viewState.lineBlockAt(i);o??=Math.min(c.right-c.left,e.defaultCharacterWidth*(i-t.from)),s=(a<0?t.top:t.bottom)+u}let d=c.left+o,f=e.viewState.heightOracle.textHeight>>1,p=r??f;for(let t=0;;t+=f){let r=s+(p+t)*a,i=Qd(e,{x:d,y:r},!1,a);if(n?r>c.bottom:r<c.top)return P.cursor(i.pos,i.assoc);let l=e.coordsAtPos(i.pos,i.assoc),u=l?(l.top+l.bottom)/2:0;if(!l||(n?u>s:u<s))return P.cursor(i.pos,i.assoc,void 0,o)}}function Jd(e,t,n){for(;;){let r=0;for(let i of e)i.between(t-1,t+1,(e,i,a)=>{if(t>e&&t<i){let a=r||n||(t-e<i-t?-1:1);t=a<0?e:i,r=a}});if(!r)return t}}function Yd(e,t){let n=null;for(let r=0;r<t.ranges.length;r++){let i=t.ranges[r],a=null;if(i.empty){let t=Jd(e,i.from,0);t!=i.from&&(a=P.cursor(t,-1))}else{let t=Jd(e,i.from,-1),n=Jd(e,i.to,1);(t!=i.from||n!=i.to)&&(a=i.undirectional?P.undirectionalRange(i.from,i.to):P.range(i.from==i.anchor?t:n,i.from==i.head?t:n))}a&&(n||=t.ranges.slice(),n[r]=a)}return n?P.create(n,t.mainIndex):t}function Xd(e,t,n){let r=Jd(e.state.facet(qu).map(t=>t(e)),n.from,t.head>n.from?-1:1);return r==n.from?n:P.cursor(r,r<n.from?1:-1)}var Zd=class{constructor(e,t){this.pos=e,this.assoc=t}};function Qd(e,t,n,r){let i=e.contentDOM.getBoundingClientRect(),a=i.top+e.viewState.paddingTop,{x:o,y:s}=t,c=s-a,l;for(;;){if(c<0)return new Zd(0,1);if(c>e.viewState.docHeight)return new Zd(e.state.doc.length,-1);if(l=e.elementAtHeight(c),r==null)break;if(l.type==vl.Text){if(r<0?l.to<e.viewport.from:l.from>e.viewport.to)break;let t=e.docView.coordsAt(r<0?l.from:l.to,r>0?-1:1);if(t&&(r<0?t.top<=c+a:t.bottom>=c+a))break}let t=e.viewState.heightOracle.textHeight/2;c=r>0?l.bottom+t:l.top-t}if(e.viewport.from>=l.to||e.viewport.to<=l.from){if(n)return null;if(l.type==vl.Text){let t=Hd(e,i,l,o,s);return new Zd(t,t==l.from?1:-1)}}if(l.type!=vl.Text)return c<(l.top+l.bottom)/2?new Zd(l.from,1):new Zd(l.to,-1);let u=e.docView.lineAt(l.from,2);return(!u||u.length!=l.length)&&(u=e.docView.lineAt(l.from,-2)),new $d(e,o,s,e.textDirectionAt(l.from)).scanTile(u,l.from)}var $d=class{constructor(e,t,n,r){this.view=e,this.x=t,this.y=n,this.baseDir=r,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[lu.find(r,e-n.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[lu.find(r,e-n.from,-1,t)].dir}bidiIn(e,t){let{spans:n,line:r}=this.bidiSpansAt(e);return n.length>1||n.length&&(n[0].level!=this.baseDir||n[0].to+r.from<t)}scan(e,t,n=!1){let r=0,i=e.length-1,a=new Set,o=this.bidiIn(e[0],e[i]),s,c,l=-1,u=1e9,d;search:for(;r<i;){let n=i-r,f=r+i>>1;adjust:if(a.has(f)){for(let e=1;e<n;e++){let t=f+e;if(t>=i&&(t-=n),!a.has(t)){f=t;break adjust}}break search}a.add(f);let p=t(f),m=0;if(p)for(let e=0;e<p.length;e++){let t=p[e];if(!(t.width==0&&p.length>1)){if(t.bottom<this.y)(!s||s.bottom<t.bottom)&&(s=t),m=1;else if(t.top>this.y)(!c||c.top>t.top)&&(c=t),m=-1;else{let e=t.left>this.x?this.x-t.left:t.right<this.x?this.x-t.right:0,n=Math.abs(e);n<u&&(l=f,u=n,d=t),e&&(m=e<0==(this.baseDir==U.LTR)?-1:1)}}}m==-1&&(!o||this.baseDirAt(e[f],1))?i=f:m==1&&(!o||this.baseDirAt(e[f+1],-1))&&(r=f+1)}if(!d){if(!c&&!s)return{i:e[0],after:!1};let n=s&&(!c||this.y-s.bottom<c.top-this.y)?s:c;return this.y=(n.top+n.bottom)/2,this.scan(e,t,!0)}if(u&&!n){let{top:n,bottom:r}=d;if(s&&s.bottom>(n+n+r)/3)return this.y=s.bottom-1,this.scan(e,t,!0);if(c&&c.top<(n+r+r)/3)return this.y=c.top+1,this.scan(e,t,!0)}let f=(o?this.dirAt(e[l],1):this.baseDir)==U.LTR;return{i:l,after:this.x>(d.left+d.right)/2==f}}scanText(e,t){let n=[];for(let r=0;r<e.length;r=ms(e.text,r))n.push(t+r);n.push(t+e.length);let r=this.scan(n,r=>{let i=n[r]-t,a=n[r+1]-t;return Kl(e.dom,i,a).getClientRects()});return r.after?new Zd(n[r.i+1],-1):new Zd(n[r.i],1)}scanTile(e,t){if(!e.length)return new Zd(t,1);if(e.children.length==1){let n=e.children[0];if(n.isText())return this.scanText(n,t);if(n.isComposite())return this.scanTile(n,t)}let n=[t];for(let r=0,i=t;r<e.children.length;r++)n.push(i+=e.children[r].length);let r=this.scan(n,t=>{let n=e.children[t];return n.flags&48?null:(n.dom.nodeType==1?n.dom:Kl(n.dom,0,n.length)).getClientRects()}),i=e.children[r.i],a=n[r.i];return i.isText()?this.scanText(i,a):i.isComposite()?this.scanTile(i,a):r.after?new Zd(n[r.i+1],-1):new Zd(a,1)}},ef=`￿`,tf=class{constructor(e,t){this.points=e,this.view=t,this.text=``,this.lineSeparator=t.state.facet(R.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=ef}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let r=e;;){this.findPointBefore(n,r);let e=this.text.length;this.readNode(r);let i=G.get(r),a=r.nextSibling;if(a==t){i?.breakAfter&&!a&&n!=this.view.contentDOM&&this.lineBreak();break}let o=G.get(a);(i&&o?i.breakAfter:(i?i.breakAfter:Ml(r))||Ml(a)&&(r.nodeName!=`BR`||i?.isWidget())&&this.text.length>e)&&!rf(a,t)&&this.lineBreak(),r=a}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,r=this.lineSeparator?null:/\r\n?|\n/g;;){let i=-1,a=1,o;if(this.lineSeparator?(i=t.indexOf(this.lineSeparator,n),a=this.lineSeparator.length):(o=r.exec(t))&&(i=o.index,a=o[0].length),this.append(t.slice(n,i<0?t.length:i)),i<0)break;if(this.lineBreak(),a>1)for(let t of this.points)t.node==e&&t.pos>this.text.length&&(t.pos-=a-1);n=i+a}}readNode(e){let t=G.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let e=n.iter();!e.next().done;)e.lineBreak?this.lineBreak():this.append(e.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName==`BR`?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(e.nodeType==3?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(nf(e,n.node,n.offset)?t:0))}};function nf(e,t,n){for(;;){if(!t||n<Pl(t))return!1;if(t==e)return!0;n=jl(t)+1,t=t.parentNode}}function rf(e,t){let n;for(;!(e==t||!e);e=e.nextSibling){let t=G.get(e);if(!t?.isWidget())return!1;t&&(n||=[]).push(t)}if(n){for(let e of n)if(e.overrideDOMText?.length)return!1}return!0}var af=class{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}},of=class{constructor(e,t,n,r){this.typeOver=r,this.bounds=null,this.text=``,this.domChanged=t>-1;let{impreciseHead:i,impreciseAnchor:a}=e.docView,o=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=sf(e.docView.tile,t,n,0))){let t=i||a?[]:ff(e),n=new tf(t,e);n.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=n.text,this.newSel=pf(t,this.bounds.from)}else{let t=e.observer.selectionRange,n=i&&i.node==t.focusNode&&i.offset==t.focusOffset||!Dl(e.contentDOM,t.focusNode)?o.main.head:e.docView.posFromDOM(t.focusNode,t.focusOffset),r=a&&a.node==t.anchorNode&&a.offset==t.anchorOffset||!Dl(e.contentDOM,t.anchorNode)?o.main.anchor:e.docView.posFromDOM(t.anchorNode,t.anchorOffset),s=e.viewport;if((V.ios||V.chrome)&&n!=r&&Math.min(n,r)<=o.main.from&&Math.max(n,r)>=o.main.to&&(s.from>0||s.to<e.state.doc.length)){let t=Math.min(n,r),i=Math.max(n,r),a=s.from-t,o=s.to-i;(a==0||a==1||t==0)&&(o==0||o==-1||i==e.state.doc.length)&&(n=0,r=e.state.doc.length)}if(e.inputState.composing>-1&&o.ranges.length>1)this.newSel=o.replaceRange(P.range(r,n));else if(e.lineWrapping&&r==n&&!(o.main.empty&&o.main.head==n)&&e.inputState.lastTouchTime>Date.now()-100){let t=e.coordsAtPos(n,-1),r=0;t&&(r=e.inputState.lastTouchY<=t.bottom?-1:1),this.newSel=P.create([P.cursor(n,r)])}else this.newSel=P.single(r,n)}}};function sf(e,t,n,r){if(e.isComposite()){let i=-1,a=-1,o=-1,s=-1;for(let c=0,l=r,u=r;c<e.children.length;c++){let r=e.children[c],d=l+r.length;if(l<t&&d>n)return sf(r,t,n,l);if(d>=t&&i==-1&&(i=c,a=l),l>n&&r.dom.parentNode==e.dom){o=c,s=u;break}u=d,l=d+r.breakAfter}return{from:a,to:s<0?r+e.length:s,startDOM:(i?e.children[i-1].dom.nextSibling:null)||e.dom.firstChild,endDOM:o<e.children.length&&o>=0?e.children[o].dom:null}}return e.isText()?{from:r,to:r+e.length,startDOM:e.dom,endDOM:e.dom.nextSibling}:null}function cf(e,t){let n,{newSel:r}=t,{state:i}=e,a=i.selection.main,o=e.inputState.lastKeyTime>Date.now()-100?e.inputState.lastKeyCode:-1;if(t.bounds){let{from:e,to:r}=t.bounds,s=a.from,c=null;(o===8||V.android&&t.text.length<r-e)&&(s=a.to,c=`end`);let l=i.doc.sliceString(e,r,ef),u,d;!a.empty&&a.from>=e&&a.to<=r&&(t.typeOver||l!=t.text)&&l.slice(0,a.from-e)==t.text.slice(0,a.from-e)&&l.slice(a.to-e)==t.text.slice(u=t.text.length-(l.length-(a.to-e)))?n={from:a.from,to:a.to,insert:N.of(t.text.slice(a.from-e,u).split(ef))}:(d=df(l,t.text,s-e,c))&&(V.chrome&&o==13&&d.toB==d.from+2&&t.text.slice(d.from,d.toB)==`￿￿`&&d.toB--,n={from:e+d.from,to:e+d.toA,insert:N.of(t.text.slice(d.from,d.toB).split(ef))})}else r&&(!e.hasFocus&&i.facet(Lu)||mf(r,a))&&(r=null);if(!n&&!r)return!1;if((V.mac||V.android)&&n&&n.from==n.to&&n.from==a.head-1&&/^\. ?$/.test(n.insert.toString())&&e.contentDOM.getAttribute(`autocorrect`)==`off`?(r&&n.insert.length==2&&(r=P.single(r.main.anchor-1,r.main.head-1)),n={from:n.from,to:n.to,insert:N.of([n.insert.toString().replace(`.`,` `)])}):i.doc.lineAt(a.from).to<a.to&&e.docView.lineHasWidget(a.to)&&e.inputState.insertingTextAt>Date.now()-50?n={from:a.from,to:a.to,insert:i.toText(e.inputState.insertingText)}:V.chrome&&n&&n.from==n.to&&n.from==a.head&&n.insert.toString()==`
 `&&e.lineWrapping&&(r&&=P.single(r.main.anchor-1,r.main.head-1),n={from:a.from,to:a.to,insert:N.of([` `])}),n)return lf(e,n,r,o);if(r&&!mf(r,a)){let t=!1,n=`select`;return e.inputState.lastSelectionTime>Date.now()-50&&(e.inputState.lastSelectionOrigin==`select`&&(t=!0),n=e.inputState.lastSelectionOrigin,n==`select.pointer`&&(r=Yd(i.facet(qu).map(t=>t(e)),r))),e.dispatch({selection:r,scrollIntoView:t,userEvent:n}),!0}return!1}function lf(e,t,n,r=-1){if(V.ios&&e.inputState.flushIOSKey(t))return!0;let i=e.state.selection.main;if(V.android&&(t.to==i.to&&(t.from==i.from||t.from==i.from-1&&e.state.sliceDoc(t.from,i.from)==` `)&&t.insert.length==1&&t.insert.lines==2&&ql(e.contentDOM,`Enter`,13)||(t.from==i.from-1&&t.to==i.to&&t.insert.length==0||r==8&&t.insert.length<t.to-t.from&&t.to>i.head)&&ql(e.contentDOM,`Backspace`,8)||t.from==i.from&&t.to==i.to+1&&t.insert.length==0&&ql(e.contentDOM,`Delete`,46)))return!0;let a=t.insert.toString();e.inputState.composing>=0&&e.inputState.composing++;let o,s=()=>o||=uf(e,t,n);return e.state.facet(Eu).some(n=>n(e,t.from,t.to,a,s))||e.dispatch(s()),!0}function uf(e,t,n){let r,i=e.state,a=i.selection.main,o=-1;if(t.from==t.to&&t.from<a.from||t.from>a.to){let n=t.from<a.from?-1:1,r=n<0?a.from:a.to,s=Jd(i.facet(qu).map(t=>t(e)),r,n);t.from==s&&(o=s)}if(o>-1)r={changes:t,selection:P.cursor(t.from+t.insert.length,-1)};else if(t.from>=a.from&&t.to<=a.to&&t.to-t.from>=(a.to-a.from)/3&&(!n||n.main.empty&&n.main.from==t.from+t.insert.length)&&e.inputState.composing<0){let n=a.from<t.from?i.sliceDoc(a.from,t.from):``,o=a.to>t.to?i.sliceDoc(t.to,a.to):``;r=i.replaceSelection(e.state.toText(n+t.insert.sliceString(0,void 0,e.state.lineBreak)+o))}else{let o=i.changes(t),s=n&&n.main.to<=o.newLength?n.main:void 0;if(i.selection.ranges.length>1&&(e.inputState.composing>=0||e.inputState.compositionPendingChange)&&t.to<=a.to+10&&t.to>=a.to-10){let c=e.state.sliceDoc(t.from,t.to),l,u=n&&jd(e,n.main.head);if(u){let e=t.insert.length-(t.to-t.from);l={from:u.from,to:u.to-e}}else l=e.state.doc.lineAt(a.head);let d=a.to-t.to;r=i.changeByRange(n=>{if(n.from==a.from&&n.to==a.to)return{changes:o,range:s||n.map(o)};let r=n.to-d,u=r-c.length;if(e.state.sliceDoc(u,r)!=c||r>=l.from&&u<=l.to)return{range:n};let f=i.changes({from:u,to:r,insert:t.insert}),p=n.to-a.to;return{changes:f,range:s?P.range(Math.max(0,s.anchor+p),Math.max(0,s.head+p)):n.map(f)}})}else r={changes:o,selection:s&&i.selection.replaceRange(s)}}let s=`input.type`;return(e.composing||e.inputState.compositionPendingChange&&e.inputState.compositionEndedAt>Date.now()-50)&&(e.inputState.compositionPendingChange=!1,s+=`.compose`,e.inputState.compositionFirstChange&&(s+=`.start`,e.inputState.compositionFirstChange=!1)),i.update(r,{userEvent:s,scrollIntoView:!0})}function df(e,t,n,r){let i=Math.min(e.length,t.length),a=0;for(;a<i&&e.charCodeAt(a)==t.charCodeAt(a);)a++;if(a==i&&e.length==t.length)return null;let o=e.length,s=t.length;for(;o>0&&s>0&&e.charCodeAt(o-1)==t.charCodeAt(s-1);)o--,s--;if(r==`end`){let e=Math.max(0,a-Math.min(o,s));n-=o+e-a}if(o<a&&e.length<t.length){let e=n<=a&&n>=o?a-n:0;a-=e,s=a+(s-o),o=a}else if(s<a){let e=n<=a&&n>=s?a-n:0;a-=e,o=a+(o-s),s=a}return{from:a,toA:o,toB:s}}function ff(e){let t=[];if(e.root.activeElement!=e.contentDOM)return t;let{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}=e.observer.selectionRange;return n&&(t.push(new af(n,r)),(i!=n||a!=r)&&t.push(new af(i,a))),t}function pf(e,t){if(e.length==0)return null;let n=e[0].pos,r=e.length==2?e[1].pos:n;return n>-1&&r>-1?P.single(n+t,r+t):null}function mf(e,t){return t.head==e.main.head&&t.anchor==e.main.anchor}var hf=class{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.touchActive=!1,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.lastIOSMomentumScroll=0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText=``,this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,V.safari&&e.contentDOM.addEventListener(`input`,()=>null),V.gecko&&Qf(e.contentDOM.ownerDocument)}handleEvent(e){!kf(this.view,e)||this.ignoreDuringComposition(e)||e.type==`keydown`&&this.keydown(e)||(this.view.updateState==0?this.runHandlers(e.type,e):Promise.resolve().then(()=>this.runHandlers(e.type,e)))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let e of n.observers)e(this.view,t);for(let e of n.handlers){if(t.defaultPrevented)break;if(e(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=vf(e),n=this.handlers,r=this.view.contentDOM;for(let e in t)if(e!=`scroll`){let i=!t[e].handlers.length,a=n[e];a&&i!=!a.handlers.length&&(r.removeEventListener(e,this.handleEvent),a=null),a||r.addEventListener(e,this.handleEvent,{passive:i})}for(let e in n)e!=`scroll`&&!t[e]&&r.removeEventListener(e,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&xf.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),V.android&&V.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;if(V.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&(yf.some(t=>t.keyCode==e.keyCode)&&!e.ctrlKey||bf.indexOf(e.key)>-1&&e.ctrlKey)){let t={ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey,shiftKey:e.shiftKey};return t.shiftKey&&V.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&gf(this.view.win)&&(t.shiftKey=!1),this.pendingIOSKey={key:e.key,keyCode:e.keyCode,mods:t},setTimeout(()=>this.flushIOSKey(),250),!0}return e.keyCode!=229&&this.view.observer.forceFlush(),!1}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key==`Enter`&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,ql(this.view.contentDOM,t.key,t.keyCode,t.mods))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:V.safari&&!V.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}};function gf(e){return e.visualViewport?e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85:!1}function _f(e,t){return(n,r)=>{try{return t.call(e,r,n)}catch(e){Iu(n.state,e)}}}function vf(e){let t=Object.create(null);function n(e){return t[e]||(t[e]={observers:[],handlers:[]})}for(let t of e){let e=t.spec,r=e&&e.plugin.domEventHandlers,i=e&&e.plugin.domEventObservers;if(r)for(let e in r){let i=r[e];i&&n(e).handlers.push(_f(t.value,i))}if(i)for(let e in i){let r=i[e];r&&n(e).observers.push(_f(t.value,r))}}for(let e in Af)n(e).handlers.push(Af[e]);for(let e in jf)n(e).observers.push(jf[e]);return t}var yf=[{key:`Backspace`,keyCode:8,inputType:`deleteContentBackward`},{key:`Enter`,keyCode:13,inputType:`insertParagraph`},{key:`Enter`,keyCode:13,inputType:`insertLineBreak`},{key:`Delete`,keyCode:46,inputType:`deleteContentForward`}],bf=`dthko`,xf=[16,17,18,20,91,92,224,225],Sf=6;function Cf(e){return Math.max(0,e)*.7+8}function wf(e,t){return Math.max(Math.abs(e.clientX-t.clientX),Math.abs(e.clientY-t.clientY))}var Tf=class{constructor(e,t,n,r){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=r,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=zl(e.contentDOM),this.atoms=e.state.facet(qu).map(t=>t(e));let i=e.contentDOM.ownerDocument;i.addEventListener(`mousemove`,this.move=this.move.bind(this)),i.addEventListener(`mouseup`,this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(R.allowMultipleSelections)&&Ef(e,t),this.dragging=Of(e,t)&&Vf(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&wf(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,r=0,i=0,a=this.view.win.innerWidth,o=this.view.win.innerHeight;this.scrollParents.x&&({left:r,right:a}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:i,bottom:o}=this.scrollParents.y.getBoundingClientRect());let s=Zu(this.view);e.clientX-s.left<=r+Sf?t=-Cf(r-e.clientX):e.clientX+s.right>=a-Sf&&(t=Cf(e.clientX-a)),e.clientY-s.top<=i+Sf?n=-Cf(i-e.clientY):e.clientY+s.bottom>=o-Sf&&(n=Cf(e.clientY-o)),this.setScrollSpeed(t,n)}up(e){this.dragging??this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener(`mousemove`,this.move),e.removeEventListener(`mouseup`,this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=Yd(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:`select.pointer`}),this.mustSelect=!1}update(e){e.transactions.some(e=>e.isUserEvent(`input.type`))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}};function Ef(e,t){let n=e.state.facet(xu);return n.length?n[0](t):V.mac?t.metaKey:t.ctrlKey}function Df(e,t){let n=e.state.facet(Su);return n.length?n[0](t):V.mac?!t.altKey:!t.ctrlKey}function Of(e,t){let{main:n}=e.state.selection;if(n.empty)return!1;let r=El(e.root);if(!r||r.rangeCount==0)return!0;let i=r.getRangeAt(0).getClientRects();for(let e=0;e<i.length;e++){let n=i[e];if(n.left<=t.clientX&&n.right>=t.clientX&&n.top<=t.clientY&&n.bottom>=t.clientY)return!0}return!1}function kf(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target,r;n!=e.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(r=G.get(n))&&r.isWidget()&&!r.isHidden&&r.widget.ignoreEvent(t))return!1;return!0}var Af=Object.create(null),jf=Object.create(null),Mf=V.ie&&V.ie_version<15||V.ios&&V.webkit_version<604;function Nf(e){let t=e.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement(`textarea`));n.style.cssText=`position: fixed; left: -10000px; top: 10px`,n.focus(),setTimeout(()=>{e.focus(),n.remove(),Ff(e,n.value)},50)}function Pf(e,t,n){for(let r of e.facet(t))n=r(n,e);return n}function Ff(e,t){t=Pf(e.state,Ou,t);let{state:n}=e,r,i=1,a=n.toText(t),o=a.lines==n.selection.ranges.length;if(qf!=null&&n.selection.ranges.every(e=>e.empty)&&qf==a.toString()){let e=-1;r=n.changeByRange(r=>{let s=n.doc.lineAt(r.from);if(s.from==e)return{range:r};e=s.from;let c=n.toText((o?a.line(i++).text:t)+n.lineBreak);return{changes:{from:s.from,insert:c},range:P.cursor(r.from+c.length)}})}else r=o?n.changeByRange(e=>{let t=a.line(i++);return{changes:{from:e.from,to:e.to,insert:t.text},range:P.cursor(e.from+t.length)}}):n.replaceSelection(a);e.dispatch(r,{userEvent:`input.paste`,scrollIntoView:!0})}jf.scroll=e=>{let t=e.inputState;t.lastScrollTop=e.scrollDOM.scrollTop,t.lastScrollLeft=e.scrollDOM.scrollLeft,V.ios&&!t.touchActive&&(t.lastIOSMomentumScroll=Date.now())},jf.wheel=jf.mousewheel=e=>{e.inputState.lastWheelEvent=Date.now()},Af.keydown=(e,t)=>(e.inputState.setSelectionOrigin(`select`),t.keyCode==27&&e.inputState.tabFocusMode!=0&&(e.inputState.tabFocusMode=Date.now()+2e3),!1),jf.touchstart=(e,t)=>{let n=e.inputState,r=t.targetTouches[0];n.touchActive=!0,n.lastTouchTime=Date.now(),r&&(n.lastTouchX=r.clientX,n.lastTouchY=r.clientY),n.setSelectionOrigin(`select.pointer`)},jf.touchmove=e=>{e.inputState.setSelectionOrigin(`select.pointer`)},jf.touchend=(e,t)=>{e.inputState.touchActive=!1},Af.mousedown=(e,t)=>{if(e.observer.flush(),e.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let r of e.state.facet(Cu))if(n=r(e,t),n)break;if(!n&&t.button==0&&(n=Hf(e,t)),n){let r=!e.hasFocus;e.inputState.startMouseSelection(new Tf(e,t,n,r)),r&&e.observer.ignore(()=>{Wl(e.contentDOM);let t=e.root.activeElement;t&&!t.contains(e.contentDOM)&&t.blur()});let i=e.inputState.mouseSelection;if(i)return i.start(t),i.dragging===!1}else e.inputState.setSelectionOrigin(`select.pointer`);return!1};function If(e,t,n,r){if(r==1)return P.cursor(t,n);if(r==2)return Vd(e.state,t,n);{let r=e.docView.lineAt(t,n),i=e.state.doc.lineAt(r?r.posAtEnd:t),a=r?r.posAtStart:i.from,o=r?r.posAtEnd:i.to;return o<e.state.doc.length&&o==i.to&&o++,P.undirectionalRange(a,o)}}var Lf=V.ie&&V.ie_version<=11,Rf=null,zf=0,Bf=0;function Vf(e){if(!Lf)return e.detail;let t=Rf,n=Bf;return Rf=e,Bf=Date.now(),zf=!t||n>Date.now()-400&&Math.abs(t.clientX-e.clientX)<2&&Math.abs(t.clientY-e.clientY)<2?(zf+1)%3:1}function Hf(e,t){let n=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),r=Vf(t),i=e.state.selection;return{update(e){e.docChanged&&(n.pos=e.changes.mapPos(n.pos),i=i.map(e.changes))},get(t,a,o){let s=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),c,l=If(e,s.pos,s.assoc,r);if(n.pos!=s.pos&&!a){let t=If(e,n.pos,n.assoc,r),i=Math.min(t.from,l.from),a=Math.max(t.to,l.to);l=i<l.from?P.range(i,a,l.assoc):P.range(a,i,l.assoc)}return a?i.replaceRange(i.main.extend(l.from,l.to,l.assoc)):o&&r==1&&i.ranges.length>1&&(c=Uf(i,s.pos))?c:o?i.addRange(l):P.create([l])}}}function Uf(e,t){for(let n=0;n<e.ranges.length;n++){let{from:r,to:i}=e.ranges[n];if(r<=t&&i>=t)return P.create(e.ranges.slice(0,n).concat(e.ranges.slice(n+1)),e.mainIndex==n?0:e.mainIndex-+(e.mainIndex>n))}return null}Af.dragstart=(e,t)=>{let{selection:{main:n}}=e.state;if(t.target.draggable){let r=e.docView.tile.nearest(t.target);if(r&&r.isWidget()){let e=r.posAtStart,t=e+r.length;(e>=n.to||t<=n.from)&&(n=P.undirectionalRange(e,t))}}let{inputState:r}=e;return r.mouseSelection&&(r.mouseSelection.dragging=!0),r.draggedContent=n,t.dataTransfer&&(t.dataTransfer.setData(`Text`,Pf(e.state,ku,e.state.sliceDoc(n.from,n.to))),t.dataTransfer.effectAllowed=`copyMove`),!1},Af.dragend=e=>(e.inputState.draggedContent=null,!1);function Wf(e,t,n,r){if(n=Pf(e.state,Ou,n),!n)return;let i=e.posAtCoords({x:t.clientX,y:t.clientY},!1),{draggedContent:a}=e.inputState,o=r&&a&&Df(e,t)?{from:a.from,to:a.to}:null,s={from:i,insert:n},c=e.state.changes(o?[o,s]:s);e.focus(),e.dispatch({changes:c,selection:{anchor:c.mapPos(i,-1),head:c.mapPos(i,1)},userEvent:o?`move.drop`:`input.drop`}),e.inputState.draggedContent=null}Af.drop=(e,t)=>{if(!t.dataTransfer)return!1;if(e.state.readOnly)return!0;let n=t.dataTransfer.files;if(n&&n.length){let r=Array(n.length),i=0,a=()=>{++i==n.length&&Wf(e,t,r.filter(e=>e!=null).join(e.state.lineBreak),!1)};for(let e=0;e<n.length;e++){let t=new FileReader;t.onerror=a,t.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(t.result)||(r[e]=t.result),a()},t.readAsText(n[e])}return!0}{let n=t.dataTransfer.getData(`Text`);if(n)return Wf(e,t,n,!0),!0}return!1},Af.paste=(e,t)=>{if(e.state.readOnly)return!0;e.observer.flush();let n=Mf?null:t.clipboardData;return n?(Ff(e,n.getData(`text/plain`)||n.getData(`text/uri-list`)),!0):(Nf(e),!1)};function Gf(e,t){let n=e.dom.parentNode;if(!n)return;let r=n.appendChild(document.createElement(`textarea`));r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.value=t,r.focus(),r.selectionEnd=t.length,r.selectionStart=0,setTimeout(()=>{r.remove(),e.focus()},50)}function Kf(e){let t=[],n=[],r=!1;for(let r of e.selection.ranges)r.empty||(t.push(e.sliceDoc(r.from,r.to)),n.push(r));if(!t.length){let i=-1;for(let{from:r}of e.selection.ranges){let a=e.doc.lineAt(r);a.number>i&&(t.push(a.text),n.push({from:a.from,to:Math.min(e.doc.length,a.to+1)})),i=a.number}r=!0}return{text:Pf(e,ku,t.join(e.lineBreak)),ranges:n,linewise:r}}var qf=null;Af.copy=Af.cut=(e,t)=>{if(!Ol(e.contentDOM,e.observer.selectionRange))return!1;let{text:n,ranges:r,linewise:i}=Kf(e.state);if(!n&&!i)return!1;qf=i?n:null,t.type==`cut`&&!e.state.readOnly&&e.dispatch({changes:r,scrollIntoView:!0,userEvent:`delete.cut`});let a=Mf?null:t.clipboardData;return a?(a.clearData(),a.setData(`text/plain`,n),!0):(Gf(e,n),!1)};var Jf=rc.define();function Yf(e,t){let n=[];for(let r of e.facet(Du)){let i=r(e,t);i&&n.push(i)}return n.length?e.update({effects:n,annotations:Jf.of(!0)}):null}function Xf(e){setTimeout(()=>{let t=e.hasFocus;if(t!=e.inputState.notifiedFocused){let n=Yf(e.state,t);n?e.dispatch(n):e.update([])}},10)}jf.focus=e=>{e.inputState.lastFocusTime=Date.now(),!e.scrollDOM.scrollTop&&(e.inputState.lastScrollTop||e.inputState.lastScrollLeft)&&(e.scrollDOM.scrollTop=e.inputState.lastScrollTop,e.scrollDOM.scrollLeft=e.inputState.lastScrollLeft),Xf(e)},jf.blur=e=>{e.observer.clearSelectionRange(),Xf(e)},jf.compositionstart=jf.compositionupdate=e=>{e.observer.editContext||(e.inputState.compositionFirstChange??(e.inputState.compositionFirstChange=!0),e.inputState.composing<0&&(e.inputState.composing=0))},jf.compositionend=e=>{e.observer.editContext||(e.inputState.composing=-1,e.inputState.compositionEndedAt=Date.now(),e.inputState.compositionPendingKey=!0,e.inputState.compositionPendingChange=e.observer.pendingRecords().length>0,e.inputState.compositionFirstChange=null,V.chrome&&V.android?e.observer.flushSoon():e.inputState.compositionPendingChange?Promise.resolve().then(()=>e.observer.flush()):setTimeout(()=>{e.inputState.composing<0&&e.docView.hasComposition&&e.update([])},50))},jf.contextmenu=e=>{e.inputState.lastContextMenu=Date.now()},Af.beforeinput=(e,t)=>{if((t.inputType==`insertText`||t.inputType==`insertCompositionText`)&&(e.inputState.insertingText=t.data,e.inputState.insertingTextAt=Date.now()),t.inputType==`insertReplacementText`&&e.observer.editContext){let n=t.dataTransfer?.getData(`text/plain`),r=t.getTargetRanges();if(n&&r.length){let t=r[0];return lf(e,{from:e.posAtDOM(t.startContainer,t.startOffset),to:e.posAtDOM(t.endContainer,t.endOffset),insert:e.state.toText(n)},null),!0}}let n;if(V.chrome&&V.android&&(n=yf.find(e=>e.inputType==t.inputType))&&(e.observer.delayAndroidKey(n.key,n.keyCode),n.key==`Backspace`||n.key==`Delete`)){let t=window.visualViewport?.height||0;setTimeout(()=>{(window.visualViewport?.height||0)>t+10&&e.hasFocus&&(e.contentDOM.blur(),e.focus())},100)}return V.ios&&t.inputType==`deleteContentForward`&&e.observer.flushSoon(),V.safari&&t.inputType==`insertText`&&e.inputState.composing>=0&&setTimeout(()=>jf.compositionend(e,t),20),!1};var Zf=new Set;function Qf(e){Zf.has(e)||(Zf.add(e),e.addEventListener(`copy`,()=>{}),e.addEventListener(`cut`,()=>{}))}var $f=[`pre-wrap`,`normal`,`pre-line`,`break-spaces`],ep=!1;function tp(){ep=!1}var np=class{constructor(e){this.lineWrapping=e,this.doc=N.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return $f.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];r<0?n++:this.heightSamples[Math.floor(r*10)]||(t=!0,this.heightSamples[Math.floor(r*10)]=!0)}return t}refresh(e,t,n,r,i,a){let o=$f.indexOf(e)>-1,s=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=o;if(this.lineWrapping=o,this.lineHeight=t,this.charWidth=n,this.textHeight=r,this.lineLength=i,s){this.heightSamples={};for(let e=0;e<a.length;e++){let t=a[e];t<0?e++:this.heightSamples[Math.floor(t*10)]=!0}}return s}},rp=class{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}},ip=class e{constructor(e,t,n,r,i){this.from=e,this.length=t,this.top=n,this.height=r,this._content=i}get type(){return typeof this._content==`number`?vl.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof xl?this._content.widget:null}get widgetLineBreaks(){return typeof this._content==`number`?this._content:0}join(t){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t]);return new e(this.from,this.length+t.length,this.top,this.height+t.height,n)}},K=(function(e){return e[e.ByPos=0]=`ByPos`,e[e.ByHeight=1]=`ByHeight`,e[e.ByPosNoHeight=2]=`ByPosNoHeight`,e})(K||={}),ap=.001,op=class e{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>ap&&(ep=!0),this.height=e)}replace(t,n,r){return e.of(r)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,r){let i=this,a=n.doc;for(let o=r.length-1;o>=0;o--){let{fromA:s,toA:c,fromB:l,toB:u}=r[o],d=i.lineAt(s,K.ByPosNoHeight,n.setDoc(t),0,0),f=d.to>=c?d:i.lineAt(c,K.ByPosNoHeight,n,0,0);for(u+=f.to-c,c=f.to;o>0&&d.from<=r[o-1].toA;)s=r[o-1].fromA,l=r[o-1].fromB,o--,s<d.from&&(d=i.lineAt(s,K.ByPosNoHeight,n,0,0));l+=d.from-s,s=d.from;let p=hp.build(n.setDoc(a),e,l,u);i=sp(i,i.replace(s,c,p))}return i.updateHeight(n,0)}static empty(){return new up(0,0,0)}static of(t){if(t.length==1)return t[0];let n=0,r=t.length,i=0,a=0;for(;;)if(n==r){if(i>a*2){let e=t[n-1];e.break?t.splice(--n,1,e.left,null,e.right):t.splice(--n,1,e.left,e.right),r+=1+e.break,i-=e.size}else if(a>i*2){let e=t[r];e.break?t.splice(r,1,e.left,null,e.right):t.splice(r,1,e.left,e.right),r+=2+e.break,a-=e.size}else break}else if(i<a){let e=t[n++];e&&(i+=e.size)}else{let e=t[--r];e&&(a+=e.size)}let o=0;return t[n-1]==null?(o=1,n--):t[n]??(o=1,r++),new fp(e.of(t.slice(0,n)),o,e.of(t.slice(r)))}};function sp(e,t){return e==t?e:(e.constructor!=t.constructor&&(ep=!0),t)}op.prototype.size=1;var cp=H.replace({}),lp=class extends op{constructor(e,t,n){super(e,t),this.deco=n,this.spaceAbove=0}mainBlock(e,t){return new ip(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,n,r){return this.spaceAbove&&e<n+this.spaceAbove?new ip(r,0,n,this.spaceAbove,cp):this.mainBlock(n,r)}lineAt(e,t,n,r,i){let a=this.mainBlock(r,i);return this.spaceAbove?this.blockAt(0,n,r,i).join(a):a}forEachLine(e,t,n,r,i,a){e<=i+this.length&&t>=i&&a(this.lineAt(0,K.ByPos,n,r,i))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more&&this.setMeasuredHeight(r),this.outdated=!1,this}toString(){return`block(${this.length})`}},up=class e extends lp{constructor(e,t,n){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=n}mainBlock(e,t){return new ip(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,n,r){let i=r[0];return r.length==1&&(i instanceof e||i instanceof dp&&i.flags&4)&&Math.abs(this.length-i.length)<10?(i instanceof dp?i=new e(i.length,this.height,this.spaceAbove):i.height=this.height,this.outdated||(i.outdated=!1),i):op.of(r)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more?this.setMeasuredHeight(r):(n||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:``}${this.widgetHeight?`:`+this.widgetHeight:``})`}},dp=class e extends op{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,r=e.doc.lineAt(t+this.length).number,i=r-n+1,a,o=0;if(e.lineWrapping){let t=Math.min(this.height,e.lineHeight*i);a=t/i,this.length>i+1&&(o=(this.height-t)/(this.length-i-1))}else a=this.height/i;return{firstLine:n,lastLine:r,perLine:a,perChar:o}}blockAt(e,t,n,r){let{firstLine:i,lastLine:a,perLine:o,perChar:s}=this.heightMetrics(t,r);if(t.lineWrapping){let i=r+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),a=t.doc.lineAt(i),c=o+a.length*s,l=Math.max(n,e-c/2);return new ip(a.from,a.length,l,c,0)}{let r=Math.max(0,Math.min(a-i,Math.floor((e-n)/o))),{from:s,length:c}=t.doc.line(i+r);return new ip(s,c,n+o*r,o,0)}}lineAt(e,t,n,r,i){if(t==K.ByHeight)return this.blockAt(e,n,r,i);if(t==K.ByPosNoHeight){let{from:t,to:r}=n.doc.lineAt(e);return new ip(t,r-t,0,0,0)}let{firstLine:a,perLine:o,perChar:s}=this.heightMetrics(n,i),c=n.doc.lineAt(e),l=o+c.length*s,u=c.number-a,d=r+o*u+s*(c.from-i-u);return new ip(c.from,c.length,Math.max(r,Math.min(d,r+this.height-l)),l,0)}forEachLine(e,t,n,r,i,a){e=Math.max(e,i),t=Math.min(t,i+this.length);let{firstLine:o,perLine:s,perChar:c}=this.heightMetrics(n,i);for(let l=e,u=r;l<=t;){let t=n.doc.lineAt(l);if(l==e){let n=t.number-o;u+=s*n+c*(e-i-n)}let r=s+c*t.length;a(new ip(t.from,t.length,u,r,0)),u+=r,l=t.to+1}}replace(t,n,r){let i=this.length-n;if(i>0){let t=r[r.length-1];t instanceof e?r[r.length-1]=new e(t.length+i):r.push(null,new e(i-1))}if(t>0){let n=r[0];n instanceof e?r[0]=new e(t+n.length):r.unshift(new e(t-1),null)}return op.of(r)}decomposeLeft(t,n){n.push(new e(t-1),null)}decomposeRight(t,n){n.push(null,new e(this.length-t-1))}updateHeight(t,n=0,r=!1,i){let a=n+this.length;if(i&&i.from<=n+this.length&&i.more){let r=[],o=Math.max(n,i.from),s=-1;for(i.from>n&&r.push(new e(i.from-n-1).updateHeight(t,n));o<=a&&i.more;){let e=t.doc.lineAt(o).length;r.length&&r.push(null);let n=i.heights[i.index++],a=0;n<0&&(a=-n,n=i.heights[i.index++]),s==-1?s=n:Math.abs(n-s)>=ap&&(s=-2);let c=new up(e,n,a);c.outdated=!1,r.push(c),o+=e+1}o<=a&&r.push(null,new e(a-o).updateHeight(t,o));let c=op.of(r);return(s<0||Math.abs(c.height-this.height)>=ap||Math.abs(s-this.heightMetrics(t,n).perLine)>=ap)&&(ep=!0),sp(this,c)}return(r||this.outdated)&&(this.setHeight(t.heightForGap(n,n+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}},fp=class extends op{constructor(e,t,n){super(e.length+t+n.length,e.height+n.height,t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,r){let i=n+this.left.height;return e<i?this.left.blockAt(e,t,n,r):this.right.blockAt(e,t,i,r+this.left.length+this.break)}lineAt(e,t,n,r,i){let a=r+this.left.height,o=i+this.left.length+this.break,s=t==K.ByHeight?e<a:e<o,c=s?this.left.lineAt(e,t,n,r,i):this.right.lineAt(e,t,n,a,o);if(this.break||(s?c.to<o:c.from>o))return c;let l=t==K.ByPosNoHeight?K.ByPosNoHeight:K.ByPos;return s?c.join(this.right.lineAt(o,l,n,a,o)):this.left.lineAt(o,l,n,r,i).join(c)}forEachLine(e,t,n,r,i,a){let o=r+this.left.height,s=i+this.left.length+this.break;if(this.break)e<s&&this.left.forEachLine(e,t,n,r,i,a),t>=s&&this.right.forEachLine(e,t,n,o,s,a);else{let c=this.lineAt(s,K.ByPos,n,r,i);e<c.from&&this.left.forEachLine(e,c.from-1,n,r,i,a),c.to>=e&&c.from<=t&&a(c),t>c.to&&this.right.forEachLine(c.to+1,t,n,o,s,a)}}replace(e,t,n){let r=this.left.length+this.break;if(t<r)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-r,t-r,n));let i=[];e>0&&this.decomposeLeft(e,i);let a=i.length;for(let e of n)i.push(e);if(e>0&&pp(i,a-1),t<this.length){let e=i.length;this.decomposeRight(t,i),pp(i,e)}return op.of(i)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,r=n+this.break;if(e>=r)return this.right.decomposeRight(e-r,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<r&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?op.of(this.break?[e,null,t]:[e,t]):(this.left=sp(this.left,e),this.right=sp(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,r){let{left:i,right:a}=this,o=t+i.length+this.break,s=null;return r&&r.from<=t+i.length&&r.more?s=i=i.updateHeight(e,t,n,r):i.updateHeight(e,t,n),r&&r.from<=o+a.length&&r.more?s=a=a.updateHeight(e,o,n,r):a.updateHeight(e,o,n),s?this.balanced(i,a):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?` `:`-`)+this.right}};function pp(e,t){let n,r;e[t]==null&&(n=e[t-1])instanceof dp&&(r=e[t+1])instanceof dp&&e.splice(t-1,3,new dp(n.length+1+r.length))}var mp=5,hp=class e{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let e=Math.min(t,this.lineEnd),n=this.nodes[this.nodes.length-1];n instanceof up?n.length+=e-this.pos:(e>this.pos||!this.isCovered)&&this.nodes.push(new up(e-this.pos,-1,0)),this.writtenTo=e,t>e&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let r=n.widget?n.widget.estimatedHeight:0,i=n.widget?n.widget.lineBreaks:0;r<0&&(r=this.oracle.lineHeight);let a=t-e;n.block?this.addBlock(new lp(a,r,n)):(a||i||r>=mp)&&this.addLineDeco(r,i,a)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new up(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let n=new dp(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof up)return e;let t=new up(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos+=e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let r=this.ensureLine();r.length+=n,r.collapsed+=n,r.widgetHeight=Math.max(r.widgetHeight,e),r.breaks+=t,this.writtenTo=this.pos+=n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof up)&&!this.isCovered?this.nodes.push(new up(0,-1,0)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let e of this.nodes)e instanceof up&&e.updateHeight(this.oracle,n),n+=e?e.length:1;return this.nodes}static build(t,n,r,i){let a=new e(r,t);return z.spans(n,r,i,a,0),a.finish(r)}};function gp(e,t,n){let r=new _p;return z.compare(e,t,n,r,0),r.changes}var _p=class{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,r){(e<t||n&&n.heightRelevant||r&&r.heightRelevant)&&wl(e,t,this.changes,5)}};function vp(e,t){let n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.defaultView||window,a=Math.max(0,n.left),o=Math.min(i.innerWidth,n.right),s=Math.max(0,n.top),c=Math.min(i.innerHeight,n.bottom);for(let t=e.parentNode;t&&t!=r.body;)if(t.nodeType==1){let n=t,r=window.getComputedStyle(n);if((n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&r.overflow!=`visible`){let r=n.getBoundingClientRect();a=Math.max(a,r.left),o=Math.min(o,r.right),s=Math.max(s,r.top),c=Math.min(t==e.parentNode?i.innerHeight:c,r.bottom)}t=r.position==`absolute`||r.position==`fixed`?n.offsetParent:n.parentNode}else if(t.nodeType==11)t=t.host;else break;return{left:a-n.left,right:Math.max(a,o)-n.left,top:s-(n.top+t),bottom:Math.max(s,c)-(n.top+t)}}function yp(e){let t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||window;return t.left<n.innerWidth&&t.right>0&&t.top<n.innerHeight&&t.bottom>0}function bp(e,t){let n=e.getBoundingClientRect();return{left:0,right:n.right-n.left,top:t,bottom:n.bottom-(n.top+t)}}var xp=class{constructor(e,t,n,r){this.from=e,this.to=t,this.size=n,this.displaySize=r}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.size!=i.size)return!1}return!0}draw(e,t){return H.replace({widget:new Sp(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}},Sp=class extends _l{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement(`div`);return this.vertical?e.style.height=this.size+`px`:(e.style.width=this.size+`px`,e.style.height=`2px`,e.style.display=`inline-block`),e}get estimatedHeight(){return this.vertical?this.size:-1}},Cp=class{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=kp,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=U.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let n=t.facet(Uu).some(e=>typeof e!=`function`&&e.class==`cm-lineWrapping`);this.heightOracle=new np(n),this.stateDeco=Ap(t),this.heightMap=op.empty().applyChanges(this.stateDeco,N.empty,this.heightOracle.setDoc(t.doc),[new $u(0,0,0,t.doc.length)]);for(let e=0;e<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());e++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=H.set(this.lineGaps.map(e=>e.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let r=n?t.head:t.anchor;if(!e.some(({from:e,to:t})=>r>=e&&r<=t)){let{from:t,to:n}=this.lineBlockAt(r);e.push(new wp(t,n))}}return this.viewports=e.sort((e,t)=>e.from-t.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?kp:new jp(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Mp(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=Ap(this.state);let r=e.changedRanges,i=$u.extendWithRanges(r,gp(n,this.stateDeco,e?e.changes:Cs.empty(this.state.doc.length))),a=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);tp(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),i),(this.heightMap.height!=a||ep)&&(e.flags|=2),o?(this.scrollAnchorPos=e.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=a);let s=i.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<s.from||t.range.head>s.to)||!this.viewportIsAppropriate(s))&&(s=this.getViewport(0,t));let c=s.from!=this.viewport.from||s.to!=this.viewport.to;this.viewport=s,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(ju)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,n=window.getComputedStyle(t),r=this.heightOracle,i=n.whiteSpace;this.defaultTextDirection=n.direction==`rtl`?U.RTL:U.LTR;let a=this.heightOracle.mustRefreshForWrapping(i)||this.mustMeasureContent===`refresh`,o=t.getBoundingClientRect(),s=a||this.mustMeasureContent||this.contentDOMHeight!=o.height;this.contentDOMHeight=o.height,this.mustMeasureContent=!1;let c=0,l=0;if(o.width&&o.height){let{scaleX:e,scaleY:n}=Ll(t,o);(e>.005&&Math.abs(this.scaleX-e)>.005||n>.005&&Math.abs(this.scaleY-n)>.005)&&(this.scaleX=e,this.scaleY=n,c|=16,a=s=!0)}let u=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=u||this.paddingBottom!=d)&&(this.paddingTop=u,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(r.lineWrapping&&(s=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let f=zl(this.view.contentDOM,!1).y;f!=this.scrollParent&&(this.scrollParent=f,this.scrollAnchorHeight=-1,this.scrollOffset=0);let p=this.getScrollOffset();this.scrollOffset!=p&&(this.scrollAnchorHeight=-1,this.scrollOffset=p),this.scrolledToBottom=Xl(this.scrollParent||e.win);let m=(this.printing?bp:vp)(t,this.paddingTop),h=m.top-this.pixelViewport.top,g=m.bottom-this.pixelViewport.bottom;this.pixelViewport=m;let _=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(_!=this.inView&&(this.inView=_,_&&(s=!0)),!this.inView&&!this.scrollTarget&&!yp(e.dom))return 0;let v=o.width;if((this.contentDOMWidth!=v||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=o.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),s){let t=e.docView.measureVisibleLineHeights(this.viewport);if(r.mustRefreshForHeights(t)&&(a=!0),a||r.lineWrapping&&Math.abs(v-this.contentDOMWidth)>r.charWidth){let{lineHeight:n,charWidth:o,textHeight:s}=e.docView.measureTextSize();a=n>0&&r.refresh(i,n,o,s,Math.max(5,v/o),t),a&&(e.docView.minWidth=0,c|=16)}h>0&&g>0?l=Math.max(h,g):h<0&&g<0&&(l=Math.min(h,g)),tp();for(let n of this.viewports){let i=n.from==this.viewport.from?t:e.docView.measureVisibleLineHeights(n);this.heightMap=(a?op.empty().applyChanges(this.stateDeco,N.empty,this.heightOracle,[new $u(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(r,0,a,new rp(n.from,i))}ep&&(c|=2)}let y=!this.viewportIsAppropriate(this.viewport,l)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return y&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(l,this.scrollTarget),c|=this.updateForViewport()),(c&2||y)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(a?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),r=this.heightMap,i=this.heightOracle,{visibleTop:a,visibleBottom:o}=this,s=new wp(r.lineAt(a-n*1e3,K.ByHeight,i,0,0).from,r.lineAt(o+(1-n)*1e3,K.ByHeight,i,0,0).to);if(t){let{head:e}=t.range;if(e<s.from||e>s.to){let n=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),a=r.lineAt(e,K.ByPos,i,0,0),o;o=t.y==`center`?(a.top+a.bottom)/2-n/2:t.y==`start`||t.y==`nearest`&&e<s.from?a.top:a.bottom-n,s=new wp(r.lineAt(o-500,K.ByHeight,i,0,0).from,r.lineAt(o+n+500,K.ByHeight,i,0,0).to)}}return s}mapViewport(e,t){let n=t.mapPos(e.from,-1),r=t.mapPos(e.to,1);return new wp(this.heightMap.lineAt(n,K.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(r,K.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:r}=this.heightMap.lineAt(e,K.ByPos,this.heightOracle,0,0),{bottom:i}=this.heightMap.lineAt(t,K.ByPos,this.heightOracle,0,0),{visibleTop:a,visibleBottom:o}=this;return(e==0||r<=a-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||i>=o+Math.max(10,Math.min(n,250)))&&r>a-2e3&&i<o+2e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let r of e)t.touchesRange(r.from,r.to)||n.push(new xp(t.mapPos(r.from),t.mapPos(r.to),r.size,r.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,r=n?1e4:2e3,i=r>>1,a=r<<1;if(this.defaultTextDirection!=U.LTR&&!n)return[];let o=[],s=(r,a,c,l)=>{if(a-r<i)return;let u=this.state.selection.main,d=[u.from];u.empty||d.push(u.to);for(let e of d)if(e>r&&e<a){s(r,e-10,c,l),s(e+10,a,c,l);return}let f=Op(e,e=>e.from>=c.from&&e.to<=c.to&&Math.abs(e.from-r)<i&&Math.abs(e.to-a)<i&&!d.some(t=>e.from<t&&e.to>t));if(!f){if(a<c.to&&t&&n&&t.visibleRanges.some(e=>e.from<=a&&e.to>=a)){let e=t.moveToLineBoundary(P.cursor(a),!1,!0).head;e>r&&(a=e)}let e=this.gapSize(c,r,a,l);f=new xp(r,a,e,n||e<2e6?e:2e6)}o.push(f)},c=t=>{if(t.length<a||t.type!=vl.Text)return;let i=Tp(t.from,t.to,this.stateDeco);if(i.total<a)return;let o=this.scrollTarget?this.scrollTarget.range.head:null,c,l;if(n){let e=r/this.heightOracle.lineLength*this.heightOracle.lineHeight,n,a;if(o!=null){let r=Dp(i,o),s=((this.visibleBottom-this.visibleTop)/2+e)/t.height;n=r-s,a=r+s}else n=(this.visibleTop-t.top-e)/t.height,a=(this.visibleBottom-t.top+e)/t.height;c=Ep(i,n),l=Ep(i,a)}else{let n=i.total*this.heightOracle.charWidth,a=r*this.heightOracle.charWidth,s=0;if(n>2e6)for(let n of e)n.from>=t.from&&n.from<t.to&&n.size!=n.displaySize&&n.from*this.heightOracle.charWidth+s<this.pixelViewport.left&&(s=n.size-n.displaySize);let u=this.pixelViewport.left+s,d=this.pixelViewport.right+s,f,p;if(o!=null){let e=Dp(i,o),t=((d-u)/2+a)/n;f=e-t,p=e+t}else f=(u-a)/n,p=(d+a)/n;c=Ep(i,f),l=Ep(i,p)}c>t.from&&s(t.from,c,t,i),l<t.to&&s(l,t.to,t,i)};for(let e of this.viewportLines)Array.isArray(e.type)?e.type.forEach(c):c(e);return o}gapSize(e,t,n,r){let i=Dp(r,n)-Dp(r,t);return this.heightOracle.lineWrapping?e.height*i:r.total*this.heightOracle.charWidth*i}updateLineGaps(e){xp.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=H.set(e.map(e=>e.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];z.spans(t,this.viewport.from,this.viewport.to,{span(e,t){n.push({from:e,to:t})},point(){}},20);let r=0;if(n.length!=this.visibleRanges.length)r=12;else for(let t=0;t<n.length&&!(r&8);t++){let i=this.visibleRanges[t],a=n[t];(i.from!=a.from||i.to!=a.to)&&(r|=4,e&&e.mapPos(i.from,-1)==a.from&&e.mapPos(i.to,1)==a.to||(r|=8))}return this.visibleRanges=n,r}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Mp(this.heightMap.lineAt(e,K.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Mp(this.heightMap.lineAt(this.scaler.fromDOM(e),K.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Mp(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}},wp=class{constructor(e,t){this.from=e,this.to=t}};function Tp(e,t,n){let r=[],i=e,a=0;return z.spans(n,e,t,{span(){},point(e,t){e>i&&(r.push({from:i,to:e}),a+=e-i),i=t}},20),i<t&&(r.push({from:i,to:t}),a+=t-i),{total:a,ranges:r}}function Ep({total:e,ranges:t},n){if(n<=0)return t[0].from;if(n>=1)return t[t.length-1].to;let r=Math.floor(e*n);for(let e=0;;e++){let{from:n,to:i}=t[e],a=i-n;if(r<=a)return n+r;r-=a}}function Dp(e,t){let n=0;for(let{from:r,to:i}of e.ranges){if(t<=i){n+=t-r;break}n+=i-r}return n/e.total}function Op(e,t){for(let n of e)if(t(n))return n}var kp={toDOM(e){return e},fromDOM(e){return e},scale:1,eq(e){return e==this}};function Ap(e){let t=e.facet(Wu).filter(e=>typeof e!=`function`),n=e.facet(Ku).filter(e=>typeof e!=`function`);return n.length&&t.push(z.join(n)),t}var jp=class e{constructor(e,t,n){let r=0,i=0,a=0;this.viewports=n.map(({from:n,to:i})=>{let a=t.lineAt(n,K.ByPos,e,0,0).top,o=t.lineAt(i,K.ByPos,e,0,0).bottom;return r+=o-a,{from:n,to:i,top:a,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-r)/(t.height-r);for(let e of this.viewports)e.domTop=a+(e.top-i)*this.scale,a=e.domBottom=e.domTop+(e.bottom-e.top),i=e.bottom}toDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.top)return r+(e-n)*this.scale;if(e<=i.bottom)return i.domTop+(e-i.top);n=i.bottom,r=i.domBottom}}fromDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.domTop)return n+(e-r)/this.scale;if(e<=i.domBottom)return i.top+(e-i.domTop);n=i.bottom,r=i.domBottom}}eq(t){return t instanceof e&&this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,n)=>e.from==t.viewports[n].from&&e.to==t.viewports[n].to)}};function Mp(e,t){if(t.scale==1)return e;let n=t.toDOM(e.top),r=t.toDOM(e.bottom);return new ip(e.from,e.length,n,r-n,Array.isArray(e._content)?e._content.map(e=>Mp(e,t)):e._content)}var Np=F.define({combine:e=>e.join(` `)}),Pp=F.define({combine:e=>e.indexOf(!0)>-1}),Fp=Uc.newName(),Ip=Uc.newName(),Lp=Uc.newName(),Rp={"&light":`.`+Ip,"&dark":`.`+Lp};function zp(e,t,n){return new Uc(t,{finish(t){return/&/.test(t)?t.replace(/&\w*/,t=>{if(t==`&`)return e;if(!n||!n[t])throw RangeError(`Unsupported selector: ${t}`);return n[t]}):e+` `+t}})}var Bp=zp(`.`+Fp,{"&":{position:`relative !important`,boxSizing:`border-box`,"&.cm-focused":{outline:`1px dotted #212121`},display:`flex !important`,flexDirection:`column`},".cm-scroller":{display:`flex !important`,alignItems:`flex-start !important`,fontFamily:`monospace`,lineHeight:1.4,height:`100%`,overflowX:`auto`,position:`relative`,zIndex:0,overflowAnchor:`none`},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:`block`,whiteSpace:`pre`,wordWrap:`normal`,boxSizing:`border-box`,minHeight:`100%`,padding:`4px 0`,outline:`none`,"&[contenteditable=true]":{WebkitUserModify:`read-write-plaintext-only`}},".cm-lineWrapping":{whiteSpace_fallback:`pre-wrap`,whiteSpace:`break-spaces`,wordBreak:`break-word`,overflowWrap:`anywhere`,flexShrink:1},"&light .cm-content":{caretColor:`black`},"&dark .cm-content":{caretColor:`white`},".cm-line":{display:`block`,padding:`0 2px 0 6px`},".cm-layer":{userSelect:`none`,position:`absolute`,left:0,top:0,contain:`size style`,"& > *":{position:`absolute`}},"&light .cm-selectionBackground":{background:`#d9d9d9`},"&dark .cm-selectionBackground":{background:`#222`},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#d7d4f0`},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#233`},".cm-cursorLayer":{pointerEvents:`none`},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:`steps(1) cm-blink 1.2s infinite`},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:`1.2px solid black`,marginLeft:`-0.6px`,pointerEvents:`none`},".cm-cursor":{display:`none`},"&dark .cm-cursor":{borderLeftColor:`#ddd`},".cm-selectionHandle":{backgroundColor:`currentColor`,width:`1.5px`},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:`""`,backgroundColor:`inherit`,borderRadius:`50%`,width:`8px`,height:`8px`,position:`absolute`,left:`-3.25px`},".cm-selectionHandle-start::before":{top:`-8px`},".cm-selectionHandle-end::before":{bottom:`-8px`},".cm-dropCursor":{position:`absolute`},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:`block`},".cm-iso":{unicodeBidi:`isolate`},".cm-announced":{position:`fixed`,top:`-10000px`},"@media print":{".cm-announced":{display:`none`}},"&light .cm-activeLine":{backgroundColor:`#cceeff44`},"&dark .cm-activeLine":{backgroundColor:`#99eeff33`},"&light .cm-specialChar":{color:`red`},"&dark .cm-specialChar":{color:`#f78`},".cm-gutters":{flexShrink:0,display:`flex`,height:`100%`,boxSizing:`border-box`,zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:`#f5f5f5`,color:`#6c6c6c`,border:`0px solid #ddd`,"&.cm-gutters-before":{borderRightWidth:`1px`},"&.cm-gutters-after":{borderLeftWidth:`1px`}},"&dark .cm-gutters":{backgroundColor:`#333338`,color:`#ccc`},".cm-gutter":{display:`flex !important`,flexDirection:`column`,flexShrink:0,boxSizing:`border-box`,minHeight:`100%`,overflow:`hidden`},".cm-gutterElement":{boxSizing:`border-box`},".cm-lineNumbers .cm-gutterElement":{padding:`0 3px 0 5px`,minWidth:`20px`,textAlign:`right`,whiteSpace:`nowrap`},"&light .cm-activeLineGutter":{backgroundColor:`#e2f2ff`},"&dark .cm-activeLineGutter":{backgroundColor:`#222227`},".cm-panels":{boxSizing:`border-box`,position:`sticky`,left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:`#f5f5f5`,color:`black`},".cm-panels-top":{top:`0`},".cm-panels-bottom":{bottom:`0`},"&light .cm-panels-top":{borderBottom:`1px solid #ddd`},"&light .cm-panels-bottom":{borderTop:`1px solid #ddd`},"&dark .cm-panels":{backgroundColor:`#333338`,color:`white`},".cm-dialog":{padding:`2px 19px 4px 6px`,position:`relative`,"& label":{fontSize:`80%`}},".cm-dialog-close":{position:`absolute`,top:`3px`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,fontSize:`14px`,padding:`0`},".cm-tab":{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`},".cm-widgetBuffer":{verticalAlign:`text-top`,height:`1em`,width:0,display:`inline`},".cm-placeholder":{color:`#888`,display:`inline-block`,verticalAlign:`top`,userSelect:`none`},".cm-highlightSpace":{backgroundImage:`radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)`,backgroundPosition:`center`},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:`auto 100%`,backgroundPosition:`right 90%`,backgroundRepeat:`no-repeat`},".cm-trailingSpace":{backgroundColor:`#ff332255`},".cm-button":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,padding:`.2em 1em`,borderRadius:`1px`},"&light .cm-button":{backgroundImage:`linear-gradient(#eff1f5, #d9d9df)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#b4b4b4, #d0d3d6)`}},"&dark .cm-button":{backgroundImage:`linear-gradient(#393939, #111)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#111, #333)`}},".cm-textfield":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,border:`1px solid silver`,padding:`.2em .5em`},"&light .cm-textfield":{backgroundColor:`white`},"&dark .cm-textfield":{border:`1px solid #555`,backgroundColor:`inherit`}},Rp),Vp={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},Hp=V.ie&&V.ie_version<=11,Up=class{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new Bl,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let e of t)this.queue.push(e);(V.ie&&V.ie_version<=11||V.ios&&e.composing)&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&V.android&&e.constructor.EDIT_CONTEXT!==!1&&!(V.chrome&&V.chrome_version<126)&&(this.editContext=new qp(e),e.state.facet(Lu)&&(e.contentDOM.editContext=this.editContext.editContext)),Hp&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia(`print`)),typeof ResizeObserver==`function`&&(this.resizeScroll=new ResizeObserver(()=>{this.view.docView?.lastUpdate<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver==`function`&&(this.intersection=new IntersectionObserver(e=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),e.length>0&&e[e.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent(`Event`)))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(e=>{e.length>0&&e[e.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent(`Event`))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers(`scroll`,e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type==`change`||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,r=this.selectionRange;if(n.state.facet(Lu)?n.root.activeElement!=this.dom:!Ol(this.dom,r))return;let i=r.anchorNode&&n.docView.tile.nearest(r.anchorNode);if(i&&i.isWidget()&&i.widget.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(V.ie&&V.ie_version<=11||V.android&&V.chrome)&&!n.state.selection.main.empty&&r.focusNode&&Al(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=El(e.root);if(!t)return!1;let n=V.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&Kp(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let r=Ol(this.dom,n);return r&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&Yl(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),r&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(n.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||=this.scrollTargets.slice(0,e),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);for(let e of this.scrollTargets=t)e.addEventListener(`scroll`,this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||=(this.observer.observe(this.dom,Vp),Hp&&this.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),Hp&&this.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){if(!this.delayedAndroidKey){let e=()=>{let e=this.delayedAndroidKey;e&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=e.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&e.force&&ql(this.dom,e.key,e.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(e)}(!this.delayedAndroidKey||e==`Enter`)&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!this.delayedAndroidKey?.force})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,r=!1;for(let i of e){let e=this.readMutation(i);e&&(e.typeOver&&(r=!0),t==-1?{from:t,to:n}=e:(t=Math.min(e.from,t),n=Math.max(e.to,n)))}return{from:t,to:n,typeOver:r}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),r=this.selectionChanged&&Ol(this.dom,this.selectionRange);if(e<0&&!r)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let i=new of(this.view,e,t,n);return this.view.docView.domChanged={newSel:i.newSel?i.newSel.main:null},i}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let n=this.view.state,r=cf(this.view,t);return this.view.state==n&&(t.domChanged||t.newSel&&!mf(this.view.state.selection,t.newSel.main))&&this.view.update([]),r}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty(e.type==`attributes`),e.type==`childList`){let n=Wp(t,e.previousSibling||e.target.previousSibling,-1),r=Wp(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:r?t.posBefore(r):t.posAtEnd,typeOver:!1}}return e.type==`characterData`?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener(`change`,this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener(`beforeprint`,this.onPrint),e.addEventListener(`scroll`,this.onScroll),e.document.addEventListener(`selectionchange`,this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener(`scroll`,this.onScroll),e.removeEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener(`change`,this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener(`beforeprint`,this.onPrint),e.document.removeEventListener(`selectionchange`,this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Lu)!=e.state.facet(Lu)&&(e.view.contentDOM.editContext=e.state.facet(Lu)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)==null||e.disconnect(),(t=this.gapIntersection)==null||t.disconnect(),(n=this.resizeScroll)==null||n.disconnect();for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}};function Wp(e,t,n){for(;t;){let r=G.get(t);if(r&&r.parent==e)return r;let i=t.parentNode;t=i==e.dom?n>0?t.nextSibling:t.previousSibling:i}return null}function Gp(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.docView.domAtPos(e.state.selection.main.anchor,1);return Al(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function Kp(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return Gp(e,n)}let n=null;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.contentDOM.addEventListener(`beforeinput`,r,!0),e.dom.ownerDocument.execCommand(`indent`),e.contentDOM.removeEventListener(`beforeinput`,r,!0),n?Gp(e,n):null}var qp=class{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let r=e.state.selection.main,{anchor:i,head:a}=r,o=this.toEditorPos(n.updateRangeStart),s=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:o,drifted:!1});let c=s-o>n.text.length;o==this.from&&i<this.from?o=i:s==this.to&&i>this.to&&(s=i);let l=df(e.state.sliceDoc(o,s),n.text,(c?r.from:r.to)-o,c?`end`:null);if(!l){let t=P.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));mf(t,r)||e.dispatch({selection:t,userEvent:`select`});return}let u={from:l.from+o,to:l.toA+o,insert:N.of(n.text.slice(l.from,l.toB).split(`
`))};if((V.mac||V.android)&&u.from==a-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute(`autocorrect`)==`off`&&(u={from:o,to:s,insert:N.of([n.text.replace(`.`,` `)])}),this.pendingContextChange=u,!e.state.readOnly){let t=this.to-this.from+(u.to-u.from+u.insert.length);lf(e,u,P.single(this.toEditorPos(n.selectionStart,t),this.toEditorPos(n.selectionEnd,t)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),u.from<u.to&&!u.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let r=[],i=null;for(let t=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);t<a;t++){let n=e.coordsForChar(t);i=n&&new DOMRect(n.left,n.top,n.right-n.left,n.bottom-n.top)||i||new DOMRect,r.push(i)}t.updateCharacterBounds(n.rangeStart,r)},this.handlers.textformatupdate=t=>{let n=[];for(let e of t.getTextFormats()){let t=e.underlineStyle,r=e.underlineThickness;if(!/none/i.test(t)&&!/none/i.test(r)){let i=this.toEditorPos(e.rangeStart),a=this.toEditorPos(e.rangeEnd);if(i<a){let e=`text-decoration: underline ${/^[a-z]/.test(t)?t+` `:t==`Dashed`?`dashed `:t==`Squiggle`?`wavy `:``}${/thin/i.test(r)?1:2}px`;n.push(H.mark({attributes:{style:e}}).range(i,a))}}}e.dispatch({effects:Fu.of(H.set(n))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:t}=this.composing;this.composing=null,t&&this.reset(e.state)}};for(let e in this.handlers)t.addEventListener(e,this.handlers[e]);this.measureReq={read:e=>{let t=El(e.root);t&&t.rangeCount&&this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,r=this.pendingContextChange;return e.changes.iterChanges((i,a,o,s,c)=>{if(n)return;let l=c.length-(a-i);if(r&&a>=r.to){if(r.from==i&&r.to==a&&r.insert.eq(c)){r=this.pendingContextChange=null,t+=l,this.to+=l;return}r=null,this.revertPending(e.state)}if(i+=t,a+=t,a<=this.from)this.from+=l,this.to+=l;else if(i<this.to){if(i<this.from||a>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(i),this.toContextPos(a),c.toString()),this.to+=l}t+=l}),r&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(e=>!e.isUserEvent(`input.type`)&&e.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),r=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=r)&&this.editContext.updateSelection(n,r)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>3e4)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}},q=class e{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement(`div`),this.scrollDOM=document.createElement(`div`),this.scrollDOM.tabIndex=-1,this.scrollDOM.className=`cm-scroller`,this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement(`div`),this.announceDOM.className=`cm-announced`,this.announceDOM.setAttribute(`aria-live`,`polite`),this.dom=document.createElement(`div`),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:t}=e;this.dispatchTransactions=e.dispatchTransactions||t&&(e=>e.forEach(e=>t(e,this)))||(e=>this.update(e)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Jl(e.parent)||document,this.viewState=new Cp(this,e.state||R.create(e)),e.scrollTo&&e.scrollTo.is(Pu)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(zu).map(e=>new Vu(e));for(let e of this.plugins)e.update(this);this.observer=new Up(this),this.inputState=new hf(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Od(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),document.fonts?.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent=`refresh`,this.requestMeasure()})}dispatch(...e){let t=e.length==1&&e[0]instanceof oc?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(t){if(this.updateState!=0)throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);let n=!1,r=!1,i,a=this.state;for(let e of t){if(e.startState!=a)throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);a=e.state}if(this.destroyed){this.viewState.state=a;return}let o=this.hasFocus,s=0,c=null;t.some(e=>e.annotation(Jf))?(this.inputState.notifiedFocused=o,s=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,c=Yf(a,o),c||(s=1));let l=this.observer.delayedAndroidKey,u=null;if(l?(this.observer.clearDelayedAndroidKey(),u=this.observer.readChange(),(u&&!this.state.doc.eq(a.doc)||!this.state.selection.eq(a.selection))&&(u=null)):this.observer.clear(),a.facet(R.phrases)!=this.state.facet(R.phrases))return this.setState(a);i=ed.create(this,a,t),i.flags|=s;let d=this.viewState.scrollTarget;try{this.updateState=2;for(let n of t){if(d&&=d.map(n.changes),n.scrollIntoView){let{main:t}=n.state.selection,{x:r,y:i}=this.state.facet(e.cursorScrollMargin);d=new Nu(t.empty?t:P.cursor(t.head,t.head>t.anchor?-1:1),`nearest`,`nearest`,i,r)}for(let e of n.effects)e.is(Pu)&&(d=e.value.clip(this.state))}this.viewState.update(i,d),this.bidiCache=Xp.update(this.bidiCache,i.changes),i.empty||(this.updatePlugins(i),this.inputState.update(i)),n=this.docView.update(i),this.state.facet(Qu)!=this.styleModules&&this.mountStyles(),r=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(n,t.some(e=>e.isUserEvent(`select.pointer`)))}finally{this.updateState=0}if(i.startState.facet(Np)!=i.state.facet(Np)&&(this.viewState.mustMeasureContent=!0),(n||r||d||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!i.empty)for(let e of this.state.facet(Tu))try{e(i)}catch(e){Iu(this.state,e,`update listener`)}(c||u)&&Promise.resolve().then(()=>{c&&this.state==c.startState&&this.dispatch(c),u&&!cf(this,u)&&l.force&&ql(this.contentDOM,l.key,l.keyCode)})}setState(e){if(this.updateState!=0)throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let e of this.plugins)e.destroy(this);this.viewState=new Cp(this,e),this.plugins=e.facet(zu).map(e=>new Vu(e)),this.pluginMap.clear();for(let e of this.plugins)e.update(this);this.docView.destroy(),this.docView=new Od(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(zu),n=e.state.facet(zu);if(t!=n){let r=[];for(let i of n){let n=t.indexOf(i);if(n<0)r.push(new Vu(i));else{let t=this.plugins[n];t.mustUpdate=e,r.push(t)}}for(let t of this.plugins)t.mustUpdate!=e&&t.destroy(this);this.plugins=r,this.pluginMap.clear()}else for(let t of this.plugins)t.mustUpdate=e;for(let e=0;e<this.plugins.length;e++)this.plugins[e].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(e){Iu(this.state,e,`doc view update listener`)}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.viewState.scrollParent,r=this.viewState.getScrollOffset(),{scrollAnchorPos:i,scrollAnchorHeight:a}=this.viewState;Math.abs(r-this.viewState.scrollOffset)>1&&(a=-1),this.viewState.scrollAnchorHeight=-1;try{for(let e=0;;e++){if(a<0){if(Xl(n||this.win))i=-1,a=this.viewState.heightMap.height;else{let e=this.viewState.scrollAnchorAt(r);i=e.from,a=e.top}}this.updateState=1;let o=this.viewState.measure();if(!o&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(e>5){console.warn(this.measureRequests.length?`Measure loop restarted more than 5 times`:`Viewport failed to stabilize`);break}let s=[];o&4||([this.measureRequests,s]=[s,this.measureRequests]);let c=s.map(e=>{try{return e.read(this)}catch(e){return Iu(this.state,e),Yp}}),l=ed.create(this,this.state,[]),u=!1;l.flags|=o,t?t.flags|=o:t=l,this.updateState=2,l.empty||(this.updatePlugins(l),this.inputState.update(l),this.updateAttrs(),u=this.docView.update(l),u&&this.docViewUpdate());for(let e=0;e<s.length;e++)if(c[e]!=Yp)try{let t=s[e];t.write&&t.write(c[e],this)}catch(e){Iu(this.state,e)}if(u&&this.docView.updateSelection(!0),!l.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,a=-1;continue}{let e=((i<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(i).top)-a)/this.scaleY;if((e>1||e<-1)&&!(V.ios&&this.inputState.lastIOSMomentumScroll>Date.now()-100)&&(n==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){r+=e,n?n.scrollTop+=e:this.win.scrollBy(0,e),a=-1;continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let e of this.state.facet(Tu))e(t)}get themeClasses(){return Fp+` `+(this.state.facet(Pp)?Lp:Ip)+` `+this.state.facet(Np)}updateAttrs(){let e=Zp(this,Hu,{class:`cm-editor`+(this.hasFocus?` cm-focused `:` `)+this.themeClasses}),t={spellcheck:`false`,autocorrect:`off`,autocapitalize:`off`,writingsuggestions:`false`,translate:`no`,contenteditable:this.state.facet(Lu)?`true`:`false`,class:`cm-content`,style:`${V.tabSize}: ${this.state.tabSize}`,role:`textbox`,"aria-multiline":`true`};this.state.readOnly&&(t[`aria-readonly`]=`true`),Zp(this,Uu,t);let n=this.observer.ignore(()=>{let n=hl(this.contentDOM,this.contentAttrs,t),r=hl(this.dom,this.editorAttrs,e);return n||r});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(t){let n=!0;for(let r of t)for(let t of r.effects)if(t.is(e.announce)){n&&(this.announceDOM.textContent=``),n=!1;let e=this.announceDOM.appendChild(document.createElement(`div`));e.textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(Qu);let t=this.state.facet(e.cspNonce);Uc.mount(this.root,this.styleModules.concat(Bp).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(this.updateState==2)throw Error(`Reading the editor layout isn't allowed during an update`);this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(t=>t.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return Xd(this,e,Gd(this,e,t,n))}moveByGroup(e,t){return Xd(this,e,Gd(this,e,t,t=>Kd(this,e.head,t)))}visualLineSide(e,t){let n=this.bidiSpans(e),r=this.textDirectionAt(e.from),i=n[t?n.length-1:0];return P.cursor(i.side(t,r)+e.from,i.forward(!t,r)?1:-1)}moveToLineBoundary(e,t,n=!0){return Wd(this,e,t,n)}moveVertically(e,t,n){return Xd(this,e,qd(this,e,t,n))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let n=Qd(this,e,t);return n&&n.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),Qd(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.state.doc.lineAt(e),r=this.bidiSpans(n),i=r[lu.find(r,e-n.from,-1,t)];return this.docView.coordsAt(e,t,i.dir==U.RTL)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(Au)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>Jp)return _u(e.length);let t=this.textDirectionAt(e.from),n;for(let r of this.bidiCache)if(r.from==e.from&&r.dir==t&&(r.fresh||uu(r.isolates,n=Yu(this,e))))return r.order;n||=Yu(this,e);let r=gu(e.text,t,n);return this.bidiCache.push(new Xp(e.from,e.to,t,n,!0,r)),r}get hasFocus(){return(this.dom.ownerDocument.hasFocus()||V.safari&&this.inputState?.lastContextMenu>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Wl(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Pu.of(new Nu(typeof e==`number`?P.cursor(e):e,t.y??`nearest`,t.x??`nearest`,t.yMargin??5,t.xMargin??5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Pu.of(new Nu(P.cursor(n.from),`start`,`start`,n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e==`boolean`?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Bu.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Bu.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=Uc.newName(),r=[Np.of(n),Qu.of(zp(`.${n}`,e))];return t&&t.dark&&r.push(Pp.of(!0)),r}static baseTheme(e){return Hs.lowest(Qu.of(zp(`.`+Fp,e,Rp)))}static findFromDOM(e){let t=e.querySelector(`.cm-content`);return(t&&G.get(t)||G.get(e))?.root?.view||null}};q.styleModule=Qu,q.inputHandler=Eu,q.clipboardInputFilter=Ou,q.clipboardOutputFilter=ku,q.scrollHandler=Mu,q.focusChangeEffect=Du,q.perLineTextDirection=Au,q.exceptionSink=wu,q.updateListener=Tu,q.editable=Lu,q.mouseSelectionStyle=Cu,q.dragMovesSelection=Su,q.clickAddsSelectionRange=xu,q.decorations=Wu,q.blockWrappers=Gu,q.outerDecorations=Ku,q.atomicRanges=qu,q.bidiIsolatedRanges=Ju,q.cursorScrollMargin=F.define({combine:e=>{let t=5,n=5;for(let r of e)typeof r==`number`?t=n=r:{x:t,y:n}=r;return{x:t,y:n}}}),q.scrollMargins=Xu,q.darkTheme=Pp,q.cspNonce=F.define({combine:e=>e.length?e[0]:``}),q.contentAttributes=Uu,q.editorAttributes=Hu,q.lineWrapping=q.contentAttributes.of({class:`cm-lineWrapping`}),q.announce=I.define();var Jp=4096,Yp={},Xp=class e{constructor(e,t,n,r,i,a){this.from=e,this.to=t,this.dir=n,this.isolates=r,this.fresh=i,this.order=a}static update(t,n){if(n.empty&&!t.some(e=>e.fresh))return t;let r=[],i=t.length?t[t.length-1].dir:U.LTR;for(let a=Math.max(0,t.length-10);a<t.length;a++){let o=t[a];o.dir==i&&!n.touchesRange(o.from,o.to)&&r.push(new e(n.mapPos(o.from,1),n.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return r}};function Zp(e,t,n){for(let r=e.state.facet(t),i=r.length-1;i>=0;i--){let t=r[i],a=typeof t==`function`?t(e):t;a&&dl(a,n)}return n}var Qp=V.mac?`mac`:V.windows?`win`:V.linux?`linux`:`key`;function $p(e,t){let n=e.split(/-(?!$)/),r=n[n.length-1];r==`Space`&&(r=` `);let i,a,o,s;for(let e=0;e<n.length-1;++e){let r=n[e];if(/^(cmd|meta|m)$/i.test(r))s=!0;else if(/^a(lt)?$/i.test(r))i=!0;else if(/^(c|ctrl|control)$/i.test(r))a=!0;else if(/^s(hift)?$/i.test(r))o=!0;else if(/^mod$/i.test(r))t==`mac`?s=!0:a=!0;else throw Error(`Unrecognized modifier name: `+r)}return i&&(r=`Alt-`+r),a&&(r=`Ctrl-`+r),s&&(r=`Meta-`+r),o&&(r=`Shift-`+r),r}function em(e,t,n){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n!==!1&&t.shiftKey&&(e=`Shift-`+e),e}var tm=Hs.default(q.domEventHandlers({keydown(e,t){return um(im(t.state),e,t,`editor`)}})),nm=F.define({enables:tm}),rm=new WeakMap;function im(e){let t=e.facet(nm),n=rm.get(t);return n||rm.set(t,n=cm(t.reduce((e,t)=>e.concat(t),[]))),n}function am(e,t,n){return um(im(e.state),t,e,n)}var om=null,sm=4e3;function cm(e,t=Qp){let n=Object.create(null),r=Object.create(null),i=(e,t)=>{let n=r[e];if(n==null)r[e]=t;else if(n!=t)throw Error(`Key binding `+e+` is used both as a regular binding and as a multi-stroke prefix`)},a=(e,r,a,o,s)=>{let c=n[e]||(n[e]=Object.create(null)),l=r.split(/ (?!$)/).map(e=>$p(e,t));for(let t=1;t<l.length;t++){let n=l.slice(0,t).join(` `);i(n,!0),c[n]||(c[n]={preventDefault:!0,stopPropagation:!1,run:[t=>{let r=om={view:t,prefix:n,scope:e};return setTimeout(()=>{om==r&&(om=null)},sm),!0}]})}let u=l.join(` `);i(u,!1);let d=c[u]||(c[u]={preventDefault:!1,stopPropagation:!1,run:(c._any?.run)?.slice()||[]});a&&d.run.push(a),o&&(d.preventDefault=!0),s&&(d.stopPropagation=!0)};for(let r of e){let e=r.scope?r.scope.split(` `):[`editor`];if(r.any)for(let t of e){let e=n[t]||(n[t]=Object.create(null));e._any||={preventDefault:!1,stopPropagation:!1,run:[]};let{any:i}=r;for(let t in e)e[t].run.push(e=>i(e,lm))}let i=r[t]||r.key;if(i)for(let t of e)a(t,i,r.run,r.preventDefault,r.stopPropagation),r.shift&&a(t,`Shift-`+i,r.shift,r.preventDefault,r.stopPropagation)}return n}var lm=null;function um(e,t,n,r){lm=t;let i=Qc(t),a=ys(_s(i,0))==i.length&&i!=` `,o=``,s=!1,c=!1,l=!1;om&&om.view==n&&om.scope==r&&(o=om.prefix+` `,xf.indexOf(t.keyCode)<0&&(c=!0,om=null));let u=new Set,d=e=>{if(e){for(let t of e.run)if(!u.has(t)&&(u.add(t),t(n)))return e.stopPropagation&&(l=!0),!0;e.preventDefault&&(e.stopPropagation&&(l=!0),c=!0)}return!1},f=e[r],p,m;return f&&(d(f[o+em(i,t,!a)])?s=!0:a&&(t.altKey||t.metaKey||t.ctrlKey)&&!(V.windows&&t.ctrlKey&&t.altKey)&&!(V.mac&&t.altKey&&!(t.ctrlKey||t.metaKey))&&(p=Kc[t.keyCode])&&p!=i?(d(f[o+em(p,t,!0)])||t.shiftKey&&(m=qc[t.keyCode])!=i&&m!=p&&d(f[o+em(m,t,!1)]))&&(s=!0):a&&t.shiftKey&&d(f[o+em(i,t,!0)])&&(s=!0),!s&&d(f._any)&&(s=!0)),c&&(s=!0),s&&l&&t.stopPropagation(),lm=null,s}var dm=class e{constructor(e,t,n,r,i){this.className=e,this.left=t,this.top=n,this.width=r,this.height=i}draw(){let e=document.createElement(`div`);return e.className=this.className,this.adjust(e),e}update(e,t){return t.className==this.className&&(this.adjust(e),!0)}adjust(e){e.style.left=this.left+`px`,e.style.top=this.top+`px`,this.width!=null&&(e.style.width=this.width+`px`),e.style.height=this.height+`px`}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(t,n,r){if(r.empty){let i=t.coordsAtPos(r.head,r.assoc||1);if(!i)return[];let a=fm(t);return[new e(n,i.left-a.left,i.top-a.top,null,i.bottom-i.top)]}return mm(t,n,r)}};function fm(e){let t=e.scrollDOM.getBoundingClientRect();return{left:(e.textDirection==U.LTR?t.left:t.right-e.scrollDOM.clientWidth*e.scaleX)-e.scrollDOM.scrollLeft*e.scaleX,top:t.top-e.scrollDOM.scrollTop*e.scaleY}}function pm(e,t,n,r){let i=e.coordsAtPos(t,n*2);if(!i)return r;let a=e.dom.getBoundingClientRect(),o=(i.top+i.bottom)/2,s=e.posAtCoords({x:a.left+1,y:o}),c=e.posAtCoords({x:a.right-1,y:o});return s==null||c==null?r:{from:Math.max(r.from,Math.min(s,c)),to:Math.min(r.to,Math.max(s,c))}}function mm(e,t,n){if(n.to<=e.viewport.from||n.from>=e.viewport.to)return[];let r=Math.max(n.from,e.viewport.from),i=Math.min(n.to,e.viewport.to),a=e.textDirection==U.LTR,o=e.contentDOM,s=o.getBoundingClientRect(),c=fm(e),l=o.querySelector(`.cm-line`),u=l&&window.getComputedStyle(l),d=s.left+(u?parseInt(u.paddingLeft)+Math.min(0,parseInt(u.textIndent)):0),f=s.right-(u?parseInt(u.paddingRight):0),p=Ud(e,r,1),m=Ud(e,i,-1),h=p.type==vl.Text?p:null,g=m.type==vl.Text?m:null;if(h&&(e.lineWrapping||p.widgetLineBreaks)&&(h=pm(e,r,1,h)),g&&(e.lineWrapping||m.widgetLineBreaks)&&(g=pm(e,i,-1,g)),h&&g&&h.from==g.from&&h.to==g.to)return v(y(n.from,n.to,h));{let t=h?y(n.from,null,h):ee(p,!1),r=g?y(null,n.to,g):ee(m,!0),i=[];return(h||p).to<(g||m).from-(h&&g?1:0)||p.widgetLineBreaks>1&&t.bottom+e.defaultLineHeight/2<r.top?i.push(_(d,t.bottom,f,r.top)):t.bottom<r.top&&e.elementAtHeight((t.bottom+r.top)/2).type==vl.Text&&(t.bottom=r.top=(t.bottom+r.top)/2),v(t).concat(i).concat(v(r))}function _(e,n,r,i){return new dm(t,e-c.left,n-c.top,Math.max(0,r-e),i-n)}function v({top:e,bottom:t,horizontal:n}){let r=[];for(let i=0;i<n.length;i+=2)r.push(_(n[i],e,n[i+1],t));return r}function y(t,n,r){let i=1e9,o=-1e9,s=[];function c(t,n,c,l,u){let p=e.coordsAtPos(t,t==r.to?-2:2),m=e.coordsAtPos(c,c==r.from?2:-2);!p||!m||(i=Math.min(p.top,m.top,i),o=Math.max(p.bottom,m.bottom,o),u==U.LTR?s.push(a&&n?d:p.left,a&&l?f:m.right):s.push(!a&&l?d:m.left,!a&&n?f:p.right))}let l=t??r.from,u=n??r.to;for(let r of e.visibleRanges)if(r.to>l&&r.from<u)for(let i=Math.max(r.from,l),a=Math.min(r.to,u);;){let r=e.state.doc.lineAt(i);for(let o of e.bidiSpans(r)){let e=o.from+r.from,s=o.to+r.from;if(e>=a)break;s>i&&c(Math.max(e,i),t==null&&e<=l,Math.min(s,a),n==null&&s>=u,o.dir)}if(i=r.to+1,i>=a)break}return s.length==0&&c(l,t==null,u,n==null,e.textDirection),{top:i,bottom:o,horizontal:s}}function ee(e,t){let n=s.top+(t?e.top:e.bottom);return{top:n,bottom:n,horizontal:[]}}}function hm(e,t){return e.constructor==t.constructor&&e.eq(t)}var gm=class{constructor(e,t){this.view=e,this.layer=t,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement(`div`)),this.dom.classList.add(`cm-layer`),t.above&&this.dom.classList.add(`cm-layer-above`),t.class&&this.dom.classList.add(t.class),this.scale(),this.dom.setAttribute(`aria-hidden`,`true`),this.setOrder(e.state),e.requestMeasure(this.measureReq),t.mount&&t.mount(this.dom,e)}update(e){e.startState.facet(_m)!=e.state.facet(_m)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let t=0,n=e.facet(_m);for(;t<n.length&&n[t]!=this.layer;)t++;this.dom.style.zIndex=String((this.layer.above?150:-1)-t)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:t}=this.view;(e!=this.scaleX||t!=this.scaleY)&&(this.scaleX=e,this.scaleY=t,this.dom.style.transform=`scale(${1/e}, ${1/t})`)}draw(e){if(e.length!=this.drawn.length||e.some((e,t)=>!hm(e,this.drawn[t]))){let t=this.dom.firstChild,n=0;for(let r of e)r.update&&t&&r.constructor&&this.drawn[n].constructor&&r.update(t,this.drawn[n])?(t=t.nextSibling,n++):this.dom.insertBefore(r.draw(),t);for(;t;){let e=t.nextSibling;t.remove(),t=e}this.drawn=e,V.webkit&&(this.dom.style.display=this.dom.firstChild?``:`none`)}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}},_m=F.define();function vm(e){return[Bu.define(t=>new gm(t,e)),_m.of(e)]}var ym=F.define({combine(e){return yc(e,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,t)=>Math.min(e,t),drawRangeCursor:(e,t)=>e||t})}});function bm(e={}){return[ym.of(e),Sm,wm,Em,ju.of(!0)]}function xm(e){return e.startState.facet(ym)!=e.state.facet(ym)}var Sm=vm({above:!0,markers(e){let{state:t}=e,n=t.facet(ym),r=[];for(let i of t.selection.ranges){let a=i==t.selection.main;if(i.empty||n.drawRangeCursor&&!(a&&V.ios&&n.iosSelectionHandles)){let t=a?`cm-cursor cm-cursor-primary`:`cm-cursor cm-cursor-secondary`,n=i.empty?i:P.cursor(i.head,i.assoc);for(let i of dm.forRange(e,t,n))r.push(i)}}return r},update(e,t){e.transactions.some(e=>e.selection)&&(t.style.animationName=t.style.animationName==`cm-blink`?`cm-blink2`:`cm-blink`);let n=xm(e);return n&&Cm(e.state,t),e.docChanged||e.selectionSet||n},mount(e,t){Cm(t.state,e)},class:`cm-cursorLayer`});function Cm(e,t){t.style.animationDuration=e.facet(ym).cursorBlinkRate+`ms`}var wm=vm({above:!1,markers(e){let t=[],{main:n,ranges:r}=e.state.selection;for(let n of r)if(!n.empty)for(let r of dm.forRange(e,`cm-selectionBackground`,n))t.push(r);if(V.ios&&!n.empty&&e.state.facet(ym).iosSelectionHandles){for(let r of dm.forRange(e,`cm-selectionHandle cm-selectionHandle-start`,P.cursor(n.from,1)))t.push(r);for(let r of dm.forRange(e,`cm-selectionHandle cm-selectionHandle-end`,P.cursor(n.to,1)))t.push(r)}return t},update(e,t){return e.docChanged||e.selectionSet||e.viewportChanged||xm(e)},class:`cm-selectionLayer`}),Tm=V.gecko&&V.gecko_version==153?`#ffffff01`:`transparent`,Em=Hs.highest(q.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:`${Tm} !important`},caretColor:`transparent !important`},".cm-content":{caretColor:`transparent !important`,"& :focus":{caretColor:`initial !important`,"&::selection, & ::selection":{backgroundColor:`Highlight !important`}}}})),Dm=I.define({map(e,t){return e==null?null:t.mapPos(e)}}),Om=zs.define({create(){return null},update(e,t){return e!=null&&(e=t.changes.mapPos(e)),t.effects.reduce((e,t)=>t.is(Dm)?t.value:e,e)}}),km=Bu.fromClass(class{constructor(e){this.view=e,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(e){var t;let n=e.state.field(Om);n==null?this.cursor!=null&&((t=this.cursor)==null||t.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement(`div`)),this.cursor.className=`cm-dropCursor`),(e.startState.field(Om)!=n||e.docChanged||e.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:e}=this,t=e.state.field(Om),n=t!=null&&e.coordsAtPos(t);if(!n)return null;let r=e.scrollDOM.getBoundingClientRect();return{left:n.left-r.left+e.scrollDOM.scrollLeft*e.scaleX,top:n.top-r.top+e.scrollDOM.scrollTop*e.scaleY,height:n.bottom-n.top}}drawCursor(e){if(this.cursor){let{scaleX:t,scaleY:n}=this.view;e?(this.cursor.style.left=e.left/t+`px`,this.cursor.style.top=e.top/n+`px`,this.cursor.style.height=e.height/n+`px`):this.cursor.style.left=`-100000px`}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(e){this.view.state.field(Om)!=e&&this.view.dispatch({effects:Dm.of(e)})}},{eventObservers:{dragover(e){this.setDropPos(this.view.posAtCoords({x:e.clientX,y:e.clientY}))},dragleave(e){(e.target==this.view.contentDOM||!this.view.contentDOM.contains(e.relatedTarget))&&this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}});function Am(){return[Om,km]}function jm(e,t,n,r,i){t.lastIndex=0;for(let a=e.iterRange(n,r),o=n,s;!a.next().done;o+=a.value.length)if(!a.lineBreak)for(;s=t.exec(a.value);)i(o+s.index,s)}function Mm(e,t){let n=e.visibleRanges;if(n.length==1&&n[0].from==e.viewport.from&&n[0].to==e.viewport.to)return n;let r=[];for(let{from:i,to:a}of n)i=Math.max(e.state.doc.lineAt(i).from,i-t),a=Math.min(e.state.doc.lineAt(a).to,a+t),r.length&&r[r.length-1].to>=i?r[r.length-1].to=a:r.push({from:i,to:a});return r}var Nm=class{constructor(e){let{regexp:t,decoration:n,decorate:r,boundary:i,maxLength:a=1e3}=e;if(!t.global)throw RangeError(`The regular expression given to MatchDecorator should have its 'g' flag set`);if(this.regexp=t,r)this.addMatch=(e,t,n,i)=>r(i,n,n+e[0].length,e,t);else if(typeof n==`function`)this.addMatch=(e,t,r,i)=>{let a=n(e,t,r);a&&i(r,r+e[0].length,a)};else if(n)this.addMatch=(e,t,r,i)=>i(r,r+e[0].length,n);else throw RangeError(`Either 'decorate' or 'decoration' should be provided to MatchDecorator`);this.boundary=i,this.maxLength=a}createDeco(e){let t=new Ec,n=t.add.bind(t);for(let{from:t,to:r}of Mm(e,this.maxLength))jm(e.state.doc,this.regexp,t,r,(t,r)=>this.addMatch(r,e,t,n));return t.finish()}updateDeco(e,t){let n=1e9,r=-1;return e.docChanged&&e.changes.iterChanges((t,i,a,o)=>{o>=e.view.viewport.from&&a<=e.view.viewport.to&&(n=Math.min(a,n),r=Math.max(o,r))}),e.viewportMoved||r-n>1e3?this.createDeco(e.view):r>-1?this.updateRange(e.view,t.map(e.changes),n,r):t}updateRange(e,t,n,r){for(let i of e.visibleRanges){let a=Math.max(i.from,n),o=Math.min(i.to,r);if(o>=a){let n=e.state.doc.lineAt(a),r=n.to<o?e.state.doc.lineAt(o):n,s=Math.max(i.from,n.from),c=Math.min(i.to,r.to);if(this.boundary){for(;a>n.from;a--)if(this.boundary.test(n.text[a-1-n.from])){s=a;break}for(;o<r.to;o++)if(this.boundary.test(r.text[o-r.from])){c=o;break}}let l=[],u,d=(e,t,n)=>l.push(n.range(e,t));if(n==r)for(this.regexp.lastIndex=s-n.from;(u=this.regexp.exec(n.text))&&u.index<c-n.from;)this.addMatch(u,e,u.index+n.from,d);else jm(e.state.doc,this.regexp,s,c,(t,n)=>this.addMatch(n,e,t,d));t=t.update({filterFrom:s,filterTo:c,filter:(e,t)=>e<s||t>c,add:l})}}return t}},Pm=/x/.unicode==null?`g`:`gu`,Fm=RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]`,Pm),Im={0:`null`,7:`bell`,8:`backspace`,10:`newline`,11:`vertical tab`,13:`carriage return`,27:`escape`,8203:`zero width space`,8204:`zero width non-joiner`,8205:`zero width joiner`,8206:`left-to-right mark`,8207:`right-to-left mark`,8232:`line separator`,8237:`left-to-right override`,8238:`right-to-left override`,8294:`left-to-right isolate`,8295:`right-to-left isolate`,8297:`pop directional isolate`,8233:`paragraph separator`,65279:`zero width no-break space`,65532:`object replacement`},Lm=null;function Rm(){if(Lm==null&&typeof document<`u`&&document.body){let e=document.body.style;Lm=(e.tabSize??e.MozTabSize)!=null}return Lm||!1}var zm=F.define({combine(e){let t=yc(e,{render:null,specialChars:Fm,addSpecialChars:null});return(t.replaceTabs=!Rm())&&(t.specialChars=RegExp(`	|`+t.specialChars.source,Pm)),t.addSpecialChars&&(t.specialChars=RegExp(t.specialChars.source+`|`+t.addSpecialChars.source,Pm)),t}});function Bm(e={}){return[zm.of(e),Hm()]}var Vm=null;function Hm(){return Vm||=Bu.fromClass(class{constructor(e){this.view=e,this.decorations=H.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(e.state.facet(zm)),this.decorations=this.decorator.createDeco(e)}makeDecorator(e){return new Nm({regexp:e.specialChars,decoration:(t,n,r)=>{let{doc:i}=n.state,a=_s(t[0],0);if(a==9){let e=i.lineAt(r),t=n.state.tabSize,a=Lc(e.text,t,r-e.from);return H.replace({widget:new Km((t-a%t)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[a]||(this.decorationCache[a]=H.replace({widget:new Gm(e,a)}))},boundary:e.replaceTabs?void 0:/[^]/})}update(e){let t=e.state.facet(zm);e.startState.facet(zm)==t?this.decorations=this.decorator.updateDeco(e,this.decorations):(this.decorator=this.makeDecorator(t),this.decorations=this.decorator.createDeco(e.view))}},{decorations:e=>e.decorations})}var Um=`•`;function Wm(e){return e>=32?Um:e==10?`␤`:String.fromCharCode(9216+e)}var Gm=class extends _l{constructor(e,t){super(),this.options=e,this.code=t}eq(e){return e.code==this.code}toDOM(e){let t=Wm(this.code),n=e.state.phrase(`Control character`)+` `+(Im[this.code]||`0x`+this.code.toString(16)),r=this.options.render&&this.options.render(this.code,n,t);if(r)return r;let i=document.createElement(`span`);return i.textContent=t,i.title=n,i.setAttribute(`aria-label`,n),i.className=`cm-specialChar`,i}ignoreEvent(){return!1}},Km=class extends _l{constructor(e){super(),this.width=e}eq(e){return e.width==this.width}toDOM(){let e=document.createElement(`span`);return e.textContent=`	`,e.className=`cm-tab`,e.style.width=this.width+`px`,e}ignoreEvent(){return!1}};function qm(){return Ym}var Jm=H.line({class:`cm-activeLine`}),Ym=Bu.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.docChanged||e.selectionSet)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=-1,n=[];for(let r of e.state.selection.ranges){let i=e.lineBlockAt(r.head);i.from>t&&(n.push(Jm.range(i.from)),t=i.from)}return H.set(n)}},{decorations:e=>e.decorations}),Xm=2e3;function Zm(e,t,n){let r=Math.min(t.line,n.line),i=Math.max(t.line,n.line),a=[];if(t.off>Xm||n.off>Xm||t.col<0||n.col<0){let o=Math.min(t.off,n.off),s=Math.max(t.off,n.off);for(let t=r;t<=i;t++){let n=e.doc.line(t);n.length<=s&&a.push(P.range(n.from+o,n.to+s))}}else{let o=Math.min(t.col,n.col),s=Math.max(t.col,n.col);for(let t=r;t<=i;t++){let n=e.doc.line(t),r=Rc(n.text,o,e.tabSize,!0);if(r<0)a.push(P.cursor(n.to));else{let t=Rc(n.text,s,e.tabSize);a.push(P.range(n.from+r,n.from+t))}}}return a}function Qm(e,t){let n=e.coordsAtPos(e.viewport.from);return n?Math.round(Math.abs((n.left-t)/e.defaultCharacterWidth)):-1}function $m(e,t){let n=e.posAtCoords({x:t.clientX,y:t.clientY},!1),r=e.state.doc.lineAt(n),i=n-r.from,a=i>Xm?-1:i==r.length?Qm(e,t.clientX):Lc(r.text,e.state.tabSize,n-r.from);return{line:r.number,col:a,off:i}}function eh(e,t){let n=$m(e,t),r=e.state.selection;return n?{update(e){if(e.docChanged){let t=e.changes.mapPos(e.startState.doc.line(n.line).from),i=e.state.doc.lineAt(t);n={line:i.number,col:n.col,off:Math.min(n.off,i.length)},r=r.map(e.changes)}},get(t,i,a){let o=$m(e,t);if(!o)return r;let s=Zm(e.state,n,o);return s.length?a?P.create(s.concat(r.ranges)):P.create(s):r}}:null}function th(e){let t=e?.eventFilter||(e=>e.altKey&&e.button==0);return q.mouseSelectionStyle.of((e,n)=>t(n)?eh(e,n):null)}var nh={Alt:[18,e=>!!e.altKey],Control:[17,e=>!!e.ctrlKey],Shift:[16,e=>!!e.shiftKey],Meta:[91,e=>!!e.metaKey]},rh={style:`cursor: crosshair`};function ih(e={}){let[t,n]=nh[e.key||`Alt`],r=Bu.fromClass(class{constructor(e){this.view=e,this.isDown=!1}set(e){this.isDown!=e&&(this.isDown=e,this.view.update([]))}},{eventObservers:{keydown(e){this.set(e.keyCode==t||n(e))},keyup(e){(e.keyCode==t||!n(e))&&this.set(!1)},mousemove(e){this.set(n(e))}}});return[r,q.contentAttributes.of(e=>e.plugin(r)?.isDown?rh:null)]}var ah=`-10000px`,oh=class{constructor(e,t,n,r){this.facet=t,this.createTooltipView=n,this.removeTooltipView=r,this.input=e.state.facet(t),this.tooltips=this.input.filter(e=>e);let i=null;this.tooltipViews=this.tooltips.map(e=>i=n(e,i))}update(e,t){var n;let r=e.state.facet(this.facet),i=r.filter(e=>e);if(r===this.input){for(let t of this.tooltipViews)t.update&&t.update(e);return!1}let a=[],o=t?[]:null;for(let n=0;n<i.length;n++){let r=i[n],s=-1;if(r){for(let e=0;e<this.tooltips.length;e++){let t=this.tooltips[e];t&&t.create==r.create&&(s=e)}if(s<0)a[n]=this.createTooltipView(r,n?a[n-1]:null),o&&(o[n]=!!r.above);else{let r=a[n]=this.tooltipViews[s];o&&(o[n]=t[s]),r.update&&r.update(e)}}}for(let e of this.tooltipViews)a.indexOf(e)<0&&(this.removeTooltipView(e),(n=e.destroy)==null||n.call(e));return t&&(o.forEach((e,n)=>t[n]=e),t.length=o.length),this.input=r,this.tooltips=i,this.tooltipViews=a,!0}};function sh(e){let t=e.dom.ownerDocument.documentElement;return{top:0,left:0,bottom:t.clientHeight,right:t.clientWidth}}var ch=F.define({combine:e=>({position:V.ios?`absolute`:e.find(e=>e.position)?.position||`fixed`,parent:e.find(e=>e.parent)?.parent||null,tooltipSpace:e.find(e=>e.tooltipSpace)?.tooltipSpace||sh})}),lh=new WeakMap,uh=Bu.fromClass(class{constructor(e){this.view=e,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let t=e.state.facet(ch);this.position=t.position,this.parent=t.parent,this.classes=e.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver==`function`?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new oh(e,mh,(e,t)=>this.createTooltip(e,t),e=>{this.resizeObserver&&this.resizeObserver.unobserve(e.dom),e.dom.remove()}),this.above=this.manager.tooltips.map(e=>!!e.above),this.intersectionObserver=typeof IntersectionObserver==`function`?new IntersectionObserver(e=>{Date.now()>this.lastTransaction-50&&e.length>0&&e[e.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),e.win.addEventListener(`resize`,this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement(`div`),this.container.style.position=`relative`,this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let e of this.manager.tooltipViews)this.intersectionObserver.observe(e.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(e){e.transactions.length&&(this.lastTransaction=Date.now());let t=this.manager.update(e,this.above);t&&this.observeIntersection();let n=t||e.geometryChanged,r=e.state.facet(ch);if(r.position!=this.position&&!this.madeAbsolute){this.position=r.position;for(let e of this.manager.tooltipViews)e.dom.style.position=this.position;n=!0}if(r.parent!=this.parent){this.parent&&this.container.remove(),this.parent=r.parent,this.createContainer();for(let e of this.manager.tooltipViews)this.container.appendChild(e.dom);n=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);n&&this.maybeMeasure()}createTooltip(e,t){let n=e.create(this.view),r=t?t.dom:null;if(n.dom.classList.add(`cm-tooltip`),e.arrow&&!n.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)){let e=document.createElement(`div`);e.className=`cm-tooltip-arrow`,n.dom.appendChild(e)}return n.dom.style.position=this.position,n.dom.style.top=ah,n.dom.style.left=`0px`,this.container.insertBefore(n.dom,r),n.mount&&n.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(n.dom),n}destroy(){var e,t,n;this.view.win.removeEventListener(`resize`,this.measureSoon);for(let t of this.manager.tooltipViews)t.dom.remove(),(e=t.destroy)==null||e.call(t);this.parent&&this.container.remove(),(t=this.resizeObserver)==null||t.disconnect(),(n=this.intersectionObserver)==null||n.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let e=1,t=1,n=!1;if(this.position==`fixed`&&this.manager.tooltipViews.length){let{dom:e}=this.manager.tooltipViews[0];if(V.safari){let t=e.getBoundingClientRect();n=Math.abs(t.top+1e4)>1||Math.abs(t.left)>1}else n=!!e.offsetParent&&e.offsetParent!=this.container.ownerDocument.body}if(n||this.position==`absolute`){if(this.parent){let n=this.parent.getBoundingClientRect();n.width&&n.height&&(e=n.width/this.parent.offsetWidth,t=n.height/this.parent.offsetHeight)}else({scaleX:e,scaleY:t}=this.view.viewState)}let r=this.view.scrollDOM.getBoundingClientRect(),i=Zu(this.view);return{visible:{left:r.left+i.left,top:r.top+i.top,right:r.right-i.right,bottom:r.bottom-i.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((e,t)=>{let n=this.manager.tooltipViews[t];return n.getCoords?n.getCoords(e.pos):this.view.coordsAtPos(e.pos)}),size:this.manager.tooltipViews.map(({dom:e})=>e.getBoundingClientRect()),space:this.view.state.facet(ch).tooltipSpace(this.view),scaleX:e,scaleY:t,makeAbsolute:n}}writeMeasure(e){if(e.makeAbsolute){this.madeAbsolute=!0,this.position=`absolute`;for(let e of this.manager.tooltipViews)e.dom.style.position=`absolute`}let{visible:t,space:n,scaleX:r,scaleY:i}=e,a=[];for(let o=0;o<this.manager.tooltips.length;o++){let s=this.manager.tooltips[o],c=this.manager.tooltipViews[o],{dom:l}=c,u=e.pos[o],d=e.size[o];if(!u||s.clip!==!1&&(u.bottom<=Math.max(t.top,n.top)||u.top>=Math.min(t.bottom,n.bottom)||u.right<Math.max(t.left,n.left)-.1||u.left>Math.min(t.right,n.right)+.1)){l.style.top=ah;continue}let f=s.arrow?c.dom.querySelector(`.cm-tooltip-arrow`):null,p=f?7:0,m=d.right-d.left,h=lh.get(c)??d.bottom-d.top,g=c.offset||ph,_=this.view.textDirection==U.LTR,v=d.width>n.right-n.left?_?n.left:n.right-d.width:_?Math.max(n.left,Math.min(u.left-(f?14:0)+g.x,n.right-m)):Math.min(Math.max(n.left,u.left-m+(f?14:0)-g.x),n.right-m),y=this.above[o];!s.strictSide&&(y?u.top-h-p-g.y<n.top:u.bottom+h+p+g.y>n.bottom)&&y==n.bottom-u.bottom>u.top-n.top&&(y=this.above[o]=!y);let ee=(y?u.top-n.top:n.bottom-u.bottom)-p;if(ee<h&&c.resize!==!1){if(ee<this.view.defaultLineHeight){l.style.top=ah;continue}lh.set(c,h),l.style.height=(h=ee)/i+`px`}else l.style.height&&(l.style.height=``);let b=y?u.top-h-p-g.y:u.bottom+p+g.y,te=v+m;if(c.overlap!==!0)for(let e of a)e.left<te&&e.right>v&&e.top<b+h&&e.bottom>b&&(b=y?e.top-h-2-p:e.bottom+p+2);if(this.position==`absolute`?(l.style.top=(b-e.parent.top)/i+`px`,dh(l,(v-e.parent.left)/r)):(l.style.top=b/i+`px`,dh(l,v/r)),f){let e=u.left+(_?g.x:-g.x)-(v+14-7);f.style.left=e/r+`px`}c.overlap!==!0&&a.push({left:v,top:b,right:te,bottom:b+h}),l.classList.toggle(`cm-tooltip-above`,y),l.classList.toggle(`cm-tooltip-below`,!y),c.positioned&&c.positioned(e.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let e of this.manager.tooltipViews)e.dom.style.top=ah}},{eventObservers:{scroll(){this.maybeMeasure()}}});function dh(e,t){let n=parseInt(e.style.left,10);(isNaN(n)||Math.abs(t-n)>1)&&(e.style.left=t+`px`)}var fh=q.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:`border-box`},"&light .cm-tooltip":{border:`1px solid #bbb`,backgroundColor:`#f5f5f5`},"&light .cm-tooltip-section:not(:first-child)":{borderTop:`1px solid #bbb`},"&dark .cm-tooltip":{backgroundColor:`#333338`,color:`white`},".cm-tooltip-arrow":{height:`7px`,width:`14px`,position:`absolute`,zIndex:-1,overflow:`hidden`,"&:before, &:after":{content:`''`,position:`absolute`,width:0,height:0,borderLeft:`7px solid transparent`,borderRight:`7px solid transparent`},".cm-tooltip-above &":{bottom:`-7px`,"&:before":{borderTop:`7px solid #bbb`},"&:after":{borderTop:`7px solid #f5f5f5`,bottom:`1px`}},".cm-tooltip-below &":{top:`-7px`,"&:before":{borderBottom:`7px solid #bbb`},"&:after":{borderBottom:`7px solid #f5f5f5`,top:`1px`}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:`#333338`,borderBottomColor:`#333338`},"&:after":{borderTopColor:`transparent`,borderBottomColor:`transparent`}}}),ph={x:0,y:0},mh=F.define({enables:[uh,fh]}),hh=F.define({combine:e=>e.reduce((e,t)=>e.concat(t),[])}),gh=class e{static create(t){return new e(t)}constructor(e){this.view=e,this.mounted=!1,this.dom=document.createElement(`div`),this.dom.classList.add(`cm-tooltip-hover`),this.manager=new oh(e,hh,(e,t)=>this.createHostedView(e,t),e=>e.dom.remove())}createHostedView(e,t){let n=e.create(this.view);return n.dom.classList.add(`cm-tooltip-section`),this.dom.insertBefore(n.dom,t?t.dom.nextSibling:this.dom.firstChild),this.mounted&&n.mount&&n.mount(this.view),n}mount(e){for(let t of this.manager.tooltipViews)t.mount&&t.mount(e);this.mounted=!0}positioned(e){for(let t of this.manager.tooltipViews)t.positioned&&t.positioned(e)}update(e){this.manager.update(e)}destroy(){var e;for(let t of this.manager.tooltipViews)(e=t.destroy)==null||e.call(t)}passProp(e){let t;for(let n of this.manager.tooltipViews){let r=n[e];if(r!==void 0){if(t===void 0)t=r;else if(t!==r)return}}return t}get offset(){return this.passProp(`offset`)}get getCoords(){return this.passProp(`getCoords`)}get overlap(){return this.passProp(`overlap`)}get resize(){return this.passProp(`resize`)}},_h=mh.compute([hh],e=>{let t=e.facet(hh);return t.length===0?null:{pos:Math.min(...t.map(e=>e.pos)),end:Math.max(...t.map(e=>e.end??e.pos)),create:gh.create,above:t[0].above,arrow:t.some(e=>e.arrow)}}),vh=F.define(),yh=class{constructor(e,t,n,r,i,a){this.view=e,this.source=t,this.field=n,this.locked=r,this.setHover=i,this.hoverTime=a,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:e.dom,time:0},this.checkHover=this.checkHover.bind(this),e.dom.addEventListener(`mouseleave`,this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener(`mousemove`,this.mousemove=this.mousemove.bind(this))}update(e){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return;let e=Date.now()-this.lastMove.time;e<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-e):this.startHover()}startHover(){clearTimeout(this.restartTimeout);let{view:e,lastMove:t}=this,n=e.docView.tile.nearest(t.target);if(!n)return;let r,i=1;if(n.isWidget())r=n.posAtStart;else{if(r=e.posAtCoords(t),r==null)return;let n=e.coordsAtPos(r);if(!n||t.y<n.top||t.y>n.bottom||t.x<n.left-e.defaultCharacterWidth||t.x>n.right+e.defaultCharacterWidth)return;let a=e.bidiSpans(e.state.doc.lineAt(r)).find(e=>e.from<=r&&e.to>=r),o=a&&a.dir==U.RTL?-1:1;i=t.x<n.left?-o:o}this.activateHover(e,r,i)}activateHover(e,t,n,r){let i=this.source(e,t,n),a=t=>{if(t&&!(Array.isArray(t)&&!t.length)){let n=Array.isArray(t)?t:[t];r&&this.locked.set(n,r),e.dispatch({effects:this.setHover.of(n)})}};if(i&&`then`in i){let n=this.pending={pos:t};i.then(e=>{this.pending==n&&(this.pending=null,a(e))},t=>Iu(e.state,t,`hover tooltip`))}else a(i)}get tooltip(){let e=this.view.plugin(uh),t=e?e.manager.tooltips.findIndex(e=>e.create==gh.create):-1;return t>-1?e.manager.tooltipViews[t]:null}mousemove(e){this.lastMove={x:e.clientX,y:e.clientY,target:e.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime));let{active:t,tooltip:n}=this;if(t.length&&!this.locked.has(t)&&n&&!xh(n.dom,e)||this.pending){let{pos:n}=t[0]||this.pending,r=t[0]?.end??n;(n==r?this.view.posAtCoords(this.lastMove)!=n:!Sh(this.view,n,r,e.clientX,e.clientY))&&(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(e){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1;let{active:t}=this;if(t.length&&!this.locked.has(t)){let{tooltip:t}=this;t&&t.dom.contains(e.relatedTarget)?this.watchTooltipLeave(t.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(e){let t=n=>{e.removeEventListener(`mouseleave`,t);let{active:r}=this;r.length&&!this.locked.has(r)&&!this.view.dom.contains(n.relatedTarget)&&this.view.dispatch({effects:this.setHover.of([])})};e.addEventListener(`mouseleave`,t)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener(`mouseleave`,this.mouseleave),this.view.dom.removeEventListener(`mousemove`,this.mousemove)}},bh=4;function xh(e,t){let{left:n,right:r,top:i,bottom:a}=e.getBoundingClientRect(),o;if(o=e.querySelector(`.cm-tooltip-arrow`)){let e=o.getBoundingClientRect();i=Math.min(e.top,i),a=Math.max(e.bottom,a)}return t.clientX>=n-bh&&t.clientX<=r+bh&&t.clientY>=i-bh&&t.clientY<=a+bh}function Sh(e,t,n,r,i,a){let o=e.scrollDOM.getBoundingClientRect(),s=e.documentTop+e.documentPadding.top+e.contentHeight;if(o.left>r||o.right<r||o.top>i||Math.min(o.bottom,s)<i)return!1;let c=e.posAtCoords({x:r,y:i},!1);return c>=t&&c<=n}function Ch(e,t={}){let n=I.define(),r=new WeakMap,i=zs.define({create(){return[]},update(e,a){let o=r.get(e);if(e.length&&(t.hideOnChange&&(a.docChanged||a.selection)||o&&o(a)?e=[]:t.hideOn&&(e=e.filter(e=>!t.hideOn(a,e)))),a.docChanged&&e.length){let t=[];for(let n of e){let e=a.changes.mapPos(n.pos,-1,xs.TrackDel);if(e!=null){let r=Object.assign(Object.create(null),n);r.pos=e,r.end!=null&&(r.end=a.changes.mapPos(r.end)),t.push(r)}}e=t}for(let t of a.effects)t.is(n)&&(e=t.value,o=void 0),(t.is(Eh)&&!t.value||t.value==i)&&(e=[]);return e.length&&o&&r.set(e,o),e},provide:e=>hh.from(e)}),a=Bu.define(a=>new yh(a,e,i,r,n,t.hoverTime||300));return{active:i,extension:[i,a,vh.of(a),_h]}}function wh(e,t,n,r={}){let i=e.state.facet(vh).map(t=>e.plugin(t)).filter(e=>!!e);if(r.tooltip&&r.tooltip.active){let e=i.find(e=>e.field==r.tooltip.active);e&&(i=[e])}for(let a of i)a.activateHover(e,t,n,r.until??(()=>!1))}function Th(e,t){let n=e.plugin(uh);if(!n)return null;let r=n.manager.tooltips.indexOf(t);return r<0?null:n.manager.tooltipViews[r]}var Eh=I.define(),Dh=F.define({combine(e){let t,n;for(let r of e)t||=r.topContainer,n||=r.bottomContainer;return{topContainer:t,bottomContainer:n}}});function Oh(e,t){let n=e.plugin(kh),r=n?n.specs.indexOf(t):-1;return r>-1?n.panels[r]:null}var kh=Bu.fromClass(class{constructor(e){this.input=e.state.facet(Mh),this.specs=this.input.filter(e=>e),this.panels=this.specs.map(t=>t(e));let t=e.state.facet(Dh);this.top=new Ah(e,!0,t.topContainer),this.bottom=new Ah(e,!1,t.bottomContainer),this.top.sync(this.panels.filter(e=>e.top)),this.bottom.sync(this.panels.filter(e=>!e.top));for(let e of this.panels)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}update(e){let t=e.state.facet(Dh);this.top.container!=t.topContainer&&(this.top.sync([]),this.top=new Ah(e.view,!0,t.topContainer)),this.bottom.container!=t.bottomContainer&&(this.bottom.sync([]),this.bottom=new Ah(e.view,!1,t.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let n=e.state.facet(Mh);if(n!=this.input){let t=n.filter(e=>e),r=[],i=[],a=[],o=[];for(let n of t){let t=this.specs.indexOf(n),s;t<0?(s=n(e.view),o.push(s)):(s=this.panels[t],s.update&&s.update(e)),r.push(s),(s.top?i:a).push(s)}this.specs=t,this.panels=r,this.top.sync(i),this.bottom.sync(a);for(let e of o)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}else for(let t of this.panels)t.update&&t.update(e)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:e=>q.scrollMargins.of(t=>{let n=t.plugin(e);return n&&{top:n.top.scrollMargin(),bottom:n.bottom.scrollMargin()}})}),Ah=class{constructor(e,t,n){this.view=e,this.top=t,this.container=n,this.dom=void 0,this.classes=``,this.panels=[],this.syncClasses()}sync(e){for(let t of this.panels)t.destroy&&e.indexOf(t)<0&&t.destroy();this.panels=e,this.syncDOM()}syncDOM(){if(this.panels.length==0){this.dom&&=(this.dom.remove(),void 0);return}if(!this.dom){this.dom=document.createElement(`div`),this.dom.className=this.top?`cm-panels cm-panels-top`:`cm-panels cm-panels-bottom`;let e=this.container||this.view.dom;e.insertBefore(this.dom,this.top?e.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=jh(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=jh(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(!(!this.container||this.classes==this.view.themeClasses)){for(let e of this.classes.split(` `))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(` `))e&&this.container.classList.add(e)}}};function jh(e){let t=e.nextSibling;return e.remove(),t}var Mh=F.define({enables:kh});function Nh(e,t){let n,r=new Promise(e=>n=e),i=e=>Lh(e,t,n);e.state.field(Ph,!1)?e.dispatch({effects:Fh.of(i)}):e.dispatch({effects:I.appendConfig.of(Ph.init(()=>[i]))});let a=Ih.of(i);return{close:a,result:r.then(t=>((e.win.queueMicrotask||(t=>e.win.setTimeout(t,10)))(()=>{e.state.field(Ph).indexOf(i)>-1&&e.dispatch({effects:a})}),t))}}var Ph=zs.define({create(){return[]},update(e,t){for(let n of t.effects)n.is(Fh)?e=[n.value].concat(e):n.is(Ih)&&(e=e.filter(e=>e!=n.value));return e},provide:e=>Mh.computeN([e],t=>t.field(e))}),Fh=I.define(),Ih=I.define();function Lh(e,t,n){let r=t.content?t.content(e,()=>o(null)):null;if(!r){if(r=B(`form`),t.input){let e=B(`input`,t.input);/^(text|password|number|email|tel|url)$/.test(e.type)&&e.classList.add(`cm-textfield`),e.name||=`input`,r.appendChild(B(`label`,(t.label||``)+`: `,e))}else r.appendChild(document.createTextNode(t.label||``));r.appendChild(document.createTextNode(` `)),r.appendChild(B(`button`,{class:`cm-button`,type:`submit`},t.submitLabel||`OK`))}let i=r.nodeName==`FORM`?[r]:r.querySelectorAll(`form`);for(let e=0;e<i.length;e++){let t=i[e];t.addEventListener(`keydown`,e=>{e.keyCode==27?(e.preventDefault(),o(null)):e.keyCode==13&&(e.preventDefault(),o(t))}),t.addEventListener(`submit`,e=>{e.preventDefault(),o(t)})}let a=B(`div`,r,B(`button`,{onclick:()=>o(null),"aria-label":e.state.phrase(`close`),class:`cm-dialog-close`,type:`button`},[`×`]));t.class&&(a.className=t.class),a.classList.add(`cm-dialog`);function o(t){a.contains(a.ownerDocument.activeElement)&&e.focus(),n(t)}return{dom:a,top:t.top,mount:()=>{if(t.focus){let e;e=typeof t.focus==`string`?r.querySelector(t.focus):r.querySelector(`input`)||r.querySelector(`button`),e&&`select`in e?e.select():e&&`focus`in e&&e.focus()}}}}var Rh=class extends bc{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}};Rh.prototype.elementClass=``,Rh.prototype.toDOM=void 0,Rh.prototype.mapMode=xs.TrackBefore,Rh.prototype.startSide=Rh.prototype.endSide=-1,Rh.prototype.point=!0;var zh=F.define(),Bh=F.define(),Vh={class:``,renderEmptyElements:!1,elementStyle:``,markers:()=>z.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:`before`},Hh=F.define();function Uh(e){return[Gh(),Hh.of({...Vh,...e})]}var Wh=F.define({combine:e=>e.some(e=>e)});function Gh(e){let t=[Kh];return e&&e.fixed===!1&&t.push(Wh.of(!0)),t}var Kh=Bu.fromClass(class{constructor(e){this.view=e,this.domAfter=null,this.prevViewport=e.viewport,this.dom=document.createElement(`div`),this.dom.className=`cm-gutters cm-gutters-before`,this.dom.setAttribute(`aria-hidden`,`true`),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.gutters=e.state.facet(Hh).map(t=>new Xh(e,t)),this.fixed=!e.state.facet(Wh);for(let e of this.gutters)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position=`sticky`),this.syncGutters(!1),e.scrollDOM.insertBefore(this.dom,e.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement(`div`),this.domAfter.className=`cm-gutters cm-gutters-after`,this.domAfter.setAttribute(`aria-hidden`,`true`),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.domAfter.style.position=this.fixed?`sticky`:``,this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(e){if(this.updateGutters(e)){let t=this.prevViewport,n=e.view.viewport,r=Math.min(t.to,n.to)-Math.max(t.from,n.from);this.syncGutters(r<(n.to-n.from)*.8)}if(e.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+`px`;this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(Wh)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?`sticky`:``,this.domAfter&&(this.domAfter.style.position=this.fixed?`sticky`:``)),this.prevViewport=e.view.viewport}syncGutters(e){let t=this.dom.nextSibling;e&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=z.iter(this.view.state.facet(zh),this.view.viewport.from),r=[],i=this.gutters.map(e=>new Yh(e,this.view.viewport,-this.view.documentPadding.top));for(let e of this.view.viewportLineBlocks)if(r.length&&(r=[]),Array.isArray(e.type)){let t=!0;for(let a of e.type)if(a.type==vl.Text&&t){Jh(n,r,a.from);for(let e of i)e.line(this.view,a,r);t=!1}else if(a.widget)for(let e of i)e.widget(this.view,a)}else if(e.type==vl.Text){Jh(n,r,e.from);for(let t of i)t.line(this.view,e,r)}else if(e.widget)for(let t of i)t.widget(this.view,e);for(let e of i)e.finish();e&&(this.view.scrollDOM.insertBefore(this.dom,t),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(e){let t=e.startState.facet(Hh),n=e.state.facet(Hh),r=e.docChanged||e.heightChanged||e.viewportChanged||!z.eq(e.startState.facet(zh),e.state.facet(zh),e.view.viewport.from,e.view.viewport.to);if(t==n)for(let t of this.gutters)t.update(e)&&(r=!0);else{r=!0;let i=[];for(let r of n){let n=t.indexOf(r);n<0?i.push(new Xh(this.view,r)):(this.gutters[n].update(e),i.push(this.gutters[n]))}for(let e of this.gutters)e.dom.remove(),i.indexOf(e)<0&&e.destroy();for(let e of i)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.gutters=i}return r}destroy(){for(let e of this.gutters)e.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:e=>q.scrollMargins.of(t=>{let n=t.plugin(e);if(!n||n.gutters.length==0||!n.fixed)return null;let r=n.dom.offsetWidth*t.scaleX,i=n.domAfter?n.domAfter.offsetWidth*t.scaleX:0;return t.textDirection==U.LTR?{left:r,right:i}:{right:r,left:i}})});function qh(e){return Array.isArray(e)?e:[e]}function Jh(e,t,n){for(;e.value&&e.from<=n;)e.from==n&&t.push(e.value),e.next()}var Yh=class{constructor(e,t,n){this.gutter=e,this.height=n,this.i=0,this.cursor=z.iter(e.markers,t.from)}addElement(e,t,n){let{gutter:r}=this,i=(t.top-this.height)/e.scaleY,a=t.height/e.scaleY;if(this.i==r.elements.length){let t=new Zh(e,a,i,n);r.elements.push(t),r.dom.appendChild(t.dom)}else r.elements[this.i].update(e,a,i,n);this.height=t.bottom,this.i++}line(e,t,n){let r=[];Jh(this.cursor,r,t.from),n.length&&(r=r.concat(n));let i=this.gutter.config.lineMarker(e,t,r);i&&r.unshift(i);let a=this.gutter;r.length==0&&!a.config.renderEmptyElements||this.addElement(e,t,r)}widget(e,t){let n=this.gutter.config.widgetMarker(e,t.widget,t),r=n?[n]:null;for(let n of e.state.facet(Bh)){let i=n(e,t.widget,t);i&&(r||=[]).push(i)}r&&this.addElement(e,t,r)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}},Xh=class{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement(`div`),this.dom.className=`cm-gutter`+(this.config.class?` `+this.config.class:``);for(let n in t.domEventHandlers)this.dom.addEventListener(n,r=>{let i=r.target,a;if(i!=this.dom&&this.dom.contains(i)){for(;i.parentNode!=this.dom;)i=i.parentNode;let e=i.getBoundingClientRect();a=(e.top+e.bottom)/2}else a=r.clientY;let o=e.lineBlockAtHeight(a-e.documentTop);t.domEventHandlers[n](e,o,r)&&r.preventDefault()});this.markers=qh(t.markers(e)),t.initialSpacer&&(this.spacer=new Zh(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+=`visibility: hidden; pointer-events: none`)}update(e){let t=this.markers;if(this.markers=qh(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let t=this.config.updateSpacer(this.spacer.markers[0],e);t!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[t])}let n=e.view.viewport;return!z.eq(this.markers,t,n.from,n.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}},Zh=class{constructor(e,t,n,r){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement(`div`),this.dom.className=`cm-gutterElement`,this.update(e,t,n,r)}update(e,t,n,r){this.height!=t&&(this.height=t,this.dom.style.height=t+`px`),this.above!=n&&(this.dom.style.marginTop=(this.above=n)?n+`px`:``),Qh(this.markers,r)||this.setMarkers(e,r)}setMarkers(e,t){let n=`cm-gutterElement`,r=this.dom.firstChild;for(let i=0,a=0;;){let o=a,s=i<t.length?t[i++]:null,c=!1;if(s){let e=s.elementClass;e&&(n+=` `+e);for(let e=a;e<this.markers.length;e++)if(this.markers[e].compare(s)){o=e,c=!0;break}}else o=this.markers.length;for(;a<o;){let e=this.markers[a++];if(e.toDOM){e.destroy(r);let t=r.nextSibling;r.remove(),r=t}}if(!s)break;s.toDOM&&(c?r=r.nextSibling:this.dom.insertBefore(s.toDOM(e),r)),c&&a++}this.dom.className=n,this.markers=t}destroy(){this.setMarkers(null,[])}};function Qh(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].compare(t[n]))return!1;return!0}var $h=F.define(),eg=F.define(),tg=F.define({combine(e){return yc(e,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let n=Object.assign({},e);for(let e in t){let r=n[e],i=t[e];n[e]=r?(e,t,n)=>r(e,t,n)||i(e,t,n):i}return n}})}}),ng=class extends Rh{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}};function rg(e,t){return e.state.facet(tg).formatNumber(t,e.state)}var ig=Hh.compute([tg],e=>({class:`cm-lineNumbers`,renderEmptyElements:!1,markers(e){return e.state.facet($h)},lineMarker(e,t,n){return n.some(e=>e.toDOM)?null:new ng(rg(e,e.state.doc.lineAt(t.from).number))},widgetMarker:(e,t,n)=>{for(let r of e.state.facet(eg)){let i=r(e,t,n);if(i)return i}return null},lineMarkerChange:e=>e.startState.facet(tg)!=e.state.facet(tg),initialSpacer(e){return new ng(rg(e,og(e.state.doc.lines)))},updateSpacer(e,t){let n=rg(t.view,og(t.view.state.doc.lines));return n==e.number?e:new ng(n)},domEventHandlers:e.facet(tg).domEventHandlers,side:`before`}));function ag(e={}){return[tg.of(e),Gh(),ig]}function og(e){let t=9;for(;t<e;)t=t*10+9;return t}var sg=new class extends Rh{constructor(){super(...arguments),this.elementClass=`cm-activeLineGutter`}},cg=zh.compute([`selection`],e=>{let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.head).from;i>n&&(n=i,t.push(sg.range(i)))}return z.of(t)});function lg(){return cg}var ug=0,dg=class e{constructor(e,t,n,r){this.name=e,this.set=t,this.base=n,this.modified=r,this.id=ug++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(t,n){let r=typeof t==`string`?t:`?`;if(t instanceof e&&(n=t),n?.base)throw Error(`Can not derive from a modified tag`);let i=new e(r,[],null,[]);if(i.set.push(i),n)for(let e of n.set)i.set.push(e);return i}static defineModifier(e){let t=new pg(e);return e=>e.modified.indexOf(t)>-1?e:pg.get(e.base||e,e.modified.concat(t).sort((e,t)=>e.id-t.id))}},fg=0,pg=class e{constructor(e){this.name=e,this.instances=[],this.id=fg++}static get(t,n){if(!n.length)return t;let r=n[0].instances.find(e=>e.base==t&&mg(n,e.modified));if(r)return r;let i=[],a=new dg(t.name,i,t,n);for(let e of n)e.instances.push(a);let o=hg(n);for(let n of t.set)if(!n.modified.length)for(let t of o)i.push(e.get(n,t));return a}};function mg(e,t){return e.length==t.length&&e.every((e,n)=>e==t[n])}function hg(e){let t=[[]];for(let n=0;n<e.length;n++)for(let r=0,i=t.length;r<i;r++)t.push(t[r].concat(e[n]));return t.sort((e,t)=>t.length-e.length)}function gg(e){let t=Object.create(null);for(let n in e){let r=e[n];Array.isArray(r)||(r=[r]);for(let e of n.split(` `))if(e){let n=[],i=2,a=e;for(let t=0;;){if(a==`...`&&t>0&&t+3==e.length){i=1;break}let r=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!r)throw RangeError(`Invalid path: `+e);if(n.push(r[0]==`*`?``:r[0][0]==`"`?JSON.parse(r[0]):r[0]),t+=r[0].length,t==e.length)break;let o=e[t++];if(t==e.length&&o==`!`){i=0;break}if(o!=`/`)throw RangeError(`Invalid path: `+e);a=e.slice(t)}let o=n.length-1,s=n[o];if(!s)throw RangeError(`Invalid path: `+e);t[s]=new vg(r,i,o>0?n.slice(0,o):null).sort(t[s])}}return _g.add(t)}var _g=new A({combine(e,t){let n,r,i;for(;e||t;){if(!e||t&&e.depth>=t.depth?(i=t,t=t.next):(i=e,e=e.next),n&&n.mode==i.mode&&!i.context&&!n.context)continue;let a=new vg(i.tags,i.mode,i.context);n?n.next=a:r=a,n=a}return r}}),vg=class{constructor(e,t,n,r){this.tags=e,this.mode=t,this.context=n,this.next=r}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}};vg.empty=new vg([],2,null);function yg(e,t){let n=Object.create(null);for(let t of e)if(!Array.isArray(t.tag))n[t.tag.id]=t.class;else for(let e of t.tag)n[e.id]=t.class;let{scope:r,all:i=null}=t||{};return{style:e=>{let t=i;for(let r of e)for(let e of r.set){let r=n[e.id];if(r){t=t?t+` `+r:r;break}}return t},scope:r}}function bg(e,t){let n=null;for(let r of e){let e=r.style(t);e&&(n=n?n+` `+e:e)}return n}function xg(e,t,n,r=0,i=e.length){let a=new Sg(r,Array.isArray(t)?t:[t],n);a.highlightRange(e.cursor(),r,i,``,a.highlighters),a.flush(i)}var Sg=class{constructor(e,t,n){this.at=e,this.highlighters=t,this.span=n,this.class=``}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,n,r,i){let{type:a,from:o,to:s}=e;if(o>=n||s<=t)return;a.isTop&&(i=this.highlighters.filter(e=>!e.scope||e.scope(a)));let c=r,l=Cg(e)||vg.empty,u=bg(i,l.tags);if(u&&(c&&(c+=` `),c+=u,l.mode==1&&(r+=(r?` `:``)+u)),this.startSpan(Math.max(t,o),c),l.opaque)return;let d=e.tree&&e.tree.prop(A.mounted);if(d&&d.overlay){let a=e.node.enter(d.overlay[0].from+o,1),l=this.highlighters.filter(e=>!e.scope||e.scope(d.tree.type)),u=e.firstChild();for(let f=0,p=o;;f++){let m=f<d.overlay.length?d.overlay[f]:null,h=m?m.from+o:s,g=Math.max(t,p),_=Math.min(n,h);if(g<_&&u)for(;e.from<_&&(this.highlightRange(e,g,_,r,i),this.startSpan(Math.min(_,e.to),c),!(e.to>=h||!e.nextSibling())););if(!m||h>n)break;p=m.to+o,p>t&&(this.highlightRange(a.cursor(),Math.max(t,m.from+o),Math.min(n,p),``,l),this.startSpan(Math.min(n,p),c))}u&&e.parent()}else if(e.firstChild()){d&&(r=``);do if(!(e.to<=t)){if(e.from>=n)break;this.highlightRange(e,t,n,r,i),this.startSpan(Math.min(n,e.to),c)}while(e.nextSibling());e.parent()}}};function Cg(e){let t=e.type.prop(_g);for(;t&&t.context&&!e.matchContext(t.context);)t=t.next;return t||null}var J=dg.define,wg=J(),Tg=J(),Eg=J(Tg),Dg=J(Tg),Og=J(),kg=J(Og),Ag=J(Og),jg=J(),Mg=J(jg),Ng=J(),Pg=J(),Fg=J(),Ig=J(Fg),Lg=J(),Y={comment:wg,lineComment:J(wg),blockComment:J(wg),docComment:J(wg),name:Tg,variableName:J(Tg),typeName:Eg,tagName:J(Eg),propertyName:Dg,attributeName:J(Dg),className:J(Tg),labelName:J(Tg),namespace:J(Tg),macroName:J(Tg),literal:Og,string:kg,docString:J(kg),character:J(kg),attributeValue:J(kg),number:Ag,integer:J(Ag),float:J(Ag),bool:J(Og),regexp:J(Og),escape:J(Og),color:J(Og),url:J(Og),keyword:Ng,self:J(Ng),null:J(Ng),atom:J(Ng),unit:J(Ng),modifier:J(Ng),operatorKeyword:J(Ng),controlKeyword:J(Ng),definitionKeyword:J(Ng),moduleKeyword:J(Ng),operator:Pg,derefOperator:J(Pg),arithmeticOperator:J(Pg),logicOperator:J(Pg),bitwiseOperator:J(Pg),compareOperator:J(Pg),updateOperator:J(Pg),definitionOperator:J(Pg),typeOperator:J(Pg),controlOperator:J(Pg),punctuation:Fg,separator:J(Fg),bracket:Ig,angleBracket:J(Ig),squareBracket:J(Ig),paren:J(Ig),brace:J(Ig),content:jg,heading:Mg,heading1:J(Mg),heading2:J(Mg),heading3:J(Mg),heading4:J(Mg),heading5:J(Mg),heading6:J(Mg),contentSeparator:J(jg),list:J(jg),quote:J(jg),emphasis:J(jg),strong:J(jg),link:J(jg),monospace:J(jg),strikethrough:J(jg),inserted:J(),deleted:J(),changed:J(),invalid:J(),meta:Lg,documentMeta:J(Lg),annotation:J(Lg),processingInstruction:J(Lg),definition:dg.defineModifier(`definition`),constant:dg.defineModifier(`constant`),function:dg.defineModifier(`function`),standard:dg.defineModifier(`standard`),local:dg.defineModifier(`local`),special:dg.defineModifier(`special`)};for(let e in Y){let t=Y[e];t instanceof dg&&(t.name=e)}yg([{tag:Y.link,class:`tok-link`},{tag:Y.heading,class:`tok-heading`},{tag:Y.emphasis,class:`tok-emphasis`},{tag:Y.strong,class:`tok-strong`},{tag:Y.keyword,class:`tok-keyword`},{tag:Y.atom,class:`tok-atom`},{tag:Y.bool,class:`tok-bool`},{tag:Y.url,class:`tok-url`},{tag:Y.labelName,class:`tok-labelName`},{tag:Y.inserted,class:`tok-inserted`},{tag:Y.deleted,class:`tok-deleted`},{tag:Y.literal,class:`tok-literal`},{tag:Y.string,class:`tok-string`},{tag:Y.number,class:`tok-number`},{tag:[Y.regexp,Y.escape,Y.special(Y.string)],class:`tok-string2`},{tag:Y.variableName,class:`tok-variableName`},{tag:Y.local(Y.variableName),class:`tok-variableName tok-local`},{tag:Y.definition(Y.variableName),class:`tok-variableName tok-definition`},{tag:Y.special(Y.variableName),class:`tok-variableName2`},{tag:Y.definition(Y.propertyName),class:`tok-propertyName tok-definition`},{tag:Y.typeName,class:`tok-typeName`},{tag:Y.namespace,class:`tok-namespace`},{tag:Y.className,class:`tok-className`},{tag:Y.macroName,class:`tok-macroName`},{tag:Y.propertyName,class:`tok-propertyName`},{tag:Y.operator,class:`tok-operator`},{tag:Y.comment,class:`tok-comment`},{tag:Y.meta,class:`tok-meta`},{tag:Y.invalid,class:`tok-invalid`},{tag:Y.punctuation,class:`tok-punctuation`}]);var Rg=new A;function zg(e){return F.define({combine:e?t=>t.concat(e):void 0})}var Bg=new A,Vg=class{constructor(e,t,n=[],r=``){this.data=e,this.name=r,R.prototype.hasOwnProperty(`tree`)||Object.defineProperty(R.prototype,"tree",{get(){return Ug(this)}}),this.parser=t,this.extension=[Qg.of(this),R.languageData.of((e,t,n)=>{let r=Hg(e,t,n),i=r.type.prop(Rg);if(!i)return[];let a=e.facet(i),o=r.type.prop(Bg);if(o){let i=r.resolve(t-r.from,n);for(let t of o)if(t.test(i,e)){let n=e.facet(t.facet);return t.type==`replace`?n:n.concat(a)}}return a})].concat(n)}isActiveAt(e,t,n=-1){return Hg(e,t,n).type.prop(Rg)==this.data}findRegions(e){let t=e.facet(Qg);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],r=(e,t)=>{if(e.prop(Rg)==this.data){n.push({from:t,to:t+e.length});return}let i=e.prop(A.mounted);if(i){if(i.tree.prop(Rg)==this.data){if(i.overlay)for(let e of i.overlay)n.push({from:e.from+t,to:e.to+t});else n.push({from:t,to:t+e.length});return}if(i.overlay){let e=n.length;if(r(i.tree,i.overlay[0].from+t),n.length>e)return}}for(let n=0;n<e.children.length;n++){let i=e.children[n];i instanceof M&&r(i,e.positions[n]+t)}};return r(Ug(e),0),n}get allowsNesting(){return!0}};Vg.setState=I.define();function Hg(e,t,n){let r=e.facet(Qg),i=Ug(e).topNode;if(!r||r.allowsNesting)for(let e=i;e;e=e.enter(t,n,j.ExcludeBuffers|j.EnterBracketed))e.type.isTop&&(i=e);return i}function Ug(e){let t=e.field(Vg.state,!1);return t?t.tree:M.empty}var Wg=class{constructor(e){this.doc=e,this.cursorPos=0,this.string=``,this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}},Gg=null,Kg=class e{constructor(e,t,n=[],r,i,a,o,s){this.parser=e,this.state=t,this.fragments=n,this.tree=r,this.treeLen=i,this.viewport=a,this.skipped=o,this.scheduleOn=s,this.parse=null,this.tempSkipped=[]}static create(t,n,r){return new e(t,n,[],M.empty,0,r,[],null)}startParse(){return this.parser.startParse(new Wg(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=M.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{if(typeof e==`number`){let t=Date.now()+e;e=()=>Date.now()>t}for(this.parse||=this.startParse(),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let n=this.parse.advance();if(n){if(this.fragments=this.withoutTempSkipped(Uo.addTree(n,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=this.parse.stoppedAt??this.state.doc.length,this.tree=n,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0}if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Uo.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Gg;Gg=this;try{return e()}finally{Gg=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=qg(e,t.from,t.to);return e}changes(t,n){let{fragments:r,tree:i,treeLen:a,viewport:o,skipped:s}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges((t,n,r,i)=>e.push({fromA:t,toA:n,fromB:r,toB:i})),r=Uo.applyChanges(r,e),i=M.empty,a=0,o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)},this.skipped.length){s=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);n<r&&s.push({from:n,to:r})}}}return new e(this.parser,n,r,i,a,o,s,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let t=0;t<this.skipped.length;t++){let{from:n,to:r}=this.skipped[t];n<e.to&&r>e.from&&(this.fragments=qg(this.fragments,n,r),this.skipped.splice(t--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&=(this.takeTree(),null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Wo{createParse(t,n,r){let i=r[0].from,a=r[r.length-1].to;return{parsedPos:i,advance(){let t=Gg;if(t){for(let e of r)t.tempSkipped.push(e);e&&(t.scheduleOn=t.scheduleOn?Promise.all([t.scheduleOn,e]):e)}return this.parsedPos=a,new M(bo.none,[],[],a-i)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return Gg}};function qg(e,t,n){return Uo.applyChanges(e,[{fromA:t,toA:n,fromB:t,toB:n}])}var Jg=class e{constructor(e){this.context=e,this.tree=e.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let n=this.context.changes(t.changes,t.state),r=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),n.viewport.to);return n.work(20,r)||n.takeTree(),new e(n)}static init(t){let n=Math.min(3e3,t.doc.length),r=Kg.create(t.facet(Qg).parser,t,{from:0,to:n});return r.work(20,n)||r.takeTree(),new e(r)}};Vg.state=zs.define({create:Jg.init,update(e,t){for(let e of t.effects)if(e.is(Vg.setState))return e.value;return t.startState.facet(Qg)==t.state.facet(Qg)?e.apply(t):Jg.init(t.state)}});var Yg=e=>{let t=setTimeout(()=>e(),500);return()=>clearTimeout(t)};typeof requestIdleCallback<`u`&&(Yg=e=>{let t=-1,n=setTimeout(()=>{t=requestIdleCallback(e,{timeout:400})},100);return()=>t<0?clearTimeout(n):cancelIdleCallback(t)});var Xg=typeof navigator<`u`&&navigator.scheduling?.isInputPending?()=>navigator.scheduling.isInputPending():null,Zg=Bu.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(Vg.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(Vg.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=Yg(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:r}}=this.view,i=n.field(Vg.state);if(i.tree==i.context.tree&&i.context.isDone(r+1e5))return;let a=Date.now()+Math.min(this.chunkBudget,100,e&&!Xg?Math.max(25,e.timeRemaining()-5):1e9),o=i.context.treeLen<r&&n.doc.length>r+1e3,s=i.context.work(()=>Xg&&Xg()||Date.now()>a,r+(o?0:1e5));this.chunkBudget-=Date.now()-t,(s||this.chunkBudget<=0)&&(i.context.takeTree(),this.view.dispatch({effects:Vg.setState.of(new Jg(i.context))})),this.chunkBudget>0&&!(s&&!o)&&this.scheduleWork(),this.checkAsyncSchedule(i.context)}checkAsyncSchedule(e){e.scheduleOn&&=(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(e=>Iu(this.view.state,e)).then(()=>this.workScheduled--),null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Qg=F.define({combine(e){return e.length?e[0]:null},enables:e=>[Vg.state,Zg,q.contentAttributes.compute([e],t=>{let n=t.facet(e);return n&&n.name?{"data-language":n.name}:{}})]}),$g=F.define(),e_=F.define({combine:e=>{if(!e.length)return`  `;let t=e[0];if(!t||/\S/.test(t)||Array.from(t).some(e=>e!=t[0]))throw Error(`Invalid indent unit: `+JSON.stringify(e[0]));return t}});function t_(e){let t=e.facet(e_);return t.charCodeAt(0)==9?e.tabSize*t.length:t.length}function n_(e,t){let n=``,r=e.tabSize,i=e.facet(e_)[0];if(i==`	`){for(;t>=r;)n+=`	`,t-=r;i=` `}for(let e=0;e<t;e++)n+=i;return n}function r_(e,t){e instanceof R&&(e=new i_(e));for(let n of e.state.facet($g)){let r=n(e,t);if(r!==void 0)return r}let n=Ug(e.state);return n.length>=t?o_(e,n,t):null}var i_=class{constructor(e,t={}){this.state=e,this.options=t,this.unit=t_(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:r,simulateDoubleBreak:i}=this.options;return r!=null&&r>=n.from&&r<=n.to?i&&r==e?{text:``,from:e}:(t<0?r<e:r<=e)?{text:n.text.slice(r-n.from),from:r}:{text:n.text.slice(0,r-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return``;let{text:n,from:r}=this.lineAt(e,t);return n.slice(e-r,Math.min(n.length,e+100-r))}column(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.countColumn(n,e-r),a=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;return a>-1&&(i+=a-this.countColumn(n,n.search(/\S|$/))),i}countColumn(e,t=e.length){return Lc(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.options.overrideIndentation;if(i){let e=i(r);if(e>-1)return e}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}},a_=new A;function o_(e,t,n){let r=t.resolveStack(n),i=t.resolveInner(n,-1).resolve(n,0).enterUnfinishedNodesBefore(n);if(i!=r.node){let e=[];for(let t=i;t&&!(t.from<r.node.from||t.to>r.node.to||t.from==r.node.from&&t.type==r.node.type);t=t.parent)e.push(t);for(let t=e.length-1;t>=0;t--)r={node:e[t],next:r}}return s_(r,e,n)}function s_(e,t,n){for(let r=e;r;r=r.next){let e=l_(r.node);if(e)return e(d_.create(t,n,r))}return 0}function c_(e){return e.pos==e.options.simulateBreak&&e.options.simulateDoubleBreak}function l_(e){let t=e.type.prop(a_);if(t)return t;let n=e.firstChild,r;if(n&&(r=n.type.prop(A.closedBy))){let t=e.lastChild,n=t&&r.indexOf(t.name)>-1;return e=>m_(e,!0,1,void 0,n&&!c_(e)?t.from:void 0)}return e.parent==null?u_:null}function u_(){return 0}var d_=class e extends i_{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(t,n,r){return new e(t,n,r)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(f_(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return s_(this.context.next,this.base,this.pos)}};function f_(e,t){for(let n=t;n;n=n.parent)if(e==n)return!0;return!1}function p_(e){let t=e.node,n=t.childAfter(t.from),r=t.lastChild;if(!n)return null;let i=e.options.simulateBreak,a=e.state.doc.lineAt(n.from),o=i==null||i<=a.from?a.to:Math.min(a.to,i);for(let e=n.to;;){let i=t.childAfter(e);if(!i||i==r)return null;if(!i.type.isSkipped){if(i.from>=o)return null;let e=/^ */.exec(a.text.slice(n.to-a.from))[0].length;return{from:n.from,to:n.to+e}}e=i.to}}function m_(e,t,n,r,i){let a=e.textAfter,o=a.match(/^\s*/)[0].length,s=r&&a.slice(o,o+r.length)==r||i==e.pos+o,c=t?p_(e):null;return c?s?e.column(c.from):e.column(c.to):e.baseIndent+(s?0:e.unit*n)}var h_=200;function g_(){return R.transactionFilter.of(e=>{if(!e.docChanged||!e.isUserEvent(`input.type`)&&!e.isUserEvent(`input.complete`))return e;let t=e.startState.languageDataAt(`indentOnInput`,e.startState.selection.main.head);if(!t.length)return e;let n=e.newDoc,{head:r}=e.newSelection.main,i=n.lineAt(r);if(r>i.from+h_)return e;let a=n.sliceString(i.from,r);if(!t.some(e=>e.test(a)))return e;let{state:o}=e,s=-1,c=[];for(let{head:e}of o.selection.ranges){let t=o.doc.lineAt(e);if(t.from==s)continue;s=t.from;let n=r_(o,t.from);if(n==null)continue;let r=/^\s*/.exec(t.text)[0],i=n_(o,n);r!=i&&c.push({from:t.from,to:t.from+r.length,insert:i})}return c.length?[e,{changes:c,sequential:!0}]:e})}var __=F.define(),v_=new A;function y_(e,t,n){let r=Ug(e);if(r.length<n)return null;let i=r.resolveStack(n,1),a=null;for(let o=i;o;o=o.next){let i=o.node;if(i.to<=n||i.from>n)continue;if(a&&i.from<t)break;let s=i.type.prop(v_);if(s&&(i.to<r.length-50||r.length==e.doc.length||!b_(i))){let r=s(i,e);r&&r.from<=n&&r.from>=t&&r.to>n&&(a=r)}}return a}function b_(e){let t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function x_(e,t,n){for(let r of e.facet(__)){let i=r(e,t,n);if(i)return i}return y_(e,t,n)}function S_(e,t){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);return n>=r?void 0:{from:n,to:r}}var C_=I.define({map:S_}),w_=I.define({map:S_});function T_(e){let t=[];for(let{head:n}of e.state.selection.ranges)t.some(e=>e.from<=n&&e.to>=n)||t.push(e.lineBlockAt(n));return t}var E_=zs.define({create(){return H.none},update(e,t){t.isUserEvent(`delete`)&&t.changes.iterChangedRanges((t,n)=>e=D_(e,t,n)),e=e.map(t.changes);let n=[];for(let r of t.effects)r.is(C_)&&!k_(e,r.value.from,r.value.to)?n.push(r.value):r.is(w_)&&(e=e.update({filter:(e,t)=>r.value.from!=e||r.value.to!=t,filterFrom:r.value.from,filterTo:r.value.to}));if(n.length){let{preparePlaceholder:r}=t.state.facet(I_),i=n.map(e=>(r?H.replace({widget:new B_(r(t.state,e))}):z_).range(e.from,e.to));e=e.update({add:i})}return t.selection&&(e=D_(e,t.selection.main.head)),e},provide:e=>q.decorations.from(e),toJSON(e,t){let n=[];return e.between(0,t.doc.length,(e,t)=>{n.push(e,t)}),n},fromJSON(e){if(!Array.isArray(e)||e.length%2)throw RangeError(`Invalid JSON for fold state`);let t=[];for(let n=0;n<e.length;){let r=e[n++],i=e[n++];if(typeof r!=`number`||typeof i!=`number`)throw RangeError(`Invalid JSON for fold state`);t.push(z_.range(r,i))}return H.set(t,!0)}});function D_(e,t,n=t){let r=!1;return e.between(t,n,(e,i)=>{e<n&&i>t&&(r=!0)}),r?e.update({filterFrom:t,filterTo:n,filter:(e,r)=>e>=n||r<=t}):e}function O_(e,t,n){var r;let i=null;return(r=e.field(E_,!1))==null||r.between(t,n,(e,t)=>{(!i||i.from>e)&&(i={from:e,to:t})}),i}function k_(e,t,n){let r=!1;return e.between(t,t,(e,i)=>{e==t&&i==n&&(r=!0)}),r}function A_(e,t){return e.field(E_,!1)?t:t.concat(I.appendConfig.of(L_()))}var j_=e=>{for(let t of T_(e)){let n=x_(e.state,t.from,t.to);if(n)return e.dispatch({effects:A_(e.state,[C_.of(n),N_(e,n)])}),!0}return!1},M_=e=>{if(!e.state.field(E_,!1))return!1;let t=[];for(let n of T_(e)){let r=O_(e.state,n.from,n.to);r&&t.push(w_.of(r),N_(e,r,!1))}return t.length&&e.dispatch({effects:t}),t.length>0};function N_(e,t,n=!0){let r=e.state.doc.lineAt(t.from).number,i=e.state.doc.lineAt(t.to).number;return q.announce.of(`${e.state.phrase(n?`Folded lines`:`Unfolded lines`)} ${r} ${e.state.phrase(`to`)} ${i}.`)}var P_=[{key:`Ctrl-Shift-[`,mac:`Cmd-Alt-[`,run:j_},{key:`Ctrl-Shift-]`,mac:`Cmd-Alt-]`,run:M_},{key:`Ctrl-Alt-[`,run:e=>{let{state:t}=e,n=[];for(let r=0;r<t.doc.length;){let i=e.lineBlockAt(r),a=x_(t,i.from,i.to);a&&n.push(C_.of(a)),r=(a?e.lineBlockAt(a.to):i).to+1}return n.length&&e.dispatch({effects:A_(e.state,n)}),!!n.length}},{key:`Ctrl-Alt-]`,run:e=>{let t=e.state.field(E_,!1);if(!t||!t.size)return!1;let n=[];return t.between(0,e.state.doc.length,(e,t)=>{n.push(w_.of({from:e,to:t}))}),e.dispatch({effects:n}),!0}}],F_={placeholderDOM:null,preparePlaceholder:null,placeholderText:`…`},I_=F.define({combine(e){return yc(e,F_)}});function L_(e){let t=[E_,W_];return e&&t.push(I_.of(e)),t}function R_(e,t){let{state:n}=e,r=n.facet(I_),i=t=>{let n=e.lineBlockAt(e.posAtDOM(t.target)),r=O_(e.state,n.from,n.to);r&&e.dispatch({effects:w_.of(r)}),t.preventDefault()};if(r.placeholderDOM)return r.placeholderDOM(e,i,t);let a=document.createElement(`span`);return a.textContent=r.placeholderText,a.setAttribute(`aria-label`,n.phrase(`folded code`)),a.title=n.phrase(`unfold`),a.className=`cm-foldPlaceholder`,a.onclick=i,a}var z_=H.replace({widget:new class extends _l{toDOM(e){return R_(e,null)}}}),B_=class extends _l{constructor(e){super(),this.value=e}eq(e){return this.value==e.value}toDOM(e){return R_(e,this.value)}},V_={openText:`⌄`,closedText:`›`,markerDOM:null,domEventHandlers:{},foldingChanged:()=>!1},H_=class extends Rh{constructor(e,t){super(),this.config=e,this.open=t}eq(e){return this.config==e.config&&this.open==e.open}toDOM(e){if(this.config.markerDOM)return this.config.markerDOM(this.open);let t=document.createElement(`span`);return t.textContent=this.open?this.config.openText:this.config.closedText,t.title=e.state.phrase(this.open?`Fold line`:`Unfold line`),t}};function U_(e={}){let t={...V_,...e},n=new H_(t,!0),r=new H_(t,!1),i=Bu.fromClass(class{constructor(e){this.from=e.viewport.from,this.markers=this.buildMarkers(e)}update(e){(e.docChanged||e.viewportChanged||e.startState.facet(Qg)!=e.state.facet(Qg)||e.startState.field(E_,!1)!=e.state.field(E_,!1)||Ug(e.startState)!=Ug(e.state)||t.foldingChanged(e))&&(this.markers=this.buildMarkers(e.view))}buildMarkers(e){let t=new Ec;for(let i of e.viewportLineBlocks){let a=O_(e.state,i.from,i.to)?r:x_(e.state,i.from,i.to)?n:null;a&&t.add(i.from,i.from,a)}return t.finish()}}),{domEventHandlers:a}=t;return[i,Uh({class:`cm-foldGutter`,markers(e){return e.plugin(i)?.markers||z.empty},initialSpacer(){return new H_(t,!1)},domEventHandlers:{...a,click:(e,t,n)=>{if(a.click&&a.click(e,t,n))return!0;let r=O_(e.state,t.from,t.to);if(r)return e.dispatch({effects:w_.of(r)}),!0;let i=x_(e.state,t.from,t.to);return i?(e.dispatch({effects:C_.of(i)}),!0):!1}}}),L_()]}var W_=q.baseTheme({".cm-foldPlaceholder":{backgroundColor:`#eee`,border:`1px solid #ddd`,color:`#888`,borderRadius:`.2em`,margin:`0 1px`,padding:`0 1px`,cursor:`pointer`},".cm-foldGutter span":{padding:`0 1px`,cursor:`pointer`}}),G_=class e{constructor(e,t){this.specs=e;let n;function r(e){let t=Uc.newName();return(n||=Object.create(null))[`.`+t]=e,t}let i=typeof t.all==`string`?t.all:t.all?r(t.all):void 0,a=t.scope;this.scope=a instanceof Vg?e=>e.prop(Rg)==a.data:a?e=>e==a:void 0,this.style=yg(e.map(e=>({tag:e.tag,class:e.class||r(Object.assign({},e,{tag:null}))})),{all:i}).style,this.module=n?new Uc(n):null,this.themeType=t.themeType}static define(t,n){return new e(t,n||{})}},K_=F.define(),q_=F.define({combine(e){return e.length?[e[0]]:null}});function J_(e){let t=e.facet(K_);return t.length?t:e.facet(q_)}function Y_(e,t){let n=[Z_],r;return e instanceof G_&&(e.module&&n.push(q.styleModule.of(e.module)),r=e.themeType),t?.fallback?n.push(q_.of(e)):r?n.push(K_.computeN([q.darkTheme],t=>t.facet(q.darkTheme)==(r==`dark`)?[e]:[])):n.push(K_.of(e)),n}var X_=class{constructor(e){this.markCache=Object.create(null),this.tree=Ug(e.state),this.decorations=this.buildDeco(e,J_(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=Ug(e.state),n=J_(e.state),r=n!=J_(e.startState),{viewport:i}=e.view,a=e.changes.mapPos(this.decoratedTo,1);t.length<i.to&&!r&&t.type==this.tree.type&&a>=i.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=a):(t!=this.tree||e.viewportChanged||r)&&(this.tree=t,this.decorations=this.buildDeco(e.view,n),this.decoratedTo=i.to)}buildDeco(e,t){if(!t||!this.tree.length)return H.none;let n=new Ec;for(let{from:r,to:i}of e.visibleRanges)xg(this.tree,t,(e,t,r)=>{n.add(e,t,this.markCache[r]||(this.markCache[r]=H.mark({class:r})))},r,i);return n.finish()}},Z_=Hs.high(Bu.fromClass(X_,{decorations:e=>e.decorations})),Q_=G_.define([{tag:Y.meta,color:`#404740`},{tag:Y.link,textDecoration:`underline`},{tag:Y.heading,textDecoration:`underline`,fontWeight:`bold`},{tag:Y.emphasis,fontStyle:`italic`},{tag:Y.strong,fontWeight:`bold`},{tag:Y.strikethrough,textDecoration:`line-through`},{tag:Y.keyword,color:`#708`},{tag:[Y.atom,Y.bool,Y.url,Y.contentSeparator,Y.labelName],color:`#219`},{tag:[Y.literal,Y.inserted],color:`#164`},{tag:[Y.string,Y.deleted],color:`#a11`},{tag:[Y.regexp,Y.escape,Y.special(Y.string)],color:`#e40`},{tag:Y.definition(Y.variableName),color:`#00f`},{tag:Y.local(Y.variableName),color:`#30a`},{tag:[Y.typeName,Y.namespace],color:`#085`},{tag:Y.className,color:`#167`},{tag:[Y.special(Y.variableName),Y.macroName],color:`#256`},{tag:Y.definition(Y.propertyName),color:`#00c`},{tag:Y.comment,color:`#940`},{tag:Y.invalid,color:`#f00`}]),$_=q.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:`#328c8252`},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bb555544`}}),ev=1e4,tv=`()[]{}`,nv=F.define({combine(e){return yc(e,{afterCursor:!0,brackets:tv,maxScanDistance:ev,renderMatch:av})}}),rv=H.mark({class:`cm-matchingBracket`}),iv=H.mark({class:`cm-nonmatchingBracket`});function av(e){let t=[],n=e.matched?rv:iv;return t.push(n.range(e.start.from,e.start.to)),e.end&&t.push(n.range(e.end.from,e.end.to)),t}function ov(e){let t=[],n=e.facet(nv);for(let r of e.selection.ranges){if(!r.empty)continue;let i=fv(e,r.head,-1,n)||r.head>0&&fv(e,r.head-1,1,n)||n.afterCursor&&(fv(e,r.head,1,n)||r.head<e.doc.length&&fv(e,r.head+1,-1,n));i&&(t=t.concat(n.renderMatch(i,e)))}return H.set(t,!0)}var sv=[Bu.fromClass(class{constructor(e){this.paused=!1,this.decorations=ov(e.state)}update(e){(e.docChanged||e.selectionSet||this.paused)&&(e.view.composing?(this.decorations=this.decorations.map(e.changes),this.paused=!0):(this.decorations=ov(e.state),this.paused=!1))}},{decorations:e=>e.decorations}),$_];function cv(e={}){return[nv.of(e),sv]}var lv=new A;function uv(e,t,n){let r=e.prop(t<0?A.openedBy:A.closedBy);if(r)return r;if(e.name.length==1){let r=n.indexOf(e.name);if(r>-1&&r%2==+(t<0))return[n[r+t]]}return null}function dv(e){let t=e.type.prop(lv);return t?t(e.node):e}function fv(e,t,n,r={}){let i=r.maxScanDistance||ev,a=r.brackets||tv,o=Ug(e),s=o.resolveInner(t,n);for(let r=s;r;r=r.parent){let i=uv(r.type,n,a);if(i&&r.from<r.to){let o=dv(r);if(o&&(n>0?t>=o.from&&t<o.to:t>o.from&&t<=o.to))return pv(e,t,n,r,o,i,a)}}return mv(e,t,n,o,s.type,i,a)}function pv(e,t,n,r,i,a,o){let s=r.parent,c={from:i.from,to:i.to},l=0,u=s?.cursor();if(u&&(n<0?u.childBefore(r.from):u.childAfter(r.to)))do if(n<0?u.to<=r.from:u.from>=r.to){if(l==0&&a.indexOf(u.type.name)>-1&&u.from<u.to){let e=dv(u);return{start:c,end:e?{from:e.from,to:e.to}:void 0,matched:!0}}if(uv(u.type,n,o))l++;else if(uv(u.type,-n,o)){if(l==0){let e=dv(u);return{start:c,end:e&&e.from<e.to?{from:e.from,to:e.to}:void 0,matched:!1}}l--}}while(n<0?u.prevSibling():u.nextSibling());return{start:c,matched:!1}}function mv(e,t,n,r,i,a,o){if(n<0?!t:t==e.doc.length)return null;let s=n<0?e.sliceDoc(t-1,t):e.sliceDoc(t,t+1),c=o.indexOf(s);if(c<0||c%2==0!=n>0)return null;let l={from:n<0?t-1:t,to:n>0?t+1:t},u=e.doc.iterRange(t,n>0?e.doc.length:0),d=0;for(let e=0;!u.next().done&&e<=a;){let a=u.value;n<0&&(e+=a.length);let s=t+e*n;for(let e=n>0?0:a.length-1,t=n>0?a.length:-1;e!=t;e+=n){let t=o.indexOf(a[e]);if(!(t<0||r.resolveInner(s+e,1).type!=i)){if(t%2==0==n>0)d++;else if(d==1)return{start:l,end:{from:s+e,to:s+e+1},matched:t>>1==c>>1};else d--}}n>0&&(e+=a.length)}return u.done?{start:l,matched:!1}:null}function hv(e,t,n,r=0,i=0){t??(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length));let a=i;for(let i=r;i<t;i++)e.charCodeAt(i)==9?a+=n-a%n:a++;return a}var gv=class{constructor(e,t,n,r){this.string=e,this.tabSize=t,this.indentUnit=n,this.overrideIndent=r,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(e){let t=this.string.charAt(this.pos),n;if(n=typeof e==`string`?t==e:t&&(e instanceof RegExp?e.test(t):e(t)),n)return++this.pos,t}eatWhile(e){let t=this.pos;for(;this.eat(e););return this.pos>t}eatSpace(){let e=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e}skipToEnd(){this.pos=this.string.length}skipTo(e){let t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0}backUp(e){this.pos-=e}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=hv(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return this.overrideIndent??hv(this.string,null,this.tabSize)}match(e,t,n){if(typeof e==`string`){let r=e=>n?e.toLowerCase():e;return r(this.string.substr(this.pos,e.length))==r(e)?(t!==!1&&(this.pos+=e.length),!0):null}{let n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}}current(){return this.string.slice(this.start,this.pos)}};function _v(e){return{name:e.name||``,token:e.token,blankLine:e.blankLine||(()=>{}),startState:e.startState||(()=>!0),copyState:e.copyState||vv,indent:e.indent||(()=>null),languageData:e.languageData||{},tokenTable:e.tokenTable||Ev,mergeTokens:e.mergeTokens!==!1}}function vv(e){if(typeof e!=`object`)return e;let t={};for(let n in e){let r=e[n];t[n]=r instanceof Array?r.slice():r}return t}var yv=new WeakMap,bv=class e extends Vg{constructor(e){let t=zg(e.languageData),n=_v(e),r,i=new class extends Wo{createParse(e,t,n){return new wv(r,e,t,n)}};super(t,i,[],e.name),this.topNode=Iv(t,this),r=this,this.streamParser=n,this.stateAfter=new A({perNode:!0}),this.tokenTable=e.tokenTable?new Mv(n.tokenTable):Nv}static define(t){return new e(t)}getIndent(e){let t,{overrideIndentation:n}=e.options;n&&(t=yv.get(e.state),t!=null&&t<e.pos-1e4&&(t=void 0));let r=xv(this,e.node.tree,e.node.from,e.node.from,t??e.pos),i,a;if(r?(a=r.state,i=r.pos+1):(a=this.streamParser.startState(e.unit),i=e.node.from),e.pos-i>1e4)return null;for(;i<e.pos;){let t=e.state.doc.lineAt(i),r=Math.min(e.pos,t.to);if(t.length){let i=n?n(t.from):-1,o=new gv(t.text,e.state.tabSize,e.unit,i<0?void 0:i);for(;o.pos<r-t.from;)Tv(this.streamParser.token,o,a)}else this.streamParser.blankLine(a,e.unit);if(r==e.pos)break;i=t.to+1}let o=e.lineAt(e.pos);return n&&t==null&&yv.set(e.state,o.from),this.streamParser.indent(a,/^\s*(.*)/.exec(o.text)[1],e)}get allowsNesting(){return!1}};function xv(e,t,n,r,i){let a=n>=r&&n+t.length<=i&&t.prop(e.stateAfter);if(a)return{state:e.streamParser.copyState(a),pos:n+t.length};for(let a=t.children.length-1;a>=0;a--){let o=t.children[a],s=n+t.positions[a],c=o instanceof M&&s<i&&xv(e,o,s,r,i);if(c)return c}return null}function Sv(e,t,n,r,i){if(i&&n<=0&&r>=t.length)return t;!i&&n==0&&t.type==e.topNode&&(i=!0);for(let a=t.children.length-1;a>=0;a--){let o=t.positions[a],s=t.children[a],c;if(o<r&&s instanceof M){if(!(c=Sv(e,s,n-o,r-o,i)))break;return i?new M(t.type,t.children.slice(0,a).concat(c),t.positions.slice(0,a+1),o+c.length):c}}return null}function Cv(e,t,n,r,i){for(let i of t){let t=i.from+(i.openStart?25:0),a=i.to-(i.openEnd?25:0),o=t<=n&&a>n&&xv(e,i.tree,0-i.offset,n,a),s;if(o&&o.pos<=r&&(s=Sv(e,i.tree,n+i.offset,o.pos+i.offset,!1)))return{state:o.state,tree:s}}return{state:e.streamParser.startState(i?t_(i):4),tree:M.empty}}var wv=class{constructor(e,t,n,r){this.lang=e,this.input=t,this.fragments=n,this.ranges=r,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=r[r.length-1].to;let i=Kg.get(),a=r[0].from,{state:o,tree:s}=Cv(e,n,a,this.to,i?.state);this.state=o,this.parsedPos=this.chunkStart=a+s.length;for(let e=0;e<s.children.length;e++)this.chunks.push(s.children[e]),this.chunkPos.push(s.positions[e]);i&&this.parsedPos<i.viewport.from-1e5&&r.some(e=>e.from<=i.viewport.from&&e.to>=i.viewport.from)&&(this.state=this.lang.streamParser.startState(t_(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let e=Kg.get(),t=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(t,this.chunkStart+512);for(e&&(n=Math.min(n,e.viewport.to));this.parsedPos<n;)this.parseLine(e);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=t?this.finish():e&&this.parsedPos>=e.viewport.to?(e.skipUntilInView(this.parsedPos,t),this.finish()):null}stopAt(e){this.stoppedAt=e}lineAfter(e){let t=this.input.chunk(e);if(this.input.lineChunks)t==`
`&&(t=``);else{let e=t.indexOf(`
`);e>-1&&(t=t.slice(0,e))}return e+t.length<=this.to?t:t.slice(0,this.to-e)}nextLine(){let e=this.parsedPos,t=this.lineAfter(e),n=e+t.length;for(let e=this.rangeIndex;;){let r=this.ranges[e].to;if(r>=n||(t=t.slice(0,r-(n-t.length)),e++,e==this.ranges.length))break;let i=this.ranges[e].from,a=this.lineAfter(i);t+=a,n=i+a.length}return{line:t,end:n}}skipGapsTo(e,t,n){for(;;){let r=this.ranges[this.rangeIndex].to,i=e+t;if(n>0?r>i:r>=i)break;let a=this.ranges[++this.rangeIndex].from;t+=a-r}return t}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(e,t,n,r){let i=4;if(this.ranges.length>1){r=this.skipGapsTo(t,r,1),t+=r;let e=this.chunk.length;r=this.skipGapsTo(n,r,-1),n+=r,i+=this.chunk.length-e}let a=this.chunk.length-4;return this.lang.streamParser.mergeTokens&&i==4&&a>=0&&this.chunk[a]==e&&this.chunk[a+2]==t?this.chunk[a+2]=n:this.chunk.push(e,t,n,i),r}parseLine(e){let{line:t,end:n}=this.nextLine(),r=0,{streamParser:i}=this.lang,a=new gv(t,e?e.state.tabSize:4,e?t_(e.state):2);if(a.eol())i.blankLine(this.state,a.indentUnit);else for(;!a.eol();){let e=Tv(i.token,a,this.state);if(e&&(r=this.emitToken(this.lang.tokenTable.resolve(e),this.parsedPos+a.start,this.parsedPos+a.pos,r)),a.start>1e4)break}this.parsedPos=n,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let e=M.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:Ov,topID:0,maxBufferLength:512,reused:this.chunkReused});e=new M(e.type,e.children,e.positions,e.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(e),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new M(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}};function Tv(e,t,n){t.start=t.pos;for(let r=0;r<10;r++){let r=e(t,n);if(t.pos>t.start)return r}throw Error(`Stream parser failed to advance stream.`)}var Ev=Object.create(null),Dv=[bo.none],Ov=new xo(Dv),kv=[],Av=Object.create(null),jv=Object.create(null);for(let[e,t]of[[`variable`,`variableName`],[`variable-2`,`variableName.special`],[`string-2`,`string.special`],[`def`,`variableName.definition`],[`tag`,`tagName`],[`attribute`,`attributeName`],[`type`,`typeName`],[`builtin`,`variableName.standard`],[`qualifier`,`modifier`],[`error`,`invalid`],[`header`,`heading`],[`property`,`propertyName`]])jv[e]=Fv(Ev,t);var Mv=class{constructor(e){this.extra=e,this.table=Object.assign(Object.create(null),jv)}resolve(e){return e?this.table[e]||(this.table[e]=Fv(this.extra,e)):0}},Nv=new Mv(Ev);function Pv(e,t){kv.indexOf(e)>-1||(kv.push(e),console.warn(t))}function Fv(e,t){let n=[];for(let r of t.split(` `)){let t=[];for(let n of r.split(`.`)){let r=e[n]||Y[n];r?typeof r==`function`?t.length?t=t.map(r):Pv(n,`Modifier ${n} used at start of tag`):t.length?Pv(n,`Tag ${n} used as modifier`):t=Array.isArray(r)?r:[r]:Pv(n,`Unknown highlighting tag ${n}`)}for(let e of t)n.push(e)}if(!n.length)return 0;let r=t.replace(/ /g,`_`),i=r+` `+n.map(e=>e.id),a=Av[i];if(a)return a.id;let o=Av[i]=bo.define({id:Dv.length,name:r,props:[gg({[r]:n})]});return Dv.push(o),o.id}function Iv(e,t){let n=bo.define({id:Dv.length,name:`Document`,props:[Rg.add(()=>e),a_.add(()=>e=>t.getIndent(e))],top:!0});return Dv.push(n),n}U.RTL,U.LTR;var Lv={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0,any:!0,comparable:!0},Rv={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},zv=/[+\-*&^%:=<>!|\/]/,Bv;function Vv(e,t){var n=e.next();if(n==`"`||n==`'`||n=="`")return t.tokenize=Hv(n),t.tokenize(e,t);if(/[\d\.]/.test(n))return n==`.`?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):n==`0`?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),`number`;if(/[\[\]{}\(\),;\:\.]/.test(n))return Bv=n,null;if(n==`/`){if(e.eat(`*`))return t.tokenize=Uv,Uv(e,t);if(e.eat(`/`))return e.skipToEnd(),`comment`}if(zv.test(n))return e.eatWhile(zv),`operator`;e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current();return Lv.propertyIsEnumerable(r)?((r==`case`||r=="default")&&(Bv=`case`),`keyword`):Rv.propertyIsEnumerable(r)?`atom`:`variable`}function Hv(e){return function(t,n){for(var r=!1,i,a=!1;(i=t.next())!=null;){if(i==e&&!r){a=!0;break}r=!r&&e!="`"&&i==`\\`}return(a||!(r||e=="`"))&&(n.tokenize=Vv),`string`}}function Uv(e,t){for(var n=!1,r;r=e.next();){if(r==`/`&&n){t.tokenize=Vv;break}n=r==`*`}return`comment`}function Wv(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function Gv(e,t,n){return e.context=new Wv(e.indented,t,n,null,e.context)}function Kv(e){if(e.context.prev){var t=e.context.type;return(t==`)`||t==`]`||t==`}`)&&(e.indented=e.context.indented),e.context=e.context.prev}}var qv={name:`go`,startState:function(e){return{tokenize:null,context:new Wv(-e,0,`top`,!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align??=!1,t.indented=e.indentation(),t.startOfLine=!0,n.type==`case`&&(n.type=`}`)),e.eatSpace())return null;Bv=null;var r=(t.tokenize||Vv)(e,t);return r==`comment`?r:(n.align??=!0,Bv==`{`?Gv(t,e.column(),`}`):Bv==`[`?Gv(t,e.column(),`]`):Bv==`(`?Gv(t,e.column(),`)`):Bv==`case`?n.type=`case`:(Bv==`}`&&n.type==`}`||Bv==n.type)&&Kv(t),t.startOfLine=!1,r)},indent:function(e,t,n){if(e.tokenize!=Vv&&e.tokenize!=null)return null;var r=e.context,i=t&&t.charAt(0);if(r.type==`case`&&/^(?:case|default)\b/.test(t))return r.indented;var a=i==r.type;return r.align?r.column+ +!a:r.indented+(a?0:n.unit)},languageData:{indentOnInput:/^\s([{}]|case |default\s*:)$/,commentTokens:{line:`//`,block:{open:`/*`,close:`*/`}}}},Jv=t({default:()=>Yv,syntaxExtension:()=>Yv}),Yv=bv.define(qv);function Xv(e){var t={as:`keyword`,do:`keyword`,else:`keyword`,end:`keyword`,exception:`keyword`,fun:`keyword`,functor:`keyword`,if:`keyword`,in:`keyword`,include:`keyword`,let:`keyword`,of:`keyword`,open:`keyword`,rec:`keyword`,struct:`keyword`,then:`keyword`,type:`keyword`,val:`keyword`,while:`keyword`,with:`keyword`},n=e.extraWords||{};for(var r in n)n.hasOwnProperty(r)&&(t[r]=e.extraWords[r]);var i=[];for(var a in t)i.push(a);function o(n,r){var i=n.next();if(i===`"`)return r.tokenize=s,r.tokenize(n,r);if(i===`{`&&n.eat(`|`))return r.longString=!0,r.tokenize=l,r.tokenize(n,r);if(i===`(`&&n.match(/^\*(?!\))/))return r.commentLevel++,r.tokenize=c,r.tokenize(n,r);if(i===`~`||i===`?`)return n.eatWhile(/\w/),`variableName.special`;if(i==="`")return n.eatWhile(/\w/),`quote`;if(i===`/`&&e.slashComments&&n.eat(`/`))return n.skipToEnd(),`comment`;if(/\d/.test(i))return i===`0`&&n.eat(/[bB]/)&&n.eatWhile(/[01]/),i===`0`&&n.eat(/[xX]/)&&n.eatWhile(/[0-9a-fA-F]/),i===`0`&&n.eat(/[oO]/)?n.eatWhile(/[0-7]/):(n.eatWhile(/[\d_]/),n.eat(`.`)&&n.eatWhile(/[\d]/),n.eat(/[eE]/)&&n.eatWhile(/[\d\-+]/)),`number`;if(/[+\-*&%=<>!?|@\.~:]/.test(i))return`operator`;if(/[\w\xa1-\uffff]/.test(i)){n.eatWhile(/[\w\xa1-\uffff]/);var a=n.current();return t.hasOwnProperty(a)?t[a]:`variable`}return null}function s(e,t){for(var n,r=!1,i=!1;(n=e.next())!=null;){if(n===`"`&&!i){r=!0;break}i=!i&&n===`\\`}return r&&!i&&(t.tokenize=o),`string`}function c(e,t){for(var n,r;t.commentLevel>0&&(r=e.next())!=null;)n===`(`&&r===`*`&&t.commentLevel++,n===`*`&&r===`)`&&t.commentLevel--,n=r;return t.commentLevel<=0&&(t.tokenize=o),`comment`}function l(e,t){for(var n,r;t.longString&&(r=e.next())!=null;)n===`|`&&r===`}`&&(t.longString=!1),n=r;return t.longString||(t.tokenize=o),`string`}return{startState:function(){return{tokenize:o,commentLevel:0,longString:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},languageData:{autocomplete:i,commentTokens:{line:e.slashComments?`//`:void 0,block:{open:`(*`,close:`*)`}}}}}var Zv=Xv({name:`ocaml`,extraWords:{and:`keyword`,assert:`keyword`,begin:`keyword`,class:`keyword`,constraint:`keyword`,done:`keyword`,downto:`keyword`,external:`keyword`,function:`keyword`,initializer:`keyword`,lazy:`keyword`,match:`keyword`,method:`keyword`,module:`keyword`,mutable:`keyword`,new:`keyword`,nonrec:`keyword`,object:`keyword`,private:`keyword`,sig:`keyword`,to:`keyword`,try:`keyword`,value:`keyword`,virtual:`keyword`,when:`keyword`,raise:`builtin`,failwith:`builtin`,true:`builtin`,false:`builtin`,asr:`builtin`,land:`builtin`,lor:`builtin`,lsl:`builtin`,lsr:`builtin`,lxor:`builtin`,mod:`builtin`,or:`builtin`,raise_notrace:`builtin`,trace:`builtin`,exit:`builtin`,print_string:`builtin`,print_endline:`builtin`,int:`type`,float:`type`,bool:`type`,char:`type`,string:`type`,unit:`type`,List:`builtin`}});Xv({name:`fsharp`,extraWords:{abstract:`keyword`,assert:`keyword`,base:`keyword`,begin:`keyword`,class:`keyword`,default:`keyword`,delegate:`keyword`,"do!":`keyword`,done:`keyword`,downcast:`keyword`,downto:`keyword`,elif:`keyword`,extern:`keyword`,finally:`keyword`,for:`keyword`,function:`keyword`,global:`keyword`,inherit:`keyword`,inline:`keyword`,interface:`keyword`,internal:`keyword`,lazy:`keyword`,"let!":`keyword`,match:`keyword`,member:`keyword`,module:`keyword`,mutable:`keyword`,namespace:`keyword`,new:`keyword`,null:`keyword`,override:`keyword`,private:`keyword`,public:`keyword`,"return!":`keyword`,return:`keyword`,select:`keyword`,static:`keyword`,to:`keyword`,try:`keyword`,upcast:`keyword`,"use!":`keyword`,use:`keyword`,void:`keyword`,when:`keyword`,"yield!":`keyword`,yield:`keyword`,atomic:`keyword`,break:`keyword`,checked:`keyword`,component:`keyword`,const:`keyword`,constraint:`keyword`,constructor:`keyword`,continue:`keyword`,eager:`keyword`,event:`keyword`,external:`keyword`,fixed:`keyword`,method:`keyword`,mixin:`keyword`,object:`keyword`,parallel:`keyword`,process:`keyword`,protected:`keyword`,pure:`keyword`,sealed:`keyword`,tailcall:`keyword`,trait:`keyword`,virtual:`keyword`,volatile:`keyword`,List:`builtin`,Seq:`builtin`,Map:`builtin`,Set:`builtin`,Option:`builtin`,int:`builtin`,string:`builtin`,not:`builtin`,true:`builtin`,false:`builtin`,raise:`builtin`,failwith:`builtin`},slashComments:!0}),Xv({name:`sml`,extraWords:{abstype:`keyword`,and:`keyword`,andalso:`keyword`,case:`keyword`,datatype:`keyword`,fn:`keyword`,handle:`keyword`,infix:`keyword`,infixr:`keyword`,local:`keyword`,nonfix:`keyword`,op:`keyword`,orelse:`keyword`,raise:`keyword`,withtype:`keyword`,eqtype:`keyword`,sharing:`keyword`,sig:`keyword`,signature:`keyword`,structure:`keyword`,where:`keyword`,true:`keyword`,false:`keyword`,int:`builtin`,real:`builtin`,string:`builtin`,char:`builtin`,bool:`builtin`},slashComments:!0});var Qv=t({default:()=>$v,syntaxExtension:()=>$v}),$v=bv.define(Zv);function ey(e){return RegExp(`^((`+e.join(`)|(`)+`))\\b`)}var ty=ey([`and`,`or`,`not`,`is`]),ny=`as.assert.break.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.lambda.pass.raise.return.try.while.with.yield.in.False.True`.split(`.`),ry=`abs.all.any.bin.bool.bytearray.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.property.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip.__import__.NotImplemented.Ellipsis.__debug__`.split(`.`);function iy(e){return e.scopes[e.scopes.length-1]}function ay(e){for(var t=`error`,n=e.delimiters||e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,r=[e.singleOperators,e.doubleOperators,e.doubleDelimiters,e.tripleDelimiters,e.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],i=0;i<r.length;i++)r[i]||r.splice(i--,1);var a=e.hangingIndent,o=ny,s=ry;e.extra_keywords!=null&&(o=o.concat(e.extra_keywords)),e.extra_builtins!=null&&(s=s.concat(e.extra_builtins));var c=!(e.version&&Number(e.version)<3);if(c){var l=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;o=o.concat([`nonlocal`,`None`,`aiter`,`anext`,`async`,`await`,`breakpoint`,`match`,`case`]),s=s.concat([`ascii`,`bytes`,`exec`,`print`]);var u=RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,`i`)}else{var l=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;o=o.concat([`exec`,`print`]),s=s.concat([`apply`,`basestring`,`buffer`,`cmp`,`coerce`,`execfile`,`file`,`intern`,`long`,`raw_input`,`reduce`,`reload`,`unichr`,`unicode`,`xrange`,`None`]);var u=RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,`i`)}var d=ey(o),f=ey(s);function p(e,t){var n=e.sol()&&t.lastToken!=`\\`;if(n&&(t.indent=e.indentation()),n&&iy(t).type==`py`){var r=iy(t).offset;if(e.eatSpace()){var i=e.indentation();return i>r?_(e,t):i<r&&y(e,t)&&e.peek()!=`#`&&(t.errorToken=!0),null}var a=m(e,t);return r>0&&y(e,t)&&(a+=` error`),a}return m(e,t)}function m(e,i,a){if(e.eatSpace())return null;if(!a&&e.match(/^#.*/))return`comment`;if(e.match(/^[0-9\.]/,!1)){var o=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(o=!0),e.match(/^[\d_]+\.\d*/)&&(o=!0),e.match(/^\.\d+/)&&(o=!0),o)return e.eat(/J/i),`number`;var s=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(s=!0),e.match(/^0b[01_]+/i)&&(s=!0),e.match(/^0o[0-7_]+/i)&&(s=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),s=!0),e.match(/^0(?![\dx])/i)&&(s=!0),s)return e.eat(/L/i),`number`}if(e.match(u))return e.current().toLowerCase().indexOf(`f`)===-1?(i.tokenize=g(e.current(),i.tokenize),i.tokenize(e,i)):(i.tokenize=h(e.current(),i.tokenize),i.tokenize(e,i));for(var c=0;c<r.length;c++)if(e.match(r[c]))return`operator`;return e.match(n)?`punctuation`:i.lastToken==`.`&&e.match(l)?`property`:e.match(d)||e.match(ty)?`keyword`:e.match(f)?`builtin`:e.match(/^(self|cls)\b/)?`self`:e.match(l)?i.lastToken==`def`||i.lastToken==`class`?`def`:`variable`:(e.next(),a?null:t)}function h(n,r){for(;`rubf`.indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=n.length==1,a=`string`;function o(e){return function(t,n){var r=m(t,n,!0);return r==`punctuation`&&(t.current()==`{`?n.tokenize=o(e+1):t.current()==`}`&&(n.tokenize=e>1?o(e-1):s)),r}}function s(s,c){for(;!s.eol();)if(s.eatWhile(/[^'"\{\}\\]/),s.eat(`\\`)){if(s.next(),i&&s.eol())return a}else if(s.match(n))return c.tokenize=r,a;else if(s.match(`{{`))return a;else if(s.match(`{`,!1))return c.tokenize=o(0),s.current()?a:c.tokenize(s,c);else if(s.match(`}}`))return a;else if(s.match(`}`))return t;else s.eat(/['"]/);if(i){if(e.singleLineStringErrors)return t;c.tokenize=r}return a}return s.isString=!0,s}function g(n,r){for(;`rubf`.indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=n.length==1,a=`string`;function o(o,s){for(;!o.eol();)if(o.eatWhile(/[^'"\\]/),o.eat(`\\`)){if(o.next(),i&&o.eol())return a}else if(o.match(n))return s.tokenize=r,a;else o.eat(/['"]/);if(i){if(e.singleLineStringErrors)return t;s.tokenize=r}return a}return o.isString=!0,o}function _(e,t){for(;iy(t).type!=`py`;)t.scopes.pop();t.scopes.push({offset:iy(t).offset+e.indentUnit,type:`py`,align:null})}function v(e,t,n){var r=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+(a||e.indentUnit),type:n,align:r})}function y(e,t){for(var n=e.indentation();t.scopes.length>1&&iy(t).offset>n;){if(iy(t).type!=`py`)return!0;t.scopes.pop()}return iy(t).offset!=n}function ee(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),i=e.current();if(n.beginningOfLine&&i==`@`)return e.match(l,!1)?`meta`:c?`operator`:t;if(/\S/.test(i)&&(n.beginningOfLine=!1),(r==`variable`||r==`builtin`)&&n.lastToken==`meta`&&(r=`meta`),(i==`pass`||i==`return`)&&(n.dedent=!0),i==`lambda`&&(n.lambda=!0),i==`:`&&!n.lambda&&iy(n).type==`py`&&e.match(/^\s*(?:#|$)/,!1)&&_(e,n),i.length==1&&!/string|comment/.test(r)){var o=`[({`.indexOf(i);if(o!=-1&&v(e,n,`])}`.slice(o,o+1)),o=`])}`.indexOf(i),o!=-1){if(iy(n).type==i)n.indent=n.scopes.pop().offset-(a||e.indentUnit);else return t}}return n.dedent&&e.eol()&&iy(n).type==`py`&&n.scopes.length>1&&n.scopes.pop(),r}return{name:`python`,startState:function(){return{tokenize:p,scopes:[{offset:0,type:`py`,align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var i=ee(e,n);return i&&i!=`comment`&&(n.lastToken=i==`keyword`||i==`punctuation`?e.current():i),i==`punctuation`&&(i=null),e.eol()&&n.lambda&&(n.lambda=!1),r?t:i},indent:function(e,t,n){if(e.tokenize!=p)return e.tokenize.isString?null:0;var r=iy(e),i=r.type==t.charAt(0)||r.type==`py`&&!e.dedent&&/^(else:|elif |except |finally:)/.test(t);return r.align==null?r.offset-(i?a||n.unit:0):r.align-+!!i},languageData:{autocomplete:ny.concat(ry).concat([`exec`,`print`]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:`#`},closeBrackets:{brackets:[`(`,`[`,`{`,`'`,`"`,`'''`,`"""`]}}}}var oy=function(e){return e.split(` `)},sy=ay({});ay({extra_keywords:oy(`by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE`)});var cy=t({default:()=>ly,syntaxExtension:()=>ly}),ly=bv.define(sy);function uy(e){var t=e.statementIndent,n=e.jsonld,r=e.json||n,i=e.typescript,a=e.wordCharacters||/[\w$\xa1-\uffff]/,o=function(){function e(e){return{type:e,style:`keyword`}}var t=e(`keyword a`),n=e(`keyword b`),r=e(`keyword c`),i=e(`keyword d`),a=e(`operator`),o={type:`atom`,style:`atom`};return{if:e(`if`),while:t,with:t,else:n,do:n,try:n,finally:n,return:i,break:i,continue:i,new:e(`new`),delete:r,void:r,throw:r,debugger:e(`debugger`),var:e(`var`),const:e(`var`),let:e(`var`),function:e(`function`),catch:e(`catch`),for:e(`for`),switch:e(`switch`),case:e(`case`),default:e(`default`),in:a,typeof:a,instanceof:a,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e(`this`),class:e(`class`),super:e(`atom`),yield:r,export:e(`export`),import:e(`import`),extends:r,await:r}}(),s=/[+\-*&%=<>!?|~^@]/,c=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function l(e){for(var t=!1,n,r=!1;(n=e.next())!=null;){if(!t){if(n==`/`&&!r)return;n==`[`?r=!0:r&&n==`]`&&(r=!1)}t=!t&&n==`\\`}}var u,d;function f(e,t,n){return u=e,d=n,t}function p(e,t){var n=e.next();if(n==`"`||n==`'`)return t.tokenize=m(n),t.tokenize(e,t);if(n==`.`&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return f(`number`,`number`);if(n==`.`&&e.match(`..`))return f(`spread`,`meta`);if(/[\[\]{}\(\),;\:\.]/.test(n))return f(n);if(n==`=`&&e.eat(`>`))return f(`=>`,`operator`);if(n==`0`&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return f(`number`,`number`);if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),f(`number`,`number`);if(n==`/`)return e.eat(`*`)?(t.tokenize=h,h(e,t)):e.eat(`/`)?(e.skipToEnd(),f(`comment`,`comment`)):wt(e,t,1)?(l(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),f(`regexp`,`string.special`)):(e.eat(`=`),f(`operator`,`operator`,e.current()));if(n=="`")return t.tokenize=g,g(e,t);if(n==`#`&&e.peek()==`!`)return e.skipToEnd(),f(`meta`,`meta`);if(n==`#`&&e.eatWhile(a))return f(`variable`,`property`);if(n==`<`&&e.match(`!--`)||n==`-`&&e.match(`->`)&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),f(`comment`,`comment`);if(s.test(n))return(n!=`>`||!t.lexical||t.lexical.type!=`>`)&&(e.eat(`=`)?(n==`!`||n==`=`)&&e.eat(`=`):/[<>*+\-|&?]/.test(n)&&(e.eat(n),n==`>`&&e.eat(n))),n==`?`&&e.eat(`.`)?f(`.`):f(`operator`,`operator`,e.current());if(a.test(n)){e.eatWhile(a);var r=e.current();if(t.lastType!=`.`){if(o.propertyIsEnumerable(r)){var i=o[r];return f(i.type,i.style,r)}if(r==`async`&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return f(`async`,`keyword`,r)}return f(`variable`,`variable`,r)}}function m(e){return function(t,r){var i=!1,a;if(n&&t.peek()==`@`&&t.match(c))return r.tokenize=p,f(`jsonld-keyword`,`meta`);for(;(a=t.next())!=null&&!(a==e&&!i);)i=!i&&a==`\\`;return i||(r.tokenize=p),f(`string`,`string`)}}function h(e,t){for(var n=!1,r;r=e.next();){if(r==`/`&&n){t.tokenize=p;break}n=r==`*`}return f(`comment`,`comment`)}function g(e,t){for(var n=!1,r;(r=e.next())!=null;){if(!n&&(r=="`"||r==`$`&&e.eat(`{`))){t.tokenize=p;break}n=!n&&r==`\\`}return f(`quasi`,`string.special`,e.current())}var _=`([{}])`;function v(e,t){t.fatArrowAt&&=null;var n=e.string.indexOf(`=>`,e.start);if(!(n<0)){if(i){var r=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,n));r&&(n=r.index)}for(var o=0,s=!1,c=n-1;c>=0;--c){var l=e.string.charAt(c),u=_.indexOf(l);if(u>=0&&u<3){if(!o){++c;break}if(--o==0){l==`(`&&(s=!0);break}}else if(u>=3&&u<6)++o;else if(a.test(l))s=!0;else if(/["'\/`]/.test(l))for(;;--c){if(c==0)return;if(e.string.charAt(c-1)==l&&e.string.charAt(c-2)!=`\\`){c--;break}}else if(s&&!o){++c;break}}s&&!o&&(t.fatArrowAt=c)}}var y={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function ee(e,t,n,r,i,a){this.indented=e,this.column=t,this.type=n,this.prev=i,this.info=a,r!=null&&(this.align=r)}function b(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0;for(var r=e.context;r;r=r.prev)for(var n=r.vars;n;n=n.next)if(n.name==t)return!0}function te(e,t,n,i,a){var o=e.cc;for(x.state=e,x.stream=a,x.marked=null,x.cc=o,x.style=t,e.lexical.hasOwnProperty(`align`)||(e.lexical.align=!0);;)if((o.length?o.pop():r?O:D)(n,i)){for(;o.length&&o[o.length-1].lex;)o.pop()();return x.marked?x.marked:n==`variable`&&b(e,i)?`variableName.local`:t}}var x={state:null,column:null,marked:null,cc:null};function S(){for(var e=arguments.length-1;e>=0;e--)x.cc.push(arguments[e])}function C(){return S.apply(null,arguments),!0}function ne(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function re(t){var n=x.state;if(x.marked=`def`,n.context){if(n.lexical.info==`var`&&n.context&&n.context.block){var r=ie(t,n.context);if(r!=null){n.context=r;return}}else if(!ne(t,n.localVars)){n.localVars=new se(t,n.localVars);return}}e.globalVars&&!ne(t,n.globalVars)&&(n.globalVars=new se(t,n.globalVars))}function ie(e,t){if(!t)return null;if(t.block){var n=ie(e,t.prev);return n?n==t.prev?t:new oe(n,t.vars,!0):null}return ne(e,t.vars)?t:new oe(t.prev,new se(e,t.vars),!1)}function ae(e){return e==`public`||e==`private`||e==`protected`||e==`abstract`||e==`readonly`}function oe(e,t,n){this.prev=e,this.vars=t,this.block=n}function se(e,t){this.name=e,this.next=t}var ce=new se(`this`,new se(`arguments`,null));function le(){x.state.context=new oe(x.state.context,x.state.localVars,!1),x.state.localVars=ce}function ue(){x.state.context=new oe(x.state.context,x.state.localVars,!0),x.state.localVars=null}le.lex=ue.lex=!0;function de(){x.state.localVars=x.state.context.vars,x.state.context=x.state.context.prev}de.lex=!0;function w(e,t){var n=function(){var n=x.state,r=n.indented;if(n.lexical.type==`stat`)r=n.lexical.indented;else for(var i=n.lexical;i&&i.type==`)`&&i.align;i=i.prev)r=i.indented;n.lexical=new ee(r,x.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function T(){var e=x.state;e.lexical.prev&&(e.lexical.type==`)`&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}T.lex=!0;function E(e){function t(n){return n==e?C():e==`;`||n==`}`||n==`)`||n==`]`?S():C(t)}return t}function D(e,t){return e==`var`?C(w(`vardef`,t),Je,E(`;`),T):e==`keyword a`?C(w(`form`),me,D,T):e==`keyword b`?C(w(`form`),D,T):e==`keyword d`?x.stream.match(/^\s*$/,!1)?C():C(w(`stat`),ge,E(`;`),T):e==`debugger`?C(E(`;`)):e==`{`?C(w(`}`),ue,Ne,T,de):e==`;`?C():e==`if`?(x.state.lexical.info==`else`&&x.state.cc[x.state.cc.length-1]==T&&x.state.cc.pop()(),C(w(`form`),me,D,T,et)):e==`function`?C(it):e==`for`?C(w(`form`),ue,tt,D,de,T):e==`class`||i&&t==`interface`?(x.marked=`keyword`,C(w(`form`,e==`class`?e:t),lt,T)):e==`variable`?i&&t==`declare`?(x.marked=`keyword`,C(D)):i&&(t==`module`||t==`enum`||t==`type`)&&x.stream.match(/^\s*\w/,!1)?(x.marked=`keyword`,t==`enum`?C(xt):t==`type`?C(ot,E(`operator`),k,E(`;`)):C(w(`form`),Ye,E(`{`),w(`}`),Ne,T,T)):i&&t==`namespace`?(x.marked=`keyword`,C(w(`form`),O,D,T)):i&&t==`abstract`?(x.marked=`keyword`,C(D)):C(w(`stat`),Ee):e==`switch`?C(w(`form`),me,E(`{`),w(`}`,`switch`),ue,Ne,T,T,de):e==`case`?C(O,E(`:`)):e=="default"?C(E(`:`)):e==`catch`?C(w(`form`),le,fe,D,T,de):e==`export`?C(w(`stat`),pt,T):e==`import`?C(w(`stat`),ht,T):e==`async`?C(D):t==`@`?C(O,D):S(w(`stat`),O,E(`;`),T)}function fe(e){if(e==`(`)return C(st,E(`)`))}function O(e,t){return he(e,t,!1)}function pe(e,t){return he(e,t,!0)}function me(e){return e==`(`?C(w(`)`),ge,E(`)`),T):S()}function he(e,t,n){if(x.state.fatArrowAt==x.stream.start){var r=n?Se:xe;if(e==`(`)return C(le,w(`)`),je(st,`)`),T,E(`=>`),r,de);if(e==`variable`)return S(le,Ye,E(`=>`),r,de)}var a=n?ve:_e;return y.hasOwnProperty(e)?C(a):e==`function`?C(it,a):e==`class`||i&&t==`interface`?(x.marked=`keyword`,C(w(`form`),ct,T)):e==`keyword c`||e==`async`?C(n?pe:O):e==`(`?C(w(`)`),ge,E(`)`),T,a):e==`operator`||e==`spread`?C(n?pe:O):e==`[`?C(w(`]`),bt,T,a):e==`{`?Me(Oe,`}`,null,a):e==`quasi`?S(ye,a):e==`new`?C(Ce(n)):C()}function ge(e){return e.match(/[;\}\)\],]/)?S():S(O)}function _e(e,t){return e==`,`?C(ge):ve(e,t,!1)}function ve(e,t,n){var r=n==0?_e:ve,a=n==0?O:pe;if(e==`=>`)return C(le,n?Se:xe,de);if(e==`operator`)return/\+\+|--/.test(t)||i&&t==`!`?C(r):i&&t==`<`&&x.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?C(w(`>`),je(k,`>`),T,r):t==`?`?C(O,E(`:`),a):C(a);if(e==`quasi`)return S(ye,r);if(e!=`;`){if(e==`(`)return Me(pe,`)`,`call`,r);if(e==`.`)return C(De,r);if(e==`[`)return C(w(`]`),ge,E(`]`),T,r);if(i&&t==`as`)return x.marked=`keyword`,C(k,r);if(e==`regexp`)return x.state.lastType=x.marked=`operator`,x.stream.backUp(x.stream.pos-x.stream.start-1),C(a)}}function ye(e,t){return e==`quasi`?t.slice(t.length-2)=="${"?C(ge,be):C(ye):S()}function be(e){if(e==`}`)return x.marked=`string.special`,x.state.tokenize=g,C(ye)}function xe(e){return v(x.stream,x.state),S(e==`{`?D:O)}function Se(e){return v(x.stream,x.state),S(e==`{`?D:pe)}function Ce(e){return function(t){return t==`.`?C(e?Te:we):t==`variable`&&i?C(Ge,e?ve:_e):S(e?pe:O)}}function we(e,t){if(t==`target`)return x.marked=`keyword`,C(_e)}function Te(e,t){if(t==`target`)return x.marked=`keyword`,C(ve)}function Ee(e){return e==`:`?C(T,D):S(_e,E(`;`),T)}function De(e){if(e==`variable`)return x.marked=`property`,C()}function Oe(e,t){if(e==`async`)return x.marked=`property`,C(Oe);if(e==`variable`||x.style==`keyword`){if(x.marked=`property`,t==`get`||t==`set`)return C(ke);var r;return i&&x.state.fatArrowAt==x.stream.start&&(r=x.stream.match(/^\s*:\s*/,!1))&&(x.state.fatArrowAt=x.stream.pos+r[0].length),C(Ae)}if(e==`number`||e==`string`)return x.marked=n?`property`:x.style+` property`,C(Ae);if(e==`jsonld-keyword`)return C(Ae);if(i&&ae(t))return x.marked=`keyword`,C(Oe);if(e==`[`)return C(O,Pe,E(`]`),Ae);if(e==`spread`)return C(pe,Ae);if(t==`*`)return x.marked=`keyword`,C(Oe);if(e==`:`)return S(Ae)}function ke(e){return e==`variable`?(x.marked=`property`,C(it)):S(Ae)}function Ae(e){if(e==`:`)return C(pe);if(e==`(`)return S(it)}function je(e,t,n){function r(i,a){if(n?n.indexOf(i)>-1:i==`,`){var o=x.state.lexical;return o.info==`call`&&(o.pos=(o.pos||0)+1),C(function(n,r){return n==t||r==t?S():S(e)},r)}return i==t||a==t?C():n&&n.indexOf(`;`)>-1?S(e):C(E(t))}return function(n,i){return n==t||i==t?C():S(e,r)}}function Me(e,t,n){for(var r=3;r<arguments.length;r++)x.cc.push(arguments[r]);return C(w(t,n),je(e,t),T)}function Ne(e){return e==`}`?C():S(D,Ne)}function Pe(e,t){if(i){if(e==`:`)return C(k);if(t==`?`)return C(Pe)}}function Fe(e,t){if(i&&(e==`:`||t==`in`))return C(k)}function Ie(e){if(i&&e==`:`)return x.stream.match(/^\s*\w+\s+is\b/,!1)?C(O,Le,k):C(k)}function Le(e,t){if(t==`is`)return x.marked=`keyword`,C()}function k(e,t){if(t==`keyof`||t==`typeof`||t==`infer`||t==`readonly`)return x.marked=`keyword`,C(t==`typeof`?pe:k);if(e==`variable`||t==`void`)return x.marked=`type`,C(We);if(t==`|`||t==`&`)return C(k);if(e==`string`||e==`number`||e==`atom`)return C(We);if(e==`[`)return C(w(`]`),je(k,`]`,`,`),T,We);if(e==`{`)return C(w(`}`),ze,T,We);if(e==`(`)return C(je(Ue,`)`),Re,We);if(e==`<`)return C(je(k,`>`),k);if(e==`quasi`)return S(Ve,We)}function Re(e){if(e==`=>`)return C(k)}function ze(e){return e.match(/[\}\)\]]/)?C():e==`,`||e==`;`?C(ze):S(Be,ze)}function Be(e,t){if(e==`variable`||x.style==`keyword`)return x.marked=`property`,C(Be);if(t==`?`||e==`number`||e==`string`)return C(Be);if(e==`:`)return C(k);if(e==`[`)return C(E(`variable`),Fe,E(`]`),Be);if(e==`(`)return S(at,Be);if(!e.match(/[;\}\)\],]/))return C()}function Ve(e,t){return e==`quasi`?t.slice(t.length-2)=="${"?C(k,He):C(Ve):S()}function He(e){if(e==`}`)return x.marked=`string.special`,x.state.tokenize=g,C(Ve)}function Ue(e,t){return e==`variable`&&x.stream.match(/^\s*[?:]/,!1)||t==`?`?C(Ue):e==`:`?C(k):e==`spread`?C(Ue):S(k)}function We(e,t){if(t==`<`)return C(w(`>`),je(k,`>`),T,We);if(t==`|`||e==`.`||t==`&`)return C(k);if(e==`[`)return C(k,E(`]`),We);if(t==`extends`||t==`implements`)return x.marked=`keyword`,C(k);if(t==`?`)return C(k,E(`:`),k)}function Ge(e,t){if(t==`<`)return C(w(`>`),je(k,`>`),T,We)}function Ke(){return S(k,qe)}function qe(e,t){if(t==`=`)return C(k)}function Je(e,t){return t==`enum`?(x.marked=`keyword`,C(xt)):S(Ye,Pe,Qe,$e)}function Ye(e,t){if(i&&ae(t))return x.marked=`keyword`,C(Ye);if(e==`variable`)return re(t),C();if(e==`spread`)return C(Ye);if(e==`[`)return Me(Ze,`]`);if(e==`{`)return Me(Xe,`}`)}function Xe(e,t){return e==`variable`&&!x.stream.match(/^\s*:/,!1)?(re(t),C(Qe)):(e==`variable`&&(x.marked=`property`),e==`spread`?C(Ye):e==`}`?S():e==`[`?C(O,E(`]`),E(`:`),Xe):C(E(`:`),Ye,Qe))}function Ze(){return S(Ye,Qe)}function Qe(e,t){if(t==`=`)return C(pe)}function $e(e){if(e==`,`)return C(Je)}function et(e,t){if(e==`keyword b`&&t==`else`)return C(w(`form`,`else`),D,T)}function tt(e,t){if(t==`await`)return C(tt);if(e==`(`)return C(w(`)`),nt,T)}function nt(e){return e==`var`?C(Je,rt):e==`variable`?C(rt):S(rt)}function rt(e,t){return e==`)`?C():e==`;`?C(rt):t==`in`||t==`of`?(x.marked=`keyword`,C(O,rt)):S(O,rt)}function it(e,t){if(t==`*`)return x.marked=`keyword`,C(it);if(e==`variable`)return re(t),C(it);if(e==`(`)return C(le,w(`)`),je(st,`)`),T,Ie,D,de);if(i&&t==`<`)return C(w(`>`),je(Ke,`>`),T,it)}function at(e,t){if(t==`*`)return x.marked=`keyword`,C(at);if(e==`variable`)return re(t),C(at);if(e==`(`)return C(le,w(`)`),je(st,`)`),T,Ie,de);if(i&&t==`<`)return C(w(`>`),je(Ke,`>`),T,at)}function ot(e,t){if(e==`keyword`||e==`variable`)return x.marked=`type`,C(ot);if(t==`<`)return C(w(`>`),je(Ke,`>`),T)}function st(e,t){return t==`@`&&C(O,st),e==`spread`?C(st):i&&ae(t)?(x.marked=`keyword`,C(st)):i&&e==`this`?C(Pe,Qe):S(Ye,Pe,Qe)}function ct(e,t){return e==`variable`?lt(e,t):ut(e,t)}function lt(e,t){if(e==`variable`)return re(t),C(ut)}function ut(e,t){if(t==`<`)return C(w(`>`),je(Ke,`>`),T,ut);if(t==`extends`||t==`implements`||i&&e==`,`)return t==`implements`&&(x.marked=`keyword`),C(i?k:O,ut);if(e==`{`)return C(w(`}`),dt,T)}function dt(e,t){if(e==`async`||e==`variable`&&(t==`static`||t==`get`||t==`set`||i&&ae(t))&&x.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return x.marked=`keyword`,C(dt);if(e==`variable`||x.style==`keyword`)return x.marked=`property`,C(ft,dt);if(e==`number`||e==`string`)return C(ft,dt);if(e==`[`)return C(O,Pe,E(`]`),ft,dt);if(t==`*`)return x.marked=`keyword`,C(dt);if(i&&e==`(`)return S(at,dt);if(e==`;`||e==`,`)return C(dt);if(e==`}`)return C();if(t==`@`)return C(O,dt)}function ft(e,t){if(t==`!`||t==`?`)return C(ft);if(e==`:`)return C(k,Qe);if(t==`=`)return C(pe);var n=x.state.lexical.prev;return S(n&&n.info==`interface`?at:it)}function pt(e,t){return t==`*`?(x.marked=`keyword`,C(yt,E(`;`))):t=="default"?(x.marked=`keyword`,C(O,E(`;`))):e==`{`?C(je(mt,`}`),yt,E(`;`)):S(D)}function mt(e,t){if(t==`as`)return x.marked=`keyword`,C(E(`variable`));if(e==`variable`)return S(pe,mt)}function ht(e){return e==`string`?C():e==`(`?S(O):e==`.`?S(_e):S(gt,_t,yt)}function gt(e,t){return e==`{`?Me(gt,`}`):(e==`variable`&&re(t),t==`*`&&(x.marked=`keyword`),C(vt))}function _t(e){if(e==`,`)return C(gt,_t)}function vt(e,t){if(t==`as`)return x.marked=`keyword`,C(gt)}function yt(e,t){if(t==`from`)return x.marked=`keyword`,C(O)}function bt(e){return e==`]`?C():S(je(pe,`]`))}function xt(){return S(w(`form`),Ye,E(`{`),w(`}`),je(St,`}`),T,T)}function St(){return S(Ye,Qe)}function Ct(e,t){return e.lastType==`operator`||e.lastType==`,`||s.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}function wt(e,t,n){return t.tokenize==p&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||t.lastType==`quasi`&&/\{\s*$/.test(e.string.slice(0,e.pos-(n||0)))}return{name:e.name,startState:function(t){var n={tokenize:p,lastType:`sof`,cc:[],lexical:new ee(-t,0,`block`,!1),localVars:e.localVars,context:e.localVars&&new oe(null,null,!1),indented:0};return e.globalVars&&typeof e.globalVars==`object`&&(n.globalVars=e.globalVars),n},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty(`align`)||(t.lexical.align=!1),t.indented=e.indentation(),v(e,t)),t.tokenize!=h&&e.eatSpace())return null;var n=t.tokenize(e,t);return u==`comment`?n:(t.lastType=u==`operator`&&(d==`++`||d==`--`)?`incdec`:u,te(t,n,u,d,e))},indent:function(n,r,i){if(n.tokenize==h||n.tokenize==g)return null;if(n.tokenize!=p)return 0;var a=r&&r.charAt(0),o=n.lexical,s;if(!/^\s*else\b/.test(r))for(var c=n.cc.length-1;c>=0;--c){var l=n.cc[c];if(l==T)o=o.prev;else if(l!=et&&l!=de)break}for(;(o.type==`stat`||o.type==`form`)&&(a==`}`||(s=n.cc[n.cc.length-1])&&(s==_e||s==ve)&&!/^[,\.=+\-*:?[\(]/.test(r));)o=o.prev;t&&o.type==`)`&&o.prev.type==`stat`&&(o=o.prev);var u=o.type,d=a==u;return u==`vardef`?o.indented+(n.lastType==`operator`||n.lastType==`,`?o.info.length+1:0):u==`form`&&a==`{`?o.indented:u==`form`?o.indented+i.unit:u==`stat`?o.indented+(Ct(n,r)?t||i.unit:0):o.info==`switch`&&!d&&e.doubleIndentSwitch!=0?o.indented+(/^(?:case|default)\b/.test(r)?i.unit:2*i.unit):o.align?o.column+ +!d:o.indented+(d?0:i.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:r?void 0:{line:`//`,block:{open:`/*`,close:`*/`}},closeBrackets:{brackets:[`(`,`[`,`{`,`'`,`"`,"`"]},wordChars:`$`}}}var dy=uy({name:`javascript`});uy({name:`json`,json:!0}),uy({name:`json`,jsonld:!0}),uy({name:`typescript`,typescript:!0});var fy=t({default:()=>py,syntaxExtension:()=>py}),py=bv.define(dy),my={title:`codebook`,subtitle:`by wrongfirst.dev`,default_language:`typescript`,languages:[`typescript`,`ocaml`,`python`,`go`],project_url:`https://github.com/jitinnair1/codebook`,author_url:`https://github.com/jitinnair1`,logo_emoji:`📓`,headline:`codebook | in-browser programming exercises`,description:`Interactive coding exercises in the browser.`,keywords:`codebook, interactive exercises, web-based compiler`},hy=`modulepreload`,gy=function(e,t){return new URL(e,t).href},_y={},vy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=gy(t,n),t=s(t),t in _y)return;_y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:hy,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},yy=Object.assign({"./go/metadata.ts":oo,"./ocaml/metadata.ts":co,"./python/metadata.ts":uo,"./typescript/metadata.ts":po}),by=Object.assign({"./go/adapter.ts":()=>vy(()=>import(`./adapter-6kzDakjG.js`),__vite__mapDeps([0,1]),import.meta.url),"./ocaml/adapter.ts":()=>vy(()=>import(`./adapter-CvJ76Tk4.js`),__vite__mapDeps([2,1]),import.meta.url),"./python/adapter.ts":()=>vy(()=>import(`./adapter-ffOAhqJL.js`),__vite__mapDeps([3,1]),import.meta.url),"./typescript/adapter.ts":()=>vy(()=>import(`./adapter-CTPajF56.js`),__vite__mapDeps([4,1]),import.meta.url)}),xy=Object.assign({"./go/syntax.ts":Jv,"./ocaml/syntax.ts":Qv,"./python/syntax.ts":cy,"./typescript/syntax.ts":fy}),Sy=new Map,Cy=new Map;for(let e in yy){let t=e.match(/\.\/([^/]+)\/metadata\.ts$/);if(!t)continue;let n=t[1],r=yy[e],i=r.metadata||r.default;i&&Sy.set(n,i);let a=xy[`./${n}/syntax.ts`],o=a?a.syntaxExtension||a.default:void 0;o&&Cy.set(n,o)}var wy=my,Ty=Array.from(Sy.keys()),Ey=Ty.length>0?Ty[0]:``,Dy=(Array.isArray(wy.languages)?wy.languages:wy.default_language||wy.language?[wy.default_language||wy.language]:Ty).filter(e=>Sy.has(e)),Oy=wy.default_language||(Dy.length>0?Dy[0]:Ey),ky=new Map,Ay=new Map;function jy(){return Dy.map(e=>Sy.get(e)).filter(e=>e!==void 0)}function My(e){return Sy.get(e)}function Ny(e){return ky.get(e)||null}async function Py(e){if(!Dy.includes(e))throw Error(`Language '${e}' is not enabled in site.toml.\nEnabled languages: ${Dy.join(`, `)}`);if(ky.has(e))return ky.get(e);if(Ay.has(e))return Ay.get(e);let t=by[`./${e}/adapter.ts`];if(!t)throw Error(`Adapter module for language '${e}' is not registered under 'src/languages/${e}/adapter.ts'.`);let n=t().then(t=>{let n=t.runner||t.default||Object.values(t)[0];if(!n)throw Error(`Failed to find CodeRunner export in 'src/languages/${e}/adapter.ts'.`);return ky.set(e,n),Ay.delete(e),n}).catch(t=>{throw Ay.delete(e),t});return Ay.set(e,n),n}function Fy(e){return Cy.get(e)}var X=r()(o((e,t)=>({currentExerciseId:ao[0]?.id||`1.1`,currentLanguageId:Oy,completedIds:[],userCode:{},markComplete:n=>{let{completedIds:r}=t();r.includes(n)||e({completedIds:[...r,n]})},setCurrent:t=>e({currentExerciseId:t}),setLanguage:t=>e({currentLanguageId:t}),saveUserCode:(n,r,i)=>{let a=`${n}:${r}`;e({userCode:{...t().userCode,[a]:i}})},getUserCode:(e,n)=>{let{userCode:r}=t();return r[`${e}:${n}`]??r[e]}}),{name:`storage`}));function Iy(e,t){return e.variants&&e.variants[t]?e.variants[t]:{initialCode:e.initialCode||``,testCode:e.testCode||``,validate:e.validate}}var Ly=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=Hy(e.state,n.from);return r.line?zy(e):r.block?Vy(e):!1};function Ry(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let i=e(t,n);return i?(r(n.update(i)),!0):!1}}var zy=Ry(qy,0),By=Ry(Ky,0),Vy=Ry((e,t)=>Ky(e,t,Gy(t)),0);function Hy(e,t){let n=e.languageDataAt(`commentTokens`,t,1);return n.length?n[0]:{}}var Uy=50;function Wy(e,{open:t,close:n},r,i){let a=e.sliceDoc(r-Uy,r),o=e.sliceDoc(i,i+Uy),s=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(o)[0].length,l=a.length-s;if(a.slice(l-t.length,l)==t&&o.slice(c,c+n.length)==n)return{open:{pos:r-s,margin:s&&1},close:{pos:i+c,margin:c&&1}};let u,d;i-r<=100?u=d=e.sliceDoc(r,i):(u=e.sliceDoc(r,r+Uy),d=e.sliceDoc(i-Uy,i));let f=/^\s*/.exec(u)[0].length,p=/\s*$/.exec(d)[0].length,m=d.length-p-n.length;return u.slice(f,f+t.length)==t&&d.slice(m,m+n.length)==n?{open:{pos:r+f+t.length,margin:+!!/\s/.test(u.charAt(f+t.length))},close:{pos:i-p-n.length,margin:+!!/\s/.test(d.charAt(m-1))}}:null}function Gy(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),i=n.to<=r.to?r:e.doc.lineAt(n.to);i.from>r.from&&i.from==n.to&&(i=n.to==r.to+1?r:e.doc.lineAt(n.to-1));let a=t.length-1;a>=0&&t[a].to>r.from?t[a].to=i.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:i.to})}return t}function Ky(e,t,n=t.selection.ranges){let r=n.map(e=>Hy(t,e.from).block);if(!r.every(e=>e))return null;let i=n.map((e,n)=>Wy(t,r[n],e.from,e.to));if(e!=2&&!i.every(e=>e))return{changes:t.changes(n.map((e,t)=>i[t]?[]:[{from:e.from,insert:r[t].open+` `},{from:e.to,insert:` `+r[t].close}]))};if(e!=1&&i.some(e=>e)){let e=[];for(let t=0,n;t<i.length;t++)if(n=i[t]){let i=r[t],{open:a,close:o}=n;e.push({from:a.pos-i.open.length,to:a.pos+a.margin},{from:o.pos-o.margin,to:o.pos+i.close.length})}return{changes:e}}return null}function qy(e,t,n=t.selection.ranges){let r=[],i=-1;ranges:for(let{from:e,to:a}of n){let n=r.length,o=1e9,s;for(let n=e;n<=a;){let c=t.doc.lineAt(n);if(s==null&&(s=Hy(t,c.from).line,!s))continue ranges;if(c.from>i&&(e==a||a>c.from)){i=c.from;let e=/^\s*/.exec(c.text)[0].length,t=e==c.length,n=c.text.slice(e,e+s.length)==s?e:-1;e<c.text.length&&e<o&&(o=e),r.push({line:c,comment:n,token:s,indent:e,empty:t,single:!1})}n=c.to+1}if(o<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=o);r.length==n+1&&(r[n].single=!0)}if(e!=2&&r.some(e=>e.comment<0&&(!e.empty||e.single))){let e=[];for(let{line:t,token:n,indent:i,empty:a,single:o}of r)(o||!a)&&e.push({from:t.from+i,insert:n+` `});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}if(e!=1&&r.some(e=>e.comment>=0)){let e=[];for(let{line:t,comment:n,token:i}of r)if(n>=0){let r=t.from+n,a=r+i.length;t.text[a-t.from]==` `&&a++,e.push({from:r,to:a})}return{changes:e}}return null}var Jy=rc.define(),Yy=rc.define(),Xy=F.define(),Zy=F.define({combine(e){return yc(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}}),Qy=zs.define({create(){return _b.empty},update(e,t){let n=t.state.facet(Zy),r=t.annotation(Jy);if(r){let i=ab.fromTransaction(t,r.selection),a=r.side,o=a==0?e.undone:e.done;return o=i?ob(o,o.length,n.minDepth,i):fb(o,t.startState.selection),new _b(a==0?r.rest:o,a==0?o:r.rest)}let i=t.annotation(Yy);if((i==`full`||i==`before`)&&(e=e.isolate()),t.annotation(oc.addToHistory)===!1)return t.changes.empty?e:e.addMapping(t.changes.desc);let a=ab.fromTransaction(t),o=t.annotation(oc.time),s=t.annotation(oc.userEvent);return a?e=e.addChanges(a,o,s,n,t):t.selection&&(e=e.addSelection(t.startState.selection,o,s,n.newGroupDelay)),(i==`full`||i==`after`)&&(e=e.isolate()),e},toJSON(e){return{done:e.done.map(e=>e.toJSON()),undone:e.undone.map(e=>e.toJSON())}},fromJSON(e){return new _b(e.done.map(ab.fromJSON),e.undone.map(ab.fromJSON))}});function $y(e={}){return[Qy,Zy.of(e),q.domEventHandlers({beforeinput(e,t){let n=e.inputType==`historyUndo`?tb:e.inputType==`historyRedo`?nb:null;return n?(e.preventDefault(),n(t)):!1}})]}function eb(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let i=n.field(Qy,!1);if(!i)return!1;let a=i.pop(e,n,t);return a?(r(a),!0):!1}}var tb=eb(0,!1),nb=eb(1,!1),rb=eb(0,!0),ib=eb(1,!0),ab=class e{constructor(e,t,n,r,i){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=i}setSelAfter(t){return new e(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){return{changes:this.changes?.toJSON(),mapped:this.mapped?.toJSON(),startSelection:this.startSelection?.toJSON(),selectionsAfter:this.selectionsAfter.map(e=>e.toJSON())}}static fromJSON(t){return new e(t.changes&&Cs.fromJSON(t.changes),[],t.mapped&&Ss.fromJSON(t.mapped),t.startSelection&&P.fromJSON(t.startSelection),t.selectionsAfter.map(P.fromJSON))}static fromTransaction(t,n){let r=ub;for(let e of t.startState.facet(Xy)){let n=e(t);n.length&&(r=r.concat(n))}return!r.length&&t.changes.empty?null:new e(t.changes.invert(t.startState.doc),r,void 0,n||t.startState.selection,ub)}static selection(t){return new e(void 0,ub,void 0,void 0,t)}};function ob(e,t,n,r){let i=t+1>n+20?t-n-1:0,a=e.slice(i,t);return a.push(r),a}function sb(e,t){let n=[],r=!1;return e.iterChangedRanges((e,t)=>n.push(e,t)),t.iterChangedRanges((e,t,i,a)=>{for(let e=0;e<n.length;){let t=n[e++],o=n[e++];a>=t&&i<=o&&(r=!0)}}),r}function cb(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((e,n)=>e.empty!=t.ranges[n].empty).length===0}function lb(e,t){return e.length?t.length?e.concat(t):e:t}var ub=[],db=200;function fb(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-db));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),ob(e,e.length-1,1e9,n.setSelAfter(r)))}return[ab.selection([t])]}function pb(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function mb(e,t){if(!e.length)return e;let n=e.length,r=ub;for(;n;){let i=hb(e[n-1],t,r);if(i.changes&&!i.changes.empty||i.effects.length){let t=e.slice(0,n);return t[n-1]=i,t}t=i.mapped,n--,r=i.selectionsAfter}return r.length?[ab.selection(r)]:ub}function hb(e,t,n){let r=lb(e.selectionsAfter.length?e.selectionsAfter.map(e=>e.map(t)):ub,n);if(!e.changes)return ab.selection(r);let i=e.changes.map(t),a=t.mapDesc(e.changes,!0),o=e.mapped?e.mapped.composeDesc(a):a;return new ab(i,I.mapEffects(e.effects,t),o,e.startSelection.map(a),r)}var gb=/^(input\.type|delete)($|\.)/,_b=class e{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new e(this.done,this.undone):this}addChanges(t,n,r,i,a){let o=this.done,s=o[o.length-1];return o=s&&s.changes&&!s.changes.empty&&t.changes&&(!r||gb.test(r))&&(!s.selectionsAfter.length&&n-this.prevTime<i.newGroupDelay&&i.joinToEvent(a,sb(s.changes,t.changes))||r==`input.type.compose`)?ob(o,o.length-1,i.minDepth,new ab(t.changes.compose(s.changes),lb(I.mapEffects(t.effects,s.changes),s.effects),s.mapped,s.startSelection,ub)):ob(o,o.length,i.minDepth,t),new e(o,ub,n,r)}addSelection(t,n,r,i){let a=this.done.length?this.done[this.done.length-1].selectionsAfter:ub;return a.length>0&&n-this.prevTime<i&&r==this.prevUserEvent&&r&&/^select($|\.)/.test(r)&&cb(a[a.length-1],t)?this:new e(fb(this.done,t),this.undone,n,r)}addMapping(t){return new e(mb(this.done,t),mb(this.undone,t),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=e==0?this.done:this.undone;if(r.length==0)return null;let i=r[r.length-1],a=i.selectionsAfter[0]||(i.startSelection?i.startSelection.map(i.changes.invertedDesc,1):t.selection);if(n&&i.selectionsAfter.length)return t.update({selection:i.selectionsAfter[i.selectionsAfter.length-1],annotations:Jy.of({side:e,rest:pb(r),selection:a}),userEvent:e==0?`select.undo`:`select.redo`,scrollIntoView:!0});if(i.changes){let n=r.length==1?ub:r.slice(0,r.length-1);return i.mapped&&(n=mb(n,i.mapped)),t.update({changes:i.changes,selection:i.startSelection,effects:i.effects,annotations:Jy.of({side:e,rest:n,selection:a}),filter:!1,userEvent:e==0?`undo`:`redo`,scrollIntoView:!0})}return null}};_b.empty=new _b(ub,ub);var vb=[{key:`Mod-z`,run:tb,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:nb,preventDefault:!0},{linux:`Ctrl-Shift-z`,run:nb,preventDefault:!0},{key:`Mod-u`,run:rb,preventDefault:!0},{key:`Alt-u`,mac:`Mod-Shift-u`,run:ib,preventDefault:!0}];function yb(e,t){return P.create(e.ranges.map(t),e.mainIndex)}function bb(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:`select`})}function xb({state:e,dispatch:t},n){let r=yb(e.selection,n);return!r.eq(e.selection,!0)&&(t(bb(e,r)),!0)}function Sb(e,t){return P.cursor(t?e.to:e.from)}function Cb(e,t){return xb(e,n=>n.empty?e.moveByChar(n,t):Sb(n,t))}function wb(e){return e.textDirectionAt(e.state.selection.main.head)==U.LTR}var Tb=e=>Cb(e,!wb(e)),Eb=e=>Cb(e,wb(e));function Db(e,t){return xb(e,n=>n.empty?e.moveByGroup(n,t):Sb(n,t))}var Ob=e=>Db(e,!wb(e)),kb=e=>Db(e,wb(e));typeof Intl<`u`&&Intl.Segmenter;function Ab(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function jb(e,t,n){let r=Ug(e).resolveInner(t.head),i=n?A.closedBy:A.openedBy;for(let a=t.head;;){let t=n?r.childAfter(a):r.childBefore(a);if(!t)break;Ab(e,t,i)?r=t:a=n?t.to:t.from}let a=r.type.prop(i),o,s;return s=a&&(o=n?fv(e,r.from,1):fv(e,r.to,-1))&&o.matched?n?o.end.to:o.end.from:n?r.to:r.from,P.cursor(s,n?-1:1)}var Mb=e=>xb(e,t=>jb(e.state,t,!wb(e))),Nb=e=>xb(e,t=>jb(e.state,t,wb(e)));function Pb(e,t){return xb(e,n=>{if(!n.empty)return Sb(n,t);let r=e.moveVertically(n,t);return r.head==n.head?e.moveToLineBoundary(n,t):r})}var Fb=e=>Pb(e,!1),Ib=e=>Pb(e,!0);function Lb(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,n=0,r=0,i;if(t){for(let t of e.state.facet(q.scrollMargins)){let i=t(e);i?.top&&(n=Math.max(i?.top,n)),i?.bottom&&(r=Math.max(i?.bottom,r))}i=e.scrollDOM.clientHeight-n-r}else i=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:n,marginBottom:r,selfScroll:t,height:Math.max(e.defaultLineHeight,i-5)}}function Rb(e,t){let n=Lb(e),{state:r}=e,i=yb(r.selection,r=>r.empty?e.moveVertically(r,t,n.height):Sb(r,t));if(i.eq(r.selection))return!1;let a;if(n.selfScroll){let t=e.coordsAtPos(r.selection.main.head),o=e.scrollDOM.getBoundingClientRect(),s=o.top+n.marginTop,c=o.bottom-n.marginBottom;t&&t.top>s&&t.bottom<c&&(a=q.scrollIntoView(i.main.head,{y:`start`,yMargin:t.top-s}))}return e.dispatch(bb(r,i),{effects:a}),!0}var zb=e=>Rb(e,!1),Bb=e=>Rb(e,!0);function Vb(e,t,n){let r=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?r.to:r.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==r.from&&r.length){let n=/^\s*/.exec(e.state.sliceDoc(r.from,Math.min(r.from+100,r.to)))[0].length;n&&t.head!=r.from+n&&(i=P.cursor(r.from+n))}return i}var Hb=e=>xb(e,t=>Vb(e,t,!0)),Ub=e=>xb(e,t=>Vb(e,t,!1)),Wb=e=>xb(e,t=>Vb(e,t,!wb(e))),Gb=e=>xb(e,t=>Vb(e,t,wb(e))),Kb=e=>xb(e,t=>P.cursor(e.lineBlockAt(t.head).from,1)),qb=e=>xb(e,t=>P.cursor(e.lineBlockAt(t.head).to,-1));function Jb(e,t,n){let r=!1,i=yb(e.selection,t=>{let i=fv(e,t.head,-1)||fv(e,t.head,1)||t.head>0&&fv(e,t.head-1,1)||t.head<e.doc.length&&fv(e,t.head+1,-1);if(!i||!i.end)return t;r=!0;let a=i.start.from==t.head?i.end.to:i.end.from;return n?P.range(t.anchor,a):P.cursor(a)});return r?(t(bb(e,i)),!0):!1}var Yb=({state:e,dispatch:t})=>Jb(e,t,!1);function Xb(e,t,n){let r=yb(e.state.selection,e=>{e.undirectional&&e.head>=e.anchor!=t&&(e=P.range(e.head,e.anchor));let r=n(e);return P.range(e.anchor,r.head,r.goalColumn,r.bidiLevel||void 0,r.assoc)});return!r.eq(e.state.selection)&&(e.dispatch(bb(e.state,r)),!0)}function Zb(e,t){return Xb(e,t,n=>e.moveByChar(n,t))}var Qb=e=>Zb(e,!wb(e)),$b=e=>Zb(e,wb(e));function ex(e,t){return Xb(e,t,n=>e.moveByGroup(n,t))}var tx=e=>ex(e,!wb(e)),nx=e=>ex(e,wb(e)),rx=e=>{let t=!wb(e);return Xb(e,t,n=>jb(e.state,n,t))},ix=e=>{let t=wb(e);return Xb(e,t,n=>jb(e.state,n,t))};function ax(e,t){return Xb(e,t,n=>e.moveVertically(n,t))}var ox=e=>ax(e,!1),sx=e=>ax(e,!0);function cx(e,t){return Xb(e,t,n=>e.moveVertically(n,t,Lb(e).height))}var lx=e=>cx(e,!1),ux=e=>cx(e,!0),dx=e=>Xb(e,!0,t=>Vb(e,t,!0)),fx=e=>Xb(e,!1,t=>Vb(e,t,!1)),px=e=>{let t=!wb(e);return Xb(e,t,n=>Vb(e,n,t))},mx=e=>{let t=wb(e);return Xb(e,t,n=>Vb(e,n,t))},hx=e=>Xb(e,!1,t=>P.cursor(e.lineBlockAt(t.head).from)),gx=e=>Xb(e,!0,t=>P.cursor(e.lineBlockAt(t.head).to)),_x=({state:e,dispatch:t})=>(t(bb(e,{anchor:0})),!0),vx=({state:e,dispatch:t})=>(t(bb(e,{anchor:e.doc.length})),!0),yx=({state:e,dispatch:t})=>(t(bb(e,{anchor:e.selection.main.anchor,head:0})),!0),bx=({state:e,dispatch:t})=>(t(bb(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),xx=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:`select`})),!0),Sx=({state:e,dispatch:t})=>{let n=Vx(e).map(({from:t,to:n})=>P.range(t,Math.min(n+1,e.doc.length)));return t(e.update({selection:P.create(n),userEvent:`select`})),!0},Cx=({state:e,dispatch:t})=>{let n=yb(e.selection,t=>{let n=Ug(e),r=n.resolveStack(t.from,1);if(t.empty){let e=n.resolveStack(t.from,-1);e.node.from>=r.node.from&&e.node.to<=r.node.to&&(r=e)}for(let e=r;e;e=e.next){let{node:n}=e;if((n.from<t.from&&n.to>=t.to||n.to>t.to&&n.from<=t.from)&&e.next)return P.range(n.to,n.from)}return t});return!n.eq(e.selection)&&(t(bb(e,n)),!0)};function wx(e,t){let{state:n}=e,r=n.selection,i=n.selection.ranges.slice();for(let r of n.selection.ranges){let a=n.doc.lineAt(r.head);if(t?a.to<e.state.doc.length:a.from>0)for(let n=r;;){let r=e.moveVertically(n,t);if(r.head<a.from||r.head>a.to){i.some(e=>e.head==r.head)||i.push(r);break}if(r.head==n.head)break;n=r}}return i.length!=r.ranges.length&&(e.dispatch(bb(n,P.create(i,i.length-1))),!0)}var Tx=e=>wx(e,!1),Ex=e=>wx(e,!0),Dx=({state:e,dispatch:t})=>{let n=e.selection,r=null;return n.ranges.length>1?r=P.create([n.main]):n.main.empty||(r=P.create([P.cursor(n.main.head)])),r?(t(bb(e,r)),!0):!1};function Ox(e,t){if(e.state.readOnly)return!1;let n=`delete.selection`,{state:r}=e,i=r.changeByRange(r=>{let{from:i,to:a}=r;if(i==a){let o=t(r);o<i?(n=`delete.backward`,o=kx(e,o,!1)):o>i&&(n=`delete.forward`,o=kx(e,o,!0)),i=Math.min(i,o),a=Math.max(a,o)}else i=kx(e,i,!1),a=kx(e,a,!0);return i==a?{range:r}:{changes:{from:i,to:a},range:P.cursor(i,i<r.head?-1:1)}});return!i.changes.empty&&(e.dispatch(r.update(i,{scrollIntoView:!0,userEvent:n,effects:n==`delete.selection`?q.announce.of(r.phrase(`Selection deleted`)):void 0})),!0)}function kx(e,t,n){if(e instanceof q)for(let r of e.state.facet(q.atomicRanges).map(t=>t(e)))r.between(t,t,(e,r)=>{e<t&&r>t&&(t=n?r:e)});return t}var Ax=(e,t,n)=>Ox(e,r=>{let i=r.from,{state:a}=e,o=a.doc.lineAt(i),s,c;if(n&&!t&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(s=o.text.slice(0,i-o.from))){if(s[s.length-1]==`	`)return i-1;let e=Lc(s,a.tabSize)%t_(a)||t_(a);for(let t=0;t<e&&s[s.length-1-t]==` `;t++)i--;c=i}else c=ms(o.text,i-o.from,t,t)+o.from,c==i&&o.number!=(t?a.doc.lines:1)?c+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(o.text.slice(c-o.from,i-o.from))&&(c=ms(o.text,c-o.from,!1,!1)+o.from);return c}),jx=e=>Ax(e,!1,!0),Mx=e=>Ax(e,!0,!1),Nx=(e,t)=>Ox(e,n=>{let r=n.head,{state:i}=e,a=i.doc.lineAt(r),o=i.charCategorizer(r);for(let e=null;;){if(r==(t?a.to:a.from)){r==n.head&&a.number!=(t?i.doc.lines:1)&&(r+=t?1:-1);break}let s=ms(a.text,r-a.from,t)+a.from,c=a.text.slice(Math.min(r,s)-a.from,Math.max(r,s)-a.from),l=o(c);if(e!=null&&l!=e)break;(c!=` `||r!=n.head)&&(e=l),r=s}return r}),Px=e=>Nx(e,!1),Fx=e=>Nx(e,!0),Ix=e=>Ox(e,t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),Lx=e=>Ox(e,t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)}),Rx=e=>Ox(e,t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),zx=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:N.of([``,``])},range:P.cursor(e.from)}));return t(e.update(n,{scrollIntoView:!0,userEvent:`input`})),!0},Bx=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(t=>{if(!t.empty||t.from==0||t.from==e.doc.length)return{range:t};let n=t.from,r=e.doc.lineAt(n),i=n==r.from?n-1:ms(r.text,n-r.from,!1)+r.from,a=n==r.to?n+1:ms(r.text,n-r.from,!0)+r.from;return{changes:{from:i,to:a,insert:e.doc.slice(n,a).append(e.doc.slice(i,n))},range:P.cursor(a)}});return!n.changes.empty&&(t(e.update(n,{scrollIntoView:!0,userEvent:`move.character`})),!0)};function Vx(e){let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.from),a=e.doc.lineAt(r.to);if(!r.empty&&r.to==a.from&&(a=e.doc.lineAt(r.to-1)),n>=i.number){let e=t[t.length-1];e.to=a.to,e.ranges.push(r)}else t.push({from:i.from,to:a.to,ranges:[r]});n=a.number+1}return t}function Hx(e,t,n){if(e.readOnly)return!1;let r=[],i=[];for(let t of Vx(e)){if(n?t.to==e.doc.length:t.from==0)continue;let a=e.doc.lineAt(n?t.to+1:t.from-1),o=a.length+1;if(n){r.push({from:t.to,to:a.to},{from:t.from,insert:a.text+e.lineBreak});for(let n of t.ranges)i.push(P.range(Math.min(e.doc.length,n.anchor+o),Math.min(e.doc.length,n.head+o)))}else{r.push({from:a.from,to:t.from},{from:t.to,insert:e.lineBreak+a.text});for(let e of t.ranges)i.push(P.range(e.anchor-o,e.head-o))}}return r.length?(t(e.update({changes:r,scrollIntoView:!0,selection:P.create(i,e.selection.mainIndex),userEvent:`move.line`})),!0):!1}var Ux=({state:e,dispatch:t})=>Hx(e,t,!1),Wx=({state:e,dispatch:t})=>Hx(e,t,!0);function Gx(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of Vx(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});let i=e.changes(r);return t(e.update({changes:i,selection:e.selection.map(i,n?1:-1),scrollIntoView:!0,userEvent:`input.copyline`})),!0}var Kx=({state:e,dispatch:t})=>Gx(e,t,!1),qx=({state:e,dispatch:t})=>Gx(e,t,!0),Jx=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(Vx(t).map(({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n}))),r=yb(t.selection,t=>{let n;if(e.lineWrapping){let r=e.lineBlockAt(t.head),i=e.coordsAtPos(t.head,t.assoc||1);i&&(n=r.bottom+e.documentTop-i.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)}).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:`delete.line`}),!0};function Yx(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n=Ug(e).resolveInner(t),r=n.childBefore(t),i=n.childAfter(t),a;return r&&i&&r.to<=t&&i.from>=t&&(a=r.type.prop(A.closedBy))&&a.indexOf(i.name)>-1&&e.doc.lineAt(r.to).from==e.doc.lineAt(i.from).from&&!/\S/.test(e.sliceDoc(r.to,i.from))?{from:r.to,to:i.from}:null}var Xx=Qx(!1),Zx=Qx(!0);function Qx(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>{let{from:r,to:i}=n,a=t.doc.lineAt(r),o=!e&&r==i&&Yx(t,r);e&&(r=i=(i<=a.to?a:t.doc.lineAt(i)).to);let s=new i_(t,{simulateBreak:r,simulateDoubleBreak:!!o}),c=r_(s,r);for(c??=Lc(/^\s*/.exec(t.doc.lineAt(r).text)[0],t.tabSize);i<a.to&&/\s/.test(a.text[i-a.from]);)i++;o?{from:r,to:i}=o:r>a.from&&r<a.from+100&&!/\S/.test(a.text.slice(0,r))&&(r=a.from);let l=[``,n_(t,c)];return o&&l.push(n_(t,s.lineIndent(a.from,-1))),{changes:{from:r,to:i,insert:N.of(l)},range:P.cursor(r+1+l[1].length)}});return n(t.update(r,{scrollIntoView:!0,userEvent:`input`})),!0}}function $x(e,t){let n=-1;return e.changeByRange(r=>{let i=[];for(let a=r.from;a<=r.to;){let o=e.doc.lineAt(a);o.number>n&&(r.empty||r.to>o.from)&&(t(o,i,r),n=o.number),a=o.to+1}let a=e.changes(i);return{changes:i,range:P.range(a.mapPos(r.anchor,1),a.mapPos(r.head,1))}})}var eS=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new i_(e,{overrideIndentation:e=>n[e]??-1}),i=$x(e,(t,i,a)=>{let o=r_(r,t.from);if(o==null)return;/\S/.test(t.text)||(o=0);let s=/^\s*/.exec(t.text)[0],c=n_(e,o);(s!=c||a.from<t.from+s.length)&&(n[t.from]=o,i.push({from:t.from,to:t.from+s.length,insert:c}))});return i.changes.empty||t(e.update(i,{userEvent:`indent`})),!0},tS=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update($x(e,(t,n)=>{n.push({from:t.from,insert:e.facet(e_)})}),{userEvent:`input.indent`})),!0),nS=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update($x(e,(t,n)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let i=Lc(r,e.tabSize),a=0,o=n_(e,Math.max(0,i-t_(e)));for(;a<r.length&&a<o.length&&r.charCodeAt(a)==o.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+r.length,insert:o.slice(a)})}),{userEvent:`delete.dedent`})),!0),rS=e=>(e.setTabFocusMode(),!0),iS=[{key:`Ctrl-b`,run:Tb,shift:Qb,preventDefault:!0},{key:`Ctrl-f`,run:Eb,shift:$b},{key:`Ctrl-p`,run:Fb,shift:ox},{key:`Ctrl-n`,run:Ib,shift:sx},{key:`Ctrl-a`,run:Kb,shift:hx},{key:`Ctrl-e`,run:qb,shift:gx},{key:`Ctrl-d`,run:Mx},{key:`Ctrl-h`,run:jx},{key:`Ctrl-k`,run:Ix},{key:`Ctrl-Alt-h`,run:Px},{key:`Ctrl-o`,run:zx},{key:`Ctrl-t`,run:Bx},{key:`Ctrl-v`,run:Bb}],aS=[{key:`ArrowLeft`,run:Tb,shift:Qb,preventDefault:!0},{key:`Mod-ArrowLeft`,mac:`Alt-ArrowLeft`,run:Ob,shift:tx,preventDefault:!0},{mac:`Cmd-ArrowLeft`,run:Wb,shift:px,preventDefault:!0},{key:`ArrowRight`,run:Eb,shift:$b,preventDefault:!0},{key:`Mod-ArrowRight`,mac:`Alt-ArrowRight`,run:kb,shift:nx,preventDefault:!0},{mac:`Cmd-ArrowRight`,run:Gb,shift:mx,preventDefault:!0},{key:`ArrowUp`,run:Fb,shift:ox,preventDefault:!0},{mac:`Cmd-ArrowUp`,run:_x,shift:yx},{mac:`Ctrl-ArrowUp`,run:zb,shift:lx},{key:`ArrowDown`,run:Ib,shift:sx,preventDefault:!0},{mac:`Cmd-ArrowDown`,run:vx,shift:bx},{mac:`Ctrl-ArrowDown`,run:Bb,shift:ux},{key:`PageUp`,run:zb,shift:lx},{key:`PageDown`,run:Bb,shift:ux},{key:`Home`,run:Ub,shift:fx,preventDefault:!0},{key:`Mod-Home`,run:_x,shift:yx},{key:`End`,run:Hb,shift:dx,preventDefault:!0},{key:`Mod-End`,run:vx,shift:bx},{key:`Enter`,run:Xx,shift:Xx},{key:`Mod-a`,run:xx},{key:`Backspace`,run:jx,shift:jx,preventDefault:!0},{key:`Delete`,run:Mx,preventDefault:!0},{key:`Mod-Backspace`,mac:`Alt-Backspace`,run:Px,preventDefault:!0},{key:`Mod-Delete`,mac:`Alt-Delete`,run:Fx,preventDefault:!0},{mac:`Mod-Backspace`,run:Lx,preventDefault:!0},{mac:`Mod-Delete`,run:Rx,preventDefault:!0}].concat(iS.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),oS=[{key:`Alt-ArrowLeft`,mac:`Ctrl-ArrowLeft`,run:Mb,shift:rx},{key:`Alt-ArrowRight`,mac:`Ctrl-ArrowRight`,run:Nb,shift:ix},{key:`Alt-ArrowUp`,run:Ux},{key:`Shift-Alt-ArrowUp`,run:Kx},{key:`Alt-ArrowDown`,run:Wx},{key:`Shift-Alt-ArrowDown`,run:qx},{key:`Mod-Alt-ArrowUp`,run:Tx},{key:`Mod-Alt-ArrowDown`,run:Ex},{key:`Escape`,run:Dx},{key:`Mod-Enter`,run:Zx},{key:`Alt-l`,mac:`Ctrl-l`,run:Sx},{key:`Mod-i`,run:Cx,preventDefault:!0},{key:`Mod-[`,run:nS},{key:`Mod-]`,run:tS},{key:`Mod-Alt-\\`,run:eS},{key:`Shift-Mod-k`,run:Jx},{key:`Shift-Mod-\\`,run:Yb},{key:`Mod-/`,run:Ly},{key:`Alt-A`,run:By},{key:`Ctrl-m`,mac:`Shift-Alt-m`,run:rS}].concat(aS),sS={key:`Tab`,run:tS,shift:nS},cS=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFKD`):e=>e,lS=class{constructor(e,t,n=0,r=e.length,i,a){this.test=a,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer=``,this.bufferPos=0,this.iter=e.iterRange(n,r),this.bufferStart=n,this.normalize=i?e=>i(cS(e)):cS,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return _s(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=vs(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=ys(e);let r=this.normalize(t);if(r.length)for(let e=0,i=n,a=!0;;e++){let n=r.charCodeAt(e),o=this.match(n,i,a,this.bufferPos+this.bufferStart,e==r.length-1);if(o)return this.value=o,this;if(e==r.length-1)break;a&&e<t.length&&t.charCodeAt(e)==n?i++:a=!1}}}match(e,t,n,r,i){let a=null;for(let t=0;t<this.matches.length;){let n=this.matches[t],o=!1;this.query.charCodeAt(n.index)==e&&(n.index==this.query.length-1?a={from:n.from,to:r,precise:i&&n.precise}:(n.index++,o=!0)),o?t++:this.matches.splice(t,1)}return this.query.charCodeAt(0)==e&&(this.query.length==1?a={from:t,to:r,precise:n&&i}:this.matches.push({from:t,index:1,precise:n})),a&&this.test&&!this.test(a.from,a.to,this.buffer,this.bufferStart)&&(a=null),a}};typeof Symbol<`u`&&(lS.prototype[Symbol.iterator]=function(){return this});var uS={from:-1,to:-1,match:/.*/.exec(``),precise:!0},dS=`gm`+(/x/.unicode==null?``:`u`),fS=class{constructor(e,t,n,r=0,i=e.length){if(this.text=e,this.to=i,this.curLine=``,this.done=!1,this.value=uS,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new hS(e,t,n,r,i);this.re=new RegExp(t,dS+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.iter=e.iter();let a=e.lineAt(r);this.curLineStart=a.from,this.matchPos=_S(e,r),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine=``:(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine=``:this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let n=this.curLineStart+t.index,r=n+t[0].length;if(this.matchPos=_S(this.text,r+ +(n==r)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<r||n>this.value.to)&&(!this.test||this.test(n,r,t)))return this.value={from:n,to:r,precise:!0,match:t},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}},pS=new WeakMap,mS=class e{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(t,n,r){let i=pS.get(t);if(!i||i.from>=r||i.to<=n){let i=new e(n,t.sliceString(n,r));return pS.set(t,i),i}if(i.from==n&&i.to==r)return i;let{text:a,from:o}=i;return o>n&&(a=t.sliceString(n,o)+a,o=n),i.to<r&&(a+=t.sliceString(i.to,r)),pS.set(t,new e(o,a)),new e(n,a.slice(n-o,r-o))}},hS=class{constructor(e,t,n,r,i){this.text=e,this.to=i,this.done=!1,this.value=uS,this.matchPos=_S(e,r),this.re=new RegExp(t,dS+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.flat=mS.get(e,r,this.chunkEnd(r+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,n=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,n,t)))return this.value={from:e,to:n,precise:!0,match:t},this.matchPos=_S(this.text,n+ +(e==n)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=mS.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}};typeof Symbol<`u`&&(fS.prototype[Symbol.iterator]=hS.prototype[Symbol.iterator]=function(){return this});function gS(e){try{return new RegExp(e,dS),!0}catch{return!1}}function _S(e,t){if(t>=e.length)return t;let n=e.lineAt(t),r;for(;t<n.to&&(r=n.text.charCodeAt(t-n.from))>=56320&&r<57344;)t++;return t}var vS=e=>{let{state:t}=e,n=String(t.doc.lineAt(e.state.selection.main.head).number),{close:r,result:i}=Nh(e,{label:t.phrase(`Go to line`),input:{type:`text`,name:`line`,value:n},focus:!0,submitLabel:t.phrase(`go`)});return i.then(n=>{let i=n&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(n.elements.line.value);if(!i){e.dispatch({effects:r});return}let a=t.doc.lineAt(t.selection.main.head),[,o,s,c,l]=i,u=c?+c.slice(1):0,d=s?+s:a.number;if(s&&l){let e=d/100;o&&(e=e*(o==`-`?-1:1)+a.number/t.doc.lines),d=Math.round(t.doc.lines*e)}else s&&o&&(d=d*(o==`-`?-1:1)+a.number);let f=t.doc.line(Math.max(1,Math.min(t.doc.lines,d))),p=P.cursor(f.from+Math.max(0,Math.min(u,f.length)));e.dispatch({effects:[r,q.scrollIntoView(p.from,{y:`center`})],selection:p})}),!0},yS={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},bS=F.define({combine(e){return yc(e,yS,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})}});function xS(e){let t=[DS,ES];return e&&t.push(bS.of(e)),t}var SS=H.mark({class:`cm-selectionMatch`}),CS=H.mark({class:`cm-selectionMatch cm-selectionMatch-main`});function wS(e,t,n,r){return(n==0||e(t.sliceDoc(n-1,n))!=L.Word)&&(r==t.doc.length||e(t.sliceDoc(r,r+1))!=L.Word)}function TS(e,t,n,r){return e(t.sliceDoc(n,n+1))==L.Word&&e(t.sliceDoc(r-1,r))==L.Word}var ES=Bu.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=e.state.facet(bS),{state:n}=e,r=n.selection;if(r.ranges.length>1)return H.none;let i=r.main,a,o=null;if(i.empty){if(!t.highlightWordAroundCursor)return H.none;let e=n.wordAt(i.head);if(!e)return H.none;o=n.charCategorizer(i.head),a=n.sliceDoc(e.from,e.to)}else{let e=i.to-i.from;if(e<t.minSelectionLength||e>200)return H.none;if(t.wholeWords){if(a=n.sliceDoc(i.from,i.to),o=n.charCategorizer(i.head),!(wS(o,n,i.from,i.to)&&TS(o,n,i.from,i.to)))return H.none}else if(a=n.sliceDoc(i.from,i.to),!a)return H.none}let s=[];for(let r of e.visibleRanges){let e=new lS(n.doc,a,r.from,r.to);for(;!e.next().done;){let{from:r,to:a}=e.value;if((!o||wS(o,n,r,a))&&(i.empty&&r<=i.from&&a>=i.to?s.push(CS.range(r,a)):(r>=i.to||a<=i.from)&&s.push(SS.range(r,a)),s.length>t.maxMatches))return H.none}}return H.set(s)}},{decorations:e=>e.decorations}),DS=q.baseTheme({".cm-selectionMatch":{backgroundColor:`#99ff7780`},".cm-searchMatch .cm-selectionMatch":{backgroundColor:`transparent`}}),OS=({state:e,dispatch:t})=>{let{selection:n}=e,r=P.create(n.ranges.map(t=>e.wordAt(t.head)||P.cursor(t.head)),n.mainIndex);return!r.eq(n)&&(t(e.update({selection:r})),!0)};function kS(e,t){let{main:n,ranges:r}=e.selection,i=e.wordAt(n.head),a=i&&i.from==n.from&&i.to==n.to;for(let n=!1,i=new lS(e.doc,t,r[r.length-1].to);;)if(i.next(),i.done){if(n)return null;i=new lS(e.doc,t,0,Math.max(0,r[r.length-1].from-1)),n=!0}else{if(n&&r.some(e=>e.from==i.value.from))continue;if(a){let t=e.wordAt(i.value.from);if(!t||t.from!=i.value.from||t.to!=i.value.to)continue}return i.value}}var AS=({state:e,dispatch:t})=>{let{ranges:n}=e.selection;if(n.some(e=>e.from===e.to))return OS({state:e,dispatch:t});let r=e.sliceDoc(n[0].from,n[0].to);if(e.selection.ranges.some(t=>e.sliceDoc(t.from,t.to)!=r))return!1;let i=kS(e,r);return i?(t(e.update({selection:e.selection.addRange(P.range(i.from,i.to),!1),effects:q.scrollIntoView(i.to)})),!0):!1},jS=F.define({combine(e){return yc(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new dC(e),scrollToMatch:e=>q.scrollIntoView(e)})}}),MS=class{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||``,this.valid=!!this.search&&(!this.regexp||gS(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord,this.test=e.test}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(e,t)=>t==`n`?`
`:t==`r`?`\r`:t==`t`?`	`:`\\`)}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord&&this.test==e.test}create(){return this.regexp?new US(this):new LS(this)}getCursor(e,t=0,n){let r=e.doc?e:R.create({doc:e});return n??=r.doc.length,this.regexp?zS(this,r,t,n):FS(this,r,t,n)}},NS=class{constructor(e){this.spec=e}};function PS(e,t,n){return(r,i,a,o)=>n&&!n(r,i,a,o)?!1:e(r>=o&&i<=o+a.length?a.slice(r-o,i-o):t.doc.sliceString(r,i),t,r,i)}function FS(e,t,n,r){let i;return e.wholeWord&&(i=IS(t.doc,t.charCategorizer(t.selection.main.head))),e.test&&(i=PS(e.test,t,i)),new lS(t.doc,e.unquoted,n,r,e.caseSensitive?void 0:e=>e.toLowerCase(),i)}function IS(e,t){return(n,r,i,a)=>((a>n||a+i.length<r)&&(a=Math.max(0,n-2),i=e.sliceString(a,Math.min(e.length,r+2))),(t(BS(i,n-a))!=L.Word||t(VS(i,n-a))!=L.Word)&&(t(VS(i,r-a))!=L.Word||t(BS(i,r-a))!=L.Word))}var LS=class extends NS{constructor(e){super(e)}nextMatch(e,t,n){let r=FS(this.spec,e,n,e.doc.length).nextOverlapping();if(r.done){let n=Math.min(e.doc.length,t+this.spec.unquoted.length);r=FS(this.spec,e,0,n).nextOverlapping()}return r.done||r.value.from==t&&r.value.to==n?null:r.value}prevMatchInRange(e,t,n){for(let r=n;;){let n=Math.max(t,r-1e4-this.spec.unquoted.length),i=FS(this.spec,e,n,r),a=null;for(;!i.nextOverlapping().done;)a=i.value;if(a)return a;if(n==t)return null;r-=1e4}}prevMatch(e,t,n){let r=this.prevMatchInRange(e,0,t);return r||=this.prevMatchInRange(e,Math.max(0,n-this.spec.unquoted.length),e.doc.length),r&&(r.from!=t||r.to!=n)?r:null}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let n=FS(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=FS(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}};function RS(e,t,n){return(r,i,a)=>(!n||n(r,i,a))&&e(a[0],t,r,i)}function zS(e,t,n,r){let i;return e.wholeWord&&(i=HS(t.charCategorizer(t.selection.main.head))),e.test&&(i=RS(e.test,t,i)),new fS(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:i},n,r)}function BS(e,t){return e.slice(ms(e,t,!1),t)}function VS(e,t){return e.slice(t,ms(e,t))}function HS(e){return(t,n,r)=>!r[0].length||(e(BS(r.input,r.index))!=L.Word||e(VS(r.input,r.index))!=L.Word)&&(e(VS(r.input,r.index+r[0].length))!=L.Word||e(BS(r.input,r.index+r[0].length))!=L.Word)}var US=class extends NS{nextMatch(e,t,n){let r=zS(this.spec,e,n,e.doc.length).next();return r.done&&(r=zS(this.spec,e,0,t).next()),r.done?null:r.value}prevMatchInRange(e,t,n){for(let r=1;;r++){let i=Math.max(t,n-r*1e4),a=zS(this.spec,e,i,n),o=null;for(;!a.next().done;)o=a.value;if(o&&(i==t||o.from>i+10))return o;if(i==t)return null}}prevMatch(e,t,n){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(t,n)=>{if(n==`&`)return e.match[0];if(n==`$`)return`$`;for(let t=n.length;t>0;t--){let r=+n.slice(0,t);if(r>0&&r<e.match.length)return e.match[r]+n.slice(t)}return t})}matchAll(e,t){let n=zS(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=zS(this.spec,e,Math.max(0,t-250),Math.min(n+250,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}},WS=I.define(),GS=I.define(),KS=zs.define({create(e){return new qS(aC(e).create(),null)},update(e,t){for(let n of t.effects)n.is(WS)?e=new qS(n.value.create(),e.panel):n.is(GS)&&(e=new qS(e.query,n.value?iC:null));return e},provide:e=>Mh.from(e,e=>e.panel)}),qS=class{constructor(e,t){this.query=e,this.panel=t}},JS=H.mark({class:`cm-searchMatch`}),YS=H.mark({class:`cm-searchMatch cm-searchMatch-selected`}),XS=Bu.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(KS))}update(e){let t=e.state.field(KS);(t!=e.startState.field(KS)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:t}){if(!t||!e.spec.valid)return H.none;let{view:n}=this,r=new Ec;for(let t=0,i=n.visibleRanges,a=i.length;t<a;t++){let{from:o,to:s}=i[t];for(;t<a-1&&s>i[t+1].from-500;)s=i[++t].to;e.highlight(n.state,o,s,(e,t)=>{let i=n.state.selection.ranges.some(n=>n.from==e&&n.to==t);r.add(e,t,i?YS:JS)})}return r.finish()}},{decorations:e=>e.decorations});function ZS(e){return t=>{let n=t.state.field(KS,!1);return n&&n.query.spec.valid?e(t,n):cC(t)}}var QS=ZS((e,{query:t})=>{let{to:n}=e.state.selection.main,r=t.nextMatch(e.state,n,n);if(!r)return!1;let i=P.single(r.from,r.to),a=e.state.facet(jS);return e.dispatch({selection:i,effects:[hC(e,r),a.scrollToMatch(i.main,e)],userEvent:`select.search`}),sC(e),!0}),$S=ZS((e,{query:t})=>{let{state:n}=e,{from:r}=n.selection.main,i=t.prevMatch(n,r,r);if(!i)return!1;let a=P.single(i.from,i.to),o=e.state.facet(jS);return e.dispatch({selection:a,effects:[hC(e,i),o.scrollToMatch(a.main,e)],userEvent:`select.search`}),sC(e),!0}),eC=ZS((e,{query:t})=>{let n=t.matchAll(e.state,1e3);return!n||!n.length?!1:(e.dispatch({selection:P.create(n.map(e=>P.range(e.from,e.to))),userEvent:`select.search.matches`}),!0)}),tC=({state:e,dispatch:t})=>{let n=e.selection;if(n.ranges.length>1||n.main.empty)return!1;let{from:r,to:i}=n.main,a=[],o=0;for(let t=new lS(e.doc,e.sliceDoc(r,i));!t.next().done;){if(a.length>1e3)return!1;t.value.from==r&&(o=a.length),a.push(P.range(t.value.from,t.value.to))}return t(e.update({selection:P.create(a,o),userEvent:`select.search.matches`})),!0},nC=ZS((e,{query:t})=>{let{state:n}=e,{from:r,to:i}=n.selection.main;if(n.readOnly)return!1;let a=t.nextMatch(n,r,r);if(!a)return!1;let o=a,s=[],c,l,u=[];o.precise?o.from==r&&o.to==i&&(l=n.toText(t.getReplacement(o)),s.push({from:o.from,to:o.to,insert:l}),o=t.nextMatch(n,o.from,o.to),u.push(q.announce.of(n.phrase(`replaced match on line $`,n.doc.lineAt(r).number)+`.`))):o=t.nextMatch(n,o.from,o.to);let d=e.state.changes(s);return o&&(c=P.single(o.from,o.to).map(d),u.push(hC(e,o)),u.push(n.facet(jS).scrollToMatch(c.main,e))),e.dispatch({changes:d,selection:c,effects:u,userEvent:`input.replace`}),!0}),rC=ZS((e,{query:t})=>{if(e.state.readOnly)return!1;let n=[];for(let r of t.matchAll(e.state,1e9)){let{from:e,to:i,precise:a}=r;a&&n.push({from:e,to:i,insert:t.getReplacement(r)})}if(!n.length)return!1;let r=e.state.phrase(`replaced $ matches`,n.length)+`.`;return e.dispatch({changes:n,effects:q.announce.of(r),userEvent:`input.replace.all`}),!0});function iC(e){return e.state.facet(jS).createPanel(e)}function aC(e,t){let n=e.selection.main,r=n.empty||n.to>n.from+100?``:e.sliceDoc(n.from,n.to);if(t&&!r)return t;let i=e.facet(jS);return new MS({search:t?.literal??i.literal?r:r.replace(/\n/g,`\\n`),caseSensitive:t?.caseSensitive??i.caseSensitive,literal:t?.literal??i.literal,regexp:t?.regexp??i.regexp,wholeWord:t?.wholeWord??i.wholeWord})}function oC(e){let t=Oh(e,iC);return t&&t.dom.querySelector(`[main-field]`)}function sC(e){let t=oC(e);t&&t==e.root.activeElement&&t.select()}var cC=e=>{let t=e.state.field(KS,!1);if(t&&t.panel){let n=oC(e);if(n&&n!=e.root.activeElement){let r=aC(e.state,t.query.spec);r.valid&&e.dispatch({effects:WS.of(r)}),n.focus(),n.select()}}else e.dispatch({effects:[GS.of(!0),t?WS.of(aC(e.state,t.query.spec)):I.appendConfig.of(_C)]});return!0},lC=e=>{let t=e.state.field(KS,!1);if(!t||!t.panel)return!1;let n=Oh(e,iC);return n&&n.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:GS.of(!1)}),!0},uC=[{key:`Mod-f`,run:cC,scope:`editor search-panel`},{key:`F3`,run:QS,shift:$S,scope:`editor search-panel`,preventDefault:!0},{key:`Mod-g`,run:QS,shift:$S,scope:`editor search-panel`,preventDefault:!0},{key:`Escape`,run:lC,scope:`editor search-panel`},{key:`Mod-Shift-l`,run:tC},{key:`Mod-Alt-g`,run:vS},{key:`Mod-d`,run:AS,preventDefault:!0}],dC=class{constructor(e){this.view=e;let t=this.query=e.state.field(KS).query.spec;this.commit=this.commit.bind(this),this.searchField=B(`input`,{value:t.search,placeholder:fC(e,`Find`),"aria-label":fC(e,`Find`),class:`cm-textfield`,name:`search`,form:``,"main-field":`true`,onchange:this.commit,onkeyup:this.commit}),this.replaceField=B(`input`,{value:t.replace,placeholder:fC(e,`Replace`),"aria-label":fC(e,`Replace`),class:`cm-textfield`,name:`replace`,form:``,onchange:this.commit,onkeyup:this.commit}),this.caseField=B(`input`,{type:`checkbox`,name:`case`,form:``,checked:t.caseSensitive,onchange:this.commit}),this.reField=B(`input`,{type:`checkbox`,name:`re`,form:``,checked:t.regexp,onchange:this.commit}),this.wordField=B(`input`,{type:`checkbox`,name:`word`,form:``,checked:t.wholeWord,onchange:this.commit});function n(e,t,n){return B(`button`,{class:`cm-button`,name:e,onclick:t,type:`button`},n)}this.dom=B(`div`,{onkeydown:e=>this.keydown(e),class:`cm-search`},[this.searchField,n(`next`,()=>QS(e),[fC(e,`next`)]),n(`prev`,()=>$S(e),[fC(e,`previous`)]),n(`select`,()=>eC(e),[fC(e,`all`)]),B(`label`,null,[this.caseField,fC(e,`match case`)]),B(`label`,null,[this.reField,fC(e,`regexp`)]),B(`label`,null,[this.wordField,fC(e,`by word`)]),...e.state.readOnly?[]:[B(`br`),this.replaceField,n(`replace`,()=>nC(e),[fC(e,`replace`)]),n(`replaceAll`,()=>rC(e),[fC(e,`replace all`)])],B(`button`,{name:`close`,onclick:()=>lC(e),"aria-label":fC(e,`close`),type:`button`},[`×`])])}commit(){let e=new MS({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:WS.of(e)}))}keydown(e){am(this.view,e,`search-panel`)?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?$S:QS)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),nC(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(WS)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(jS).top}};function fC(e,t){return e.state.phrase(t)}var pC=30,mC=/[\s\.,:;?!]/;function hC(e,{from:t,to:n}){let r=e.state.doc.lineAt(t),i=e.state.doc.lineAt(n).to,a=Math.max(r.from,t-pC),o=Math.min(i,n+pC),s=e.state.sliceDoc(a,o);if(a!=r.from){for(let e=0;e<pC;e++)if(!mC.test(s[e+1])&&mC.test(s[e])){s=s.slice(e);break}}if(o!=i){for(let e=s.length-1;e>s.length-pC;e--)if(!mC.test(s[e-1])&&mC.test(s[e])){s=s.slice(0,e);break}}return q.announce.of(`${e.state.phrase(`current match`)}. ${s} ${e.state.phrase(`on line`)} ${r.number}.`)}var gC=q.baseTheme({".cm-panel.cm-search":{padding:`2px 6px 4px`,position:`relative`,"& [name=close]":{position:`absolute`,top:`0`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0},"& input, & button, & label":{margin:`.2em .6em .2em 0`},"& input[type=checkbox]":{marginRight:`.2em`},"& label":{fontSize:`80%`,whiteSpace:`pre`}},"&light .cm-searchMatch":{backgroundColor:`#ffff0054`},"&dark .cm-searchMatch":{backgroundColor:`#00ffff8a`},"&light .cm-searchMatch-selected":{backgroundColor:`#ff6a0054`},"&dark .cm-searchMatch-selected":{backgroundColor:`#ff00ff8a`}}),_C=[KS,Hs.low(XS),gC],vC=class{constructor(e,t,n,r){this.state=e,this.pos=t,this.explicit=n,this.view=r,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=Ug(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),r=t.text.slice(n-t.from,this.pos-t.from),i=r.search(wC(e,!1));return i<0?null:{from:n+i,to:this.pos,text:r.slice(i)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e==`abort`&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}};function yC(e){let t=Object.keys(e).join(``),n=/\w/.test(t);return n&&(t=t.replace(/\w/g,``)),`[${n?`\\w`:``}${t.replace(/[^\w\s]/g,`\\$&`)}]`}function bC(e){let t=Object.create(null),n=Object.create(null);for(let{label:r}of e){t[r[0]]=!0;for(let e=1;e<r.length;e++)n[r[e]]=!0}let r=yC(t)+yC(n)+`*$`;return[RegExp(`^`+r),new RegExp(r)]}function xC(e){let t=e.map(e=>typeof e==`string`?{label:e}:e),[n,r]=t.every(e=>/^\w+$/.test(e.label))?[/\w*$/,/\w+$/]:bC(t);return e=>{let i=e.matchBefore(r);return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:n}:null}}var SC=class{constructor(e,t,n,r){this.completion=e,this.source=t,this.match=n,this.score=r}};function CC(e){return e.selection.main.from}function wC(e,t){let{source:n}=e,r=t&&n[0]!=`^`,i=n[n.length-1]!=`$`;return!r&&!i?e:RegExp(`${r?`^`:``}(?:${n})${i?`$`:``}`,e.flags??(e.ignoreCase?`i`:``))}var TC=rc.define();function EC(e,t,n,r){let{main:i}=e.selection,a=n-i.from,o=r-i.from;return{...e.changeByRange(s=>{if(s!=i&&n!=r&&e.sliceDoc(s.from+a,s.from+o)!=e.sliceDoc(n,r))return{range:s};let c=e.toText(t);return{changes:{from:s.from+a,to:r==i.from?s.to:s.from+o,insert:c},range:P.cursor(s.from+a+c.length)}}),scrollIntoView:!0,userEvent:`input.complete`}}var DC=new WeakMap;function OC(e){if(!Array.isArray(e))return e;let t=DC.get(e);return t||DC.set(e,t=xC(e)),t}var kC=I.define(),AC=I.define(),jC=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=_s(e,t),r=ys(n);this.chars.push(n);let i=e.slice(t,t+r),a=i.toUpperCase();this.folded.push(_s(a==i?i.toLowerCase():a,0)),t+=r}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:r,precise:i,byWord:a}=this;if(t.length==1){let r=_s(e,0),i=ys(r),a=i==e.length?0:-100;if(r!=t[0]){if(r==n[0])a+=-200;else return null}return this.ret(a,[0,i])}let o=e.indexOf(this.pattern);if(o==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let s=t.length,c=0;if(o<0){for(let i=0,a=Math.min(e.length,200);i<a&&c<s;){let a=_s(e,i);(a==t[c]||a==n[c])&&(r[c++]=i),i+=ys(a)}if(c<s)return null}let l=0,u=0,d=!1,f=0,p=-1,m=-1,h=/[a-z]/.test(e),g=!0;for(let r=0,c=Math.min(e.length,200),_=0;r<c&&u<s;){let c=_s(e,r);o<0&&(l<s&&c==t[l]&&(i[l++]=r),f<s&&(c==t[f]||c==n[f]?(f==0&&(p=r),m=r+1,f++):f=0));let v,y=c<255?c>=48&&c<=57||c>=97&&c<=122?2:+(c>=65&&c<=90):(v=vs(c))==v.toLowerCase()?v==v.toUpperCase()?0:2:1;(!r||y==1&&h||_==0&&y!=0)&&(t[u]==c||n[u]==c&&(d=!0)?a[u++]=r:a.length&&(g=!1)),_=y,r+=ys(c)}return u==s&&a[0]==0&&g?this.result(-100+(d?-200:0),a,e):f==s&&p==0?this.ret(-200-e.length+(m==e.length?0:-100),[0,m]):o>-1?this.ret(-700-e.length,[o,o+this.pattern.length]):f==s?this.ret(-900-e.length,[p,m]):u==s?this.result(-100+(d?-200:0)+-700+(g?0:-1100),a,e):t.length==2?null:this.result((r[0]?-700:0)+-200+-1100,r,e)}result(e,t,n){let r=[],i=0;for(let e of t){let t=e+(this.astral?ys(_s(n,e)):1);i&&r[i-1]==e?r[i-1]=t:(r[i++]=e,r[i++]=t)}return this.ret(e-n.length,r)}},MC=class{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}},NC=F.define({combine(e){return yc(e,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>``,optionClass:()=>``,aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:FC,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>PC(e(n),t(n)),optionClass:(e,t)=>n=>PC(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function PC(e,t){return e?t?e+` `+t:e:t}function FC(e,t,n,r,i,a){let o=e.textDirection==U.RTL,s=o,c=!1,l=`top`,u,d,f=t.left-i.left,p=i.right-t.right,m=r.right-r.left,h=r.bottom-r.top;if(s&&f<Math.min(m,p)?s=!1:!s&&p<Math.min(m,f)&&(s=!0),m<=(s?f:p))u=Math.max(i.top,Math.min(n.top,i.bottom-h))-t.top,d=Math.min(400,s?f:p);else{c=!0,d=Math.min(400,(o?t.right:i.right-t.left)-30);let e=i.bottom-t.bottom;e>=h||e>t.top?u=n.bottom-t.top:(l=`bottom`,u=t.bottom-n.top)}let g=(t.bottom-t.top)/a.offsetHeight,_=(t.right-t.left)/a.offsetWidth;return{style:`${l}: ${u/g}px; max-width: ${d/_}px`,class:`cm-completionInfo-`+(c?o?`left-narrow`:`right-narrow`:s?`left`:`right`)}}var IC=I.define();function LC(e){let t=e.addToOptions.slice();return e.icons&&t.push({render(e){let t=document.createElement(`div`);return t.classList.add(`cm-completionIcon`),e.type&&t.classList.add(...e.type.split(/\s+/g).map(e=>`cm-completionIcon-`+e)),t.setAttribute(`aria-hidden`,`true`),t},position:20}),t.push({render(e,t,n,r){let i=document.createElement(`span`);i.className=`cm-completionLabel`;let a=e.displayLabel||e.label,o=0;for(let e=0;e<r.length;){let t=r[e++],n=r[e++];t>o&&i.appendChild(document.createTextNode(a.slice(o,t)));let s=i.appendChild(document.createElement(`span`));s.appendChild(document.createTextNode(a.slice(t,n))),s.className=`cm-completionMatchedText`,o=n}return o<a.length&&i.appendChild(document.createTextNode(a.slice(o))),i},position:50},{render(e){if(!e.detail)return null;let t=document.createElement(`span`);return t.className=`cm-completionDetail`,t.textContent=e.detail,t},position:80}),t.sort((e,t)=>e.position-t.position).map(e=>e.render)}function RC(e,t,n){if(e<=n)return{from:0,to:e};if(t<0&&(t=0),t<=e>>1){let e=Math.floor(t/n);return{from:e*n,to:(e+1)*n}}let r=Math.ceil((e-t)/n);return{from:e-r*n,to:e-(r-1)*n}}var zC=class{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:e=>this.placeInfo(e),key:this},this.space=null,this.currentClass=``;let r=e.state.field(t),{options:i,selected:a}=r.open,o=e.state.facet(NC);this.optionContent=LC(o),this.optionClass=o.optionClass,this.tooltipClass=o.tooltipClass,this.range=RC(i.length,a,o.maxRenderedOptions),this.dom=document.createElement(`div`),this.dom.className=`cm-tooltip-autocomplete`,this.updateTooltipClass(e.state),this.dom.addEventListener(`mousedown`,n=>{let{options:r}=e.state.field(t).open;for(let t=n.target,i;t&&t!=this.dom;t=t.parentNode)if(t.nodeName==`LI`&&(i=/-(\d+)$/.exec(t.id))&&+i[1]<r.length){this.applyCompletion(e,r[+i[1]]),n.preventDefault();return}if(n.target==this.list){let t=this.list.classList.contains(`cm-completionListIncompleteTop`)&&n.clientY<this.list.firstChild.getBoundingClientRect().top?this.range.from-1:this.list.classList.contains(`cm-completionListIncompleteBottom`)&&n.clientY>this.list.lastChild.getBoundingClientRect().bottom?this.range.to:null;t!=null&&(e.dispatch({effects:IC.of(t)}),n.preventDefault())}}),this.dom.addEventListener(`focusout`,t=>{let n=e.state.field(this.stateField,!1);n&&n.tooltip&&e.state.facet(NC).closeOnBlur&&t.relatedTarget!=e.contentDOM&&e.dispatch({effects:AC.of(null)})}),this.showOptions(i,r.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener(`scroll`,()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){let t=e.state.field(this.stateField),n=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),t!=n){let{options:r,selected:i,disabled:a}=t.open;(!n.open||n.open.options!=r)&&(this.range=RC(r.length,i,e.state.facet(NC).maxRenderedOptions),this.showOptions(r,t.id)),this.updateSel(),a!=n.open?.disabled&&this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`,!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let e of this.currentClass.split(` `))e&&this.dom.classList.remove(e);for(let e of t.split(` `))e&&this.dom.classList.add(e);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=RC(t.options.length,t.selected,this.view.state.facet(NC).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:r}=t.options[t.selected],{info:i}=r;if(!i)return;let a=typeof i==`string`?document.createTextNode(i):i(r);if(!a)return;`then`in a?a.then(t=>{t&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(t,r)}).catch(e=>Iu(this.view.state,e,`completion info`)):(this.addInfoPane(a,r),n.setAttribute(`aria-describedby`,this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement(`div`);if(n.className=`cm-tooltip cm-completionInfo`,n.id=`cm-completionInfo-`+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:t,destroy:r}=e;n.appendChild(t),this.infoDestroy=r||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,r=this.range.from;n;n=n.nextSibling,r++)n.nodeName!=`LI`||!n.id?r--:r==e?n.hasAttribute(`aria-selected`)||(n.setAttribute(`aria-selected`,`true`),t=n):n.hasAttribute(`aria-selected`)&&(n.removeAttribute(`aria-selected`),n.removeAttribute(`aria-describedby`));return t&&VC(this.list,t),t}measureInfo(){let e=this.dom.querySelector(`[aria-selected]`);if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.space;if(!i){let e=this.dom.ownerDocument.documentElement;i={left:0,top:0,right:e.clientWidth,bottom:e.clientHeight}}return r.top>Math.min(i.bottom,t.bottom)-10||r.bottom<Math.max(i.top,t.top)+10?null:this.view.state.facet(NC).positionInfo(this.view,t,r,n,i,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className=`cm-tooltip cm-completionInfo `+(e.class||``)):this.info.style.cssText=`top: -1e6px`)}createListBox(e,t,n){let r=document.createElement(`ul`);r.id=t,r.setAttribute(`role`,`listbox`),r.setAttribute(`aria-expanded`,`true`),r.setAttribute(`aria-label`,this.view.state.phrase(`Completions`)),r.addEventListener(`mousedown`,e=>{e.target==r&&e.preventDefault()});let i=null;for(let a=n.from;a<n.to;a++){let{completion:o,match:s}=e[a],{section:c}=o;if(c){let e=typeof c==`string`?c:c.name;if(e!=i&&(a>n.from||n.from==0)){if(i=e,typeof c!=`string`&&c.header)r.appendChild(c.header(c));else{let t=r.appendChild(document.createElement(`completion-section`));t.textContent=e}}}let l=r.appendChild(document.createElement(`li`));l.id=t+`-`+a,l.setAttribute(`role`,`option`);let u=this.optionClass(o);u&&(l.className=u);for(let e of this.optionContent){let t=e(o,this.view.state,this.view,s);t&&l.appendChild(t)}}return n.from&&r.classList.add(`cm-completionListIncompleteTop`),n.to<e.length&&r.classList.add(`cm-completionListIncompleteBottom`),r}destroyInfo(){this.info&&=(this.infoDestroy&&this.infoDestroy(),this.info.remove(),null)}destroy(){this.destroyInfo()}};function BC(e,t){return n=>new zC(n,e,t)}function VC(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.height/e.offsetHeight;r.top<n.top?e.scrollTop-=(n.top-r.top)/i:r.bottom>n.bottom&&(e.scrollTop+=(r.bottom-n.bottom)/i)}function HC(e){return(e.boost||0)*100+(e.apply?10:0)+(e.info?5:0)+ +!!e.type}function UC(e,t){let n=[],r=null,i=null,a=e=>{n.push(e);let{section:t}=e.completion;if(t){r||=[];let e=typeof t==`string`?t:t.name;r.some(t=>t.name==e)||r.push(typeof t==`string`?{name:e}:t)}},o=t.facet(NC);for(let r of e)if(r.hasResult()){let e=r.result.getMatch;if(r.result.filter===!1)for(let t of r.result.options)a(new SC(t,r.source,e?e(t):[],1e9-n.length));else{let n=t.sliceDoc(r.from,r.to),s,c=o.filterStrict?new MC(n):new jC(n);for(let t of r.result.options)if(s=c.match(t.label)){let n=t.displayLabel?e?e(t,s.matched):[]:s.matched,o=s.score+(t.boost||0);if(a(new SC(t,r.source,n,o)),typeof t.section==`object`&&t.section.rank===`dynamic`){let{name:e}=t.section;i||=Object.create(null),i[e]=Math.max(o,i[e]||-1e9)}}}}if(r){let e=Object.create(null),t=0,a=(e,t)=>(e.rank===`dynamic`&&t.rank===`dynamic`?i[t.name]-i[e.name]:0)||(typeof e.rank==`number`?e.rank:1e9)-(typeof t.rank==`number`?t.rank:1e9)||(e.name<t.name?-1:1);for(let n of r.sort(a))t-=1e5,e[n.name]=t;for(let t of n){let{section:n}=t.completion;n&&(t.score+=e[typeof n==`string`?n:n.name])}}let s=[],c=null,l=o.compareCompletions;for(let e of n.sort((e,t)=>t.score-e.score||l(e.completion,t.completion))){let t=e.completion;!c||c.label!=t.label||c.detail!=t.detail||c.type!=null&&t.type!=null&&c.type!=t.type||c.apply!=t.apply||c.boost!=t.boost?s.push(e):HC(e.completion)>HC(c)&&(s[s.length-1]=e),c=e.completion}return s}var WC=class e{constructor(e,t,n,r,i,a){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=r,this.selected=i,this.disabled=a}setSelected(t,n){return t==this.selected||t>=this.options.length?this:new e(this.options,YC(n,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,n,r,i,a,o){if(i&&!o&&t.some(e=>e.isPending))return i.setDisabled();let s=UC(t,n);if(!s.length)return i&&t.some(e=>e.isPending)?i.setDisabled():null;let c=n.facet(NC).selectOnOpen?0:-1;if(i&&i.selected!=c&&i.selected!=-1){let e=i.options[i.selected].completion;for(let t=0;t<s.length;t++)if(s[t].completion==e){c=t;break}}return new e(s,YC(r,c),{pos:t.reduce((e,t)=>t.hasResult()?Math.min(e,t.from):e,1e8),create:iw,above:a.aboveCursor},i?i.timestamp:Date.now(),c,!1)}map(t){return new e(this.options,this.attrs,{...this.tooltip,pos:t.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new e(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}},GC=class e{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new e(XC,`cm-ac-`+Math.floor(Math.random()*2e6).toString(36),null)}update(t){let{state:n}=t,r=n.facet(NC),i=(r.override||n.languageDataAt(`autocomplete`,CC(n)).map(OC)).map(e=>(this.active.find(t=>t.source==e)||new QC(e,+!!this.active.some(e=>e.state!=0))).update(t,r));i.length==this.active.length&&i.every((e,t)=>e==this.active[t])&&(i=this.active);let a=this.open,o=t.effects.some(e=>e.is(tw));a&&t.docChanged&&(a=a.map(t.changes)),t.selection||i.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!KC(i,this.active)||o?a=WC.build(i,n,this.id,a,r,o):a&&a.disabled&&!i.some(e=>e.isPending)&&(a=null),!a&&i.every(e=>!e.isPending)&&i.some(e=>e.hasResult())&&(i=i.map(e=>e.hasResult()?new QC(e.source,0):e));for(let e of t.effects)e.is(IC)&&(a&&=a.setSelected(e.value,this.id));return i==this.active&&a==this.open?this:new e(i,this.id,a)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?qC:JC}};function KC(e,t){if(e==t)return!0;for(let n=0,r=0;;){for(;n<e.length&&!e[n].hasResult();)n++;for(;r<t.length&&!t[r].hasResult();)r++;let i=n==e.length,a=r==t.length;if(i||a)return i==a;if(e[n++].result!=t[r++].result)return!1}}var qC={"aria-autocomplete":`list`},JC={};function YC(e,t){let n={"aria-autocomplete":`list`,"aria-haspopup":`listbox`,"aria-controls":e};return t>-1&&(n[`aria-activedescendant`]=e+`-`+t),n}var XC=[];function ZC(e,t){if(e.isUserEvent(`input.complete`)){let n=e.annotation(TC);if(n&&t.activateOnCompletion(n))return 12}let n=e.isUserEvent(`input.type`);return n&&t.activateOnTyping?5:n?1:e.isUserEvent(`delete.backward`)?2:e.selection?8:e.docChanged?16:0}var QC=class e{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(t,n){let r=ZC(t,n),i=this;(r&8||r&16&&this.touches(t))&&(i=new e(i.source,0)),r&4&&i.state==0&&(i=new e(this.source,1)),i=i.updateFor(t,r);for(let n of t.effects)if(n.is(kC))i=new e(i.source,1,n.value);else if(n.is(AC))i=new e(i.source,0);else if(n.is(tw))for(let e of n.value)e.source==i.source&&(i=e);return i}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(CC(e.state))}},$C=class e extends QC{constructor(e,t,n,r,i,a){super(e,3,t),this.limit=n,this.result=r,this.from=i,this.to=a}hasResult(){return!0}updateFor(t,n){if(!(n&3))return this.map(t.changes);let r=this.result;r.map&&!t.changes.empty&&(r=r.map(r,t.changes));let i=t.changes.mapPos(this.from),a=t.changes.mapPos(this.to,1),o=CC(t.state);if(o>a||!r||n&2&&(CC(t.startState)==this.from||o<this.limit))return new QC(this.source,n&4?1:0);let s=t.changes.mapPos(this.limit);return ew(r.validFor,t.state,i,a)?new e(this.source,this.explicit,s,r,i,a):r.update&&(r=r.update(r,i,a,new vC(t.state,o,!1)))?new e(this.source,this.explicit,s,r,r.from,r.to??CC(t.state)):new QC(this.source,1,this.explicit)}map(t){if(t.empty)return this;let n=this.result.map?this.result.map(this.result,t):this.result;return n?new e(this.source,this.explicit,t.mapPos(this.limit),n,t.mapPos(this.from),t.mapPos(this.to,1)):new QC(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}};function ew(e,t,n,r){if(!e)return!1;let i=t.sliceDoc(n,r);return typeof e==`function`?e(i,n,r,t):wC(e,!0).test(i)}var tw=I.define({map(e,t){return e.map(e=>e.map(t))}}),nw=zs.define({create(){return GC.start()},update(e,t){return e.update(t)},provide:e=>[mh.from(e,e=>e.tooltip),q.contentAttributes.from(e,e=>e.attrs)]});function rw(e,t){let n=t.completion.apply||t.completion.label,r=e.state.field(nw).active.find(e=>e.source==t.source);return r instanceof $C&&(typeof n==`string`?e.dispatch({...EC(e.state,n,r.from,r.to),annotations:TC.of(t.completion)}):n(e,t.completion,r.from,r.to),!0)}var iw=BC(nw,rw);function aw(e,t=`option`){return n=>{let r=n.state.field(nw,!1);if(!r||!r.open||r.open.disabled||Date.now()-r.open.timestamp<n.state.facet(NC).interactionDelay)return!1;let i=1,a;t==`page`&&(a=Th(n,r.open.tooltip))&&(i=Math.max(2,Math.floor(a.dom.offsetHeight/a.dom.querySelector(`li`).offsetHeight)-1));let{length:o}=r.open.options,s=r.open.selected>-1?r.open.selected+i*(e?1:-1):e?0:o-1;return s<0?s=t==`page`?0:o-1:s>=o&&(s=t==`page`?o-1:0),n.dispatch({effects:IC.of(s)}),!0}}var ow=e=>{let t=e.state.field(nw,!1);return e.state.readOnly||!t||!t.open||t.open.selected<0||t.open.disabled||Date.now()-t.open.timestamp<e.state.facet(NC).interactionDelay?!1:rw(e,t.open.options[t.open.selected])},sw=e=>e.state.field(nw,!1)?(e.dispatch({effects:kC.of(!0)}),!0):!1,cw=e=>{let t=e.state.field(nw,!1);return!t||!t.active.some(e=>e.state!=0)?!1:(e.dispatch({effects:AC.of(null)}),!0)},lw=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},uw=50,dw=1e3,fw=Bu.fromClass(class{constructor(e){this.view=e,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let t of e.state.field(nw).active)t.isPending&&this.startQuery(t)}update(e){let t=e.state.field(nw),n=e.state.facet(NC);if(!e.selectionSet&&!e.docChanged&&e.startState.field(nw)==t)return;let r=e.transactions.some(e=>{let t=ZC(e,n);return t&8||(e.selection||e.docChanged)&&!(t&3)});for(let t=0;t<this.running.length;t++){let n=this.running[t];if(r||n.context.abortOnDocChange&&e.docChanged||n.updates.length+e.transactions.length>uw&&Date.now()-n.time>dw){for(let e of n.context.abortListeners)try{e()}catch(e){Iu(this.view.state,e)}n.context.abortListeners=null,this.running.splice(t--,1)}else n.updates.push(...e.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),e.transactions.some(e=>e.effects.some(e=>e.is(kC)))&&(this.pendingStart=!0);let i=this.pendingStart?50:n.activateOnTypingDelay;if(this.debounceUpdate=t.active.some(e=>e.isPending&&!this.running.some(t=>t.active.source==e.source))?setTimeout(()=>this.startUpdate(),i):-1,this.composing!=0)for(let t of e.transactions)t.isUserEvent(`input.type`)?this.composing=2:this.composing==2&&t.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:e}=this.view,t=e.field(nw);for(let e of t.active)e.isPending&&!this.running.some(t=>t.active.source==e.source)&&this.startQuery(e);this.running.length&&t.open&&t.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(NC).updateSyncTime))}startQuery(e){let{state:t}=this.view,n=new vC(t,CC(t),e.explicit,this.view),r=new lw(e,n);this.running.push(r),Promise.resolve(e.source(n)).then(e=>{r.context.aborted||(r.done=e||null,this.scheduleAccept())},e=>{this.view.dispatch({effects:AC.of(null)}),Iu(this.view.state,e)})}scheduleAccept(){this.running.every(e=>e.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(NC).updateSyncTime))}accept(){this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(NC),n=this.view.state.field(nw);for(let r=0;r<this.running.length;r++){let i=this.running[r];if(i.done===void 0)continue;if(this.running.splice(r--,1),i.done){let n=CC(i.updates.length?i.updates[0].startState:this.view.state),r=Math.min(n,i.done.from+ +!i.active.explicit),a=new $C(i.active.source,i.active.explicit,r,i.done,i.done.from,i.done.to??n);for(let e of i.updates)a=a.update(e,t);if(a.hasResult()){e.push(a);continue}}let a=n.active.find(e=>e.source==i.active.source);if(a&&a.isPending){if(i.done==null){let n=new QC(i.active.source,0);for(let e of i.updates)n=n.update(e,t);n.isPending||e.push(n)}else this.startQuery(a)}}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:tw.of(e)})}},{eventHandlers:{blur(e){let t=this.view.state.field(nw,!1);if(t&&t.tooltip&&this.view.state.facet(NC).closeOnBlur){let n=t.open&&Th(this.view,t.open.tooltip);(!n||!n.dom.contains(e.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:AC.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:kC.of(!1)}),20),this.composing=0}}}),pw=typeof navigator==`object`&&/Win/.test(navigator.platform),mw=Hs.highest(q.domEventHandlers({keydown(e,t){let n=t.state.field(nw,!1);if(!n||!n.open||n.open.disabled||n.open.selected<0||e.key.length>1||e.ctrlKey&&!(pw&&e.altKey)||e.metaKey)return!1;let r=n.open.options[n.open.selected],i=n.active.find(e=>e.source==r.source),a=r.completion.commitCharacters||i.result.commitCharacters;return a&&a.indexOf(e.key)>-1&&rw(t,r),!1}})),hw=q.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:`monospace`,whiteSpace:`nowrap`,overflow:`hidden auto`,maxWidth_fallback:`700px`,maxWidth:`min(700px, 95vw)`,minWidth:`250px`,maxHeight:`10em`,height:`100%`,listStyle:`none`,margin:0,padding:0,"& > li, & > completion-section":{padding:`1px 3px`,lineHeight:1.2},"& > li":{overflowX:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`},"& > completion-section":{display:`list-item`,borderBottom:`1px solid silver`,paddingLeft:`0.5em`,opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#17c`,color:`white`},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#777`},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#347`,color:`white`},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#444`},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:`"···"`,opacity:.5,display:`block`,textAlign:`center`,cursor:`pointer`},".cm-tooltip.cm-completionInfo":{position:`absolute`,padding:`3px 9px`,width:`max-content`,maxWidth:`400px`,boxSizing:`border-box`,whiteSpace:`pre-line`},".cm-completionInfo.cm-completionInfo-left":{right:`100%`},".cm-completionInfo.cm-completionInfo-right":{left:`100%`},".cm-completionInfo.cm-completionInfo-left-narrow":{right:`30px`},".cm-completionInfo.cm-completionInfo-right-narrow":{left:`30px`},"&light .cm-snippetField":{backgroundColor:`#00000022`},"&dark .cm-snippetField":{backgroundColor:`#ffffff22`},".cm-snippetFieldPosition":{verticalAlign:`text-top`,width:0,height:`1.15em`,display:`inline-block`,margin:`0 -0.7px -.7em`,borderLeft:`1.4px dotted #888`},".cm-completionMatchedText":{textDecoration:`underline`},".cm-completionDetail":{marginLeft:`0.5em`,fontStyle:`italic`},".cm-completionIcon":{fontSize:`90%`,width:`.8em`,display:`inline-block`,textAlign:`center`,paddingRight:`.6em`,opacity:`0.6`,boxSizing:`content-box`},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:`'ƒ'`}},".cm-completionIcon-class":{"&:after":{content:`'○'`}},".cm-completionIcon-interface":{"&:after":{content:`'◌'`}},".cm-completionIcon-variable":{"&:after":{content:`'𝑥'`}},".cm-completionIcon-constant":{"&:after":{content:`'𝐶'`}},".cm-completionIcon-type":{"&:after":{content:`'𝑡'`}},".cm-completionIcon-enum":{"&:after":{content:`'∪'`}},".cm-completionIcon-property":{"&:after":{content:`'□'`}},".cm-completionIcon-keyword":{"&:after":{content:`'🔑︎'`}},".cm-completionIcon-namespace":{"&:after":{content:`'▢'`}},".cm-completionIcon-text":{"&:after":{content:`'abc'`,fontSize:`50%`,verticalAlign:`middle`}}}),gw={brackets:[`(`,`[`,`{`,`'`,`"`],before:`)]}:;>`,stringPrefixes:[]},_w=I.define({map(e,t){return t.mapPos(e,-1,xs.TrackAfter)??void 0}}),vw=new class extends bc{};vw.startSide=1,vw.endSide=-1;var yw=zs.define({create(){return z.empty},update(e,t){if(e=e.map(t.changes),t.selection){let n=t.state.doc.lineAt(t.selection.main.head);e=e.update({filter:e=>e>=n.from&&e<=n.to})}for(let n of t.effects)n.is(_w)&&(e=e.update({add:[vw.range(n.value,n.value+1)]}));return e}});function bw(){return[Tw,yw]}var xw=`()[]{}<>«»»«［］｛｝`;function Sw(e){for(let t=0;t<16;t+=2)if(xw.charCodeAt(t)==e)return xw.charAt(t+1);return vs(e<128?e:e+1)}function Cw(e,t){return e.languageDataAt(`closeBrackets`,t)[0]||gw}var ww=typeof navigator==`object`&&/Android\b/.test(navigator.userAgent),Tw=q.inputHandler.of((e,t,n,r)=>{if((ww?e.composing:e.compositionStarted)||e.state.readOnly)return!1;let i=e.state.selection.main;if(r.length>2||r.length==2&&ys(_s(r,0))==1||t!=i.from||n!=i.to)return!1;let a=Dw(e.state,r);return a?(e.dispatch(a),!0):!1}),Ew=[{key:`Backspace`,run:({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Cw(e,e.selection.main.head).brackets||gw.brackets,r=null,i=e.changeByRange(t=>{if(t.empty){let r=Aw(e.doc,t.head);for(let i of n)if(i==r&&kw(e.doc,t.head)==Sw(_s(i,0)))return{changes:{from:t.head-i.length,to:t.head+i.length},range:P.cursor(t.head-i.length)}}return{range:r=t}});return r||t(e.update(i,{scrollIntoView:!0,userEvent:`delete.backward`})),!r}}];function Dw(e,t){let n=Cw(e,e.selection.main.head),r=n.brackets||gw.brackets;for(let i of r){let a=Sw(_s(i,0));if(t==i)return a==i?Nw(e,i,r.indexOf(i+i+i)>-1,n):jw(e,i,a,n.before||gw.before);if(t==a&&Ow(e,e.selection.main.from))return Mw(e,i,a)}return null}function Ow(e,t){let n=!1;return e.field(yw).between(0,e.doc.length,e=>{e==t&&(n=!0)}),n}function kw(e,t){let n=e.sliceString(t,t+2);return n.slice(0,ys(_s(n,0)))}function Aw(e,t){let n=e.sliceString(t-2,t);return ys(_s(n,0))==n.length?n:n.slice(1)}function jw(e,t,n,r){let i=null,a=e.changeByRange(a=>{if(!a.empty)return{changes:[{insert:t,from:a.from},{insert:n,from:a.to}],effects:_w.of(a.to+t.length),range:P.range(a.anchor+t.length,a.head+t.length)};let o=kw(e.doc,a.head);return!o||/\s/.test(o)||r.indexOf(o)>-1?{changes:{insert:t+n,from:a.head},effects:_w.of(a.head+t.length),range:P.cursor(a.head+t.length)}:{range:i=a}});return i?null:e.update(a,{scrollIntoView:!0,userEvent:`input.type`})}function Mw(e,t,n){let r=null,i=e.changeByRange(t=>t.empty&&kw(e.doc,t.head)==n?{changes:{from:t.head,to:t.head+n.length,insert:n},range:P.cursor(t.head+n.length)}:r={range:t});return r?null:e.update(i,{scrollIntoView:!0,userEvent:`input.type`})}function Nw(e,t,n,r){let i=r.stringPrefixes||gw.stringPrefixes,a=null,o=e.changeByRange(r=>{if(!r.empty)return{changes:[{insert:t,from:r.from},{insert:t,from:r.to}],effects:_w.of(r.to+t.length),range:P.range(r.anchor+t.length,r.head+t.length)};let o=r.head,s=kw(e.doc,o),c;if(s==t){if(Pw(e,o))return{changes:{insert:t+t,from:o},effects:_w.of(o+t.length),range:P.cursor(o+t.length)};if(Ow(e,o)){let r=n&&e.sliceDoc(o,o+t.length*3)==t+t+t?t+t+t:t;return{changes:{from:o,to:o+r.length,insert:r},range:P.cursor(o+r.length)}}}else if(n&&e.sliceDoc(o-2*t.length,o)==t+t&&(c=Iw(e,o-2*t.length,i))>-1&&Pw(e,c))return{changes:{insert:t+t+t+t,from:o},effects:_w.of(o+t.length),range:P.cursor(o+t.length)};else if(e.charCategorizer(o)(s)!=L.Word&&Iw(e,o,i)>-1&&!Fw(e,o,t,i))return{changes:{insert:t+t,from:o},effects:_w.of(o+t.length),range:P.cursor(o+t.length)};return{range:a=r}});return a?null:e.update(o,{scrollIntoView:!0,userEvent:`input.type`})}function Pw(e,t){let n=Ug(e).resolveInner(t+1);return n.parent&&n.from==t}function Fw(e,t,n,r){let i=Ug(e).resolveInner(t,-1),a=r.reduce((e,t)=>Math.max(e,t.length),0);for(let o=0;o<5;o++){let o=e.sliceDoc(i.from,Math.min(i.to,i.from+n.length+a)),s=o.indexOf(n);if(!s||s>-1&&r.indexOf(o.slice(0,s))>-1){let t=i.firstChild;for(;t&&t.from==i.from&&t.to-t.from>n.length+s;){if(e.sliceDoc(t.to-n.length,t.to)==n)return!1;t=t.firstChild}return!0}let c=i.to==t&&i.parent;if(!c)break;i=c}return!1}function Iw(e,t,n){let r=e.charCategorizer(t);if(r(e.sliceDoc(t-1,t))!=L.Word)return t;for(let i of n){let n=t-i.length;if(e.sliceDoc(n,t)==i&&r(e.sliceDoc(n-1,n))!=L.Word)return n}return-1}function Lw(e={}){return[mw,nw,NC.of(e),fw,zw,hw]}var Rw=[{key:`Ctrl-Space`,run:sw},{mac:"Alt-`",run:sw},{mac:`Alt-i`,run:sw},{key:`Escape`,run:cw},{key:`ArrowDown`,run:aw(!0)},{key:`ArrowUp`,run:aw(!1)},{key:`PageDown`,run:aw(!0,`page`)},{key:`PageUp`,run:aw(!1,`page`)},{key:`Enter`,run:ow}],zw=Hs.highest(nm.computeN([NC],e=>e.facet(NC).defaultKeymap?[Rw]:[])),Bw=class{constructor(e,t,n){this.from=e,this.to=t,this.diagnostic=n}},Vw=class e{constructor(e,t,n){this.diagnostics=e,this.panel=t,this.selected=n}static init(t,n,r){let i=r.facet(tT).markerFilter;i&&(t=i(t,r));let a=t.slice().sort((e,t)=>e.from-t.from||e.to-t.to),o=new Ec,s=[],c=0,l=r.doc.iter(),u=0,d=r.doc.length;for(let e=0;;){let t=e==a.length?null:a[e];if(!t&&!s.length)break;let n,r;if(s.length)n=c,r=s.reduce((e,t)=>Math.min(e,t.to),t&&t.from>n?t.from:1e8);else{if(n=t.from,n>d)break;r=t.to,s.push(t),e++}for(;e<a.length;){let t=a[e];if(t.from==n&&(t.to>t.from||t.to==n))s.push(t),e++,r=Math.min(t.to,r);else{r=Math.min(t.from,r);break}}r=Math.min(r,d);let i=!1;if(s.some(e=>e.from==n&&(e.to==r||r==d))&&(i=n==r,!i&&r-n<10)){let e=n-(u+l.value.length);e>0&&(l.next(e),u=n);for(let e=n;;){if(e>=r){i=!0;break}if(!l.lineBreak&&u+l.value.length>e)break;e=u+l.value.length,u+=l.value.length,l.next()}}let f=fT(s);if(i)o.add(n,n,H.widget({widget:new aT(f),diagnostics:s.slice()}));else{let e=s.reduce((e,t)=>t.markClass?e+` `+t.markClass:e,``);o.add(n,r,H.mark({class:`cm-lintRange cm-lintRange-`+f+e,diagnostics:s.slice(),inclusiveEnd:s.some(e=>e.to>r)}))}if(c=r,c==d)break;for(let e=0;e<s.length;e++)s[e].to<=c&&s.splice(e--,1)}let f=o.finish();return new e(f,n,Hw(f))}};function Hw(e,t=null,n=0){let r=null;return e.between(n,1e9,(e,n,{spec:i})=>{if(!(t&&i.diagnostics.indexOf(t)<0)){if(!r)r=new Bw(e,n,t||i.diagnostics[0]);else if(i.diagnostics.indexOf(r.diagnostic)<0)return!1;else r=new Bw(r.from,n,r.diagnostic)}}),r}function Uw(e,t){let n=t.pos,r=t.end||n,i=e.state.facet(tT).hideOn(e,n,r);if(i!=null)return i;let a=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(e=>e.is(Gw))||e.changes.touchesRange(a.from,Math.max(a.to,r)))}function Ww(e,t){return e.field(Jw,!1)?t:t.concat(I.appendConfig.of(mT))}var Gw=I.define(),Kw=I.define(),qw=I.define(),Jw=zs.define({create(){return new Vw(H.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),r=null,i=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);r=Hw(n,e.selected.diagnostic,i)||Hw(n,null,i)}!n.size&&i&&t.state.facet(tT).autoPanel&&(i=null),e=new Vw(n,i,r)}for(let n of t.effects)if(n.is(Gw)){let r=t.state.facet(tT).autoPanel?n.value.length?sT.open:null:e.panel;e=Vw.init(n.value,r,t.state)}else n.is(Kw)?e=new Vw(e.diagnostics,n.value?sT.open:null,e.selected):n.is(qw)&&(e=new Vw(e.diagnostics,e.panel,n.value));return e},provide:e=>[Mh.from(e,e=>e.panel),q.decorations.from(e,e=>e.diagnostics)]}),Yw=H.mark({class:`cm-lintRange cm-lintRange-active`});function Xw(e,t,n){let{diagnostics:r}=e.state.field(Jw),i,a=-1,o=-1;r.between(t-+(n<0),t+ +(n>0),(e,r,{spec:s})=>{if(t>=e&&t<=r&&(e==r||(t>e||n>0)&&(t<r||n<0)))return i=s.diagnostics,a=e,o=r,!1});let s=e.state.facet(tT).tooltipFilter;return i&&s&&(i=s(i,e.state)),i?{pos:a,end:o,above:!0,create(){return{dom:Zw(e,i)}}}:null}function Zw(e,t){return B(`ul`,{class:`cm-tooltip-lint`},t.map(t=>iT(e,t,!1)))}var Qw=e=>{let t=e.state.field(Jw,!1);(!t||!t.panel)&&e.dispatch({effects:Ww(e.state,[Kw.of(!0)])});let n=Oh(e,sT.open);return n&&n.dom.querySelector(`.cm-panel-lint ul`).focus(),!0},$w=e=>{let t=e.state.field(Jw,!1);return!t||!t.panel?!1:(e.dispatch({effects:Kw.of(!1)}),!0)},eT=[{key:`Mod-Shift-m`,run:Qw,preventDefault:!0},{key:`F8`,run:e=>{let t=e.state.field(Jw,!1);if(!t)return!1;let n=e.state.selection.main,r=Hw(t.diagnostics,null,n.to+1);return!r&&(r=Hw(t.diagnostics,null,0),!r||r.from==n.from&&r.to==n.to)?!1:(e.dispatch({selection:{anchor:r.from,head:r.to},scrollIntoView:!0}),wh(e,r.from,1,{tooltip:pT,until:e=>e.docChanged||e.newSelection.main.head<r.from||e.newSelection.main.head>r.to}),!0)}}],tT=F.define({combine(e){return{sources:e.map(e=>e.source).filter(e=>e!=null),...yc(e.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:nT,tooltipFilter:nT,needsRefresh:(e,t)=>e?t?n=>e(n)||t(n):e:t,hideOn:(e,t)=>e?t?(n,r,i)=>e(n,r,i)||t(n,r,i):e:t,autoPanel:(e,t)=>e||t})}}});function nT(e,t){return e?t?(n,r)=>t(e(n,r),r):e:t}function rT(e){let t=[];if(e)actions:for(let{name:n}of e){for(let e=0;e<n.length;e++){let r=n[e];if(/[a-zA-Z]/.test(r)&&!t.some(e=>e.toLowerCase()==r.toLowerCase())){t.push(r);continue actions}}t.push(``)}return t}function iT(e,t,n){let r=n?rT(t.actions):[];return B(`li`,{class:`cm-diagnostic cm-diagnostic-`+t.severity},B(`span`,{class:`cm-diagnosticText`},t.renderMessage?t.renderMessage(e):t.message),t.actions?.map((n,i)=>{let a=!1,o=r=>{if(r.preventDefault(),a)return;a=!0;let i=Hw(e.state.field(Jw).diagnostics,t);i&&n.apply(e,i.from,i.to)},{name:s}=n,c=r[i]?s.indexOf(r[i]):-1,l=c<0?s:[s.slice(0,c),B(`u`,s.slice(c,c+1)),s.slice(c+1)];return B(`button`,{type:`button`,class:`cm-diagnosticAction`+(n.markClass?` `+n.markClass:``),onclick:o,onmousedown:o,"aria-label":` Action: ${s}${c<0?``:` (access key "${r[i]})"`}.`},l)}),t.source&&B(`div`,{class:`cm-diagnosticSource`},t.source))}var aT=class extends _l{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return B(`span`,{class:`cm-lintPoint cm-lintPoint-`+this.sev})}},oT=class{constructor(e,t){this.diagnostic=t,this.id=`item_`+Math.floor(Math.random()*4294967295).toString(16),this.dom=iT(e,t,!0),this.dom.id=this.id,this.dom.setAttribute(`role`,`option`)}},sT=class e{constructor(e){this.view=e,this.items=[];let t=t=>{if(!(t.ctrlKey||t.altKey||t.metaKey)){if(t.keyCode==27)$w(this.view),this.view.focus();else if(t.keyCode==38||t.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(t.keyCode==40||t.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(t.keyCode==36)this.moveSelection(0);else if(t.keyCode==35)this.moveSelection(this.items.length-1);else if(t.keyCode==13)this.view.focus();else if(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:n}=this.items[this.selectedIndex],r=rT(n.actions);for(let i=0;i<r.length;i++)if(r[i].toUpperCase().charCodeAt(0)==t.keyCode){let t=Hw(this.view.state.field(Jw).diagnostics,n);t&&n.actions[i].apply(e,t.from,t.to)}}else return;t.preventDefault()}},n=e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)};this.list=B(`ul`,{tabIndex:0,role:`listbox`,"aria-label":this.view.state.phrase(`Diagnostics`),onkeydown:t,onclick:n}),this.dom=B(`div`,{class:`cm-panel-lint`},this.list,B(`button`,{type:`button`,name:`close`,"aria-label":this.view.state.phrase(`close`),onclick:()=>$w(this.view)},`×`)),this.update()}get selectedIndex(){let e=this.view.state.field(Jw).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(Jw),n=0,r=!1,i=null,a=new Set;for(e.between(0,this.view.state.doc.length,(e,o,{spec:s})=>{for(let e of s.diagnostics){if(a.has(e))continue;a.add(e);let o=-1,s;for(let t=n;t<this.items.length;t++)if(this.items[t].diagnostic==e){o=t;break}o<0?(s=new oT(this.view,e),this.items.splice(n,0,s),r=!0):(s=this.items[o],o>n&&(this.items.splice(n,o-n),r=!0)),t&&s.diagnostic==t.diagnostic?s.dom.hasAttribute(`aria-selected`)||(s.dom.setAttribute(`aria-selected`,`true`),i=s):s.dom.hasAttribute(`aria-selected`)&&s.dom.removeAttribute(`aria-selected`),n++}});n<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)r=!0,this.items.pop();this.items.length==0&&(this.items.push(new oT(this.view,{from:-1,to:-1,severity:`info`,message:this.view.state.phrase(`No diagnostics`)})),r=!0),i?(this.list.setAttribute(`aria-activedescendant`,i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let n=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/n:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/n)}})):this.selectedIndex<0&&this.list.removeAttribute(`aria-activedescendant`),r&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let n of this.items)if(n.dom.parentNode==this.list){for(;e!=n.dom;)t();e=n.dom.nextSibling}else this.list.insertBefore(n.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=Hw(this.view.state.field(Jw).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:qw.of(t)})}static open(t){return new e(t)}};function cT(e,t=`viewBox="0 0 40 40"`){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function lT(e){return cT(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,`width="6" height="3"`)}var uT=q.baseTheme({".cm-diagnostic":{padding:`3px 6px 3px 8px`,marginLeft:`-1px`,display:`block`,whiteSpace:`pre-wrap`},".cm-diagnostic-error":{borderLeft:`5px solid #d11`},".cm-diagnostic-warning":{borderLeft:`5px solid orange`},".cm-diagnostic-info":{borderLeft:`5px solid #999`},".cm-diagnostic-hint":{borderLeft:`5px solid #66d`},".cm-diagnosticAction":{font:`inherit`,border:`none`,padding:`2px 4px`,backgroundColor:`#444`,color:`white`,borderRadius:`3px`,marginLeft:`8px`,cursor:`pointer`},".cm-diagnosticSource":{fontSize:`70%`,opacity:.7},".cm-lintRange":{backgroundPosition:`left bottom`,backgroundRepeat:`repeat-x`,paddingBottom:`0.7px`},".cm-lintRange-error":{backgroundImage:lT(`#f11`)},".cm-lintRange-warning":{backgroundImage:lT(`orange`)},".cm-lintRange-info":{backgroundImage:lT(`#999`)},".cm-lintRange-hint":{backgroundImage:lT(`#66d`)},".cm-lintRange-active":{backgroundColor:`#ffdd9980`},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:`relative`,"&:after":{content:`""`,position:`absolute`,bottom:0,left:`-2px`,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,borderBottom:`4px solid #d11`}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:`orange`}},".cm-lintPoint-info":{"&:after":{borderBottomColor:`#999`}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:`#66d`}},".cm-panel.cm-panel-lint":{position:`relative`,"& ul":{maxHeight:`100px`,overflowY:`auto`,"& [aria-selected]":{backgroundColor:`#ddd`,"& u":{textDecoration:`underline`}},"&:focus [aria-selected]":{background_fallback:`#bdf`,backgroundColor:`Highlight`,color_fallback:`white`,color:`HighlightText`},"& u":{textDecoration:`none`},padding:0,margin:0},"& [name=close]":{position:`absolute`,top:`0`,right:`2px`,background:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:`#86714a80`},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:`#2e343e`}}});function dT(e){return e==`error`?4:e==`warning`?3:e==`info`?2:1}function fT(e){let t=`hint`,n=1;for(let r of e){let e=dT(r.severity);e>n&&(n=e,t=r.severity)}return t}var pT=Ch(Xw,{hideOn:Uw}),mT=[Jw,q.decorations.compute([Jw],e=>{let{selected:t,panel:n}=e.field(Jw);return!t||!n||t.from==t.to?H.none:H.set([Yw.range(t.from,t.to)])}),pT,uT],hT=[ag(),lg(),Bm(),$y(),U_(),bm(),Am(),R.allowMultipleSelections.of(!0),g_(),Y_(Q_,{fallback:!0}),cv(),bw(),Lw(),th(),ih(),qm(),xS(),nm.of([...Ew,...oS,...uC,...vb,...P_,...Rw,...eT])],gT={version:`1.8.0`,latte:{name:`Latte`,emoji:`🌻`,order:0,dark:!1,colors:{rosewater:{name:`Rosewater`,order:0,hex:`#dc8a78`,rgb:{r:220,g:138,b:120},hsl:{h:10.799999999999995,s:.5882352941176472,l:.6666666666666667},oklch:{l:.7141334177439316,c:.10454308131901496,h:33.09671972159322},accent:!0},flamingo:{name:`Flamingo`,order:1,hex:`#dd7878`,rgb:{r:221,g:120,b:120},hsl:{h:0,s:.5976331360946746,l:.6686274509803922},oklch:{l:.6856400855348588,c:.12594048943036812,h:20.867035334230025},accent:!0},pink:{name:`Pink`,order:2,hex:`#ea76cb`,rgb:{r:234,g:118,b:203},hsl:{h:316.0344827586207,s:.7341772151898731,l:.6901960784313725},oklch:{l:.7255597313429507,c:.17393264562602528,h:338.4333428586893},accent:!0},mauve:{name:`Mauve`,order:3,hex:`#8839ef`,rgb:{r:136,g:57,b:239},hsl:{h:266.0439560439561,s:.8504672897196262,l:.5803921568627451},oklch:{l:.5546698483756871,c:.25034607990295016,h:297.0156483500495},accent:!0},red:{name:`Red`,order:4,hex:`#d20f39`,rgb:{r:210,g:15,b:57},hsl:{h:347.0769230769231,s:.8666666666666666,l:.4411764705882353},oklch:{l:.5504744142539229,c:.21551430760195764,h:19.809464044160393},accent:!0},maroon:{name:`Maroon`,order:5,hex:`#e64553`,rgb:{r:230,g:69,b:83},hsl:{h:354.78260869565213,s:.76303317535545,l:.5862745098039216},oklch:{l:.6252005804874908,c:.19674637699385977,h:20.27238075293735},accent:!0},peach:{name:`Peach`,order:6,hex:`#fe640b`,rgb:{r:254,g:100,b:11},hsl:{h:21.975308641975307,s:.9918367346938776,l:.5196078431372549},oklch:{l:.6919766433363157,c:.20405156758527304,h:42.4292658007281},accent:!0},yellow:{name:`Yellow`,order:7,hex:`#df8e1d`,rgb:{r:223,g:142,b:29},hsl:{h:34.948453608247426,s:.7698412698412698,l:.49411764705882355},oklch:{l:.7139917309504697,c:.14944164080684152,h:67.77665534753208},accent:!0},green:{name:`Green`,order:8,hex:`#40a02b`,rgb:{r:64,g:160,b:43},hsl:{h:109.23076923076923,s:.5763546798029556,l:.39803921568627454},oklch:{l:.6250443904295363,c:.17715816108762134,h:140.44483759142634},accent:!0},teal:{name:`Teal`,order:9,hex:`#179299`,rgb:{r:23,g:146,b:153},hsl:{h:183.23076923076923,s:.7386363636363636,l:.34509803921568627},oklch:{l:.6022689684480229,c:.09811495789237053,h:201.1047483772147},accent:!0},sky:{name:`Sky`,order:10,hex:`#04a5e5`,rgb:{r:4,g:165,b:229},hsl:{h:197.0666666666667,s:.965665236051502,l:.45686274509803926},oklch:{l:.6820196727415445,c:.14481893950526162,h:235.38221876463177},accent:!0},sapphire:{name:`Sapphire`,order:11,hex:`#209fb5`,rgb:{r:32,g:159,b:181},hsl:{h:188.85906040268458,s:.6995305164319249,l:.4176470588235294},oklch:{l:.6477443602548549,c:.1067685254795326,h:212.88928055980793},accent:!0},blue:{name:`Blue`,order:12,hex:`#1e66f5`,rgb:{r:30,g:102,b:245},hsl:{h:219.90697674418607,s:.9148936170212768,l:.5392156862745098},oklch:{l:.5586168519157438,c:.22550252265688878,h:262.08665056049813},accent:!0},lavender:{name:`Lavender`,order:13,hex:`#7287fd`,rgb:{r:114,g:135,b:253},hsl:{h:230.93525179856115,s:.9720279720279721,l:.7196078431372549},oklch:{l:.6637628995344029,c:.17510330354646367,h:273.1346035067078},accent:!0},text:{name:`Text`,order:14,hex:`#4c4f69`,rgb:{r:76,g:79,b:105},hsl:{h:233.79310344827587,s:.16022099447513813,l:.3549019607843137},oklch:{l:.4354696280914242,c:.043007957904862906,h:279.325020951234},accent:!1},subtext1:{name:`Subtext 1`,order:15,hex:`#5c5f77`,rgb:{r:92,g:95,b:119},hsl:{h:233.33333333333334,s:.1279620853080569,l:.4137254901960784},oklch:{l:.4920027877673451,c:.038490502533791375,h:279.299160578886},accent:!1},subtext0:{name:`Subtext 0`,order:16,hex:`#6c6f85`,rgb:{r:108,g:111,b:133},hsl:{h:232.79999999999998,s:.10373443983402494,l:.4725490196078431},oklch:{l:.5470776379676476,c:.034342788375285344,h:279.0836971153176},accent:!1},overlay2:{name:`Overlay 2`,order:17,hex:`#7c7f93`,rgb:{r:124,g:127,b:147},hsl:{h:232.17391304347825,s:.09623430962343092,l:.5313725490196078},oklch:{l:.6008781390594233,c:.030490464162269262,h:278.694364334887},accent:!1},overlay1:{name:`Overlay 1`,order:18,hex:`#8c8fa1`,rgb:{r:140,g:143,b:161},hsl:{h:231.42857142857144,s:.10047846889952144,l:.5901960784313726},oklch:{l:.6535536290493023,c:.026878770771298608,h:278.1208159631207},accent:!1},overlay0:{name:`Overlay 0`,order:19,hex:`#9ca0b0`,rgb:{r:156,g:160,b:176},hsl:{h:228.00000000000003,s:.11235955056179768,l:.6509803921568628},oklch:{l:.7076684584948777,c:.02366986561429199,h:274.6008348717119},accent:!1},surface2:{name:`Surface 2`,order:20,hex:`#acb0be`,rgb:{r:172,g:176,b:190},hsl:{h:226.6666666666667,s:.12162162162162159,l:.7098039215686275},oklch:{l:.7583943521589962,c:.020453440241571547,h:273.1535522460353},accent:!1},surface1:{name:`Surface 1`,order:21,hex:`#bcc0cc`,rgb:{r:188,g:192,b:204},hsl:{h:225.00000000000003,s:.13559322033898308,l:.7686274509803922},oklch:{l:.8083070110182754,c:.01739330880861526,h:271.1981554317899},accent:!1},surface0:{name:`Surface 0`,order:22,hex:`#ccd0da`,rgb:{r:204,g:208,b:218},hsl:{h:222.85714285714292,s:.1590909090909089,l:.8274509803921568},oklch:{l:.8574770848204982,c:.014479984436494493,h:268.47559171847894},accent:!1},base:{name:`Base`,order:23,hex:`#eff1f5`,rgb:{r:239,g:241,b:245},hsl:{h:220.00000000000009,s:.23076923076923136,l:.9490196078431372},oklch:{l:.9577608870760925,c:.005766802410310334,h:264.532151644555},accent:!1},mantle:{name:`Mantle`,order:24,hex:`#e6e9ef`,rgb:{r:230,g:233,b:239},hsl:{h:220.00000000000006,s:.21951219512195116,l:.919607843137255},oklch:{l:.9334593324109276,c:.00871379906203183,h:264.52060223534073},accent:!1},crust:{name:`Crust`,order:25,hex:`#dce0e8`,rgb:{r:220,g:224,b:232},hsl:{h:220.00000000000006,s:.20689655172413762,l:.8862745098039215},oklch:{l:.905964995559709,c:.011716507677813338,h:264.50710516682375},accent:!1}},ansiColors:{black:{name:`Black`,order:0,normal:{name:`Black`,hex:`#5c5f77`,rgb:{r:92,g:95,b:119},hsl:{h:233.33333333333334,s:.1279620853080569,l:.4137254901960784},oklch:{l:.4920027877673451,c:.038490502533791375,h:279.299160578886},code:0},bright:{name:`Bright Black`,hex:`#6c6f85`,rgb:{r:108,g:111,b:133},hsl:{h:232.79999999999998,s:.10373443983402494,l:.4725490196078431},oklch:{l:.5470776379676476,c:.034342788375285344,h:279.0836971153176},code:8}},red:{name:`Red`,order:1,normal:{name:`Red`,hex:`#d20f39`,rgb:{r:210,g:15,b:57},hsl:{h:347.0769230769231,s:.8666666666666666,l:.4411764705882353},oklch:{l:.5504744142539229,c:.21551430760195764,h:19.809464044160393},code:1},bright:{name:`Bright Red`,hex:`#de293e`,rgb:{r:222,g:41,b:62},hsl:{h:353.0386740331492,s:.7327935222672065,l:.515686274509804},oklch:{l:.5851016605590609,c:.2127118759940762,h:21.74179370451583},code:9}},green:{name:`Green`,order:2,normal:{name:`Green`,hex:`#40a02b`,rgb:{r:64,g:160,b:43},hsl:{h:109.23076923076923,s:.5763546798029556,l:.39803921568627454},oklch:{l:.6250443904295363,c:.17715816108762134,h:140.44483759142634},code:2},bright:{name:`Bright Green`,hex:`#49af3d`,rgb:{r:73,g:175,b:61},hsl:{h:113.68421052631581,s:.48305084745762705,l:.4627450980392157},oklch:{l:.6698469705486776,c:.17928615242745732,h:141.59851848453542},code:10}},yellow:{name:`Yellow`,order:3,normal:{name:`Yellow`,hex:`#df8e1d`,rgb:{r:223,g:142,b:29},hsl:{h:34.948453608247426,s:.7698412698412698,l:.49411764705882355},oklch:{l:.7139917309504697,c:.14944164080684152,h:67.77665534753208},code:3},bright:{name:`Bright Yellow`,hex:`#eea02d`,rgb:{r:238,g:160,b:45},hsl:{h:35.751295336787564,s:.8502202643171807,l:.5549019607843138},oklch:{l:.7645858699860659,c:.1514923972600861,h:70.84714818002743},code:11}},blue:{name:`Blue`,order:4,normal:{name:`Blue`,hex:`#1e66f5`,rgb:{r:30,g:102,b:245},hsl:{h:219.90697674418607,s:.9148936170212768,l:.5392156862745098},oklch:{l:.5586168519157438,c:.22550252265688878,h:262.08665056049813},code:4},bright:{name:`Bright Blue`,hex:`#456eff`,rgb:{r:69,g:110,b:255},hsl:{h:226.77419354838707,s:1,l:.6352941176470588},oklch:{l:.5950039604688844,c:.2210327623285269,h:267.30927997425636},code:12}},magenta:{name:`Magenta`,order:5,normal:{name:`Magenta`,hex:`#ea76cb`,rgb:{r:234,g:118,b:203},hsl:{h:316.0344827586207,s:.7341772151898731,l:.6901960784313725},oklch:{l:.7255597313429507,c:.17393264562602528,h:338.4333428586893},code:5},bright:{name:`Bright Magenta`,hex:`#fe85d8`,rgb:{r:254,g:133,b:216},hsl:{h:318.8429752066116,s:.983739837398374,l:.7588235294117647},oklch:{l:.7763650410770642,c:.1745724461980881,h:340.3388720937725},code:13}},cyan:{name:`Cyan`,order:6,normal:{name:`Cyan`,hex:`#179299`,rgb:{r:23,g:146,b:153},hsl:{h:183.23076923076923,s:.7386363636363636,l:.34509803921568627},oklch:{l:.6022689684480229,c:.09811495789237053,h:201.1047483772147},code:6},bright:{name:`Bright Cyan`,hex:`#2d9fa8`,rgb:{r:45,g:159,b:168},hsl:{h:184.39024390243904,s:.5774647887323943,l:.4176470588235294},oklch:{l:.6450436398455724,c:.09825512577461509,h:202.85528917380952},code:14}},white:{name:`White`,order:7,normal:{name:`White`,hex:`#acb0be`,rgb:{r:172,g:176,b:190},hsl:{h:226.6666666666667,s:.12162162162162159,l:.7098039215686275},oklch:{l:.7583943521589962,c:.020453440241571547,h:273.1535522460353},code:7},bright:{name:`Bright White`,hex:`#bcc0cc`,rgb:{r:188,g:192,b:204},hsl:{h:225.00000000000003,s:.13559322033898308,l:.7686274509803922},oklch:{l:.8083070110182754,c:.01739330880861526,h:271.1981554317899},code:15}}}},frappe:{name:`Frappé`,emoji:`🪴`,order:1,dark:!0,colors:{rosewater:{name:`Rosewater`,order:0,hex:`#f2d5cf`,rgb:{r:242,g:213,b:207},hsl:{h:10.2857142857143,s:.5737704918032784,l:.8803921568627451},oklch:{l:.8954521063112798,c:.03354879422590268,h:31.599559788706813},accent:!0},flamingo:{name:`Flamingo`,order:1,hex:`#eebebe`,rgb:{r:238,g:190,b:190},hsl:{h:0,s:.5853658536585367,l:.8392156862745098},oklch:{l:.8439398206825613,c:.055308872078461885,h:18.30664847438885},accent:!0},pink:{name:`Pink`,order:2,hex:`#f4b8e4`,rgb:{r:244,g:184,b:228},hsl:{h:316,s:.7317073170731713,l:.8392156862745098},oklch:{l:.8503687095114205,c:.08924205653299735,h:336.2633054560008},accent:!0},mauve:{name:`Mauve`,order:3,hex:`#ca9ee6`,rgb:{r:202,g:158,b:230},hsl:{h:276.66666666666663,s:.5901639344262294,l:.7607843137254902},oklch:{l:.7647530497131694,c:.11077097472095544,h:311.7436047203909},accent:!0},red:{name:`Red`,order:4,hex:`#e78284`,rgb:{r:231,g:130,b:132},hsl:{h:358.8118811881188,s:.6778523489932885,l:.7078431372549019},oklch:{l:.7170987221827118,c:.12436813455187178,h:19.385905224426494},accent:!0},maroon:{name:`Maroon`,order:5,hex:`#ea999c`,rgb:{r:234,g:153,b:156},hsl:{h:357.77777777777777,s:.6585365853658534,l:.7588235294117647},oklch:{l:.7646391705871649,c:.09755979410903914,h:17.177051946309064},accent:!0},peach:{name:`Peach`,order:6,hex:`#ef9f76`,rgb:{r:239,g:159,b:118},hsl:{h:20.33057851239669,s:.7908496732026143,l:.7},oklch:{l:.7727223424880441,c:.11057154322068624,h:47.72638197276791},accent:!0},yellow:{name:`Yellow`,order:7,hex:`#e5c890`,rgb:{r:229,g:200,b:144},hsl:{h:39.52941176470588,s:.6204379562043796,l:.7313725490196079},oklch:{l:.8443164755548738,c:.07954344021788197,h:83.47165006341226},accent:!0},green:{name:`Green`,order:8,hex:`#a6d189`,rgb:{r:166,g:209,b:137},hsl:{h:95.83333333333331,s:.4390243902439024,l:.6784313725490196},oklch:{l:.8123739062207741,c:.10706091888011615,h:133.3919208933964},accent:!0},teal:{name:`Teal`,order:9,hex:`#81c8be`,rgb:{r:129,g:200,b:190},hsl:{h:171.5492957746479,s:.3922651933701657,l:.6450980392156862},oklch:{l:.7829803045651632,c:.07296064976718789,h:184.64497275512372},accent:!0},sky:{name:`Sky`,order:10,hex:`#99d1db`,rgb:{r:153,g:209,b:219},hsl:{h:189.09090909090907,s:.47826086956521735,l:.7294117647058823},oklch:{l:.8255022028154195,c:.059159987893492826,h:209.75611106861479},accent:!0},sapphire:{name:`Sapphire`,order:11,hex:`#85c1dc`,rgb:{r:133,g:193,b:220},hsl:{h:198.62068965517244,s:.5541401273885351,l:.692156862745098},oklch:{l:.7795534342225096,c:.07267540614929018,h:227.87968935766042},accent:!0},blue:{name:`Blue`,order:12,hex:`#8caaee`,rgb:{r:140,g:170,b:238},hsl:{h:221.6326530612245,s:.7424242424242424,l:.7411764705882353},oklch:{l:.7420101171888788,c:.10444355128774586,h:265.6631926560932},accent:!0},lavender:{name:`Lavender`,order:13,hex:`#babbf1`,rgb:{r:186,g:187,b:241},hsl:{h:238.90909090909093,s:.6626506024096385,l:.8372549019607842},oklch:{l:.809899271286186,c:.0758827742129732,h:283.7404935833554},accent:!0},text:{name:`Text`,order:14,hex:`#c6d0f5`,rgb:{r:198,g:208,b:245},hsl:{h:227.2340425531915,s:.7014925373134333,l:.8686274509803922},oklch:{l:.8619159037222056,c:.05255329213917172,h:273.34736107719544},accent:!1},subtext1:{name:`Subtext 1`,order:15,hex:`#b5bfe2`,rgb:{r:181,g:191,b:226},hsl:{h:226.66666666666669,s:.43689320388349495,l:.7980392156862746},oklch:{l:.808435081185243,c:.05066982227484447,h:272.677974625096},accent:!1},subtext0:{name:`Subtext 0`,order:16,hex:`#a5adce`,rgb:{r:165,g:173,b:206},hsl:{h:228.29268292682926,s:.2949640287769784,l:.7274509803921569},oklch:{l:.7523838177085279,c:.0482828906614922,h:274.47259293675626},accent:!1},overlay2:{name:`Overlay 2`,order:17,hex:`#949cbb`,rgb:{r:148,g:156,b:187},hsl:{h:227.69230769230768,s:.22285714285714275,l:.6568627450980392},oklch:{l:.6969741545288725,c:.04636983219122424,h:273.7769117853428},accent:!1},overlay1:{name:`Overlay 1`,order:18,hex:`#838ba7`,rgb:{r:131,g:139,b:167},hsl:{h:226.66666666666669,s:.16981132075471703,l:.584313725490196},oklch:{l:.6400554586080385,c:.04300015035444563,h:272.61370125840324},accent:!1},overlay0:{name:`Overlay 0`,order:19,hex:`#737994`,rgb:{r:115,g:121,b:148},hsl:{h:229.0909090909091,s:.13360323886639683,l:.515686274509804},oklch:{l:.5808544233961552,c:.04205242988335905,h:275.1981828283078},accent:!1},surface2:{name:`Surface 2`,order:20,hex:`#626880`,rgb:{r:98,g:104,b:128},hsl:{h:228.00000000000003,s:.1327433628318584,l:.44313725490196076},oklch:{l:.5211171663617943,c:.03858957890599293,h:273.9992016671519},accent:!1},surface1:{name:`Surface 1`,order:21,hex:`#51576d`,rgb:{r:81,g:87,b:109},hsl:{h:227.14285714285714,s:.14736842105263157,l:.37254901960784315},oklch:{l:.46005660421566386,c:.03666144991754971,h:272.9657987360858},accent:!1},surface0:{name:`Surface 0`,order:22,hex:`#414559`,rgb:{r:65,g:69,b:89},hsl:{h:230.00000000000003,s:.15584415584415584,l:.30196078431372547},oklch:{l:.39491884471449196,c:.0342392761201927,h:275.8999274586916},accent:!1},base:{name:`Base`,order:23,hex:`#303446`,rgb:{r:48,g:52,b:70},hsl:{h:229.0909090909091,s:.18644067796610175,l:.23137254901960785},oklch:{l:.3290740019408592,c:.032391310923960054,h:274.75804633082976},accent:!1},mantle:{name:`Mantle`,order:24,hex:`#292c3c`,rgb:{r:41,g:44,b:60},hsl:{h:230.52631578947367,s:.18811881188118806,l:.19803921568627453},oklch:{l:.29734161780455115,c:.02937840533895502,h:276.2143947434498},accent:!1},crust:{name:`Crust`,order:25,hex:`#232634`,rgb:{r:35,g:38,b:52},hsl:{h:229.41176470588238,s:.19540229885057467,l:.17058823529411765},oklch:{l:.2720018849839785,c:.02638666944332517,h:275.1154048191657},accent:!1}},ansiColors:{black:{name:`Black`,order:0,normal:{name:`Black`,hex:`#51576d`,rgb:{r:81,g:87,b:109},hsl:{h:227.14285714285714,s:.14736842105263157,l:.37254901960784315},oklch:{l:.46005660421566386,c:.03666144991754971,h:272.9657987360858},code:0},bright:{name:`Bright Black`,hex:`#626880`,rgb:{r:98,g:104,b:128},hsl:{h:228.00000000000003,s:.1327433628318584,l:.44313725490196076},oklch:{l:.5211171663617943,c:.03858957890599293,h:273.9992016671519},code:8}},red:{name:`Red`,order:1,normal:{name:`Red`,hex:`#e78284`,rgb:{r:231,g:130,b:132},hsl:{h:358.8118811881188,s:.6778523489932885,l:.7078431372549019},oklch:{l:.7170987221827118,c:.12436813455187178,h:19.385905224426494},code:1},bright:{name:`Bright Red`,hex:`#e67172`,rgb:{r:230,g:113,b:114},hsl:{h:359.4871794871795,s:.7005988023952096,l:.6725490196078432},oklch:{l:.6847864369537,c:.14569740231177408,h:20.884497376350453},code:9}},green:{name:`Green`,order:2,normal:{name:`Green`,hex:`#a6d189`,rgb:{r:166,g:209,b:137},hsl:{h:95.83333333333331,s:.4390243902439024,l:.6784313725490196},oklch:{l:.8123739062207741,c:.10706091888011615,h:133.3919208933964},code:2},bright:{name:`Bright Green`,hex:`#8ec772`,rgb:{r:142,g:199,b:114},hsl:{h:100.23529411764706,s:.431472081218274,l:.6137254901960785},oklch:{l:.7691274525920667,c:.12860090489376133,h:135.82263156334375},code:10}},yellow:{name:`Yellow`,order:3,normal:{name:`Yellow`,hex:`#e5c890`,rgb:{r:229,g:200,b:144},hsl:{h:39.52941176470588,s:.6204379562043796,l:.7313725490196079},oklch:{l:.8443164755548738,c:.07954344021788197,h:83.47165006341226},code:3},bright:{name:`Bright Yellow`,hex:`#d9ba73`,rgb:{r:217,g:186,b:115},hsl:{h:41.764705882352935,s:.5730337078651685,l:.6509803921568628},oklch:{l:.8012176676303334,c:.09668632119827153,h:86.79242257830037},code:11}},blue:{name:`Blue`,order:4,normal:{name:`Blue`,hex:`#8caaee`,rgb:{r:140,g:170,b:238},hsl:{h:221.6326530612245,s:.7424242424242424,l:.7411764705882353},oklch:{l:.7420101171888788,c:.10444355128774586,h:265.6631926560932},code:4},bright:{name:`Bright Blue`,hex:`#7b9ef0`,rgb:{r:123,g:158,b:240},hsl:{h:222.05128205128207,s:.7959183673469388,l:.711764705882353},oklch:{l:.708313326481911,c:.12709001896855227,h:265.5701385899763},code:12}},magenta:{name:`Magenta`,order:5,normal:{name:`Magenta`,hex:`#f4b8e4`,rgb:{r:244,g:184,b:228},hsl:{h:316,s:.7317073170731713,l:.8392156862745098},oklch:{l:.8503687095114205,c:.08924205653299735,h:336.2633054560008},code:5},bright:{name:`Bright Magenta`,hex:`#f2a4db`,rgb:{r:242,g:164,b:219},hsl:{h:317.6923076923077,s:.7499999999999998,l:.7960784313725491},oklch:{l:.811252788366002,c:.1136535219958786,h:338.1840863673275},code:13}},cyan:{name:`Cyan`,order:6,normal:{name:`Cyan`,hex:`#81c8be`,rgb:{r:129,g:200,b:190},hsl:{h:171.5492957746479,s:.3922651933701657,l:.6450980392156862},oklch:{l:.7829803045651632,c:.07296064976718789,h:184.64497275512372},code:6},bright:{name:`Bright Cyan`,hex:`#5abfb5`,rgb:{r:90,g:191,b:181},hsl:{h:174.05940594059405,s:.44104803493449785,l:.5509803921568628},oklch:{l:.7416297495642946,c:.09587368197181634,h:186.55018355066426},code:14}},white:{name:`White`,order:7,normal:{name:`White`,hex:`#a5adce`,rgb:{r:165,g:173,b:206},hsl:{h:228.29268292682926,s:.2949640287769784,l:.7274509803921569},oklch:{l:.7523838177085279,c:.0482828906614922,h:274.47259293675626},code:7},bright:{name:`Bright White`,hex:`#b5bfe2`,rgb:{r:181,g:191,b:226},hsl:{h:226.66666666666669,s:.43689320388349495,l:.7980392156862746},oklch:{l:.808435081185243,c:.05066982227484447,h:272.677974625096},code:15}}}},macchiato:{name:`Macchiato`,emoji:`🌺`,order:2,dark:!0,colors:{rosewater:{name:`Rosewater`,order:0,hex:`#f4dbd6`,rgb:{r:244,g:219,b:214},hsl:{h:9.999999999999963,s:.5769230769230775,l:.8980392156862745},oklch:{l:.9105206834324908,c:.028643502421314793,h:31.132554974921163},accent:!0},flamingo:{name:`Flamingo`,order:1,hex:`#f0c6c6`,rgb:{r:240,g:198,b:198},hsl:{h:0,s:.5833333333333333,l:.8588235294117648},oklch:{l:.8628787473200895,c:.0478940487275183,h:18.12031084594571},accent:!0},pink:{name:`Pink`,order:2,hex:`#f5bde6`,rgb:{r:245,g:189,b:230},hsl:{h:316.0714285714286,s:.7368421052631583,l:.8509803921568628},oklch:{l:.8608041132344519,c:.08302750894629703,h:336.1798930360514},accent:!0},mauve:{name:`Mauve`,order:3,hex:`#c6a0f6`,rgb:{r:198,g:160,b:246},hsl:{h:266.51162790697674,s:.8269230769230772,l:.7960784313725491},oklch:{l:.7715226080326442,c:.12589563475537238,h:303.8983945913919},accent:!0},red:{name:`Red`,order:4,hex:`#ed8796`,rgb:{r:237,g:135,b:150},hsl:{h:351.1764705882353,s:.7391304347826088,l:.7294117647058824},oklch:{l:.7369998199535772,c:.12515625744540987,h:11.194318367960136},accent:!0},maroon:{name:`Maroon`,order:5,hex:`#ee99a0`,rgb:{r:238,g:153,b:160},hsl:{h:355.05882352941177,s:.7142857142857143,l:.7666666666666666},oklch:{l:.7702321084161985,c:.10236712493806045,h:14.370734317026404},accent:!0},peach:{name:`Peach`,order:6,hex:`#f5a97f`,rgb:{r:245,g:169,b:127},hsl:{h:21.355932203389827,s:.8550724637681162,l:.7294117647058824},oklch:{l:.7988230700616009,c:.10605555431677852,h:49.637586270904706},accent:!0},yellow:{name:`Yellow`,order:7,hex:`#eed49f`,rgb:{r:238,g:212,b:159},hsl:{h:40.253164556962034,s:.6991150442477877,l:.7784313725490196},oklch:{l:.8789890327288896,c:.0744419390304426,h:84.75097618734304},accent:!0},green:{name:`Green`,order:8,hex:`#a6da95`,rgb:{r:166,g:218,b:149},hsl:{h:105.21739130434783,s:.4825174825174825,l:.7196078431372549},oklch:{l:.83498496943401,c:.10790977641295874,h:138.15032984729226},accent:!0},teal:{name:`Teal`,order:9,hex:`#8bd5ca`,rgb:{r:139,g:213,b:202},hsl:{h:171.08108108108107,s:.46835443037974706,l:.6901960784313725},oklch:{l:.8213577752485862,c:.07550599534583141,h:184.1000281519273},accent:!0},sky:{name:`Sky`,order:10,hex:`#91d7e3`,rgb:{r:145,g:215,b:227},hsl:{h:188.78048780487802,s:.5942028985507245,l:.7294117647058823},oklch:{l:.8369354925722358,c:.07186937944833319,h:209.36577404997735},accent:!0},sapphire:{name:`Sapphire`,order:11,hex:`#7dc4e4`,rgb:{r:125,g:196,b:228},hsl:{h:198.64077669902912,s:.6560509554140128,l:.692156862745098},oklch:{l:.7850772061793015,c:.08452088556014221,h:228.37797484060187},accent:!0},blue:{name:`Blue`,order:12,hex:`#8aadf4`,rgb:{r:138,g:173,b:244},hsl:{h:220.188679245283,s:.8281250000000003,l:.7490196078431373},oklch:{l:.7497278222544072,c:.11009557584502845,h:263.81032920326925},accent:!0},lavender:{name:`Lavender`,order:13,hex:`#b7bdf8`,rgb:{r:183,g:189,b:248},hsl:{h:234.46153846153848,s:.8227848101265824,l:.8450980392156863},oklch:{l:.8143649130003514,c:.08335197207697617,h:279.85366741174835},accent:!0},text:{name:`Text`,order:14,hex:`#cad3f5`,rgb:{r:202,g:211,b:245},hsl:{h:227.4418604651163,s:.6825396825396831,l:.8764705882352941},oklch:{l:.8708250855113037,c:.04807752154773134,h:273.6650906813544},accent:!1},subtext1:{name:`Subtext 1`,order:15,hex:`#b8c0e0`,rgb:{r:184,g:192,b:224},hsl:{h:228,s:.39215686274509803,l:.8},oklch:{l:.8119771834676274,c:.0459417988044203,h:274.2671845519773},accent:!1},subtext0:{name:`Subtext 0`,order:16,hex:`#a5adcb`,rgb:{r:165,g:173,b:203},hsl:{h:227.36842105263156,s:.2676056338028167,l:.7215686274509804},oklch:{l:.7512805402700846,c:.044055856671799086,h:273.5326554713311},accent:!1},overlay2:{name:`Overlay 2`,order:17,hex:`#939ab7`,rgb:{r:147,g:154,b:183},hsl:{h:228.33333333333331,s:.2000000000000001,l:.6470588235294117},oklch:{l:.6904882909259856,c:.04333473031418524,h:274.53877114095746},accent:!1},overlay1:{name:`Overlay 1`,order:18,hex:`#8087a2`,rgb:{r:128,g:135,b:162},hsl:{h:227.6470588235294,s:.1545454545454545,l:.5686274509803921},oklch:{l:.6271536692008017,c:.041472890534250864,h:273.7328248238706},accent:!1},overlay0:{name:`Overlay 0`,order:19,hex:`#6e738d`,rgb:{r:110,g:115,b:141},hsl:{h:230.32258064516128,s:.12350597609561753,l:.49215686274509807},oklch:{l:.5607916124513305,c:.04067153987841284,h:276.47475286657203},accent:!1},surface2:{name:`Surface 2`,order:20,hex:`#5b6078`,rgb:{r:91,g:96,b:120},hsl:{h:229.65517241379308,s:.13744075829383887,l:.4137254901960784},oklch:{l:.49385227914892854,c:.038872292496244895,h:275.68331564144205},accent:!1},surface1:{name:`Surface 1`,order:21,hex:`#494d64`,rgb:{r:73,g:77,b:100},hsl:{h:231.11111111111114,s:.15606936416184972,l:.3392156862745098},oklch:{l:.42590353818195015,c:.03850857889914222,h:276.94767625318656},accent:!1},surface0:{name:`Surface 0`,order:22,hex:`#363a4f`,rgb:{r:54,g:58,b:79},hsl:{h:230.4,s:.1879699248120301,l:.2607843137254902},oklch:{l:.35379036656186486,c:.03694667541124954,h:275.98509635448147},accent:!1},base:{name:`Base`,order:23,hex:`#24273a`,rgb:{r:36,g:39,b:58},hsl:{h:231.8181818181818,s:.23404255319148934,l:.1843137254901961},oklch:{l:.27880829786684175,c:.035341158295048546,h:276.93681538212826},accent:!1},mantle:{name:`Mantle`,order:24,hex:`#1e2030`,rgb:{r:30,g:32,b:48},hsl:{h:233.33333333333334,s:.23076923076923075,l:.15294117647058825},oklch:{l:.24925076581247296,c:.030480700717862394,h:278.43503418733405},accent:!1},crust:{name:`Crust`,order:25,hex:`#181926`,rgb:{r:24,g:25,b:38},hsl:{h:235.71428571428572,s:.22580645161290322,l:.12156862745098039},oklch:{l:.21880556699663556,c:.025457407896893474,h:280.65723682308646},accent:!1}},ansiColors:{black:{name:`Black`,order:0,normal:{name:`Black`,hex:`#494d64`,rgb:{r:73,g:77,b:100},hsl:{h:231.11111111111114,s:.15606936416184972,l:.3392156862745098},oklch:{l:.42590353818195015,c:.03850857889914222,h:276.94767625318656},code:0},bright:{name:`Bright Black`,hex:`#5b6078`,rgb:{r:91,g:96,b:120},hsl:{h:229.65517241379308,s:.13744075829383887,l:.4137254901960784},oklch:{l:.49385227914892854,c:.038872292496244895,h:275.68331564144205},code:8}},red:{name:`Red`,order:1,normal:{name:`Red`,hex:`#ed8796`,rgb:{r:237,g:135,b:150},hsl:{h:351.1764705882353,s:.7391304347826088,l:.7294117647058824},oklch:{l:.7369998199535772,c:.12515625744540987,h:11.194318367960136},code:1},bright:{name:`Bright Red`,hex:`#ec7486`,rgb:{r:236,g:116,b:134},hsl:{h:351,s:.759493670886076,l:.6901960784313725},oklch:{l:.7038748505165371,c:.14823674019755922,h:12.744597066695633},code:9}},green:{name:`Green`,order:2,normal:{name:`Green`,hex:`#a6da95`,rgb:{r:166,g:218,b:149},hsl:{h:105.21739130434783,s:.4825174825174825,l:.7196078431372549},oklch:{l:.83498496943401,c:.10790977641295874,h:138.15032984729226},code:2},bright:{name:`Bright Green`,hex:`#8ccf7f`,rgb:{r:140,g:207,b:127},hsl:{h:110.24999999999999,s:.45454545454545453,l:.6549019607843137},oklch:{l:.7902284425235074,c:.12976592850489116,h:140.3670401931882},code:10}},yellow:{name:`Yellow`,order:3,normal:{name:`Yellow`,hex:`#eed49f`,rgb:{r:238,g:212,b:159},hsl:{h:40.253164556962034,s:.6991150442477877,l:.7784313725490196},oklch:{l:.8789890327288896,c:.0744419390304426,h:84.75097618734304},code:3},bright:{name:`Bright Yellow`,hex:`#e1c682`,rgb:{r:225,g:198,b:130},hsl:{h:42.94736842105264,s:.6129032258064515,l:.696078431372549},oklch:{l:.8337291856046483,c:.09217507435336263,h:88.08738541313335},code:11}},blue:{name:`Blue`,order:4,normal:{name:`Blue`,hex:`#8aadf4`,rgb:{r:138,g:173,b:244},hsl:{h:220.188679245283,s:.8281250000000003,l:.7490196078431373},oklch:{l:.7497278222544072,c:.11009557584502845,h:263.81032920326925},code:4},bright:{name:`Bright Blue`,hex:`#78a1f6`,rgb:{r:120,g:161,b:246},hsl:{h:220.47619047619048,s:.8750000000000002,l:.7176470588235294},oklch:{l:.7155487456704475,c:.13299725961930478,h:263.6557594827569},code:12}},magenta:{name:`Magenta`,order:5,normal:{name:`Magenta`,hex:`#f5bde6`,rgb:{r:245,g:189,b:230},hsl:{h:316.0714285714286,s:.7368421052631583,l:.8509803921568628},oklch:{l:.8608041132344519,c:.08302750894629703,h:336.1798930360514},code:5},bright:{name:`Bright Magenta`,hex:`#f2a9dd`,rgb:{r:242,g:169,b:221},hsl:{h:317.26027397260276,s:.7373737373737372,l:.8058823529411765},oklch:{l:.8209986065798357,c:.10734316823199659,h:338.0967569569639},code:13}},cyan:{name:`Cyan`,order:6,normal:{name:`Cyan`,hex:`#8bd5ca`,rgb:{r:139,g:213,b:202},hsl:{h:171.08108108108107,s:.46835443037974706,l:.6901960784313725},oklch:{l:.8213577752485862,c:.07550599534583141,h:184.1000281519273},code:6},bright:{name:`Bright Cyan`,hex:`#63cbc0`,rgb:{r:99,g:203,b:192},hsl:{h:173.65384615384616,s:.4999999999999998,l:.592156862745098},oklch:{l:.7776748423660773,c:.09840189226176546,h:185.99744304387175},code:14}},white:{name:`White`,order:7,normal:{name:`White`,hex:`#a5adcb`,rgb:{r:165,g:173,b:203},hsl:{h:227.36842105263156,s:.2676056338028167,l:.7215686274509804},oklch:{l:.7512805402700846,c:.044055856671799086,h:273.5326554713311},code:7},bright:{name:`Bright White`,hex:`#b8c0e0`,rgb:{r:184,g:192,b:224},hsl:{h:228,s:.39215686274509803,l:.8},oklch:{l:.8119771834676274,c:.0459417988044203,h:274.2671845519773},code:15}}}},mocha:{name:`Mocha`,emoji:`🌿`,order:3,dark:!0,colors:{rosewater:{name:`Rosewater`,order:0,hex:`#f5e0dc`,rgb:{r:245,g:224,b:220},hsl:{h:9.599999999999968,s:.555555555555556,l:.911764705882353},oklch:{l:.922570149778013,c:.02383481197417794,h:30.49185525998905},accent:!0},flamingo:{name:`Flamingo`,order:1,hex:`#f2cdcd`,rgb:{r:242,g:205,b:205},hsl:{h:0,s:.587301587301587,l:.8764705882352941},oklch:{l:.879744246442704,c:.04181252912346382,h:17.975025052424655},accent:!0},pink:{name:`Pink`,order:2,hex:`#f5c2e7`,rgb:{r:245,g:194,b:231},hsl:{h:316.4705882352941,s:.7183098591549301,l:.8607843137254902},oklch:{l:.8700326070585575,c:.0751577539668794,h:336.30408455199915},accent:!0},mauve:{name:`Mauve`,order:3,hex:`#cba6f7`,rgb:{r:203,g:166,b:247},hsl:{h:267.4074074074074,s:.8350515463917528,l:.8098039215686275},oklch:{l:.7871462525760659,c:.11867011135986587,h:304.7693043767238},accent:!0},red:{name:`Red`,order:4,hex:`#f38ba8`,rgb:{r:243,g:139,b:168},hsl:{h:343.2692307692308,s:.8124999999999998,l:.7490196078431373},oklch:{l:.7555920111610426,c:.12970214251394938,h:2.76416484470991},accent:!0},maroon:{name:`Maroon`,order:5,hex:`#eba0ac`,rgb:{r:235,g:160,b:172},hsl:{h:350.4,s:.6521739130434779,l:.7745098039215685},oklch:{l:.7820502016253794,c:.09032993747998593,h:8.848164866005845},accent:!0},peach:{name:`Peach`,order:6,hex:`#fab387`,rgb:{r:250,g:179,b:135},hsl:{h:22.95652173913043,s:.92,l:.7549019607843137},oklch:{l:.8236782337309648,c:.10146034154738652,h:52.62941686191107},accent:!0},yellow:{name:`Yellow`,order:7,hex:`#f9e2af`,rgb:{r:249,g:226,b:175},hsl:{h:41.35135135135135,s:.8604651162790699,l:.8313725490196078},oklch:{l:.9193028538212243,c:.07041462719493903,h:86.52808223272405},accent:!0},green:{name:`Green`,order:8,hex:`#a6e3a1`,rgb:{r:166,g:227,b:161},hsl:{h:115.45454545454544,s:.5409836065573769,l:.7607843137254902},oklch:{l:.8577042231793516,c:.109228579658491,h:142.71528901553893},accent:!0},teal:{name:`Teal`,order:9,hex:`#94e2d5`,rgb:{r:148,g:226,b:213},hsl:{h:170.00000000000003,s:.5735294117647057,l:.7333333333333334},oklch:{l:.8584890398993206,c:.07920670052090036,h:182.74951302554985},accent:!0},sky:{name:`Sky`,order:10,hex:`#89dceb`,rgb:{r:137,g:220,b:235},hsl:{h:189.18367346938774,s:.7101449275362316,l:.7294117647058823},oklch:{l:.8467113913728485,c:.08333608100880854,h:210.25454148097614},accent:!0},sapphire:{name:`Sapphire`,order:11,hex:`#74c7ec`,rgb:{r:116,g:199,b:236},hsl:{h:198.5,s:.759493670886076,l:.6901960784313725},oklch:{l:.790649687529011,c:.09649039960036986,h:228.65267891585813},accent:!0},blue:{name:`Blue`,order:12,hex:`#89b4fa`,rgb:{r:137,g:180,b:250},hsl:{h:217.1681415929203,s:.9186991869918699,l:.7588235294117647},oklch:{l:.7664203616291358,c:.11134426678812931,h:259.88497602028025},accent:!0},lavender:{name:`Lavender`,order:13,hex:`#b4befe`,rgb:{r:180,g:190,b:254},hsl:{h:231.89189189189187,s:.9736842105263159,l:.8509803921568628},oklch:{l:.8165960070600968,c:.09095182921926764,h:277.3092428314159},accent:!0},text:{name:`Text`,order:14,hex:`#cdd6f4`,rgb:{r:205,g:214,b:244},hsl:{h:226.15384615384616,s:.6393442622950825,l:.8803921568627451},oklch:{l:.8786600793473718,c:.04255199903517194,h:272.2767378415369},accent:!1},subtext1:{name:`Subtext 1`,order:15,hex:`#bac2de`,rgb:{r:186,g:194,b:222},hsl:{h:226.66666666666669,s:.35294117647058837,l:.8},oklch:{l:.8168227787478934,c:.04034456468443787,h:272.86218933640856},accent:!1},subtext0:{name:`Subtext 0`,order:16,hex:`#a6adc8`,rgb:{r:166,g:173,b:200},hsl:{h:227.6470588235294,s:.23611111111111102,l:.7176470588235294},oklch:{l:.7509605472605528,c:.03956498596177885,h:273.9319903727045},accent:!1},overlay2:{name:`Overlay 2`,order:17,hex:`#9399b2`,rgb:{r:147,g:153,b:178},hsl:{h:228.38709677419354,s:.16756756756756758,l:.6372549019607843},oklch:{l:.6865207430554462,c:.037354896315760076,h:274.72527650549966},accent:!1},overlay1:{name:`Overlay 1`,order:18,hex:`#7f849c`,rgb:{r:127,g:132,b:156},hsl:{h:229.65517241379308,s:.12775330396475776,l:.5549019607843138},oklch:{l:.6175671510185836,c:.036669743168859285,h:276.0047079409003},accent:!1},overlay0:{name:`Overlay 0`,order:19,hex:`#6c7086`,rgb:{r:108,g:112,b:134},hsl:{h:230.7692307692308,s:.10743801652892565,l:.4745098039215686},oklch:{l:.549691183767789,c:.03449390827002124,h:277.0950746058613},accent:!1},surface2:{name:`Surface 2`,order:20,hex:`#585b70`,rgb:{r:88,g:91,b:112},hsl:{h:232.5,s:.12,l:.39215686274509803},oklch:{l:.4765064666638717,c:.033993540442005726,h:278.6430397483062},accent:!1},surface1:{name:`Surface 1`,order:21,hex:`#45475a`,rgb:{r:69,g:71,b:90},hsl:{h:234.2857142857143,s:.13207547169811326,l:.31176470588235294},oklch:{l:.4036914196944409,c:.03195464132822365,h:280.1520036072935},accent:!1},surface0:{name:`Surface 0`,order:22,hex:`#313244`,rgb:{r:49,g:50,b:68},hsl:{h:236.84210526315792,s:.16239316239316234,l:.22941176470588237},oklch:{l:.3240218874463015,c:.03188455239399239,h:281.9784417412653},accent:!1},base:{name:`Base`,order:23,hex:`#1e1e2e`,rgb:{r:30,g:30,b:46},hsl:{h:240,s:.21052631578947367,l:.14901960784313725},oklch:{l:.24286694183838442,c:.03035736275944967,h:283.91097023641396},accent:!1},mantle:{name:`Mantle`,order:24,hex:`#181825`,rgb:{r:24,g:24,b:37},hsl:{h:240,s:.2131147540983607,l:.11960784313725491},oklch:{l:.2155216079500624,c:.02541687089919072,h:284.06469902193265},accent:!1},crust:{name:`Crust`,order:25,hex:`#11111b`,rgb:{r:17,g:17,b:27},hsl:{h:240,s:.22727272727272727,l:.08627450980392157},oklch:{l:.18278246200466305,c:.02037484440642812,h:284.2038483902186},accent:!1}},ansiColors:{black:{name:`Black`,order:0,normal:{name:`Black`,hex:`#45475a`,rgb:{r:69,g:71,b:90},hsl:{h:234.2857142857143,s:.13207547169811326,l:.31176470588235294},oklch:{l:.4036914196944409,c:.03195464132822365,h:280.1520036072935},code:0},bright:{name:`Bright Black`,hex:`#585b70`,rgb:{r:88,g:91,b:112},hsl:{h:232.5,s:.12,l:.39215686274509803},oklch:{l:.4765064666638717,c:.033993540442005726,h:278.6430397483062},code:8}},red:{name:`Red`,order:1,normal:{name:`Red`,hex:`#f38ba8`,rgb:{r:243,g:139,b:168},hsl:{h:343.2692307692308,s:.8124999999999998,l:.7490196078431373},oklch:{l:.7555920111610426,c:.12970214251394938,h:2.76416484470991},code:1},bright:{name:`Bright Red`,hex:`#f37799`,rgb:{r:243,g:119,b:153},hsl:{h:343.54838709677415,s:.8378378378378376,l:.7098039215686274},oklch:{l:.7217428993342391,c:.15414679130645687,h:4.389693527883992},code:9}},green:{name:`Green`,order:2,normal:{name:`Green`,hex:`#a6e3a1`,rgb:{r:166,g:227,b:161},hsl:{h:115.45454545454544,s:.5409836065573769,l:.7607843137254902},oklch:{l:.8577042231793516,c:.109228579658491,h:142.71528901553893},code:2},bright:{name:`Bright Green`,hex:`#89d88b`,rgb:{r:137,g:216,b:139},hsl:{h:121.51898734177213,s:.5031847133757963,l:.692156862745098},oklch:{l:.8114606411671731,c:.13124595694065,h:144.75794205397312},code:10}},yellow:{name:`Yellow`,order:3,normal:{name:`Yellow`,hex:`#f9e2af`,rgb:{r:249,g:226,b:175},hsl:{h:41.35135135135135,s:.8604651162790699,l:.8313725490196078},oklch:{l:.9193028538212243,c:.07041462719493903,h:86.52808223272405},code:3},bright:{name:`Bright Yellow`,hex:`#ebd391`,rgb:{r:235,g:211,b:145},hsl:{h:44,s:.692307692307692,l:.7450980392156863},oklch:{l:.8715235071537292,c:.08865613632867986,h:89.86758726732972},code:11}},blue:{name:`Blue`,order:4,normal:{name:`Blue`,hex:`#89b4fa`,rgb:{r:137,g:180,b:250},hsl:{h:217.1681415929203,s:.9186991869918699,l:.7588235294117647},oklch:{l:.7664203616291358,c:.11134426678812931,h:259.88497602028025},code:4},bright:{name:`Bright Blue`,hex:`#74a8fc`,rgb:{r:116,g:168,b:252},hsl:{h:217.05882352941174,s:.9577464788732396,l:.7215686274509804},oklch:{l:.7309959277391279,c:.13483339482417311,h:259.6926272923047},code:12}},magenta:{name:`Magenta`,order:5,normal:{name:`Magenta`,hex:`#f5c2e7`,rgb:{r:245,g:194,b:231},hsl:{h:316.4705882352941,s:.7183098591549301,l:.8607843137254902},oklch:{l:.8700326070585575,c:.0751577539668794,h:336.30408455199915},code:5},bright:{name:`Bright Magenta`,hex:`#f2aede`,rgb:{r:242,g:174,b:222},hsl:{h:317.6470588235294,s:.7234042553191488,l:.8156862745098039},oklch:{l:.8295922565294424,c:.09937171080080995,h:338.2151942405669},code:13}},cyan:{name:`Cyan`,order:6,normal:{name:`Cyan`,hex:`#94e2d5`,rgb:{r:148,g:226,b:213},hsl:{h:170.00000000000003,s:.5735294117647057,l:.7333333333333334},oklch:{l:.8584890398993206,c:.07920670052090036,h:182.74951302554985},code:6},bright:{name:`Bright Cyan`,hex:`#6bd7ca`,rgb:{r:107,g:215,b:202},hsl:{h:172.77777777777777,s:.5744680851063831,l:.6313725490196078},oklch:{l:.8125207918878411,c:.10203371842442319,h:184.63421832134114},code:14}},white:{name:`White`,order:7,normal:{name:`White`,hex:`#a6adc8`,rgb:{r:166,g:173,b:200},hsl:{h:227.6470588235294,s:.23611111111111102,l:.7176470588235294},oklch:{l:.7509605472605528,c:.03956498596177885,h:273.9319903727045},code:7},bright:{name:`Bright White`,hex:`#bac2de`,rgb:{r:186,g:194,b:222},hsl:{h:226.66666666666669,s:.35294117647058837,l:.8},oklch:{l:.8168227787478934,c:.04034456468443787,h:272.86218933640856},code:15}}}}},_T=e=>Object.entries(e),{version:vT,...yT}=gT;gT.version;var bT=_T(yT).reduce((e,[t,n])=>(e[t]={...n,colorEntries:_T(n.colors),ansiColorEntries:_T(n.ansiColors)},e),{});_T(bT);function xT(e){let t=e.colors,n=e.dark;return[q.theme({"&":{color:t.text.hex,backgroundColor:t.base.hex},".cm-content":{caretColor:t.rosewater.hex},".cm-cursor, .cm-dropCursor":{borderLeftColor:t.rosewater.hex},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:`${t.overlay2.hex}40`},".cm-panels":{backgroundColor:t.mantle.hex,color:t.text.hex},".cm-panels.cm-panels-top":{borderBottom:`2px solid black`},".cm-panels.cm-panels-bottom":{borderTop:`2px solid black`},".cm-searchMatch":{backgroundColor:`${t.blue.hex}59`,outline:`1px solid ${t.blue.hex}`},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:`${t.blue.hex}2f`},".cm-activeLine":{backgroundColor:t.surface0.hex},".cm-selectionMatch":{backgroundColor:`${t.surface2.hex}4d`},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:`${t.surface2.hex}47`,color:t.text.hex},".cm-gutters":{backgroundColor:t.base.hex,color:t.subtext0.hex,border:`none`},".cm-activeLineGutter":{backgroundColor:t.surface0.hex},".cm-foldPlaceholder":{backgroundColor:`transparent`,border:`none`,color:t.overlay0.hex},".cm-placeholder":{color:t.overlay1.hex},".cm-tooltip":{border:`none`,backgroundColor:t.surface0.hex},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:`transparent`,borderBottomColor:`transparent`},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:t.surface0.hex,borderBottomColor:t.surface0.hex},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:t.surface1.hex,color:t.text.hex}}},{dark:n}),Y_(G_.define([{tag:Y.keyword,color:t.mauve.hex},{tag:[Y.name,Y.definition(Y.name),Y.deleted,Y.character,Y.macroName],color:t.text.hex},{tag:[Y.function(Y.variableName),Y.function(Y.propertyName),Y.propertyName,Y.labelName],color:t.blue.hex},{tag:[Y.color,Y.constant(Y.name),Y.standard(Y.name)],color:t.peach.hex},{tag:[Y.self,Y.atom],color:t.red.hex},{tag:[Y.typeName,Y.className,Y.changed,Y.annotation,Y.namespace],color:t.yellow.hex},{tag:[Y.operator],color:t.sky.hex},{tag:[Y.url,Y.link],color:t.teal.hex},{tag:[Y.escape,Y.regexp],color:t.pink.hex},{tag:[Y.meta,Y.punctuation,Y.separator,Y.comment],color:t.overlay2.hex},{tag:Y.strong,fontWeight:`bold`},{tag:Y.emphasis,fontStyle:`italic`},{tag:Y.strikethrough,textDecoration:`line-through`},{tag:Y.link,color:t.blue.hex,textDecoration:`underline`},{tag:Y.heading,fontWeight:`bold`,color:t.blue.hex},{tag:[Y.special(Y.variableName)],color:t.lavender.hex},{tag:[Y.bool,Y.number],color:t.peach.hex},{tag:[Y.processingInstruction,Y.string,Y.inserted],color:t.green.hex},{tag:Y.invalid,color:t.red.hex}]))]}var ST=xT(bT.latte);bT.frappe,bT.macchiato;var CT=xT(bT.mocha),wT=new Ws;function TT(e){return e?CT:ST}function ET(e,t=1e3){let n=document.createElement(`div`);n.className=`fixed bottom-4 right-4 bg-fg-primary text-bg-app px-4 py-2 rounded shadow-lg text-xs font-bold z-50`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),t)}var DT=null,OT=0,kT=0,AT=new Ws;function jT(e){DT&&DT.dispatch({effects:AT.reconfigure(e||[])})}function MT(e,t,n){let r=document.getElementById(`editor`);if(r){if(DT){jT(t);let n=DT.state.doc.toString();n!==e&&DT.dispatch({changes:{from:0,to:n.length,insert:e}})}else{let i=window.matchMedia(`(prefers-color-scheme: dark)`).matches;DT=new q({state:R.create({doc:e,extensions:[hT,Lw(),nm.of([{key:`Tab`,run:ow},{key:`Tab`,run:()=>{let e=Date.now();return e-kT>2e3&&(OT=0),OT++,kT=e,OT>=3&&(ET(`Press Esc + Tab to move focus out of editor`,3e3),OT=0),!1}},...oS,sS,{key:`Mod-s`,run:()=>(n&&n(),!0),preventDefault:!0}]),AT.of(t||[]),wT.of(TT(i)),q.lineWrapping,q.theme({"&":{height:`100%`,backgroundColor:`var(--bg-app)`,color:`var(--fg-primary)`},".cm-scroller":{overflow:`auto`,fontFamily:`var(--font-mono)`}}),q.domEventHandlers({keydown:e=>{e.key!==`Tab`&&(OT=0)},mousedown:()=>{OT=0}})]}),parent:r})}}}function NT(e){DT&&DT.dispatch({effects:wT.reconfigure(TT(e))})}function PT(){return DT?DT.state.doc.toString():``}function FT(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var IT=FT();function LT(e){IT=e}var RT={exec:()=>null};function Z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(BT.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var zT=(()=>{try{return!0}catch{return!1}})(),BT={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},VT=/^(?:[ \t]*(?:\n|$))+/,HT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,UT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,WT=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,GT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,KT=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,qT=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,JT=Z(qT).replace(/bull/g,KT).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),YT=Z(qT).replace(/bull/g,KT).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),XT=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ZT=/^[^\n]+/,QT=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,$T=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,QT).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),eE=Z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,KT).getRegex(),tE=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,nE=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,rE=Z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,nE).replace(`tag`,tE).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),iE=Z(XT).replace(`hr`,WT).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,tE).getRegex(),aE={blockquote:Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,iE).getRegex(),code:HT,def:$T,fences:UT,heading:GT,hr:WT,html:rE,lheading:JT,list:eE,newline:VT,paragraph:iE,table:RT,text:ZT},oE=Z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,WT).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,tE).getRegex(),sE={...aE,lheading:YT,table:oE,paragraph:Z(XT).replace(`hr`,WT).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,oE).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,tE).getRegex()},cE={...aE,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,nE).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:RT,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(XT).replace(`hr`,WT).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,JT).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},lE=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,uE=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,dE=/^( {2,}|\\)\n(?!\s*$)/,fE=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,pE=/[\p{P}\p{S}]/u,mE=/[\s\p{P}\p{S}]/u,hE=/[^\s\p{P}\p{S}]/u,gE=Z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,mE).getRegex(),_E=/(?!~)[\p{P}\p{S}]/u,vE=/(?!~)[\s\p{P}\p{S}]/u,yE=/(?:[^\s\p{P}\p{S}]|~)/u,bE=Z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,zT?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),xE=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,SE=Z(xE,`u`).replace(/punct/g,pE).getRegex(),CE=Z(xE,`u`).replace(/punct/g,_E).getRegex(),wE=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,TE=Z(wE,`gu`).replace(/notPunctSpace/g,hE).replace(/punctSpace/g,mE).replace(/punct/g,pE).getRegex(),EE=Z(wE,`gu`).replace(/notPunctSpace/g,yE).replace(/punctSpace/g,vE).replace(/punct/g,_E).getRegex(),DE=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,hE).replace(/punctSpace/g,mE).replace(/punct/g,pE).getRegex(),OE=Z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,pE).getRegex(),kE=Z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,hE).replace(/punctSpace/g,mE).replace(/punct/g,pE).getRegex(),AE=Z(/\\(punct)/,`gu`).replace(/punct/g,pE).getRegex(),jE=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ME=Z(nE).replace(`(?:-->|$)`,`-->`).getRegex(),NE=Z(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ME).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),PE=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,FE=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,PE).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),IE=Z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,PE).replace(`ref`,QT).getRegex(),LE=Z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,QT).getRegex(),RE=Z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,IE).replace(`nolink`,LE).getRegex(),zE=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,BE={_backpedal:RT,anyPunctuation:AE,autolink:jE,blockSkip:bE,br:dE,code:uE,del:RT,delLDelim:RT,delRDelim:RT,emStrongLDelim:SE,emStrongRDelimAst:TE,emStrongRDelimUnd:DE,escape:lE,link:FE,nolink:LE,punctuation:gE,reflink:IE,reflinkSearch:RE,tag:NE,text:fE,url:RT},VE={...BE,link:Z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,PE).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,PE).getRegex()},HE={...BE,emStrongRDelimAst:EE,emStrongLDelim:CE,delLDelim:OE,delRDelim:kE,url:Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,zE).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,zE).getRegex()},UE={...HE,br:Z(dE).replace(`{2,}`,`*`).getRegex(),text:Z(HE.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},WE={normal:aE,gfm:sE,pedantic:cE},GE={normal:BE,gfm:HE,breaks:UE,pedantic:VE},KE={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},qE=e=>KE[e];function JE(e,t){if(t){if(BT.escapeTest.test(e))return e.replace(BT.escapeReplace,qE)}else if(BT.escapeTestNoEncode.test(e))return e.replace(BT.escapeReplaceNoEncode,qE);return e}function YE(e){try{e=encodeURI(e).replace(BT.percentDecode,`%`)}catch{return null}return e}function XE(e,t){let n=e.replace(BT.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(BT.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(BT.slashPipe,`|`);return n}function ZE(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function QE(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function $E(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function eD(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function tD(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var nD=class{options;rules;lexer;constructor(e){this.options=e||IT}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:ZE(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=tD(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=ZE(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:ZE(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=ZE(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=$E(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=XE(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(XE(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=ZE(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=QE(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),eD(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return eD(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},rD=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||IT,this.options.tokenizer=this.options.tokenizer||new nD,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:BT,block:WE.normal,inline:GE.normal};this.options.pedantic?(t.block=WE.pedantic,t.inline=GE.pedantic):this.options.gfm&&(t.block=WE.gfm,t.inline=this.options.breaks?GE.breaks:GE.gfm),this.tokenizer.rules=t}static get rules(){return{block:WE,inline:GE}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(BT.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(BT.tabCharGlobal,`    `).replace(BT.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return t}},iD=class{options;parser;constructor(e){this.options=e||IT}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(BT.notSpaceStart)?.[0],i=e.replace(BT.endingNewline,``)+`
`;return r?`<pre><code class="language-`+JE(r)+`">`+(n?i:JE(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:JE(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${JE(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=YE(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+JE(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=YE(e);if(i===null)return JE(n);e=i;let a=`<img src="${e}" alt="${JE(n)}"`;return t&&(a+=` title="${JE(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:JE(e.text)}},aD=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},oD=class e{options;renderer;textRenderer;constructor(e){this.options=e||IT,this.options.renderer=this.options.renderer||new iD,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new aD}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},sD=class{options;block;constructor(e){this.options=e||IT}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?rD.lex:rD.lexInline}provideParser(e=this.block){return e?oD.parse:oD.parseInline}},cD=new class{defaults=FT();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=oD;Renderer=iD;TextRenderer=aD;Lexer=rD;Tokenizer=nD;Hooks=sD;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new iD(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new nD(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new sD;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=sD.passThroughHooks.has(n)?e=>{if(this.defaults.async&&sD.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return rD.lex(e,t??this.defaults)}parser(e,t){return oD.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?rD.lex:rD.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?oD.parse:oD.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?rD.lex:rD.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?oD.parse:oD.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+JE(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return cD.parse(e,t)}Q.options=Q.setOptions=function(e){return cD.setOptions(e),Q.defaults=cD.defaults,LT(Q.defaults),Q},Q.getDefaults=FT,Q.defaults=IT,Q.use=function(...e){return cD.use(...e),Q.defaults=cD.defaults,LT(Q.defaults),Q},Q.walkTokens=function(e,t){return cD.walkTokens(e,t)},Q.parseInline=cD.parseInline,Q.Parser=oD,Q.parser=oD.parse,Q.Renderer=iD,Q.TextRenderer=aD,Q.Lexer=rD,Q.lexer=rD.lex,Q.Tokenizer=nD,Q.Hooks=sD,Q.parse=Q,Q.options,Q.setOptions,Q.use,Q.walkTokens,Q.parseInline,oD.parse,rD.lex;function lD(){Q.use({renderer:{code({text:e,lang:t}){return`<div class="cm-static-code mb-4" data-lang="${t||``}">${e}</div>`}}})}var uD=e=>Q.parse(e);function dD(){let e=window.matchMedia(`(prefers-color-scheme: dark)`).matches;document.querySelectorAll(`.cm-static-code`).forEach(t=>{let n=t.textContent||``,r=Fy(t.getAttribute(`data-lang`)||Oy)||Fy(Oy);t.textContent=``,new q({state:R.create({doc:n,extensions:[R.readOnly.of(!0),q.editable.of(!1),TT(e),...r?[r]:[],q.lineWrapping,q.theme({"&":{borderRadius:`4px`,overflow:`hidden`,backgroundColor:`var(--bg-app)`},".cm-scroller":{overflow:`visible`}})]}),parent:t})})}var $={description:{desktop:document.getElementById(`ex-desc-desktop`),mobile:document.getElementById(`ex-desc-mobile`)},sidebar:{list:document.getElementById(`sidebar-list`),toggle:document.getElementById(`sidebar-toggle`),nav:document.getElementById(`sidebar-nav`)},editorConsolePanel:document.getElementById(`editor-and-console-panel`),console:document.getElementById(`console-output`),status:document.getElementById(`status`),runBtn:document.getElementById(`run-btn`),resetBtn:document.getElementById(`reset-btn`),clearConsoleBtn:document.getElementById(`clear-console-btn`),shortcutsBtn:document.getElementById(`shortcuts-btn`),resetProgressBtn:document.getElementById(`reset-progress-btn`),languageSelectorContainer:document.getElementById(`language-selector-container`),shortcuts:{modal:document.getElementById(`shortcuts-modal`),closeBtn:document.getElementById(`close-shortcuts-btn`),list:document.getElementById(`shortcuts-list`)},resetProgress:{modal:document.getElementById(`reset-progress-modal`),closeBtn:document.getElementById(`close-reset-progress-btn`),cancelBtn:document.getElementById(`cancel-reset-progress-btn`),confirmBtn:document.getElementById(`confirm-reset-progress-btn`)},nav:{prev:document.getElementById(`nav-prev`),next:document.getElementById(`nav-next`)},tabs:{problem:document.getElementById(`tab-problem`),code:document.getElementById(`tab-code`)},resize:{paneProblem:document.getElementById(`ex-desc-desktop`),paneConsole:document.getElementById(`pane-console`),dragHDesktop:document.getElementById(`drag-h-desktop`),dragVConsole:document.getElementById(`drag-v-console`)},progressContainer:document.getElementById(`progress-container`),branding:{brandLink:document.getElementById(`header-brand`),logo:document.getElementById(`header-logo`),title:document.getElementById(`header-title`),subtitle:document.getElementById(`header-subtitle`)}},fD={element:document.getElementById(`status`),setRunning(){this.element&&(this.element.textContent=`Running...`,this.element.className=`text-yellow-500 text-xs font-mono animate-pulse`)},setPassed(){this.element&&(this.element.textContent=`PASSED`,this.element.className=`text-green-500 font-bold text-xs`)},setFailed(){this.element&&(this.element.textContent=`FAILED`,this.element.className=`text-red-500 font-bold text-xs`)},setError(){this.element&&(this.element.textContent=`ERROR`,this.element.className=`text-red-600 font-bold text-xs`)},setReady(){this.element&&(this.element.textContent=`Ready`,this.element.className=`text-green-600 text-xs font-mono`)}},pD={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function ee(e){return e.map(b)}function b(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function te(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function x(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function S(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function C(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function ne(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function re(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function ie(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(le(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):ne(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,ee=t.y,b=5,te=Math.PI/b;b--;)y=t.x+Math.cos(g)*v,ee=t.y+Math.sin(g)*v,e.lineTo(y,ee),g+=te,y=t.x+Math.cos(g)*_,ee=t.y+Math.sin(g)*_,e.lineTo(y,ee),g+=te;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ae(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return ie(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function oe(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?x:S,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,ee),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),b=!!g(t,`flat`),x=te(t),S=i,C=[],ne=e.width*x.x,ie=e.height*x.y;S--;)C.push(re({x:ne,y:ie,angle:a,spread:o,startVelocity:s,color:f[S%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:b}));return m?m.addFettis(C):(m=ae(e,C,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=C(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var se;function ce(){return se||=oe(null,{useWorker:!0,resize:!0}),se}function le(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function ue(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function de(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return ce().apply(this,arguments)},n.exports.reset=function(){ce().reset()},n.exports.create=oe,n.exports.shapeFromPath=ue,n.exports.shapeFromText=de})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),pD,!1);var mD=pD.exports;pD.exports.create;function hD(e,t){return Math.random()*(t-e)+e}function gD(){mD({angle:hD(60,120),spread:hD(30,70),particleCount:hD(50,100),origin:{y:.6}})}function _D(){return X.getState().currentLanguageId||Oy}function vD(){return Ny(_D())}var yD={get name(){let e=_D();return vD()?.name||My(e)?.name||e},async isReady(){try{return(await Py(_D())).isReady()}catch{return!1}},getInitError(){return vD()?.getInitError?.()||null},async run(e,t){return(await Py(_D())).run(e,t)},terminate(){vD()?.terminate?.()}},bD={CHECK:`<svg xmlns="http://www.w3.org/2000/svg"
    width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
  class="text-green-500">
  <polyline points="20 6 9 17 4 12"></polyline></svg>`,LEFT_ARROW:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
  <path d="m15 18-6-6 6-6" /></svg>`,RIGHT_ARROW:`<svg width="18" height="18" style="display: block; transform: scale(-1,1)" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
  <path d="m15 18-6-6 6-6" /></svg>`,PLAY:`<svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/>
  </svg>`,STOP:`<svg fill="currentColor" width="16" height="16" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg"
    class="cf-icon-svg"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-5.267 6.274a6.766 6.766 0 0 0 1.756-1.084L3.31 5.177a6.81 6.81 0 0 0 7.84 10.68zm3.624-3.624a6.808 6.808 0 0 0-10.68-7.84l9.596 9.596a6.77 6.77 0 0 0 1.084-1.756z"/>
  </svg>`,TRASH:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="14" height="14" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M23,27H11c-1.1,0-2-0.9-2-2V8h16v17
  C25,26.1,24.1,27,23,27z"/>
  <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="27" y1="8" x2="7" y2="8"/>
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M14,8V6c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2"/>
  <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="17" y1="23" x2="17" y2="12"/>
  <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="21" y1="23" x2="21" y2="12"/>
  <line fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="13" y1="23" x2="13" y2="12"/>
  </svg>`,MENU:`<svg fill="var(--fg-primary)" width="20" height="20" viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>icn/menu</title>
                    <path
                        d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
                        id="a" />
                </svg>`,WHITE_CHECK:`<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`,CLOSE:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line></svg>`,KEYBOARD:`<svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.21,13.29a.93.93,0,0,0-.33-.21,1,1,0,0,0-.76,0,.9.9,0,0,0-.54.54,1,1,0,1,0,1.84,0A1,1,0,0,0,6.21,13.29ZM13.5,11h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm-4,0h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm-3-2h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM20,5H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1Zm-6-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm3.5-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm.71,4.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,.93.93,0,0,0-.33.21,1,1,0,0,0-.21.33A1,1,0,1,0,19.5,14a.84.84,0,0,0-.08-.38A1,1,0,0,0,19.21,13.29Z"/></svg>`},xD=new class{isRunning=!1;isReady=!1;constructor(){this.setRunningState(!1)}async run(){if(this.isRunning)return;if(!await yD.isReady()){alert(`Loading...`);return}let{currentExerciseId:e,currentLanguageId:t,completedIds:n}=X.getState(),r=ao.find(t=>t.id===e);if(!r)return;let i=Iy(r,t);this.setRunningState(!0),fD.setRunning(),$.console.textContent=``;try{let a=PT();X.getState().saveUserCode(e,t,a);let o=i.testCode||``,s=await yD.run(a,o);if(!s.success){this.handleFailure(s.error||`Unknown Error`,s.output);return}if($.console.textContent=s.output,s.output.includes(`Test failed`)||s.output.includes(`Failure`)){fD.setFailed();return}if(i.validate){let e=i.validate(a,s.output);if(e!==!0){fD.setFailed(),$.console.textContent+=`\n\n${e}`;return}}this.handleSuccess(r.id,n)}catch(e){this.handleError(e.message)}finally{this.setRunningState(!1)}}handleFailure(e,t){fD.setFailed(),$.console.textContent=t?t+`
`+e:e}handleError(e){fD.setError(),$.console.textContent=`Runtime Error: `+e}handleSuccess(e,t){fD.setPassed(),$.console.textContent+=`
ALL TESTS PASSED!`;let n=t.includes(e);X.getState().markComplete(e),n?ET(`Passed!`):gD()}setRunningState(e){this.isRunning=e,$.runBtn.disabled=e||!this.isReady,e?($.runBtn.classList.add(`run-btn-fill`),$.runBtn.innerHTML=`<span>${bD.STOP}</span><span>Run</span>`):($.runBtn.classList.remove(`run-btn-fill`),$.runBtn.innerHTML=`<span>${bD.PLAY}</span><span>Run</span>`)}waitForCompiler(){setInterval(async()=>{let e=yD.getInitError?.();if(e){this.isReady=!1,fD.setError(),this.setRunningState(this.isRunning),(!$.console.textContent||$.console.textContent===`// Ready...`)&&($.console.textContent=`${yD.name.toUpperCase()} runtime initialization failed:\n${e}`);return}let t=await yD.isReady();t!==this.isReady&&(this.isReady=t,t&&fD.setReady(),this.setRunningState(this.isRunning))},500)}};function SD(){document.title=my.headline||my.title,$.branding.logo&&(my.logo_image?$.branding.logo.innerHTML=`<img src="${my.logo_image}" alt="Logo" class="h-8 w-auto" />`:$.branding.logo.textContent=my.logo_emoji||`📓`),$.branding.title&&($.branding.title.textContent=my.title),$.branding.subtitle&&($.branding.subtitle.textContent=my.subtitle)}function CD(e,t,n,r){e&&(e.innerHTML=t.map(e=>`<div class="px-2 py-1 pb-0 text-[10px] font-bold text-fg-muted uppercase">${e.title}</div>`+e.exercises.map(e=>{let t=r.includes(e.id);return`<div class="nav-item cursor-pointer p-2 pl-4 text-sm flex justify-between items-center transition-colors ${e.id===n?`bg-bg-surface text-fg-primary border-l-2 border-brand`:`text-fg-muted hover:text-fg-primary`} ${t?`opacity-40`:``}"
                        onclick="location.hash='#${e.id}'">
                      <span>${e.id} ${e.title}</span>
                      ${t?bD.CHECK:``}
                    </div>`}).join(``)).join(``))}function wD(e,t){!e||!t||(e.innerHTML=bD.MENU,e.addEventListener(`click`,()=>{t.classList.toggle(`hidden`),t.classList.toggle(`flex`),t.classList.toggle(`lg:hidden`),t.classList.toggle(`lg:flex`)}),document.addEventListener(`click`,n=>{let r=!t.classList.contains(`hidden`);if(window.innerWidth<1024&&r){let r=n.target,i=t.contains(r),a=e.contains(r);!i&&!a&&(t.classList.toggle(`hidden`),t.classList.toggle(`flex`),t.classList.toggle(`lg:hidden`),t.classList.toggle(`lg:flex`))}}))}function TD(e,t,n,r){if(!e)return;let i=t.find(e=>e.exercises.some(e=>e.id===n));if(i){let t=i.exercises.length,a=i.exercises.findIndex(e=>!r.includes(e.id));e.innerHTML=i.exercises.map((e,i)=>{let o=r.includes(e.id),s=i===a||a===-1&&!1,c=i===t-1,l=e.id===n,u=`border border-border-default bg-bg-surface`,d=``;s&&(u=`border border-brand bg-bg-surface`),o&&(u=`border border-brand bg-brand`,d=bD.WHITE_CHECK),l&&(u=`border border-brand ${o?`bg-brand`:`bg-bg-surface`} shadow-[0_0_6px_3px_color-mix(in_srgb,var(--color-brand)_30%,transparent)]`);let f=``;return c||(f=`<div class="w-8 h-0.5 mx-0.5 rounded ${o?`bg-brand`:`bg-border-default opacity-50`}"></div>`),`
                <div class="relative flex items-center group cursor-pointer" onclick="location.hash='#${e.id}'" title="${e.title}">
                    <div class="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${u}">
                        ${d}
                    </div>
                    ${f}
                    <!-- tooltip on hover -->
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-bg-surface border border-border-default px-2 py-1 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-20 pointer-events-none">
                        ${e.title}
                    </div>
                </div>
            `}).join(``)}}function ED(e,t,n,r=!1){if(!e||!t)return;let i=!1,a=0,o=0;e.addEventListener(`mousedown`,r=>{i=!0,document.body.classList.add(`resizing`),a=n===`horizontal`?r.clientX:r.clientY,o=n===`horizontal`?t.offsetWidth:t.offsetHeight,document.body.style.userSelect=`none`,document.body.style.cursor=n===`horizontal`?`col-resize`:`row-resize`,e.classList.add(`bg-brand`)}),document.addEventListener(`mousemove`,e=>{if(!i)return;let s=n===`horizontal`?e.clientX:e.clientY,c=r?a-s:s-a,l=o+c;if(n===`horizontal`)l>200&&l<window.innerWidth*.7&&(t.style.width=`${l}px`,t.style.flex=`none`);else{let e=t.parentElement?.offsetHeight||window.innerHeight;l>100&&l<e*.8&&(t.style.height=`${l}px`,t.style.flex=`none`)}}),document.addEventListener(`mouseup`,()=>{i&&(i=!1,document.body.classList.remove(`resizing`),document.body.style.userSelect=``,document.body.style.cursor=``,e.classList.remove(`bg-brand`))})}function DD(e,t,n,r){if(!e||!t||!n||!r)return e=>{};function i(i){i===`problem`?(n.classList.remove(`hidden`),r.classList.add(`hidden`),r.classList.remove(`flex`),e.classList.add(`text-fg-primary`,`border-brand`),e.classList.remove(`text-fg-muted`,`border-transparent`),t.classList.add(`text-fg-muted`,`border-transparent`),t.classList.remove(`text-fg-primary`,`border-brand`)):(n.classList.add(`hidden`),r.classList.remove(`hidden`),r.classList.add(`flex`),t.classList.add(`text-fg-primary`,`border-brand`),t.classList.remove(`text-fg-muted`,`border-transparent`),e.classList.add(`text-fg-muted`,`border-transparent`),e.classList.remove(`text-fg-primary`,`border-brand`))}return e.addEventListener(`click`,()=>i(`problem`)),t.addEventListener(`click`,()=>i(`code`)),i}function OD(e,t,n,r){if(!e||!t)return;e.innerHTML=bD.LEFT_ARROW,t.innerHTML=bD.RIGHT_ARROW;function i(){let{currentExerciseId:e}=n.getState(),t=ao.findIndex(t=>t.id===e);t<ao.length-1&&(window.location.hash=`#`+ao[t+1].id,r(`problem`))}function a(){let{currentExerciseId:e}=n.getState(),t=ao.findIndex(t=>t.id===e);t>0&&(window.location.hash=`#`+ao[t-1].id,r(`problem`))}return e.addEventListener(`click`,a),t.addEventListener(`click`,i),{updateNavState:n=>{let r=ao.findIndex(e=>e.id===n),i=r>0,a=r<ao.length-1;e.disabled=!i,t.disabled=!a}}}function kD(e,t,n){let r=null;e.innerHTML=t,e.addEventListener(`click`,()=>{r?(clearTimeout(r),r=null,e.innerHTML=t,n()):(e.innerHTML=`<span class="text-xs font-bold tracking-wider">Discard changes? Click to confirm.</span>`,r=setTimeout(()=>{r=null,e.innerHTML=t},5e3))})}function AD(){let e=document.getElementById(`footer`);e&&(e.innerHTML=`
        <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <span class="text-xs text-fg-muted">
                <a href="${my.project_url}" target="_blank">Star on GitHub</a>
            </span>
            <span class="text-xs text-fg-muted">
                <a href="${my.project_url}/issues" target="_blank">Report an Error</a>
            </span>
            <span id="build-date" class="w-full sm:w-auto text-xs text-fg-muted order-last text-center">
              Last updated on August 12, 2026
            </span>
        </div>
    `)}var jD=[{action:`Save Code`,keys:[`Cmd/Ctrl`,`S`]},{action:`Indent`,keys:[`Tab`]},{action:`Unindent`,keys:[`Shift`,`Tab`]},{action:`Focus Out`,keys:[`Esc`,`Tab`]}],MD=[{action:`Run Code`,keys:[`Cmd/Ctrl`,`Enter`]},{action:`Previous Lesson`,keys:[`Cmd/Ctrl`,`[`]},{action:`Next Lesson`,keys:[`Cmd/Ctrl`,`]`]},{action:`Show Shortcuts`,keys:[`?`,`or`,`F1`]}];function ND(){$.shortcutsBtn&&($.shortcutsBtn.innerHTML=bD.KEYBOARD),$.shortcuts.closeBtn&&($.shortcuts.closeBtn.innerHTML=bD.CLOSE),PD(),$.shortcutsBtn?.addEventListener(`click`,FD),$.shortcuts.closeBtn?.addEventListener(`click`,ID),$.shortcuts.modal?.addEventListener(`click`,e=>{e.target===$.shortcuts.modal&&ID()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&$.shortcuts.modal&&!$.shortcuts.modal.classList.contains(`hidden`)&&ID()}),document.addEventListener(`keydown`,e=>{if((e.metaKey||e.ctrlKey)&&e.key===`Enter`){e.preventDefault(),e.stopPropagation(),$.runBtn.disabled||xD.run();return}if((e.metaKey||e.ctrlKey)&&e.key===`[`){e.preventDefault(),e.stopPropagation(),$.nav.prev&&!$.nav.prev.disabled&&$.nav.prev.click();return}if((e.metaKey||e.ctrlKey)&&e.key===`]`){e.preventDefault(),e.stopPropagation(),$.nav.next&&!$.nav.next.disabled&&$.nav.next.click();return}if(e.key===`F1`){e.preventDefault(),e.stopPropagation(),$.shortcuts.modal?.classList.contains(`hidden`)?FD():ID();return}let t=document.activeElement;if(!(t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable))&&e.key===`?`){e.preventDefault(),e.stopPropagation(),$.shortcuts.modal?.classList.contains(`hidden`)?FD():ID();return}},{capture:!0})}function PD(){if(!$.shortcuts.list)return;let e=navigator.platform.toUpperCase().indexOf(`MAC`)>=0,t=(t,n)=>`
            <div class="flex flex-col gap-3">
                <h3 class="text-xs font-bold text-fg-muted uppercase tracking-wider pb-2 border-b border-border-default">${t}</h3>
                <div class="flex flex-col">
                    ${n.map(t=>{let n=t.keys.map(t=>{let n=t;return t===`Cmd/Ctrl`&&(n=e?`⌘`:`Ctrl`),t===`Enter`&&(n=`↵`),t===`or`?`<span class="text-fg-muted text-xs mx-1">or</span>`:`<kbd class="bg-bg-app border border-border-default rounded px-1.5 py-0.5 text-xs font-mono text-fg-muted min-w-[20px] text-center inline-block">${n}</kbd>`}).reduce((e,n,r)=>{if(r===0)return n;let i=t.keys[r-1],a=t.keys[r];return i===`or`||a===`or`?e+n:e+`<span class="text-fg-muted text-xs mx-1">+</span>`+n},``);return`
                <div class="flex items-center justify-between py-3 border-b border-border-default last:border-0">
                    <span class="text-base text-fg-primary">${t.action}</span>
                    <div class="flex items-center">
                        ${n}
                    </div>
                </div>
            `}).join(``)}
                </div>
            </div>
        `;$.shortcuts.list.innerHTML=`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            ${t(`Editor`,jD)}
            ${t(`Navigation`,MD)}
        </div>
    `}function FD(){$.shortcuts.modal?.classList.remove(`hidden`),$.shortcuts.modal?.classList.add(`flex`)}function ID(){$.shortcuts.modal?.classList.add(`hidden`),$.shortcuts.modal?.classList.remove(`flex`)}function LD(){$.resetProgressBtn&&($.resetProgressBtn.innerHTML=bD.TRASH),$.resetProgress.closeBtn&&($.resetProgress.closeBtn.innerHTML=bD.CLOSE),$.resetProgressBtn?.addEventListener(`click`,RD),$.resetProgress.closeBtn?.addEventListener(`click`,zD),$.resetProgress.cancelBtn?.addEventListener(`click`,zD),$.resetProgress.confirmBtn?.addEventListener(`click`,()=>{localStorage.removeItem(`storage`),window.location.reload()}),$.resetProgress.modal?.addEventListener(`click`,e=>{e.target===$.resetProgress.modal&&zD()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&$.resetProgress.modal&&!$.resetProgress.modal.classList.contains(`hidden`)&&zD()})}function RD(){$.resetProgress.modal?.classList.remove(`hidden`),$.resetProgress.modal?.classList.add(`flex`)}function zD(){$.resetProgress.modal?.classList.add(`hidden`),$.resetProgress.modal?.classList.remove(`flex`)}function BD(e,t){if(!e)return;let n=jy();if(n.length<=1){e.innerHTML=``;return}let{currentLanguageId:r}=X.getState(),i=n.map(e=>{let n=!0;return t?.variants&&(n=e.id in t.variants),{...e,isAvailable:n}});if(!i.find(e=>e.id===r&&e.isAvailable)){let e=i.find(e=>e.isAvailable)||i[0];e&&e.id!==r&&setTimeout(()=>{X.getState().setLanguage(e.id)},0)}e.innerHTML=`
        <select id="language-select-dropdown" aria-label="Select Language" class="bg-bg-app border border-border-default text-fg-primary text-xs font-semibold px-2 py-0.5 rounded focus:outline-none focus:border-brand cursor-pointer transition-colors">
            ${i.map(e=>{let t=e.id===r?`selected`:``,n=e.isAvailable?``:`disabled`,i=e.isAvailable?e.name:`${e.name} (N/A)`;return`<option value="${e.id}" ${t} ${n} class="bg-bg-surface text-fg-primary">${i}</option>`}).join(``)}
        </select>
    `;let a=e.querySelector(`#language-select-dropdown`);a&&a.addEventListener(`change`,e=>{let t=e.target.value;X.getState().setLanguage(t)})}SD(),ND(),LD(),AD(),lD();var VD=DD($.tabs.problem,$.tabs.code,$.description.mobile,$.editorConsolePanel),HD=OD($.nav.prev,$.nav.next,X,VD);wD($.sidebar.toggle,$.sidebar.nav),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{NT(e.matches),GD()});var UD=null,WD=null;function GD(){let{currentExerciseId:e,currentLanguageId:t,completedIds:n}=X.getState(),r=UD,i=WD,a=r!==null&&e!==r,o=i!==null&&t!==i;if(UD=e,WD=t,(a||o)&&r&&i){let e=PT();e&&X.getState().saveUserCode(r,i,e)}let s=ao.find(t=>t.id===e);if(!s)return;let c=Iy(s,t),l=uD(s.description),u=`<h1 class="text-3xl font-bold mb-6 text-fg-primary">${s.id} ${s.title}</h1>`+l;$.description.desktop&&($.description.desktop.innerHTML=u),$.description.mobile&&($.description.mobile.innerHTML=u),HD&&HD.updateNavState(e),dD(),CD($.sidebar.list,ro,e,n),TD($.progressContainer,ro,e,n),BD($.languageSelectorContainer,s);let d=Fy(t);MT(X.getState().getUserCode(e,t)||c.initialCode,d,()=>{X.getState().saveUserCode(e,t,PT()),ET(`Saved!`)}),(a||o)&&($.console.textContent=`// Ready...`)}X.subscribe(GD),$.runBtn.addEventListener(`click`,()=>xD.run()),$.resetBtn&&kD($.resetBtn,bD.TRASH,()=>{let{currentExerciseId:e,currentLanguageId:t}=X.getState(),n=ao.find(t=>t.id===e);if(!n)return;let r=Iy(n,t);X.getState().saveUserCode(e,t,r.initialCode)}),$.clearConsoleBtn&&($.clearConsoleBtn.innerHTML=bD.TRASH,$.clearConsoleBtn.addEventListener(`click`,()=>{$.console&&($.console.textContent=``)})),$.branding.brandLink&&$.branding.brandLink.addEventListener(`click`,e=>{e.preventDefault();let t=ao[0]?.id;t&&(window.location.hash=`#${t}`,X.getState().setCurrent(t))}),window.addEventListener(`hashchange`,()=>{let e=window.location.hash.slice(1);ao.find(t=>t.id===e)?X.getState().setCurrent(e):!e&&ao.length>0&&X.getState().setCurrent(ao[0].id)}),ED($.resize.dragHDesktop,$.resize.paneProblem,`horizontal`),ED($.resize.dragVConsole,$.resize.paneConsole,`vertical`,!0),xD.waitForCompiler();var KD=window.location.hash.slice(1)||ao[0].id;X.getState().setCurrent(KD),GD();