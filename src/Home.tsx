import React, { useEffect, useState } from "react";
import Web3 from "web3";

import "./home.css";
import { truncateAddress } from "./helpers";
import { Account } from "./App";
import KEYS from "../Constants";
const Home = ({ account }: { account: Account }) => {
  const [balance, setBalance] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const web3 = new Web3(KEYS.node);
  const setBalanceFunction = async () => {
    setBalance((await web3.eth.getBalance(account.address)).toString());
  };
  useEffect(() => {
    setBalanceFunction();
  }, []);

  const sendEth = async () => {
    const gasPrice = await web3.eth.getGasPrice();
    const tx = {
      from: account.address,
      to: toAddress,
      value: web3.utils.toWei(amount, "ether"),
      gas: 21000,
      gasPrice,
    };
    web3.eth.accounts
      .signTransaction(tx, account.privateKey)
      .then((signedTx) => {
        web3.eth
          .sendSignedTransaction(signedTx.rawTransaction)
          .on("receipt", (receipt) => {
            setBalanceFunction();
            alert(receipt.transactionHash);
          })
          .on("error", (err) => {
            alert("Transaction error:");
          });
      });
  };
  return (
    <div className="home">
      <div className="section">
        <div className="balance">
          Your balance is: <span>{web3.utils.fromWei(balance, "ether")}</span>
        </div>
        <div className="address">
          Your address is: <span>{truncateAddress(account.address)}</span>
        </div>
      </div>

      <div className="section">
        <input
          type="number"
          className="input-field"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Address"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <button className="send-button" onClick={sendEth}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Home;
