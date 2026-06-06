## Cadi Ayyad University

Higher School of Technology of Safi

Computer Science Department · Web Techniques

Prof. Soufiane Hourri

## Session 6 - Introduction to JavaScript and Client-Side Interaction

Objective: Students understand JS syntax, functions, events, and basic DOM manipulation.

## 1. Key Concepts

## What is JavaScript?

JavaScript (JS) runs in the browser after  the  page loads. It makes pages interactive by responding to user actions (clicks, typing, mouse movement) without reloading the page. Unlike PHP (server-side), JS runs entirely on the client - the user's computer executes it.

## Variables, Types, and Operators

```
let name   = 'Alice';          // string let age    = 20;               // number let passed = true;             // boolean const PI   = 3.14;            // constant (cannot be reassigned) let msg = 'Hello ' + name;    // string concatenation let area = PI * 5 * 5;        // arithmetic let check = (age >= 18);      // comparison -> boolean
```

Use let for variables that may change. Use const for constants. Avoid var (old style).

## Output Methods

| Concept                 | Meaning                                               |
|-------------------------|-------------------------------------------------------|
| alert('msg')            | Pop-up dialog box -blocks the page.                   |
| console.log('msg')      | Outputs to the browser's developer console (F12).     |
| prompt('question')      | Pop-up input box -returns the user's typed value.     |
| document.write('html' ) | Writes HTML directly into the document (rarely used). |

## Functions

```
// Declaration function greet(name, time) { return 'Good ' + time + ', ' + name + '!'; } // Call let msg = greet('Soufiane', 'morning'); console.log(msg);   // Good morning, Soufiane!
```

## Events and the DOM

The DOM (Document Object Model) is the browser's internal representation of the HTML page. JavaScript can read and change DOM elements.

```
<!-- HTML --> <h2 id="status">Loading...</h2> <button onclick="updateStatus()">Check</button> <script> function updateStatus() { let el = document.getElementById('status'); el.innerText = 'System is running!'; el.style.color = 'green'; } </script>
```

## 2. Guided Examples

## Example A - Input, condition, and output

```
<script> let score = parseInt(prompt('Enter your score (0-20):')); let grade; if (score >= 16)      { grade = 'A'; } else if (score >= 12) { grade = 'B'; } else if (score >= 10) { grade = 'C'; } else                  { grade = 'F'; } alert('Your grade is: ' + grade); </script>
```

## Example B - Function and DOM update

```
<p id="counter">Clicks: 0</p> <button onclick="increment()">Click me</button> <script> let count = 0; function increment() { count++; document.getElementById('counter').innerText = 'Clicks: ' + count; } </script>
```

## 3. Exercises

## Exercise 1 - Trace the Function Calls

Study  the  functions  and  the  calls  at  the  bottom.  Write  the  exact  output  each console.log call produces.

```
function power(base, exp) { let result = 1; for (let i = 0; i < exp; i++) { result = result * base; } return result; } function describe(n) { if (n % 2 === 0) { return n + ' is even'; } else             { return n + ' is odd';  } } console.log(power(2, 4));          // Line A console.log(power(3, 0));          // Line B console.log(describe(7));          // Line C console.log(describe(power(2,3))); // Line D
```

```
Line A output: ______________________________________________ Line B output: ______________________________________________ Line C output: ______________________________________________ Line D output: ______________________________________________ (explain step-by-step) _______________________________________________________
```

## Exercise 2 - Write a Complete JavaScript Feature

On paper, write the HTML and JavaScript for a small interactive feature:

## A simple temperature converter.

- There is a paragraph with id result showing 'Result: --'.
- There is a button labelled 'Convert 100°C to Fahrenheit'.
- When clicked, it calls a function convert() .
- The function calculates F = (C × 9/5) + 32 for C = 100.
- It updates the paragraph text to show: 'Result: 212°F'.

Write your complete HTML + JavaScript below:

## Exercise 3 - Match: Command to Role and Behaviour

For each JavaScript expression in column A, write the letter of the matching description from column B. Then write the expected output or effect.

| Column A (expression)           | Match   | Column B (description)                                  |
|---------------------------------|---------|---------------------------------------------------------|
| typeof 42                       | [ ]     | a) Stores the user's keyboard input in a variable       |
| let x = prompt('?')             | [ ]     | b) Returns the string 'number'                          |
| parseInt('15px')                | [ ]     | c) Selects the element with id 'box'                    |
| document.getElementById('box ') | [ ]     | d) Converts a string starting with digits to an integer |
| arr.length                      | [ ]     | e) Returns the number of items in an array              |

## Exercise 4 - Analyse and Extend

Read the function below and answer all questions.

```
function classify(score) { if (score < 0 || score > 20) { return 'Invalid score'; } let grade = Math.floor(score / 4); let labels = ['F', 'F', 'C', 'B', 'A', 'A']; return labels[grade]; }
```

- a) What does Math.floor(score / 4) compute for score = 17?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- b) What does classify(9) return? Show each step.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- c) What does classify(21) return? Why?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- d) Extend the function: add a check that converts score to a number with Number(score) before the if-statement, and returns 'Invalid score' if the result is NaN .

## Exercise 5 - JavaScript Debugging - Find 5 Errors

The script below contains 5 errors (syntax, naming, logic, type). For each error, state the line number, what is wrong, and write the corrected line.

```
<script> Let total = 0; const prices = [10, 25, 8, 40]; for (let i = 0; i <= prices.length; i++) { total =+ prices[i]; } function showTotal { document.GetElementById('output').innerText = 'Total: ' + total; } showTotal(); </script>
```

```
Error 1 (line __): __________________________________________________ Error 2 (line __): __________________________________________________ Error 3 (line __): __________________________________________________ Error 4 (line __): __________________________________________________ Error 5 (line __): __________________________________________________
```

## 4. Session Recap

JavaScript runs in the browser (client-side) and makes pages interactive. let and const declare variables; functions group reusable logic. if/else handles decisions; for/while repeat actions. alert, console.log, and prompt communicate with the user. The DOM (document.getElementById) connects JavaScript to HTML elements, allowing scripts to read and change content, styles, and structure in real time. JavaScript is the third pillar of web development, alongside HTML and CSS.