# e-commerce-backend

## Description

Transitioning from Mysql and more into Javascript territory again, we were tasked with utilizing the Sequelize NPM package (Along with Express and Dotenv) to build out a responsive back-end database application for an e-commerce retail store. Given some starter code, I built out all applicable database tables, relationships between said tables, API routes, and testing of all route endpoints using Insomnia. I learned a ton about Sequelize syntax, how to build and solidify the relationships between tables using foreign keys, and furthering modularization to be able to pivot successfully into the next major topic, MVC (Model View Controller). 

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

After cloning the repository, you'll need to install dependencies ([mysql2](https://www.npmjs.com/package/mysql2), [dotenv](https://www.npmjs.com/package/dotenv), [Sequelize](https://sequelize.org/) and [Express](https://expressjs.com/) are all mandatory) and have Mysql shell installed to be able to run the initial schema setup. From there, you can "npm run seed" in the terminal to load the mock data and then run "node server.js" to test the applicable routes.

## Usage

Each of the aforementioned routes (To retrieve, update, and delete data from respective tables: category, product, and tag) has been link to localhost so that they can be tested with ease using [Insomnia](https://insomnia.rest/)

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

https://watch.screencastify.com/v/yu5KjgoPHrsqBDIjoLnS