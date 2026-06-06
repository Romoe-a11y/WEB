**AI-Powered Exam Preparation Planner** — Session 2 

**Cadi Ayyad University Higher School of Technology of Safi Computer Science Department Web Techniques** 

Prof. Soufiane Hourri 

## **Session 2  —  Database Design and MySQL Initialization** 

**Objective** 

Design the database for the application and create the tables in MySQL using phpMyAdmin. 

## **1.  Why Do We Need a Database?** 

A database stores all the information your application needs permanently. Without a database, data would disappear every time the page refreshes. MySQL is a relational database — data is organized in tables, just like spreadsheets, but much more powerful. 

## **2.  Key Database Concepts** 

- **Primary Key (PK): a unique identifier for each row — the id column** 

- **Foreign Key (FK): a reference from one table to another — links modules to their user** 

- **Relationship: one user can have many modules (1-to-N)** 

## **3.  Database Tables** 

Your application needs at minimum two tables and one optional table: 

|**Table: users**||
|---|---|
|**Column**|**Type / Notes**|
|id|INT — AUTO_INCREMENT PRIMARY KEY|
|name|VARCHAR(100) — NOT NULL|
|email|VARCHAR(100) — NOT NULL UNIQUE|
|password|VARCHAR(255) — NOT NULL|



|||
|---|---|
|**Table: modules**||
|**Column**|**Type / Notes**|
|id|INT — AUTO_INCREMENT PRIMARY KEY|
|user_id|INT — FK referencing users(id)|
|module_name|VARCHAR(150) — NOT NULL|
|teacher|VARCHAR(100)|
|difficulty|ENUM('Easy','Medium','Hard') — NOT NULL|
|career_importance|ENUM('Low','Medium','High') — NOT NULL|
|progress|INT — value from 0 to 100|



Web Techniques — Prof. Soufiane Hourri   |   Page 1 / 2 

**AI-Powered Exam Preparation Planner** — Session 2 

understanding_level ENUM('Low','Medium','High') — NOT NULL exam_date DATE — NOT NULL created_at TIMESTAMP — DEFAULT CURRENT_TIMESTAMP 

## **Table: study_plans (optional)** 

|**Table: study_plans (optional)**|**Table: study_plans (optional)**|
|---|---|
|**Column**|**Type / Notes**|
|id|INT — AUTO_INCREMENT PRIMARY KEY|
|user_id|INT — FK referencing users(id)|
|generated_plan|TEXT — stores the AI-generated plan|
|created_at|TIMESTAMP — DEFAULT CURRENT_TIMESTAMP|



## **4.  Practical Tasks This Week** 

- **1** Open phpMyAdmin at http://localhost/phpmyadmin 

- **2** Create a new database named exam_planner 

- **3** Create the users table with the columns above 

- **4** Create the modules table with all its columns 

- **5** Test the foreign key between modules.user_id and users.id 

- **6** Add 2-3 sample rows in each table manually to verify the structure 

## **Expected Result by End of Week** 

- ✓ The database exam_planner exists in MySQL 

- ✓ Both tables are created with the correct columns and types 

- ✓ You can see and browse your tables in phpMyAdmin 

- ✓ You understand what each column stores 

## **Advice & Common Mistakes to Avoid** 

- **!** Use clear, consistent column names — avoid spaces and capitals 

- **!** Choose the right data type: use INT for numbers, VARCHAR for text, DATE for dates 

- **!** Always define a PRIMARY KEY on every table 

- **!** Keep the schema simple — you can always add columns later 

- **!** Save your CREATE TABLE SQL as a backup file 

## **Prepare for Next Week** 

- **→** Review PHP forms: how to create an HTML form and submit data with POST 

- **→** Understand how PHP connects to MySQL using PDO or mysqli 

- **→** Be ready to build the registration and login system 

Web Techniques — Prof. Soufiane Hourri   |   Page 2 / 2 

