import { request } from 'express';
import express from 'express';
import fs from 'fs';

import usersMethods from '../db_methods/users.js';

var router = express.Router();


// SIGNUP STARTS
router.post('/signUp',  async (req, res) => {
    try{
        const result = await usersMethods.signUp(req.body.username, req.body.password)

        // console.log(result)

        res.status(200)
    } catch (err) {
        console.error(err)
        res.status(400)
        res.send({err: err.detail})
    }



// save this var inside json file - there are multiple packages to do this
// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
    // res.send(JSON.stringify(req.body, null, 2));

    // fs.readFile('userDatabase.json', 'utf8', function readFileCallback(err, data){
    // if (err){
    //     console.log(err);
    // } else {
    //     obj = JSON.parse(data); //This converts it to an object
    //     console.log("this is the object that i am reading from the file", obj);
    //     obj.userData.push({ "username": req.body.username, "password":req.body.password});
    //     json = JSON.stringify(obj);
    // //WRITE FILE FUNCTION
    //     fs.writeFile('userDatabase.json', json, 'utf8', function(err) {
    //       if(err) { throw err } else {  accountCreated = true };
    //     });
    //     }
    // });
});
// SIGNUP ENDS

// SIGNIN STARTS
    router.post('/signIn', (req, res) => {

        // console.log("signincall",req.body);
        // res.send(JSON.stringify(req.body.userpass, 2));
        //     res.send(JSON.stringify(req.body, null, 2));
        // READ FILE FUNCTION
            // fs.readFile('userDatabase.json', 'utf8', function readFileCallback(err, data){
            // if (err){
            //     console.log(err);
            // } else {
            //     // the below creates an object that has all the current username and passwords from the userDatabase
            //     const objAllNamesAndPasswords = JSON.parse(data); //This converts it to an object
            //     // how to check the request.body.pass to match off with the login details
            //     console.log("SIGN IN - this is the object that i am reading from the file", objAllNamesAndPasswords);
            //     let userCanLogin = false  
            //     let userId = null              
            //     // I am going to loop through every username and password (strings) and check if there is a match
            //     for (let index = 0; index < objAllNamesAndPasswords.userData.length; index++) {
            //         const element = objAllNamesAndPasswords.userData[index];

            //         // equals equals equals checks if theyre equal AND the matching type, eg number string boolean, etc
            //         if (req.body.username===element.username && req.body.password===element.password) {
            //             userCanLogin = true 
            //             userId = element.
            //             break;
            //         }
            //     }
            //     console.log(userCanLogin);
            //     // Ali helped here, find a way to send this back to the front end - true can login false cannot
            //     if (userCanLogin)  {
            //         res.send(false)
            //     } else {
            //         res.send(userId);
            //     }

            //     // find matching username, if you find it, store it in an object - and password then an if the password matches, do this, else 'password is incorrect' (function)
            // // user another object, if loggedIn = true    
            // }
            // });
        });
// SIGNIN ENDS

// Check on postman if the backend is working with a POST request of http://localhost:3003/user/signUp

export default router