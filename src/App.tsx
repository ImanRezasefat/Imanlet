import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Web3 from "web3";
import keys from "../Constants";
import Home from "./Home";

export interface Account {
  address: string;
  privateKey: string;
  signTransaction: Function;
  sign: Function;
  encrypt: Function;
}
function App() {
  const [account, setAccount] = useState<Account | null>(null); //0xsssss
  if (account) {
  }
  return (
    <div className="App">
      {account ? (
        <Home account={account} />
      ) : (
        <Login setAccount={(_account) => setAccount(_account)} />
      )}
    </div>
  );
}

export default App;
