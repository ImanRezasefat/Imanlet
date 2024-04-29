import React, { useState } from "react";
import "./login.css";
import Web3 from "web3";
import keys from "../Constants";
import logo from "./assets/logo.png";
import "./index.css";
const Login = ({ setAccount }) => {
  const [privateKeyInput, setPrivateKeyInput] = useState("");
  const web3 = new Web3(keys.node);
  const createAccount = () => {
    const account = web3.eth.accounts.create();
    setAccount(account);
  };

  const retriveAccount = () => {
    const account = web3.eth.accounts.privateKeyToAccount(privateKeyInput);

    setAccount(account);
  };
  return (
    <div className="container">
      <img src={logo} className="logo" />
      <div className="create">
        <button onClick={createAccount}>Create Account</button>
      </div>
      <div className="login">
        <input
          style={{ marginTop: "32px" }}
          value={privateKeyInput}
          placeholder="Inter your private key"
          onChange={(event) => {
            setPrivateKeyInput(event.target.value);
          }}
        />
        <button style={{ marginTop: "16px" }} onClick={retriveAccount}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
