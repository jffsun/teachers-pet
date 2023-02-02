// Function for Logging Out of the session
async function parentLogOut() {

    console.log('Logout button clicked');
    // make a post request to destroy the session on the backend 
      const response = await fetch('parent/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.ok) {
        // if successfully logged out, redirect to the login page
        document.location.replace('/');
      } else {  
        console.log('parentLogOut.js fail')
        alert(response.statusText);
      }
    };
  
    // click .loggingOut element trigger logout()
    // document.querySelector('#parentLogOut').addEventListener('click', parentLogOut());
