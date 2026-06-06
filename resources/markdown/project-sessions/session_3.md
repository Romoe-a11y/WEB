**AI-Powered Exam Preparation Planner** — Session 3 

**Cadi Ayyad University** 

**Higher School of Technology of Safi** 

**Computer Science Department** 

**Web Techniques** 

Prof. Soufiane Hourri 

## **Session 3  —  Registration and Login System** 

**Objective** 

Build the user authentication system: registration, login, session management, and secure password storage. 

## **1.  Why Authentication?** 

Authentication ensures that each student sees only their own modules. Without a login system, anyone could see or delete anyone else's data. A session in PHP keeps the user logged in as they navigate between pages. 

## **2.  Key Concepts** 

- **Registration: creating a new account and saving it in the users table** 

- **Login: verifying email + password and starting a PHP session** 

- **Session: a way for PHP to remember who is logged in across pages** 

- **Password hashing: storing a coded version of the password (not plain text) for security** 

Use PHP's built-in functions for security: 

// Hash the password before saving: $hash = password_hash($password, PASSWORD_DEFAULT); // Verify at login: password_verify($password, $hash); 

## **3.  Practical Tasks This Week** 

- **1** Create register.php with an HTML form (name, email, password) 

- **2** Connect the form to PHP and save the user in the users table 

- **3** Hash the password with password_hash() before saving 

- **4** Create login.php with an HTML form (email, password) 

- **5** Check credentials with password_verify() and start a PHP session 

- **6** Redirect to dashboard.php after successful login 

- **7** Create logout.php that destroys the session and redirects to login 

## **Expected Result by End of Week** 

Web Techniques — Prof. Soufiane Hourri   |   Page 1 / 2 

**AI-Powered Exam Preparation Planner** — Session 3 

- ✓ A new user can register and their data appears in the users table 

- ✓ A registered user can log in successfully 

- ✓ The PHP session is started and the user is redirected to the dashboard 

- ✓ Incorrect login shows an error message 

## **Advice & Common Mistakes to Avoid** 

- **!** Always validate form inputs — check that fields are not empty 

- **!** Never store passwords as plain text — always use password_hash() 

- **!** Check if the email already exists before registering a new user 

- **!** Use session_start() at the top of every page that uses sessions 

- **!** Protect your pages: redirect to login if the user is not authenticated 

## **Prepare for Next Week** 

- **→** Be ready to implement the module management (CRUD) system 

- **→** Review INSERT and SELECT SQL statements 

- **→** Think about how the module form will look 

Web Techniques — Prof. Soufiane Hourri   |   Page 2 / 2 

