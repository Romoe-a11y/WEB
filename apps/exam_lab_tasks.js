"use strict";
/* ================================================================
   WEB DEV EXAM LAB — task bank + assessment engine
   150 high-difficulty tasks derived from the course TDs, project
   sessions and expert extensions. Categories: HTML, CSS, Responsive,
   Debugging, Practical Projects, Mixed Challenges.
   ================================================================ */
const TASKS=[];
/* compact task builder: T(cat,diff,title,statement,constraints,deliverables,skills,rubric,hints,solution) */
function T(cat,diff,title,statement,constraints,deliverables,skills,rubric,hints,solution){
  const n=TASKS.filter(t=>t.cat===cat).length+1;
  TASKS.push({id:cat+"-"+n,cat,diff,title,statement,
    constraints:constraints||[],deliverables:deliverables||[],skills:skills||[],
    rubric:rubric||[],hints:hints||[],solution:solution||""});
}
/* ===================== HTML (1-18) ===================== */
T("html","Hard",
 "Rebuild a semantic article layout from a wireframe",
 `A blog wants its post pages re-coded with correct semantic HTML5. You are given a wireframe: a top site banner with logo and primary navigation, a main column containing one article (post title, author/date metadata, two sections with sub-headings, and a pull-quote), a related-posts sidebar, and a site footer. Re-create the document structure using semantic landmark elements only — no generic <code>&lt;div&gt;</code> for structural regions.`,
 [`Use only semantic landmarks for page regions: header, nav, main, article, section, aside, footer.`,
  `Exactly one &lt;h1&gt; on the page; sub-headings must follow a correct, gap-free ranking.`,
  `Author/date must use &lt;time datetime="…"&gt;; the pull-quote must use &lt;blockquote&gt; with &lt;cite&gt;.`],
 [`A complete, valid HTML5 document (DOCTYPE + head + body).`,`A clearly nested landmark structure matching the wireframe.`],
 ["Semantic HTML","Document outline","Headings hierarchy","Landmarks"],
 [["Correct, exclusive use of semantic landmarks","30%"],["Single h1 + gap-free heading ranking","25%"],["Valid nesting & well-formed document","25%"],["Correct time / blockquote / cite usage","20%"]],
 [`Ask "what is this region?" — the answer (banner, navigation, main content, complementary) maps directly to a landmark element.`,
  `&lt;section&gt; should have a heading; if a block has no natural heading it is probably a &lt;div&gt;, not a section.`],
 `<pre>&lt;body&gt;
  &lt;header&gt;
    &lt;a href="/"&gt;Logo&lt;/a&gt;
    &lt;nav aria-label="Primary"&gt;&lt;ul&gt;&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;…&lt;/ul&gt;&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;article&gt;
      &lt;h1&gt;Post title&lt;/h1&gt;
      &lt;p&gt;By Sara · &lt;time datetime="2026-05-02"&gt;2 May 2026&lt;/time&gt;&lt;/p&gt;
      &lt;section&gt;&lt;h2&gt;Background&lt;/h2&gt;&lt;p&gt;…&lt;/p&gt;&lt;/section&gt;
      &lt;section&gt;&lt;h2&gt;Method&lt;/h2&gt;&lt;p&gt;…&lt;/p&gt;&lt;/section&gt;
      &lt;blockquote&gt;&lt;p&gt;Key idea.&lt;/p&gt;&lt;cite&gt;Author&lt;/cite&gt;&lt;/blockquote&gt;
    &lt;/article&gt;
    &lt;aside aria-label="Related posts"&gt;&lt;h2&gt;Related&lt;/h2&gt;…&lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;&lt;p&gt;© 2026&lt;/p&gt;&lt;/footer&gt;
&lt;/body&gt;</pre>
<p>Each region is a landmark; the article owns the single h1; sections carry h2s with no skipped levels.</p>`);

T("html","Hard",
 "Encode a multi-level navigation menu accessibly",
 `Build the markup for a primary navigation bar with three top-level items, one of which (<em>Products</em>) opens a sub-menu of four links. No CSS or JavaScript is required for this task — only the HTML structure that a designer and a screen-reader user can both rely on.`,
 [`The navigation must be a &lt;nav&gt; containing a single unordered list.`,
  `The sub-menu must be a nested &lt;ul&gt; inside the Products &lt;li&gt;.`,
  `Mark the current page with aria-current="page".`],
 [`Valid nested-list navigation markup.`,`An aria-current marker on the active link.`],
 ["Lists","Navigation systems","Semantic HTML","Accessibility"],
 [["Nav wraps a single list; sub-menu correctly nested","40%"],["Valid li/ul nesting (sub-ul inside li, not between li)","30%"],["aria-current on active item","15%"],["Descriptive link text (no 'click here')","15%"]],
 [`A nested list goes <em>inside</em> the parent &lt;li&gt;, after its link — never directly between two &lt;li&gt; elements.`],
 `<pre>&lt;nav aria-label="Primary"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="/" aria-current="page"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/products"&gt;Products&lt;/a&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/products/web"&gt;Web&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/products/mobile"&gt;Mobile&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/products/cloud"&gt;Cloud&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/products/ai"&gt;AI&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>`);

T("html","Hard",
 "Build an accessible registration form (markup only)",
 `Code the HTML for the Exam Planner registration form. It collects: full name, email, password, confirm password, study level (a select with Bachelor/Master/Other), and a 'remember me' checkbox. The form should be usable by keyboard and screen reader and should trigger the browser's built-in validation.`,
 [`Every control must have an associated &lt;label&gt; (via for/id).`,
  `Use the correct input type for each field; email and both passwords are required.`,
  `Submit with method="post" to register.php; the submit button must be a real &lt;button type="submit"&gt;.`],
 [`A complete, labelled form with native validation attributes.`,`Correct input types and required fields.`],
 ["Forms","Input types","Labels & fieldset","Accessibility","Validation"],
 [["Every input has a programmatic label","30%"],["Correct input types (email, password, etc.)","25%"],["Validation attributes (required, minlength) present","25%"],["Proper form/method/action and submit button","20%"]],
 [`<code>type="email"</code> gives free format validation; <code>minlength</code> enforces password length without JS.`,
  `Group the two password fields and the level select inside a &lt;fieldset&gt; with a &lt;legend&gt; for structure.`],
 `<pre>&lt;form action="register.php" method="post"&gt;
  &lt;label for="name"&gt;Full name&lt;/label&gt;
  &lt;input id="name" name="name" type="text" required&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required&gt;
  &lt;label for="pw"&gt;Password&lt;/label&gt;
  &lt;input id="pw" name="password" type="password" minlength="8" required&gt;
  &lt;label for="pw2"&gt;Confirm password&lt;/label&gt;
  &lt;input id="pw2" name="confirm" type="password" minlength="8" required&gt;
  &lt;label for="level"&gt;Study level&lt;/label&gt;
  &lt;select id="level" name="level"&gt;
    &lt;option&gt;Bachelor&lt;/option&gt;&lt;option&gt;Master&lt;/option&gt;&lt;option&gt;Other&lt;/option&gt;
  &lt;/select&gt;
  &lt;label&gt;&lt;input type="checkbox" name="remember"&gt; Remember me&lt;/label&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</pre>`);

T("html","Very Hard",
 "Model a complex timetable with merged cells",
 `Produce an accessible HTML table for a weekly class timetable. Columns: Time, Monday, Tuesday, Wednesday. A 'Web Techniques' lab runs Monday across two consecutive time rows (use rowspan), and a 'Conference' on Wednesday spans Tuesday+Wednesday in one slot (use colspan). Include a caption and proper header cells.`,
 [`Use &lt;caption&gt;, a &lt;thead&gt; header row with &lt;th scope="col"&gt;, and row headers with &lt;th scope="row"&gt; for the time column.`,
  `Implement one rowspan and one colspan correctly without leaving extra empty cells.`,
  `The table is for tabular data — never for layout.`],
 [`A valid, accessible data table.`,`Correct rowspan/colspan with no broken grid.`],
 ["Tables","colspan & rowspan","Accessible tables","Complex layouts"],
 [["Caption + scoped headers (col & row)","30%"],["Correct rowspan with no leftover cell","25%"],["Correct colspan with no leftover cell","25%"],["Well-formed table, valid nesting","20%"]],
 [`When a cell spans down with rowspan="2", the next row must <em>omit</em> the cell it covers — count your &lt;td&gt;s per row.`],
 `<pre>&lt;table&gt;
  &lt;caption&gt;Weekly timetable&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th scope="col"&gt;Time&lt;/th&gt;&lt;th scope="col"&gt;Mon&lt;/th&gt;&lt;th scope="col"&gt;Tue&lt;/th&gt;&lt;th scope="col"&gt;Wed&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;09:00&lt;/th&gt;&lt;td rowspan="2"&gt;Web lab&lt;/td&gt;&lt;td&gt;Math&lt;/td&gt;&lt;td&gt;English&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;10:00&lt;/th&gt;&lt;td&gt;Algo&lt;/td&gt;&lt;td&gt;DB&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;11:00&lt;/th&gt;&lt;td&gt;Networks&lt;/td&gt;&lt;td colspan="2"&gt;Conference&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>
<p>Row two has only three cells because the Web-lab rowspan covers Monday.</p>`);

T("html","Hard",
 "Add SEO and social metadata to a page head",
 `A landing page currently has only &lt;title&gt; in its head and ranks poorly. Write the complete &lt;head&gt; with the metadata needed for SEO and correct social-sharing previews on Facebook/LinkedIn (Open Graph) and Twitter.`,
 [`Include charset, viewport, a unique title (≤ 60 chars), and a meta description (≤ 160 chars).`,
  `Add a canonical link and Open Graph tags: og:title, og:description, og:image, og:url, og:type.`,
  `Add twitter:card and a descriptive lang attribute on &lt;html&gt;.`],
 [`A complete, production-ready &lt;head&gt; block.`,`Open Graph + Twitter card tags with sensible values.`],
 ["SEO foundations","Multimedia","Semantic HTML","Accessibility"],
 [["Charset, viewport, title, description present","30%"],["Canonical + correct Open Graph set","35%"],["Twitter card + html lang","20%"],["Sensible length-limited values","15%"]],
 [`Open Graph tags use the <code>property</code> attribute, not <code>name</code>; the image should be an absolute URL.`],
 `<pre>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;AI Exam Planner — smart 7-day revision plans&lt;/title&gt;
  &lt;meta name="description" content="Plan your exams with an AI-generated weekly study schedule."&gt;
  &lt;link rel="canonical" href="https://exam-planner.ma/"&gt;
  &lt;meta property="og:title" content="AI Exam Planner"&gt;
  &lt;meta property="og:description" content="Smart 7-day revision plans."&gt;
  &lt;meta property="og:image" content="https://exam-planner.ma/og.png"&gt;
  &lt;meta property="og:url" content="https://exam-planner.ma/"&gt;
  &lt;meta property="og:type" content="website"&gt;
  &lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;/head&gt;</pre>`);

T("html","Hard",
 "Make a responsive image set with art direction",
 `A hero image must load a tall crop on phones and a wide crop on desktops, plus serve a smaller file to low-resolution screens. Write the markup using &lt;picture&gt; / srcset so the browser picks the right asset — and remains accessible.`,
 [`Use &lt;picture&gt; with &lt;source media="…"&gt; for art direction (different crops per breakpoint).`,
  `The fallback &lt;img&gt; must have meaningful alt text and width/height to avoid layout shift.`,
  `Provide at least two resolution candidates via srcset on one source.`],
 [`A &lt;picture&gt; element with art-directed sources and a valid fallback img.`],
 ["Responsive images","Multimedia","Accessibility","Complex layouts"],
 [["picture + media-based sources (art direction)","35%"],["srcset resolution candidates","25%"],["Accessible, dimensioned fallback img","25%"],["Valid structure & ordering (specific first)","15%"]],
 [`&lt;source&gt; order matters: the browser uses the <em>first</em> matching media query, so list the narrow/phone source before the wide one.`],
 `<pre>&lt;picture&gt;
  &lt;source media="(max-width:600px)" srcset="hero-tall.jpg 1x, hero-tall@2x.jpg 2x"&gt;
  &lt;source media="(min-width:601px)" srcset="hero-wide.jpg 1x, hero-wide@2x.jpg 2x"&gt;
  &lt;img src="hero-wide.jpg" alt="Students planning revision together"
       width="1200" height="600"&gt;
&lt;/picture&gt;</pre>`);

T("html","Hard",
 "Embed accessible video with captions",
 `Add a tutorial video to a help page. It must be keyboard-operable, show captions, provide a poster image, and degrade gracefully if the browser can't play the format.`,
 [`Use &lt;video controls&gt; with a poster and at least two &lt;source&gt; formats (mp4 + webm).`,
  `Include a &lt;track kind="captions"&gt; with srclang and label.`,
  `Provide fallback text/link for unsupported browsers.`],
 [`A complete accessible &lt;video&gt; block.`],
 ["Multimedia","Accessibility","Semantic HTML"],
 [["video controls + poster + multiple sources","35%"],["captions track with srclang/label","30%"],["graceful fallback content","20%"],["valid markup","15%"]],
 [`Captions live in a &lt;track&gt; with <code>kind="captions"</code>; set <code>default</code> to show them automatically.`],
 `<pre>&lt;video controls poster="thumb.jpg" width="640"&gt;
  &lt;source src="intro.webm" type="video/webm"&gt;
  &lt;source src="intro.mp4" type="video/mp4"&gt;
  &lt;track kind="captions" src="intro.en.vtt" srclang="en" label="English" default&gt;
  &lt;p&gt;Your browser can't play this video. &lt;a href="intro.mp4"&gt;Download it&lt;/a&gt;.&lt;/p&gt;
&lt;/video&gt;</pre>`);

T("html","Very Hard",
 "Design a multi-step form with grouped fieldsets",
 `The Add-Module form is being redesigned into three logical groups: Identity (module name, teacher), Difficulty profile (difficulty, career importance, understanding — each a select), and Schedule (progress 0–100 as a range, exam date). Build the semantic, accessible markup for all three groups in one form.`,
 [`Each group is a &lt;fieldset&gt; with a &lt;legend&gt;.`,
  `Difficulty/importance/understanding use &lt;select&gt; with the exact enum values from the schema.`,
  `Progress uses &lt;input type="range" min="0" max="100"&gt; with an associated output or label showing the value is allowed; exam date uses type="date" and is required.`],
 [`A grouped, accessible form covering all 7 module fields.`],
 ["Forms","Input types","Labels & fieldset","Validation","Complex layouts"],
 [["Three fieldsets with legends","25%"],["Correct selects with schema enums","25%"],["Range + date inputs configured correctly","25%"],["All controls labelled & named for PHP","25%"]],
 [`The <code>name</code> attributes should match your DB columns (module_name, teacher, difficulty…) so <code>$_POST</code> maps cleanly.`],
 `<pre>&lt;form action="add_module.php" method="post"&gt;
  &lt;fieldset&gt;&lt;legend&gt;Identity&lt;/legend&gt;
    &lt;label for="m"&gt;Module name&lt;/label&gt;&lt;input id="m" name="module_name" required&gt;
    &lt;label for="t"&gt;Teacher&lt;/label&gt;&lt;input id="t" name="teacher"&gt;
  &lt;/fieldset&gt;
  &lt;fieldset&gt;&lt;legend&gt;Difficulty profile&lt;/legend&gt;
    &lt;label for="d"&gt;Difficulty&lt;/label&gt;
    &lt;select id="d" name="difficulty"&gt;&lt;option&gt;Easy&lt;/option&gt;&lt;option&gt;Medium&lt;/option&gt;&lt;option&gt;Hard&lt;/option&gt;&lt;/select&gt;
  &lt;/fieldset&gt;
  &lt;fieldset&gt;&lt;legend&gt;Schedule&lt;/legend&gt;
    &lt;label for="p"&gt;Progress&lt;/label&gt;&lt;input id="p" name="progress" type="range" min="0" max="100"&gt;
    &lt;label for="e"&gt;Exam date&lt;/label&gt;&lt;input id="e" name="exam_date" type="date" required&gt;
  &lt;/fieldset&gt;
  &lt;button type="submit"&gt;Save module&lt;/button&gt;
&lt;/form&gt;</pre>`);

T("html","Hard",
 "Convert plain text into correctly-ranked structure",
 `You receive raw notes for a 'Library Catalogue' page: a main title, a sub-heading 'Available Sections' with three numbered sections, a sub-heading 'New Arrivals' with two bulleted books, a website link, and a small 'last updated' note. Produce a complete valid HTML document choosing the most appropriate element for each piece.`,
 [`Numbered items → ordered list; bulleted items → unordered list.`,
  `One h1 for the page title; the two sub-headings are h2.`,
  `The website must be a real hyperlink; the note is a paragraph.`],
 [`A complete valid HTML5 document with semantically correct elements.`],
 ["Lists","Headings hierarchy","Links","Semantic HTML"],
 [["Correct ol vs ul choice","30%"],["Correct heading ranking (one h1, h2 subs)","30%"],["Working hyperlink + paragraph note","20%"],["Valid full document","20%"]],
 [`'Numbered' is the keyword for &lt;ol&gt;; 'bulleted' for &lt;ul&gt;.`],
 `<pre>&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;title&gt;Library Catalogue&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Library Catalogue&lt;/h1&gt;
  &lt;h2&gt;Available Sections&lt;/h2&gt;
  &lt;ol&gt;&lt;li&gt;Science&lt;/li&gt;&lt;li&gt;History&lt;/li&gt;&lt;li&gt;Literature&lt;/li&gt;&lt;/ol&gt;
  &lt;h2&gt;New Arrivals&lt;/h2&gt;
  &lt;ul&gt;&lt;li&gt;The Art of Thinking Clearly&lt;/li&gt;&lt;li&gt;A Brief History of Time&lt;/li&gt;&lt;/ul&gt;
  &lt;p&gt;Visit our site: &lt;a href="https://www.library.ma"&gt;library.ma&lt;/a&gt;&lt;/p&gt;
  &lt;p&gt;&lt;small&gt;Last updated: April 2026&lt;/small&gt;&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;</pre>`);

T("html","Very Hard",
 "Architect a full landing page skeleton (semantic)",
 `Lay out the semantic HTML skeleton (no styling) for a product landing page with: sticky header + nav, a hero section (headline, sub-text, two CTAs), a features section of three feature cards, a pricing section with three plans, a testimonials section, an FAQ using native disclosure, and a footer with three link columns. Use landmarks and a logical heading outline.`,
 [`Use header/nav/main/section/footer; each major section has its own h2.`,
  `FAQ items must use &lt;details&gt;/&lt;summary&gt; (no JS).`,
  `Feature/pricing cards should be &lt;article&gt; elements; the document outline must be gap-free.`],
 [`A complete semantic skeleton ready for CSS.`,`A valid, screen-reader-navigable outline.`],
 ["Semantic HTML","Document outline","Landing Pages","Complex layouts","Components"],
 [["Correct landmarks for every region","30%"],["Gap-free heading outline (one h1, h2 per section)","30%"],["details/summary FAQ + article cards","25%"],["Valid, well-formed document","15%"]],
 [`Repeated UI units (cards, plans) are &lt;article&gt; or list items, not bare divs; a section's accessible name comes from its heading.`],
 `<pre>&lt;main&gt;
  &lt;section id="hero"&gt;&lt;h1&gt;Plan smarter&lt;/h1&gt;&lt;p&gt;…&lt;/p&gt;&lt;a class="cta"&gt;Start&lt;/a&gt;&lt;/section&gt;
  &lt;section id="features"&gt;&lt;h2&gt;Features&lt;/h2&gt;
    &lt;article&gt;&lt;h3&gt;AI plans&lt;/h3&gt;…&lt;/article&gt; … ×3
  &lt;/section&gt;
  &lt;section id="pricing"&gt;&lt;h2&gt;Pricing&lt;/h2&gt;&lt;article&gt;&lt;h3&gt;Free&lt;/h3&gt;…&lt;/article&gt;…&lt;/section&gt;
  &lt;section id="faq"&gt;&lt;h2&gt;FAQ&lt;/h2&gt;
    &lt;details&gt;&lt;summary&gt;Is it free?&lt;/summary&gt;&lt;p&gt;Yes.&lt;/p&gt;&lt;/details&gt;
  &lt;/section&gt;
&lt;/main&gt;</pre>`);

T("html","Hard",
 "Use description lists for key/value content",
 `A module detail panel shows label/value pairs (Teacher: …, Difficulty: …, Exam date: …, Progress: …). A teammate coded it as two parallel &lt;ul&gt; lists. Re-code it with the semantically correct element for name/value pairs and explain why it is better.`,
 [`Use a &lt;dl&gt; with &lt;dt&gt;/&lt;dd&gt; pairs.`,
  `Keep four pairs; values may include a &lt;time&gt; for the date.`],
 [`A &lt;dl&gt; replacement.`,`A 1–2 sentence justification of the semantic gain.`],
 ["Semantic HTML","Lists","Accessibility"],
 [["Correct dl/dt/dd structure","45%"],["All four pairs present & associated","30%"],["Clear justification of semantics","25%"]],
 [`A description list communicates the term→definition relationship to assistive tech; parallel ULs do not.`],
 `<pre>&lt;dl&gt;
  &lt;dt&gt;Teacher&lt;/dt&gt;&lt;dd&gt;Prof. Hourri&lt;/dd&gt;
  &lt;dt&gt;Difficulty&lt;/dt&gt;&lt;dd&gt;Hard&lt;/dd&gt;
  &lt;dt&gt;Exam date&lt;/dt&gt;&lt;dd&gt;&lt;time datetime="2026-06-12"&gt;12 Jun 2026&lt;/time&gt;&lt;/dd&gt;
  &lt;dt&gt;Progress&lt;/dt&gt;&lt;dd&gt;40%&lt;/dd&gt;
&lt;/dl&gt;</pre>
<p>Each dt is bound to its dd, so a screen reader announces "Teacher, Prof. Hourri" as a pair.</p>`);

T("html","Hard",
 "Wire up accessible client-side validation hints",
 `Extend a login form so each field exposes a help/error hint that is programmatically connected to its input (so screen readers announce it), and the email shows a custom pattern requirement. No JavaScript — use native attributes and ARIA wiring only.`,
 [`Connect each hint with aria-describedby pointing at the hint's id.`,
  `Email uses a pattern and title; password uses required + minlength.`,
  `Required fields use the required attribute and a visible required indicator.`],
 [`A login form with described-by hints and native constraints.`],
 ["Forms","Validation","Accessibility","Labels & fieldset"],
 [["aria-describedby correctly links hints","35%"],["pattern/title + minlength constraints","30%"],["required fields marked (attr + visual)","20%"],["valid, labelled markup","15%"]],
 [`<code>aria-describedby="emailHelp"</code> must reference the exact <code>id</code> of the hint element.`],
 `<pre>&lt;label for="em"&gt;Email&lt;/label&gt;
&lt;input id="em" name="email" type="email" required
       aria-describedby="emHelp" pattern=".+@.+\\..+" title="name@example.com"&gt;
&lt;p id="emHelp" class="hint"&gt;Use your university email.&lt;/p&gt;</pre>`);

T("html","Hard",
 "Structure a data table with thead, tbody, tfoot",
 `Re-code a flat results table so it has a proper header section, a body of rows, and a footer row that shows the class average. Add a caption and scoped headers so the table is fully accessible.`,
 [`Use thead/tbody/tfoot explicitly.`,
  `Column headers use scope="col"; the average row lives in tfoot.`,
  `Include a caption summarising the table.`],
 [`A three-part accessible results table.`],
 ["Tables","Accessible tables","Semantic HTML"],
 [["thead/tbody/tfoot all used correctly","40%"],["scoped column headers + caption","30%"],["average correctly placed in tfoot","15%"],["valid nesting","15%"]],
 [`The footer is for summary rows (totals/averages) and should come after tbody in the source even though browsers render it last.`],
 `<pre>&lt;table&gt;
  &lt;caption&gt;Midterm results&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th scope="col"&gt;Student&lt;/th&gt;&lt;th scope="col"&gt;Score&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Omar&lt;/td&gt;&lt;td&gt;14&lt;/td&gt;&lt;/tr&gt;…&lt;/tbody&gt;
  &lt;tfoot&gt;&lt;tr&gt;&lt;th scope="row"&gt;Average&lt;/th&gt;&lt;td&gt;12.6&lt;/td&gt;&lt;/tr&gt;&lt;/tfoot&gt;
&lt;/table&gt;</pre>`);

T("html","Very Hard",
 "Build a skip-link + landmark scaffold for a11y",
 `Make a content-heavy page efficient for keyboard and screen-reader users. Add a 'skip to content' link as the first focusable element, label each navigation landmark, and ensure the main content has a focusable target. Markup and the minimal CSS needed to hide the skip link until focused.`,
 [`The skip link is the first element in &lt;body&gt; and targets #main.`,
  `&lt;main id="main"&gt; exists; multiple navs are distinguished with aria-label.`,
  `Skip link is visually hidden but appears on :focus (provide the CSS).`],
 [`Markup with a working skip link.`,`The visually-hidden-until-focus CSS.`],
 ["Accessibility","Semantic HTML","Navigation systems","Landmarks"],
 [["Skip link first + targets main","35%"],["main has matching id; navs labelled","30%"],["hidden-until-focus CSS correct","25%"],["valid structure","10%"]],
 [`Don't use <code>display:none</code> for the skip link — it would remove it from the tab order. Move it off-screen instead.`],
 `<pre>&lt;a class="skip" href="#main"&gt;Skip to content&lt;/a&gt;
&lt;nav aria-label="Primary"&gt;…&lt;/nav&gt;
&lt;main id="main" tabindex="-1"&gt;…&lt;/main&gt;</pre>
<pre>.skip{position:absolute;left:-9999px}
.skip:focus{left:8px;top:8px;background:#fff;padding:8px}</pre>`);

T("html","Hard",
 "Mark up an article with figure and citation",
 `A news article includes a chart image with a caption and a quoted statistic from a source. Encode the image+caption relationship and the attributed quotation using the correct semantic elements.`,
 [`Image + caption use &lt;figure&gt;/&lt;figcaption&gt;.`,
  `The image has descriptive alt text distinct from the caption.`,
  `The quote uses &lt;blockquote cite="URL"&gt; with a visible &lt;cite&gt;.`],
 [`A figure block and an attributed blockquote.`],
 ["Semantic HTML","Multimedia","Accessibility"],
 [["figure/figcaption used correctly","35%"],["alt distinct & descriptive","25%"],["blockquote cite attribute + cite element","25%"],["valid structure","15%"]],
 [`<code>alt</code> describes the image for those who can't see it; <code>figcaption</code> is the visible caption for everyone — they should not be identical.`],
 `<pre>&lt;figure&gt;
  &lt;img src="chart.png" alt="Bar chart: enrolment rose 30% from 2024 to 2026"&gt;
  &lt;figcaption&gt;Figure 1. Enrolment growth.&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;blockquote cite="https://gov.ma/report"&gt;
  &lt;p&gt;Enrolment increased by 30%.&lt;/p&gt;
  &lt;cite&gt;Ministry report, 2026&lt;/cite&gt;
&lt;/blockquote&gt;</pre>`);

T("html","Hard",
 "Choose correct input types for a survey",
 `Build a short survey form that captures: age (integer 16–99), satisfaction (1–5 star scale via radios), preferred contact (email OR phone, user picks), a colour preference, a date of availability, and free-text feedback. Use the most appropriate native control for each.`,
 [`Each question uses the most fitting input type (number, radio group, tel/email, color, date, textarea).`,
  `Radio group shares one name; age enforces min/max.`,
  `All controls are labelled.`],
 [`A semantic survey form with optimal native controls.`],
 ["Forms","Input types","Validation","Accessibility"],
 [["Optimal control per question","35%"],["radio group shares name; number min/max","25%"],["all controls labelled","25%"],["valid form structure","15%"]],
 [`Radio buttons that belong together must share the same <code>name</code> so only one can be selected.`],
 `<pre>&lt;label for="age"&gt;Age&lt;/label&gt;&lt;input id="age" type="number" min="16" max="99" name="age"&gt;
&lt;fieldset&gt;&lt;legend&gt;Satisfaction&lt;/legend&gt;
  &lt;label&gt;&lt;input type="radio" name="sat" value="1"&gt;1&lt;/label&gt; … &lt;label&gt;&lt;input type="radio" name="sat" value="5"&gt;5&lt;/label&gt;
&lt;/fieldset&gt;
&lt;input type="color" name="fav"&gt; &lt;input type="date" name="when"&gt;
&lt;textarea name="feedback"&gt;&lt;/textarea&gt;</pre>`);

T("html","Very Hard",
 "Produce valid, accessible breadcrumb navigation",
 `Implement breadcrumb navigation for a deep page (Home › Courses › Web Techniques › Session 4). It must be machine-readable for search engines and announced correctly by screen readers.`,
 [`Wrap in &lt;nav aria-label="Breadcrumb"&gt; with an ordered list.`,
  `The current page is the last item, not a link, marked aria-current="page".`,
  `Separators must be CSS-generated or aria-hidden, not part of the link text.`],
 [`Semantic breadcrumb markup.`],
 ["Navigation systems","Semantic HTML","Accessibility","SEO foundations"],
 [["nav + ordered list structure","30%"],["current page non-linked + aria-current","30%"],["separators not in link text","25%"],["valid markup","15%"]],
 [`Use &lt;ol&gt; because breadcrumbs are an ordered hierarchy; put separators in CSS (<code>::after</code>) so they aren't read aloud.`],
 `<pre>&lt;nav aria-label="Breadcrumb"&gt;
  &lt;ol class="crumbs"&gt;
    &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/courses"&gt;Courses&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/courses/web"&gt;Web Techniques&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;span aria-current="page"&gt;Session 4&lt;/span&gt;&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</pre>`);

T("html","Hard",
 "Internationalize a multilingual snippet",
 `A page mixes English body text with an Arabic quotation and a French term. Mark the language changes so screen readers switch pronunciation and the Arabic renders right-to-left.`,
 [`Set the document &lt;html lang&gt;; mark inline language changes with lang on a span/blockquote.`,
  `The Arabic block must also set dir="rtl".`],
 [`Correctly language-tagged, direction-aware markup.`],
 ["Accessibility","Semantic HTML","Internationalization"],
 [["document lang set","25%"],["inline lang changes tagged","40%"],["dir=rtl on Arabic content","25%"],["valid markup","10%"]],
 [`Every change of language needs its own <code>lang</code>; RTL scripts also need <code>dir="rtl"</code> on the containing element.`],
 `<pre>&lt;html lang="en"&gt;
…
&lt;p&gt;The motto is &lt;span lang="fr"&gt;liberté&lt;/span&gt;.&lt;/p&gt;
&lt;blockquote lang="ar" dir="rtl"&gt;&lt;p&gt;العلم نور&lt;/p&gt;&lt;/blockquote&gt;</pre>`);
/* ===================== HTML (19-35) ===================== */
T("html","Hard",
 "Add a datalist-powered autocomplete field",
 `The Add-Module form should suggest common module names as the user types, while still allowing any custom value. Implement a free-text input backed by a native suggestion list — no JavaScript.`,
 [`Use &lt;input list="…"&gt; bound to a &lt;datalist&gt; of at least five options.`,
  `The input must remain free-text (custom values allowed) and labelled.`],
 [`An input + datalist pair providing suggestions.`],
 ["Forms","Input types","Accessibility"],
 [["input list bound to datalist id","45%"],["≥5 options + free text allowed","30%"],["labelled control","25%"]],
 [`<code>&lt;datalist&gt;</code> suggests but never restricts — the field still accepts anything typed.`],
 `<pre>&lt;label for="m"&gt;Module name&lt;/label&gt;
&lt;input id="m" name="module_name" list="mods"&gt;
&lt;datalist id="mods"&gt;
  &lt;option value="Web Techniques"&gt;&lt;option value="Algorithms"&gt;
  &lt;option value="Databases"&gt;&lt;option value="Networks"&gt;&lt;option value="Mathematics"&gt;
&lt;/datalist&gt;</pre>`);

T("html","Hard",
 "Build a file-upload field with constraints",
 `Add an avatar upload to a profile form. The form must send files correctly, accept only images, and let the user pick from camera or library on mobile.`,
 [`The &lt;form&gt; must set enctype="multipart/form-data" and method="post".`,
  `The input uses type="file" with accept="image/*" and a label.`,
  `Explain in one line why enctype is required.`],
 [`A correctly-configured file-upload form.`,`A one-line justification.`],
 ["Forms","Input types","Validation"],
 [["enctype=multipart/form-data set","35%"],["type=file + accept filter","35%"],["labelled + correct method","15%"],["correct justification","15%"]],
 [`Without <code>multipart/form-data</code> the browser sends only the filename, not the file bytes.`],
 `<pre>&lt;form action="upload.php" method="post" enctype="multipart/form-data"&gt;
  &lt;label for="av"&gt;Avatar&lt;/label&gt;
  &lt;input id="av" name="avatar" type="file" accept="image/*"&gt;
  &lt;button type="submit"&gt;Upload&lt;/button&gt;
&lt;/form&gt;</pre>
<p>multipart encoding is the only form encoding that transmits binary file data.</p>`);

T("html","Very Hard",
 "Encode an FAQ accordion with native disclosure",
 `Create an FAQ section of five questions where each answer expands/collapses, the first one is open by default, and the whole thing works without any JavaScript and is fully keyboard accessible.`,
 [`Each item uses &lt;details&gt;/&lt;summary&gt;; the first has the open attribute.`,
  `The section has a heading; questions are the summaries.`,
  `No JavaScript allowed.`],
 [`A keyboard-accessible, JS-free FAQ accordion.`],
 ["Semantic HTML","Accessibility","Components"],
 [["details/summary used for every item","40%"],["first item open by default","20%"],["section heading + structure","20%"],["no JS, valid markup","20%"]],
 [`&lt;summary&gt; is focusable and toggles its parent &lt;details&gt; with Enter/Space for free.`],
 `<pre>&lt;section&gt;&lt;h2&gt;FAQ&lt;/h2&gt;
  &lt;details open&gt;&lt;summary&gt;Is it free?&lt;/summary&gt;&lt;p&gt;Yes.&lt;/p&gt;&lt;/details&gt;
  &lt;details&gt;&lt;summary&gt;Do I need an account?&lt;/summary&gt;&lt;p&gt;Yes, to save modules.&lt;/p&gt;&lt;/details&gt;
  …
&lt;/section&gt;</pre>`);

T("html","Hard",
 "Mark up contact details semantically",
 `A footer contains the site's postal address, an email link, and a phone link. Encode them so the address is semantically identified and email/phone are tappable on mobile.`,
 [`Wrap the postal contact in &lt;address&gt;.`,
  `Email uses mailto:, phone uses tel: with an international format.`],
 [`A semantic contact block.`],
 ["Semantic HTML","Links","Accessibility"],
 [["address element used correctly","35%"],["mailto + tel links work","40%"],["valid international tel format","15%"],["valid markup","10%"]],
 [`<code>&lt;address&gt;</code> is for contact info of the nearest article/page — not for arbitrary postal addresses in body text.`],
 `<pre>&lt;address&gt;
  EST Safi, Cadi Ayyad University&lt;br&gt;
  &lt;a href="mailto:hi@planner.ma"&gt;hi@planner.ma&lt;/a&gt;&lt;br&gt;
  &lt;a href="tel:+212600000000"&gt;+212 600 000 000&lt;/a&gt;
&lt;/address&gt;</pre>`);

T("html","Hard",
 "Embed a safe, accessible iframe",
 `Embed a Google-Maps-style location iframe on a contact page so it is titled for screen readers, lazy-loaded, and reasonably sandboxed.`,
 [`The &lt;iframe&gt; must have a descriptive title attribute.`,
  `Use loading="lazy" and an appropriate referrerpolicy or sandbox.`,
  `Set width/height or rely on a responsive wrapper.`],
 [`A titled, lazy-loaded iframe embed.`],
 ["Multimedia","Accessibility","Complex layouts"],
 [["title attribute present & descriptive","40%"],["loading=lazy","25%"],["sandbox/referrerpolicy applied","20%"],["valid embed","15%"]],
 [`A missing <code>title</code> on an iframe is a common, easily-fixed accessibility failure.`],
 `<pre>&lt;iframe title="Our location on the map" src="https://maps.example/embed?..."
  width="600" height="350" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"&gt;&lt;/iframe&gt;</pre>`);

T("html","Very Hard",
 "Refactor div-soup into semantic HTML",
 `You inherit a header coded entirely with &lt;div class="header"&gt;, &lt;div class="nav"&gt;, &lt;div class="logo"&gt;, &lt;div class="menu"&gt; (a list faked with divs). Refactor it into correct semantic markup that keeps the same classes for styling but gains meaning and accessibility.`,
 [`Replace structural divs with header/nav and a real list for the menu.`,
  `Keep existing class names so CSS still applies.`,
  `The logo should be a link to home.`],
 [`A semantically refactored header.`,`A note on what accessibility improved.`],
 ["Semantic HTML","Navigation systems","Accessibility","Project Architecture"],
 [["header/nav landmarks introduced","30%"],["fake menu becomes real ul/li/a","30%"],["classes preserved for CSS","20%"],["logo link + justification","20%"]],
 [`Landmarks let screen-reader users jump straight to navigation — divs offer no such affordance.`],
 `<pre>&lt;header class="header"&gt;
  &lt;a class="logo" href="/"&gt;Planner&lt;/a&gt;
  &lt;nav class="nav" aria-label="Primary"&gt;
    &lt;ul class="menu"&gt;&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;…&lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;</pre>`);

T("html","Hard",
 "Provide accessible names for icon-only buttons",
 `A toolbar has three icon-only buttons (search, settings, logout) drawn with inline SVG. They are invisible to screen readers. Fix the markup so each has an accessible name without showing visible text.`,
 [`Each button is a real &lt;button&gt; with an aria-label (or visually-hidden text).`,
  `Decorative SVGs are hidden from AT with aria-hidden="true".`],
 [`Three accessible icon buttons.`],
 ["Accessibility","Components","Semantic HTML"],
 [["each button has an accessible name","45%"],["decorative svg aria-hidden","30%"],["real button elements","25%"]],
 [`Either <code>aria-label</code> on the button or a visually-hidden &lt;span&gt; gives the icon a name; mark the SVG <code>aria-hidden</code> so it isn't double-announced.`],
 `<pre>&lt;button aria-label="Search"&gt;&lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;&lt;/button&gt;
&lt;button aria-label="Settings"&gt;&lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;&lt;/button&gt;
&lt;button aria-label="Log out"&gt;&lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;&lt;/button&gt;</pre>`);

T("html","Hard",
 "Structure a pricing card grid (markup)",
 `Mark up a three-tier pricing section (Free, Pro, Team). The recommended plan (Pro) must be programmatically distinguishable, each plan lists features as a list, and prices are real text (not images).`,
 [`Section with h2; each plan is an &lt;article&gt; with its own h3.`,
  `Features use &lt;ul&gt;; the recommended plan carries a clear marker (e.g., aria-label or a 'Popular' badge in text).`,
  `CTA is a button/link with descriptive text.`],
 [`Semantic pricing markup ready for CSS Grid.`],
 ["Semantic HTML","Components","Landing Pages","Lists"],
 [["section + article-per-plan structure","30%"],["feature lists + real price text","25%"],["recommended plan distinguishable","25%"],["descriptive CTAs","20%"]],
 [`Don't bake prices into images — keep them as text for SEO, accessibility and easy updates.`],
 `<pre>&lt;section&gt;&lt;h2&gt;Pricing&lt;/h2&gt;
  &lt;article&gt;&lt;h3&gt;Free&lt;/h3&gt;&lt;p&gt;0 MAD&lt;/p&gt;&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ul&gt;&lt;a href="#"&gt;Choose Free&lt;/a&gt;&lt;/article&gt;
  &lt;article aria-label="Recommended plan"&gt;&lt;h3&gt;Pro &lt;span&gt;Popular&lt;/span&gt;&lt;/h3&gt;…&lt;/article&gt;
  &lt;article&gt;&lt;h3&gt;Team&lt;/h3&gt;…&lt;/article&gt;
&lt;/section&gt;</pre>`);

T("html","Very Hard",
 "Add Schema.org microdata to an event",
 `An event page lists a workshop with a name, date, location and price. Add inline microdata so search engines can show a rich result. Keep the visible content unchanged.`,
 [`Use itemscope/itemtype="https://schema.org/Event".`,
  `Annotate name, startDate (with a machine date), location and offers/price.`],
 [`Microdata-annotated event markup.`],
 ["SEO foundations","Semantic HTML"],
 [["itemscope/itemtype Event","30%"],["name + startDate (machine-readable)","30%"],["location + offers/price props","25%"],["visible content unchanged","15%"]],
 [`Pair human text with machine values using <code>&lt;time datetime&gt;</code> and <code>&lt;meta itemprop&gt;</code> where the visible text isn't machine-friendly.`],
 `<pre>&lt;article itemscope itemtype="https://schema.org/Event"&gt;
  &lt;h2 itemprop="name"&gt;Web Workshop&lt;/h2&gt;
  &lt;time itemprop="startDate" datetime="2026-06-20T14:00"&gt;20 Jun, 2pm&lt;/time&gt;
  &lt;span itemprop="location"&gt;EST Safi&lt;/span&gt;
  &lt;span itemprop="offers" itemscope itemtype="https://schema.org/Offer"&gt;
    &lt;span itemprop="price"&gt;0&lt;/span&gt;&lt;meta itemprop="priceCurrency" content="MAD"&gt;
  &lt;/span&gt;
&lt;/article&gt;</pre>`);

T("html","Hard",
 "Build a semantic comment thread",
 `Render a blog comment thread: three top-level comments, one of which has two nested replies. Each comment shows author, timestamp and body. Use semantic, nestable markup.`,
 [`Each comment is an &lt;article&gt; with author + &lt;time&gt;.`,
  `Replies are nested &lt;article&gt; elements inside their parent.`],
 [`A semantic, nested comment thread.`],
 ["Semantic HTML","Document outline","Accessibility"],
 [["article per comment + author/time","35%"],["replies nested correctly","35%"],["machine-readable timestamps","15%"],["valid structure","15%"]],
 [`Comments are independent, self-contained units → &lt;article&gt;; nesting an article inside another expresses the reply relationship.`],
 `<pre>&lt;article&gt;
  &lt;footer&gt;&lt;b&gt;Sara&lt;/b&gt; · &lt;time datetime="2026-05-01"&gt;1 May&lt;/time&gt;&lt;/footer&gt;
  &lt;p&gt;Great post!&lt;/p&gt;
  &lt;article&gt;&lt;footer&gt;&lt;b&gt;Omar&lt;/b&gt; · &lt;time datetime="2026-05-02"&gt;2 May&lt;/time&gt;&lt;/footer&gt;&lt;p&gt;Agreed.&lt;/p&gt;&lt;/article&gt;
&lt;/article&gt;</pre>`);

T("html","Hard",
 "Make progress and meter visible semantically",
 `A dashboard shows a module's completion (40 of 100) and a disk-usage style 'risk' gauge. Use the correct native elements so the values are exposed to assistive technology.`,
 [`Use &lt;progress&gt; for task completion and &lt;meter&gt; for the gauge with low/high/optimum.`,
  `Each has an associated label and a text fallback.`],
 [`Semantic progress + meter elements.`],
 ["Semantic HTML","Accessibility","Forms"],
 [["progress used for completion","30%"],["meter with min/max/low/high","35%"],["labels + text fallback","20%"],["valid markup","15%"]],
 [`<code>&lt;progress&gt;</code> is for task completion that moves one way; <code>&lt;meter&gt;</code> is for a measurement within a known range.`],
 `<pre>&lt;label for="p"&gt;Progress&lt;/label&gt;
&lt;progress id="p" value="40" max="100"&gt;40%&lt;/progress&gt;
&lt;label for="r"&gt;Risk&lt;/label&gt;
&lt;meter id="r" min="0" max="100" low="33" high="66" optimum="20" value="75"&gt;75&lt;/meter&gt;</pre>`);

T("html","Very Hard",
 "Compose an email-ready HTML signature",
 `Build a self-contained HTML email signature with a name, role, company, clickable email/phone and a small logo. Email clients strip &lt;head&gt; CSS and many block external images, so it must survive those limits.`,
 [`All structure via tables (email-safe), no external CSS file, inline styles only.`,
  `Logo has alt text so it still reads when blocked; links use mailto:/tel:.`,
  `No JavaScript, no &lt;style&gt; reliance.`],
 [`A portable, table-based email signature.`],
 ["Tables","Multimedia","Accessibility","Project Architecture"],
 [["table-based layout (email-safe)","35%"],["inline styles only","25%"],["alt text + mailto/tel links","25%"],["self-contained, no head CSS","15%"]],
 [`Email rendering engines are stuck in the past — tables + inline styles are still the reliable layout method there.`],
 `<pre>&lt;table&gt;&lt;tr&gt;
  &lt;td&gt;&lt;img src="logo.png" alt="Planner" width="48"&gt;&lt;/td&gt;
  &lt;td style="font-family:Arial;padding-left:10px"&gt;
    &lt;b&gt;Sara A.&lt;/b&gt;&lt;br&gt;Front-end dev&lt;br&gt;
    &lt;a href="mailto:sara@x.ma"&gt;sara@x.ma&lt;/a&gt; · &lt;a href="tel:+2126…"&gt;+212…&lt;/a&gt;
  &lt;/td&gt;
&lt;/tr&gt;&lt;/table&gt;</pre>`);

T("html","Hard",
 "Validate and fix a malformed document",
 `Given a page that 'looks fine' in the browser but fails the W3C validator, list what a validator would flag and produce a corrected version. The page has: a missing lang, a duplicated id, an &lt;li&gt; outside any list, an unclosed &lt;p&gt;, and an &lt;img&gt; with no alt.`,
 [`Identify all five validation issues explicitly.`,
  `Produce a corrected, validator-clean document.`],
 [`A list of the five issues.`,`The corrected HTML.`],
 ["Validation","Semantic HTML","Accessibility","Debugging"],
 [["all five issues correctly identified","45%"],["each fixed properly","40%"],["resulting doc is well-formed","15%"]],
 [`'Renders fine' ≠ 'valid'. Duplicate IDs and stray list items break scripting, styling and accessibility even when the visual looks OK.`],
 `<p>Issues: (1) no html lang; (2) two elements share id="main"; (3) &lt;li&gt; not inside ul/ol; (4) &lt;p&gt; never closed; (5) &lt;img&gt; missing alt. Fix: add lang, make ids unique, wrap the li in a list, close the p, add a descriptive alt.</p>`);

T("html","Hard",
 "Expose form errors with a live region",
 `After a failed submit, a summary of errors should be announced to screen-reader users without moving focus unexpectedly. Build the error-summary markup that does this and links each error to its field.`,
 [`Error summary uses role="alert" or aria-live="assertive".`,
  `Each error is a link to the offending field's id.`,
  `The summary has a heading.`],
 [`An accessible error-summary block.`],
 ["Accessibility","Forms","Validation"],
 [["live region / role=alert present","35%"],["each error links to its field","35%"],["heading + structure","20%"],["valid markup","10%"]],
 [`A live region announces dynamically-inserted content; linking each message to its field lets users jump straight to the problem.`],
 `<pre>&lt;div role="alert"&gt;
  &lt;h2&gt;There are 2 problems&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#email"&gt;Enter a valid email&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#pw"&gt;Password too short&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>`);

T("html","Very Hard",
 "Hand-code an accessible custom tabs structure",
 `Produce the semantic + ARIA markup for a three-tab interface (Overview / Modules / Plan). You write only the static markup and ARIA wiring (the JS behaviour is out of scope) so that, once scripted, it follows the WAI-ARIA tabs pattern.`,
 [`Tablist uses role="tablist"; each tab role="tab" with aria-selected and aria-controls.`,
  `Each panel role="tabpanel" with aria-labelledby pointing back to its tab; inactive panels hidden.`,
  `IDs must cross-reference correctly.`],
 [`Correct tabs/tabpanel ARIA scaffold.`],
 ["Accessibility","Components","Semantic HTML"],
 [["tablist/tab roles + aria-selected","35%"],["tabpanel + aria-labelledby cross-refs","35%"],["aria-controls + hidden state","20%"],["valid id wiring","10%"]],
 [`Every <code>aria-controls</code> must match a panel id, and every panel's <code>aria-labelledby</code> must match its tab id — get the cross-references exact.`],
 `<pre>&lt;div role="tablist" aria-label="Module views"&gt;
  &lt;button role="tab" id="t1" aria-selected="true" aria-controls="p1"&gt;Overview&lt;/button&gt;
  &lt;button role="tab" id="t2" aria-selected="false" aria-controls="p2"&gt;Modules&lt;/button&gt;
&lt;/div&gt;
&lt;div role="tabpanel" id="p1" aria-labelledby="t1"&gt;…&lt;/div&gt;
&lt;div role="tabpanel" id="p2" aria-labelledby="t2" hidden&gt;…&lt;/div&gt;</pre>`);

T("html","Expert",
 "Design a fully accessible, valid checkout form",
 `Build the complete markup for a checkout form: contact (email, phone), shipping address (multi-field), payment (card number, expiry, CVC), and order notes. It must autofill correctly, validate natively, group logically, and pass an accessibility audit.`,
 [`Use correct autocomplete tokens (email, tel, name, address-line1, postal-code, cc-number, cc-exp, cc-csc).`,
  `Group sections in fieldsets with legends; every field labelled; required fields marked.`,
  `Use inputmode and appropriate types so mobile keyboards are optimal; card number uses inputmode="numeric".`],
 [`A complete, autofill-ready, accessible checkout form.`],
 ["Forms","Validation","Accessibility","Input types","Complex layouts"],
 [["correct autocomplete tokens throughout","30%"],["fieldset grouping + labels + required","30%"],["optimal types/inputmode per field","25%"],["valid, audit-clean markup","15%"]],
 [`Browser autofill keys off standard <code>autocomplete</code> tokens — using them is both a UX and accessibility win.`],
 `<pre>&lt;fieldset&gt;&lt;legend&gt;Contact&lt;/legend&gt;
  &lt;label for="em"&gt;Email&lt;/label&gt;
  &lt;input id="em" type="email" autocomplete="email" required&gt;
  &lt;label for="tel"&gt;Phone&lt;/label&gt;
  &lt;input id="tel" type="tel" autocomplete="tel" inputmode="tel"&gt;
&lt;/fieldset&gt;
&lt;fieldset&gt;&lt;legend&gt;Payment&lt;/legend&gt;
  &lt;label for="cc"&gt;Card number&lt;/label&gt;
  &lt;input id="cc" autocomplete="cc-number" inputmode="numeric" required&gt;
  &lt;label for="exp"&gt;Expiry&lt;/label&gt;&lt;input id="exp" autocomplete="cc-exp" placeholder="MM/YY"&gt;
  &lt;label for="cvc"&gt;CVC&lt;/label&gt;&lt;input id="cvc" autocomplete="cc-csc" inputmode="numeric"&gt;
&lt;/fieldset&gt;</pre>`);

T("html","Very Hard",
 "Build a semantic multi-section form wizard (markup)",
 `Code the static markup for a 3-step onboarding wizard (Account → Profile → Preferences) as ONE accessible form. Each step is a grouped section; a progress indicator shows the current step; only valid native controls are used. (Step switching logic is out of scope — focus on accessible, valid structure.)`,
 [`Each step is a &lt;fieldset&gt; with a &lt;legend&gt;; the form is a single &lt;form&gt;.`,
  `A progress indicator (ordered list) marks the current step with aria-current.`,
  `Every control is labelled; required fields use required; navigation uses real buttons.`],
 [`A complete, accessible wizard form skeleton.`],
 ["Forms","Accessibility","Labels & fieldset","Semantic HTML","Complex layouts"],
 [["fieldset/legend per step","30%"],["accessible progress indicator + aria-current","25%"],["all controls labelled + required","25%"],["valid single-form structure","20%"]],
 [`A wizard is still one &lt;form&gt;; model the steps as fieldsets and the progress as an ordered list so it stays meaningful without JS.`],
 `<pre>&lt;form action="onboard.php" method="post"&gt;
  &lt;ol class="steps"&gt;&lt;li aria-current="step"&gt;Account&lt;/li&gt;&lt;li&gt;Profile&lt;/li&gt;&lt;li&gt;Preferences&lt;/li&gt;&lt;/ol&gt;
  &lt;fieldset&gt;&lt;legend&gt;Account&lt;/legend&gt;
    &lt;label for="em"&gt;Email&lt;/label&gt;&lt;input id="em" name="email" type="email" required&gt;
  &lt;/fieldset&gt;
  &lt;fieldset&gt;&lt;legend&gt;Profile&lt;/legend&gt;…&lt;/fieldset&gt;
  &lt;fieldset&gt;&lt;legend&gt;Preferences&lt;/legend&gt;…&lt;/fieldset&gt;
  &lt;button type="submit"&gt;Finish&lt;/button&gt;
&lt;/form&gt;</pre>`);
/* ===================== CSS (1-20) ===================== */
T("css","Hard",
 "Resolve a four-way specificity conflict",
 `Four rules target the same paragraph: <span class="inline-code">p { color:black }</span>, <span class="inline-code">.info { color:blue }</span>, <span class="inline-code">article p { color:green }</span>, and <span class="inline-code">#lead { color:red }</span>. The element is <span class="inline-code">&lt;p id="lead" class="info"&gt;</span> inside an &lt;article&gt;. Determine the final colour, justify it with specificity values, then state the single smallest change to make it blue without using !important.`,
 [`Compute specificity as (id, class, element) tuples.`,
  `No !important in your reasoning or fix.`],
 [`The final colour + per-rule specificity.`,`A minimal change that yields blue.`],
 ["Specificity","Cascade","Advanced selectors"],
 [["correct specificity for all four rules","40%"],["correct winning colour","25%"],["valid minimal change to blue","25%"],["no !important used","10%"]],
 [`Count: #id=(1,0,0); .class=(0,1,0); element=(0,0,1); descendant adds both parts. Highest tuple wins.`],
 `<p>Specificities: <code>p</code>=(0,0,1), <code>.info</code>=(0,1,0), <code>article p</code>=(0,0,2), <code>#lead</code>=(1,0,0). The id rule wins → <b>red</b>. To make it blue without !important, raise the .info rule's specificity above the id, e.g. <code>#lead.info{color:blue}</code> (1,1,0) or simply restyle via <code>#lead{color:blue}</code>.</p>`);

T("css","Hard",
 "Center a box four different ways",
 `Perfectly centre a fixed-size card (300×180) both horizontally and vertically inside a full-viewport parent. Provide four distinct techniques (Flexbox, Grid, absolute + transform, and margin-based) and note one trade-off of each.`,
 [`All four must truly centre on both axes.`,
  `The card keeps its fixed size.`],
 [`Four working centring snippets.`,`One trade-off per technique.`],
 ["Flexbox","Grid","Positioning","Layout Systems"],
 [["four correct, distinct techniques","60%"],["each genuinely centres both axes","25%"],["sensible trade-offs noted","15%"]],
 [`<code>place-items:center</code> on a grid is the shortest; absolute+transform works without touching the parent's display.`],
 `<pre>/* 1 Flexbox */ .p{display:flex;justify-content:center;align-items:center;min-height:100vh}
/* 2 Grid    */ .p{display:grid;place-items:center;min-height:100vh}
/* 3 Abs+tf  */ .c{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
/* 4 Margin  */ .p{display:flex} .c{margin:auto} /* needs a flex/grid parent */</pre>
<p>Trade-offs: margin:auto needs flow context; absolute removes the card from flow; flex/grid affect all children.</p>`);

T("css","Very Hard",
 "Build a holy-grail layout with CSS Grid",
 `Create a full-height page layout: header (top), footer (bottom), and a middle row of left sidebar (200px), fluid main, right sidebar (200px). It must fill the viewport, the main area scrolls if content overflows, and it collapses to a single column under 700px.`,
 [`Use CSS Grid with grid-template-areas.`,
  `Header/footer auto-height; middle row takes remaining space.`,
  `Single-column stack under 700px via a media query.`],
 [`A Grid-based holy-grail layout.`,`A responsive collapse rule.`],
 ["Grid","Layout Systems","Responsive Design","Complex layouts"],
 [["named areas covering all five regions","35%"],["fluid main + fixed sidebars","25%"],["full-height with scroll behaviour","20%"],["responsive single-column collapse","20%"]],
 [`<code>grid-template-rows: auto 1fr auto</code> gives the middle row all leftover height; redefine areas inside the media query.`],
 `<pre>.app{display:grid;min-height:100vh;
  grid-template:"h h h" auto "l m r" 1fr "f f f" auto / 200px 1fr 200px}
header{grid-area:h} .l{grid-area:l} main{grid-area:m;overflow:auto} .r{grid-area:r} footer{grid-area:f}
@media(max-width:700px){.app{grid-template:"h""l""m""r""f"/1fr}}</pre>`);

T("css","Hard",
 "Create a responsive auto-fitting card grid",
 `Lay out an unknown number of module cards so they flow into as many columns as fit (min card width 240px), with equal gaps, and no media queries at all.`,
 [`Use grid-template-columns with repeat(auto-fit, minmax()).`,
  `No media queries permitted.`,
  `Consistent gap between rows and columns.`],
 [`A self-responsive card grid.`],
 ["Grid","Responsive Design","Layout Systems","Components"],
 [["auto-fit + minmax used correctly","45%"],["no media queries","20%"],["correct gap","20%"],["cards stay ≥240px and fill row","15%"]],
 [`<code>repeat(auto-fit, minmax(240px, 1fr))</code> is the canonical query-less responsive grid.`],
 `<pre>.cards{display:grid;gap:16px;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}</pre>
<p>auto-fit collapses empty tracks so cards stretch to fill the final row.</p>`);

T("css","Hard",
 "Master the box model with box-sizing",
 `An element is <span class="inline-code">.panel{width:400px;padding:0 25px;border:3px solid;margin:0 40px}</span>. Compute its rendered width with the default box model, then with <span class="inline-code">box-sizing:border-box</span>, and explain the difference. State how much horizontal space it occupies in the page in each case.`,
 [`Show all arithmetic.`,
  `Distinguish rendered box width from total occupied space (incl. margins).`],
 [`Both width calculations with reasoning.`],
 ["Box model","box-sizing","Debugging"],
 [["content-box width correct (456) + occupied (536)","35%"],["border-box width correct (400) + occupied (480)","35%"],["clear explanation of the shift","20%"],["margins handled correctly","10%"]],
 [`content-box adds padding+border to width; border-box makes width include them. Margins are always outside the box.`],
 `<p>content-box: rendered = 400+50+6 = <b>456px</b>; occupied = 456+80 = <b>536px</b>. border-box: rendered = <b>400px</b> (content shrinks to 344); occupied = 400+80 = <b>480px</b>. border-box keeps the declared width stable, which is why it's the common reset.</p>`);

T("css","Hard",
 "Theme a site with CSS custom properties",
 `Refactor a stylesheet that repeats the same five colours everywhere into a token-based system using CSS variables, then add a dark theme that overrides the tokens via a <span class="inline-code">[data-theme="dark"]</span> selector — without touching any component rule.`,
 [`Define tokens on :root; components reference var().`,
  `Dark theme re-declares tokens only, not component rules.`,
  `Provide a fallback value on at least one var() call.`],
 [`A tokenized stylesheet + dark override.`],
 ["CSS variables","Project Architecture","Cascade"],
 [["tokens on :root + var() usage","35%"],["dark theme overrides tokens only","35%"],["no component rules duplicated","20%"],["fallback in a var()","10%"]],
 [`Because custom properties cascade and inherit, overriding them on a wrapper re-themes everything that references them.`],
 `<pre>:root{--bg:#fff;--ink:#222;--brand:#0f7f79}
[data-theme="dark"]{--bg:#10181f;--ink:#e6eef4}
body{background:var(--bg);color:var(--ink)}
.btn{background:var(--brand, #0a6)}</pre>`);

T("css","Very Hard",
 "Build a responsive nav that needs no JS to wrap",
 `A horizontal nav has a logo on the left and links on the right. On wide screens they sit on one row; when space runs out the links should wrap neatly below the logo and stay evenly spaced — using Flexbox only, no media queries.`,
 [`Flexbox with wrapping; use gap for spacing.`,
  `Logo and link-group separate via margin-auto or justify.`,
  `No media queries.`],
 [`A query-less wrapping navbar.`],
 ["Flexbox","Responsive Design","Navigation systems"],
 [["flex container + wrap","35%"],["logo/links split without queries","30%"],["even spacing via gap","20%"],["no media queries","15%"]],
 [`<code>flex-wrap:wrap</code> plus <code>margin-left:auto</code> on the link group pushes links right but lets them drop below when cramped.`],
 `<pre>.nav{display:flex;flex-wrap:wrap;align-items:center;gap:12px}
.nav .links{display:flex;gap:14px;margin-left:auto;flex-wrap:wrap}</pre>`);

T("css","Hard",
 "Style with attribute and pseudo-class selectors",
 `Without adding any classes, style: all external links (href starting http) with an arrow, required form fields with a red left border, the first paragraph after every h2 as a lead paragraph, and every odd table row striped.`,
 [`Use attribute selectors, :required, adjacent sibling, and :nth-child.`,
  `No new classes or markup changes.`],
 [`Four selector-only rules.`],
 ["Advanced selectors","CSS variables","Project Architecture"],
 [["external-link attribute selector + arrow","30%"],[":required styling","20%"],["h2 + p adjacent-sibling lead","25%"],["nth-child striping","25%"]],
 [`<code>a[href^="http"]</code>, <code>:required</code>, <code>h2 + p</code>, and <code>tr:nth-child(odd)</code> solve each part respectively.`],
 `<pre>a[href^="http"]::after{content:" \\2197"}
input:required{border-left:3px solid red}
h2 + p{font-size:1.2em;color:#555}
tbody tr:nth-child(odd){background:#f3f6f8}</pre>`);

T("css","Very Hard",
 "Implement an accessible CSS-only dropdown",
 `Build a hover/focus dropdown menu in pure CSS that opens on both hover and keyboard focus, stays open while the pointer is within it, and doesn't trap keyboard users.`,
 [`Open on :hover and :focus-within.`,
  `Submenu positioned absolutely under its parent; parent positioned relative.`,
  `Hidden state must not be display:none flicker that blocks focus — use visibility/opacity or focus-within.`],
 [`A CSS-only dropdown that opens on hover and focus.`],
 ["Advanced selectors","Positioning","Navigation systems","Accessibility"],
 [[":focus-within used for keyboard","35%"],["hover open + correct positioning","30%"],["no focus trap / accessible","20%"],["clean hidden/shown states","15%"]],
 [`<code>:focus-within</code> keeps the menu open while any child has focus — essential for keyboard users.`],
 `<pre>.menu{position:relative}
.menu &gt; ul{position:absolute;top:100%;left:0;opacity:0;visibility:hidden}
.menu:hover &gt; ul,.menu:focus-within &gt; ul{opacity:1;visibility:visible}</pre>`);

T("css","Hard",
 "Animate a loading spinner with @keyframes",
 `Create a smooth, infinite loading spinner (a rotating ring) using only CSS. It must respect users who prefer reduced motion by stopping or simplifying the animation.`,
 [`Use @keyframes with transform:rotate and animation shorthand.`,
  `Honour @media (prefers-reduced-motion: reduce).`,
  `No images or JS.`],
 [`A CSS-only spinner.`,`A reduced-motion fallback.`],
 ["Animations","Transforms","Motion & UX","Accessibility"],
 [["@keyframes rotate + infinite loop","35%"],["ring built with border trick","25%"],["prefers-reduced-motion respected","25%"],["smooth/linear timing","15%"]],
 [`A common ring is a circle with a transparent border on three sides and a coloured top border, spun with <code>animation</code>.`],
 `<pre>@keyframes spin{to{transform:rotate(360deg)}}
.spinner{width:32px;height:32px;border:3px solid #ccc;border-top-color:#0f7f79;
  border-radius:50%;animation:spin .8s linear infinite}
@media(prefers-reduced-motion:reduce){.spinner{animation:none}}</pre>`);

T("css","Hard",
 "Transition a button's states smoothly",
 `Give a primary button polished hover, focus and active states: a subtle lift on hover, a clear focus ring for keyboard users, and a pressed state — all transitioned smoothly, transitioning only cheap properties.`,
 [`Transition transform/opacity/box-shadow (not layout properties).`,
  `:focus-visible shows a ring; :active shows pressed.`,
  `Hover lift via transform.`],
 [`A button with transitioned interactive states.`],
 ["Transitions","Transforms","Motion & UX","Components","Accessibility"],
 [["transition limited to cheap props","30%"],["hover lift via transform","25%"],[":focus-visible ring","25%"],[":active pressed state","20%"]],
 [`Animating <code>transform</code>/<code>opacity</code> is GPU-friendly; animating <code>top</code>/<code>margin</code> causes reflow.`],
 `<pre>.btn{transition:transform .15s,box-shadow .15s}
.btn:hover{transform:translateY(-2px);box-shadow:0 8px 18px rgba(0,0,0,.15)}
.btn:focus-visible{outline:2px solid #0f7f79;outline-offset:2px}
.btn:active{transform:translateY(0)}</pre>`);

T("css","Very Hard",
 "Control stacking with z-index and contexts",
 `A sticky header (z-index:10), a modal overlay, and a dropdown all overlap incorrectly: the dropdown appears behind the header, and the modal sometimes sits under the dropdown. Explain how stacking contexts cause this and give CSS that guarantees modal &gt; dropdown &gt; header.`,
 [`Explain how a new stacking context (transform/opacity/position+z-index) isolates z-index.`,
  `Provide a layering scheme that works regardless of DOM order.`],
 [`A diagnosis of the stacking bug.`,`A reliable layering fix.`],
 ["Positioning","z-index","Debugging","Layout Systems"],
 [["correct explanation of stacking contexts","40%"],["working layer ordering","35%"],["context-isolation pitfalls addressed","25%"]],
 [`z-index only compares siblings within the <em>same</em> stacking context — a parent with <code>transform</code> or <code>opacity&lt;1</code> traps its children's z-index.`],
 `<p>Cause: an ancestor with transform/opacity created a stacking context, so the dropdown's high z-index only competes inside it. Fix: define a token scale and ensure each layer is in the top-level context: <code>--z-header:100; --z-dropdown:200; --z-modal:300</code>, and avoid creating stacking contexts on their shared ancestors.</p>`);

T("css","Hard",
 "Use logical properties for RTL support",
 `A card uses <span class="inline-code">margin-left</span>, <span class="inline-code">padding-right</span> and <span class="inline-code">text-align:left</span>. In Arabic (RTL) the layout looks wrong. Rewrite it with CSS logical properties so it mirrors automatically.`,
 [`Replace physical with logical properties (margin-inline-start, padding-inline-end, text-align:start).`,
  `No separate RTL stylesheet.`],
 [`A direction-agnostic version of the card CSS.`],
 ["CSS variables","Project Architecture","Internationalization","Responsive Design"],
 [["logical replacements correct","50%"],["text-align:start used","20%"],["no separate RTL sheet","20%"],["behaviour mirrors in RTL","10%"]],
 [`<code>inline-start/end</code> follow the text direction, so one rule serves both LTR and RTL.`],
 `<pre>.card{margin-inline-start:16px;padding-inline-end:12px;text-align:start}</pre>`);

T("css","Hard",
 "Truncate text with ellipsis (1 line and N lines)",
 `Implement two truncation utilities: a single-line ellipsis for titles, and a multi-line clamp to exactly three lines for card descriptions, both adding '…' when text overflows.`,
 [`Single line: white-space/overflow/text-overflow combo.`,
  `Multi-line: line-clamp technique.`],
 [`Two reusable truncation classes.`],
 ["Typography","Components","Layout Systems"],
 [["single-line ellipsis correct trio","45%"],["multi-line clamp to 3 lines","40%"],["reusable/clean","15%"]],
 [`Single-line needs all three: <code>white-space:nowrap; overflow:hidden; text-overflow:ellipsis</code>.`],
 `<pre>.truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}</pre>`);

T("css","Very Hard",
 "Build a sticky table header inside a scroll area",
 `A long data table sits in a scrollable container. The header row must stay pinned while the body scrolls, and the first column must stay pinned when scrolling horizontally — CSS only.`,
 [`Use position:sticky on thead th (top) and first-column cells (left).`,
  `Set a background on sticky cells so content doesn't show through.`,
  `Ensure correct z-index for the corner cell.`],
 [`A two-axis sticky table.`],
 ["Positioning","Layout Systems","Complex layouts"],
 [["sticky top header","30%"],["sticky left column","30%"],["opaque backgrounds on sticky cells","20%"],["corner cell stacking handled","20%"]],
 [`<code>position:sticky</code> needs a scroll container and a <code>top</code>/<code>left</code> offset; sticky cells must be opaque or rows show through.`],
 `<pre>thead th{position:sticky;top:0;background:#fff;z-index:2}
tbody th{position:sticky;left:0;background:#fff}
thead th:first-child{z-index:3} /* corner */</pre>`);

T("css","Hard",
 "Recreate a design's spacing with a scale",
 `A design uses inconsistent ad-hoc margins (7px, 13px, 19px…). Establish a spacing scale with custom properties (4px base) and a set of margin/padding utility classes, then explain why a scale improves maintainability.`,
 [`Define a token scale (e.g., --s1..--s5) on :root.`,
  `Provide utilities that consume the tokens.`],
 [`A spacing scale + utilities.`,`A short rationale.`],
 ["CSS variables","Project Architecture","Typography"],
 [["sensible token scale defined","40%"],["utilities consume tokens","30%"],["clear maintainability rationale","30%"]],
 [`A constrained scale removes arbitrary values, giving visual rhythm and one place to tune spacing.`],
 `<pre>:root{--s1:4px;--s2:8px;--s3:16px;--s4:24px;--s5:40px}
.mt-3{margin-top:var(--s3)} .p-4{padding:var(--s4)}</pre>`);

T("css","Very Hard",
 "Make an aspect-ratio media box (no padding hack)",
 `Embed a responsive 16:9 video container that keeps its ratio at any width, plus a square avatar that never distorts its image. Use modern CSS (no legendary padding-top hack).`,
 [`Use the aspect-ratio property for the 16:9 box.`,
  `Avatar uses aspect-ratio:1 and object-fit:cover.`],
 [`Ratio-locked containers without the padding hack.`],
 ["Responsive images","Layout Systems","Responsive Design"],
 [["aspect-ratio:16/9 box","35%"],["square avatar with aspect-ratio","30%"],["object-fit:cover prevents distortion","25%"],["fluid at any width","10%"]],
 [`<code>aspect-ratio</code> + <code>object-fit:cover</code> replaces both the padding-top hack and image distortion in two lines.`],
 `<pre>.video{aspect-ratio:16/9;width:100%}
.avatar{aspect-ratio:1;width:64px;object-fit:cover;border-radius:50%}</pre>`);

T("css","Hard",
 "Style form validation states with :user-invalid",
 `Give native form fields helpful visual feedback: valid fields a subtle green check edge, invalid fields a red edge — but only after the user has interacted (not on first load). Pure CSS.`,
 [`Use :user-invalid / :user-valid (or :invalid scoped to avoid first-load nagging).`,
  `Provide a non-colour cue too (icon or border thickness) for colour-blind users.`],
 [`Interaction-aware validation styling.`],
 ["Validation","Advanced selectors","Accessibility","Forms"],
 [[":user-invalid/:user-valid used","40%"],["no nagging on initial load","25%"],["non-colour cue included","20%"],["clean styling","15%"]],
 [`<code>:user-invalid</code> only matches after the user has blurred/submitted, avoiding the 'everything is red on load' problem.`],
 `<pre>input:user-invalid{border:2px solid #c0392b}
input:user-invalid::after{content:" ✖"}
input:user-valid{border:2px solid #2f9e6b}</pre>`);

T("css","Expert",
 "Diagnose and fix a margin-collapse bug",
 `A header's bottom margin mysteriously 'leaks' outside its parent, pushing the whole section down, and two stacked paragraphs have a gap larger than either's margin. Explain margin collapsing (parent-child and adjacent siblings) and give three different ways to stop the parent-child collapse.`,
 [`Explain both collapse cases precisely.`,
  `Give three fixes for the parent-child case (padding/border, overflow, flex/grid).`],
 [`A clear explanation + three fixes.`],
 ["Box model","Debugging","Layout Systems"],
 [["correct adjacent-sibling collapse explanation","25%"],["correct parent-child collapse explanation","25%"],["three valid fixes","40%"],["clarity","10%"]],
 [`A parent with no padding/border between it and its first child shares (collapses) that child's top margin.`],
 `<p>Adjacent siblings collapse to the larger of the two margins. Parent-child: a child's margin escapes the parent if nothing separates them. Fixes: add <code>padding-top:0.1px</code> or a border to the parent; set <code>overflow:auto</code> (new BFC); or make the parent <code>display:flex/grid</code> (no collapsing inside).</p>`);
/* ===================== CSS (21-40) ===================== */
T("css","Hard",
 "Distribute flex items with grow/shrink/basis",
 `A toolbar has a search field that should take all spare space, plus two fixed-size buttons that must never shrink. Implement it with flex-grow/shrink/basis so it behaves correctly when the toolbar is narrow and wide.`,
 [`Search uses flex:1 (grow); buttons use flex:0 0 auto (no grow/shrink).`,
  `Use gap for spacing; everything stays on one row until truly impossible.`],
 [`A correctly proportioned flex toolbar.`],
 ["Flex items","Flexbox","Layout Systems"],
 [["search grows to fill","35%"],["buttons never shrink","30%"],["correct flex shorthand usage","20%"],["spacing via gap","15%"]],
 [`<code>flex:1</code> = grow:1 shrink:1 basis:0; <code>flex:0 0 auto</code> pins an item to its content size.`],
 `<pre>.toolbar{display:flex;gap:8px}
.toolbar .search{flex:1}
.toolbar .btn{flex:0 0 auto}</pre>`);

T("css","Very Hard",
 "Place items precisely on a 12-column grid",
 `Build a 12-column grid and place: a hero spanning all 12 columns, a main block spanning columns 1–8, and a sidebar spanning 9–12 in the same row. Then make a featured card start at column 3 and span 8.`,
 [`Define grid-template-columns:repeat(12,1fr) with a gap.`,
  `Use grid-column line numbers / span for placement.`],
 [`A 12-column grid with explicit placements.`],
 ["Grid","Item placement","Layout Systems","Complex layouts"],
 [["12-col track definition","25%"],["hero spans 12","20%"],["main 1–8 + sidebar 9–12 same row","35%"],["featured 3/span 8","20%"]],
 [`<code>grid-column: 1 / 9</code> spans columns 1–8; <code>grid-column: 9 / -1</code> reaches the last line.`],
 `<pre>.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
.hero{grid-column:1 / -1}
.main{grid-column:1 / 9}
.side{grid-column:9 / -1}
.featured{grid-column:3 / span 8}</pre>`);

T("css","Hard",
 "Draw decoration with pseudo-elements",
 `Add a gradient underline that animates in on hover beneath links (without affecting layout), and a custom 'required' asterisk before required labels — all via ::before/::after, no extra markup.`,
 [`Underline via ::after with transform scale, not border (so it animates).`,
  `Asterisk via label::before content.`,
  `No layout shift on hover.`],
 [`Pseudo-element decorations.`],
 ["Advanced selectors","Transitions","Typography","Components"],
 [["::after underline that animates","40%"],["asterisk via ::before content","25%"],["no layout shift","20%"],["clean technique","15%"]],
 [`Animate <code>transform:scaleX()</code> of an absolutely-positioned ::after to avoid reflow.`],
 `<pre>a{position:relative}
a::after{content:"";position:absolute;left:0;bottom:-2px;height:2px;width:100%;
  background:linear-gradient(90deg,#0f7f79,#2166a5);transform:scaleX(0);transform-origin:left;transition:transform .2s}
a:hover::after{transform:scaleX(1)}
label.req::before{content:"* ";color:#c0392b}</pre>`);

T("css","Hard",
 "Create gradients and a glassmorphism panel",
 `Style a hero with a multi-stop linear gradient background and a floating 'glass' info panel that blurs whatever is behind it while staying readable.`,
 [`Hero uses a linear-gradient with ≥3 stops.`,
  `Panel uses backdrop-filter:blur plus a translucent background and border.`,
  `Ensure text contrast remains adequate.`],
 [`A gradient hero + glass panel.`],
 ["Backgrounds","Components","Color systems","Motion & UX"],
 [["multi-stop gradient","30%"],["backdrop-filter glass effect","35%"],["readable contrast maintained","20%"],["clean styling","15%"]],
 [`Glass = semi-transparent background + <code>backdrop-filter:blur()</code> + a faint border; keep text dark/opaque for contrast.`],
 `<pre>.hero{background:linear-gradient(135deg,#0f7f79,#2166a5 50%,#6d4aa8)}
.glass{background:rgba(255,255,255,.15);backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.3);border-radius:14px;color:#fff}</pre>`);

T("css","Very Hard",
 "Animate a multi-step entrance sequence",
 `Cards in a grid should fade-and-rise into view in a staggered sequence on page load (card 2 slightly after card 1, etc.). Build the keyframes and staggering with CSS only, and disable it under reduced-motion.`,
 [`One @keyframes (fade + translateY).`,
  `Stagger via animation-delay (e.g., nth-child or custom property).`,
  `Reduced-motion disables the animation and shows final state.`],
 [`A staggered entrance animation.`],
 ["Animations","Transforms","Motion & UX","Accessibility"],
 [["fade+rise keyframes","30%"],["staggered delays","30%"],["final state correct (no flicker/disappear)","20%"],["reduced-motion fallback","20%"]],
 [`Use <code>animation-fill-mode:both</code> so the card holds its start (hidden) and end (shown) frames; stagger with <code>animation-delay:calc(var(--i)*80ms)</code>.`],
 `<pre>@keyframes rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.card{animation:rise .4s both;animation-delay:calc(var(--i,0)*80ms)}
@media(prefers-reduced-motion:reduce){.card{animation:none}}</pre>`);

T("css","Hard",
 "Build a pure-CSS toggle switch",
 `Turn a checkbox into an accessible iOS-style toggle switch using only CSS, keeping the real checkbox for keyboard and screen readers.`,
 [`Visually hide the checkbox but keep it focusable and operable.`,
  `Style the track/thumb via a label and :checked + sibling selectors.`,
  `Show a visible focus indicator.`],
 [`An accessible CSS toggle.`],
 ["Advanced selectors","Forms","Transitions","Accessibility","Components"],
 [["real checkbox kept accessible","30%"],[":checked drives the visual state","30%"],["thumb slides via transition","20%"],["visible focus state","20%"]],
 [`Keep the input in the DOM (just visually hidden) and react with <code>input:checked + .track</code>; never replace it with a div.`],
 `<pre>.sw input{position:absolute;opacity:0}
.track{width:44px;height:24px;background:#bbb;border-radius:999px;position:relative;transition:.2s}
.track::after{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border-radius:50%;transition:.2s}
.sw input:checked + .track{background:#2f9e6b}
.sw input:checked + .track::after{transform:translateX(20px)}
.sw input:focus-visible + .track{outline:2px solid #0f7f79;outline-offset:2px}</pre>`);

T("css","Very Hard",
 "Implement a responsive 'sidebar that becomes a drawer'",
 `A 280px sidebar sits beside content on desktop. Below 800px it should slide off-screen and only appear (over the content) when a checkbox 'hamburger' is checked — all CSS, no JS.`,
 [`Desktop: grid/flex with sidebar + content.`,
  `Mobile: sidebar fixed, translated off-screen, revealed by a checked checkbox via sibling selector.`,
  `Include an overlay/scrim and smooth transition.`],
 [`A CSS-only responsive drawer.`],
 ["Responsive Design","Positioning","Navigation systems","Transitions","Layout Systems"],
 [["desktop side-by-side layout","25%"],["mobile off-canvas via transform","30%"],["checkbox toggles via sibling selector","30%"],["scrim + transition","15%"]],
 [`The 'checkbox hack': a hidden checkbox before the sidebar lets <code>:checked ~ .sidebar</code> drive the open state without JS.`],
 `<pre>@media(max-width:800px){
  .sidebar{position:fixed;inset:0 auto 0 0;width:280px;transform:translateX(-100%);transition:.25s}
  #nav:checked ~ .sidebar{transform:none}
  #nav:checked ~ .scrim{display:block}
}</pre>`);

T("css","Hard",
 "Generate list numbering with CSS counters",
 `Style an ordered set of steps with custom numbered badges (1, 2, 3 in coloured circles) using CSS counters, so the numbering is automatic even if steps are added or reordered.`,
 [`Use counter-reset on the list and counter-increment + content on items.`,
  `Render the number in a styled ::before badge.`],
 [`Auto-numbered step badges.`],
 ["Advanced selectors","Components","Typography"],
 [["counter-reset/increment correct","45%"],["number shown via content:counter()","30%"],["styled circular badge","25%"]],
 [`<code>counter-reset</code> on the container, <code>counter-increment</code> per item, then <code>content: counter(name)</code> in ::before.`],
 `<pre>.steps{counter-reset:step;list-style:none}
.steps li{counter-increment:step}
.steps li::before{content:counter(step);display:inline-grid;place-items:center;
  width:26px;height:26px;border-radius:50%;background:#0f7f79;color:#fff;margin-right:8px}</pre>`);

T("css","Very Hard",
 "Clip and mask a hero shape",
 `Give a hero section a slanted bottom edge and clip an avatar into a hexagon, using clip-path. Provide a graceful rectangular fallback for browsers without clip-path support.`,
 [`Slanted edge via clip-path:polygon on the hero.`,
  `Hexagon avatar via clip-path:polygon.`,
  `Use @supports for a fallback.`],
 [`clip-path shapes + a fallback.`],
 ["Backgrounds","Components","Layout Systems"],
 [["hero slant polygon","30%"],["hexagon avatar polygon","30%"],["@supports fallback","25%"],["sensible coordinates","15%"]],
 [`<code>@supports not (clip-path: polygon(0 0))</code> lets you ship a square fallback for old browsers.`],
 `<pre>.hero{clip-path:polygon(0 0,100% 0,100% 88%,0 100%)}
.hex{clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)}
@supports not (clip-path:polygon(0 0)){.hex{border-radius:8px}}</pre>`);

T("css","Hard",
 "Provide a clean print stylesheet",
 `Make an article print nicely: hide nav/sidebar/footer and buttons, expand the main column, show link URLs after links, and avoid breaking headings across pages.`,
 [`Scope rules in @media print.`,
  `Hide non-content chrome; reveal link hrefs via ::after.`,
  `Use break-inside/break-after to control pagination.`],
 [`A print stylesheet.`],
 ["Project Architecture","Advanced selectors","Typography"],
 [["@media print scoping","25%"],["chrome hidden, main expanded","30%"],["link URLs printed","25%"],["page-break control","20%"]],
 [`<code>a[href^="http"]::after{content:" (" attr(href) ")"}</code> reveals destinations on paper.`],
 `<pre>@media print{
  nav,aside,footer,.btn{display:none}
  main{width:100%}
  a[href^="http"]::after{content:" (" attr(href) ")"}
  h1,h2,h3{break-after:avoid}
}</pre>`);

T("css","Hard",
 "Fix a flexbox overflow that breaks on small screens",
 `A flex row of cards overflows its container and forces horizontal scroll on phones because the cards refuse to shrink. Explain the default min-width:auto behaviour and fix it so cards wrap and shrink properly.`,
 [`Explain why flex items don't shrink below content size by default.`,
  `Apply min-width:0 (and/or flex-wrap) to fix.`],
 [`A diagnosis + fix.`],
 ["Flexbox","Responsive Design","Debugging","Layout Systems"],
 [["correct min-width:auto explanation","40%"],["min-width:0 fix","35%"],["flex-wrap where appropriate","25%"]],
 [`Flex items have <code>min-width:auto</code>, so they won't shrink below their content — set <code>min-width:0</code> to allow shrinking (and to let text truncate).`],
 `<pre>.row{display:flex;flex-wrap:wrap;gap:12px}
.row .card{flex:1 1 240px;min-width:0}</pre>`);

T("css","Very Hard",
 "Style a definition-driven dashboard with subgrid",
 `Three stacked cards each contain a title, body and footer of differing lengths, making their internal rows misalign. Use CSS grid + subgrid so all three cards share aligned title/body/footer rows.`,
 [`Parent is a grid; cards opt into the parent's rows via subgrid.`,
  `Provide a fallback note for browsers lacking subgrid.`],
 [`A subgrid-aligned card row.`],
 ["Grid","Layout Systems","Components","Complex layouts"],
 [["parent grid with shared rows","30%"],["cards use subgrid correctly","40%"],["alignment achieved","20%"],["fallback noted","10%"]],
 [`<code>grid-template-rows: subgrid</code> on the card makes its rows inherit the parent's track lines, aligning siblings.`],
 `<pre>.cards{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto 1fr auto;gap:16px}
.card{display:grid;grid-row:span 3;grid-template-rows:subgrid}</pre>`);

T("css","Hard",
 "Constrain typography for readability",
 `Set body typography for long-form reading: a comfortable measure (line length), a modular type scale, generous line-height, and balanced headings — using rem units and a max line width.`,
 [`Limit line length with max-width in ch units (~65ch).`,
  `Use rem for sizes and a consistent scale; set line-height ~1.6 for body.`,
  `Headings use text-wrap:balance where helpful.`],
 [`A readable typography baseline.`],
 ["Typography","Responsive typography","Project Architecture"],
 [["measure limited (~60–75ch)","30%"],["rem-based modular scale","30%"],["body line-height ~1.6","20%"],["balanced headings","20%"]],
 [`<code>max-width:65ch</code> on text containers gives the classic readable line length regardless of viewport.`],
 `<pre>body{font-size:1rem;line-height:1.6}
.prose{max-width:65ch}
h1{font-size:2.5rem;text-wrap:balance}
h2{font-size:1.75rem}</pre>`);

T("css","Hard",
 "Recreate a notification badge overlap",
 `Place a small count badge on the top-right corner of a bell icon button so it overlaps the icon, scales with the number of digits, and never affects the button's box size.`,
 [`Button position:relative; badge position:absolute top-right.`,
  `Badge auto-sizes to content with min-width; circular for single digit.`],
 [`An overlapping count badge.`],
 ["Positioning","Components","Layout Systems"],
 [["relative/absolute anchoring","35%"],["top-right overlap correct","25%"],["auto-sizing badge","25%"],["no effect on button box","15%"]],
 [`Absolute positioning takes the badge out of flow, so the button's size stays fixed regardless of the badge.`],
 `<pre>.bell{position:relative}
.bell .badge{position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;
  padding:0 5px;border-radius:999px;background:#c0392b;color:#fff;font-size:11px;display:grid;place-items:center}</pre>`);

T("css","Very Hard",
 "Build a responsive ratio-based pricing toggle",
 `A pricing section has a monthly/annual toggle (CSS-only) that, when switched, reveals the annual prices and hides the monthly ones, with a smooth crossfade — and the layout must not jump when switching.`,
 [`Use a checkbox/radio + sibling selectors to switch visible price set.`,
  `Crossfade via opacity/visibility, not display, to avoid layout jump.`,
  `Both price sets occupy the same grid cell.`],
 [`A CSS-only price toggle with stable layout.`],
 ["Advanced selectors","Transitions","Layout Systems","Components"],
 [["checkbox/radio drives state","30%"],["both sets share one cell (no jump)","30%"],["crossfade via opacity","25%"],["clean structure","15%"]],
 [`Stack both price blocks in the same grid area and toggle opacity so the box never resizes.`],
 `<pre>.price-wrap{display:grid}
.price-wrap &gt; *{grid-area:1/1;transition:opacity .25s}
#annual:checked ~ .price-wrap .monthly{opacity:0;visibility:hidden}
#annual:not(:checked) ~ .price-wrap .annual{opacity:0;visibility:hidden}</pre>`);

T("css","Hard",
 "Apply filters and hover effects to a gallery",
 `Style an image gallery so images are slightly desaturated by default and animate to full colour with a gentle zoom on hover/focus, with a dark caption overlay sliding up — keeping it accessible to keyboard users.`,
 [`Use filter:grayscale + transition; restore on hover/focus-within.`,
  `Caption overlay slides via transform; trigger on hover AND focus-within.`,
  `Zoom via transform:scale, contained with overflow:hidden.`],
 [`An interactive, accessible gallery item.`],
 ["Transitions","Transforms","Components","Accessibility"],
 [["grayscale→color transition","30%"],["zoom contained with overflow:hidden","25%"],["caption slide on hover+focus","30%"],["keyboard accessible","15%"]],
 [`Add <code>:focus-within</code> alongside <code>:hover</code> so keyboard users get the same reveal.`],
 `<pre>.item{overflow:hidden}
.item img{filter:grayscale(.6);transition:.3s}
.item:hover img,.item:focus-within img{filter:none;transform:scale(1.05)}
.item .cap{transform:translateY(100%);transition:.3s}
.item:hover .cap,.item:focus-within .cap{transform:none}</pre>`);

T("css","Expert",
 "Author a token-based design system core",
 `Establish the CSS foundation of a small design system: a colour palette + semantic aliases, a spacing and type scale, radius/shadow tokens, light/dark theming via tokens, and one component (button) built entirely from tokens with hover/focus/disabled states. Explain how this scales to new components.`,
 [`Primitive tokens + semantic aliases (e.g., --blue-600 → --color-accent).`,
  `Light/dark via token overrides only.`,
  `Button consumes only semantic tokens; includes hover/focus-visible/disabled.`],
 [`A token core + one token-driven component.`,`A scaling rationale.`],
 ["CSS variables","Project Architecture","Components","Color systems","Accessibility"],
 [["primitive + semantic token layers","30%"],["theming via token overrides","25%"],["button uses only tokens + all states","30%"],["scaling rationale","15%"]],
 [`Two token layers (primitive values, then semantic aliases) let you re-theme by swapping aliases without touching components.`],
 `<pre>:root{--blue-600:#2166a5;--color-accent:var(--blue-600);--radius:10px;--space-3:16px}
[data-theme="dark"]{--color-accent:#5295e0}
.btn{background:var(--color-accent);border-radius:var(--radius);padding:var(--space-3)}
.btn:hover{filter:brightness(1.07)}
.btn:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}
.btn:disabled{opacity:.5;cursor:not-allowed}</pre>`);

T("css","Very Hard",
 "Fix an inheritance and cascade surprise",
 `A <span class="inline-code">.card</span> sets <span class="inline-code">color:#333</span> but its links appear blue, and a <span class="inline-code">button</span> inside ignores the card's font. Explain which properties inherit and which don't, why links/buttons resist inheritance, and write the rule that makes form controls inherit typography.`,
 [`Explain inherited vs non-inherited properties.`,
  `Explain why links/buttons have UA styles overriding inheritance.`,
  `Give the canonical 'font:inherit' fix for form controls.`],
 [`An explanation + the inherit fix.`],
 ["Cascade","Typography","Debugging","Project Architecture"],
 [["inherited vs non-inherited explained","35%"],["UA-style reasoning for links/buttons","30%"],["font:inherit fix for controls","25%"],["clarity","10%"]],
 [`Color inherits, but anchors carry a UA <code>color</code> and buttons carry their own <code>font</code>; reset with <code>button,input,select,textarea{font:inherit}</code>.`],
 `<p>Typography (color, font-family, line-height) inherits; box properties (margin, border, width) do not. Links and form controls have user-agent styles that win over inheritance, so they look unstyled until you opt them in: <code>button,input,select,textarea{font:inherit;color:inherit}</code> and <code>a{color:inherit}</code> where desired.</p>`);

T("css","Hard",
 "Build an equal-height card row that aligns footers",
 `Three cards of different content lengths sit in a flex row but their 'Read more' footers don't line up. Make all cards equal height AND push every footer to the bottom so they align, using flexbox only.`,
 [`Cards stretch to equal height (default align-items:stretch) and are themselves flex columns.`,
  `Footer pinned to the bottom via margin-top:auto.`],
 [`Equal-height cards with aligned footers.`],
 ["Flexbox","Layout Systems","Components"],
 [["row stretches cards to equal height","35%"],["card is a column flex container","30%"],["footer pinned with margin-top:auto","25%"],["clean implementation","10%"]],
 [`Make each card <code>display:flex;flex-direction:column</code> and give the footer <code>margin-top:auto</code> so it sinks to the bottom.`],
 `<pre>.row{display:flex;gap:16px;align-items:stretch}
.card{display:flex;flex-direction:column}
.card .footer{margin-top:auto}</pre>`);

T("css","Very Hard",
 "Create a responsive 'sidebar + content' with the Holy Albatross",
 `Implement a layout where a sidebar and main content sit side-by-side when there's room, but stack when the combined width would force either below a threshold — WITHOUT any media query (the Flexbox 'holy albatross' technique).`,
 [`Use flex-wrap + flex-basis with a calc()-based threshold.`,
  `No media queries.`],
 [`A query-less self-stacking two-pane layout.`],
 ["Flexbox","Responsive Design","Layout Systems","Fluid units"],
 [["flex-wrap + basis/grow technique","40%"],["calc()-based breakpoint","30%"],["no media queries","20%"],["correct stack/side-by-side behaviour","10%"]],
 [`Give items <code>flex-grow:1;flex-basis:calc((THRESHOLD - 100%) * 999)</code> — when the container is narrower than THRESHOLD the basis goes huge and items wrap.`],
 `<pre>.wrap{display:flex;flex-wrap:wrap;gap:16px}
.sidebar{flex:1 1 calc((30rem - 100%) * 999)}
.content{flex:999 1 60%}</pre>`);

T("css","Hard",
 "Style accessible focus without hurting mouse users",
 `Replace the removed default outline (a common a11y mistake) with a modern focus style that appears for keyboard users but not on mouse click, works on dark and light backgrounds, and never clips. Explain why outline:none alone is harmful.`,
 [`Use :focus-visible for the keyboard-only ring; never leave focus unstyled.`,
  `Ring must be visible on any background (outline + offset, or box-shadow).`,
  `Explain the harm of removing outlines.`],
 [`An accessible focus style + rationale.`],
 ["Accessibility","Advanced selectors","CSS variables","Project Architecture"],
 [[":focus-visible used correctly","35%"],["ring visible on any background","30%"],["no clipping (offset/box-shadow)","20%"],["clear rationale","15%"]],
 [`<code>:focus-visible</code> shows the ring only for keyboard interaction; pair <code>outline</code> with <code>outline-offset</code> so it never clips.`],
 `<pre>:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
/* removing outlines entirely strands keyboard users who can't see focus */</pre>`);
/* ===================== RESPONSIVE (15) ===================== */
T("responsive","Hard",
 "Rewrite desktop-first CSS as mobile-first",
 `A stylesheet styles everything for desktop then 'undoes' it with max-width queries for phones, which is fragile. Rewrite the approach mobile-first: base styles for small screens, progressive enhancement upward. Convert a three-column desktop grid that becomes one column on mobile.`,
 [`Base (no query) styles target mobile (single column).`,
  `Use min-width queries to add columns at larger sizes.`,
  `Include the viewport meta requirement.`],
 [`A mobile-first version of the layout.`,`The required viewport meta tag.`],
 ["Mobile-first","Media queries","Responsive Design","Breakpoint strategy"],
 [["base styles are the mobile layout","35%"],["min-width queries enhance upward","30%"],["viewport meta present","20%"],["fewer overrides than desktop-first","15%"]],
 [`Mobile-first means the default (query-free) CSS is the phone layout; you only <em>add</em> complexity at <code>min-width</code> breakpoints.`],
 `<pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
.grid{display:grid;gap:16px}                         /* mobile: 1 col */
@media(min-width:600px){.grid{grid-template-columns:1fr 1fr}}
@media(min-width:980px){.grid{grid-template-columns:repeat(3,1fr)}}</pre>`);

T("responsive","Hard",
 "Choose content-driven breakpoints",
 `Instead of copying device widths (iPhone, iPad…), define breakpoints where THIS layout actually breaks. Given a card that becomes cramped below ~280px and a nav that wraps awkwardly around 720px, justify and implement breakpoints driven by the content, not devices.`,
 [`Breakpoints chosen from where the design fails, with justification.`,
  `Implement at least two such breakpoints.`],
 [`Content-driven breakpoints + rationale.`],
 ["Breakpoint strategy","Media queries","Responsive Design"],
 [["breakpoints justified by content, not devices","45%"],["correct min-width implementation","35%"],["clear reasoning","20%"]],
 [`Resize until the layout looks wrong — that width is your breakpoint, regardless of any specific device.`],
 `<pre>/* card needs more room ~ around 30rem */
@media(min-width:30rem){.card{flex-direction:row}}
/* nav fits one row ~ around 45rem */
@media(min-width:45rem){.nav{flex-wrap:nowrap}}</pre>`);

T("responsive","Hard",
 "Use clamp() for fluid type and spacing",
 `Make a hero headline scale fluidly between 1.75rem (mobile) and 3.5rem (desktop) without media queries, and make section padding scale similarly — all with clamp().`,
 [`Headline font-size uses clamp(min, fluid, max).`,
  `Section padding uses clamp too.`,
  `No media queries for these.`],
 [`Fluid type + spacing via clamp().`],
 ["Fluid units","Responsive typography","Responsive Design"],
 [["correct clamp() for headline","40%"],["clamp() for spacing","30%"],["sensible min/preferred/max","20%"],["no media queries","10%"]],
 [`<code>clamp(min, preferred-with-vw, max)</code> — the middle value should mix a rem and a vw so it scales with the viewport.`],
 `<pre>h1{font-size:clamp(1.75rem, 1rem + 3vw, 3.5rem)}
section{padding:clamp(1rem, 4vw, 4rem)}</pre>`);

T("responsive","Very Hard",
 "Serve responsive images with srcset + sizes",
 `A content image displays full-width on mobile but only half-width on desktop. Provide multiple resolutions and a sizes attribute so the browser downloads the smallest sufficient file at every viewport.`,
 [`srcset lists ≥3 width descriptors (w).`,
  `sizes describes the rendered width per breakpoint.`,
  `Fallback src + alt + dimensions.`],
 [`A bandwidth-efficient responsive image.`],
 ["Responsive images","Responsive Design","Multimedia"],
 [["srcset width descriptors","30%"],["accurate sizes attribute","35%"],["fallback + alt + dimensions","20%"],["matches the half/full behaviour","15%"]],
 [`<code>sizes</code> tells the browser the image's rendered width BEFORE layout, so it can pick from <code>srcset</code> early.`],
 `<pre>&lt;img src="p-800.jpg" alt="…" width="800" height="500"
  srcset="p-400.jpg 400w, p-800.jpg 800w, p-1600.jpg 1600w"
  sizes="(min-width:900px) 50vw, 100vw"&gt;</pre>`);

T("responsive","Hard",
 "Make a data table usable on phones",
 `A wide multi-column table is unreadable on phones. Provide a responsive strategy that keeps it accessible: horizontal scroll with a sticky first column on small screens, or a stacked 'cards' transformation. Implement one and justify the accessibility trade-offs.`,
 [`Implement either a scroll container (with sticky first col) or a stacked layout using data-labels.`,
  `Keep header/data relationships clear for screen readers.`],
 [`A responsive table strategy with code.`,`A11y trade-off note.`],
 ["Responsive components","Responsive Design","Accessibility","Tables"],
 [["working responsive strategy","45%"],["header/data relationship preserved","25%"],["a11y trade-offs discussed","20%"],["clean implementation","10%"]],
 [`Scroll containers keep real table semantics; the 'stacked cards' approach needs <code>data-label</code> + generated content to stay understandable.`],
 `<pre>/* Option A: scroll + sticky first column */
.table-wrap{overflow-x:auto}
@media(max-width:600px){th:first-child,td:first-child{position:sticky;left:0;background:#fff}}</pre>`);

T("responsive","Hard",
 "Adapt a navbar into a bottom tab bar on mobile",
 `A top navigation should become a fixed bottom tab bar on phones (thumb-friendly) while remaining a top bar on desktop. Implement the responsive switch with CSS only and keep it accessible.`,
 [`Desktop: nav at top in flow.`,
  `Mobile: nav fixed to bottom, evenly spaced, with safe-area padding.`,
  `Keep nav semantics and current-page indication.`],
 [`A responsive top→bottom nav.`],
 ["Responsive components","Responsive Design","Navigation systems","Positioning"],
 [["top bar on desktop","25%"],["fixed bottom bar on mobile","35%"],["even spacing + safe area","20%"],["accessible (nav + current)","20%"]],
 [`Use <code>position:fixed;bottom:0</code> inside the mobile query and add <code>padding-bottom:env(safe-area-inset-bottom)</code> for notched phones.`],
 `<pre>@media(max-width:700px){
  .nav{position:fixed;left:0;right:0;bottom:0;display:flex;justify-content:space-around;
       padding-bottom:env(safe-area-inset-bottom);background:#fff;border-top:1px solid #ddd}
}</pre>`);

T("responsive","Very Hard",
 "Build a fluid layout with no fixed pixel widths",
 `Recreate a two-pane reader (article + notes) so it has zero fixed pixel widths: panes use fractions/percentages, gaps use rem, and it gracefully stacks when the viewport is narrow — using only intrinsic sizing and one breakpoint.`,
 [`No px widths on layout containers (use fr/%/minmax).`,
  `Stacks below a content breakpoint.`,
  `Text remains readable (measure controlled).`],
 [`A fully fluid two-pane layout.`],
 ["Fluid units","Responsive Design","Layout Systems","Grid"],
 [["no fixed px layout widths","35%"],["graceful stacking","25%"],["readable measure maintained","20%"],["intrinsic sizing (minmax/fr)","20%"]],
 [`<code>grid-template-columns: minmax(0,2fr) minmax(0,1fr)</code> gives proportional panes that never overflow.`],
 `<pre>.reader{display:grid;gap:1.5rem;grid-template-columns:minmax(0,2fr) minmax(0,1fr)}
.reader .article{max-width:65ch}
@media(max-width:48rem){.reader{grid-template-columns:1fr}}</pre>`);

T("responsive","Hard",
 "Handle orientation and hover capability",
 `Adjust a photo grid: 2 columns in portrait, 4 in landscape, and only enable hover zoom effects on devices that actually have a precise pointer (so touch users aren't stuck in a hover state).`,
 [`Use (orientation: …) media features.`,
  `Gate hover effects behind (hover:hover) and (pointer:fine).`],
 [`Orientation + interaction-aware responsive CSS.`],
 ["Media queries","Responsive Design","Motion & UX","Responsive components"],
 [["orientation queries for columns","40%"],["hover gated by hover/pointer media","40%"],["sensible defaults","20%"]],
 [`<code>@media (hover:hover) and (pointer:fine)</code> ensures hover effects only apply to mouse users, not touchscreens.`],
 `<pre>.grid{display:grid;grid-template-columns:repeat(2,1fr)}
@media(orientation:landscape){.grid{grid-template-columns:repeat(4,1fr)}}
@media(hover:hover) and (pointer:fine){.tile:hover{transform:scale(1.05)}}</pre>`);

T("responsive","Hard",
 "Respect user preferences via media queries",
 `Make a component adapt to system preferences: dark colour scheme, reduced motion, and reduced data/contrast where available. Show how each preference changes the component.`,
 [`Use prefers-color-scheme, prefers-reduced-motion, prefers-contrast.`,
  `Each query meaningfully changes the output.`],
 [`A preference-aware component.`],
 ["Media queries","Accessibility","Motion & UX","Responsive Design"],
 [["prefers-color-scheme handled","35%"],["prefers-reduced-motion handled","35%"],["prefers-contrast handled","20%"],["meaningful changes","10%"]],
 [`These are 'user preference' media features — treat them as accessibility requirements, not optional polish.`],
 `<pre>@media(prefers-color-scheme:dark){:root{--bg:#10181f;--ink:#e6eef4}}
@media(prefers-reduced-motion:reduce){*{animation:none;transition:none}}
@media(prefers-contrast:more){.btn{border:2px solid currentColor}}</pre>`);

T("responsive","Very Hard",
 "Use container queries for component-level responsiveness",
 `A 'media object' card (image + text) appears both in a wide main column and a narrow sidebar. It should switch from horizontal to vertical based on its OWN width, not the viewport. Implement with container queries and give a viewport-query fallback.`,
 [`Establish a container with container-type:inline-size.`,
  `Use @container to switch layout by container width.`,
  `Provide a @supports / viewport fallback.`],
 [`A container-query responsive component.`],
 ["Responsive components","Responsive Design","Layout Systems","Grid"],
 [["container-type established","30%"],["@container layout switch","35%"],["correct behaviour in both contexts","20%"],["fallback provided","15%"]],
 [`Container queries respond to the parent's size — perfect when the same component lives in differently-sized regions.`],
 `<pre>.card-wrap{container-type:inline-size}
.card{display:grid;gap:12px}
@container (min-width:380px){.card{grid-template-columns:120px 1fr}}</pre>`);

T("responsive","Hard",
 "Prevent layout shift from images and fonts",
 `A page janks as images and web fonts load (CLS). Apply the techniques that reserve space and stabilise rendering so content doesn't jump.`,
 [`Images have width/height (or aspect-ratio) to reserve space.`,
  `Fonts use font-display:swap and a sensible fallback metric.`,
  `Explain how each prevents shift.`],
 [`Anti-CLS measures with explanation.`],
 ["Responsive images","Responsive Design","Typography","Performance"],
 [["dimensioned images / aspect-ratio","40%"],["font-display + fallback strategy","35%"],["clear CLS reasoning","25%"]],
 [`Always set image dimensions so the browser reserves the box before the file arrives; <code>font-display:swap</code> avoids invisible text and reflow.`],
 `<pre>img{aspect-ratio:16/9;width:100%;height:auto}
@font-face{font-family:Inter;src:url(inter.woff2);font-display:swap}</pre>`);

T("responsive","Very Hard",
 "Make a responsive dashboard with mixed widgets",
 `Lay out a dashboard of widgets of different importance: a wide chart (spans 2), several stat cards, and a tall activity feed. It should reflow sensibly from 1 column (mobile) → 2 (tablet) → 4 (desktop) with the chart always prominent, using grid spans.`,
 [`Auto-responsive grid (auto-fit or breakpoints) with explicit spans for chart/feed.`,
  `Chart stays prominent at every size; feed can span rows.`],
 [`A responsive dashboard grid.`],
 ["Grid","Responsive Design","Layout Systems","Complex layouts","Components"],
 [["responsive 1→2→4 column flow","35%"],["chart span emphasised","25%"],["feed row-span where useful","20%"],["clean, query-light approach","20%"]],
 [`Combine an auto-fit base with <code>grid-column:span 2</code> on the chart; use <code>min()</code> so spans don't overflow narrow screens.`],
 `<pre>.dash{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.chart{grid-column:span 2}
@media(max-width:520px){.chart{grid-column:span 1}}</pre>`);

T("responsive","Hard",
 "Optimize tap targets and spacing for touch",
 `Audit and fix a form/menu for touch: ensure all interactive targets meet the 44×44px minimum, increase spacing between adjacent links on mobile, and enlarge form controls — without changing the desktop look.`,
 [`Interactive elements ≥ 44px min-height/width on touch.`,
  `Increased spacing only at small sizes / touch.`,
  `Desktop unaffected.`],
 [`Touch-optimised sizing rules.`],
 ["Responsive components","Responsive Design","Accessibility","Forms"],
 [["≥44px targets on touch","40%"],["increased mobile spacing","25%"],["desktop look preserved","20%"],["uses appropriate queries","15%"]],
 [`The ~44px target size is a WCAG/Apple guideline; apply the bump in a mobile or <code>pointer:coarse</code> query so desktop stays compact.`],
 `<pre>@media(pointer:coarse){
  .btn,.nav a,input,select{min-height:44px}
  .nav a{padding:12px 14px}
}</pre>`);

T("responsive","Very Hard",
 "Build an intrinsically responsive 'RAM' grid",
 `Implement the 'Repeat-Auto-Minmax + min()' (RAM) pattern so a grid is responsive on the tiniest screens too: it must never cause overflow even below the minmax minimum (e.g., 250px on a 240px screen).`,
 [`Use repeat(auto-fit, minmax(min(100%, 250px), 1fr)).`,
  `Explain why the min() guard prevents overflow.`],
 [`An overflow-proof responsive grid.`,`A short explanation.`],
 ["Grid","Responsive Design","Fluid units","Layout Systems"],
 [["min() guard inside minmax","45%"],["no overflow below the minimum","30%"],["clear explanation","25%"]],
 [`<code>minmax(min(100%, 250px), 1fr)</code>: on a 240px screen the track falls back to 100% instead of forcing 250px and overflowing.`],
 `<pre>.ram{display:grid;gap:16px;
  grid-template-columns:repeat(auto-fit, minmax(min(100%, 250px), 1fr))}</pre>`);

T("responsive","Expert",
 "Engineer a fully responsive landing page system",
 `Combine everything: a landing page that is mobile-first, uses fluid type (clamp), an auto-fit feature grid, container-query cards, responsive images (srcset/sizes), a top→drawer nav, and honours reduced-motion/dark-scheme — with the minimum number of media queries. Describe your breakpoint and testing strategy.`,
 [`Mobile-first base; clamp() typography; auto-fit grids; ≥1 container query; responsive images.`,
  `Nav collapses to a drawer; preference queries handled.`,
  `Justify each breakpoint and outline how you'd test across devices.`],
 [`An integrated responsive landing-page CSS architecture.`,`Breakpoint + testing strategy.`],
 ["Responsive Design","Mobile-first","Fluid units","Responsive components","Landing Pages","Accessibility"],
 [["mobile-first + minimal queries","25%"],["fluid type + auto-fit grids","25%"],["container query + responsive images","25%"],["preferences + testing strategy","25%"]],
 [`Favour intrinsic techniques (clamp, auto-fit, container queries) so you need breakpoints only where content genuinely breaks.`],
 `<p>Strategy: start at 320px, add a breakpoint only when the layout visibly fails (likely ~600px for grids and ~760px for nav). Use clamp() for type/space, auto-fit grids for cards, a container query for the reusable card, srcset/sizes for imagery, and the checkbox-hack drawer for nav. Test with dev-tools device emulation, real phones, keyboard-only navigation, and forced dark/reduced-motion settings.</p>`);
/* ===================== DEBUGGING (20) ===================== */
T("debug","Hard",
 "Fix five structural errors in an HTML document",
 `Find and correct all five errors in this document, then state the line and fix for each:<pre>&lt;!DOCTYP html&gt;
&lt;HTML&gt;
&lt;head&gt;&lt;title&gt;My Blog&lt;title&gt;&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to My Blog&lt;/h2&gt;
&lt;p&gt;This is my first post.
&lt;/BODY&gt;
&lt;html&gt;</pre>`,
 [`Identify exactly five distinct errors.`,
  `Provide the corrected line for each.`],
 [`A list of 5 errors with fixes.`,`The corrected document.`],
 ["Debugging","Validation","Semantic HTML","Document outline"],
 [["DOCTYPE typo found & fixed","20%"],["mismatched title/h1 tags fixed","30%"],["unclosed paragraph fixed","20%"],["closing html should be /html","20%"],["clarity of explanation","10%"]],
 [`Check that every opening tag has a correctly-spelled matching closing tag, and that the document ends with &lt;/html&gt;, not &lt;html&gt;.`],
 `<p>(1) <code>&lt;!DOCTYP html&gt;</code> → <code>&lt;!DOCTYPE html&gt;</code>. (2) <code>&lt;title&gt;My Blog&lt;title&gt;</code> → close with <code>&lt;/title&gt;</code>. (3) <code>&lt;h1&gt;…&lt;/h2&gt;</code> → close with <code>&lt;/h1&gt;</code>. (4) the <code>&lt;p&gt;</code> is never closed → add <code>&lt;/p&gt;</code>. (5) final <code>&lt;html&gt;</code> → <code>&lt;/html&gt;</code>.</p>`);

T("debug","Hard",
 "Repair a broken list, link and image",
 `Fix the four errors:<pre>&lt;a href=https://www.example.com&gt;Visit&lt;/a&gt;
&lt;img src="photo.jpg"&gt;
&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/il&gt;
  &lt;p&gt;Third item&lt;/p&gt;
&lt;/ol&gt;</pre>`,
 [`Identify four issues (unquoted attribute, missing alt, wrong closing tag, mismatched list tags / invalid child).`,
  `Give the corrected markup.`],
 [`4 errors + corrected snippet.`],
 ["Debugging","Validation","Lists","Accessibility"],
 [["unquoted href fixed","20%"],["missing alt added","25%"],["&lt;/il&gt; → &lt;/li&gt;","25%"],["list opened ul but closed ol; p invalid as li sibling","30%"]],
 [`A &lt;ul&gt; must be closed by &lt;/ul&gt;, and only &lt;li&gt; may be a direct child — a &lt;p&gt; there is invalid.`],
 `<pre>&lt;a href="https://www.example.com"&gt;Visit&lt;/a&gt;
&lt;img src="photo.jpg" alt="Description"&gt;
&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>`);

T("debug","Hard",
 "Fix five CSS syntax and value errors",
 `Correct every error:<pre>body { background colour: lightyellow; font-family: Arial }
h1 { color: darkblue; font-size: 24; text-align: centre; }
p  { colour: #333; line-height 1.5; }</pre>`,
 [`Find all five errors (property spelling, missing units, invalid value, missing colon, British spellings).`,
  `Give the corrected stylesheet.`],
 [`5 errors + corrected CSS.`],
 ["Debugging","CSS variables","Validation","Typography"],
 [["background-color spelling/hyphen","20%"],["font-size needs a unit (24px)","20%"],["text-align:center (not centre)","20%"],["color (not colour) ×2","20%"],["missing colon in line-height","20%"]],
 [`CSS uses American spellings (<code>color</code>, <code>center</code>), every declaration needs a colon, and most lengths need units.`],
 `<pre>body{background-color:lightyellow;font-family:Arial}
h1{color:darkblue;font-size:24px;text-align:center}
p{color:#333;line-height:1.5}</pre>`);

T("debug","Hard",
 "Correct a table with logical and tag errors",
 `This results table is missing tags and has logic errors. Fix it:<pre>&lt;table&gt;
&lt;tr&gt;&lt;td&gt;Student&lt;/td&gt;&lt;td&gt;Score&lt;/td&gt;&lt;td&gt;Result&lt;/td&gt;
&lt;tr&gt;&lt;th&gt;Yasmine&lt;/th&gt;&lt;td&gt;17&lt;/td&gt;&lt;td&gt;Pass&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;th&gt;Omar&lt;/th&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;Fail&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>`,
 [`Find the unclosed header row and the misuse of td vs th in the header.`,
  `Produce a corrected, accessible table.`],
 [`Identified errors + corrected table.`],
 ["Debugging","Tables","Accessible tables","Validation"],
 [["header row not closed (&lt;/tr&gt;) fixed","30%"],["header cells should be th, not td","30%"],["scope added for accessibility","20%"],["valid structure","20%"]],
 [`The first row defines column headers, so its cells should be &lt;th scope="col"&gt; and the row must be closed before the next begins.`],
 `<pre>&lt;table&gt;
  &lt;tr&gt;&lt;th scope="col"&gt;Student&lt;/th&gt;&lt;th scope="col"&gt;Score&lt;/th&gt;&lt;th scope="col"&gt;Result&lt;/th&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;th scope="row"&gt;Yasmine&lt;/th&gt;&lt;td&gt;17&lt;/td&gt;&lt;td&gt;Pass&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;th scope="row"&gt;Omar&lt;/th&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;Fail&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>`);

T("debug","Hard",
 "Find why a CSS rule 'does nothing'",
 `A developer added <span class="inline-code">.card .title{color:red}</span> but the title stays black. The markup is <span class="inline-code">&lt;div class="card"&gt;&lt;h3 class="card-title"&gt;Hi&lt;/h3&gt;&lt;/div&gt;</span>. Diagnose why and give two correct fixes.`,
 [`Explain the selector mismatch.`,
  `Provide two valid fixes.`],
 [`A diagnosis + two fixes.`],
 ["Debugging","Specificity","CSS variables"],
 [["correct mismatch diagnosis (.title vs .card-title)","50%"],["fix 1 (match class)","25%"],["fix 2 (alternative selector)","25%"]],
 [`The selector targets a descendant with class <code>title</code>, but the element's class is <code>card-title</code> — the rule never matches.`],
 `<p>Fix A: change the selector to <code>.card .card-title</code>. Fix B: use a type selector <code>.card h3</code>. (Either matches the actual element.)</p>`);

T("debug","Very Hard",
 "Debug an unexpectedly wide element",
 `A <span class="inline-code">.box{width:100%;padding:20px;border:2px solid}</span> inside a container overflows horizontally and triggers a scrollbar. Explain the cause and give the one-line fix plus a global best-practice reset.`,
 [`Explain content-box width math causing overflow.`,
  `Give the box-sizing fix (local + global reset).`],
 [`A diagnosis + fix.`],
 ["Debugging","Box model","box-sizing","Layout Systems"],
 [["correct overflow cause (100% + padding + border)","45%"],["box-sizing:border-box local fix","30%"],["global *{box-sizing:border-box} reset","25%"]],
 [`<code>width:100%</code> + padding + border exceeds 100% under content-box; <code>border-box</code> folds padding/border into the width.`],
 `<pre>*{box-sizing:border-box}
.box{width:100%;padding:20px;border:2px solid} /* now fits exactly */</pre>`);

T("debug","Very Hard",
 "Fix a flex layout that won't center vertically",
 `<span class="inline-code">.wrap{display:flex;justify-content:center}</span> centres horizontally but the child sticks to the top. The author also tried <span class="inline-code">vertical-align:middle</span> with no effect. Explain both mistakes and fix it.`,
 [`Explain that align-items handles the cross axis in flex (not vertical-align).`,
  `Add the correct property and ensure the container has height.`],
 [`A diagnosis + working fix.`],
 ["Debugging","Flexbox","Layout Systems"],
 [["align-items is the missing piece","40%"],["vertical-align doesn't apply to flex items","25%"],["container needs height","25%"],["clarity","10%"]],
 [`In a row-direction flex container, vertical centring is <code>align-items:center</code>; <code>vertical-align</code> only affects inline/table content.`],
 `<pre>.wrap{display:flex;justify-content:center;align-items:center;min-height:100vh}</pre>`);

T("debug","Hard",
 "Resolve a z-index that refuses to work",
 `A modal with <span class="inline-code">z-index:9999</span> still appears behind a header with <span class="inline-code">z-index:10</span>. The modal's parent has <span class="inline-code">transform:translateZ(0)</span> and <span class="inline-code">opacity:.98</span>. Explain why and fix it.`,
 [`Explain the trapped stacking context created by transform/opacity.`,
  `Fix by removing the context or moving the modal to the top level.`],
 [`A diagnosis + fix.`],
 ["Debugging","z-index","Positioning"],
 [["stacking context cause identified","50%"],["valid fix (portal / remove context)","35%"],["clarity","15%"]],
 [`<code>transform</code> and <code>opacity&lt;1</code> create a new stacking context, so the modal's 9999 only competes inside its parent — not against the header.`],
 `<p>Fix: render the modal as a direct child of &lt;body&gt; (a portal) so it shares the root stacking context, or remove the <code>transform</code>/<code>opacity</code> from the ancestor.</p>`);

T("debug","Hard",
 "Stop a sticky element from not sticking",
 `<span class="inline-code">position:sticky;top:0</span> on a sidebar does nothing. The sidebar's parent has <span class="inline-code">overflow:hidden</span> and the sidebar itself has no height constraint. Identify the two common sticky-killers and fix them.`,
 [`Explain overflow on an ancestor disabling sticky, and the need for room to scroll.`,
  `Provide the fix.`],
 [`A diagnosis + fix.`],
 ["Debugging","Positioning","Layout Systems"],
 [["overflow:hidden ancestor cause","40%"],["needs a scroll/height context","30%"],["valid fix","30%"]],
 [`Sticky fails if any ancestor has <code>overflow:hidden/auto/scroll</code>, or if the sticky element's container isn't tall enough to scroll within.`],
 `<p>Fix: remove <code>overflow:hidden</code> from the ancestor (or set it to visible) and ensure the parent is taller than the sidebar so there is room to stick.</p>`);

T("debug","Hard",
 "Eliminate a mysterious horizontal scrollbar",
 `A page has a tiny horizontal scroll on mobile. Outline a systematic method to find the offending element and list the four most common culprits, then give CSS guards that prevent it.`,
 [`Describe a method (e.g., outline-all / binary search via dev tools).`,
  `List ≥4 common causes (100vw, oversized images, negative margins, fixed widths).`,
  `Give preventive CSS.`],
 [`A debugging method + causes + guards.`],
 ["Debugging","Responsive Design","Layout Systems"],
 [["systematic find method","30%"],["four valid causes","35%"],["preventive CSS guards","35%"]],
 [`<code>* { outline:1px solid red }</code> or checking <code>document.scrollingElement.scrollWidth</code> quickly reveals the overflowing node.`],
 `<pre>html,body{overflow-x:clip;max-width:100%}
img,video{max-width:100%;height:auto}
/* avoid 100vw (it ignores the scrollbar); prefer 100% */</pre>`);

T("debug","Very Hard",
 "Refactor duplicated CSS into reusable classes",
 `Three buttons repeat the same 9 declarations with only colour differing. Refactor into a base class plus modifier classes (BEM-style) and a token for the accent, removing all duplication.`,
 [`Extract a .btn base; modifiers change only colour.`,
  `Use a CSS variable for the accent.`,
  `No duplicated declarations remain.`],
 [`A refactored, DRY button system.`],
 ["Debugging","Project Architecture","CSS variables","Components"],
 [["base class holds shared rules","35%"],["modifiers change only colour","30%"],["accent via variable","20%"],["zero duplication","15%"]],
 [`Put everything common in <code>.btn</code>; let <code>.btn--danger</code> only override <code>--accent</code>.`],
 `<pre>.btn{--accent:#0f7f79;background:var(--accent);color:#fff;padding:9px 14px;border-radius:9px;border:0;font-weight:700;cursor:pointer}
.btn--danger{--accent:#c0392b}
.btn--ghost{background:transparent;color:var(--accent);border:1px solid var(--accent)}</pre>`);

T("debug","Very Hard",
 "Fix overlapping/duplicate IDs breaking behaviour",
 `Two elements share <span class="inline-code">id="email"</span>; a &lt;label for="email"&gt; focuses the wrong field and anchor links jump to the wrong place. Explain the rule and refactor to valid, accessible markup.`,
 [`Explain that IDs must be unique per document.`,
  `Refactor so labels and anchors target the correct elements.`],
 [`A diagnosis + corrected markup.`],
 ["Debugging","Validation","Accessibility","Forms"],
 [["uniqueness rule explained","35%"],["labels re-targeted correctly","35%"],["anchors fixed","20%"],["valid result","10%"]],
 [`<code>getElementById</code>, <code>label[for]</code> and <code>#anchor</code> all use the FIRST match — duplicates silently misbehave.`],
 `<p>Give each field a unique id (<code>signup-email</code>, <code>login-email</code>) and point each label's <code>for</code> and each anchor's <code>href</code> at the right one.</p>`);

T("debug","Hard",
 "Repair an animation that flickers and resets",
 `A CSS animation plays then snaps back to the start, and the element flashes its final value before animating. Diagnose the two issues (missing fill-mode, transition vs animation confusion) and fix them.`,
 [`Explain animation-fill-mode:forwards/both to hold the end state.`,
  `Fix the initial flash with the start keyframe / fill-mode:both.`],
 [`A diagnosis + corrected animation.`],
 ["Debugging","Animations","Motion & UX"],
 [["fill-mode prevents reset","45%"],["start flash fixed (both)","35%"],["clarity","20%"]],
 [`By default an animated element returns to its un-animated style; <code>animation-fill-mode:both</code> applies the first frame before and the last frame after.`],
 `<pre>@keyframes in{from{opacity:0}to{opacity:1}}
.el{opacity:0;animation:in .4s forwards}
/* or simply: animation:in .4s both; */</pre>`);

T("debug","Very Hard",
 "Optimize a slow, janky scroll animation",
 `A parallax effect animates <span class="inline-code">top</span> and <span class="inline-code">box-shadow</span> on scroll and stutters badly. Explain why these properties are expensive, and refactor to GPU-friendly properties and techniques.`,
 [`Explain layout/paint vs composite; animate transform/opacity instead.`,
  `Mention will-change sparingly and avoid animating layout props.`],
 [`A performance diagnosis + refactor.`],
 ["Debugging","Transforms","Motion & UX","Performance"],
 [["layout/paint vs composite explained","35%"],["switch to transform/opacity","35%"],["judicious will-change","20%"],["clarity","10%"]],
 [`Animating <code>top</code> triggers layout every frame; <code>transform:translateY()</code> runs on the compositor and stays smooth.`],
 `<pre>/* before */ .layer{top:calc(var(--s)*0.5px)}
/* after  */ .layer{transform:translateY(calc(var(--s)*0.5px));will-change:transform}</pre>`);

T("debug","Hard",
 "Fix a form that submits nothing to PHP",
 `A registration form posts to PHP but <span class="inline-code">$_POST</span> is empty. The form is <span class="inline-code">&lt;form action="register.php"&gt;</span> and the fields have ids but the submit is <span class="inline-code">&lt;div onclick&gt;Submit&lt;/div&gt;</span>. List every reason and fix them.`,
 [`Identify missing method="post", missing name attributes, and the non-submit 'button'.`,
  `Provide corrected markup.`],
 [`The causes + corrected form.`],
 ["Debugging","Forms","Validation","Project Architecture"],
 [["method=post missing","30%"],["inputs need name (not just id)","35%"],["real submit button needed","25%"],["valid result","10%"]],
 [`PHP reads <code>$_POST</code> by the field's <code>name</code> (not <code>id</code>), the form needs <code>method="post"</code>, and a &lt;div&gt; can't submit a form.`],
 `<pre>&lt;form action="register.php" method="post"&gt;
  &lt;input name="email" type="email" required&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>`);

T("debug","Hard",
 "Correct invalid nesting that renders 'oddly'",
 `<pre>&lt;p&gt;Intro &lt;div&gt;block inside paragraph&lt;/div&gt; more&lt;/p&gt;
&lt;a href="#"&gt;&lt;button&gt;Go&lt;/button&gt;&lt;/a&gt;
&lt;ul&gt;&lt;div&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/div&gt;&lt;/ul&gt;</pre> Identify the three invalid-nesting problems and rewrite correctly.`,
 [`Explain block-in-&lt;p&gt;, interactive-in-interactive, and div-as-ul-child.`,
  `Provide valid markup.`],
 [`3 nesting errors + fixes.`],
 ["Debugging","Validation","Semantic HTML"],
 [["block element can't be inside &lt;p&gt;","35%"],["button must not be inside a link","35%"],["only &lt;li&gt; may be a direct ul child","30%"]],
 [`Phrasing content goes in &lt;p&gt;; never nest interactive elements; a &lt;ul&gt; may only directly contain &lt;li&gt;.`],
 `<pre>&lt;div&gt;Intro &lt;div&gt;block&lt;/div&gt; more&lt;/div&gt;
&lt;a href="#" class="btn"&gt;Go&lt;/a&gt;
&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</pre>`);

T("debug","Very Hard",
 "Diagnose a media query that never triggers",
 `A site looks identical on phones despite a media query. The head has no viewport meta, and the query is written <span class="inline-code">@media screen and max-width: 600px</span>. Find both bugs and fix them.`,
 [`Add the viewport meta (without it mobile uses a ~980px virtual width).`,
  `Fix the query syntax (parentheses around the feature).`],
 [`Both bugs + fixes.`],
 ["Debugging","Responsive Design","Media queries","Mobile-first"],
 [["missing viewport meta identified","45%"],["query syntax needs parentheses","40%"],["clarity","15%"]],
 [`Without the viewport meta, phones render at a fake wide width so <code>max-width:600px</code> never matches; also media features must be parenthesised.`],
 `<pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
@media screen and (max-width:600px){ … }</pre>`);

T("debug","Hard",
 "Fix inaccessible markup flagged by an audit",
 `An audit flags: images without alt, form inputs without labels, buttons with no accessible name (icon-only), and a colour-only error state. Provide the fix for each finding.`,
 [`Address all four findings with concrete code.`,
  `Add a non-colour cue for errors.`],
 [`Four accessibility fixes.`],
 ["Debugging","Accessibility","Forms","Validation"],
 [["alt added (meaningful/empty as appropriate)","25%"],["labels associated with inputs","25%"],["accessible name for icon buttons","25%"],["non-colour error cue","25%"]],
 [`Decorative images get <code>alt=""</code>; meaningful ones get descriptive alt; never rely on colour alone to signal errors.`],
 `<pre>&lt;img src="x.png" alt="Sales chart"&gt;
&lt;label for="e"&gt;Email&lt;/label&gt;&lt;input id="e"&gt;
&lt;button aria-label="Close"&gt;&lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;&lt;/button&gt;
&lt;p class="err"&gt;&lt;span aria-hidden="true"&gt;⚠ &lt;/span&gt;Required&lt;/p&gt;</pre>`);

T("debug","Very Hard",
 "Untangle conflicting specificity overrides",
 `A teammate keeps adding <span class="inline-code">!important</span> to win styling fights and now nothing can be overridden. Explain why this is an anti-pattern, and refactor a small example (an over-specific <span class="inline-code">#sidebar ul li a.link</span> rule) to a maintainable approach.`,
 [`Explain the specificity arms race and why !important compounds it.`,
  `Refactor to a single low-specificity, intention-revealing class.`],
 [`An explanation + refactor.`],
 ["Debugging","Specificity","Cascade","Project Architecture"],
 [["arms-race anti-pattern explained","35%"],["over-specific selector flattened","35%"],["!important removed","20%"],["clarity","10%"]],
 [`Keep selectors flat and low-specificity (single classes) so later rules can override naturally without <code>!important</code>.`],
 `<p>Replace <code>#sidebar ul li a.link {…!important}</code> with a single class <code>.sidebar-link {…}</code>. Low, consistent specificity means source order resolves conflicts predictably and no <code>!important</code> is needed.</p>`);

T("debug","Expert",
 "Audit and refactor a messy component for quality",
 `You inherit a 'card' component with: inline styles, a div used as a button, duplicated colours, a fixed pixel width that overflows on mobile, no focus styles, and an image with no alt. Produce a prioritised list of problems by severity (accessibility, responsiveness, maintainability) and a fully refactored version.`,
 [`Categorise each issue by severity and type.`,
  `Refactor to semantic, responsive, token-based, accessible markup+CSS.`,
  `Explain the order you'd fix them in.`],
 [`A prioritised audit + refactored component.`],
 ["Debugging","Project Architecture","Accessibility","Responsive Design","Components"],
 [["issues correctly categorised by severity","25%"],["accessibility fixes (button, alt, focus)","30%"],["responsive + token refactor","30%"],["clear prioritisation rationale","15%"]],
 [`Fix accessibility and broken behaviour first (real button, alt, focus), then responsiveness (drop fixed width), then maintainability (tokens, remove inline styles).`],
 `<pre>&lt;article class="card"&gt;
  &lt;img class="card__img" src="m.jpg" alt="Module cover"&gt;
  &lt;h3 class="card__title"&gt;Web Techniques&lt;/h3&gt;
  &lt;button class="btn"&gt;Open&lt;/button&gt;
&lt;/article&gt;</pre>
<pre>.card{--pad:16px;max-width:100%;padding:var(--pad);border-radius:12px}
.card__img{width:100%;height:auto}
.btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}</pre>`);
/* ===================== PRACTICAL PROJECTS (20) ===================== */
T("project","Very Hard",
 "Build a complete responsive landing page",
 `Build a single-file landing page for the AI Exam Planner: sticky header with logo + nav + CTA, a hero (headline, sub-text, two CTAs, illustration), a 3-card feature grid, a testimonial, a pricing teaser, and a footer. It must be semantic, responsive (mobile→desktop), accessible and themable.`,
 [`Semantic landmarks + gap-free heading outline; one h1.`,
  `Mobile-first CSS; feature grid uses auto-fit; nav collapses on small screens.`,
  `Colours via CSS variables; visible focus states; all images have alt.`,
  `Single HTML file with internal CSS.`],
 [`A complete, working index.html landing page.`,`Responsive behaviour at ≥3 widths.`],
 ["Landing Pages","Semantic HTML","Responsive Design","Flexbox","Grid","Accessibility","CSS variables"],
 [["semantic structure + outline","20%"],["responsive across breakpoints","25%"],["visual polish & token-based theming","20%"],["accessibility (focus, alt, contrast)","20%"],["clean, single-file architecture","15%"]],
 [`Start mobile-first, lay the hero with flex/grid, and use <code>repeat(auto-fit,minmax(240px,1fr))</code> for features so it needs almost no media queries.`],
 `<p>Model approach: <code>&lt;header&gt;</code> (flex, sticky) → <code>&lt;main&gt;</code> with <code>&lt;section&gt;</code>s (hero grid 1fr/1fr that stacks on mobile; features auto-fit grid; pricing) → <code>&lt;footer&gt;</code>. Define <code>:root</code> tokens for colour/space; add <code>:focus-visible</code> rings; collapse nav into a checkbox drawer under 700px. Validate the outline and tab-order before styling polish.</p>`);

T("project","Very Hard",
 "Build the module-cards dashboard (front-end)",
 `Recreate the Exam Planner dashboard UI (no backend): a summary strip (total modules, nearest exam, hardest module, average progress), then a responsive grid of module cards each showing name, teacher, difficulty badge, a progress bar, and edit/delete actions. Use realistic placeholder data.`,
 [`Summary strip is a responsive flex/grid of stat tiles.`,
  `Module cards in an auto-fit grid; difficulty shown as a colour-coded badge; progress as a styled bar/meter.`,
  `Actions are real buttons/links with accessible names; cards are articles.`],
 [`A complete dashboard page with summary + card grid.`],
 ["Components","Grid","Flexbox","Responsive Design","Semantic HTML","Accessibility"],
 [["summary tiles + correct metrics layout","25%"],["responsive card grid","25%"],["badges + progress visualisation","25%"],["accessible actions + semantics","25%"]],
 [`Use <code>&lt;meter&gt;</code> or a styled bar for progress, and map difficulty Easy/Medium/Hard to three badge colours via a data attribute.`],
 `<p>Layout: <code>.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}</code>; <code>.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}</code>. Each card is an <code>&lt;article&gt;</code> with <code>&lt;h3&gt;</code>, a <code>data-diff</code> badge, a progress bar (width = progress%), and Edit/Delete buttons with aria-labels.</p>`);

T("project","Very Hard",
 "Build a personal portfolio page",
 `Build a one-page portfolio: hero with name/role/photo, an 'About' section, a projects grid (cards with image, title, tags, links), a skills section, and a contact form. Must be semantic, responsive, accessible and have a coherent visual identity.`,
 [`Semantic sections with a clean heading outline; portfolio cards are articles.`,
  `Responsive grid for projects; contact form fully labelled with native validation.`,
  `Consistent type scale and spacing via tokens; dark-mode optional.`],
 [`A complete portfolio page.`],
 ["Portfolio Pages","Semantic HTML","Responsive Design","Grid","Forms","Typography","Accessibility"],
 [["semantic, well-outlined structure","20%"],["responsive projects grid","25%"],["accessible, validating contact form","25%"],["cohesive visual identity","30%"]],
 [`A constrained type scale + one accent colour + generous whitespace reads as 'designed'; let the projects grid auto-fit.`],
 `<p>Structure: hero → about → <code>#projects</code> (auto-fit card grid) → skills (tag chips) → contact form (labelled, <code>type</code>s + <code>required</code>). Tie it together with <code>:root</code> tokens, a 65ch measure on prose, and visible focus rings.</p>`);

T("project","Very Hard",
 "Build a product detail page",
 `Build an e-commerce product page: image gallery (main + thumbnails), product title, price, rating, variant selector (size via radios, colour via swatches), quantity stepper, add-to-cart button, and a tabbed description/specs/reviews area. Front-end only.`,
 [`Gallery + thumbnails responsive; variant controls are accessible form controls.`,
  `Tabs use the correct ARIA roles (static markup acceptable).`,
  `Sticky buy box on desktop, stacked on mobile.`],
 [`A complete product page UI.`],
 ["Components","Forms","Responsive Design","Grid","Accessibility","Complex layouts"],
 [["responsive gallery + buy box","25%"],["accessible variant controls","25%"],["tabbed info area (roles)","25%"],["responsive/sticky behaviour","25%"]],
 [`Colour swatches can be radio inputs with visually-hidden labels; the buy box uses <code>position:sticky;top</code> on desktop only.`],
 `<p>Two-column grid (gallery | details) collapsing to one column on mobile. Variants as radio groups (size) and labelled swatches (colour). Quantity as <code>type="number" min="1"</code>. Description area as an ARIA tabs scaffold.</p>`);

T("project","Hard",
 "Build a registration + login UI flow",
 `Build the front-end for the Exam Planner auth: a registration form (name, email, password, confirm) and a login form, with shared styling, inline validation hints, password requirements, and a link to switch between them. No backend, but the markup must be PHP-ready.`,
 [`Both forms fully labelled, with native validation and described-by hints.`,
  `name attributes match the schema (name, email, password).`,
  `Accessible error summary pattern included.`],
 [`Registration + login UI, PHP-ready.`],
 ["Forms","Validation","Accessibility","Components","Project Architecture"],
 [["both forms labelled + validating","30%"],["password rules + confirm handling","25%"],["PHP-ready name attributes","20%"],["error summary + switch link accessible","25%"]],
 [`Mirror your DB columns in the <code>name</code> attributes so <code>$_POST['email']</code> etc. map directly when you wire up PHP.`],
 `<p>Two &lt;form&gt;s posting to register.php / login.php with <code>method="post"</code>. Email <code>type="email"</code>, password <code>minlength="8"</code>, confirm field, <code>aria-describedby</code> hints, and a role="alert" error summary placeholder.</p>`);

T("project","Very Hard",
 "Build a responsive navigation system",
 `Build a complete site navigation: desktop horizontal bar with a dropdown, a search field, and a CTA; on mobile it collapses into an accessible hamburger drawer. Include active-page indication and a skip link.`,
 [`Semantic nav + list; dropdown works on hover and focus.`,
  `Mobile drawer toggled accessibly (checkbox-hack or minimal JS), with a scrim and Esc-friendly structure.`,
  `Skip link + aria-current + visible focus.`],
 [`A full responsive nav component.`],
 ["Navigation systems","Responsive components","Flexbox","Accessibility","Positioning"],
 [["desktop bar + accessible dropdown","30%"],["mobile drawer with scrim","30%"],["skip link + aria-current","20%"],["responsive switch quality","20%"]],
 [`Use <code>:focus-within</code> for the dropdown and a checkbox (or a button + minimal JS) for the drawer; never hide nav from keyboard users.`],
 `<p>Desktop: flex nav, dropdown via <code>:hover/:focus-within</code>. Mobile (≤760px): nav fixed off-canvas, revealed by a labelled toggle; add a scrim and trap-free focus order. Mark the current link with <code>aria-current="page"</code>.</p>`);

T("project","Hard",
 "Build a pricing section with three tiers",
 `Build a pricing section: three plans (Free/Pro/Team), each with price, feature list, and CTA; Pro is highlighted as 'recommended'. It must be responsive (3 columns → 1), accessible, and use a monthly/annual toggle (CSS-only) that swaps the prices.`,
 [`Plans are articles in a responsive grid; recommended plan visually + programmatically distinct.`,
  `Feature lists use ul; CTAs are descriptive.`,
  `Monthly/annual toggle swaps prices without layout jump.`],
 [`A responsive, toggleable pricing section.`],
 ["Components","Grid","Responsive Design","Advanced selectors","Accessibility"],
 [["responsive 3→1 plan grid","25%"],["recommended plan distinct","20%"],["working CSS-only price toggle","30%"],["accessible lists + CTAs","25%"]],
 [`Stack both price sets in one cell and toggle opacity via a checkbox so switching never resizes the cards.`],
 `<p>Grid of 3 <code>&lt;article&gt;</code> plans; <code>.recommended</code> scaled/outlined and <code>aria-label="Recommended"</code>. A radio/checkbox controls <code>.monthly/.annual</code> visibility. Collapses to one column under ~720px.</p>`);

T("project","Hard",
 "Build a blog index + article layout",
 `Build a two-template blog: an index listing post cards (thumbnail, title, excerpt, date, tag) in a responsive grid, and an article template (title, meta, hero image, prose with proper measure, pull-quotes, related posts). Semantic and readable.`,
 [`Index cards are articles in an auto-fit grid; dates use &lt;time&gt;.`,
  `Article prose limited to a readable measure; figures/blockquotes semantic.`,
  `Consistent typography and spacing.`],
 [`Blog index + article templates.`],
 ["Semantic HTML","Typography","Grid","Responsive Design","Components"],
 [["semantic index cards + grid","25%"],["readable article typography (measure/line-height)","30%"],["semantic figures/quotes/related","25%"],["responsive behaviour","20%"]],
 [`Cap article text at ~65ch and use a clear type scale; the index grid auto-fits cards.`],
 `<p>Index: <code>repeat(auto-fit,minmax(260px,1fr))</code> of post <code>&lt;article&gt;</code>s. Article: centred column <code>max-width:65ch</code>, <code>line-height:1.6</code>, semantic <code>&lt;figure&gt;</code>/<code>&lt;blockquote&gt;</code>, and a related-posts <code>&lt;aside&gt;</code>.</p>`);

T("project","Hard",
 "Build an accessible modal dialog",
 `Build a modal dialog component (front-end): triggered by a button, it overlays a scrim, contains a heading, body and close button, and is dismissible. Provide the markup, styles, and the minimal JS for open/close + focus handling.`,
 [`Use the native &lt;dialog&gt; element (or role="dialog" + aria-modal).`,
  `Focus moves into the dialog on open and returns to the trigger on close.`,
  `Esc and scrim-click close it; background is inert/scroll-locked.`],
 [`A working, accessible modal.`],
 ["Components","Accessibility","Positioning","Project Architecture"],
 [["dialog semantics (dialog / aria-modal)","30%"],["focus move-in + return","30%"],["Esc + scrim close, scroll lock","25%"],["clean implementation","15%"]],
 [`The native <code>&lt;dialog&gt;</code> with <code>showModal()</code> gives focus trapping, Esc-to-close and a backdrop for free.`],
 `<pre>&lt;button onclick="dlg.showModal()"&gt;Open&lt;/button&gt;
&lt;dialog id="dlg" aria-labelledby="t"&gt;
  &lt;h2 id="t"&gt;Confirm&lt;/h2&gt;&lt;p&gt;…&lt;/p&gt;
  &lt;button onclick="dlg.close()"&gt;Close&lt;/button&gt;
&lt;/dialog&gt;</pre>`);

T("project","Very Hard",
 "Build an image gallery with lightbox",
 `Build a responsive thumbnail gallery where clicking a thumbnail opens a larger view (lightbox) with next/prev and close, fully keyboard operable. Provide HTML/CSS and the minimal JS.`,
 [`Responsive auto-fit thumbnail grid; images dimensioned + alt.`,
  `Lightbox is an accessible dialog with keyboard nav (arrows, Esc).`,
  `Focus management on open/close.`],
 [`A working accessible gallery + lightbox.`],
 ["Components","Grid","Responsive images","Accessibility","Responsive Design"],
 [["responsive thumbnail grid","25%"],["accessible lightbox dialog","30%"],["keyboard nav (arrows/Esc) + focus","30%"],["dimensioned, alt-tagged images","15%"]],
 [`Reuse the native dialog for the lightbox; bind ArrowLeft/Right to prev/next and restore focus to the activating thumbnail on close.`],
 `<p>Grid: <code>repeat(auto-fit,minmax(140px,1fr))</code>. Lightbox: a <code>&lt;dialog&gt;</code> showing the active image; JS updates the index on arrow keys and Esc/overlay closes it.</p>`);

T("project","Hard",
 "Build a multi-column responsive footer",
 `Build a site footer: a brand/blurb column, three link columns, a small newsletter form, and a bottom bar with copyright + social icons. It must reflow from four columns to one on mobile and be fully accessible.`,
 [`Footer uses a responsive grid (4→2→1).`,
  `Link columns use nav + lists with group headings; social icons have accessible names.`,
  `Newsletter is a labelled, validating mini-form.`],
 [`A responsive, accessible footer.`],
 ["Components","Grid","Responsive Design","Navigation systems","Accessibility","Forms"],
 [["responsive 4→1 grid","30%"],["accessible link groups + icon names","30%"],["validating newsletter form","20%"],["semantic footer structure","20%"]],
 [`Each link column is a <code>&lt;nav aria-label&gt;</code> + heading + list; give icon-only social links an <code>aria-label</code>.`],
 `<p><code>footer{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}</code>; bottom bar is a flex row that wraps. Newsletter: <code>type="email"</code> + label + submit.</p>`);

T("project","Very Hard",
 "Build a settings page with form sections",
 `Build a user settings page: a left section nav (Profile, Security, Notifications, Billing) and a main panel of grouped forms. Toggles, selects, and inputs are all accessible; the layout is responsive (nav becomes top tabs on mobile); unsaved-changes state is indicated.`,
 [`Section nav + main panel layout, responsive.`,
  `Forms grouped in fieldsets; toggles are accessible switches.`,
  `Save bar appears when changes are pending (markup/state).`],
 [`A responsive settings page UI.`],
 ["Forms","Components","Responsive Design","Grid","Accessibility","Layout Systems"],
 [["responsive nav + panel layout","25%"],["accessible grouped forms + switches","30%"],["unsaved-changes affordance","20%"],["overall polish & semantics","25%"]],
 [`On desktop use a two-column grid (nav | panel); under ~760px turn the nav into a horizontal scrollable tab strip.`],
 `<p>Grid: <code>200px 1fr</code> → single column on mobile. Each settings group is a <code>&lt;fieldset&gt;&lt;legend&gt;</code>; switches are styled checkboxes; a sticky save bar shows when a form is dirty.</p>`);

T("project","Hard",
 "Build a stats/KPI card row",
 `Build a row of KPI cards (e.g., Total modules, Avg progress, Days to next exam, Hours studied) each with a label, big value, small delta indicator (up/down with colour AND icon), and an inline sparkline placeholder. Responsive and accessible.`,
 [`Responsive auto-fit row; each card is semantic and accessible.`,
  `Delta uses colour + icon/text (not colour alone).`,
  `Values are real text; sparkline is decorative (aria-hidden).`],
 [`A responsive KPI card row.`],
 ["Components","Grid","Responsive Design","Accessibility","Data viz"],
 [["responsive card row","30%"],["delta cue colour + non-colour","30%"],["accessible structure","20%"],["visual hierarchy (label/value)","20%"]],
 [`A red/green delta must also carry an arrow or +/− text so colour-blind users get the signal.`],
 `<p><code>.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}</code>. Each card: small label, large value, delta as <code>▲ +12%</code> with a colour class, and an <code>aria-hidden</code> sparkline.</p>`);

T("project","Very Hard",
 "Build a Kanban-style board layout",
 `Build a Kanban board: three columns (To-do, Doing, Done) each with a header (title + count) and a stack of task cards. Columns scroll vertically; the board scrolls horizontally on small screens. Cards are accessible and the structure is drag-ready (no JS required for layout).`,
 [`Board is a horizontal flex/grid of equal columns; columns scroll internally.`,
  `Cards are articles with title, meta, and accessible actions.`,
  `Responsive: horizontal scroll on mobile, fit on desktop.`],
 [`A Kanban board layout.`],
 ["Layout Systems","Flexbox","Grid","Components","Responsive Design","Accessibility"],
 [["equal-width scrollable columns","30%"],["accessible card structure","25%"],["responsive horizontal scroll","25%"],["clean visual separation","20%"]],
 [`Make the board a flex row with <code>overflow-x:auto</code>; each column is a flex column with its own <code>overflow-y:auto</code>.`],
 `<p><code>.board{display:flex;gap:16px;overflow-x:auto}</code>; <code>.col{flex:0 0 280px;display:flex;flex-direction:column}</code> with a scrollable card list. Column header shows title + count.</p>`);

T("project","Hard",
 "Build a testimonial / review carousel (CSS scroll-snap)",
 `Build a testimonial carousel using CSS scroll-snap (no JS): horizontally scrollable cards that snap into place, with visible focus and accessible navigation (cards reachable by keyboard, optional prev/next as anchor links).`,
 [`Use scroll-snap-type + scroll-snap-align on a horizontal track.`,
  `Cards keyboard-focusable; respects reduced-motion for smooth scroll.`,
  `No JS required for the core behaviour.`],
 [`A scroll-snap testimonial carousel.`],
 ["Components","Responsive Design","Accessibility","Motion & UX","Layout Systems"],
 [["scroll-snap track + alignment","40%"],["keyboard accessibility","25%"],["reduced-motion handling","20%"],["responsive sizing","15%"]],
 [`<code>scroll-snap-type:x mandatory</code> on the track + <code>scroll-snap-align:center</code> on cards gives a JS-free carousel.`],
 `<pre>.track{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory}
.track .card{flex:0 0 80%;scroll-snap-align:center}
@media(prefers-reduced-motion:no-preference){.track{scroll-behavior:smooth}}</pre>`);

T("project","Very Hard",
 "Build a 7-day study plan display (AI output UI)",
 `Build the UI that displays the AI-generated 7-day revision plan from the Exam Planner: a responsive 7-column (desktop) / 1-column (mobile) layout, each day showing date, focus modules, time blocks, and a completion checkbox. Include an empty state and a loading state.`,
 [`Responsive day grid (7→fewer→1).`,
  `Each day is semantic with a heading and a list of time blocks.`,
  `Provide empty + loading states; checkboxes are accessible.`],
 [`A responsive study-plan UI with states.`],
 ["Components","Grid","Responsive Design","Semantic HTML","Accessibility"],
 [["responsive 7-day grid","30%"],["semantic day/blocks structure","25%"],["empty + loading states","25%"],["accessible completion controls","20%"]],
 [`Use <code>repeat(auto-fit,minmax(160px,1fr))</code> so the 7 days reflow gracefully; show a skeleton while the AI request is pending.`],
 `<p>Grid of 7 <code>&lt;section&gt;</code>s (one per day) each with an <code>&lt;h3&gt;</code> date and a list of time blocks + a checkbox. A loading skeleton and an 'Add modules first' empty state cover the non-happy paths.</p>`);

T("project","Hard",
 "Build a searchable, filterable resource list",
 `Build a resource library UI (like the course hub): a search box, category filter chips, and a responsive grid of resource cards (title, type tag, description, links). Filtering/search is client-side; show an empty state when nothing matches.`,
 [`Responsive card grid; search + filter controls accessible.`,
  `Empty state when no matches; result count shown.`,
  `Minimal JS for filtering; cards carry searchable data attributes.`],
 [`A searchable, filterable resource grid.`],
 ["Components","Grid","Responsive Design","Accessibility","Project Architecture"],
 [["responsive card grid","25%"],["working search + filter","30%"],["empty state + result count","25%"],["accessible controls","20%"]],
 [`Store a lowercase searchable string in a <code>data-search</code> attribute per card and toggle <code>hidden</code> based on query + active filter.`],
 `<p>Search input + filter chips drive a function that hides non-matching cards (by <code>data-type</code> and a <code>data-search</code> haystack) and shows an empty-state panel when the visible count is zero.</p>`);

T("project","Very Hard",
 "Build a responsive comparison table",
 `Build a feature-comparison table (3 plans × many features) that is readable on desktop and transforms gracefully on mobile (e.g., horizontal scroll with a sticky feature column, or per-plan stacked cards). Use checkmarks/crosses with accessible text alternatives.`,
 [`Accessible table with caption + scoped headers.`,
  `Mobile strategy: sticky first column scroll OR stacked cards with data-labels.`,
  `Boolean cells convey meaning to screen readers (not just ✓/✗ glyphs).`],
 [`A responsive comparison table.`],
 ["Tables","Responsive components","Accessibility","Responsive Design","Complex layouts"],
 [["accessible table semantics","30%"],["responsive mobile strategy","30%"],["boolean cells have text alternatives","25%"],["clean visuals","15%"]],
 [`A bare ✓ is invisible to screen readers — pair it with visually-hidden text like 'Included'.`],
 `<p>Desktop: standard table with sticky <code>thead</code>. Mobile: wrap in a scroll container with a sticky first column. Each boolean cell: <code>&lt;span aria-hidden&gt;✓&lt;/span&gt;&lt;span class="sr-only"&gt;Included&lt;/span&gt;</code>.</p>`);

T("project","Hard",
 "Build a notification/toast system (UI)",
 `Build a toast notification UI: a container anchored to a corner, stackable toasts (success/error/info variants with icon + message + dismiss), accessible announcements, and auto-dismiss. Provide HTML/CSS + minimal JS API (showToast).`,
 [`Toast container is an ARIA live region; toasts have role/status appropriately.`,
  `Variants distinguished by colour + icon + text; dismiss button accessible.`,
  `Stacking + auto-dismiss + reduced-motion friendly.`],
 [`A working toast system with a small JS API.`],
 ["Components","Accessibility","Motion & UX","Project Architecture"],
 [["live region announces toasts","30%"],["accessible variants + dismiss","25%"],["stacking + auto-dismiss","25%"],["clean API/implementation","20%"]],
 [`Put the toast container in an <code>aria-live="polite"</code> region so new messages are announced without stealing focus.`],
 `<pre>&lt;div id="toasts" aria-live="polite"&gt;&lt;/div&gt;
&lt;script&gt;function showToast(msg,type){/* create, append, auto-remove */}&lt;/script&gt;</pre>`);

T("project","Expert",
 "Assemble a mini design system + demo page",
 `Build a small but real design system in one file: tokens (colour/space/type/radius/shadow), light+dark themes, and a set of components (button variants, input, card, badge, alert) — each accessible and responsive. Then assemble a demo page that uses every component. Document usage briefly.`,
 [`Two-layer tokens; light/dark via token overrides; reduced-motion respected.`,
  `Each component covers states (hover/focus-visible/disabled) and is accessible.`,
  `A demo page composes them responsively; brief usage notes included.`],
 [`A single-file mini design system + demo page.`,`Short usage documentation.`],
 ["Project Architecture","CSS variables","Components","Accessibility","Responsive Design","Color systems"],
 [["token system + theming","25%"],["component coverage + states","30%"],["accessibility across components","25%"],["cohesive demo + docs","20%"]],
 [`Build components to consume only semantic tokens so a single theme override re-skins the whole system.`],
 `<p>Define <code>:root</code> primitives + semantic aliases, override aliases under <code>[data-theme="dark"]</code>, then build <code>.btn</code>/<code>.input</code>/<code>.card</code>/<code>.badge</code>/<code>.alert</code> on tokens with full interaction states. The demo page lays them out responsively and lists each component's purpose and modifiers.</p>`);
/* ===================== MIXED CHALLENGES (20) ===================== */
T("mixed","Very Hard",
 "Convert a static mockup into responsive, accessible code",
 `Given a desktop-only mockup of a course card row, deliver production code: semantic HTML, mobile-first responsive CSS, accessibility, and a short note on what you'd optimise for performance. Combine structure, styling, responsiveness and a11y in one deliverable.`,
 [`Semantic markup + outline; cards are articles.`,
  `Mobile-first responsive grid; images dimensioned and lazy.`,
  `Focus states, alt text, contrast; one performance note (e.g., image sizing, font-display).`],
 [`A complete, responsive, accessible card row.`,`A short performance note.`],
 ["Semantic HTML","Responsive Design","Grid","Accessibility","Performance"],
 [["semantic structure","20%"],["mobile-first responsiveness","25%"],["accessibility complete","25%"],["performance awareness","15%"],["code quality","15%"]],
 [`Lead with the HTML outline, then mobile-first CSS; finish with a one-line perf note (dimensioned images + <code>font-display:swap</code>).`],
 `<p>Auto-fit card grid of <code>&lt;article&gt;</code>s; mobile-first base + one breakpoint; <code>loading="lazy"</code> + width/height on images; visible focus; perf note: reserve image space and use modern formats to cut CLS and bytes.</p>`);

T("mixed","Very Hard",
 "Debug AND make responsive a broken layout",
 `You receive a layout that overflows on mobile and has three bugs (a fixed 960px wrapper, an image without max-width, and a flex row that won't wrap). Fix all three bugs and then make the whole thing responsive mobile-first. Explain each fix.`,
 [`Identify and fix all three bugs.`,
  `Convert to a responsive, mobile-first layout afterwards.`],
 [`Bug fixes + responsive refactor + explanations.`],
 ["Debugging","Responsive Design","Flexbox","Box model","Layout Systems"],
 [["all three bugs fixed","40%"],["responsive mobile-first result","30%"],["explanations correct","20%"],["no remaining overflow","10%"]],
 [`Replace fixed widths with <code>max-width</code>, add <code>img{max-width:100%}</code>, and <code>flex-wrap:wrap</code>; then layer min-width enhancements.`],
 `<pre>.wrap{max-width:960px;width:100%;margin-inline:auto;padding-inline:16px}
img{max-width:100%;height:auto}
.row{display:flex;flex-wrap:wrap;gap:16px}</pre>`);

T("mixed","Expert",
 "Build a fully accessible, responsive data dashboard",
 `Combine table, cards, grid, responsiveness and accessibility: a dashboard with a KPI card row, a responsive data table of modules (sortable headers as buttons), and a chart placeholder. Must be keyboard navigable, responsive, and themable. Note one optimisation per area (HTML, CSS, perf, a11y).`,
 [`KPI cards + accessible data table + chart region.`,
  `Responsive across breakpoints; dark/light via tokens; full keyboard access.`,
  `One optimisation noted for HTML, CSS, performance and accessibility each.`],
 [`A complete dashboard + four optimisation notes.`],
 ["Components","Tables","Grid","Responsive Design","Accessibility","Project Architecture"],
 [["KPI + table + chart structure","25%"],["responsive + themable","25%"],["keyboard + a11y throughout","25%"],["four optimisation notes","25%"]],
 [`Sortable headers should be real <code>&lt;button&gt;</code>s inside <code>&lt;th&gt;</code> with <code>aria-sort</code>; wrap the table in a scroll container for mobile.`],
 `<p>Compose: KPI auto-fit row → <code>&lt;table&gt;</code> with button headers + <code>aria-sort</code> in a scroll wrapper → chart region (<code>aria-hidden</code> decorative). Tokens for theme; notes: semantic table (HTML), token theming (CSS), dimensioned/lazy assets (perf), keyboard sort + scope (a11y).</p>`);

T("mixed","Very Hard",
 "Refactor a page for performance and Core Web Vitals",
 `A page is slow: render-blocking CSS, unsized images, a giant hero image, and layout shift from late fonts. Produce a prioritised optimisation plan touching HTML, CSS and assets, and implement the highest-impact fixes.`,
 [`Address LCP (hero), CLS (image dims + font-display), and render-blocking.`,
  `Prioritise by impact; implement the top fixes in code.`],
 [`An optimisation plan + key implementations.`],
 ["Performance","Responsive images","Typography","Responsive Design","Project Architecture"],
 [["correct CWV diagnosis (LCP/CLS)","30%"],["prioritised plan","25%"],["key fixes implemented","30%"],["measurable rationale","15%"]],
 [`Biggest wins usually: size/serve the hero responsibly (LCP), reserve image/font space (CLS), and defer non-critical CSS/JS.`],
 `<pre>&lt;img src="hero.avif" width="1200" height="600" fetchpriority="high"
  srcset="hero-600.avif 600w, hero-1200.avif 1200w" sizes="100vw" alt="…"&gt;
@font-face{font-display:swap}
img{aspect-ratio:attr(width) / attr(height)}</pre>`);

T("mixed","Very Hard",
 "Implement dark mode end-to-end",
 `Add a robust dark mode: token-based theming, respect the OS preference by default, allow a manual toggle that persists, avoid a flash of the wrong theme on load, and keep contrast accessible in both themes. Provide HTML, CSS and the small JS.`,
 [`Tokens for both themes; default to prefers-color-scheme.`,
  `Manual toggle persists (localStorage) and overrides the OS default.`,
  `No flash of incorrect theme (set before paint); contrast verified.`],
 [`A complete dark-mode implementation.`],
 ["CSS variables","Color systems","Accessibility","Project Architecture","Responsive Design"],
 [["token theming both modes","25%"],["OS default + persistent manual toggle","30%"],["no flash on load","25%"],["accessible contrast both themes","20%"]],
 [`Apply the saved theme in an inline script in &lt;head&gt; before CSS paints to avoid the flash.`],
 `<pre>&lt;script&gt;document.documentElement.dataset.theme =
  localStorage.theme || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')&lt;/script&gt;
:root{--bg:#fff;--ink:#222} [data-theme=dark]{--bg:#10181f;--ink:#e6eef4}</pre>`);

T("mixed","Very Hard",
 "Build a contact section: form + map + details",
 `Combine forms, layout, responsiveness and accessibility: a contact section with a validating form (name, email, subject, message), business details (address, hours), and a titled map embed. Two columns on desktop, stacked on mobile.`,
 [`Validating, labelled form; semantic contact details (address).`,
  `Titled, lazy iframe; responsive two-column→one layout.`,
  `Accessible throughout (labels, focus, alt/titles).`],
 [`A complete contact section.`],
 ["Forms","Validation","Semantic HTML","Responsive Design","Grid","Accessibility","Multimedia"],
 [["validating accessible form","30%"],["semantic details + titled map","25%"],["responsive layout","25%"],["overall accessibility","20%"]],
 [`Two-column grid that becomes one column under ~760px; the map iframe needs a <code>title</code> and <code>loading="lazy"</code>.`],
 `<p>Grid <code>1fr 1fr</code> → single column on mobile: left = labelled form with native validation + error summary; right = <code>&lt;address&gt;</code> + hours + titled lazy map iframe.</p>`);

T("mixed","Hard",
 "Make an existing page keyboard + screen-reader friendly",
 `Take a visually-complete page and make it fully operable without a mouse: add a skip link, ensure logical focus order, visible focus styles, accessible names for all controls, and correct landmark/heading structure. List your changes.`,
 [`Skip link + landmarks + heading order.`,
  `Visible focus + logical tab order + accessible names.`,
  `Summarise every change made.`],
 [`An accessibility-hardened page + change list.`],
 ["Accessibility","Semantic HTML","Navigation systems","Project Architecture"],
 [["skip link + landmarks","25%"],["focus visibility + order","30%"],["accessible names everywhere","25%"],["clear change list","20%"]],
 [`Tab through the page yourself — anything you can't reach or see focus on is a bug to fix.`],
 `<p>Changes: add skip link → main#main; wrap regions in landmarks; fix heading ranks; add <code>:focus-visible</code> rings; give icon buttons <code>aria-label</code>; ensure DOM order matches visual order so tabbing is logical.</p>`);

T("mixed","Expert",
 "Architect a small multi-page site (front-end)",
 `Plan and scaffold a 4-page static site (Home, Features, Pricing, Contact) sharing a header/footer, a tokens stylesheet, and consistent components. Describe the file/CSS architecture, then implement the shared layout and one full page. Address consistency, responsiveness and accessibility.`,
 [`Define a sensible file + CSS architecture (shared tokens/components).`,
  `Implement shared header/footer + one complete responsive page.`,
  `Consistent, accessible, themable.`],
 [`An architecture description + shared layout + one page.`],
 ["Project Architecture","Components","Responsive Design","CSS variables","Accessibility","Landing Pages"],
 [["clear, scalable architecture","30%"],["shared layout + components","25%"],["one complete responsive page","25%"],["consistency + accessibility","20%"]],
 [`Centralise tokens and shared components in one stylesheet; each page only adds page-specific rules.`],
 `<p>Architecture: <code>/css/tokens.css</code> + <code>/css/components.css</code> + per-page CSS; shared header/footer partials. Implement those plus, say, a full responsive Pricing page composed from the shared button/card/badge components.</p>`);

T("mixed","Very Hard",
 "Build and validate a complete semantic web form",
 `Combine HTML, validation, accessibility and a touch of CSS: build the Add-Module form (all 7 fields), make it validate natively AND show accessible custom messages, style it responsively, and ensure it degrades without CSS/JS. Note the security mindset for when PHP receives it.`,
 [`All 7 fields with correct types + native validation.`,
  `Accessible error handling; responsive two-column→one form.`,
  `Note: server must re-validate + use prepared statements (don't trust the client).`],
 [`A complete, validating, responsive module form + a security note.`],
 ["Forms","Validation","Accessibility","Responsive Design","Project Architecture"],
 [["all 7 fields + correct types","25%"],["native + accessible validation","30%"],["responsive form layout","25%"],["server-side security note","20%"]],
 [`Client validation is UX only — always re-validate on the server and use prepared statements against SQL injection.`],
 `<p>Fieldset-grouped 7-field form; correct <code>type</code>s + <code>required</code>/<code>min</code>/<code>max</code>; <code>aria-describedby</code> hints + role="alert" summary; responsive grid for fields. Security note: never trust <code>$_POST</code> — validate server-side and bind parameters.</p>`);

T("mixed","Very Hard",
 "Theme + responsive + a11y audit of the course hub",
 `Given the course hub page, perform a combined review: identify two accessibility issues, two responsive issues, and two maintainability issues, then implement fixes. Combine debugging across all dimensions.`,
 [`Find 2 issues in each of: accessibility, responsiveness, maintainability.`,
  `Implement concrete fixes for each.`],
 [`A six-point audit + fixes.`],
 ["Debugging","Accessibility","Responsive Design","Project Architecture","Semantic HTML"],
 [["two valid a11y issues + fixes","35%"],["two valid responsive issues + fixes","35%"],["two valid maintainability issues + fixes","30%"]],
 [`Audit in passes: keyboard/screen-reader first, then resize to find breakpoints, then read the CSS for duplication.`],
 `<p>Example findings: a11y — missing focus styles, icon links without names; responsive — fixed grid columns, search overflowing; maintainability — repeated colour literals, deep selectors. Fix with focus rings + aria-labels, auto-fit grids, and tokenised colours + flatter selectors.</p>`);

T("mixed","Hard",
 "Implement a hero that works in 3 contexts",
 `Build one hero component that adapts across: a wide desktop (text left, image right), a tablet (stacked, centered), and a phone (compact, single CTA). Combine flexible layout, responsive images and fluid type — minimal media queries.`,
 [`One markup, three adaptive presentations.`,
  `Fluid type (clamp), responsive image, layout switch via flex/grid + few queries.`],
 [`A context-adaptive hero.`],
 ["Responsive Design","Flexbox","Grid","Fluid units","Responsive images","Components"],
 [["single markup adapts to 3 contexts","35%"],["fluid type + responsive image","30%"],["minimal, content-driven queries","20%"],["accessible + polished","15%"]],
 [`Use a 2-col grid that collapses to 1, <code>clamp()</code> for the headline, and <code>&lt;picture&gt;</code> for the art-directed image.`],
 `<pre>.hero{display:grid;gap:24px;align-items:center;grid-template-columns:1fr 1fr}
.hero h1{font-size:clamp(1.8rem,1rem+3vw,3.2rem)}
@media(max-width:760px){.hero{grid-template-columns:1fr;text-align:center}}</pre>`);

T("mixed","Expert",
 "Optimize a component for size, speed and a11y",
 `Take a feature-card component and optimise it on three axes at once: reduce CSS (consolidate duplicated rules into tokens/utilities), improve runtime performance (cheap animations, dimensioned media), and complete accessibility (semantics, focus, contrast). Show before/after and quantify the improvement.`,
 [`Consolidate CSS; remove duplication via tokens/utilities.`,
  `Use GPU-friendly animation + dimensioned media.`,
  `Full accessibility; quantify the gains (rules removed, etc.).`],
 [`An optimised component + before/after + metrics.`],
 ["Project Architecture","Performance","Accessibility","CSS variables","Components","Motion & UX"],
 [["CSS consolidated (measurable)","30%"],["performance improvements","25%"],["accessibility complete","25%"],["before/after quantified","20%"]],
 [`Quantify: 'reduced from 14 to 6 rules', 'animate transform not top', 'added focus + alt + contrast pass'.`],
 `<p>Before: duplicated colours/spacing, <code>top</code> hover animation, no focus, no alt. After: token-driven utilities (fewer rules), <code>transform</code> hover, dimensioned lazy image, semantic article + <code>:focus-visible</code> + AA contrast. State the rule-count reduction and the layout-thrash removed.</p>`);

T("mixed","Very Hard",
 "Build a print + screen dual-experience page",
 `Build an invoice/report page that looks great on screen (responsive, themable) AND prints cleanly (hidden chrome, expanded content, link URLs, controlled page breaks). Combine layout, responsiveness and a print stylesheet.`,
 [`Responsive on-screen layout.`,
  `@media print: hide nav/buttons, expand main, show URLs, control breaks.`,
  `Totals/sections don't break awkwardly across pages.`],
 [`A dual screen/print page.`],
 ["Responsive Design","Project Architecture","Typography","Tables","Advanced selectors"],
 [["responsive screen layout","30%"],["complete print stylesheet","35%"],["page-break control","20%"],["URL reveal + chrome hidden","15%"]],
 [`Design for screen first, then add a focused <code>@media print</code> block; use <code>break-inside:avoid</code> on rows/totals.`],
 `<pre>@media print{
  nav,.btn,.theme-toggle{display:none}
  main{width:100%}
  tr,.totals{break-inside:avoid}
  a[href^="http"]::after{content:" (" attr(href) ")"}
}</pre>`);

T("mixed","Hard",
 "Fix a form's UX, validation and accessibility together",
 `A signup form has poor UX (no inline feedback), weak validation (only 'required'), and a11y gaps (placeholder-as-label, no error association). Improve all three dimensions and explain each change.`,
 [`Replace placeholder-labels with real labels.`,
  `Stronger native validation (type/pattern/minlength) + accessible inline errors.`,
  `Better UX (clear requirements, focus management).`],
 [`An improved form + change rationale.`],
 ["Forms","Validation","Accessibility","Debugging"],
 [["real labels (no placeholder-as-label)","30%"],["stronger validation","25%"],["accessible error association","25%"],["UX improvements explained","20%"]],
 [`Placeholders disappear on input and aren't reliable labels — always pair a visible <code>&lt;label&gt;</code> with each field.`],
 `<p>Add visible labels; upgrade to <code>type="email"</code> + <code>minlength</code> + <code>pattern</code>; associate errors via <code>aria-describedby</code> + role="alert"; show password rules up front and focus the first error on submit.</p>`);

T("mixed","Very Hard",
 "Compose a responsive email-style newsletter",
 `Build a responsive newsletter layout that works in the constrained world of email (table-based, inline styles, image fallbacks) yet still adapts to phone widths using the limited responsive techniques email supports. Combine tables, inline CSS and progressive enhancement.`,
 [`Table-based structure with inline styles; bulletproof images (alt + dimensions).`,
  `Responsive via fluid widths + a single max-width query in a &lt;style&gt; (where supported).`,
  `Degrades to a single readable column.`],
 [`A responsive, email-safe newsletter.`],
 ["Tables","Responsive Design","Multimedia","Accessibility","Project Architecture"],
 [["email-safe table structure + inline styles","35%"],["responsive within email constraints","30%"],["bulletproof images","20%"],["readable single-column fallback","15%"]],
 [`Email clients are inconsistent: lead with fluid <code>width="100%"</code> tables capped by a max-width, and treat the media query as enhancement.`],
 `<p>Outer 100%-width table → inner 600px max-width table → stacked cells. Inline styles everywhere; images with alt + width; a single <code>@media(max-width:600px)</code> in a head <code>&lt;style&gt;</code> for clients that honour it.</p>`);

T("mixed","Expert",
 "Ship a feature: spec → markup → style → a11y → test",
 `Treat this like a real ticket: 'Add a filterable FAQ to the help page.' Deliver the full lifecycle — interpret the spec, write semantic markup, style it responsively, make it accessible, and write a short test checklist (functional, responsive, a11y). Combine every discipline.`,
 [`Restate the spec + acceptance criteria.`,
  `Semantic, responsive, accessible implementation (details/summary + filter).`,
  `A concrete test checklist covering function, responsiveness, a11y.`],
 [`A full feature delivery + test checklist.`],
 ["Project Architecture","Semantic HTML","Responsive Design","Accessibility","Debugging","Components"],
 [["spec + acceptance criteria","20%"],["semantic responsive implementation","30%"],["accessibility","25%"],["thorough test checklist","25%"]],
 [`Define 'done' before coding: list acceptance criteria, then verify each in your test checklist at the end.`],
 `<p>Spec → criteria (filter works, keyboard-operable, responsive). Build with <code>&lt;details&gt;</code> FAQ items + a search input that hides non-matching items. Tests: filtering works + empty state; layout at 320/768/1200; keyboard reaches/toggles every item; screen-reader announces matches.</p>`);

T("mixed","Very Hard",
 "Recover a site from a CSS specificity disaster",
 `A site's CSS has become unmaintainable: deep selectors, scattered !important, inconsistent spacing/colour, and overrides that fight each other. Devise a remediation strategy (without a full rewrite) and demonstrate it on one stubborn component.`,
 [`Strategy: introduce tokens, flatten selectors, retire !important incrementally, add a layer for resets.`,
  `Demonstrate on one component with before/after.`],
 [`A remediation strategy + one refactored component.`],
 ["Debugging","Specificity","Cascade","Project Architecture","CSS variables"],
 [["sound, incremental strategy","35%"],["selectors flattened + !important retired","30%"],["tokens introduced","20%"],["before/after demonstration","15%"]],
 [`Stabilise with tokens and a single low-specificity class per component; use <code>@layer</code> to tame override order without rewriting everything.`],
 `<p>Strategy: (1) tokenise colour/space; (2) wrap base/components/utilities in <code>@layer</code> so order—not specificity—wins; (3) replace deep selectors with single classes; (4) delete <code>!important</code> as each fight is resolved. Demo: turn <code>#main .list li a.active{…!important}</code> into <code>.nav-link--active{…}</code>.</p>`);

T("mixed","Hard",
 "Make one component responsive three different ways",
 `Take a media-object card and implement it three ways: with Flexbox, with Grid, and with a container query — then argue which is best for a component reused in many contexts. Combine layout techniques and judgement.`,
 [`Three correct implementations (flex, grid, container query).`,
  `A reasoned recommendation for reusable contexts.`],
 [`Three implementations + a recommendation.`],
 ["Flexbox","Grid","Responsive components","Layout Systems","Responsive Design"],
 [["three correct techniques","55%"],["each behaves responsively","25%"],["sound recommendation","20%"]],
 [`For a component reused in different-sized regions, the container query wins because it responds to its own width, not the viewport.`],
 `<pre>/* flex */ .m{display:flex;gap:12px;flex-wrap:wrap}
/* grid */ .m{display:grid;grid-template-columns:auto 1fr;gap:12px}
/* container */ .wrap{container-type:inline-size}
@container(min-width:380px){.m{grid-template-columns:120px 1fr}}</pre>
<p>Container query is most robust for reuse.</p>`);

T("mixed","Expert",
 "Full exam simulation: build the Exam Planner home",
 `Capstone: build a complete, polished, single-file home page for the AI Exam Planner combining everything assessed — semantic structure, responsive mobile-first layout, Flexbox/Grid, accessible forms and nav, dark/light theming, tasteful motion (reduced-motion safe), and performance-aware media. Then write a self-review against the course's evaluation criteria.`,
 [`One self-contained HTML file: header/nav, hero, features, how-it-works, testimonial, CTA, footer.`,
  `Mobile-first responsive; tokens + dark mode; accessible (skip link, focus, labels, contrast); reduced-motion respected; dimensioned/lazy media.`,
  `Include a self-review mapping your work to evaluation criteria.`],
 [`A complete, production-quality home page.`,`A criteria-based self-review.`],
 ["Semantic HTML","Responsive Design","Flexbox","Grid","Accessibility","CSS variables","Motion & UX","Performance","Landing Pages"],
 [["semantic + accessible throughout","25%"],["responsive mobile-first + modern layout","25%"],["theming + motion + performance","25%"],["polish + honest self-review","25%"]],
 [`Budget your time: structure → responsive layout → accessibility → theming/motion → performance pass → self-review. Don't gold-plate one area while another is broken.`],
 `<p>Deliver a single file: token <code>:root</code> + dark override; semantic landmarks; hero (fluid type, responsive image); auto-fit features; accessible nav with skip link and focus rings; reduced-motion-guarded entrance animation; lazy dimensioned media. Self-review: rate each criterion (structure, responsiveness, a11y, theming, performance, polish) and note one improvement you'd make next.</p>`);

T("mixed","Expert",
 "Triage and fix a failing accessibility + responsive review",
 `A page failed both an accessibility audit and a responsive review before release. You have limited time: triage six reported issues (3 a11y: no focus styles, images missing alt, low contrast; 3 responsive: horizontal scroll on mobile, text too small to read, tap targets too close), fix the highest-impact ones first, and justify your prioritisation under deadline pressure.`,
 [`Order the six issues by user impact + effort.`,
  `Implement fixes for the top issues (at least the blockers).`,
  `Justify the triage decisions.`],
 [`A prioritised triage + fixes + justification.`],
 ["Debugging","Accessibility","Responsive Design","Project Architecture","Box model"],
 [["sensible impact-based prioritisation","30%"],["a11y blockers fixed (alt, focus, contrast)","30%"],["responsive blockers fixed (overflow, sizing, targets)","30%"],["clear justification","10%"]],
 [`Fix blockers that stop people using the page at all first (overflow that hides content, missing focus, unreadable text), then refinements.`],
 `<pre>img{max-width:100%;height:auto}
:focus-visible{outline:2px solid #0f7f79;outline-offset:2px}
html{font-size:clamp(15px,1rem+.2vw,18px)}
.nav a{min-height:44px;padding:10px 14px}</pre>
<p>Triage: overflow + missing focus + unreadable text are usage blockers (fix first); alt text + contrast + tap spacing follow. Justify by 'can the user complete the task at all?' before polish.</p>`);

/* ================================================================
   ENGINE
   ================================================================ */
const CAT_META={
  html:{n:"HTML",cls:"html"},css:{n:"CSS",cls:"css"},responsive:{n:"Responsive",cls:"responsive"},
  debug:{n:"Debugging",cls:"debug"},project:{n:"Project",cls:"project"},mixed:{n:"Mixed",cls:"mixed"}
};
const DIFFS=["Hard","Very Hard","Expert"];
const diffCls=d=>"d-"+d.replace(/\s/g,"");
const PASS_MARK=60;

const LS="wdrevision_v2";
const todayStr=()=>new Date().toISOString().slice(0,10);
function blank(){return{attempts:{},exams:[],prefs:{theme:"light"}};}
let S=load();
function load(){try{return Object.assign(blank(),JSON.parse(localStorage.getItem(LS)||"{}"));}catch(e){return blank();}}
function save(){try{localStorage.setItem(LS,JSON.stringify(S));writeSummary();}catch(e){}}
function writeSummary(){ /* shared with the progress tracker */
  try{
    const best=S.exams.length?Math.max(...S.exams.map(e=>e.pct)):null;
    const weak=weakCategories(3).map(w=>CAT_META[w.cat].n);
    localStorage.setItem("wdrevision_v2_summary",JSON.stringify({
      bestPct:best,attempts:Object.keys(S.attempts).length,exams:S.exams.length,weak}));
  }catch(e){}
}
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
let toastT;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2400);}
const OUT_SCORE={got:1,partial:0.5,missed:0};
const OUT_LABEL={got:"Got it ✓",partial:"Partial",missed:"Missed"};

/* ---------- analytics over attempts ---------- */
function attempt(id){return S.attempts[id];}
function outcomeScore(id){const a=attempt(id);return a?OUT_SCORE[a.outcome]:null;}
function catTasks(cat){return TASKS.filter(t=>t.cat===cat);}
function catMastery(cat){const ts=catTasks(cat).filter(t=>attempt(t.id));
  if(!ts.length)return null;return Math.round(ts.reduce((s,t)=>s+OUT_SCORE[attempt(t.id).outcome],0)/ts.length*100);}
function catAttempted(cat){return catTasks(cat).filter(t=>attempt(t.id)).length;}
function overallMastery(){const done=TASKS.filter(t=>attempt(t.id));if(!done.length)return 0;
  return Math.round(done.reduce((s,t)=>s+OUT_SCORE[attempt(t.id).outcome],0)/done.length*100);}
function attemptedCount(){return TASKS.filter(t=>attempt(t.id)).length;}
function weakCategories(n){return Object.keys(CAT_META).map(cat=>({cat,m:catMastery(cat)}))
  .filter(x=>x.m!=null).sort((a,b)=>a.m-b.m).slice(0,n);}
function missedTasks(){return TASKS.filter(t=>{const a=attempt(t.id);return a&&a.outcome!=="got";});}
function skillMistakes(){ /* count partial/missed by skill -> frequently-missed concepts */
  const map={};missedTasks().forEach(t=>t.skills.forEach(sk=>{map[sk]=(map[sk]||0)+1;}));
  return Object.entries(map).map(([sk,c])=>({sk,c})).sort((a,b)=>b.c-a.c);}

/* ================== THEME ================== */
function applyTheme(){const t=(S.prefs&&S.prefs.theme)||"light";document.documentElement.setAttribute("data-theme",t);
  $("#themeIc").innerHTML=t==="dark"
    ?'<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    :'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>';}
function toggleTheme(){S.prefs.theme=((S.prefs&&S.prefs.theme)==="dark")?"light":"dark";save();applyTheme();}

/* ================== TASK CARD ================== */
function taskCard(t,index,opts){
  opts=opts||{};const a=attempt(t.id);const open=opts.open;
  const statusTag=a?`<span class="tag ${a.outcome==="got"?"done":a.outcome}">${OUT_LABEL[a.outcome]}</span>`:"";
  return `<div class="panel task ${open?"open":""}" data-id="${t.id}">
    <div class="task-head" onclick="toggleTask('${t.id}')">
      <div class="task-num">${index!=null?index:t.id.split("-")[1]}</div>
      <div class="task-tt"><b>${esc(t.title)}</b>
        <div class="task-meta">
          <span class="tag cat ${CAT_META[t.cat].cls}">${CAT_META[t.cat].n}</span>
          <span class="tag ${diffCls(t.diff)}">${esc(t.diff)}</span>
          ${statusTag}
          <span class="small muted">#${t.id}</span>
        </div>
      </div>
      <svg class="task-caret" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="task-body">
      <div class="block"><h4>📋 Problem statement</h4><p class="statement">${t.statement}</p></div>
      ${t.constraints.length?`<div class="block"><h4>⛓️ Constraints</h4><ul>${t.constraints.map(c=>`<li>${c}</li>`).join("")}</ul></div>`:""}
      ${t.deliverables.length?`<div class="block"><h4>📦 Expected deliverables</h4><ul>${t.deliverables.map(c=>`<li>${c}</li>`).join("")}</ul></div>`:""}
      ${t.skills.length?`<div class="block"><h4>🎯 Skills tested</h4><div class="task-meta">${t.skills.map(s=>`<span class="chip">${esc(s)}</span>`).join("")}</div></div>`:""}
      ${t.rubric.length?`<div class="block"><h4>✅ Evaluation criteria</h4><table class="rubric">${t.rubric.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table></div>`:""}
      ${t.hints.length?`<details class="block"><summary style="cursor:pointer;font-weight:800;color:var(--amber)">💡 Show hints (${t.hints.length})</summary>${t.hints.map(h=>`<div class="hint">${h}</div>`).join("")}</details>`:""}
      ${t.solution?`<details class="solution block"><summary>🔓 Reveal model solution</summary><div class="sol-inner">${t.solution}</div></details>`:""}
      <div class="self-grade">
        <span class="lbl">Self-assess:</span>
        <button class="btn sm ${a&&a.outcome==="got"?"primary":""}" onclick="grade('${t.id}','got')">Got it ✓</button>
        <button class="btn sm ${a&&a.outcome==="partial"?"primary":""}" onclick="grade('${t.id}','partial')">Partial</button>
        <button class="btn sm ${a&&a.outcome==="missed"?"coral":""}" onclick="grade('${t.id}','missed')">Missed</button>
        ${a?`<button class="btn sm ghost danger" onclick="grade('${t.id}',null)">Clear</button>`:""}
      </div>
    </div>
  </div>`;
}
let openSet=new Set();
function toggleTask(id){const card=document.querySelector(`.task[data-id="${id}"]`);if(!card)return;
  if(openSet.has(id))openSet.delete(id);else openSet.add(id);card.classList.toggle("open");}
function grade(id,outcome){
  if(outcome===null||outcome==="null"){delete S.attempts[id];}
  else S.attempts[id]={outcome,at:todayStr()};
  save();
  if(examState.active){examState.answers[id]=outcome;renderExamDots();}
  else{const card=document.querySelector(`.task[data-id="${id}"]`);
    if(card){const wasOpen=openSet.has(id);const idx=card.querySelector(".task-num").textContent;
      card.outerHTML=taskCard(TASKS.find(t=>t.id===id),idx,{open:wasOpen});}
    updateBankChip();}
  toast(outcome?`Marked: ${OUT_LABEL[outcome]}`:"Cleared");
}

/* ================== BROWSE VIEW ================== */
let filters={q:"",cat:"all",diff:"all",status:"all"};
function renderBrowse(){
  const v=$("#view-browse");
  v.innerHTML=`
  <div class="grid cols-4" style="margin-bottom:14px">
    <div class="panel stat"><div class="lbl">Task Bank</div><div class="val" style="color:var(--coral)">${TASKS.length}</div><div class="sub">high-difficulty tasks</div></div>
    <div class="panel stat"><div class="lbl">Attempted</div><div class="val" style="color:var(--blue)">${attemptedCount()}</div><div class="sub">${Math.round(attemptedCount()/TASKS.length*100)}% of bank</div></div>
    <div class="panel stat"><div class="lbl">Mastery</div><div class="val" style="color:var(--teal)">${overallMastery()}%</div><div class="sub">across attempted tasks</div></div>
    <div class="panel stat"><div class="lbl">Mock Exams</div><div class="val" style="color:var(--purple)">${S.exams.length}</div><div class="sub">${S.exams.length?"best "+Math.max(...S.exams.map(e=>e.pct))+"%":"none yet"}</div></div>
  </div>
  <div class="filterbar">
    <input type="search" id="fq" placeholder="Search titles, statements, skills…" value="${esc(filters.q)}">
    <select id="fdiff"><option value="all">All difficulty</option>${DIFFS.map(d=>`<option ${filters.diff===d?"selected":""}>${d}</option>`).join("")}</select>
    <select id="fstatus"><option value="all">All status</option><option value="todo" ${filters.status==="todo"?"selected":""}>Not attempted</option><option value="got" ${filters.status==="got"?"selected":""}>Got it</option><option value="weak" ${filters.status==="weak"?"selected":""}>Partial / Missed</option></select>
  </div>
  <div class="seg" id="catSeg" style="margin-bottom:14px">
    <button data-cat="all" class="${filters.cat==="all"?"active":""}">All (${TASKS.length})</button>
    ${Object.keys(CAT_META).map(c=>`<button data-cat="${c}" class="${filters.cat===c?"active":""}">${CAT_META[c].n} (${catTasks(c).length})</button>`).join("")}
  </div>
  <div id="taskList"></div>`;
  $("#fq").addEventListener("input",e=>{filters.q=e.target.value;renderList();});
  $("#fdiff").addEventListener("change",e=>{filters.diff=e.target.value;renderList();});
  $("#fstatus").addEventListener("change",e=>{filters.status=e.target.value;renderList();});
  $("#catSeg").addEventListener("click",e=>{const b=e.target.closest("button[data-cat]");if(b){filters.cat=b.dataset.cat;renderBrowse();}});
  renderList();
}
function filteredTasks(){
  const q=filters.q.trim().toLowerCase();
  return TASKS.filter(t=>{
    if(filters.cat!=="all"&&t.cat!==filters.cat)return false;
    if(filters.diff!=="all"&&t.diff!==filters.diff)return false;
    const a=attempt(t.id);
    if(filters.status==="todo"&&a)return false;
    if(filters.status==="got"&&!(a&&a.outcome==="got"))return false;
    if(filters.status==="weak"&&!(a&&a.outcome!=="got"))return false;
    if(q){const hay=(t.title+" "+t.statement+" "+t.skills.join(" ")+" "+t.id).toLowerCase();if(!hay.includes(q))return false;}
    return true;
  });
}
function renderList(){
  const list=filteredTasks();const el=$("#taskList");if(!el)return;
  if(!list.length){el.innerHTML=`<div class="empty">No tasks match these filters.</div>`;return;}
  el.innerHTML=list.map((t,i)=>taskCard(t,i+1,{open:openSet.has(t.id)})).join("");
}
function updateBankChip(){$("#bankCount").textContent=TASKS.length;}

/* ================== EXAM SIMULATION ================== */
let examState={active:false,ids:[],idx:0,answers:{},timeLeft:0,iv:null,config:null};
function renderExamConfig(){
  const v=$("#view-exam");
  if(examState.active){renderExamRunner();return;}
  v.innerHTML=`
  <div class="panel pad">
    <h2 style="margin-bottom:6px">⏱️ Generate a Mock Exam</h2>
    <p class="muted small" style="margin:0 0 16px">Build a randomized, timed assessment from the task bank. Work each task on paper or in a code editor, then self-grade against the rubric. Score ≥ ${PASS_MARK}% to pass.</p>
    <div class="grid cols-2">
      <div>
        <label class="fl">Number of tasks</label>
        <select id="exCount">${[5,8,10,15,20].map(n=>`<option ${n===8?"selected":""}>${n}</option>`).join("")}</select>
      </div>
      <div>
        <label class="fl">Time limit (minutes)</label>
        <select id="exTime">${[15,20,30,45,60,90].map(n=>`<option ${n===30?"selected":""}>${n}</option>`).join("")}</select>
      </div>
    </div>
    <div class="divider"></div>
    <label class="fl">Topics</label>
    <div class="seg" id="exCats" style="margin-bottom:14px">
      <button data-c="all" class="active">All topics</button>
      ${Object.keys(CAT_META).map(c=>`<button data-c="${c}">${CAT_META[c].n}</button>`).join("")}
    </div>
    <label class="fl">Difficulty</label>
    <div class="seg" id="exDiffs" style="margin-bottom:18px">
      <button data-d="all" class="active">All</button>
      ${DIFFS.map(d=>`<button data-d="${d}">${d}</button>`).join("")}
    </div>
    <button class="btn primary" style="width:100%" onclick="startExam()">🚀 Start timed exam</button>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <h2 style="margin-bottom:6px">📁 Past Mock Exams</h2>
    ${S.exams.length?`<div style="margin-top:10px">${S.exams.slice().reverse().map(e=>`<div class="panel pad" style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div><b>${esc(e.date)}</b> · ${e.count} tasks · ${esc((e.cats||["All"]).join(", "))}</div>
        <div><span class="tag ${e.pass?"done":"missed"}">${e.pass?"PASS":"FAIL"} · ${e.pct}%</span></div></div>`).join("")}</div>`
      :`<p class="muted small">No mock exams completed yet — generate one above.</p>`}
  </div>`;
  $("#exCats").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;toggleSeg($("#exCats"),b,"all");});
  $("#exDiffs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;toggleSeg($("#exDiffs"),b,"all");});
}
function toggleSeg(container,btn,allKey){
  const all=container.querySelector(`button[data-c="${allKey}"],button[data-d="${allKey}"]`);
  if(btn===all){container.querySelectorAll("button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");return;}
  if(all)all.classList.remove("active");
  btn.classList.toggle("active");
  if(!container.querySelector("button.active"))(all||btn).classList.add("active");
}
function readSeg(container,attr){const act=Array.from(container.querySelectorAll("button.active")).map(b=>b.dataset[attr]);
  return act.includes("all")||!act.length?"all":act;}
function startExam(){
  const count=+$("#exCount").value;const time=+$("#exTime").value;
  const cats=readSeg($("#exCats"),"c");const diffs=readSeg($("#exDiffs"),"d");
  let pool=TASKS.filter(t=>(cats==="all"||cats.includes(t.cat))&&(diffs==="all"||diffs.includes(t.diff)));
  if(pool.length<1){toast("No tasks match — widen your filters");return;}
  pool=pool.slice();for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const ids=pool.slice(0,Math.min(count,pool.length)).map(t=>t.id);
  examState={active:true,ids,idx:0,answers:{},timeLeft:time*60,iv:null,
    config:{cats:cats==="all"?["All"]:cats.map(c=>CAT_META[c].n),time}};
  document.body.classList.add("in-exam");
  examState.iv=setInterval(tickExam,1000);
  renderExamBar();renderExamRunner();window.scrollTo(0,0);
  toast(`Exam started · ${ids.length} tasks · ${time} min`);
}
function tickExam(){examState.timeLeft--;const el=$("#examTimer");
  if(examState.timeLeft<=0){clearInterval(examState.iv);finishExam(true);return;}
  if(el){el.textContent=fmtTime(examState.timeLeft);el.classList.toggle("warn",examState.timeLeft<=60);}}
function fmtTime(s){const m=Math.floor(s/60);return String(m).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function renderExamBar(){
  $("#examTimer").textContent=fmtTime(examState.timeLeft);
  $("#examPos").textContent=`Task ${examState.idx+1} / ${examState.ids.length}`;
  renderExamDots();
}
function renderExamDots(){
  const wrap=$("#examDots");if(!wrap)return;
  wrap.innerHTML=examState.ids.map((id,i)=>{const o=examState.answers[id];
    const cls=(o?o==="got"?"done":o:"")+(i===examState.idx?" cur":"");
    return `<i class="${cls}" title="Task ${i+1}" onclick="gotoExam(${i})" style="cursor:pointer"></i>`;}).join("");
}
function gotoExam(i){examState.idx=Math.max(0,Math.min(examState.ids.length-1,i));renderExamBar();renderExamRunner();window.scrollTo(0,0);}
function renderExamRunner(){
  const v=$("#view-exam");const t=TASKS.find(x=>x.id===examState.ids[examState.idx]);
  v.innerHTML=`<div style="margin-bottom:10px" class="muted small">Solve this task, then self-grade at the bottom. Use Prev/Next or the dots above to navigate. The model solution is hidden until you reveal it.</div>
    ${taskCard(t,examState.idx+1,{open:true})}`;
}
function finishExam(auto){
  clearInterval(examState.iv);
  const ids=examState.ids;const ans=examState.answers;
  const scored=ids.map(id=>ans[id]?OUT_SCORE[ans[id]]:0);
  const pct=Math.round(scored.reduce((a,b)=>a+b,0)/ids.length*100);
  const pass=pct>=PASS_MARK;
  const catB={};ids.forEach(id=>{const t=TASKS.find(x=>x.id===id);catB[t.cat]=catB[t.cat]||{s:0,n:0};
    catB[t.cat].s+=ans[id]?OUT_SCORE[ans[id]]:0;catB[t.cat].n++;});
  ids.forEach(id=>{if(ans[id])S.attempts[id]={outcome:ans[id],at:todayStr()};});
  const exam={date:todayStr(),count:ids.length,pct,pass,cats:examState.config.cats,
    breakdown:Object.fromEntries(Object.entries(catB).map(([c,o])=>[c,Math.round(o.s/o.n*100)])),
    answered:Object.keys(ans).length};
  S.exams.push(exam);save();
  examState.active=false;document.body.classList.remove("in-exam");
  showExamResult(exam,auto);
}
function showExamResult(exam,auto){
  switchTab("exam");
  const v=$("#view-exam");
  const breakdown=Object.entries(exam.breakdown).map(([c,p])=>barRow(CAT_META[c].n,p)).join("");
  v.innerHTML=`<div class="panel pad" style="text-align:center">
    ${auto?`<p class="tag missed" style="display:inline-block;margin-bottom:10px">⏰ Time expired</p>`:""}
    <div class="result-ring" style="--p:${exam.pct};--c:${exam.pass?"var(--green)":"var(--coral)"}">
      <div class="rc"><b>${exam.pct}%</b><span>${exam.pass?"Passed":"Below pass"}</span></div></div>
    <h2 style="margin-top:16px">${exam.pass?"🎉 You passed the mock exam":"📈 Keep going — not a pass yet"}</h2>
    <p class="muted">${exam.answered}/${exam.count} tasks self-graded · pass mark ${PASS_MARK}% · ${esc(exam.date)}</p>
    <div style="max-width:480px;margin:16px auto 0;text-align:left">${breakdown}</div>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:18px;flex-wrap:wrap">
      <button class="btn primary" onclick="examState.active=false;renderExamConfig()">New exam</button>
      <button class="btn" onclick="switchTab('stats')">View progress</button>
    </div>
  </div>`;
  toast(exam.pass?"Mock exam passed 🎉":"Mock exam recorded");
}
function barRow(name,pct,color){return `<div class="barrow"><span class="nm">${esc(name)}</span><div style="flex:2"><div class="bar"><i style="width:${pct}%;${color?'background:'+color:''}"></i></div></div><span class="pct">${pct}%</span></div>`;}

/* ================== STATS / MISTAKES ================== */
function renderStats(){
  const v=$("#view-stats");const exams=S.exams;
  const sm=skillMistakes();const weak=weakCategories(6);
  v.innerHTML=`
  <div class="grid cols-4" style="margin-bottom:14px">
    <div class="panel stat"><div class="lbl">Overall mastery</div><div class="val" style="color:var(--teal)">${overallMastery()}%</div><div class="sub">${attemptedCount()}/${TASKS.length} attempted</div></div>
    <div class="panel stat"><div class="lbl">Mock exams</div><div class="val" style="color:var(--purple)">${exams.length}</div><div class="sub">${exams.length?"avg "+Math.round(exams.reduce((a,e)=>a+e.pct,0)/exams.length)+"%":"—"}</div></div>
    <div class="panel stat"><div class="lbl">Best score</div><div class="val" style="color:var(--green)">${exams.length?Math.max(...exams.map(e=>e.pct))+"%":"—"}</div><div class="sub">across all mocks</div></div>
    <div class="panel stat"><div class="lbl">Weak tasks</div><div class="val" style="color:var(--coral)">${missedTasks().length}</div><div class="sub">partial or missed</div></div>
  </div>
  <div class="grid cols-2">
    <div class="panel pad">
      <h2 style="margin-bottom:10px">📊 Mastery by Topic</h2>
      ${Object.keys(CAT_META).map(c=>{const m=catMastery(c);return barRow(CAT_META[c].n+" ("+catAttempted(c)+"/"+catTasks(c).length+")",m==null?0:m,m==null?"var(--line2)":m<PASS_MARK?"var(--coral)":"var(--green)");}).join("")}
    </div>
    <div class="panel pad">
      <h2 style="margin-bottom:10px">📈 Improvement Curve</h2>
      ${exams.length?sparkline(exams.map(e=>e.pct),exams.map(e=>e.date)):`<div class="empty">Complete mock exams to see your trend.</div>`}
      ${exams.length>=2?`<p class="muted small" style="margin-top:10px">Change since first mock: <b style="color:${exams[exams.length-1].pct-exams[0].pct>=0?'var(--green)':'var(--coral)'}">${exams[exams.length-1].pct-exams[0].pct>=0?"+":""}${exams[exams.length-1].pct-exams[0].pct}%</b></p>`:""}
    </div>
  </div>
  <div class="grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <h2 style="margin-bottom:10px">🔁 Frequently-Missed Concepts</h2>
      ${sm.length?sm.slice(0,10).map(x=>`<div class="barrow"><span class="nm">${esc(x.sk)}</span><span class="tag missed">${x.c} miss${x.c>1?"es":""}</span></div>`).join(""):`<p class="muted small">No misses recorded yet — mark tasks Partial/Missed to surface weak concepts.</p>`}
    </div>
    <div class="panel pad">
      <h2 style="margin-bottom:10px">🧭 Personalized Recommendations</h2>
      ${recommendations()}
    </div>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <h2 style="margin-bottom:10px">🩹 Tasks to Redo</h2>
    ${missedTasks().length?missedTasks().slice(0,12).map(t=>`<div class="panel" style="display:flex;gap:10px;align-items:center;padding:10px 12px;margin-bottom:8px">
        <span class="tag ${attempt(t.id).outcome}">${OUT_LABEL[attempt(t.id).outcome]}</span>
        <div style="flex:1;min-width:0"><b style="font-size:13.5px">${esc(t.title)}</b><div class="small muted">${CAT_META[t.cat].n} · ${esc(t.diff)}</div></div>
        <button class="btn sm" onclick="openTaskFromStats('${t.id}')">Open</button></div>`).join(""):`<p class="muted small">Nothing flagged. Great work — or you haven't attempted tasks yet.</p>`}
  </div>
  <div class="panel pad" style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;justify-content:space-between;align-items:center">
    <div><b>Data</b><p class="muted small" style="margin:2px 0 0">Your attempts and exams are saved in this browser and shared with the Progress Tracker.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn sm" onclick="exportRev()">Export</button>
      <button class="btn sm danger" onclick="resetRev()">Reset</button>
    </div>
  </div>`;
}
function sparkline(values,labels){const max=Math.max(...values,100);
  return `<div style="display:flex;align-items:flex-end;gap:5px;height:90px">${values.map((v,i)=>`<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center" title="${esc(labels[i])}: ${v}%"><div style="width:100%;background:linear-gradient(180deg,var(--teal),var(--blue));border-radius:4px 4px 0 0;height:${Math.max(4,v/max*100)}%"></div></div>`).join("")}</div>`;}
function recommendations(){
  const recs=[];const weak=weakCategories(2);
  weak.forEach(w=>{if(w.m<PASS_MARK)recs.push(`Prioritise <b>${CAT_META[w.cat].n}</b> — current mastery is only ${w.m}%. Redo its Hard tasks before attempting Expert ones.`);});
  const todo=TASKS.length-attemptedCount();if(todo>0)recs.push(`You still have <b>${todo}</b> un-attempted tasks. Aim for full coverage before exam day.`);
  const sm=skillMistakes();if(sm.length)recs.push(`Your most-missed concept is <b>${esc(sm[0].sk)}</b> — review it in the Progress Tracker curriculum, then redo related tasks.`);
  if(S.exams.length){const last=S.exams[S.exams.length-1];if(!last.pass)recs.push(`Your last mock scored ${last.pct}% (pass is ${PASS_MARK}%). Take another after revising your two weakest topics.`);
    else recs.push(`Last mock passed at ${last.pct}%. Raise the difficulty filter to <b>Expert</b> for your next exam.`);}
  if(!recs.length)recs.push("Attempt some tasks and run a mock exam to unlock tailored recommendations.");
  return `<ul style="margin:0;padding-left:18px">${recs.map(r=>`<li style="margin:6px 0">${r}</li>`).join("")}</ul>`;
}
function openTaskFromStats(id){switchTab("browse");filters={q:"",cat:"all",diff:"all",status:"all"};openSet.add(id);renderBrowse();
  setTimeout(()=>{const c=document.querySelector(`.task[data-id="${id}"]`);if(c)c.scrollIntoView({behavior:"smooth",block:"center"});},80);}
function exportRev(){const blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="exam-lab-backup-"+todayStr()+".json";a.click();toast("Backup downloaded");}
function resetRev(){if(confirm("Reset all attempts and mock exams? This cannot be undone."))
  {localStorage.removeItem(LS);S=blank();save();applyTheme();switchTab("browse");renderBrowse();toast("Progress reset");}}

/* ================== TABS / INIT ================== */
function switchTab(tab){
  $$("#tabs .tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===tab));
  $$(".view").forEach(v=>v.classList.remove("active"));
  $("#view-"+tab).classList.add("active");
  if(tab==="browse")renderBrowse();
  if(tab==="exam")renderExamConfig();
  if(tab==="stats")renderStats();
}
function init(){
  applyTheme();updateBankChip();
  $("#tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");if(t){
    if(examState.active&&t.dataset.tab!=="exam"){if(!confirm("Leave the exam in progress? It will not be saved."))return;
      clearInterval(examState.iv);examState.active=false;document.body.classList.remove("in-exam");}
    switchTab(t.dataset.tab);}});
  $("#themeToggle").addEventListener("click",toggleTheme);
  $("#examPrev").addEventListener("click",()=>gotoExam(examState.idx-1));
  $("#examNext").addEventListener("click",()=>gotoExam(examState.idx+1));
  $("#examFinish").addEventListener("click",()=>{if(confirm("Finish and grade the exam now?"))finishExam(false);});
  renderBrowse();
}
init();
