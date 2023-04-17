import '../styles/login.css'
import viteLogo from '/vite.svg'
import google from '/google.svg'

const loginPage = (element, auth) => {

    const setupGoogleAuth = (element) => {
        element.addEventListener('click', () => {
          console.log("login clicked");
          // signInWithGoogle();
          auth.signInWithGoogle().then((result) => {
            console.log(  "result=", result);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            // ...
          }
          );
        })
      }
    
      // User is signed out
      // ...
      element.innerHTML = `
        <div>
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
          <h1>Wellcome to Charger!</h1>
          <h2>You must be logged in to use this app.</h2>
          <div class="card">
            <button id="login" type="button">
                <img src="${google}" class="login" alt="Google logo" />
                Login with Google
            </button>
          </div>
        </div>
      `;
      setupGoogleAuth(document.querySelector('#login'));

}

export default loginPage;