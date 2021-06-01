# Shell-Shock-Memory-Game
My second project will be based on a memory card game. The theme will be my favourite cartoon group known
as the Teenage Mutant Ninja Turtles. I will be using HTML, CSS and JavaScript to create an interactive game.

# How to play the game
The game consists of 18 cards and they are arranged in a grid randomly.

The rules are very simple. The user/player must flip over two hidden cards at a time to locate them 
to see if they match together. The game ends when all the cards are flipped and matched correctly. 

<a name="demo"></a>

# Demo
Here is the interactive demo [game](https://chikos96.github.io/shell-shock-memory-game/)
<img src='./assets/mockup/memory-game.png'></img> 

## User Experience
    
- UX Design

This game is for users that like to play games. The Memory Game is the most suitable game because the user gets to
find all the cards to match. It is fun and interactive for all users. It will be in a single page format.

### User stories
- As a user, I want to be able to click all the cards.
- As a user, I want to be able to see how much time did i match my cards.
- As a user, I want to play the game again.
- As a user, i want to understand easily about the functionality of the game.

### Design
 - Color Scheme
     -   The main colors I used are green, white and black.
- Typography
      -  I used Cambria font style. 
- Imagery
    -  I found the image on the website to find the characters that everyone likes. 
    These images could attract the user's attention.

## Wireframe
This is the wireframe that i did for desktop, mobile and tablet. It shows my explanation on how i want my game to be displayed.

- [Memory Game Wireframe](https://github.com/chikos96/shell-shock-memory-game/blob/d3e8713f85745b58c31d0d1ec4bc1ce68e399a5b/assets/documentation/memory-game-wireframe.pdf)
## Features

The game will consist of 14 cards with the title above and time below the cards. 
 
### Existing Features
- Cards- it allows the users to click and see what the card reveals. 
- Time- it allows the users to check how much time he/she needs to complete the game.

## Future Feautures
- As a returning user, I want the game to have music.
- As a returning user, I want the game to have a popup.
- As a returning user, i want time to stop when i complete the game.
- As a returning user, I want to play the game again but with buttons.
- As a returning user, I want to be able to get some scores.

## Technologies Used

1. [HTML](https://en.wikipedia.org/wiki/HTML)
2. [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) 
3. [Balsamiq](https://en.wikipedia.org/wiki/Balsamiq)
4. [Git](https://git-scm.com/)
5. [GitHub](https://github.com/)
6. [Javascript](https://en.wikipedia.org/wiki/JavaScript)
7. [JQuery](https://jquery.com/)
8. [Html Validator](https://validator.w3.org/)
9. [CSS Validator](https://jigsaw.w3.org/css-validator/)
10. [JavaScript Validator](https://jshint.com/)

## Testing
The W3C Markup Validator, W3C CSS Validator Services and Jshint were used to validate every page of the project to ensure there were no syntax errors in the project.
- [W3C Markup Validator]()
- [W3C CSS Validator]()
- [jshint]()

### Testing User Stories from User Experience (UX) Section

### As a user, I want to be able to click all the cards.
The user will be introduced with a set of 18 cards where he/she will be
able to click the card that he/she reveals.

### As a user, I want to be able to see how much time did i match my cards.
The time will be displayed for the user and the user will be able to check
how much time he/she has left.

### As a user, I want to play the game again.
The user can play the game again by reloading the browser.

### As a user, i want to understand easily about the functionality of the game.
The user will be able to understand the game and it will help the user to know where
the cards are and if they match or not.

## Further Testing
- I add jquery to better simplify and adjust my codes.
- I want my functions to work correctly without any bugs. I decided to create a condition where each
card has been defined. So l defined them as "firstClick". Therefore i want to make sure that if the cards match,
they wont flip back and if the cards do not match, they flip back.
- I tested the game with Google Chrome, Microsoft Explorer and Mozilla Firefox.
- I tested the game using different devices using my IPad and my IPhone.

### Known Bug
I have encountered so many bugs in my game but i did my best to fix them as much as possible:
- The functions were complicated to solve the problem but i have made some changes for each
function to work.
- I removed the check function because it was not actually checking the cards properly.
- I fixed the matched function to actually check if the cards match.
- I fixed the unmatched function to actually check if the cards do not match.
- I was able to fix time but unfortunately when i finish the game, it continues to go on.
- I used lockBoard to fix the bug for the memory board game. 
- Every time i click the card fast, the card will move and you will have to wait until the
card flips back. 
- I have noticed that the bug was comming from the function endgame because of the setTimeOut that 
i added for the cards. So i made some adjustments and fixed it.

[The screenshots for testing proof](https://github.com/chikos96/shell-shock-memory-game/blob/abdb00ae77a5f728739552e57feef6d605fb8dc3/assets/documentation/Screenshots%20for%20testing%20proof.pdf)
## Deployment

## GitHub Pages
- To deploy my project to GitHub pages, here are the following:
    1. Log in to GitHub.
    2. Go to your right-hand profile and locate "your repositories"
    3. Click to the project (i.e. shell-shock memory game)
    4. Go and click Settings.
    5. Scroll down to GitHub pages.
    6. Click and change "None" to "main" because it will automatically show the root folder.
    7. Click Save.
    8. The page will automatically refresh.
    9. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section. 
    10. Click on the link and it will display the website.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without 
affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://chikos96.github.io/shell-shock-memory-game/
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://chikos96.github.io/shell-shock-memory-game/
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) 
to retrieve pictures for some of the buttons and more detailed explanations of the above process.


## Credits

### Content
- To create the memory game, i watched the tutorial by codeTonight which gave me useful tips
while changing the code to help fit my own needs for the game.(https://www.youtube.com/watch?v=QrTCHHhoUQU&ab_channel=codeTonight)

### Media
- The photos used are from Google images.

### Acknowledgements

- I received inspiration from Nickeledeon. 
- I would like to thank the Tutor Assistance for helping me with technical difficulties.
- I would to thank my friend for assisting me with solving the code problems.
- I would like to thank Aaron for the support.
