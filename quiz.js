class Quiz {
  constructor() {
      this.questions = [];       // Array to store all quiz questions
      this.quizSessions = {};    // Object to track quiz sessions for each user
      this.quizResults = {};     // Object to store quiz results for each user
  }

  // Method to add a question to the quiz
  addQuestion(questionText, options, correctOption) {
      const question = {
          questionText: questionText,   // The text of the question
          options: options,             // Array of possible answers
          correctOption: correctOption  // Index of the correct answer in the options array
      };
      this.questions.push(question);    // Add the question to the quiz
  }

  // Method to start a quiz session for a specific user
  startQuiz(userId) {
      this.quizSessions[userId] = {     // Initialize a new session for the user
          currentQuestionIndex: 0,      // Set the current question index to 0
          userAnswers: []               // Initialize an empty array for user's answers
      };
  }

  // Method to submit answers and calculate the user's score
  submitAnswers(userId, userAnswers) {
      let score = 0;                              // Initialize score to 0
      const session = this.quizSessions[userId];  // Get the user's session data

      // Loop through the user's answers
      userAnswers.forEach((answer, index) => {
          if (answer === this.questions[index].correctOption) {
              score++;  // Increment score if the answer is correct
          }
          session.userAnswers.push(answer);  // Store the user's answer
      });

      this.storeResults(userId, score);  // Store the user's score
  }

  // Method to display the number of correct answers for a specific user
  displayResults(userId) {
      const session = this.quizSessions[userId];  // Get the user's session data
      let correctAnswerCount = 0;

      // Loop through the user's answers to count correct ones
      session.userAnswers.forEach((answer, index) => {
          if (answer === this.questions[index].correctOption) {
              correctAnswerCount++;  // Increment count for correct answers
          }
      });

      // Display the number of correct answers
      console.log(`User ${userId} answered ${correctAnswerCount} questions correctly.`);
      
      return correctAnswerCount;  // Return the count of correct answers
  }

  // Method to store the user's results
  storeResults(userId, score) {
      this.quizResults[userId] = score;  // Store the user's score
  }
}

// Example usage: Display only the number of correct answers

const quiz = new Quiz();  // Create a new quiz instance

// Add some example questions (hardcoded)
quiz.addQuestion("What is the capital of France?", ["Paris", "London", "Rome", "Berlin"], 0);
quiz.addQuestion("What is 2 + 2?", ["3", "4", "5", "6"], 1);
quiz.addQuestion("What is the color of the sky?", ["Green", "Blue", "Red", "Yellow"], 1);

// Example: Start a quiz session and submit answers
quiz.startQuiz("user1");
quiz.submitAnswers("user1", [0, 1, 2]);  // Submit answers

// Display the number of correct answers for the user
quiz.displayResults("user1");
