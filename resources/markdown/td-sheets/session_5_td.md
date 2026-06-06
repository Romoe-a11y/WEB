## Cadi Ayyad University

Higher School of Technology of Safi

Computer Science Department · Web Techniques

Prof. Soufiane Hourri

## Session 5 - Introduction to PHP and Dynamic Web Pages

Objective: Students discover PHP server-side scripting: variables, echo, conditions, and loops.

## 1. Key Concepts

## What is PHP?

PHP (Hypertext Preprocessor) is a server-side scripting  language. Unlike HTML/CSS which run in the browser, PHP code executes on the web server. The server runs the PHP, generates HTML, and sends only the HTML to the browser. The user never sees the PHP source code.

## PHP Tags and Syntax

```
<?php // This is a comment $name = 'Safi';          // string variable $year  = 2026;           // integer variable $gpa   = 15.75;          // float variable echo 'City: ' . $name;   // concatenate with dot (.) ?>
```

- All variables start with $ .
- echo outputs content to the browser.
- Statements end with a semicolon ; .
- Strings use single or double quotes. Concatenation uses the dot operator . .

## Conditions

```
<?php $score = 14; if ($score >= 10) { echo 'Passed (' . $score . '/20)'; } elseif ($score >= 8) { echo 'Borderline'; } else { echo 'Failed'; } ?>
```

## Loops

```
<?php // for loop: count from 1 to 5 for ($i = 1; $i <= 5; $i++) { echo $i . ' '; } // Output: 1 2 3 4 5 // while loop: repeat while condition is true $x = 10; while ($x > 0) { echo $x . ' '; $x = $x - 2; } // Output: 10 8 6 4 2 ?>
```

## 2. Guided Examples

## Example A - Mixing PHP and HTML

```
<?php $module = 'Web Techniques'; $students = 32; ?> <!DOCTYPE html> <html><body> <h1><?php echo $module; ?></h1> <p>Enrolled students: <?php echo $students; ?></p> <?php if ($students > 30) { echo '<p><b>Large class!</b></p>'; } ?> </body></html>
```

## Example B - for loop generating HTML

```
<?php echo '<ul>'; for ($i = 1; $i <= 4; $i++) { echo '<li>Student ' . $i . '</li>'; } echo '</ul>'; ?>
```

Output: an unordered list with items Student 1, Student 2, Student 3, Student 4.

## 3. Exercises

## Exercise 1 - Trace the Loop - Step by Step

For the PHP loop below, complete the trace table by filling in the value of $i and $total after each iteration. Then write the final output.

```
<?php $total = 0; for ($i = 1; $i <= 5; $i++) { $total = $total + $i; } echo 'Sum = ' . $total; ?>
```

| Iteration   | $i   | $total (after step)   | Condition ($i <= 5)   |
|-------------|------|-----------------------|-----------------------|
| 1           |      |                       |                       |
| 2           |      |                       |                       |
| 3           |      |                       |                       |
| 4           |      |                       |                       |
| 5           |      |                       |                       |
| End         |      |                       | False -loop exits     |

Final output: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 2 - Predict the Output

Write what each PHP snippet will output in the browser. Show your reasoning.

## Snippet A:

```
<?php $a = 4; $b = 7; echo ($a * $b) . ' is ' . ($a * $b > 25 ? 'big' : 'small'); ?>
```

Output: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Snippet B:

```
<?php $n = 3; $result = ''; while ($n <= 12) { $result .= $n . '-'; $n += 3; } echo $result; ?>
```

Output: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 3 - Write a PHP Function

In PHP, you can define reusable functions just as in JavaScript. Below is the syntax; write the function described.

```
function functionName($param1, $param2) { // body return result; }
```

Write a PHP function called letterGrade that:

- Takes one parameter: $score (a number out of 20).
- Returns 'A' if score &gt;= 16.
- Returns 'B' if score &gt;= 12.
- Returns 'C' if score &gt;= 10.
- Returns 'F' otherwise.

Then write the echo statement that calls it with score = 13 and shows the result.

## Exercise 4 - Mixed HTML and PHP - Complete the Page

Complete the missing PHP code in the blanks so that the page works as described in the comments.

```
<?php $student = 'Khadija'; $score   = 11; $max     = 20; ?> <!DOCTYPE html><html><body> <h1>Result for <?php echo _______ ; ?></h1> <p>Score: <?php echo _______ . '/' . _______ ; ?></p> <?php if ( _______ >= 10) { echo '<p style="color:green">PASSED</p>'; } else { echo _______ ;   // print FAILED in red } ?> </body></html>
```

## Exercise 5 - PHP Debugging - Find 5 Errors

The following PHP script contains 5 errors (syntax, logic, and type errors). Identify each error, state the line, explain what is wrong, and write the fix.

```
<?php name = 'Ali'; $age = '25'; echo 'Hello ' . name . ', you are ' . $age . ' years old.'; if $age > 18 { echo 'Adult'; } else echo 'Minor' } for ($i == 0; $i < 3; $i++) { echo $i; } ?>
```

```
Error 1 (line __): __________________________________________________ Error 2 (line __): __________________________________________________ Error 3 (line __): __________________________________________________
```

| Error 4 (line __): __________________________________________________   |
|-------------------------------------------------------------------------|
| Error 5 (line __): __________________________________________________   |

4. Session Recap

| PHP is a server-side language: the server runs it and sends HTML to the browser. Variables begin with $ and hold strings, numbers, or booleans. echo outputs content; the dot (.) concatenates strings. if/elseif/else handles decision branches. for and while loops repeat code a controlled number of times. PHP can generate HTML dynamically -making pages interactive and data-driven. Next session: JavaScript, which runs on the client side.   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|