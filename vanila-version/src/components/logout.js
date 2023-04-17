import '../styles/logout.css'
import logout from '/logout.svg'

const logoutElement = (element, auth) => {
  const setupSignOut = (element) => {
    element.addEventListener('click', () => {
      console.log("logout clicked");
      auth.signOut().then(() => {
        // Sign-out successful.
        console.log("signout successful");
        //window.location.reload();
      }).catch((error) => {
        // An error happened.
        console.log("signout error=", error);
      });
    });
  }

  element.innerHTML = `
    <div class="logout">
      <button id="logout_btn" type="button">
        <img src="${logout}" alt="Logout logo" />
        <span>Logout</span>
      </button>
    </div>
  `;
  setupSignOut(element.querySelector('#logout_btn'));
}

export default logoutElement;