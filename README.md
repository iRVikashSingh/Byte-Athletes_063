# Byte-Athletes_063

# Quiz Application

## Introduction
This project is a JavaScript-based quiz application that allows users to take quizzes, submit their answers, and receive feedback on the number of correct answers. The application is designed to be easily extendable, allowing for the addition of new questions and user sessions.

## Project Type
Backend



## Directory Structure
```
quiz-app/
  ├─ package.js
  ├─ Quiz.js
  ├─ ...
```

## Video Walkthrough of the Project
Attach a short video walkthrough showcasing the features of the Quiz Application [1 - 3 minutes].

## Video Walkthrough of the Codebase
Attach a brief video explaining the codebase structure and key components [1 - 5 minutes].

## Features
- Add multiple-choice questions to the quiz.
- Start quiz sessions for users.
- Submit user answers and calculate scores.
- Display the number of correct answers for each user.

## Design Decisions or Assumptions
- **Modular Design:** The application is designed with modularity in mind, making it easy to add, remove, or modify quiz questions and user sessions.
- **Scalability:** The system can handle multiple users and quizzes simultaneously.
- **Assumptions:** It is assumed that users will submit answers for all questions in the quiz.

## Installation & Getting Started
To install and run the project locally:

```bash
git clone "https://github.com/iRVikashSingh/Byte-Athletes_063"
cd quiz-app
npm install
npm start
```

## Usage
To use the quiz application, follow these steps:

1. Start the quiz session for a user.
2. Submit the user's answers.
3. Display the user's score.

```bash
# Example code usage
const quiz = new Quiz();
quiz.addQuestion("What is the capital of France?", ["Paris", "London", "Rome", "Berlin"], 0);
quiz.startQuiz("user1");
quiz.submitAnswers("user1", [0, 1, 2]);
quiz.displayResults("user1");
```

Include screenshots if necessary.

## Credentials
N/A for this project.

## APIs Used
N/A for this project.



## Technology Stack
- **JavaScript** - Core programming language used for the quiz logic.

