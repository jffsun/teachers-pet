// async function logout() {
//     // make a post request to destroy the session on the backend 
//       const response = await fetch('/api/users/logout', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' }
//       });
    
//       if (response.ok) {
//         // if successfully logged out, redirect to the login page
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     };
    
//     document.querySelector('#logout').addEventListener('click', logout);