# F3-contest-29-04-2023
Authentication app with signup and profile pages. Uses local storage for user state and access token. Provides access control and success/error messages. Built with HTML/CSS/JS and deployed on GitHub Pages.





Project Overview
Task
1. Handle authentication using local storage.
2. Create a UI as shown in Figma, and make 2 pages - signup and profile.
3. On clicking signup, use local storage to create the state of the user - it should contain all the details taken in signup.
4. The state of the user saved in localstorage should contain all the properties of the user, plus should also consist of an access token - let this access token be a random 16-byte string generated by you randomly.
5. Once there is a state of the user in the local storage, redirect the user to a page called /profile. Display the user’s details there.
6. On clicking the logout button, set the local storage back to null and also get rid of the access token.
7. Using scripts ensure that when a user manually tries to go to /profile, if the local storage does not contain the accesstoken the user is redirected to the signup page
8. Similarly if the localstorage has an accesstoken and tries to go to the signup page, using scripts ensures that the user can't do so and is redirected to the profile page.
9. Show success and errors as well as shown in the UI. All fields are mandatory for signup and similarly on successfully signing up show the message in green text and then redirect to /profile.



Relevant Links
Figma Link- https://www.figma.com/file/GWUrnugwWlzzxjMJewgoR8/Contest?node-id=0%3A1&t=9DWJ1y9QOUIhl2OD-1

Marking Scheme (100 Marks)
Authentication using Local Storage (10 marks)
UI Creation and Pages (15 marks)
Signup Functionality (30 marks)
Logout Functionality (10 marks)
Access Control (20 marks)
Error Handling (10 marks)
Deployment(5 Marks)
