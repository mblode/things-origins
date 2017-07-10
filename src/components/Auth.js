import React from 'react';
import base from '../base';
import 'firebase/auth';

class Auth extends React.Component {
  constructor (props) {
    super(props);
    
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.renderLogin = this.renderLogin.bind(this);

    this.state = {
      uid: null,
      owner: null,
    }
  }

  authenticate(provider) {
    base.auth().signInWithPopup(provider);
  }

  authHandler(err, authData) {
    console.log(authData);
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Log in to your todo list</h2>
        <button className="google" onClick={() => this.authenticate('google')}>
          Log in with Google
        </button>
        <button className="github" onClick={() => this.authenticate('github')}>
          Log in with Github
        </button>
        <button className="email" onClick={() => this.authenticate('email')}>
          Log in with email and password
        </button>
      </nav>
    );
  }

  render () {
    const logout = <button>Log out</button>;
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    } 

    if (this.state.uid !== this.state.ownder) {
      return (
        <div>
          <p>Sorry you are not the owner of this todo list!</p>
          {logout}
        </div>
      );
    }

    return (
      <div>
        {logout}
      </div>
    );
  }
}

export default Auth;