import React, { useState } from "react";

const Login = (props) => {
  const {
    profileName,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  const [selected, setSelected] = useState("Faculty");

  return (
    <section className="login">
        <div className="btnContainer">
          {hasAccount ? (
            <>
            {/* Has an account*/}
                <h1>Sign In</h1>
            </>
          ) : (
            <>
                <h1>Sign Up</h1>
            </>
          )}
        </div>
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
            {/* Has an account*/}
              <button onClick={handleLogin}>Sign In</button>

              <select
                defaultValue={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="Test">Student</option>
                <option value="Hello">Faculty</option>
              </select>
          

              <p>
                Don't have a account?
                <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
              </p>
            </>
          ) : (
            <>
            {/* Does have account*/}
            <label> Name</label>
            <input
                type="profileName"
                required
                value={profileName}
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
              <button onClick={handleSignup}>Sign up</button>
              <select
                defaultValue={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                  
                <option value="Test">Student</option>
                <option value="Hello">Faculty</option>
              </select>{" "}
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
              </p>

            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
