// TODO: Include packages needed for this application
const fs = require("fs");
const express = require('express');
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const { response } = require("express");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Describe your project:",
    },
    {
        type: "input",
        name: "Installation",
        message: "Explain how to install your application:",
        
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email?",

    },
    {
        type: "input",
        name: "GitHub",
        message: "Send your GitHub profile link:",
       
    },
    {
        type: "checkbox",
        name: "License",
        message: "Please select a license appicable to this project",
        choices: ["MIT", "INVGATE ASSETS", "Apache 2.0", "None"],
    },
    {
        type: "input",
        name: "Require",
        message: "List of any dependancies used",

    },
    {
        type: "input",
        name: "Test",
        message: "Provide a walkthrough of the test",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating Professional Read.me Generator");
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();