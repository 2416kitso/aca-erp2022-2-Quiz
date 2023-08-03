import React, { useState } from "react";
import Question from "./Questions";
import Welcome from "./Welcome";
import Result from "./Result";

interface Answer {
    question: string;
    userAnswer: string;
    correctAnswer: string;
  }

const Quiz: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const questions = [
    {
        question: "What is the purpose of a Git commit?",
        options: [
          "To add new files to the repository",
          "To save changes to the local repository",
          "To push changes to the remote repository",
          "To delete files from the repository"
        ],
        correctAnswer: "To save changes to the local repository"
    },
    {
        question: "How do you stage changes for commit in Git?",
  options: ["git add", "git commit", "git push", "git stage"],
  correctAnswer: "git add"
      },
      {
        question: "What is a remote repository in Git?",
        options: [
          "A repository on your local machine",
          "A repository stored on a cloud server",
          "A repository without version control",
          "A repository with multiple branches"
        ],
        correctAnswer: "A repository stored on a cloud server"
      },
      {
        question: "How do you push changes to a remote repository in Git?",
  options: ["git send", "git push", "git upload", "git share"],
  correctAnswer: "git push"
      },
      {
        question: "What is the purpose of 'git clone' command?",
  options: [
    "To create a new branch",
    "To copy a remote repository to your local machine",
    "To delete a repository",
    "To merge two branches"
  ],
  correctAnswer: "To copy a remote repository to your local machine"
      },
      {
        question: "Which command is used to switch to a different Git branch?",
  options: ["git switch", "git branch", "git checkout", "git move"],
  correctAnswer: "git checkout"
      },
      {
        question: "How do you create a new branch and switch to it in one command?",
  options: ["git new", "git create", "git branch -b", "git checkout -b"],
  correctAnswer: "git checkout -b"
      },
      {
        question: "What is a Git merge used for?",
        options: [
          "To create a new branch",
          "To delete a branch",
          "To combine changes from one branch into another",
          "To undo the previous commit"
        ],
        correctAnswer: "To combine changes from one branch into another"
      },
      {
        question: "What is a Git pull request?",
        options: [
          "A request to delete a branch",
          "A request to merge two branches",
          "A request to push changes to a remote repository",
          "A request to review and merge changes from a branch in a forked repository"
        ],
        correctAnswer: "A request to review and merge changes from a branch in a forked repository"
      },

      {
        question: "How do you remove a file from the Git repository?",
        options: ["git remove", "git delete", "git reset", "git rm"],
        correctAnswer: "git rm"
      },

      {
        question: "What is the purpose of .gitignore file?",
  options: [
    "To store the Git configuration settings",
    "To list the files and directories that should be excluded from version control",
    "To specify the remote repository URL",
    "To define the project name and description"
  ],
  correctAnswer: "To list the files and directories that should be excluded from version control"
      },

      {
        question: "How do you rename a Git branch?",
        options: ["git rename <old-name> <new-name>", "git mv <old-name> <new-name>", "git branch -m <old-name> <new-name>", "git switch <old-name> <new-name>"],
        correctAnswer: "git branch -m <old-name> <new-name>"
      },

      {
        question: "How do you view the changes between two Git branches?",
  options: ["git changes <branch1> <branch2>", "git diff <branch1> <branch2>", "git show <branch1> <branch2>", "git branch <branch1> <branch2>"],
  correctAnswer: "git diff <branch1> <branch2>"
      },

      {
        question: "What is a Git conflict?",
        options: [
          "A situation when two branches have the same name",
          "A situation when two commits have the same message",
          "A situation when changes from different branches cannot be automatically merged",
          "A situation when Git refuses to commit changes"
        ],
        correctAnswer: "A situation when changes from different branches cannot be automatically merged"
      },

      {
        question: "What does TypeScript add to JavaScript?",
        options: [
        "Static typing",
        "Dynamic typing",
        "Object-oriented programming features",
        "Functional programming features"
        ],
        correctAnswer: "Static typing"
      },

      {
        question: "How do you define a variable with a specific type in TypeScript?",
        options: [
        "let variableName: type;",
        "var variableName: type;",
        "const variableName: type;",
        "type variableName = value;"
        ],
        correctAnswer: "let variableName: type;"
      },

      {
        question: "What is the benefit of using TypeScript's static typing?",
        options: [
        "It makes the code run faster",
        "It catches type-related errors during development",
        "It allows for dynamic type changes at runtime",
        "It reduces the size of the compiled code"
        ],
        correctAnswer: "It catches type-related errors during development"
      },

      {
        question: "How do you explicitly specify the return type of a function in TypeScript?",
options: [
"function myFunction(): type {}",
"function myFunction() {}",
"function myFunction() => type {}",
"function myFunction(): {} {}"
],
correctAnswer: "function myFunction(): type {}"
      },

      {
        question: "Which movie features a young lion prince who learns about responsibility and bravery from a wise baboon?",
options: [
"The Lion King",
"Finding Nemo",
"Frozen",
"Moana"
],
correctAnswer: "The Lion King"
      },

      {
        question: "In which movie does a robot from the future say the phrase 'I'll be back'?",
options: [
"The Terminator",
"Jurassic Park",
"Back to the Future",
"Star Wars: A New Hope"
],
correctAnswer: "The Terminator"
      },

      {
        question: "Which movie follows the adventures of a young wizard named Harry Potter at Hogwarts School of Witchcraft and Wizardry?",
options: [
"The Lord of the Rings: The Fellowship of the Ring",
"Harry Potter and the Sorcerer's Stone",
"The Hunger Games",
"Avatar"
],
correctAnswer: "Harry Potter and the Sorcerer's Stone"
      },

      {
        question: "Which movie is about a fish named Marlin who embarks on a journey to find his missing son Nemo?",
options: [
"Toy Story",
"The Incredibles",
"Finding Nemo",
"Shrek"
],
correctAnswer: "Finding Nemo"
      },

      {
        question: "In which movie does a young woman disguise herself as a man to take her father's place in the army during a war?",
options: [
"Mulan",
"Cinderella",
"Beauty and the Beast",
"Aladdin"
],
correctAnswer: "Mulan"
      },

      {
        question: "Which movie is about a clownfish named Marlin searching for his son Nemo who was captured by a scuba diver?",
options: [
"The Little Mermaid",
"Toy Story",
"Finding Nemo",
"Frozen"
],
correctAnswer: "Finding Nemo"
      },

      {
        question: "In which movie does a young girl befriend a friendly alien with a glowing finger?",
options: [
"E.T. the Extra-Terrestrial",
"Close Encounters of the Third Kind",
"Men in Black",
"Alien"
],
correctAnswer: "E.T. the Extra-Terrestrial"
      },

      {
        question: "Which movie is about a young girl who finds a magic lamp containing a genie who grants her three wishes?",
options: [
"Sleeping Beauty",
"Aladdin",
"Snow White and the Seven Dwarfs",
"Beauty and the Beast"
],
correctAnswer: "Aladdin"
      },

      {
        question: "In which movie does a group of toys come to life when their owner is not around?",
options: [
"Toy Story",
"Frozen",
"The Lion King",
"Finding Nemo"
],
correctAnswer: "Toy Story"
      },

      {
        question: "Which movie follows the story of a young girl who is cursed to live as an old woman and seeks the help of a wizard to break the spell?",
options: [
"Spirited Away",
"Howl's Moving Castle",
"My Neighbor Totoro",
"Princess Mononoke"
],
correctAnswer: "Howl's Moving Castle"
      },

      {
        question: "In which movie does a young girl venture into a mysterious land filled with talking creatures and a wicked witch?",
options: [
"Alice in Wonderland",
"Sleeping Beauty",
"Cinderella",
"Frozen"
],
correctAnswer: "Alice in Wonderland"
      },

      {
        question: "Which movie is about a young boy who discovers he is a wizard and attends a school for magic?",
options: [
"Harry Potter and the Chamber of Secrets",
"Harry Potter and the Goblet of Fire",
"Harry Potter and the Prisoner of Azkaban",
"Harry Potter and the Sorcerer's Stone"
],
correctAnswer: "Harry Potter and the Sorcerer's Stone"
      },

      {
        question: "In which movie do a group of superheroes come together to save the world from a powerful villain?",
options: [
"The Avengers",
"Justice League",
"X-Men",
"Guardians of the Galaxy"
],
correctAnswer: "The Avengers"
      },

      {
        question: "Which movie is about a young woman who is cursed to live as a beast and must find true love to break the spell?",
options: [
"Beauty and the Beast",
"Snow White and the Seven Dwarfs",
"Cinderella",
"Sleeping Beauty"
],
correctAnswer: "Beauty and the Beast"
      },

      {
        question: "In which movie does a friendly extraterrestrial help a young boy in his mission to phone home?",
        options: [
        "Star Wars: A New Hope",
        "Close Encounters of the Third Kind",
        "E.T. the Extra-Terrestrial",
        "The Day the Earth Stood Still"
        ],
        correctAnswer: "E.T. the Extra-Terrestrial"
      },

      {
        question: "Which movie follows the journey of a robot tasked with cleaning up an abandoned Earth?",
options: [
"WALL-E",
"RoboCop",
"I, Robot",
"The Iron Giant"
],
correctAnswer: "WALL-E"
      },

      {
        question: "In which movie does a young girl's toys come to life at night, including a cowboy doll named Woody?",
options: [
"Monsters, Inc.",
"Toy Story",
"Finding Nemo",
"The Incredibles"
],
correctAnswer: "Toy Story"
      },

      {
        question: "Which movie tells the story of a clownfish searching for his son who was captured and put in a fish tank?",
options: [
"Finding Nemo",
"Shark Tale",
"The Little Mermaid",
"Finding Dory"
],
correctAnswer: "Finding Nemo"
      },

      {
        question: "In which movie does a young man create a giant theme park filled with cloned dinosaurs?",
options: [
"Jurassic Park",
"Godzilla",
"King Kong",
"Jumanji"
],
correctAnswer: "Jurassic Park"

      },

      {
        question: "Which movie is about a father and son who embark on a cross-country trip to bring the son to college?",
options: [
"Planes, Trains and Automobiles",
"Daddy Day Care",
"Meet the Parents",
"Finding Nemo"
],
correctAnswer: "Planes, Trains and Automobiles"
      },

      {
        question: "What is the largest mammal on Earth?",
options: [
"Elephant",
"Blue Whale",
"Giraffe",
"Lion"
],
correctAnswer: "Blue Whale"
      },

      {
        question: "Who painted the Mona Lisa?",
options: [
"Vincent van Gogh",
"Leonardo da Vinci",
"Pablo Picasso",
"Michelangelo"
],
correctAnswer: "Leonardo da Vinci"
      },

      {
        question: "Which planet is known as the 'Red Planet'?",
options: [
"Earth",
"Mars",
"Venus",
"Jupiter"
],
correctAnswer: "Mars"
      },

      {
        question: "Which famous play features the characters of Hamlet, Ophelia, and Claudius?",
options: [
"Macbeth",
"Romeo and Juliet",
"Hamlet",
"Julius Caesar"
],
correctAnswer: "Hamlet"
      },

      {
        question: "Who is known as the 'Father of Modern Physics'?",
options: [
"Isaac Newton",
"Albert Einstein",
"Galileo Galilei",
"Niels Bohr"
],
correctAnswer: "Albert Einstein"
      },

      {
        question: "What is the capital city of Japan?",
options: [
"Beijing",
"Seoul",
"Tokyo",
"Bangkok"
],
correctAnswer: "Tokyo"
      },

      {
        question: "What is the chemical symbol for gold?",
options: [
"Ag",
"Fe",
"Au",
"Pb"
],
correctAnswer: "Au"
      },

    
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
options: [
"William Shakespeare",
"Jane Austen",
"Charles Dickens",
"Mark Twain"
],
correctAnswer: "William Shakespeare"
      },

      {
        question: "In which country was the game of chess invented?",
        options: [
        "India",
        "China",
        "Greece",
        "Egypt"
        ],
        correctAnswer: "India"
      },

      {
        question: "What is the largest organ in the human body?",
options: [
"Liver",
"Heart",
"Brain",
"Skin"
],
correctAnswer: "Skin"
      },

      {
        question: "What is the chemical symbol for the element 'carbon'?",
        options: [
        "Co",
        "Ca",
        "C",
        "Cr"
        ],
        correctAnswer: "C"
      },

      {
        question: "Who painted the famous artwork 'Starry Night'?",
options: [
"Vincent van Gogh",
"Pablo Picasso",
"Leonardo da Vinci",
"Claude Monet"
],
correctAnswer: "Vincent van Gogh"
      },

      {
        question: "In Greek mythology, who is the king of the gods?",
options: [
"Zeus",
"Hades",
"Poseidon",
"Apollo"
],
correctAnswer: "Zeus"
      },

      {
        question: "Which city is famous for being home to the Eiffel Tower?",
        options: [
        "London",
        "Rome",
        "Paris",
        "Berlin"
        ],
        correctAnswer: "Paris"
      },

    // Add more questions here
  ];

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (answer: string) => {
    const currentQuestionObj = questions[currentQuestion];
    const isCorrect = answer === currentQuestionObj.correctAnswer;
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: currentQuestionObj.question,
        userAnswer: answer,
        correctAnswer: currentQuestionObj.correctAnswer,
      },
    ]);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizFinished(true);
      // Quiz finished, save the score to local storage
      localStorage.setItem("quizScore", score.toString());
    }
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  if (!quizStarted) {
    return <Welcome onStartQuiz={handleStartQuiz} />;
  } else if (quizFinished) {
    return <Result score={score} userAnswers={userAnswers} />;
  } else {
    return (
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        handleAnswer={handleAnswer}
        showFinishButton={currentQuestion === questions.length - 1}
        onFinishQuiz={handleFinishQuiz}
      />
    );
  }
};

export default Quiz;
