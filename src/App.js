import { useEffect, useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Web3 from "web3";

import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CreateToken from "./components/CreateToken";
import CreatePreSale from "./components/CreatePreSale";
import ViewAllPools from "./components/ViewAllPools";
import CreateFairLaunch from "./components/CreateFairlaunch";
import CreateTokenLock from "./components/CreateTokenLock";

function App() {
  const [appState, setAppState] = useState({
    isWeb3: false,
    account: "0x000",
    web3: null,
  });

  const ConnectWallet = () => {
    console.log("Connect Wallet", window.ethereum);
    if (window.ethereum) {
      appState.isWeb3 = true;
      const ethereum = window.ethereum;
      let web3 = new Web3(ethereum);
      ethereum.enable().then((accounts) => {
        let account = accounts[0];
        web3.eth.defaultAccount = account;
        console.log("Dets", account, appState, ethereum.chainId);
        setAppState((prevState) => {
          return {
            ...prevState,
            isWeb3: true,
            account: accounts[0],
            web3: web3,
            chainId: ethereum.chainId,
          };
        });
        switchNetworkMumbai(web3, ethereum);
      });
    }
  };

  const switchNetworkMumbai = async (web3, ethereum) => {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13881",
                chainName: "Polygon Mumbai Testnet",
                rpcUrls: ["https://rpc-mainnet.maticvigil.com"],
              },
            ],
          });
        } catch (addError) {
          console.error("Error while adding new chain to MetaMask");
        }
      }
      // handle other "switch" errors
    }
    setAppState((prevState) => {
      return {
        ...prevState,
        chainId: ethereum.chainId,
      };
    });
  };

  return (
    <div className="flex flex-row">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/createtoken"
          element={
            <CreateToken
              appState={appState}
              setAppState={appState}
              ConnectWallet={ConnectWallet}
            />
          }
        />
        <Route path="/createpresale" element={<CreatePreSale />} />
        <Route path="/viewallpools" element={<ViewAllPools />} />
        <Route path="/createfairlaunch" element={<CreateFairLaunch />} />
        <Route path="/createtokenlock" element={<CreateTokenLock />} />
      </Routes>
    </div>
  );
}

export default App;
