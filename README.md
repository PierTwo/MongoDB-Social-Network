# MongoDB Social Network

## Description

This project is a social network API built using a MongoDB database with the ability to create users, add friends, delete users, create posts called "thoughts" and react to them with comments called "reactions" as well as delete those posts and comments. View the following link to watch a demo video of the app working. [Demo Video](https://drive.google.com/file/d/1AgH2fw4gnSin2UAYFw-k_py7k6IwiuLt/view?usp=sharing)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

You will need [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed on your machine in order to run this application. After installing Node.js and MongoDB, or if you already had them installed, you will need to clone the repository from GitHub which you can find here: [MongoDB-Social-Network](https://github.com/PierTwo/MongoDB-Social-Network). After having cloned the repository to your machine navigate to main directory of the repository from your command line and run `npm i` to install all the node modules required for the app. Remove the `.EXAMPLE` from the `.env` file and choose a name for the db to replace the `<Your DB Name Here>` with. You will also need an API platform to test out the app such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/)

## Usage

Navigate to the main directory of the project through the command line and run `npm start` in order to start the server. Once the server is running use a API testing platform as discussed in the Installation section to test the following routes in order to use the project API. Use `http://localhost:3001/api/users` to make a get request to find all users or a post request to create a user with a `username` and `email` in the body of the request. With `http://localhost:3001/api/users/:userId` you can find a specific user, update their user info with a put request, and a delete request to delete a user, all using the `_id` of the user you are making the request to. To add a friend or delete a friend you can make a post or delete request respectively to `http://localhost:3001/api/users/:userId/friends/:friendId` using the `_id` of both users. `http://localhost:3001/api/thoughts` can be used to make a get request for all thoughts or post to create a thought using the body to have a `thoughtText`, `username`, and `userId`. By doing a get request with the `_id` of the thought you can get a single thought or with a put request to update that thought, and a delete request to delete it. Use a post request at `http://localhost:3001/api/thoughts/:thoughtId/reactions` to add a reaction to a thought and a delete request at `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId` to delete a reaction.

## Credits

#### Third-Party Assets

- MongoDB
- Node.js
- Express.js
- Mongoose
- Dotenv
- Nodemon

## License

This project is not licensed.

## Questions

You can find me here:

- GitHub: [PierTwo](https://github.com/PierTwo)
- Email: <latasnoah@gmail.com>
