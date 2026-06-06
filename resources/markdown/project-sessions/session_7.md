**AI-Powered Exam Preparation Planner** — Session 7 

**Cadi Ayyad University** 

**Higher School of Technology of Safi Computer Science Department** 

**Web Techniques** 

Prof. Soufiane Hourri 

## **Session 7  —  AI Integration for the 1-Week Revision Plan** 

**Objective** 

Connect the application to an AI API and use module data to generate a personalized 7-day revision plan for the student. 

## **1.  Why AI in This Project?** 

The AI is not just a decoration — it solves a real problem. Given the student's modules, their difficulty, progress, understanding, and exam dates, the AI can generate a smart weekly study schedule. This is the core intelligence of your application. 

The AI will use these fields to prioritize: 

|**Technology**|**What It Does**|
|---|---|
|||
|||
|**difficulty**|Harder modules get more study time|
|||
|||
|**career_importance**|Important modules are prioritized|
|||
|||
|**progress**|Low progress = more time needed|
|||
|||
|**understanding_level**|Low understanding = more urgent review|
|||
|||
|**exam_date**|Nearest exams are scheduled first|
|||



## **2.  Where to Get an AI API?** 

## **Option 1: GitHub Models / GitHub Marketplace** 

Beginner-friendly for developers. Good if you already use GitHub. Try different AI models easily. 

## **Option 2: Hugging Face** 

Access many free and open models. Great for experimentation. Popular in AI student projects. 

## **Option 3: OpenRouter (alternative)** 

One API key gives access to multiple AI models. Practical for simple integration without managing multiple accounts. 

**Recommendation:** Choose the API with the clearest documentation. Start with a simple text generation endpoint. Do not pick a complicated setup for this project. 

## **3.  How to Build the AI Prompt** 

Send your module data to the AI as a structured prompt. Example: 

Web Techniques — Prof. Soufiane Hourri   |   Page 1 / 2 

**AI-Powered Exam Preparation Planner** — Session 7 

You are a study planner. Create a 7-day revision plan for: 

- Web Techniques: Difficulty=Hard, Progress=40%, Exam=in 5 days 

- Mathematics: Difficulty=Medium, Progress=70%, Exam=in 10 days Prioritize urgent and difficult modules. Format: Day 1, Day 2, ... 

## **4.  Practical Tasks This Week** 

- **1** Register for an API key at GitHub Models, Hugging Face, or OpenRouter 

- **2** Create generate_plan.php with a button to generate the revision plan 

- **3** Fetch all modules of the logged-in user from the database 

- **4** Build a structured text prompt from the module data 

- **5** Send the prompt to the AI API using PHP (curl or file_get_contents) 

- **6** Display the returned text as a 7-day revision plan on the page 

- **7** Optional: save the generated plan in the study_plans table 

## **Expected Result by End of Week** 

- ✓ The student can click a button to generate a personalized revision plan 

- ✓ The AI uses the actual module data (difficulty, progress, exam dates) 

> ✓ The plan is displayed clearly on the page 

- ✓ The AI feature is genuinely useful and not just decorative 

## **Advice & Common Mistakes to Avoid** 

- **!** Make sure your full CRUD system works perfectly before starting the AI integration 

- **!** Start by testing the API manually (with a fixed prompt) before connecting it to real data 

- **!** Keep the prompt short and structured — clear instructions give better AI results 

- **!** Store your API key in a separate config file and never expose it publicly 

- **!** If the API fails, display a helpful error message to the user 

## **Prepare for Next Week** 

- **→** Test every feature end-to-end: registration, login, CRUD, and AI plan 

- **→** Fix all remaining bugs and improve the interface 

- **→** Prepare a clear demo scenario for the final presentation 

Web Techniques — Prof. Soufiane Hourri   |   Page 2 / 2 

