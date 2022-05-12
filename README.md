# Capstone-Project READ ME

##App title
good-fi

##Description
This is a student project, full stack using JS, PSQL, CSS, and a tiny bit of HTML

Theoretically, good-fi is the beginnings of a platform for sustainable finance share/stock trading/investment. In practice, it is a basic, experimental student 'Capstone Project' completed during the Software Engineering Program at the Institute of Data (Australia) in 2022. Code-base is javascript. More specifically, this is an Express Node JS web application. This framework helps manage servers and routes.

##Project requirements

(1) Client-server architecture
(2) A database for CRUD operations
(3) Displaying data and updating it
(4) A user interface to submit new data
(5) Unit Tesing


##Installation instructions
Clone this repo git clone https://github.com/leahmichelle3000/Capstone-Project.git

In your terminal:
navigate to backend with `cd backend`, enter the following command to to install all needed packages:
```
npm install
```
navigate to frontend with `cd frontend`, enter the following command to to install all needed packages:
 
```
npm install
```

##Operating instructions

Important: You will need to add the PSQL connection string to `/backend/config.json` before spinning up the backend. You can create a server here and receive your connection string: https://www.postgresql.org/

In your terminal, navigate to backend with `cd backend`, enter the command as follows to start the application backend
```
npm start
```

Navigate to backend with `cd frontend`, enter the command as follows to start the application frontend
```
npm start
```

Helpful general terminal commands
`cd ..` to go back one folder
`ls` to get a list of contents of the directory that you are currently in

Carefully, you can use the following command while you are establishing your project, to refresh your user, stocks and favourites tables
```
npm run schema
```

##Testing
I have used Supertest and Jest for the testing the API. Jest is a javascript test runner for running automated tests, and supertest provides a high-level abstraction for testing HTTP.

In your terminal, navigate to backend with `cd backend`, enter the command as follows to test the application.
```
npm run test
```
Test 1 - Tests successful signIn in as gwenbaker, which is an existing dummy user.
Test 2 - Tests that the first stock code returned is '360', which shows that the stock data is successfully feeding through.

You can update the tests as you wish for your project.

##Copyright and licensing information
This is a student project and should not be used for commercial means


##Known bugs
None at present time


##Changelog
No changes at this stage (usually aimed at fellow programmers)


##News
None at this stage (usually aimed at end users)


##Acknowledgements
Institute of Data, Australia for teaching me all that I know
Free logo from Pinterest, https://www.pinterest.com.au/pin/graphic-design--551550285620403038/


##API Reference
N/A there are no third part APIs currently being used on the projcet, although, next development would be to use something like Yahoo Finance to feed through live data.


##Appendix
Any additional information goes here
```

##Authors
@leahmichelle3000

Please adhere to this project's code of conduct.

