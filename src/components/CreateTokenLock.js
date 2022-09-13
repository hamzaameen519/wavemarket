import React from "react";
import { useState, useEffect } from "react";

function CreateTokenLock(props) {
  const [componentState, setComponentState] = useState({
    vesting: false,
  });

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
      <div className="flex flex-row justify-between w-full p-4 pt-8">
        <p className="text-black font-bold text-3xl">Create Token Lock</p>
      </div>
      <div className="flex flex-col p-6 mt-4 space-y-6 w-full px-12">
        <>
          <div className="flex flex-col w-full space-y-1">
            <input
              type="text"
              placeholder="Token"
              class="input w-full drop-shadow-xl rounded-full "
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <input
              type="text"
              placeholder="Title"
              class="input w-full drop-shadow-xl rounded-full "
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <input
              type="text"
              placeholder="Amount"
              class="input w-full drop-shadow-xl rounded-full "
            />
          </div>

          <div className="flex flex-col w-full space-y-1">
            <input
              type="text"
              placeholder="Lock Until Time (UTC)"
              class="input w-full drop-shadow-xl rounded-full "
            />
          </div>
          <div className="flex flex-row w-full">
            <p className="ml-6 text-base font-bold text-black mr-12">Vesting</p>
            <input
              type="radio"
              name="radio-2"
              class="radio radio-primary"
              onInput={(e) => {
                setComponentState({ ...componentState, vesting: true });
              }}
            />
            <p className="ml-6 text-base font-semibold text-black mr-12">Yes</p>
            <input
              type="radio"
              name="radio-2"
              class="radio radio-primary"
              onInput={(e) => {
                setComponentState({ ...componentState, vesting: false });
              }}
            />
            <p className="ml-6 text-base font-semibold text-black mr-12">No</p>
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

          <div className="flex flex-row justify-end mr-4">
            <button className="btn capitalize text-white w-40 mt-8">
              Lock
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default CreateTokenLock;
