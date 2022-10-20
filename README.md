# Teacher's Pet

## Description
A classroom helper application that allows teachers to view important information specific to individual students. Important information include allergies, medications, what time parents will pick up their kids. This information is submitted by parents and can be updated at any time through the helper. The class information is stored in a database. This project uses Node.js & Express.js to create RESTful API's, Handlebars.js as the template engine, MYSQL and Sequelize ORM for the database and features GET and POST routes for retrieving and adding in new data. 

## Link to the App
* ['Teachers Pet'](https://github.com/jffsun/teachers-pet)
* ['Teachers Pet Heroku Live]()

<!-- add screenshots here -->

## User Story
As a parent user I will be able to update information about my childs medical conditions and specific needs. As a teacher, I will be able to access my students information and post announcements.

## Installation
`npm init`

`npm install`

Dependencies: 
bootstrap, bcrypt, body parser, connect session sequelize, dotenv, express, express-handlebars, express-session, mysql2, nodemon, sequelize.

## Usage
The user will need to start a server on a local host (Insomnia) to make requests to the database.

Run the following commands at the root of your project and answer the following questions:
`mysql -u root -p`

Enter password when promted

`source db/schema.sql`

`quit`

`npm run seed`
  
`npm start`

## Testing
Testing will be implemented (future development) with 

## Collaborators
[Andrew Choi](https://github.com/WhaleAnchor)
[Jeffrey Sun](https://github.com/jffsun)
[Jeffrey Tran](https://github.com/Jtran028)
[Kevin Ng](https://github.com/KevinNg2)