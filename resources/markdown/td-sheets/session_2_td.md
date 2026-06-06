## Cadi Ayyad University

Higher School of Technology of Safi

Computer Science Department · Web Techniques

Prof. Soufiane Hourri

## Session 2 - Organizing Content in HTML

Objective: Students  learn  and  apply  common  HTML  elements  to  structure  and  enrich  web  page content.

## 1. Key Concepts

## Text Headings and Paragraphs

HTML provides six heading levels: &lt;h1&gt; (largest, most important) through &lt;h6&gt; (smallest). Use headings to give the page a clear hierarchy. &lt;p&gt; defines a paragraph. &lt;br&gt; forces a line break inside text; &lt;hr&gt; draws a horizontal divider.

## Lists

An ordered list (&lt;ol&gt;) numbers items automatically. An unordered list (&lt;ul&gt;) uses bullet points. Both use &lt;li&gt; for each item. Lists can be nested.

## Hyperlinks and Images

| Concept                     | Meaning                                               |
|-----------------------------|-------------------------------------------------------|
| <a href='URL'>text</a>      | Creates a clickable link. href gives the destination. |
| <img src='file' alt='desc'> | Embeds an image. src = path, alt = text description.  |

The alt attribute on &lt;img&gt; is required for accessibility: it is read aloud by screen readers and displayed if the image fails to load.

## Tables

| Concept           | Meaning                                          |
|-------------------|--------------------------------------------------|
| <table>           | Creates a table.                                 |
| <tr>              | Table row.                                       |
| <th>              | Header cell -bold and centred by default.        |
| <td>              | Data cell.                                       |
| colspan / rowspan | Attribute to merge cells across columns or rows. |

## 2. Guided Examples

## Example A - Nested list

```
<ol> <li>Front-End Technologies <ul> <li>HTML</li> <li>CSS</li> </ul> </li> <li>Back-End Technologies <ul> <li>PHP</li> <li>Node.js</li> </ul> </li> </ol>
```

## Example B - Table with a header row

```
<table> <tr><th>Module</th><th>Hours/Week</th><th>Grade</th></tr> <tr><td>Web Techniques</td><td>4</td><td>16</td></tr> <tr><td>Algorithms</td><td>3</td><td>14</td></tr> </table>
```

## 3. Exercises

## Exercise 1 - From Plain Text to HTML

Convert the following plain-text content into a valid, complete HTML page. Choose appropriate tags for each element. The page title should be 'Library Catalogue' .

```
Library Catalogue ‹ main heading Available Sections ‹ sub-heading 1. Science 2. History 3. Literature New Arrivals this Month ‹ sub-heading - The Art of Thinking Clearly - A Brief History of Time Visit our website: www.library.ma Last updated: April 2026 ‹ small note (use <p>)
```

Write your complete HTML document below:

## Exercise 2 - Predict and Explain

Read the HTML below and answer all four questions that follow.

```
<h2>Top 3 Programming Languages</h2> <ol> <li>Python</li> <li>JavaScript</li> <li>PHP</li> </ol> <p>Source: <a href='https://tiobe.com'>TIOBE Index</a></p> <img src="chart.png" alt="Popularity chart">
```

- a) How will the list items appear in the browser? (numbered or bulleted?)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- b) What is the clickable text of the hyperlink?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- c) What happens if chart.png does not exist?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- d) What tag would you change to make the list use bullet points instead of numbers?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 3 - Complete and Fix the Table

The  table  below  is  missing  several  tags  and  contains  two  logical  errors.  Rewrite  the  corrected, complete table HTML (add missing tags and fix the errors).

```
<table> <tr> <td>Student</td> <td>Score</td> <td>Result</td> <tr> <th>Yasmine</th> <td>17</td> <td>Pass</td> </tr> <tr> <th>Omar</th> <td>8</td> <td>Fail</td> </tr> </table>
```

## Errors identified:

1. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

2. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Corrected HTML (write below):

## Exercise 4 - Spot the Errors

The following HTML snippet contains 4 errors . Identify each one and explain what is wrong and how to fix it.

```
<a href=https://www.example.com>Visit</a> <img src="photo.jpg"> <ul> <li>First item</li> <li>Second item</il> <p>Third item</p> </ol>
```

Error 1 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 2 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 3 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 4 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 5 - Design Challenge - Course Schedule Table

Design a weekly course schedule table in HTML for a fictional student. The table must satisfy all of the following requirements:

- At least 4 columns: Time, Monday, Wednesday, Friday

- At least 4 data rows (time slots)

- A proper header row using &lt;th&gt; tags

- At least one cell that spans two columns using colspan='2'

- A link somewhere in the table to a fictional course page

Write your HTML below:

## 4. Session Recap

HTML provides rich elements to organize content: headings (h1-h6) for hierarchy, &lt;p&gt; for paragraphs, lists (&lt;ul&gt;/&lt;ol&gt;/&lt;li&gt;) for items, &lt;a&gt; for links, &lt;img&gt; for images, and &lt;table&gt; for structured data. Each element carries semantic meaning - choosing the right tag matters for readability, accessibility, and browser rendering. In the next session, we add CSS to control how these elements look.