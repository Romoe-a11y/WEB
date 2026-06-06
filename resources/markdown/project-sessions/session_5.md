**AI-Powered Exam Preparation Planner** — Session 5 

**Cadi Ayyad University** 

**Higher School of Technology of Safi Computer Science Department** 

**Web Techniques** 

Prof. Soufiane Hourri 

## **Session 5  —  Edit and Delete Modules** 

**Objective** 

Complete the CRUD system by implementing Update (edit a module) and Delete (remove a module). Test the full CRUD cycle end-to-end. 

## **1.  Completing CRUD** 

A complete CRUD system allows the user to manage all their data. This week you add the last two operations: 

|||
|---|---|
|**Technology**|**What It Does**|
|||
|||
|**U — Update**|The user opens an edit form pre-filled with the module's current data<br>and saves changes|
|||
|||
|**D — Delete**|The user removes a module from the database after a confirmation<br>step|
|||



## **2.  Key Concepts** 

- **Pre-filling the edit form: use SELECT to fetch the current module data, then put it in form field values** 

- **The UPDATE SQL statement: modifies existing rows in the database** 

- **Delete confirmation: ask the user before deleting to avoid accidents** 

-- Update a module: UPDATE modules SET module_name=?, difficulty=?, exam_date=? WHERE id=? AND user_id=?; -- Delete a module: DELETE FROM modules WHERE id=? AND user_id=?; 

## **3.  Practical Tasks This Week** 

- **1** Create edit_module.php — fetch the module by id using SELECT 

- **2** Display an HTML form pre-filled with the module's current values 

- **3** Process the edit form and run an UPDATE SQL statement 

- **4** Create delete_module.php — confirm with the user before deleting 

- **5** Run a DELETE SQL statement and redirect back to the modules list 

- **6** Test the complete CRUD cycle: Add → Display → Edit → Delete 

Web Techniques — Prof. Soufiane Hourri   |   Page 1 / 2 

**AI-Powered Exam Preparation Planner** — Session 5 

**7** Verify that a user can only edit or delete their own modules 

## **Expected Result by End of Week** 

> ✓ The user can edit any module and see the updated values immediately 

> ✓ The user can delete a module with a confirmation step 

> ✓ The full CRUD cycle works correctly from start to finish 

> ✓ All data operations are restricted to the logged-in user 

## **Advice & Common Mistakes to Avoid** 

**!** Always include AND user_id = ? in your UPDATE and DELETE queries — never trust the id alone 

**!** Test deletion with real data to make sure it works and redirects correctly 

**!** Reuse your add_module form for editing — just pre-fill the values 

**!** Always test with multiple modules and different users if possible 

## **Prepare for Next Week** 

**→** Think about how the dashboard can show useful summary information 

**→** Prepare to style the application more carefully with CSS3 

**→** Review how to display conditional content in PHP 

Web Techniques — Prof. Soufiane Hourri   |   Page 2 / 2 

