**AI-Powered Exam Preparation Planner** — Session 4 

**Cadi Ayyad University** 

**Higher School of Technology of Safi Computer Science Department** 

**Web Techniques** 

Prof. Soufiane Hourri 

## **Session 4  —  Add and Display Modules** 

**Objective** 

Implement the first two operations of CRUD: Create (add a new module) and Read (display all modules for the logged-in user). 

## **1.  CRUD Reminder — Create and Read** 

CRUD is the foundation of any data-driven web application. This week you implement the first two operations: 

|||
|---|---|
|**Technology**|**What It Does**|
|||
|||
|**C — Create**|The user fills in a form and saves a new module to the database|
|||
|||
|**R — Read**|The application fetches all modules from the database and displays<br>them|
|||



## **2.  Module Fields** 

Each module has 7 data fields. These fields will later be sent to the AI to generate a revision plan: 

|||
|---|---|
|**Technology**|**What It Does**|
|||
|||
|**module_name**|Name of the subject (e.g. Mathematics, Web Techniques)|
|||
|||
|**teacher**|Name of the teacher for this module|
|||
|||
|**difficulty**|How hard the module is: Easy, Medium, or Hard|
|||
|||
|**career_importance**|How important it is for the future: Low, Medium, or High|
|||
|||
|**progress**|How much work has been done so far (0 to 100 %)|
|||
|||
|**understanding_level**|Current understanding: Low, Medium, or High|
|||
|||
|**exam_date**|The date of the upcoming exam|
|||



## **3.  Practical Tasks This Week** 

- **1** Create add_module.php with a form for all 7 module fields 

- **2** Use <select> for difficulty, career_importance, and understanding_level 

- **3** Process the form in PHP and INSERT the data into the modules table 

- **4** Link the module to the logged-in user using $_SESSION['user_id'] **5** Create modules.php that SELECTs and displays all modules of the current user 

Web Techniques — Prof. Soufiane Hourri   |   Page 1 / 2 

**AI-Powered Exam Preparation Planner** — Session 4 

**6** 

Display modules in an HTML table or as cards 

**7** Add links: Edit and Delete on each module row 

## **Expected Result by End of Week** 

> ✓ The user can add a module using the form 

> ✓ The module appears in the modules list after submission 

> ✓ Each module shows its name, difficulty, exam date, and progress 

> ✓ Only the logged-in user's modules are shown 

## **Advice & Common Mistakes to Avoid** 

**!** Always validate that numeric fields like progress are between 0 and 100 

**!** Use WHERE user_id = ? in your SQL query — never show modules of other users 

**!** Escape user input to avoid SQL injection — use prepared statements with PDO 

**!** Keep the interface simple: a table with columns is perfectly fine for now 

## **Prepare for Next Week** 

**→** Be ready to add Edit and Delete functionality 

**→** Review UPDATE and DELETE SQL statements 

**→** Think about how to pre-fill the edit form with existing module data 

Web Techniques — Prof. Soufiane Hourri   |   Page 2 / 2 

