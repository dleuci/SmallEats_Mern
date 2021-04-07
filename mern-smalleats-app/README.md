**************************

CREATE A NEW BRANCH THEN CHECK OUT THE NEW BRANCH BEFORE STARTING WORK!

*************************

DO NOT CODE ON MASTER BRANCH

*************************

Install the GitHub Pull Requests and Issues extension in VSCode
Sign into github on VS Code (above the settings wheel)
Go to the source control option on VS Code (3rd tab on the left list)
Click the hyperlink to install git with all recommended settings
Restart VS Code and go back to source control and select clone repository.
Enter this url https://github.com/McKenna242/SmallEats_Mern into the bar in the top middle of VScode
Download the config.zip file pinned in the discord for term project
Unzip the file and place it in the location -> mern-smalleats-app->backend file 
Now you should have all the files from git downloaded.
Open them in VSCode and then head to chrome
Google or go to nodejs.org and install node.js for your computer
Check automatically install all necessary tools during installation 
Once it’s installed you need to add node js to your path. This article details how to accomplish that:
https://www.c-sharpcorner.com/blogs/npm-is-not-recognized-from-visual-studio
Once node js is added to path open and close vs code and navigate back to the project folder.
Open mern-smalleats-app in the integrated terminal and type the command 
npm install
then
npm install-all
This will take a little but it will install all the required local files to run the website. 
Then install global nodemon
npm i -g nodemon
Once the install is finished type
npm run dev
This should automatically open a web browser to localhost:3000 and you should be able to see the website. 


npm run dev will start the server whenever you need to access it moving forward

*********************

file meaning info

*********************

Rest.model.js in backend in the model the holds the database structure for the backend.
Server.js hosts the server and uses rest.model.js to send the database info back, these have to changed together. 

App.js in the src file is the frontend. It imports other frontend items from the components file where new additions should be stored and then imported into app.js for display. 


