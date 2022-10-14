async function loginFormHandler(event) {
    // stop the browser from submitting the form so we can do so with javascript
      event.preventDefault();
    // gather data from the form elements on the page
      const email = document.querySelector('#email-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();
    
      if (email && password) {
        // send the email and password to the server
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
    };
  
    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);