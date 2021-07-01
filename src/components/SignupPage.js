import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h1> Want to create an account and sign up?</h1>
            <form>
        <label>
          Choose a username: &nbsp;
          <input type="text" name="username" />
        </label>
        <label>
          Choose a password&nbsp;
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
}

export default LoginPage;
