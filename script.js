// Whole flow of the Application
/*
A. when user signup for the FIRST TIME
    1. Do name, password, email, confirm password authentication 
    2. If there is any problem with authentication error should display
    3. if authentication is passed and user clicks on sign up button an success message should display and After that
        a. state, accessToken and userdeatilsObject should be created in local storage
        b. User should be redirected to profile page
        c. all the data should be visible
        d. when user clicks on signup button or profile button in nav bar an alert should display stating respective message
    4. If user clicks on logOut button on profile page
        a. state, accessToken and userdeatilsObject should be deleted from local storage
        b. user should be redirected to signup page

B. When user leaves the page(close the tab/browser) without logging out
        a. User should be redirected to profile page directly without showing the signup page
        b. after refreshing page also profile page should display with all the data
        c. when user clicks on signup button or profile button in nav bar an alert should display stating respective message
C. When user clicks on signup button or profile button in nav bar
        a. If user is signing up(when present on sign up page)
            1. SignUp button:-> Nothing should happen
            2. Profile Button:-> an alert should display stating "Please sign up first"
        b. If user is signed up already(present on profile page)
            1. SignUp button:-> an alert should display stating "You are already signed up!!"
            2. Profile Button:->  Nothing should happen  
*/

//------------------------------------------------------------------------------------------------

// store the hyperlink for signup and profile page
const signUpPageEl = document.getElementById('signup');
const profilePageEl = document.getElementById('profile');

// Storing all form input elements
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const cnfPasswordEl = document.getElementById('confirmpassword');
const successEl = document.getElementById('success');
const errorEl = document.getElementById('error');
const passwordMismatchedEl = document.getElementById('passwordMismatched');
const invalidemailEl = document.getElementById('invalidEmail');
const submitBtn = document.getElementById('btn');

//------------------------------------------------------------------------------------------------

//initializing an empty array
const inputDetailsArray = [];
let userObj = {};
let usersArray = [];  // this array will store the userObj and this array then will be stored in local storage in the form of string
//------------------------------------------------------------------------------------------------

//If local storage contails accessToken (user leaves browser without logging out) user should redirect to profile page directly
if (window.localStorage.getItem('accessToken')) {
  window.location.href = 'profile.html';
}

//------------------------------------------------------------------------------------------------

// Event listener & functions

// 01. Submit button function
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitDetails();
})

function submitDetails() {
  // reinitialising this array will help if there is any error occurred while authentication
  inputDetailsArray.length = 0;
  const name = nameEl.value.trim();
  inputDetailsArray.push(name);
  const email = emailEl.value.trim();
  inputDetailsArray.push(email);
  const password = passwordEl.value.trim();
  inputDetailsArray.push(password);
  const cnfPassword = cnfPasswordEl.value.trim();
  inputDetailsArray.push(cnfPassword);

  console.log(inputDetailsArray);

  // checking whether all input fields are filled or not
  if (inputDetailsArray.includes('')) {
    console.log('error block');
    errorEl.classList.remove('hidden');
    successEl.classList.add('hidden');
  } else {
    if (password !== cnfPassword) {
      passwordMismatchedEl.classList.remove('hidden');
    } else if (!(email.split('').includes('@'))) {  // i.e. if email does not contain @ --> display error message
      invalidemailEl.classList.remove('hidden');
    } else {
      successEl.classList.remove('hidden');
      errorEl.classList.add('hidden');
      passwordMismatchedEl.classList.add('hidden');
      invalidemailEl.classList.add('hidden');
      setLocalStorageRedirectToProfile(name, email, password);  // function no 5
    }
  }
}

//------------------
// 02. Set user in local storage function
function setItemInLocalStorage(usersArray, accessToken) {
  window.localStorage.setItem('users', JSON.stringify(usersArray));  // store users data in local storage with key as 'users' and value as userArray in string form
  // set the state of the user >> '1' = yes user signed up and logged in, '0' = user logged out from previous session so cant show the profile page
  window.localStorage.setItem('state', '1');
  // set the accessToken for this user
  window.localStorage.setItem('accessToken', accessToken);
}

//------------------
// 03. Sign up page button(in navbar) event listener
signUpPageEl.addEventListener('click', () => {
  // nothing should happen
  alert('You are present on sign up page');
})

//------------------
// 04. Profile page button(in navbar) event listener
profilePageEl.addEventListener('click', () => {
  alert('Please sign up first');
})

//------------------
// 05. set element in local storage and redirect user to profile page function
function setLocalStorageRedirectToProfile(name, email, password) {
  // inputDetailsArray is an array
  let accessToken = `${Math.random().toString(26).slice(2)}${Math.random().toString(26).slice(2, 6)}`; // 16 char token
  // fill the user obj
  userObj.name = name;
  userObj.email = email;
  userObj.password = password;
  // console.log(name, email, password, cnfPassword);
  usersArray.push(userObj);
  // set userdetails in local storage
  setItemInLocalStorage(usersArray, accessToken)  // function no 02
  // set input deatails array as empty
  // redirect user to the profile page
  window.location.href = 'profile.html';
}

