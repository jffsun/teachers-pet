// Function for Logging Out of the session

async function logout() {

    console.log('Logout button clicked');
    // make a post request to destroy the session on the backend 
      const response = await fetch('/api/parent', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.ok) {
        // if successfully logged out, redirect to the login page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    };
    
    document.querySelector('.loggingOut').addEventListener('click', logout);