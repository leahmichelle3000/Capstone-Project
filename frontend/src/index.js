import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import StockTable from './component/stockTable'
import './index.css';
// import logo from 'adobe_logo.jpg'

// import router from '../../../BACKEND/routes/userRoute';

const AuthenticatedApp = (props) => {

  // it would be here that I would put the function with the fetched data from my stockRoute using the API in my server
  // should display it as a table in dashboard

  return (
    <StockTable userId={props.userId} />
  )
}



const SignUpForm = () => { 
    const [formState, setFormState] = useState({signUpUsername: ' ', signUpPassword: ' '});
    const [loggedIn, setLoggedIn] = useState(false)
    const [userId, setUserId] = useState()
    // const userSignUpFunction = (event) => {
    //   const target = event.target;
    //   event.preventDefault();
    //   const value = target.type === "checkbox" ? target.checked : target.value;
    //   setFormState((pre) => ({ ...pre, [target.name]: value }));
    // }
    
    
    function handleSignin(event) {
      event.preventDefault()
          // console.log(JSON.stringify({username: document.getElementById('username').value, password: document.getElementById('password').value}))
          fetch('http://localhost:3003/user/signIn', { 
            method: 'POST',
            headers: {
            'Access-Control-Allow-Origin' : '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: document.getElementById('username1111').value, 
              password: document.getElementById('password1111').value
            })
          }).then((response)=>{         
            console.log(response)
            // decode the response
            response.json().then(body => {
              console.log(body)
              // Below I am setting the state of loggedIn to match the response (e.g true or false)
              setLoggedIn(body)
              setUserId(body.user_id)
              if (!body) {
                alert("incorrect username or password")
              }
            })
          });
    }

  return (
      <div>
        <h1>EquiTrade</h1>
{/* <image src= "adobe_logo.jpg"></image> */}
        {!loggedIn && (
          <div>
            {/* <p>{JSON.stringify(formState)}</p> */}
            <form>
            <label> Username: <input id='username1111' name="username1" type="text" value={formState.username1} 
            // onChange={userSignUpFunction} 
            />
            <br></br>
            </label>
            <label> Password: <input id='password1111' name="password1" type="password" value={formState.password1} 
            // onChange={userSignUpFunction} 
            />
            </label>
            {/* SIGN UP AND SIGN IN BUTTONS */}
            <br></br>
            <button id="signUpButton" onClick={(e)=>handleSignup(e)}>Sign Up</button>
            <button id="signInButton" onClick={(e)=>handleSignin(e)}>Sign In</button> 
            </form>
          </div>
        )}

        {loggedIn && (<AuthenticatedApp userId={userId} />)}
      </div>
  );
}

    async function handleSignup (event) {
      // fetch is done here and data is sent via body key and is now ready to be consumed in the userRoute.js. Next task is to go to userRoute and save the data sent from here to JSON file.
      event.preventDefault()
      // console.log(JSON.stringify({username: document.getElementById('username1111').value, password: document.getElementById('password1111').value}))
      const response = await fetch('http://localhost:3003/user/signUp', { 
        method: 'POST',
        headers: {
        'Access-Control-Allow-Origin' : '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: document.getElementById('username1111').value,
          password: document.getElementById('password1111').value
        })
      })

      console.log(response)
      response.json().then(body => {
        console.log(body)
        if (body.err) {
          alert(body.err)
        } else {
          alert("sign up successful")
        }
          // Below I am setting the state of loggedIn to match the response (e.g true or false)
          // setLoggedIn(body)
          // if (!body) {
          //   alert("incorrect username or password")
          // }
      })
    }

ReactDOM.render( 
  <SignUpForm />,
  document.getElementById('root')
);

//HINT --- AFTER LOGIN IS SUCCESSFUL, USE THE CODE ON MODULE 7, SLIDE 41 TO NAVIGATE -
// let user = await login(event.target);
// this.setState({ user });

// {user && (
//   <Navigate to="/dashboard" replace={true} />
//   )}


/// found this at https://stackoverflow.com/questions/34645249/javascript-simple-login-from-an-array
// var usernames = [
//   'Script47',
//   'SomeUsernname'
// ];

// var passwords = [
//   'somePassword',
//   'password'
// ];

// var username = 'Script47';

// var password = 'somePassword'

// for (var i = 0; i < usernames.length; i++) {
//   if (username == usernames[i] && password == passwords[i]) {
//     console.log('Successful!');
//     break;
//   } else {
//     console.log('Failed!')
//   }
// }



///Some earlier SIGN IN CODE:
// const SignInForm = () => {
//   const [formState, setFormState] = React.useState({signInUsername: ' ', signInPassword: ' '});
//   const userSignInFunction = (event) => {
//     const target = event.target;
//     setFormState((pre) => ({ ...pre, [target.name]: value }));
//   }

// return (
//     <div><p>{JSON.stringify(formState)}</p>
//       <form>
//       <label> Username: <input id='username1111' name="username1" type="text" value={formState.username1} onChange={userSignInFunction} />
//       </label>
//       <label> Password: <input id='password1111' name="password1" type="password" value={formState.password1} onChange={userSignInFunction} />
//       </label>
//       <button id="signInButton" onClick={(e)=>handleSignin(e)}>Sign In</button> 
//       </form>
//     </div>
// );
// }

//   function handleSignin (event) {
//     // fetch is done here and data is sent via body key and is now ready to be consumed in the userRoute.js. Next task is to go to userRoute and save the data sent from here to JSON file.
//     event.preventDefault()
//     console.log(JSON.stringify({username: document.getElementById('username1111').value, password: document.getElementById('password1111').value}))
//     fetch('http://localhost:3003/user/signIn', { 
//     //changed this to a GET method for the signIn
//     method: 'GET',
//     headers: {
//     'Access-Control-Allow-Origin' : '*',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({username: document.getElementById('username1111').value, password: document.getElementById('password1111').value})
//     }).then((responseFromServer)=>{console.log(responseFromServer)});