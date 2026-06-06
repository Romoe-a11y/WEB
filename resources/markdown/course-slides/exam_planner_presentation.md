# **AI-Powered Exam Preparation Planner** 

Web Techniques Project 

**CRUD** 

**MySQL Database** 

**PHP Backend** 

**AI API** 

## **Project Context — Why This App?** 

OR CE Cee **Students struggle to Every student is different AI can plan smarter prioritize** When exams approach, students Each student has different progress An AI API can analyze all this data don't know which module to revise levels, understanding, and difficulty and generate a personalized 1-week first. All subjects feel equally urgent. across modules. exam revision plan automatically. 

- **Project Objective** 

- ~~a~~ 

## _Build a web application that does 3 things:_ 

**Manages Modules Stores Data Uses AI** Lets a student add, view, edit and Persists all module information in a Sends module data to an AI API to delete their academic modules in a MySQL database using PHP as the generate a smart, personalized 7- clean web interface. backend. day revision plan. 

**==> picture [720 x 392] intentionally omitted <==**

**----- Start of picture text -----**<br>
Main Features — What Can the App Do?<br>pe<br>View Module<br>Add a Module Display Modules<br>Details<br>oO - ©<br>Create a new module with all its  View a list of all your modules. See full information for one<br>details. module.<br>Edit a Module Delete a Module Generate AI Plan<br>O<br>Update module info anytime. Remove a module you no longer  Get a personalized 7-day revision<br>need. plan.<br>CRUD Project  +  AI Integration<br>LC<br>**----- End of picture text -----**<br>


**==> picture [720 x 254] intentionally omitted <==**

**----- Start of picture text -----**<br>
What is CRUD? — Applied to This Project<br>a<br>Create Read Update Delete<br>Example: Example: Example: Example:<br>coe wo<br>Add a new module (e.g.  Display all your modules  Edit module difficulty or  Remove a module you<br>"Mathematics") to the  on the main page. change the exam date. no longer need.<br>database.<br>**----- End of picture text -----**<br>


- **Module Information — Required Fields** 

- pee 

_Each module stores 7 pieces of information that help the AI prioritize revision:_ 

**Module Name Current Progress** e.g. "Mathematics", "Web Techniques" 0 – 100 % **Teacher Understanding Level** Name of the module's teacher Low / Medium / High **Difficulty** EB **Exam Date** Easy / Medium / Hard Date of the upcoming exam : **Career Importance** Low / Medium / High 

**==> picture [720 x 405] intentionally omitted <==**

**----- Start of picture text -----**<br>
How the AI Is Useful<br>a<br>What goes IN What comes OUT<br>e Module difficulty (Easy/Medium/Hard) v A smart 7-day revision plan<br>@ Career importance (Low/Medium/High) Harder modules scheduled first<br>@ Current progress (%) v Urgent exams prioritized<br>@ Understanding level Study time adapted to progress<br>AI API<br>@ Exam date (urgency) v Fully personalized per student<br>AI is not used randomly — it solves a real problem for every student.<br>**----- End of picture text -----**<br>


## **Example of AI-Generated Revision Plan** 

**==> picture [580 x 336] intentionally omitted <==**

**----- Start of picture text -----**<br>
Sample output for a student with 5 modules:<br>alata aban alate<br>Day 1 3) Day 2 323) Day 3 223) Day 4<br>Web Techniques Database Mathematics Algorithms<br>2 hours 2 hours 2 hours 2 hours<br>Mathematics English Web Techniques Database<br>1 hour 1 hour 1 hour 1 hour<br>Algorithms<br>1 hour<br>Difficult and urgent modules are always scheduled first in the week.<br>**----- End of picture text -----**<br>


## **Technologies Required** 

**WampServer HTML5 CSS3 PHP MySQL XAMPP** Structures the web Designs and styles the Backend logic — Stores all module Runs Apache + PHP + pages and forms interface connects forms to data in tables MySQL locally database 

## **What is Localhost?** 

**Localhost = your own computer as a server** You don't need to upload files to the internet. WampServer or XAMPP runs a local web server (Apache) on your PC. PHP and MySQL work exactly the same as on a real server. Once ready, you can move your project online easily. _Your laptop IS the server_ **`http://localhost/exam_planner`** _during development!_ | ica) 

## **Development Environment — WampServer / XAMPP** 

_Install WampServer or XAMPP to get these three tools in one package:_ 

|**Apache**<br>Gxt<br>aaxXD<br>GED<br>Web Server||**MySQL**<br>a><br>—<br>Wa<br>Database|||**PHP**<br>Backend Language|
|---|---|---|---|---|---|
|Serves your PHP pages to the||Stores all module data in tables<br>~v||~v|Processes form submissions|
|browser||||||
|Runs on port 80 by default||Manage via phpMyAdmin in<br>~v||~v|Connects to MySQL database|
|||browser||||
|Start it with one click in||Used by PHP to read/write data<br>~v||~v|Generates HTML pages|
|WampServer|||||dynamically|



## **Entity Relationship Diagram** 

**==> picture [579 x 310] intentionally omitted <==**

**----- Start of picture text -----**<br>
USER<br>* id INT<br>name VARCHAR(100)<br>email VARCHAR(100)<br>password VARCHAR(255)<br>1 User → Many Modules 1 User → Many Plans<br>MODULE STUDY_PLAN<br>* id INT * id INT<br>+ user_id INT -> users.id + user_id INT -> users.id<br>module_name, teacher generated_plan TEXT<br>difficulty, career_importance created_at TIMESTAMP<br>progress, understanding_level<br>exam_date<br>**----- End of picture text -----**<br>


## **Database Tables — Structure at a Glance** 

|**users**<br>**Column**<br>**Type**<br>**Notes**<br>id<br>INT<br>AUTO_INCREMENT PRIMARY<br>KEY<br>name<br>VARCHAR(100)<br>NOT NULL<br>email<br>VARCHAR(100)<br>NOT NULL UNIQUE<br>password<br>VARCHAR(255)<br>NOT NULL<br>**study_plans**<br>**Column**<br>**Type / Constraint**<br>id<br>INT — AUTO_INCREMENT PK<br>user_id<br>INT — FK → users.id<br>generated_plan<br>TEXT<br>created_at<br>TIMESTAMP DEFAULT NOW()|**users**<br>**Column**<br>**Type**<br>**Notes**<br>id<br>INT<br>AUTO_INCREMENT PRIMARY<br>KEY<br>name<br>VARCHAR(100)<br>NOT NULL<br>email<br>VARCHAR(100)<br>NOT NULL UNIQUE<br>password<br>VARCHAR(255)<br>NOT NULL<br>**study_plans**<br>**Column**<br>**Type / Constraint**<br>id<br>INT — AUTO_INCREMENT PK<br>user_id<br>INT — FK → users.id<br>generated_plan<br>TEXT<br>created_at<br>TIMESTAMP DEFAULT NOW()|**modules**|**modules**|
|---|---|---|---|
|||**Column**|**Type / Constraint**|
|||id|INT — AUTO_INCREMENT PK|
|||user_id|INT — FK → users.id|
|||module_name|VARCHAR(150) NOT NULL|
|||teacher|VARCHAR(100)|
|||difficulty|ENUM('Easy','Medium','Hard')|
|||career_importance|ENUM('Low','Medium','High')|
|**Column**|**Type / Constraint**|||
|||progress|INT (0 to 100)|
|id|INT — AUTO_INCREMENT PK|||
|||understanding_level|ENUM('Low','Medium','High')|
|user_id|INT — FK → users.id|||
|||exam_date|DATE NOT NULL|
|generated_plan|TEXT|||
|created_at|TIMESTAMP DEFAULT NOW()|created_at|TIMESTAMP DEFAULT NOW()|



## **8-Week Development Plan** 

**1 2** O Week 1 O Week 2 **Environment Setup Database Design** Install WampServer/XAMPP. Verify tables & relationships. Create the database & tables Insert test data. Explore with phpMyAdmin. phpMyAdmin. **5 6** 

**2 3 4** Week 2 OC) Week 3 O Week 4 **Database Design HTML & CSS Interface PHP — Read & Display** Verify tables & relationships. Build page layout, navigation, Connect PHP to MySQL. Fetch Insert test data. Explore and module forms with HTML5 and display the list of modules. phpMyAdmin. and CSS3. **6 7 8 Update & Details Page AI API Integration Testing & Polish** Add Edit form (Update) and a Connect to an AI API. Send Test all features, fix bugs, module detail view page. module data and display the improve UI, prepare for generated plan. presentation. 

**Create & Delete** Implement the Add Module form (Create) and the Delete functionality. 

