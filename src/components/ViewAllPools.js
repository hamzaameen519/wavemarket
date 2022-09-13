import React from "react";

function ViewAllPools(props) {
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
        <p className="text-black font-bold text-3xl">All Pools</p>
      </div>
      <div className="flex flex-row p-10">
        <div className="flex flex-col space-y-3 p-4 drop-shadow-xl bg-white rounded-lg">
          <p className="text-black font-bold text-xl">AntiRugN</p>
          <p className="text-black font-thin text-xs">1 BNB = 584 ARN</p>
          <p className="text-black font-thin text-xs">Soft / Hard</p>
          <p className="text-black font-thin text-xl">30 BNB - 180 BNB</p>
          <progress class="progress w-56" value="70" max="100"></progress>
          <div className="flex flex-row justify-between">
            <p className="text-black font-light text-xs">Liquidity %</p>
            <p className="text-black font-light text-xs">70%</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-black font-light text-xs">Lockup Time</p>
            <p className="text-black font-light text-xs">180 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllPools;
