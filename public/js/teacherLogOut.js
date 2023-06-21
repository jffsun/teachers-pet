// Log out of the session as teacher
async function teacherLogOut() {
  try {
    // Send request to backend destroy session
    const response = await fetch('teacher/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log('teacherLogOut.js fail');
      alert(response.statusText);
    }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };