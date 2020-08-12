auth.onAuthStateChanged(user => {
  if (user) {
    window.location = 'dashboard.html';
    
  } 
});




  // log the user in
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
          const loginForm = document.querySelector('#login-form');
          loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
        
        // get user info
          const email = loginForm['login-email'].value;
          const password = loginForm['login-password'].value;
          return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

});