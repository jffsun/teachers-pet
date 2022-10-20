// function to begin LOGIN and credential verification
async function parentLogin(event) {
  // stop the browser from submitting the form so we can do so with javascript
  event.preventDefault();
  // gather data from the form elements on the page
  const email = document.querySelector('#parentEmail').value.trim();
  const password = document.querySelector('#parentPassword').value.trim();

  if (email && password) {
    // send the email and password to the server
    const response = await fetch('/login/parent', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.status === 401) {
      alert("Incorrect email or password.");
      return;
    }

    if (response.ok) {
      document.location.replace('api/parent');
    } else {
      alert(response.statusText);
    }
  }
};

async function teacherLogin(event) {
  // stop the browser from submitting the form so we can do so with javascript
  event.preventDefault();
// gather data from the form elements on the page
  const email = document.querySelector('#teacherEmail').value.trim();
  const password = document.querySelector('#teacherPassword').value.trim();

  if (email && password) {
    // send the email and password to the server
    const response = await fetch('/login/teacher', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('api/teacher');
    } else {
      alert("Incorrect email or password.");;
    }
  }
};

document.querySelector('.parent-signin').addEventListener('submit', parentLogin);
document.querySelector('.teacher-signin').addEventListener('submit', teacherLogin);
