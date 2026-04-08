/** @type {{question: string, options: string[], correctAnswer: string}[]} */
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "Do you like JS?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Systems", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What year was JavaScript created?",
        options: ["1990", "1995", "2000", "2005"],
        correctAnswer: "1995"
    },
    {
        question: "Is HTML a programming language?",
        options: ["Yes", "No"],
        correctAnswer: "No"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "Both // and /* */"],
        correctAnswer: "Both // and /* */"
    }
];

// Video shows emojis, spec says use Font Awesome
// stored as emojis here, mapped to FA icons
/** @type {{value: string, description: string}[]} */
const assets = [
    {
        value: "💎",
        description: "You are getting an extra Star"
    },
    {
        value: "🐻",
        description: "The scary bear takes away your one star."
    },
    {
        value: "❌",
        description: "Game OVER!!!"
    }
];
