import React, { useState, useEffect } from "react";
import Web3 from "web3";

import createTokenABI from "../ABI/CreateTokenABI";
import createTokenBC from "../ABI/CreateTokenBC";

function CreateToken(props) {
  const [componentState, setComponentState] = useState({
    tokenName: "",
    tokenSymbol: "",
    tokenSupply: 0,
    tokenDecimals: 0,
    alertHeader: null,
    alertMessage: null,
    alertStatus: false,
    alertArray: [],
    tokenCreated: false,
    newTokenAddress: null,
  });

  const onInputChange = (field, e) => {
    let value;
    if (field === "tokenSupply" || field === "tokenDecimals") {
      value = parseInt(e.target.value);
    } else {
      value = e.target.value;
    }

    console.log("Input Received", field, value, componentState);

    setComponentState((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const validateForm = () => {
    if (props.appState.isWeb3 === false) {
      createAlert("Wallet", "Connect your Wallet to Proceed", "warning");
    } else {
      if (
        componentState.tokenName.length === 0 ||
        componentState.tokenSymbol.length === 0
      ) {
        createAlert("Error", "Please fill all the fields", "error");
        console.log("componentState", componentState);
      } else {
        if (componentState.tokenSymbol.length >= 5) {
          createAlert(
            "Error",
            "Token Symbol should not be more than 5 Characters in length",
            "error"
          );
        } else {
          if (parseInt(componentState.tokenDecimals) > 18) {
            createAlert(
              "Token Decimals",
              "Token decimals should not be greater than 18",
              "error"
            );
          } else {
            if (isNaN(parseInt(componentState.tokenDecimals))) {
              createAlert(
                "Token Decimals",
                "Token Decimals must be more than 0",
                "error"
              );
            } else {
              if (
                isNaN(componentState.tokenSupply) ||
                componentState.tokenSupply === 0
              ) {
                createAlert(
                  "Token Supply",
                  "Token Supply must be greater than 0",
                  "error"
                );
              } else {
                return true;
              }
            }
          }
        }
      }
    }
  };

  const createToken = async () => {
    console.log("componentState", componentState);
    let validationStatus = validateForm();
    if (validationStatus === true) {
      createAlert("Success", "Form Validation is Successful", "success");
      let deployContract = new props.appState.web3.eth.Contract(
        JSON.parse(createTokenABI)
      );
      deployContract
        .deploy({
          data: createTokenBC,
          arguments: [
            componentState.tokenDecimals,
            componentState.tokenSupply,
            componentState.tokenName,
            componentState.tokenSymbol,
          ],
        })
        .send(
          {
            from: props.appState.account,
          },
          function (error, transactionHash) {
            if (transactionHash) {
              console.log("Txn Hash acquired", transactionHash);
            } else {
              console.log("Error occured while deployment", error);
            }
          }
        )
        .on("error", function (error) {
          console.log("Error occured while deployment", error);
        })
        .on("transactionHash", function (transactionHash) {
          console.log("Txn Hash acquired", transactionHash);
        })
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress); // contains the new contract address
          setComponentState((prevState) => {
            return {
              ...prevState,
              newTokenAddress: receipt.contractAddress,
              tokenCreated: true,
            };
          });
          createAlert("Deployment", "Token Deployment Successful", "success");
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          if (confirmationNumber === 1) {
            console.log("Txn Confirmed", receipt);
          }
        });
    }
  };

  const createAlert = (header, message, type) => {
    let tempAlertArray = componentState.alertArray;

    let alertBox = (
      <div className={`alert alert-${type} shadow-lg`}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            {header}: {message}
          </span>
        </div>
      </div>
    );

    tempAlertArray.push(alertBox);

    setComponentState((prevState) => {
      return {
        ...prevState,
        alertArray: tempAlertArray,
      };
    });
  };

  useEffect(() => {
    console.log("Change detected in alertarray", componentState.alertArray);
    if (componentState.alertArray.length > 0) {
      setTimeout(() => {
        let tempAlertArray = componentState.alertArray;
        tempAlertArray.shift();
        setComponentState((prevState) => {
          return {
            ...prevState,
            alertArray: tempAlertArray,
          };
        });
      }, 4000);
    }
  }, [componentState]);

  useEffect(() => {
    setComponentState((prevState) => {
      return {
        ...prevState,
        tokenName: "",
        tokenSymbol: "",
        tokenSupply: 0,
        tokenDecimals: 0,
        alertHeader: null,
        alertMessage: null,
        alertStatus: false,
        alertArray: [],
        tokenCreated: false,
        newTokenAddress: null,
      };
    });
  }, []);

  return (
    <>
      <div className="alert-container">{componentState.alertArray}</div>
      <div className="flex flex-col p-8 w-full">
        <div className="flex flex-row p-2 w-full space-x-8 bg-primary/20 rounded-full px-6">
          <div className="flex flex-row">
            <p className="tracking-wide uppercase text-black tracking-widest text-sm">
              Trending
            </p>
            <img className="w-6" src="/images/trending_icon.png"></img>
          </div>
          <div className="flex flex-row justify-between w-full px-4">
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold text-sm">#1</p>
              <p className="text-black font-thin text-sm">MSI</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full h-full justify-center px-12">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="font-bold text-5xl text-black">
                  Mint a New Token
                </p>
                <p className="font-light text-base text-black mt-2">
                  Standard Token Minting Fees 0.2 ETH
                </p>
              </div>
              <div>
                {props.appState.isWeb3 === false ? (
                  <button
                    className="btn capitalize"
                    onClick={() => props.ConnectWallet()}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <div className="bg-primary rounded-lg p-4 text-white font-bold">
                    {props.appState.account.slice(0, 8) +
                      "..." +
                      props.appState.account.slice(34, 40)}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col py-2 px-2 w-full mt-6 space-y-8">
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Token Name"
                  class="input w-full drop-shadow-xl rounded-full"
                  onInput={(e) => onInputChange("tokenName", e)}
                />
                <p className="ml-4 text-xs font-light text-black">
                  Standard Token Minting Fees 0.2 ETH
                </p>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Token Symbol"
                  class="input w-full drop-shadow-xl rounded-full"
                  onInput={(e) => onInputChange("tokenSymbol", e)}
                />
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Token Decimals"
                  class="input w-full drop-shadow-xl rounded-full"
                  onInput={(e) => onInputChange("tokenDecimals", e)}
                />
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Total Supply"
                  class="input w-full drop-shadow-xl rounded-full"
                  onInput={(e) => onInputChange("tokenSupply", e)}
                />
              </div>
            </div>
            <div className="flex flex-row justify-end mt-6 mr-4 justify-between">
              {componentState.tokenCreated === true ? (
                <div className="flex flex-col capitalize text-white w-60 bg-green-500 rounded-lg items-center self-center p-3">
                  <p className="text-white">Token Successfully Created</p>
                </div>
              ) : null}
              <div className="flex flex-col space-y-2 items-center">
                {componentState.tokenCreated === false ? (
                  <>
                    <button
                      className="btn capitalize text-white w-60"
                      onClick={() => createToken()}
                    >
                      Create Token
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn capitalize text-white w-60"
                      onClick={() =>
                        navigator.clipboard.writeText(props.appState.account)
                      }
                    >
                      Copy Contract Address
                    </button>
                    <p className="text-black font-bold">
                      {componentState.newTokenAddress}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateToken;
