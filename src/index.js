#! /usr/bin/env node

const inquirer = require("inquirer");
const slugify = require("slugify");
const fs = require("fs");

// Load all starters
const expressApi = require("./starters/expressApi");
const eleventy = require("./starters/eleventy");

inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "What would you like to call your new project?",
      default: "My project",
    },
    {
      type: "list",
      name: "starter",
      message: "What starter should we use?",
      choices: ["express-api", "11ty"],
    },
  ])
  .then((answers) => {
    // slugify name
    let projectName = slugify(answers.name, { lower: true });

    if (!projectName || projectName.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
      return console.log(
        `Can't create a project witht that name. Try something else.`
      );
    }

    if (fs.existsSync(`./${projectName}`)) {
      return console.log(`There's already a project called ${projectName}`);
    }

    // Run a switch case to determine which starter script to run
    switch (answers.starter) {
      case "express-api":
        expressApi.execute(projectName);
        break;
      case "11ty":
        eleventy.execute(projectName);
        break;
    }
  })
  .catch((error) => {
    console.log(error);
  });
