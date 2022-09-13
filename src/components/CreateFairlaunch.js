import React from "react";
import { useState, useEffect } from "react";

function CreatePreSale(props) {
  const [componentState, setComponentState] = useState({
    stage: 1,
    vesting: false,
  });

  const onChangeValue = (event) => {
    console.log(event.target.value);
  };

  return (
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
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col p-6 mt-4 space-y-2 px-10">
          <div className="flex flex-row">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <p
                  className={
                    componentState.stage === 1
                      ? "font-bold text-black"
                      : "font-bold text-black/30"
                  }
                >
                  Verify Token
                </p>
                <p
                  className={
                    componentState.stage === 1
                      ? "font-light text-xs text-black w-36 break-words"
                      : "font-light text-xs text-black/30 w-36 break-words"
                  }
                >
                  Enter the Token Address and Verify
                </p>
              </div>
              <img
                className="h-20 self-start"
                src="/images/down_arrow.svg"
              ></img>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <p
                  className={
                    componentState.stage === 2
                      ? "font-bold text-black"
                      : "font-bold text-black/30"
                  }
                >
                  DeFi Launchpad Info
                </p>
                <p
                  className={
                    componentState.stage === 2
                      ? "font-light text-xs text-black w-36 break-words"
                      : "font-light text-xs text-black/30 w-36 break-words"
                  }
                >
                  Enter the launchpad information that you want to raise , that
                  should be enter all details about your presale
                </p>
              </div>
              <img
                className="h-20 self-start"
                src="/images/down_arrow.svg"
              ></img>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <p
                  className={
                    componentState.stage === 3
                      ? "font-bold text-black"
                      : "font-bold text-black/30"
                  }
                >
                  Add Additional Info
                </p>
                <p
                  className={
                    componentState.stage === 3
                      ? "font-light text-xs text-black w-36 break-words"
                      : "font-light text-xs text-black/30 w-36 break-words"
                  }
                >
                  Let people know who you are
                </p>
              </div>
              <img
                className="h-20 self-start"
                src="/images/down_arrow.svg"
              ></img>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <p
                  className={
                    componentState.stage === 4
                      ? "font-bold text-black"
                      : "font-bold text-black/30"
                  }
                >
                  Finish
                </p>
                <p
                  className={
                    componentState.stage === 4
                      ? "font-light text-xs text-black w-36 break-words"
                      : "font-light text-xs text-black/30 w-36 break-words"
                  }
                >
                  Review Your Info
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-6 mt-4 space-y-6 w-full px-12">
          {componentState.stage === 1 ? (
            <>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Enter Token Address"
                  class="input w-full drop-shadow-xl rounded-full "
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
                />
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Token Decimals"
                  class="input w-full drop-shadow-xl rounded-full"
                />
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Token Supply"
                  class="input w-full drop-shadow-xl rounded-full"
                />
              </div>
            </>
          ) : componentState.stage === 2 ? (
            <>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Enter Token Address"
                  class="input w-full drop-shadow-xl rounded-full "
                />
                <p className="ml-4 text-xs font-light text-black">
                  Standard Token Minting Fees 0.2 ETH
                </p>
              </div>

              <div className="flex flex-row w-full">
                <p className="ml-6 text-base font-bold text-black mr-12">
                  Sale Type
                </p>
                <input
                  type="radio"
                  name="radio-2"
                  class="radio radio-primary"
                  checked
                />
                <p className="ml-6 text-base font-semibold text-black mr-12">
                  Public
                </p>
                <input
                  type="radio"
                  name="radio-2"
                  class="radio radio-primary"
                />
                <p className="ml-6 text-base font-semibold text-black mr-12">
                  Whitelist Only
                </p>
              </div>
              {/* <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Soft Cap"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Hard Cap"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div> */}
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Minimum Buy Threshold (ETH)"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Maximum Buy Threshold (ETH)"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <div class="dropdown">
                    <div className="dropdown-btn drop-shadow-xl rounded-full">
                      <label
                        tabindex="0"
                        class="btn dropshadow-label rounded-full capitalize"
                      >
                        Target DEX (AMM)
                      </label>
                    </div>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="text-black hover:bg-primary/50">
                          PancakeSwap
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <div class="dropdown">
                    <div className="dropdown-btn drop-shadow-xl rounded-full">
                      <label
                        tabindex="0"
                        class="btn dropshadow-label rounded-full capitalize"
                      >
                        Refund Type
                      </label>
                    </div>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="text-black hover:bg-primary/50">Burn</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="PCS Listing Rate"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="PCS Liquidity Rate"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Liquidity Lockup Time"
                  class="input w-full drop-shadow-xl rounded-full "
                />
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Start Time"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="End Time"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div>
              <div
                className="flex flex-row w-full"
                onChange={(e) => onChangeValue(e)}
              >
                <p className="ml-6 text-base font-bold text-black mr-12">
                  Vesting
                </p>
                <input
                  type="radio"
                  name="radio-3"
                  class="radio radio-primary"
                  onChange={(e) => onChangeValue(e)}
                  onInput={(e) => {
                    console.log("name0", componentState.vesting);
                    setComponentState({ ...componentState, vesting: true });
                  }}
                  // checked={componentState.vesting}
                />
                <p className="ml-6 text-base font-semibold text-black mr-12">
                  Yes
                </p>
                <input
                  type="radio"
                  name="radio-3"
                  class="radio radio-primary"
                  onChange={(e) => onChangeValue(e)}
                  onInput={(e) => {
                    console.log("name", componentState.vesting);
                    setComponentState({ ...componentState, vesting: false });
                  }}
                  // checked={componentState.vesting}
                />
                <p className="ml-6 text-base font-semibold text-black mr-12">
                  No
                </p>
              </div>
              {componentState.vesting === true ? (
                <>
                  <div className="flex flex-row space-x-6">
                    <div className="flex flex-col w-full space-y-1">
                      <input
                        type="text"
                        placeholder="TGE Date (UTC Time)"
                        class="input w-full drop-shadow-xl rounded-full "
                      />
                    </div>
                    <div className="flex flex-col w-full space-y-1">
                      <input
                        type="text"
                        placeholder="TGE Percent"
                        class="input w-full drop-shadow-xl rounded-full "
                      />
                    </div>
                  </div>
                  <div className="flex flex-row space-x-6">
                    <div className="flex flex-col w-full space-y-1">
                      <input
                        type="text"
                        placeholder="Cycle (days)"
                        class="input w-full drop-shadow-xl rounded-full "
                      />
                    </div>
                    <div className="flex flex-col w-full space-y-1">
                      <input
                        type="text"
                        placeholder="Cycle Release Percent"
                        class="input w-full drop-shadow-xl rounded-full "
                      />
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : componentState.stage === 3 ? (
            <>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Liquidity Lockup Time"
                  class="input w-full drop-shadow-xl rounded-full "
                />
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input
                  type="text"
                  placeholder="Project Description"
                  class="input w-full drop-shadow-xl rounded-full "
                />
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Website Link"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Github Link"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Twitter Link"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Reddit Link"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Telegram Link"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input
                    type="text"
                    placeholder="Discord Link"
                    class="input w-full drop-shadow-xl rounded-full "
                  />
                </div>
              </div>
            </>
          ) : componentState.stage === 4 ? (
            <>
              <div className="flex flex-col w-full space-y-1 drop-shadow-xl">
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Token Name</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Token Symbol</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Token Decimals</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Token Supply</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Token Address</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Sale Type</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Presale Rate</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                {/* <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Soft Cap</p>
                  <p className="text-black ">Token Name</p> 
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Hard Cap</p>
                   <p className="text-black ">Token Name</p>
                </div> */}
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Minimum Buy Threshold</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Maximum Buy Threshold</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Target DEX</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Refund Type</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">PCS Listing Rate</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">PCS Liquidity</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Lockup Time</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Start Time(UTC)</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">End Time(UTC)</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Vesting</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Website</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-black font-bold">Twitter</p>
                  {/* <p className="text-black ">Token Name</p> */}
                </div>
              </div>
            </>
          ) : null}
          <div className="flex flex-row justify-between mr-4">
            <>
              {componentState.stage !== 4 ? (
                <>
                  {componentState.stage !== 1 ? (
                    <button
                      className="btn capitalize text-white w-40 mt-8"
                      onClick={() =>
                        setComponentState((prevState) => {
                          return {
                            ...prevState,
                            stage: prevState.stage - 1,
                          };
                        })
                      }
                    >
                      Back
                    </button>
                  ) : (
                    <button
                      className="btn capitalize text-white w-40 mt-8"
                      disabled
                    >
                      Back
                    </button>
                  )}
                  {componentState.stage !== 4 ? (
                    <button
                      className="btn capitalize text-white w-40 mt-8"
                      onClick={() =>
                        setComponentState((prevState) => {
                          return {
                            ...prevState,
                            stage: prevState.stage + 1,
                          };
                        })
                      }
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="btn capitalize text-white w-40 mt-8"
                      disabled
                    >
                      Next
                    </button>
                  )}
                </>
              ) : (
                <div className="flex flex-row justify-end mr-4">
                  <button className="btn capitalize text-white w-40 mt-8">
                    Submit
                  </button>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePreSale;
