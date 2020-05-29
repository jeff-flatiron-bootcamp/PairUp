# PairUp Memory Game

## Installation
This game is hosted in two GitHub repositories, one for the front end and one for the back end: https://github.com/bumpouce/PairUp and https://github.com/jeff-flatiron-bootcamp/Mod4-Project-Backend, respectively.

When you fork and clone down the back end, make sure you’re in the “db” directory, then run “rails db:create”, “rails db:migrate” and “rails db:seed”.  The seed data has important setup information for storing game statistics and creating the leaderboards.  Once all of this is prepared, you can run “rails s” or “rails start”, which should start the back end running on port 3000 of your localhost.                                        

When you fork and clone down the front end, make sure you’re in the front end directory, then run “npm install” and “npm start”.

Please start the rails server before you start the npm server, and since the npm server will probably want to start on port 3000 also, it may prompt you to let it choose another port.  If you find problems with the application starting, and it did not prompt you to use another port, you may need to specify it explicitly by using “PORT=3001 npm start” (or another port of your choosing).


### Usage

See a video runthrough of the game at https://www.youtube.com/watch?v=ESqVLdMqoPE

Create a login and password

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpLogin.jpg" height="300px">

Log in securely with that login and password, and you will see your game statistics accumulate.  View your best scores in each difficulty category (based on time), as well as some information about your average scores in each category and number of games played in each category.

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpHome.jpg" height="300px">

Choose different tile sets to play with (colors, shapes, and emoties), different board sizes (8, 16, 20), and play with sounds or no sounds.

Menu

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpGameMenu.jpg" height="300px">

Game

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpGame.jpg" height="300px">

End Game - Timeout

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpTimeout.jpg" height="300px">

End Game - Win

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpWin.jpg" height="300px">

View leaderboards with high scores in each category and see where each user is from.

<img src="https://github.com/bumpouce/PairUp/blob/master/ReadMeImages/PairUpLeaderBoards.jpg" height="300px">

Read a brief note about the project.
Logout and secure your statistics! 


### Technologies

This project uses Ruby and Rails with a postgres database on the back end, and JavaScript, React, CSS and HTML on the front end with JWT for authentication.
                       

## Future Functionality Goals
                          
We’d love to add further functionality regarding game times and improvements.  We also hope to deploy the game on heroku!


## Authors
Sara Khandaker, 
Jeff Simon, 
Christine Bumpous


## License

This project is licensed under the GNU General Public License.

                          
## Acknowledgments                                      

This game was created during Flatiron School’s Software Engineering bootcamp for Mod4.  We’d like to thank our instructors Ix, Soundarya and John for getting us to where we are in our coding journey, as well as our technical coaches, Hal and Matt.

## Major Resources:
Flag icons from https://www.flaticon.com/authors/freepik, 
Using Chart.js in React https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
