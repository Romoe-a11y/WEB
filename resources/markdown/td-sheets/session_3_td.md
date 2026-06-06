## Cadi Ayyad University

Higher School of Technology of Safi

Computer Science Department · Web Techniques

Prof. Soufiane Hourri

## Session 3 - Introduction to CSS and Styling

Objective: Students  understand  CSS  syntax,  the  three  ways  to  apply  styles,  and  common properties.

## 1. Key Concepts

## What is CSS?

CSS (Cascading Style Sheets) controls the appearance of HTML elements: colours, fonts, sizes, spacing, and layout. HTML defines what is on the page; CSS defines how it looks .

## CSS Syntax

A CSS rule is made of three parts:

- Selector : which element(s) to target.
- Property : which visual aspect to change.
- Value : what to set the property to.

```
selector { property: value;    /* one declaration */ property: value;    /* rules can have many declarations */ }
```

## Three Ways to Apply CSS

| Concept   | Meaning                                                                       |
|-----------|-------------------------------------------------------------------------------|
| Inline    | style='...' attribute directly on the HTML tag. Overrides all others.         |
| Internal  | Inside a <style> tag in the <head> section. Applies to that page only.        |
| External  | In a separate .css file linked with <link rel='stylesheet' href='style.css'>. |

External CSS is the preferred approach for real projects - it keeps style and structure separate and one .css file can style an entire website.

## Essential CSS Properties

Concept Meaning

| color            | Text colour.                                             |
|------------------|----------------------------------------------------------|
| background-color | Background fill of an element.                           |
| font-size        | Text size. Always specify a unit: px, em, or %.          |
| font-family      | Typeface. Provide a fallback: Arial, sans-serif.         |
| text-align       | Horizontal text alignment: left, center, right, justify. |
| text-decoration  | Underline, overline, line-through, or none.              |
| font-weight      | Text thickness: normal or bold (or 100-900).             |

## 2. Guided Examples

## Example A - Internal CSS

```
<!DOCTYPE html> <html> <head> <style> body  { background-color: #f0f4f8; font-family: Arial, sans-serif; } h1    { color: #1A3A5C; text-align: center; font-size: 28px; } p     { color: #333333; font-size: 14px; text-align: justify; } </style> </head> <body> <h1>Welcome</h1> <p>This page uses internal CSS.</p> </body> </html>
```

## Example B - External CSS (style.css)

```
/* style.css */ h2 { color: darkblue; text-decoration: underline; } a { color: orangered; font-weight: bold; }
```

## 3. Exercises

## Exercise 1 - Decompose and Analyse CSS Rules

For  each  CSS  rule  below,  fill  in  the  table  with  the selector , property ,  and value .  Then  write  a one-sentence description of the visual effect.

```
/* Rule A */  p { color: #2E4057; font-size: 16px; } /* Rule B */  h1 { text-align: center; background-color: navy; color: white; } /* Rule C */  body { font-family: Georgia, serif; line-height: 1.6; }
```

| Rule   | Selector   | Properties & Values   | Visual effect   |
|--------|------------|-----------------------|-----------------|
| A      |            |                       |                 |
| B      |            |                       |                 |
| C      |            |                       |                 |

## Exercise 2 - Write CSS from a Description

Write the CSS rules (using internal CSS inside a &lt;style&gt; block) for a web page that must look like this:

- The page background is light grey ( #f5f5f5 ).
- All headings (&lt;h1&gt; and &lt;h2&gt;) are dark red ( #8B0000 ), centred, and use Arial font.
- Paragraphs have font size 14px, justified text, and a line-height of 1.5.
- All links are green, bold, and have no underline ( text-decoration: none ).

Write your CSS below:

## Exercise 3 - Three Methods - Compare and Choose

For each scenario below, state which CSS method (inline, internal, or external) is most appropriate and explain why in one sentence.

| Scenario                                                               | Best method   | Reason   |
|------------------------------------------------------------------------|---------------|----------|
| You want a quick red text on one specific word.                        |               |          |
| A website has 20 pages, all sharing the same colours and fonts.        |               |          |
| You are writing a single-page prototype and want styles near the HTML. |               |          |
| You need to override one style for exactly one element on one page.    |               |          |

## Exercise 4 - Predict the Rendered Output

Read the complete HTML+CSS page below. Describe in words exactly how it would look in a browser. Be precise about colours, sizes, and alignment.

```
<style> body { background-color: black; color: white; font-family: Courier; } h1   { color: gold; text-align: center; font-size: 36px; } p    { font-size: 12px; text-decoration: underline; } </style> <body> <h1>Hacker Zone</h1> <p>All systems operational.</p> <p>Access granted.</p> </body>
```

Description of how the page looks:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 5 - Debug the CSS

The following CSS block is meant to style an article page but contains 5 errors . Identify and fix each one.

```
body { background colour: lightyellow; font-family: Arial } h1 { color: darkblue; font-size: 24; text-align: centre; } p { colour: #333; line-height 1.5; }
```

Error 1: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 2: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 3: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 4: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Error 5: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 4. Session Recap

CSS (Cascading Style Sheets) separates content from presentation. A CSS rule always has a selector, one or more properties, and their values. CSS can be applied inline (on one tag), internally (in a &lt;style&gt; block), or externally (in a .css file). Key properties include color, background-color, font-size, font-family, and text-align. Next session, we explore the box model and layout.