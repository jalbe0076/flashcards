 # Flashcards

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
In this project, a program was written to simulate a set of flash cards through the command line. The user is prompted with a question relating to JavaScript along with a list of possible answers. The user takes guess, is informed if the response is correct or incorrect, and sees their final score at the end of the round. The program helps students study and reinforce their knowlege of JavaScript by testing their knowlege in the form of questions. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. fork this repository https://github.com/jalbe0076/flashcards
2. Clone down your new, forked repo using the generated SSH link in the terminal
3. cd into the repository
4. Run `node index.js` in your terminal to play Flashcards, follow terminal instructions
5. Hit `control c` to abort

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![App Preview Flashcards](./assets/flashcard-preview.gif)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
The project was assigned on 2023.05.08 in the first week of Turing's Module 2. All required features were completed by 2023.05.11, and the project works and responds as intended. The project took around 10 hours to complete.  

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
[Jason Alberto](https://github.com/jalbe0076) worked on this application. 

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The project's learning goals were to gain `TDD` (Test Driven Development / Design) experience by writing tests using the Mocha framework and Chai as the assertion library.

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Win#1: Having a better understanding of how to implement `TDD`.
Win#2: Researched and implemented Mocha’s `beforeEach` hook to DRY up code.
A challenge was learning how to have `beforeEach`scoped inside the describe block. This was overcome by researching and reading on the net.
Another challenge was debugging imports, this was overcome by analyzing the error prompt to understand what file/files were triggering the error message.