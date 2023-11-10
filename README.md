# LMBE Stats App
This React app is a web app for a Basketball League in Monterrey, Nuevo León.
The main purpose of this app is to display the statistics of the players of each team and the standings of the current season. Nevertheless the web also serves as a regular web for a company, where you can find information about the company, what they do and how to contact them.

## How its made?
The web app frontend is made up by React.js, using libraries such as React Router Dom and Ant Design for components such as Headers, Buttons, Layouts, Siders, Tables etc... 
Used CSS to make media queries so that the app is responsive and can be used on mobile and laptop. 

The backend is made with Flask, creating all the routes that are necessary for the optimal performance of the app. 
The Flask server processes the data retrieved from a Google Sheets that is accessed by using a Google Sheets API that Google Cloud provides. When retrieved the information from the DataBase (Google Sheets of LMBE), the information is formated in a .json file and is sent to the frontend. 

## Where is hosted?
The web app is hosted in Google Cloud by using App Engine. You can find the app in the following URL:
https://lmbe-stats-front.uc.r.appspot.com
