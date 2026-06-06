```
Cadi Ayyad University Higher School of Technology of Safi Computer Science Department · Web Techniques Prof. Soufiane Hourri
```

## Session 4 - CSS Layout, Boxes, and Better Page Design

Objective: Students master the CSS box model, selectors (class/id), and basic page layout.

## 1. Key Concepts

## The CSS Box Model

Every HTML element is a rectangular box with four layers from inside to outside: Content (text/image), Padding (space inside the border), Border (the visible line), and Margin (space outside the border). The total rendered width of an element equals: width + left padding + right padding + left border + right border + left margin + right margin.

```
div { width: 300px;     /* content width */ padding: 20px;    /* 20px on all sides */ border: 2px solid #333; margin: 15px; } /* Total rendered width = 300 + 40 + 4 + 30 = 374px */
```

## Classes and IDs

A class ( .classname ) can be applied to many elements. An id ( #idname ) must be unique on the page. Inline styles override internal/external styles; IDs override class rules; class rules override element rules this is called CSS specificity .

```
/* Class: reusable */ .card   { background-color: #fff; border: 1px solid #ccc; padding: 16px; } /* ID: unique element */ #navbar { background-color: #1A3A5C; color: white; padding: 10px; }
```

## Page Layout Zones

| Concept   | Meaning                                 |
|-----------|-----------------------------------------|
| header    | Top zone: site title, navigation, logo. |
| main      | Central zone: primary page content.     |
| sidebar   | Optional side zone: secondary info.     |

footer

## 2. Guided Examples

## Example - Styled page layout with classes and IDs

```
/* CSS */ #header  { background-color: #1A3A5C; color: white; text-align: center; padding: 20px; } #footer  { background-color: #333; color: #ccc; text-align: center; padding: 10p x; } .article { width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; font-family: Arial; } .highlight { background-color: yellow; font-weight: bold; } <!-- HTML --> <div id="header"><h1>My Blog</h1></div> <div class="article"> <h2>Post Title</h2> <p>Body text. <span class="highlight">Important word.</span></p> </div> <div id="footer"><p>Copyright 2026</p></div>
```

## 3. Exercises

## Exercise 1 - Box Model Calculation

A  developer  writes  the  following  CSS  rule.  Calculate  the total  rendered  width of  the  element  on screen, showing all steps of your calculation.

```
.panel { width: 400px; padding-left: 25px; padding-right: 25px; border: 3px solid black; margin-left: 40px; margin-right: 40px; }
```

Calculation:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Total rendered width = \_\_\_\_\_\_\_\_\_\_ px

Bottom zone: copyright, contact, links.

Now describe what changes if you add box-sizing: border-box; to this rule. How does the total rendered width change, and why?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Exercise 2 - Class vs ID - Specificity

Read the following CSS and HTML. Determine the exact colour that each element will display, and explain which rule wins and why.

```
/* CSS */ p           { color: black; } .info       { color: blue; } #warning    { color: red; } <!-- HTML --> <p>Normal paragraph.</p> <p class="info">Info paragraph.</p> <p id="warning" class="info">Warning paragraph.</p> <p id="warning">Another warning.</p>
```

| Paragraph           | Colour displayed   | Reason (which rule wins?)   |
|---------------------|--------------------|-----------------------------|
| 'Normal paragraph'  |                    |                             |
| 'Info paragraph'    |                    |                             |
| 'Warning paragraph' |                    |                             |
| 'Another warning'   |                    |                             |

## Exercise 3 - Style a Page Section from a Description

Write complete CSS (internal &lt;style&gt; block) and matching HTML to produce a page that has exactly these visual characteristics:

- A header div with id page-header : dark navy background, white centred text, 30px padding.
- A main content area with class content-box : white background, 600px wide, centred (use margin: auto ), 20px padding, 1px solid grey border.
- A footer div with id page-footer : dark grey background, light grey text, small font (12px), centred.
- Paragraphs inside the content box: Arial font, 15px size, 1.6 line-height.

Write your CSS and HTML below:

## Exercise 4 - Read, Trace, and Describe

Study the CSS block below. For each numbered comment, write what visual change it produces.

```
.profile-card { width: 250px;                    /* 1 */ height: 300px;                   /* 2 */ padding: 15px;                   /* 3 */ border: 2px dashed #2E6DA4;       /* 4 */ margin: 20px auto;               /* 5 */ background-color: #EAF2FB;        /* 6 */ font-family: Arial, sans-serif;  /* 7 */ border-radius: 8px;              /* 8 */ }
```

![Image](data:image/png;base64,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AGiIm+ZLf66SAYAN1BYAbKC2AGADtQUAG6gtANhAbQHABmoLADZQWwCwgdoCgA3UFgBsoLYAYAO1BQAbqC0A2EBtAcCGGfZuOAylxHVEKYkTiXnUNwA0JGVttY7C2m9vuHl4eOS8c89atXpQkmR2BgYAC0qalQSlwlrt45/8zBXf+rc9+0fe+p6P3XjTbeKlnx0DwPEnVW2lVq729/V95p8/+sGPvX/1yuW33v7HWRsYACwoaWqbmKZ87s1vvtj13E985BP33Lf5+c979qwNDAAWlJT3JCglvpvESXdXV3dnx32btkrMui0AzCzdum2xWLzn9rt6e7oue+db3vi6V62/+tridCHdluoAcFxKU1utiqXyxy//7PofXntgePctt92xeKAvyASzNjYAWDjS1DZOenq63/vOS39+3W/e8rYPJon5xw+9y/V9MfY3QAeAvzAp799Kkmedv27dM84slsot7W1iDN/gAACNSH+3bC1yXLeltUXiSJjUAkBjjul7E4xh9QAAUuGpNABgA7UFABuoLQDYQG0BwAZqCwA2UFsAsIHaAoAN1BYAbKC2AGADtQUAG6gtANhAbQHABmoLADZQWwCwgdoCgA0zPN/WiBgjc/jUcJ6jC2BhOGJtlUgYJaMHy76r7RdPKalU4yhO4oTcApiniuVa4GUbPPiItTUijlb5jBcEzhzMbZXSKgyjpLXJt35uAGhIHBulGj34aCsJjla5jBtk3DmpbRTHSkku61k/NwA0pFipNX7wTOu29YXbufhq/tDmZyzcApivUvWJexIAwAZqCwA2UFsAsIHaAoAN1BYAbKC2AGADtQUAG6gtANhAbQHABmoLADZQWwCwgdoCgA3UFgBsONbaKiWuK40/2REAjm/HVFulkijevXNXLawRXABoxDHV1vN+/NNfvv2/f/zAxEHRrEUAwMxmeJr4YXjelvs3f+2bV00XSnEcM7cFgEaknJlqXZic+trXr7rouef3L+o1bKwAAI1JV9s4Md/89voVy5b8l5c+35jE9zzmtgDQiDS19bzNm7d+67tXb3tox2e/8PWNmx648qofVoslggsAM0qzbhvHPV0d73vXZZVquGfvvlwu29vdpR2ukgHAzNLUNkl6+3pe/ZpXiONs3/LAxk1bX3Dh+V4QSBTN2vAAYIFIeU9CYiQMRWT50sXf/PK/BIFPagGgEenv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)

|   # | What it does visually   |
|-----|-------------------------|
|   1 |                         |
|   2 |                         |
|   3 |                         |
|   4 |                         |
|   5 |                         |
|   6 |                         |
|   7 |                         |
|   8 |                         |

## Exercise 5 - Find and Correct - 4 CSS Errors

The stylesheet below has 4 errors (syntax, value, and logic errors). Identify each one, state why it is wrong, and write the correct version.

```
#main-title { colour: #1A3A5C; text-align: centre; font-size: 24; } .sidebar { width: 30%; padding: 10px margin: auto; background: lightblue; }
```

| Error 1: ___________________________________________________________   |
|------------------------------------------------------------------------|
| Error 2: ___________________________________________________________   |
| Error 3: ___________________________________________________________   |
| Error 4: ___________________________________________________________   |

## 4. Session Recap

The CSS box model (content + padding + border + margin) determines the space every element occupies. Classes (.name) are reusable; IDs (#name) are unique. CSS specificity determines which rule wins when multiple rules target the same element (inline &gt; ID &gt; class &gt; element). Using these tools, a page can be organised into clear zones: header, main, sidebar, footer. CSS makes pages clearer, more attractive, and easier to maintain.