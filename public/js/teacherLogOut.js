// Log out of the session as teacher
async function teacherLogout() {

  console.log('Logout button clicked');
  // make a post request to destroy the session on the backend 
    const response = await fetch('api/teacher/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      // if successfully logged out, redirect to the login page
      document.location.replace('/');
    } else {  
      console.log('teacherLogOut.js fail')
      alert(response.statusText);
    }
  };

  document.querySelector('#teacherLogOut').addEventListener('click', teacherLogOut());