// store the hyperlink for signup and profile page
const signUpPageEl = document.getElementById('signup');
const profilePageEl = document.getElementById('profile');

// store the profile details elements
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const userDetails = document.getElementById('user_deatails');
//------------------------------------------------------------------------------------------------

// VIMP>>>> if user is not logged out means accessToken is present in local storage, so display the user details. But if user is logged out then accessToken is not present and in this case the user is redirected to the signup page. Here logged out means user details are also removed from local storage

let currUser = JSON.parse(window.localStorage.getItem('users'))[0];  // here we get the user details in object format
displaydetails(currUser);
userDetails.classList.remove('hidden');

//------------------------------------------------------------------------------------------------

// Event listeners & functions
// 01. logged out function
function logOut() {
  // logged out means deleting the data of the last signed up user
  window.localStorage.removeItem('users');
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('state');
  userDetails.classList.add('hidden');
  // redirect to signup page
  window.location.href = 'index.html';
}

// 02. display user details
function displaydetails(currUser) {
  // currUser is an object containing all details of the last logged in/ signed up user
  nameEl.textContent = currUser.name.toUpperCase();
  emailEl.textContent = currUser.email;
  passwordEl.textContent = currUser.password;
}

// 03. Sign up page button(in navbar) event listener
signUpPageEl.addEventListener('click', () => {
  alert('You are already signed up!!');
})

// 04. Profile page button(in navbar) event listener
profilePageEl.addEventListener('click', () => {
  // nothing should happen
  alert('You are present on profile page');
})