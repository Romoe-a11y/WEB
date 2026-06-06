## Cadi Ayyad University

Higher School of Technology of Safi

Computer Science Department · Web Techniques

Prof. Soufiane Hourri

## Session 1 - Discovering HTML and Basic Page Structure

Objective: Students understand what HTML is and how a simple web page is structured.

## 1. Key Concepts

## What is HTML?

HTML stands for HyperText Markup Language . It is the standard language used to create and structure content on the web. HTML is a markup language - it describes the structure of a document using tags written in angle brackets.

## Opening and Closing Tags

Most HTML elements have an opening tag &lt;tagname&gt; and a closing tag &lt;/tagname&gt; .  The content between them is affected by the tag. A few tags are self-closing (like &lt;br&gt; and &lt;img&gt; ).

## Standard HTML Document Structure

Every HTML document follows this skeleton:

```
<!DOCTYPE html> <html> <head> <title>Page Title</title> </head> <body> <h1>Main Heading</h1> <p>A paragraph of text.</p> </body> </html>
```

| Concept         | Meaning                                                                   |
|-----------------|---------------------------------------------------------------------------|
| <!DOCTYPE html> | Declares the document type (HTML5). Must be the very first line.          |
| <html>          | Root element -all content lives inside it.                                |
| <head>          | Contains metadata: title, charset, links to CSS/JS (not visible on page). |
| <title>         | Text shown in the browser tab.                                            |
| <body>          | All visible page content goes here.                                       |

Note: HTML tags are case-insensitive, but the convention is to write them in lowercase. Proper nesting is required - inner tags must be closed before outer ones.

## 2. Guided Example

## Annotated HTML page

```
<!DOCTYPE html> <html> <head> <meta charset='UTF-8'> <title>My Portfolio</title> </head> <body> <h1>Welcome to My Portfolio</h1> <h2>About Me</h2> <p>I am a first-year Computer Science student at EST Safi.</p> </body> </html>
```

- Line 1 &lt;!DOCTYPE html&gt; : browser knows this is HTML5.
- &lt;meta charset='UTF-8'&gt; : sets character encoding (accents, Arabic, etc.).
- &lt;title&gt; : only affects the browser tab, not the visible page.
- &lt;h1&gt; is the main heading; &lt;h2&gt; is a sub-heading.
- &lt;p&gt; wraps regular text into a paragraph block.

## 3. Exercises

## Exercise 1 - Structural Analysis

Read the HTML document below carefully. Then answer the questions that follow without looking at the concepts section .

```
<!DOCTYPE html> <html> <head> <title>Science Club</title> </head> <body> <h1>Welcome to the Science Club</h1> <h2>Our Goal</h2> <p>We explore the world through experiments.</p> <p>Join us every Wednesday at 4pm.</p> </body> </html>
```

- a) How many headings does this document have? What levels are they?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- b) What text will appear in the browser tab?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- c) Which tag contains ALL the visible content?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- d) If you removed the &lt;!DOCTYPE html&gt; line, what would change?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 2 - Tag Nesting and Order

The 10 lines below form a valid HTML document but are in the wrong order . Write the correct line numbers in the boxes (1 = first, 10 = last).

| Line   | Content                      | Position   |
|--------|------------------------------|------------|
| A      | </html>                      | [ ]        |
| B      | <body>                       | [ ]        |
| C      | <title>Chemistry Lab</title> | [ ]        |
| D      | <!DOCTYPE html>              | [ ]        |
| E      | </body>                      | [ ]        |
| F      | <p>Welcome to the lab.</p>   | [ ]        |
| G      | </head>                      | [ ]        |
| H      | <html>                       | [ ]        |
| I      | <h1>Chemistry Lab</h1>       | [ ]        |
| J      | <head>                       | [ ]        |

## Exercise 3 - Write a Complete HTML Document

A student  wants  to  create  a  personal  web  page  called 'My Academic Profile' .  On  paper,  write  a complete, valid HTML document that includes:

- The correct DOCTYPE declaration

- A title visible in the browser tab: 'My Academic Profile'

- A main heading with your name

- A sub-heading: 'My Modules This Semester'

- A paragraph describing at least two modules you study

- A second paragraph about your professional goal after graduation

Your answer (use the space below):

## Exercise 4 - Multi-Error Debugging

The following HTML document contains 5 errors (structural, spelling, and nesting). Identify each error precisely and write the corrected version of each faulty line.

```
<!DOCTYP html> <HTML> <head> <title>My Blog<title> </head> <body> <h1>Welcome to My Blog</h2> <p>This is my first post. </BODY> <html>
```

Error 1 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 2 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 3 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 4 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 5 (line \_\_): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Exercise 5 - Short Analysis: Why Does Structure Matter?

| A classmate argues: "The browser displays the page correctly even without the <head> and <!DOCTYPE>, so they are useless."                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Do you agree or disagree? Write a short justification (3-5 sentences) explaining the purpose of <!DOCTYPE html> and the <head> section, and give one concrete example of why omitting them can cause problems. |

## 4. Session Recap

| HTML (HyperText Markup Language) is the foundation of every web page. It uses tags- written in angle brackets -to define the structure of content. Every valid HTML5 document starts with <!DOCTYPE html> and contains <html>, <head>, <title>, and <body>. Proper nesting and correct tag spelling are essential for browsers to render pages correctly. In the next session, we will explore the many HTML elements used to enrich page content.   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|