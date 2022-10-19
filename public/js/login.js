async function parentLogin(event) {
  // stop the browser from submitting the form so we can do so with javascript
  event.preventDefault();
  // gather data from the form elements on the page
  const email = document.querySelector('#parentEmail').value.trim();
  const password = document.querySelector('#parentPassword').value.trim();
​
  if (email && password) {
    // send the email and password to the server
    const response = await fetch('/', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
​
    if (response.ok) {
      document.location.replace('/student-info');
    } else {
      alert(response.statusText);
    }
  }
};
​
async function teacherLogin(event) {
  // stop the browser from submitting the form so we can do so with javascript
  event.preventDefault();
// gather data from the form elements on the page
  const email = document.querySelector('#teacherEmail').value.trim();
  const password = document.querySelector('#teacherPassword').value.trim();
​
  if (email && password) {
    // send the email and password to the server
    const response = await fetch('/', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
​
    if (response.ok) {
      document.location.replace('/teacher-route');
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('parentLogin').addEventListener('submit', parentLogin);
document.querySelector('teacherLogin').addEventListener('submit', teacherLogin);