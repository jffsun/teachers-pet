// Logs parent out of session
async function parentLogOut() {
  try {
    // Send request to backend destroy session
    const response = await fetch('parent/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log('parentLogOut.js fail');
      alert(response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
